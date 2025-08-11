import Link from 'next/link';
export default function Footer() {
    return (
        <footer className="w-full flex items-center justify-center px-8 py-4 mt-8">
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1 text-xs w-full text-center">
                <Link href="/about" className="text-zinc-400 hover:text-zinc-200 transition">
                    About
                </Link>
                <Link href="/changelog" className="text-zinc-400 hover:text-zinc-200 transition">
                    Changelog
                </Link>
                <span className="text-zinc-500">
                    © {new Date().getFullYear()} Fairydex. Fan-made project. Zenless Zone Zero is © COGNOSPHERE / HoYoverse.
                </span>
            </div>
        </footer>
    );
}
