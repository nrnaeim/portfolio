import Link from "next/link";
import styles from "./Cta.module.css";
import { Caveat } from "next/font/google";

const caveat = Caveat({
    weight: "400",
    style: "normal",
    subsets: ["latin"],
});

export default function Cta() {
    return (
        <div className={styles.cta_container}>
            <div className={styles.container}>
                <div className={styles.ctas}>
                    <div className="flex flex-col gap-5 sm:flex-8">
                        <h2 className="h_2">Have a project in mind?</h2>
                        <p>
                            Let’s build something amazing together. I’m available for freelance projects and full-time
                            opportunities.
                        </p>
                        <div className="flex flex-col gap-5 sm:flex-row">
                            <Link href={"/contact"} className={styles.cta_get_btn}>
                                Get In Touch
                            </Link>
                            <Link href={"/"} className={styles.cta_resume_btn}>
                                Download Resume
                            </Link>
                        </div>
                    </div>

                    <div className="hidden justify-center-safe items-center sm:flex sm:flex-4">
                        <p className={`text-center text-3xl font-semibold ${caveat.className}`}>
                            Let’s talk — <br /> I’m here!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
