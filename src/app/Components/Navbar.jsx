"use client"
import Link from "next/link"
import { RxCaretDown } from "react-icons/rx";
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            if (isScrolled !== scrolling) {
                setScrolling(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolling]);

    return(
        <>
            <nav className={`sticky top-0 flex justify-between font-bold ${
                    scrolling ? 'bg-white' : 'bg-secondary-gray text-white'
                }`}>
                <img src="/Logo.svg" alt="QL Logo" width='64' height='64'  className="ml-4 my-4" />
                <div className="flex gap-8 mr-4 mt-8">
                    <Link href={'/'}> Home </Link>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="flex">Company<RxCaretDown className="ml-1 mt-1"/></label>
                        <ul tabIndex={0} className={`dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 font-bold ${
                    scrolling ? 'bg-white text-black' : 'bg-secondary-gray text-white'}`}>
                            <li><Link href={'/about'}> About US </Link></li>
                            <li><Link href={'/mision'}> Mission & Vision </Link></li>
                        </ul>
                    </div>
                    <Link href={'/team'}> Team </Link>
                </div>
            </nav>
        </>
    )
}