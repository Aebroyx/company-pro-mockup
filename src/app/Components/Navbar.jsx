"use client"
import Link from "next/link"
import { RxCaretDown } from "react-icons/rx";
import { useEffect, useState } from 'react';
import Image from "next/image";

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
            <nav className={`z-50 sticky top-0 flex justify-between font-bold ${
                    scrolling ? 'bg-white text-black' : 'bg-black text-white'
                }`}>
                <Link href={'/'}><Image src="/Logo.svg" alt="QL Logo" width='64' height='64'  className="ml-4 my-4" /></Link>
                <div className="flex gap-8 mr-16 mt-8">
                    <Link href={'/'}> Home </Link>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="flex">Company<RxCaretDown className="ml-1 mt-1"/></label>
                        <ul tabIndex={0} className={`dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 font-bold ${
                    scrolling ? 'bg-white text-black' : 'bg-black text-white'}`}>
                            <li><Link href={'/about'}> About US </Link></li>
                            <li><Link href={'/research'}> Research & Services </Link></li>
                        </ul>
                    </div>
                    <Link href={'/team'}> Team </Link>
                </div>
            </nav>
        </>
    )
}