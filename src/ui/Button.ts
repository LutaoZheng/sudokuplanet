import Phaser from 'phaser';
import { COLORS, FONT, hex } from './theme';

export class Button extends Phaser.GameObjects.Container {
  private face:Phaser.GameObjects.Graphics;
  constructor(scene:Phaser.Scene,x:number,y:number,width:number,height:number,label:string,onClick:()=>void,color=COLORS.primary,textColor=color===COLORS.primary?0xffffff:COLORS.text){
    super(scene,x,y);scene.add.existing(this);const radius=Math.min(18,height/2);
    const shadow=scene.add.graphics();shadow.fillStyle(0x312b75,color===COLORS.primary ? .15 : .07);shadow.fillRoundedRect(-width/2,-height/2+5,width,height,radius);
    this.face=scene.add.graphics();
    if(color===COLORS.primary)this.face.fillGradientStyle(0x8179f4,0x655de0,0x7168eb,0x5d56d4,1);else this.face.fillStyle(color,1);
    this.face.fillRoundedRect(-width/2,-height/2,width,height,radius);this.face.lineStyle(1,color===COLORS.primary?0x918af5:COLORS.border,.9);this.face.strokeRoundedRect(-width/2,-height/2,width,height,radius);
    const text=scene.add.text(0,-1,label,{fontFamily:FONT,fontSize:'17px',fontStyle:'bold',color:hex(textColor)}).setOrigin(.5);this.add([shadow,this.face,text]);this.setSize(width,height).setInteractive({useHandCursor:true});
    this.on('pointerdown',()=>scene.tweens.add({targets:this,scaleX:.965,scaleY:.965,y:y+2,duration:65,ease:'Quad.easeOut'}));
    this.on('pointerup',()=>scene.tweens.add({targets:this,scaleX:1,scaleY:1,y,duration:150,ease:'Back.easeOut',onComplete:onClick}));
    this.on('pointerout',()=>scene.tweens.add({targets:this,scaleX:1,scaleY:1,y,duration:120}));
  }
  setEnabled(enabled:boolean){this.disableInteractive();if(enabled)this.setInteractive({useHandCursor:true});this.setAlpha(enabled?1:.45);return this;}
}
