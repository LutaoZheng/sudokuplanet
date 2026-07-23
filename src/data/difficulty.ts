import type { Difficulty,LevelMode } from '../types';

export interface LevelModeConfig { id:LevelMode; name:string; shortName:string; description:string; baseDifficulty:Difficulty; color:number; baseCoins:number; baseXp:number; }

export const LEVEL_MODES:LevelModeConfig[]=[
  {id:'casual',name:'休闲模式',shortName:'休闲',description:'适合学习',baseDifficulty:'easy',color:0x58bfae,baseCoins:12,baseXp:25},
  {id:'normal',name:'标准模式',shortName:'标准',description:'推荐体验',baseDifficulty:'medium',color:0x6c63e8,baseCoins:20,baseXp:50},
  {id:'challenge',name:'挑战模式',shortName:'挑战',description:'高手挑战',baseDifficulty:'hard',color:0xe6a23c,baseCoins:35,baseXp:85},
  {id:'master',name:'大师模式',shortName:'大师',description:'极限难度',baseDifficulty:'expert',color:0xe85d75,baseCoins:55,baseXp:130}
];

export const getLevelMode=(id:LevelMode)=>LEVEL_MODES.find(mode=>mode.id===id)!;
