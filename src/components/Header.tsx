'use client'
import { usePathname } from 'next/navigation';
import logo from '../app/icon.png'
import Image from 'next/image';
import Link from 'next/link';


export function Header() {
    const pathname = usePathname()

    return (
        <header className={`${pathname === '/login' && 'hidden'}`}>
            <div className="w-full h-12 bg-grayBg-100 grid grid-cols-2 items-center justify-center">
                <Image
                    className="justify-self-end"
                    src={logo} alt="LabEddit logo" width={28} height={28} />
                {pathname === '/home' ? <Link
                    className="mr-4 justify-self-end text-sm text-blue-400 font-semibold cursor-pointer hover:text-sky-800"
                    href="/api/auth/logout">
                    Logout
                </Link> : <Link
                    className="mr-4 justify-self-end text-sm text-blue-400 font-semibold cursor-pointer hover:text-sky-800"
                    href="/">
                    Entrar
                </Link>}

            </div>
        </header>
    )
}