export type Difficulty = 'easy' | 'medium' | 'hard' | 'expert';
export type LevelMode = 'casual' | 'normal' | 'challenge' | 'master';
export type SkillLevel = 'beginner' | 'regular' | 'advanced' | 'master';
export type CellValue = number;
export interface Move { row: number; col: number; previous: number; value: number; previousNotes: number[]; }
export interface GameRecord { difficulty: Difficulty; elapsed: number; errors: number; date: string; daily?: boolean; levelMode?:LevelMode; levelNumber?:number; stars?:number; hintsUsed?:number; }
export interface LevelProgress { difficulty:LevelMode; currentLevel:number; completedLevels:number[]; bestTime:Record<number,number>; stars:Record<number,number>; }
export interface LevelGameResult { mode:LevelMode; level:number; stars:number; coins:number; xp:number; baseCoins:number; baseXp:number; perfectBonus:number; noHintBonus:number; nextLevel:number; }
export type ShopItemType='consumable'|'boardTheme'|'numberSkin';
export interface ShopSave { purchasedItems:string[]; hintTickets:number; selectedBoardTheme:string; selectedNumberSkin:string; }
export interface RewardSnapshot { xp:number; coins:number; levelUp:boolean; achievements:string[]; newTitle?:string; levelRewardCoins:number; dailyMilestone?:string; }
export interface PlayerData {
  level: number; experience: number; coins: number; completedGames: number;
  bestTime: Partial<Record<Difficulty, number>>; streakDays: number;
  achievements: string[]; history: GameRecord[]; selectedTheme: string;
  unlockedThemes: string[]; lastDailyDate: string; dailyStreak: number;
  skillLevel?: SkillLevel; onboardingCompleted: boolean; tutorialCompleted: boolean;
  perfectGames:number; dailyMilestones:string[];
  settings: { sound:boolean; music:boolean; vibration:boolean };
}
