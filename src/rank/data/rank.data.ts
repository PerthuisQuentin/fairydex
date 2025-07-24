import { Rank } from './rank.type';

export const getItemRankIconUrl = (rank: Rank): string => `/rank-icons/64x64/item-rank-${rank.toLowerCase()}.webp`;

export const getBangbooRankIconUrl = (rank: Rank): string => `/rank-icons/64x64/bangboo-rank-${rank.toLowerCase()}.webp`;

export const getAgentRankIconUrl = (rank: Rank): string => `/rank-icons/64x64/agent-rank-${rank.toLowerCase()}.webp`;