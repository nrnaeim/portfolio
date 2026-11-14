import Image from "next/image";
import styles from "./Hero.module.css";
import Link from "next/link";

export type Skill = {
    tech_stack: string;
    tools: string[];
};

const feature_skills = ["Node.js", "Express.js", "NestJS", "MongoDB", "React", "Next.js"];

export default function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.intro}>
                    <div className={styles.information}>
                        <h5 className="text-brand-200"> Full-Stack JavaScript Developer</h5>
                        <h1 className="text-[34px] text-brand-200 font-bold">
                            <span className="text-white">Hi, I’m</span> Niemur Rahman
                        </h1>
                        <p className="text-justify">
                            I build modern web applications with Node.js,
                            <br />
                            React, Next.js, Express and NestJS. I’m also <br />
                            Digital Marketing expert to help products grow.
                        </p>

                        <div className="flex flex-col gap-5 md:flex-row">
                            <Link href="/projects" className={`btn ${styles.view_project_btn}`}>
                                View My Projects
                            </Link>

                            <Link href="/contact" className={`btn ${styles.get_in_touch_btn}`}>
                                Get In Touch
                            </Link>
                        </div>
                    </div>
                    <ul className={styles.skill_list}>
                        {feature_skills.map((skill) => (
                            <li className={styles.skill} key={skill}>
                                <Image
                                    className="block  rounded-[50%] bg-white p-2"
                                    src={`/assets/tools/${skill}.svg`}
                                    alt={skill}
                                    width={40}
                                    height={40}
                                    loading="eager"
                                />
                                <span>{skill}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                {/** Image */}
                <div className={`${styles.profile_photo}`}>
                    <Image
                        src={"/assets/md-niemur-rahman-naeim.png"}
                        alt="md-niemur-rahman-naeim"
                        width={320}
                        height={600}
                        loading="eager"
                        className={styles.photo}
                    />
                </div>
            </div>
        </div>
    );
}
