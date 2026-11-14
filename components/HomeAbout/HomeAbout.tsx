import Image from "next/image";
import styles from "./HomeAbout.module.css";

type Skill = {
    skill: string;
    stuck: string;
};

const skills: Skill[] = [
    { skill: "Node.js · NestJS · Next.js", stuck: "Full-stack JavaScript developer" },
    { skill: "Digital Marketing", stuck: "Learning & building skills" },
    { skill: "Problem Solver", stuck: "Turning ideas into products" },
];
export default function HomeAbout() {
    return (
        <div className={styles.home_about}>
            <div className={styles.container}>
                <div className={styles.intro_container}>
                    <div className={styles.intro}>
                        <h1 className="text-2xl font-bold">About Me</h1>
                        <h2 className="text-brand-400">Full Stack Developer & Digital Marketer</h2>
                        <p className="lg:text-[16px]">
                            I'm Niemur Rahman Naeim, a passionate full-stack JavaScript developer with hands-on
                            experience in Node.js, React, Next.js, Express and NestJS. I started by building web
                            applications and grew into scalable systems, APIls and modern frontends. Now I'm expanding
                            my skills into digital marketing to create products that not only work well, but also reach
                            the right audience.
                            <br /> <br />I value clean code, continuous learning and real-world impact. I'm looking for
                            opportunities to work with innovative teams or clients who want modern web apps and
                            high-converting pages.
                        </p>
                        <button className={styles.resume_btn}>Download Resume</button>
                    </div>
                    <div className={styles.photo_container}>
                        <Image
                            src={"/assets/md-niemur-rahman-naeim-professional.png"}
                            loading="lazy"
                            alt="md.-niemur-rahman-naeim"
                            width={400}
                            height={1448}
                            className={styles.photo}
                        />
                    </div>
                </div>
            </div>
            <div className="brand-container">
                <ul className={styles.list}>
                    {skills.map((skill, idx) => (
                        <li className={styles.list_item} key={idx}>
                            <div className={styles.icon}></div>
                            <div>
                                <h3 className="font-semibold">{skill.skill}</h3>
                                <p>{skill.stuck}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
