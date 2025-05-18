export default function Header() {
    return (
        <header className="bg-darkBg border-b border-neonBlue text-white py-4 px-6">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="text-2xl font-display text-neonBlue tracking-widest">
                    NameToFound
                </div>
                <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
                    <a href="/agents" className="hover:text-neonBlue transition">Agents</a>
                </nav>
            </div>
        </header>
    );
}
