import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles/header.module.scss';

// Define the type for the component props
type NavigationLinkProps = {
    href: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
};

const NavigationLink: React.FC<NavigationLinkProps> = ({ href, children, className, onClick }) => {
    const pathname = usePathname(); // Get the current pathname

    // If the current pathname matches the link's href, set the class to 'active'
    if (pathname === href) {
        className = `${className} ${styles.active}`;
    }

    return (
        <Link className={className} href={href} passHref onClick={onClick}>
            {children}
        </Link>
    )
};

export default NavigationLink;