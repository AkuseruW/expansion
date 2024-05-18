"use client";
import React, { useState } from 'react';
import Image from "next/image";
import NavigationLink from './NavigationLink';

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
        <header className='container'>
            <nav>
                <div className="nav-container logo-and-links">
                    <Image src="/logo.svg" alt="Logo" width={184.7} height={81.76} priority />
                    <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                        {navLinks.map((link) => (
                            <NavigationLink
                                className="underline-hover"
                                key={link.name}
                                href={link.href}
                                onClick={toggleMenu} // Close menu when link is clicked
                            >
                                {link.name}
                            </NavigationLink>
                        ))}
                    </div>
                </div>
                <div className="nav-container nav-actions">
                    <NavigationLink className="underline-hover" href="#">Contact</NavigationLink>
                    <NavigationLink className="button" href="#">Prendre un rendez-vous</NavigationLink>
                </div>
                <div className={`burger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </nav>
        </header>
    );
}
