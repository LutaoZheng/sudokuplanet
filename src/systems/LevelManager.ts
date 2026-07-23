import type { LevelGameResult,LevelMode,LevelProgress } from '../types';
import { getLevelConfig } from '../data/levels';
import { getLevelMode,LEVEL_MODES } from '../data/difficulty';
import { StarManager } from './StarManager';

const STORAGE_KEY='sudoku-planet-level-progress-v1';
interface LevelSave { selectedMode:LevelMode; progress:Record<LevelMode,LevelProgress>; }

const createProgress=(difficulty:LevelMode):LevelProgress=>({difficulty,currentLevel:1,completedLevels:[],bestTime:{},stars:{}});
const createSave=():LevelSave=>({selectedMode:'normal',progress:{casual:createProgress('casual'),normal:createProgress('normal'),challenge:createProgress('challenge'),master:createProgress('master')}});

export class LevelManager {
  static readonly instance=new LevelManager();private saveData:LevelSave=createSave();lastResult?:LevelGameResult;
  load(){try{const raw=globalThis.localStorage?.getItem(STORAGE_KEY);if(!raw)return;const saved=JSON.parse(raw) as Partial<LevelSave>;const fresh=createSave();const progress={...fresh.progress};for(const mode of LEVEL_MODES){const old=saved.progress?.[mode.id];if(old)progress[mode.id]={...fresh.progress[mode.id],...old,difficulty:mode.id};}this.saveData={selectedMode:saved.selectedMode&&LEVEL_MODES.some(m=>m.id===saved.selectedMode)?saved.selectedMode:'normal',progress};}catch{this.saveData=createSave();}}
  save(){try{globalThis.localStorage?.setItem(STORAGE_KEY,JSON.stringify(this.saveData));}catch{/* 平台适配层可替换 */}}
  get selectedMode(){return this.saveData.selectedMode;}
  selectMode(mode:LevelMode){this.saveData.selectedMode=mode;this.save();}
  getProgress(mode=this.selectedMode){return this.saveData.progress[mode];}
  getAllProgress(){return LEVEL_MODES.map(mode=>this.getProgress(mode.id));}
  getCurrentConfig(){const progress=this.getProgress();return getLevelConfig(this.selectedMode,progress.currentLevel);}
  complete(mode:LevelMode,level:number,elapsed:number,errors:number,hintsUsed:number):LevelGameResult{
    const progress=this.getProgress(mode);const config=getLevelConfig(mode,level);const modeConfig=getLevelMode(mode);const stars=StarManager.instance.calculate({elapsed,errors,hintsUsed,targetTime:config.targetTime});
    const perfectBonus=errors===0?Math.ceil(modeConfig.baseCoins*.5):0;const noHintBonus=hintsUsed===0?Math.ceil(modeConfig.baseCoins*.35):0;const coins=modeConfig.baseCoins+perfectBonus+noHintBonus;const xp=modeConfig.baseXp+(stars===3?Math.ceil(modeConfig.baseXp*.25):0);
    if(!progress.completedLevels.includes(level))progress.completedLevels.push(level);progress.completedLevels.sort((a,b)=>a-b);progress.stars[level]=Math.max(progress.stars[level]??0,stars);const best=progress.bestTime[level];if(!best||elapsed<best)progress.bestTime[level]=elapsed;if(level===progress.currentLevel&&level<100)progress.currentLevel=level+1;
    const result={mode,level,stars,coins,xp,baseCoins:modeConfig.baseCoins,baseXp:modeConfig.baseXp,perfectBonus,noHintBonus,nextLevel:progress.currentLevel};this.lastResult=result;this.save();return result;
  }
}
