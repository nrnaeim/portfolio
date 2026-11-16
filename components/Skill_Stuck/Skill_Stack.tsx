import React from "react";
import styles from "./Skill_Stack.module.css";

type Skill = {
    name: string;
    level: string;
};

type Stack = {
    name: string;
    skills: Skill[];
};

const stacks: Stack[] = [
    {
        name: "Frontend",
        skills: [
            { name: "HTML5", level: "Expert" },
            { name: "CSS", level: "Expert" },
            { name: "Tailwind", level: "Expert" },
            { name: "React", level: "Expert" },
            { name: "Next.js", level: "Expert" },
            { name: "TypeScript", level: "Porficient" },
        ],
    },
    {
        name: "Backend",
        skills: [
            { name: "Node.js", level: "Expert" },
            { name: "Express", level: "Expert" },
            { name: "NestJS", level: "Expert" },
            { name: "REST APIs", level: "Expert" },
        ],
    },
    {
        name: "Databases",
        skills: [
            { name: "MongoDB", level: "Expert" },
            { name: "PostgreSQL", level: "Expert" },
            { name: "Redis", level: "Expert" },
        ],
    },
];

export default function Skill_Stack() {
    return (
        <div className={styles.skill_stack}>
            <div className={styles.container}>
                <div className={`${styles.heading}`}>
                    <h2 className="h_2">Skills & Tech Stack</h2>
                    <p className="text-ink-100">Technologies I work with</p>
                </div>

                <div className={styles.stacks_container}>
                    {stacks.map((stack, id) => (
                        <div className={styles.stack_container} key={id}>
                            <h4 className="text-md text-brand-500 font-semibold">{stack.name}</h4>
                            <div className={styles.skills_container}>
                                {stack.skills.map((skill, idx) => (
                                    <div className={styles.skill_container} key={idx}>
                                        <div className="flex items-center gap-5 ">
                                            <div className="size-5 rounded-sm bg-brand-100"></div>
                                            <div className="felx justify-center items-center"> {skill.name}</div>
                                        </div>
                                        <div
                                            className={`${styles.skill} 
                                            ${skill.level === "Expert" ? "bg-brand-700" : "bg-brand-200 text-brand-500"}`}
                                        >
                                            {skill.level}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
