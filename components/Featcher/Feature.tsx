import React from "react";
import styles from "./Feature.module.css";

type Feature = { heading: string; text: string };
const features: Feature[] = [
    { heading: "Full-Stack Expertise", text: "End-to-end development with modern technologies." },
    { heading: "Marketing Mindset", text: "I understand user behavior, SEO and growth strategies." },
    { heading: "Clean & Scalable Code", text: "Best practices, maintainable and production-ready." },
    { heading: "On-Time Delivery", text: "Communicate clearly and deliverresults." },
];

export default function Feature() {
    return (
        <div className={styles.feature}>
            <div className={styles.container}>
                <h2 className="h_2 text-ink-500">Why Work With Me?</h2>
                <ul className={styles.feature_list}>
                    {features.map((feature, idx) => (
                        <li key={idx} className={styles.feature_list_item}>
                            <div className={styles.icon}>
                                <div></div>
                            </div>
                            <div>
                                <h4 className="h_4 text-ink-500">{feature.heading}</h4>
                                <p className="text-ink-100">{feature.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
