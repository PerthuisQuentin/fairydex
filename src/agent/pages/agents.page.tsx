'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

import AgentList from '@/agent/components/agent-list.component';
import { TextButton } from '@/common/components/ui/text-button.component';

import AgentsByRole from '../components/agents-by-role.component';

const VIEW_MODE_QUEY_PARAM = 'viewMode';
enum ViewMode {
    List = 'list',
    Role = 'role',
}

export default function Agents() {
    return (
        <Suspense fallback={null}>
            <AgentsContent />
        </Suspense>
    );
}

const AgentsContent = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const getInitialViewMode = (): ViewMode => {
        const mode = searchParams?.get(VIEW_MODE_QUEY_PARAM);
        if (mode === ViewMode.Role) return ViewMode.Role;
        return ViewMode.List;
    };
    const [viewMode, setViewMode] = useState<ViewMode>(getInitialViewMode());

    useEffect(() => {
        const params = new URLSearchParams(Array.from(searchParams?.entries() || []));
        params.set(VIEW_MODE_QUEY_PARAM, viewMode);
        router.replace(`?${params.toString()}`);
    }, [viewMode, router, searchParams]);

    return (
        <div className="w-full flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-center my-4">Agents</h1>
            <div className="px-2 my-2 flex flex-row flex-wrap gap-4 justify-center">
                <TextButton
                    className="w-50 italic"
                    selected={viewMode === ViewMode.List}
                    onClick={() => setViewMode(ViewMode.List)}
                >
                    List
                </TextButton>
                <TextButton
                    className="w-50 italic"
                    selected={viewMode === ViewMode.Role}
                    onClick={() => setViewMode(ViewMode.Role)}
                >
                    By Role
                </TextButton>
            </div>
            <div className='my-4 w-full flex justify-center'>
                {viewMode === ViewMode.List && (
                    <div className='w-full max-w-6xl'>
                        <AgentList />
                    </div>
                )}
                {viewMode === ViewMode.Role && (
                    <div className='w-full mx-8'>
                        <AgentsByRole />
                    </div>
                )}
            </div>
        </div>
    );
};