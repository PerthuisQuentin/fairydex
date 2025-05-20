import Link from 'next/link';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-zinc-900 bg-opacity-80 border-b text-white py-4 px-6">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="text-2xl font-display tracking-widest">
                    NameToFind
                </div>
                <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
                    <Link href="/" className="hover:text-white transition">Home</Link>
                    <Link href="/agents" className="hover:text-white transition">Agents</Link>
                </nav>
            </div>
        </header>
    );
}
