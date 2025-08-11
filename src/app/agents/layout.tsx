'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { TextButton } from '@/common/components/ui/text-button.component';

export default function AgentsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();

    const renderLink = (href: string, label: string) => (
        <Link href={href}>
            <TextButton className="italic" selected={pathname === href}>
                {label}
            </TextButton>
        </Link>
    );

    return (
        <div className="w-full flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-center my-4">Agents</h1>
            <div className="px-2 my-2 flex flex-row flex-wrap gap-4 justify-center">
                {renderLink('/agents', 'List')}
                {renderLink('/agents/by-role', 'By Role')}
                {renderLink('/agents/by-faction', 'By Faction')}
            </div>
            <div className='my-4 w-full flex justify-center'>
                {children}
            </div>
        </div>
    );
}
