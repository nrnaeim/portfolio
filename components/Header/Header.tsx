"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { navbarPages } from "../Constants";
import styles from "./Header.module.css";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const pathName = usePathname();

    const handleMenuOpen = () => setIsMenuOpen((current) => !current);

    return (
        <header className={styles.header}>
            <nav className={styles.container}>
                {/*Logo ane Name*/}
                <div className={styles.logo}>
                    <Link href="/">
                        <Image src="/assets/logo.svg" alt="logo" width={40} height={40} />
                    </Link>
                    <h1 className="text-white">Niemur Rahman</h1>
                </div>

                {/* Menu for small screen*/}
                <div className={`${styles.sm_menu_container} ${isMenuOpen ? "left-0" : "-left-full"}`}>
                    <div className="flex flex-col">
                        {navbarPages.map((page) => (
                            <Link
                                key={page.href}
                                href={page.href}
                                className={`${styles.sm_nav_link} ${pathName === page.href ? "text-brand-400" : ""}`}
                            >
                                {page.label}
                            </Link>
                        ))}
                    </div>

                    <button className={`${styles.resume_btn}`}>Resume</button>
                </div>

                {/*Menu open close button*/}
                <div className={styles.sm_menu_open_close_btn}>
                    <FaBars
                        className={`${isMenuOpen ? "hidden" : "block"} size-6 fill-white`}
                        onClick={handleMenuOpen}
                    />
                    <IoClose
                        className={`${isMenuOpen ? "block" : "hidden"} size-7 fill-white`}
                        onClick={handleMenuOpen}
                    />
                </div>

                {/*Menu for large screen*/}
                <div className={`${styles.lg_menu_container}`}>
                    {navbarPages.map((page) => (
                        <Link
                            key={page.href}
                            href={page.href}
                            className={`${styles.lg_nav_link} ${pathName === page.href ? `${styles.active}` : ""}`}
                        >
                            {page.label}
                        </Link>
                    ))}
                </div>

                {/* Resume button for large screen */}
                <div className="hidden md:flex">
                    <button className={`${styles.resume_btn}`}>Resume</button>
                </div>
            </nav>
        </header>
    );
}
