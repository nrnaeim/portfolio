import Image from "next/image";
import styles from "./HomeAbout.module.css";

type Skill = {
    skill: string;
    stuck: string;
};

const skills: Skill[] = [{ skill: "skill", stuck: "stuck" }];

export default function HomeAbout() {
    return (
        <div className={styles.home_about}>
            <div className={styles.container}>
                <div className={styles.intro_container}>
                    <div className={styles.intro}>
                        <h1 className="text-2xl font-bold">About Me</h1>
                        <h2 className="text-brand-400">Full Stack Developer & Digital Marketer</h2>
                        <p>
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
                            width={1000}
                            height={1000}
                            className={styles.photo}
                        />
                    </div>
                </div>

                <div>
                    <ul>
                        {skills.map((skill) => (
                            <li key={skill.skill}>{skill.skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
