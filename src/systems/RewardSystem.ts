import type { Difficulty } from '../types'; import { getDifficulty } from '../data/levels';
export class RewardSystem { static game(d:Difficulty,daily=false){const cfg=getDifficulty(d);return {xp:cfg.xp+(daily?50:0),coins:cfg.coins+(daily?30:0)};} static xpForLevel(level:number){return 100+(level-1)*50;} }
