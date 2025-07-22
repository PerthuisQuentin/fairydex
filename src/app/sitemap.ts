
import type { MetadataRoute } from 'next';

import { AgentId } from '@/agent/data/agent.type';
import { BangbooId } from '@/bangboo/data/bangboo.type';

const BASE_URL = process.env.BASE_URL;

const generatePages = (paths: string[], priority: number): MetadataRoute.Sitemap => {
    return paths.map((path) => ({
        url: `${BASE_URL}${path}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority,
    }));
};

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        // Home
        ...generatePages([''], 1.0),
        // Lists
        ...generatePages([
            '/agents',
            '/bangboos',
            '/drive-discs',
            '/w-engines'
        ], 0.5),
        // Agents
        ...generatePages(
            Object.values(AgentId).map((id) => `/agents/${id}`),
            0.8,
        ),
        // Bangboos
        ...generatePages(
            Object.values(BangbooId).map((id) => `/bangboos/${id}`),
            0.7,
        ),
        // W Engines
        ...generatePages(
            Object.values(BangbooId).map((id) => `/w-engines/${id}`),
            0.7,
        ),
        // Drive Discs
        ...generatePages(
            Object.values(BangbooId).map((id) => `/drive-discs/${id}`),
            0.7,
        ),
    ];
}