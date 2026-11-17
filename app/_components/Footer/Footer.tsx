import Link from "next/link";
import Image from "next/image";
import { navbarPages } from "../Constants";
import styles from "./Footer.module.css";

type SocialMedia = {
    name: string;
    href: string;
};

const social_media: SocialMedia[] = [
    { name: "GitHub", href: "https://github.com/nrnaeim?tab=repositories" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/nrnaeim/" },
    { name: "Facebook", href: "https://www.facebook.com/mnrnaeim" },
    // { name: "", href: "" },
    // { name: "", href: "" },
    // { name: "", href: "" },
    // { name: "", href: "" },
];

const year = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2 justify-start items-end">
                            <Image src="/assets/logo.svg" alt="logo" width={30} height={30} className="inline-block" />
                            <h1 className="text-lg">Md. Niemur Rahman Naeim</h1>
                        </div>
                        <span className="">Full Stack JavaScript Developer</span>
                    </div>

                    {/** Pages */}
                    <div className="grid grid-cols-2 gap-3 lg:flex">
                        {navbarPages.map((page) => (
                            <Link key={page.href} href={page.href} className="col-span-1">
                                {page.label}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className={styles.copyright_social}>
                    <span>{`© ${year} Niemur Rahman Naeim. All rights reserved.`}</span>
                    <ul className={styles.social_links}>
                        {social_media.map((item) => (
                            <li key={item.href}>
                                <Link target="_blank" href={item.href}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}
