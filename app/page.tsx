import ProjectList from "../components/ProjectList";

const projects = [
  {
    title: "Book Discovery & Tracker",
    description:
      "A web application that helps readers discover books and organize their reading activity. It uses the Google Books API to provide featured books and search results, while users can view book details, track reading status, maintain a reading list, and filter books by category, author, and publication year.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Google Books API",
      "Browser Storage",
    ],
    link: "https://ijato-ila.github.io/wdd330-MyFinalProject-BookTracker/",
  },
  {
    title: "Volunteer Management Platform",
    description:
      "A full-stack web application that helps users discover and participate in community service opportunities offered by different organizations. Users can browse organizations, projects, and categories, create accounts, access a dashboard, and volunteer for projects.",
    technologies: [
      "Node.js",
      "Express.js",
      "EJS",
      "PostgreSQL",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    link: "https://cse340-project-6868.onrender.com",
  },
  {
    title: "Express Task Manager 3.0",
    description:
      "A full-stack task management web application that allows users to create, view, update, complete, and delete tasks through a browser-based interface. The application uses Express.js and EJS with SQLite for persistent relational data storage and demonstrates CRUD operations, SQL queries, recursion, ES6 JavaScript features, and error handling.",
    technologies: [
      "Node.js",
      "Express.js",
      "SQLite3",
      "EJS",
      "JavaScript",
      "HTML",
      "CSS",
      "SQL",
    ],
    link: "https://github.com/Ijato-Ila/task-manager-3.0.git",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF5F8] text-[#111111] px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">
          My Portfolio
        </h1>

        <p className="text-lg text-[#3A3A3A] max-w-2xl mx-auto">
          I&apos;m Ijato Precious-jane Okpen, a software development student
          learning to build practical web applications with modern
          technologies.
        </p>
      </section>

      <ProjectList projects={projects} />
    </main>
  );
}