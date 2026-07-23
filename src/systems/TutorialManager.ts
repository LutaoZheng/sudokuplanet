export interface TutorialLesson { id:number;title:string;description:string;rewardCoins:number;rewardXp:number; }
const KEY='sudoku-planet-academy-v1';
export const TUTORIAL_LESSONS:TutorialLesson[]=[
  {id:1,title:'认识棋盘',description:'了解 9×9 棋盘与九个宫',rewardCoins:10,rewardXp:10},
  {id:2,title:'行列宫规则',description:'掌握数字不能重复的规则',rewardCoins:12,rewardXp:15},
  {id:3,title:'唯一候选数字',description:'找出格子的唯一答案',rewardCoins:15,rewardXp:20},
  {id:4,title:'候选数笔记',description:'记录并排除候选数字',rewardCoins:18,rewardXp:25},
  {id:5,title:'基础解题技巧',description:'组合运用基础数独技巧',rewardCoins:25,rewardXp:35}
];
export class TutorialManager {static readonly instance=new TutorialManager();completedLessons:number[]=[];load(){try{const raw=globalThis.localStorage?.getItem(KEY);this.completedLessons=raw?JSON.parse(raw) as number[]:[];}catch{this.completedLessons=[];}}save(){try{globalThis.localStorage?.setItem(KEY,JSON.stringify(this.completedLessons));}catch{/* 平台适配层可替换 */}}complete(id:number){if(this.completedLessons.includes(id))return false;this.completedLessons.push(id);this.save();return true;}isComplete(id:number){return this.completedLessons.includes(id);}get allComplete(){return TUTORIAL_LESSONS.every(l=>this.isComplete(l.id));}}
