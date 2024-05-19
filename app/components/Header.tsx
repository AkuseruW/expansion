"use client";
import Image from 'next/image';
import { useState } from 'react';
import NavigationLink from './NavigationLink';
import style from '../styles/header.module.scss';


// Defining navigation links as an array of objects
const navLinks = [
    { name: "Bienvenue", href: "/" },
    { name: "Nos métiers", href: "#" },
    { name: "Notre méthodologie", href: "#" },
    { name: "L’agence", href: "#" },
    { name: "Blog", href: "#" },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false); // State to track if the menu is open

    // Function to toggle the menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={style.headerContainer}>
            <div className={`${style.headerInner} container`}>
                {/* Logo image */}
                <div className={style.logoContainer}>
                    <Image src="/logo.svg" alt="Logo" width={184.7} height={81.76} priority />
                </div>
                <nav className={`${style.navbar} ${menuOpen ? style.open : ''}`}>
                    <ul className={`${style.navLinks} ${menuOpen ? style.open : ''}`}>
                        {/* Map through each link and render it */}
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <NavigationLink
                                    className="underline-hover"
                                    href={link.href}
                                    onClick={toggleMenu}
                                >
                                    {link.name}
                                </NavigationLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className={style.navActions}>
                    <ul>
                        {/* Contact link */}
                        <li>
                            <NavigationLink className="underline-hover" href="#">Contact</NavigationLink>
                        </li>
                        {/* Appointment booking link */}
                        <li>
                            <NavigationLink className={style.button} href="#">Prendre un rendez-vous</NavigationLink>
                        </li>
                    </ul>
                </div>
                {/* Burger menu icon */}
                <div className={`${style.burgerMenu} ${menuOpen ? style.open : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    );
}
