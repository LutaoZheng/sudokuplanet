import type { ShopItemType } from '../types';
export interface ShopItem { id:string;name:string;description:string;type:ShopItemType;price:number;icon:string;color:number; }
export const SHOP_ITEMS:ShopItem[]=[
  {id:'hint_ticket',name:'提示券',description:'下一局可使用一次提示',type:'consumable',price:100,icon:'✦',color:0x6c63e8},
  {id:'theme_starry',name:'星空主题',description:'深邃星河棋盘背景',type:'boardTheme',price:600,icon:'★',color:0x5961c9},
  {id:'theme_sakura',name:'樱花主题',description:'柔和樱粉棋盘背景',type:'boardTheme',price:500,icon:'❀',color:0xe99ab2},
  {id:'theme_ocean',name:'海洋主题',description:'清透海蓝棋盘背景',type:'boardTheme',price:500,icon:'≈',color:0x4aaac7},
  {id:'theme_streak30',name:'晨曦限定',description:'连续挑战30天限定主题',type:'boardTheme',price:0,icon:'☀',color:0xf1a34a},
  {id:'numbers_crystal',name:'水晶数字',description:'清亮的紫蓝数字样式',type:'numberSkin',price:350,icon:'◆',color:0x7b73e8},
  {id:'numbers_ink',name:'墨韵数字',description:'沉稳的东方数字样式',type:'numberSkin',price:450,icon:'墨',color:0x4a4c56}
];
export const getShopItem=(id:string)=>SHOP_ITEMS.find(item=>item.id===id);
