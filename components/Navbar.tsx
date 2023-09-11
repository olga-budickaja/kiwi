import Link from 'next/link';
import { NavLinks } from '@/constans';
import AuthProviders from '@/components/AuthProviders';
import { getCurrentUser } from '@/lib/session';
import ProfileMenu from '@/components/ProfileMenu';

const Navbar = async () => {
    const session = await getCurrentUser();

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
                {session?.user ? (
                    <>
                        {session?.user?.image && (
                            <ProfileMenu session={session} />
                        )}

                        <Link href="/create-project">Share Work</Link>
                    </>
                ) : (
                    <AuthProviders />
                )}
            </div>
        </nav>
    );
};

export default Navbar;