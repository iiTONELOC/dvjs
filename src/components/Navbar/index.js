import { useEffect, useState } from 'react';
import Link from 'next/link';

export const NavLinks = [
    { href: '/fibonacci', label: 'Fibonacci Sequence' }
];

export default function Navbar({ links = NavLinks }) {
    const [isMounted, setIsMounted] = useState(false);
    const [pathname, setPathname] = useState('');
    const [activeLink, setActiveLink] = useState(null);
    const _links = [
        { href: '/', label: 'Home' },
        ...links
    ];

    function handleActive() {
        if (typeof window !== 'undefined') {
            const _pathname = window.location.pathname;
            setPathname(_pathname);
            setActiveLink(_links.find(link => link.href === _pathname));
        }
    }

    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
    }, []);

    useEffect(() => {
        isMounted && handleActive();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMounted, pathname]);

    if (!isMounted) return null;


    return (
        <nav className="flex items-center justify-center flex-wrap bg-gray-red p-4 gap-x-5">
            {_links.map(({ href, label }) => {
                const activeClass = activeLink?.href === href ? 'text-emerald-400 underline underline-offset-8' : '';
                return (
                    <Link href={href} key={label}>
                        <a className={`flex items-center text-white hover:text-pink-600 ${activeClass}`}>
                            {label}
                        </a>
                    </Link>
                );
            })}
        </nav>
    );
}
