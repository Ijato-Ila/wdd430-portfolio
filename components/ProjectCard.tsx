interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
}

export default function ProjectCard({
    title,
    description,
    technologies,
    link,
}: ProjectCardProps) {
    return (
        <article className="p-5 border border-[#E94878] bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2 text-[#383875]">
                {title}
            </h3>

            <p className="text-[#3A3A3A] mb-3">
                {description}
            </p>

            <p className="text-sm text-[#3A3A3A]">
                <strong>Technologies:</strong> {technologies.join(", ")}
            </p>

            {link && (
                <p className="mt-3">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#E94878] hover:underline font-medium"
                    >
                        View Project
                    </a>
                </p>
            )}
        </article>
    );
}