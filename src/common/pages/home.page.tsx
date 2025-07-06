import Link from 'next/link';

import AgentIcon from '@/agent/components/agent-icon.component';
import { AgentId } from '@/agent/data/agent.type';
import BangbooIcon from '@/bangboo/components/bangboo-icon.component';
import { BangbooId } from '@/bangboo/data/bangboo.type';
import SelectableCard from '@/common/components/ui/selectable-card.component';
import DriveDiscIcon from '@/drive-disc/components/drive-disc-icon.component';
import { DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import WEngineIcon from '@/w-engine/components/w-engine-icon.component';
import { WEngineId } from '@/w-engine/data/w-engine.type';

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
