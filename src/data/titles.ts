export interface LevelTitleConfig { minLevel:number;title:string;icon:string;unlockCoins:number; }
export const LEVEL_TITLES:LevelTitleConfig[]=[
  {minLevel:1,title:'数独新手',icon:'🌱',unlockCoins:0},
  {minLevel:5,title:'逻辑探索者',icon:'◇',unlockCoins:30},
  {minLevel:10,title:'数独爱好者',icon:'🧩',unlockCoins:50},
  {minLevel:20,title:'解谜达人',icon:'✦',unlockCoins:80},
  {minLevel:35,title:'智慧领航员',icon:'◆',unlockCoins:120},
  {minLevel:50,title:'数独大师',icon:'♛',unlockCoins:200},
  {minLevel:75,title:'星球智者',icon:'☄',unlockCoins:300},
  {minLevel:100,title:'数独传奇',icon:'★',unlockCoins:500}
];
