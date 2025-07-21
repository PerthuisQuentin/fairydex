import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-z-gray bg-opacity-80 border-b text-gray-300 py-4 px-6">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center text-2xl hover:text-white transitio">
                    <Image src="/fairy.png" alt="Fairy eye" width={32} height={32} className="w-8 h-8 mr-3" priority />
                    FairyDex
                </Link>
                <nav className="hidden md:flex space-x-8 text-lg font-medium text-gray-300">
                    <Link href="/agents" className="hover:text-white transition">Agents</Link>
                    <Link href="/w-engines" className="hover:text-white transition">W-Engines</Link>
                    <Link href="/drive-discs" className="hover:text-white transition">Drive Discs</Link>
                    <Link href="/bangboos" className="hover:text-white transition">Bangboos</Link>
                </nav>
            </div>
        </header>
    );
}
