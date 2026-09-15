interface SkillsSectionProps {
    title: string;
    skills: string[];
}

export default function SkillsSection({
    title,
    skills,
}: SkillsSectionProps) {
    return (
        <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4 text-[#383875]">
                {title}
            </h2>

            <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="bg-[#F8C8DC] text-[#111111] px-4 py-2 rounded-full border border-[#E94878]"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
}