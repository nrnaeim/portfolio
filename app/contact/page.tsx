"use client";

import { SubmitEvent, useState } from "react";
import { toast } from "react-toastify";
import styles from "./Contact.module.css";

type Contact = {
    method: string;
    address: string;
};

const contacts: Contact[] = [
    { method: "Phone", address: "+880 1721-160757" },
    { method: "Email", address: "nrnaeim@gmail.com" },
    { method: "Location", address: "Sadarpur Bazar, Sadarpur-7820, Faridpur" },
];

export default function Contact() {
    const [name, setName] = useState<null | string>(null);
    const [email, setEmail] = useState<null | string>(null);
    const [subject, setSubject] = useState<null | string>(null);
    const [message, setMessage] = useState<null | string>(null);

    async function onSubmitHandle(e: SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        toast.error("Please filled required field");

        if (!name || !email || !subject || !message) {
            toast.error("Please filled required field");
            return;
        }

        console.log(name, email, subject, message);
    }

    return (
        <div className={styles.contact}>
            <div className={styles.container}>
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-semibold">Contact</h1>
                    <p className="text-ink-100">
                        Have a project, opportunity or just want to say hi? I’d love to hear from you.
                    </p>
                </div>

                <div className={styles.contact_info}>
                    <div className={styles.physical_contact}>
                        <ul className={styles.list}>
                            {contacts.map((el) => (
                                <li key={el.address} className={styles.list_item}>
                                    <div className={styles.icon}>
                                        <div></div>
                                    </div>
                                    <div className="flex flex-col text-ink-300">
                                        <span className="text-sm">{el.method}</span>
                                        <h3 className="text-md font-semibold">{el.address}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className={styles.google_map}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14638.363104509195!2d90.02037592019964!3d23.47522127853598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375580cce1aaaaab%3A0xd58e8c53d95cae79!2z4Ka44Kam4Kaw4Kaq4KeB4KawIOCmrOCmvuCmnOCmvuCmsA!5e0!3m2!1sen!2sbd!4v1794591446401!5m2!1sen!2sbd"
                                loading="lazy"
                                className="w-full min-h-60 rounded-md"
                            ></iframe>
                        </div>
                    </div>

                    <form onSubmit={onSubmitHandle} className={styles.form}>
                        <h2 className="text-xl font-semibold">Send a message</h2>
                        <div className="flex flex-col gap-5 md:flex">
                            <div className={styles.input_container}>
                                <label htmlFor="name" className={styles.input_label}>
                                    Name
                                </label>
                                <input
                                    required
                                    type="text"
                                    id="name"
                                    placeholder="Enter your name"
                                    onChange={(e) => setName(e.target.value)}
                                    className={styles.form_input}
                                />
                            </div>
                            <div className={styles.input_container}>
                                <label htmlFor="email" className={styles.input_label}>
                                    Email
                                </label>
                                <input
                                    required
                                    type="email"
                                    id="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="example@domain.com"
                                    className={styles.form_input}
                                />
                            </div>
                        </div>
                        <div className={styles.input_container}>
                            <label htmlFor="subject" className={styles.input_label}>
                                Subject
                            </label>
                            <input
                                required
                                type="text"
                                id="subject"
                                placeholder="Your message subject"
                                onChange={(e) => setSubject(e.target.value)}
                                className={styles.form_input}
                            />
                        </div>
                        <div className={styles.input_container}>
                            <label htmlFor="message" className={styles.input_label}>
                                Message
                            </label>
                            <textarea
                                required
                                id="message"
                                rows={6}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Your message"
                                className={styles.form_input}
                            />
                        </div>
                        <button
                            type="submit"
                            className="block w-full bg-brand-500 rounded-md p-3 text-white cursor-pointer"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
