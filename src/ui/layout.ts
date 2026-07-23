import Phaser from 'phaser';
import { COLORS, FONT } from './theme';
export function addBackground(scene:Phaser.Scene){
  const g=scene.add.graphics(); g.fillGradientStyle(COLORS.bg2,COLORS.bg2,COLORS.bg,COLORS.bg,1); g.fillRect(0,0,420,800);
  scene.add.circle(380,20,105,COLORS.primary,.035); scene.add.circle(20,790,120,COLORS.secondary,.025);
}
export function addHeader(scene:Phaser.Scene,title:string,back?:()=>void){
  if(back) scene.add.text(26,44,'‹',{fontFamily:FONT,fontSize:'42px',color:'#3c4053'}).setOrigin(.5).setInteractive({useHandCursor:true}).on('pointerup',back);
  scene.add.text(210,44,title,{fontFamily:FONT,fontSize:'20px',fontStyle:'bold',color:'#20243a'}).setOrigin(.5);
}
