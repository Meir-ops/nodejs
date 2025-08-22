import Link from 'next/link';
import React from 'react'

const Nav = () => {
    return (
        <>
            <div className="w-full h-20 bg-pink-400 sticky top-0">
                <div className="container mx-auto px-4 h-full">
                    <div className="flex justify-between items-center h-full">
                        {/* <Logo /> */}
                        <ul className="hidden md:flex gap-x-6 text-white">
                            <p>BERGS</p>
                            <li>
                                <Link href="/">
                                    <p>Home</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/bras">
                                    <p>Bras</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/girdles">
                                    <p>Girdles</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/accessories">
                                    <p>Accessories</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/medical-girdles">
                                    <p>Medical Girdles</p>
                                </Link>
                            </li>

                            <li>
                                <Link href="/about">
                                    <p>About Us</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav