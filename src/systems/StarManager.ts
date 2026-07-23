import type { LevelProgress } from '../types';
export interface StarRatingInput { elapsed:number;errors:number;hintsUsed:number;targetTime:number; }
export class StarManager {static readonly instance=new StarManager();calculate(input:StarRatingInput){if(input.elapsed<=input.targetTime&&input.errors===0&&input.hintsUsed===0)return 3;if(input.errors<=1&&input.hintsUsed<=1)return 2;return 1;}total(progress:LevelProgress[]){return progress.reduce((sum,item)=>sum+Object.values(item.stars).reduce((modeSum,stars)=>modeSum+stars,0),0);}}
