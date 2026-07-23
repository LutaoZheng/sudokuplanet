import type { Difficulty,LevelMode } from '../types';
import { getLevelMode } from './difficulty';

export interface DifficultyConfig { id:Difficulty; name:string; en:string; clues:[number,number]; xp:number; coins:number; average:string; color:number; }
export const DIFFICULTIES:DifficultyConfig[]=[
  {id:'easy',name:'简单',en:'EASY',clues:[45,50],xp:20,coins:10,average:'约 5 分钟',color:0x62d7b5},
  {id:'medium',name:'中等',en:'MEDIUM',clues:[35,40],xp:50,coins:20,average:'约 10 分钟',color:0x62a8ff},
  {id:'hard',name:'困难',en:'HARD',clues:[28,32],xp:100,coins:40,average:'约 15 分钟',color:0xffb65c},
  {id:'expert',name:'专家',en:'EXPERT',clues:[22,27],xp:200,coins:80,average:'约 25 分钟',color:0xff6b8a}
];
export const getDifficulty=(id:Difficulty)=>DIFFICULTIES.find(item=>item.id===id)!;

export type LevelStage='beginner'|'progressive'|'advanced'|'master';
export type LogicTier='veryEasy'|'easy'|'easyMedium'|'medium'|'mediumHard'|'hard'|'expert'|'master';
export type RemovalPattern='symmetric'|'mixed'|'random';
export interface LevelConfig { mode:LevelMode; level:number; stage:LevelStage; stageName:string; logicTier:LogicTier; generatorDifficulty:Difficulty; clues:[number,number]; targetTime:number; maxHintsForThreeStars:number; seed:number; removalPattern:RemovalPattern; complexity:number; }
export interface ChapterConfig { chapter:number;name:string;startLevel:number;endLevel:number;stageName:string; }
export const CHAPTERS:ChapterConfig[]=[
  {chapter:1,name:'星球启航',startLevel:1,endLevel:25,stageName:'新手阶段'},
  {chapter:2,name:'逻辑森林',startLevel:26,endLevel:50,stageName:'进阶阶段'},
  {chapter:3,name:'智慧大陆',startLevel:51,endLevel:75,stageName:'高级阶段'},
  {chapter:4,name:'大师领域',startLevel:76,endLevel:100,stageName:'专家阶段'}
];
export const getChapter=(level:number)=>CHAPTERS.find(chapter=>level>=chapter.startLevel&&level<=chapter.endLevel)??CHAPTERS[0];

const modeOffset:Record<LevelMode,number>={casual:5,normal:0,challenge:-3,master:-5};
interface TierConfig {tier:LogicTier;stage:LevelStage;stageName:string;difficulty:Difficulty;clues:[number,number];targetTime:number;pattern:RemovalPattern;complexity:number;}
const tierFor=(level:number):TierConfig=>{
  if(level<=10)return{tier:'veryEasy',stage:'beginner',stageName:'新手阶段',difficulty:'easy',clues:[50,54],targetTime:360,pattern:'symmetric',complexity:1};
  if(level<=25)return{tier:'easy',stage:'beginner',stageName:'新手阶段',difficulty:'easy',clues:[44,49],targetTime:480,pattern:'symmetric',complexity:2};
  if(level<=40)return{tier:'easyMedium',stage:'progressive',stageName:'进阶阶段',difficulty:'medium',clues:[39,44],targetTime:600,pattern:'mixed',complexity:3};
  if(level<=50)return{tier:'medium',stage:'progressive',stageName:'进阶阶段',difficulty:'medium',clues:[35,40],targetTime:720,pattern:'mixed',complexity:4};
  if(level<=65)return{tier:'mediumHard',stage:'advanced',stageName:'高级阶段',difficulty:'hard',clues:[31,36],targetTime:840,pattern:'mixed',complexity:5};
  if(level<=75)return{tier:'hard',stage:'advanced',stageName:'高级阶段',difficulty:'hard',clues:[28,32],targetTime:960,pattern:'random',complexity:6};
  if(level<=90)return{tier:'expert',stage:'master',stageName:'专家阶段',difficulty:'expert',clues:[24,29],targetTime:1080,pattern:'random',complexity:7};
  return{tier:'master',stage:'master',stageName:'专家阶段',difficulty:'expert',clues:[22,26],targetTime:1200,pattern:'random',complexity:8};
};

export function getLevelConfig(mode:LevelMode,level:number):LevelConfig{
  const safeLevel=Math.max(1,Math.min(100,Math.floor(level))),tier=tierFor(safeLevel),offset=modeOffset[mode];const low=Math.max(22,Math.min(54,tier.clues[0]+offset)),high=Math.max(low,Math.min(55,tier.clues[1]+offset));const configured=getLevelMode(mode),order:Difficulty[]=['easy','medium','hard','expert'],tierIndex=order.indexOf(tier.difficulty),modeIndex=order.indexOf(configured.baseDifficulty),generatorDifficulty=order[Math.max(tierIndex,modeIndex)];
  return{mode,level:safeLevel,stage:tier.stage,stageName:tier.stageName,logicTier:tier.tier,generatorDifficulty,clues:[low,high],targetTime:Math.max(180,tier.targetTime-offset*15),maxHintsForThreeStars:0,seed:100000+(Object.keys(modeOffset).indexOf(mode)+1)*1000+safeLevel,removalPattern:tier.pattern,complexity:tier.complexity};
}
