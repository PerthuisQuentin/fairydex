import { PowerIcon } from '@heroicons/react/24/outline';

import { IconButton } from '../ui/icon-button';
import { TextButton } from '../ui/text-button';

export default function Home() {
    return (
        <main className="flex items-center justify-center min-h-[60vh]">
            <div className="relative w-full flex items-center justify-center">
                <IconButton>
                    <PowerIcon strokeWidth={4} />
                </IconButton>
                <TextButton className="w-50 italic">
                    Europe
                </TextButton>
            </div>
        </main>
    );
}
