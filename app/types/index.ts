// Player types
export interface Player {
  name: string;
  goals: number;
  assists: number;
  appearances: number;
  motm?: number;
}

export type SortField = "goals" | "assists" | "appearances" | "name" | "motm";
export type SortDirection = "asc" | "desc";

// Match types
export interface GoalScorer {
  name: string;
  assist?: string;
  team?: "home" | "away";
}

export interface Match {
  gameWeek: number;
  homeTeam: string;
  awayTeam: string;
  score: string;
  goalScorers: GoalScorer[];
  motm: string;
}
