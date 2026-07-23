import Phaser from 'phaser';
import { COLORS, FONT, hex } from './theme';

export interface SurfaceOptions { radius?:number; color?:number; border?:number; shadow?:boolean; }

export function addSurface(scene:Phaser.Scene,x:number,y:number,width:number,height:number,options:SurfaceOptions={}){
  const radius=options.radius??18,color=options.color??COLORS.card,border=options.border??COLORS.border;
  const container=scene.add.container(x,y);
  if(options.shadow!==false){const shadow=scene.add.graphics();shadow.fillStyle(0x28304f,.075);shadow.fillRoundedRect(-width/2,-height/2+5,width,height,radius);container.add(shadow);}
  const face=scene.add.graphics();face.fillStyle(color,1);face.fillRoundedRect(-width/2,-height/2,width,height,radius);face.lineStyle(1,border,.82);face.strokeRoundedRect(-width/2,-height/2,width,height,radius);container.add(face);
  container.setSize(width,height);return container;
}

export function addCoinBadge(scene:Phaser.Scene,x:number,y:number,value:number|string){
  const badge=scene.add.container(x,y);const width=64+String(value).length*5;
  const bg=scene.add.graphics();bg.fillStyle(0xfff7df,1);bg.fillRoundedRect(-width/2,-16,width,32,16);bg.lineStyle(1,0xf3dfaa,.9);bg.strokeRoundedRect(-width/2,-16,width,32,16);
  const coin=scene.add.graphics();coin.fillStyle(0xf4bb3f,1);coin.fillCircle(-width/2+18,0,10);coin.lineStyle(2,0xffd96e,1);coin.strokeCircle(-width/2+18,0,7);coin.fillStyle(0xffffff,.58);coin.fillCircle(-width/2+15,-3,2.5);
  const text=scene.add.text(-width/2+34,0,String(value),{fontFamily:FONT,fontSize:'14px',fontStyle:'bold',color:hex(0xa96d08)}).setOrigin(0,.5);badge.add([bg,coin,text]);return badge;
}

export function addIconDisc(scene:Phaser.Scene,x:number,y:number,icon:string,color=COLORS.primary){
  const group=scene.add.container(x,y);const disc=scene.add.graphics();disc.fillStyle(color,.10);disc.fillCircle(0,0,23);const label=scene.add.text(0,0,icon,{fontFamily:FONT,fontSize:'20px',fontStyle:'bold',color:hex(color)}).setOrigin(.5);group.add([disc,label]);return group;
}
