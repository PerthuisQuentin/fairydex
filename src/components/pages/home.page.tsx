import Link from 'next/link';

import { AgentId } from '@/data/agent.type';
import { BangbooId } from '@/data/bangboo.type';
import { DriveDiscId } from '@/data/drive-disc.type';
import { WEngineId } from '@/data/w-engine.type';

import AgentIcon from '../agent/agent-icon.component';
import BangbooIcon from '../bangboo/bangboo-icon.component';
import DriveDiscIcon from '../drive-disc/drive-disc-icon.component';
import SelectableCard from '../ui/selectable-card.component';
import WEngineIcon from '../w-engine/w-engine-icon.component';

function HomeCard({ icon, label, href }: { readonly icon: React.ReactNode; readonly label: string; readonly href: string }) {
    return (
        <Link href={href} className="contents">
            <SelectableCard>
                <div className="flex flex-col items-center">
                    <div className="relative w-32 h-32">
                        {icon}
                    </div>
                    <span className="mt-2 text-2xl">{label}</span>
                </div>
            </SelectableCard>
        </Link>
    );
}

export default function Home() {
    return (
        <main className="flex items-center justify-center min-h-[60vh]">
            <div className="relative w-full flex items-center justify-center">
                <HomeCard icon={<AgentIcon agentId={AgentId.AnbyDemara} />} label="Agents" href="/agents" />
                <HomeCard icon={<WEngineIcon wEngineId={WEngineId.DemaraBatteryMarkII} />} label="W-Engines" href="/w-engines" />
                <HomeCard icon={<DriveDiscIcon driveDiscId={DriveDiscId.WoodpeckerElectro} />} label="Drive Discs" href="/drive-discs" />
                <HomeCard icon={<BangbooIcon bangbooId={BangbooId.Amillion} />} label="Bangboos" href="/bangboos" />
            </div>
        </main>
    );
}
