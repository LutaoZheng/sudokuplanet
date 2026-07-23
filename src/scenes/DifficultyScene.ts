import Phaser from 'phaser'; import { addBackground,addHeader } from '../ui/layout'; import { COLORS,FONT,hex } from '../ui/theme'; import { DIFFICULTIES } from '../data/levels';
export class DifficultyScene extends Phaser.Scene {
  constructor(){super('Difficulty')}
  create(){ addBackground(this);addHeader(this,'选择难度',()=>this.scene.start('Home'));this.add.text(24,88,'选择适合你的挑战',{fontFamily:FONT,fontSize:'14px',color:hex(COLORS.muted)});
    DIFFICULTIES.forEach((d,i)=>{const y=158+i*128;const box=this.add.rectangle(210,y,372,104,COLORS.card,.96).setStrokeStyle(1,COLORS.border).setInteractive({useHandCursor:true});this.add.circle(58,y,24,d.color,.14);this.add.text(58,y,String(i+1),{fontFamily:FONT,fontSize:'18px',fontStyle:'bold',color:`#${d.color.toString(16)}`}).setOrigin(.5);this.add.text(96,y-21,`${d.name}  ${d.en}`,{fontFamily:FONT,fontSize:'18px',fontStyle:'bold',color:hex(COLORS.text)});this.add.text(96,y+9,d.average,{fontFamily:FONT,fontSize:'12px',color:hex(COLORS.muted)});this.add.text(350,y,`+${d.xp} XP`,{fontFamily:FONT,fontSize:'13px',fontStyle:'bold',color:hex(COLORS.gold)}).setOrigin(1,.5);box.on('pointerover',()=>box.setFillStyle(COLORS.cardLight));box.on('pointerout',()=>box.setFillStyle(COLORS.card));box.on('pointerup',()=>this.scene.start('Game',{difficulty:d.id}));});
  }
}
