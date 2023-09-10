import Link from 'next/link';
import { NavLinks } from '@/constans';
import AuthProviders from '@/app/components/AuthProviders';

const Navbar = () => {
    const session = {};
    return (
        <nav className="flexBetween navbar">
            <div className="flex-1 flexStart gap-10">
                <Link href="/" className="logo">
                    Kiwi
                </Link>
                <ul className="xl:flex hidden text-small gap-7">
                    {NavLinks.map((link) => (
                        <Link href={link.href} key={link.key}>{link.text}</Link>
                    ))}
                </ul>
            </div>
            <div className="flexCenter gap-4">
                {session ? (
                    <>
                        UserPhoto

                        <Link href="/create project">Share Work</Link>
                    </>
                ) : (
                    <AuthProviders />
                )}
            </div>
        </nav>
    );
};

export default Navbar;