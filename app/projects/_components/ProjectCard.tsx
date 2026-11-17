import { cn } from "@/app/_utils/utils";
import Image from "next/image";
import Link from "next/link";

export type Project = {
    name: string;
    image: string;
    short_description: string;
    technologies: string[];
};

type Porps = {
    project: Project;
    className?: string;
};

export default function ProjectCard({ project, className }: Porps) {
    return (
        <div className={cn("w-full p-5 border border-brand-light-400 rounded-sm flex flex-col gap-5", className)}>
            <Image src={project.image} alt={project.name} width={500} height={500} className="" />
            <Link href={"/"}>
                <h3 className="h_3"> {project.name}</h3>
            </Link>
            <p>{project.short_description}</p>
            <ul className="flex gap-3 justify-between flex-wrap">
                {project.technologies.map((tech, idx) => (
                    <li
                        key={idx}
                        className={cn(
                            "bg-brand-light-200 text-brand-500 border-brand-light-400 px-3 py-1 rounded-sm text-center",
                        )}
                    >
                        {tech}
                    </li>
                ))}
            </ul>

            <Link href={"/"} className="text-brand-500 text-md">
                View Details →
            </Link>
        </div>
    );
}
