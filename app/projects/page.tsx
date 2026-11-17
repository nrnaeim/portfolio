import Container from "../_components/Container/Container";
import ProjectCard, { type Project } from "./_components/ProjectCard";
import { cn } from "../_utils/utils";

const projects: Project[] = [
    {
        name: "TaskFlow Pro",
        short_description:
            "Full-stack task management web app withreal-time collaboration, authentication and team features.",
        image: "/assets/project_placeholder.png",
        technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind"],
    },

    {
        name: "TaskFlow Pro",
        short_description:
            "Full-stack task management web app withreal-time collaboration, authentication and team features.",
        image: "/assets/project_placeholder.png",
        technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind"],
    },
    {
        name: "TaskFlow Pro",
        short_description:
            "Full- stack task management web app withreal-time collaboration, authentication and team features.",
        image: "/assets/project_placeholder.png",
        technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind"],
    },
];

export default function Projects() {
    return (
        <Container>
            <div className={"w-full flex flex-col gap-10"}>
                <div className="flex flex-col gap-2">
                    <h2 className="h_2">My Projects</h2>
                    <p className="text-ink-100">Real-world projects built with modern technologies.</p>
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} project={project} className="w-full col-span-1" />
                    ))}
                </div>
            </div>
        </Container>
    );
}
