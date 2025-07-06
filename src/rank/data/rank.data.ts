import { Rank } from './rank.type';

export const getItemRankIconUrl = (rank: Rank): string => `/rank-icons/item-rank-${rank.toLowerCase()}.webp`;

export const getBangbooRankIconUrl = (rank: Rank): string => `/rank-icons/bangboo-rank-${rank.toLowerCase()}.webp`;

export const getAgentRankIconUrl = (rank: Rank): string => `/rank-icons/agent-rank-${rank.toLowerCase()}.webp`;