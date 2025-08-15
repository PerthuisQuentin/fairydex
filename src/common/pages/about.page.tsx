import prisma from '@/lib/prisma';

export default async function About() {
    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            createdAt: true,
        },
    });
    console.log('Fetched users:', users);

    return (
        <div className="w-full max-w-2xl mx-auto py-8 px-4 flex flex-col items-center">
            {JSON.stringify(users, null, 2)}
            <h1 className="text-3xl font-bold mb-4">About</h1>
            <p className="text-base text-zinc-300 mb-4 text-center">
                This website is an unofficial fan-made project inspired by the universe of Zenless Zone Zero, created by HoYoverse.<br />
                It was developed for informational and community purposes, with no intention to misrepresent or substitute any official content.
            </p>
            <p className="text-sm text-zinc-400 mb-6 text-center">
                This project is not affiliated with, endorsed, or sponsored by HoYoverse, COGNOSPHERE PTE. LTD., or any of their subsidiaries.
            </p>

            <h2 className="text-lg font-semibold mb-2 mt-6">Contact</h2>
            <p className="text-sm text-zinc-400 mb-6 text-center">
                For any feedback, improvement ideas, partnership opportunities, or other inquiries, feel free to contact me at <a href="mailto:contact@fairydex.com" className="underline hover:text-zinc-200" aria-label="Send an email to contact@fairydex.com">contact@fairydex.com</a>.
            </p>

            <h2 className="text-lg font-semibold mb-2 mt-6">Legal Notice</h2>
            <p className="text-sm text-zinc-400 mb-4 text-center">
                All intellectual property related to Zenless Zone Zero, including but not limited to characters, artwork, logos, names, audio, and game content, is copyright © COGNOSPHERE PTE. LTD. / HoYoverse.<br />
                Such materials are used on this site for non-official, fan-oriented purposes and are referenced in accordance with HoYoverse’s public community guidelines and fair use principles where applicable.<br />
                If you are a representative of HoYoverse and would like to request content removal, attribution, or clarification, please feel free to contact us.
            </p>

            <h2 className="text-lg font-semibold mb-2 mt-6">Credits</h2>
            <ul className="text-sm text-zinc-400 mb-2 text-center list-none">
                <li>Game universe: Zenless Zone Zero</li>
                <li>Developer & Publisher: COGNOSPHERE PTE. LTD. / HoYoverse</li>
                <li>Official website: <a href="https://zenless.hoyoverse.com" target="_blank" rel="noopener" className="underline hover:text-zinc-200">zenless.hoyoverse.com</a></li>
            </ul>
        </div>
    );
}