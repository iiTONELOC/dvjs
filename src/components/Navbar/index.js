import { useEffect, useState } from 'react';
import Link from 'next/link';

export const NavLinks = [
    { href: '/fibonacci', label: 'Fibonacci Sequence' }
];

export default function Navbar({ links = NavLinks }) {
    const [isMounted, setIsMounted] = useState(null);
    const [activeLink, setActiveLink] = useState(null);
    const _links = [{ href: '/', label: 'Home' },
    ...links];

    function handleActive() {
        if (typeof window !== 'undefined') {
            const _pathname = window.location.pathname;
            setActiveLink(_links.find(link => link.href === _pathname));
        }
    }

    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(null);
    }, []);

    useEffect(() => {
        isMounted && handleActive();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMounted]);

    if (!isMounted) return null;

    return (
        <nav className="tracking-wide flex items-center justify-center flex-wrap bg-gray-red p-4 gap-x-5">
            {isMounted && _links.map(({ href, label }) => {
                const activeClass = activeLink?.href === href ? 'text-emerald-400 underline underline-offset-8' : 'text-white';
                return (
                    <Link href={href} key={label}>
                        <a className={`flex items-center text-base hover:text-pink-600 ${activeClass}`}>
                            {label}
                        </a>
                    </Link>
                );
            })}
        </nav>
    );
}
