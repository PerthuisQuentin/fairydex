import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

import AgentIcon from '@/agent/components/agent-icon.component';
import DottedCard from '@/common/components/ui/dotted-card.component';
import { Channel, ChannelAgent,Phase } from '@/version/data/version.type';
import { Version } from '@/version/models/version.model';


function renderAgent(agent: ChannelAgent) {
    return (
        <div className={classNames(agent.isMain ? 'w-32' : 'w-15', 'h-auto')}>
            <Link
                key={agent.agentId}
                href={`/agents/${agent.agentId}`}
                className="relative block"
            >
                <div className={classNames(
                    'w-full h-auto p-1 bg-z-gray-2 rounded',
                    'transition-all duration-200 ease-out hover:bg-green-500 cursor-pointer'
                )}>
                    <div className='bg-z-black rounded relative'>
                        <AgentIcon agentId={agent.agentId} />
                        {agent.isNew && (
                            <span className={classNames(
                                'absolute left-1 bottom-1 font-bold uppercase bg-red-600 text-white rounded select-none shadow',
                                agent.isMain ? 'px-2 py-0.5 text-[12px]' : 'px-1 py-0.5 text-[10px]'
                            )}>
                                new
                            </span>
                        )}
                    </div>
                </div>
            </Link>
        </div>
    );
}

function renderChannel(channel: Channel) {
    return (
        <div key={channel.name} className="p-2 flex flex-col items-center border-2 border-gray-600 rounded">
            {renderAgent(channel.agents[0])}
            <div className='flex gap-2 mt-2'>
                {renderAgent(channel.agents[1])}
                {renderAgent(channel.agents[2])}
            </div>
        </div>
    );
}

function renderPhase(phase: Phase, index: number) {
    return (
        <div className="mb-2 flex flex-col items-center">
            <h3 className="text-lg font-medium mb-2">{`Phase ${index + 1}`}</h3>
            <div className='flex gap-2 items-stretch'>
                {phase.channels.map(renderChannel)}
            </div>
        </div>
    );
}

type VersionCardProps = {
    readonly version: Version
};

export default function VersionCard({ version }: VersionCardProps) {
    return (
        <DottedCard selectable={false}>
            <div className="flex flex-col items-center">
                <h2 className="text-xl font-semibold">{version.name}</h2>
                <div className="flex items-stretch gap-4">
                    {version.phases.map((phase, index) => (
                        <React.Fragment key={index}>
                            {renderPhase(phase, index)}
                            {index < version.phases.length - 1 && (
                                <div className="border-l border-gray-600 h-auto self-stretch" />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </DottedCard>
    );
}
