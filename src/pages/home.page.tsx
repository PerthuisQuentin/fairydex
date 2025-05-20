import Image from 'next/image';

export default function HomePage() {
    return (
        <main className="flex items-center justify-center min-h-[60vh]">
            <Image
                src="/logo.png"
                alt="Hero Image"
                width={512}
                height={256}
                className=""
            />
        </main>
    );
}
