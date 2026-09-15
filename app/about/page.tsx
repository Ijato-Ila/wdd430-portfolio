import SkillsSection from "../../components/SkillsSection";

export default function About() {
    return (
        <main className="min-h-screen bg-[#FFF5F8] text-[#111111] px-4 py-12">
            <section className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-[#383875]">
                    About Me
                </h1>

                <p className="text-lg text-[#3A3A3A] mb-4">
                    My name is Ijato Precious-jane Okpen. I am a software development
                    student interested in building practical and user-friendly web
                    applications.
                </p>

                <p className="text-lg text-[#3A3A3A]">
                    I enjoy learning new technologies and using what I learn to create
                    projects that solve real problems.
                </p>

                <SkillsSection
                    title="Skills & Technologies"
                    skills={[
                        "Python",
                        "JavaScript",
                        "TypeScript",
                        "HTML",
                        "CSS",
                        "React",
                        "Next.js",
                        "Node.js",
                        "Express.js",
                        "EJS",
                        "PostgreSQL",
                        "SQLite",
                        "SQL",
                        "REST APIs",
                        "CRUD Operations",
                        "Git & GitHub",
                        "JSON",
                    ]}
                />
            </section>
        </main>
    );
}