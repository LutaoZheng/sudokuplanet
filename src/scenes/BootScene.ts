import Phaser from 'phaser'; import { addBackground } from '../ui/layout'; import { COLORS,FONT } from '../ui/theme'; import { PlayerManager } from '../systems/PlayerManager'; import { LevelManager } from '../systems/LevelManager'; import { TutorialManager } from '../systems/TutorialManager';
import { ShopManager } from '../systems/ShopManager';
export class BootScene extends Phaser.Scene {
  constructor(){super('Boot')}
  create(){
    addBackground(this); PlayerManager.instance.load();LevelManager.instance.load();TutorialManager.instance.load();ShopManager.instance.load();
    this.add.circle(210,285,70,COLORS.primary,.10); this.add.circle(210,285,52,COLORS.primary).setStrokeStyle(3,0xffffff,.65);
    this.add.text(210,285,'9',{fontFamily:FONT,fontSize:'58px',fontStyle:'bold',color:'#ffffff'}).setOrigin(.5);
    this.add.text(210,382,'数独星球',{fontFamily:FONT,fontSize:'34px',fontStyle:'bold',color:'#20243a'}).setOrigin(.5);
    this.add.text(210,422,'SUDOKU PLANET',{fontFamily:FONT,fontSize:'13px',letterSpacing:5,color:'#8a8fa5'}).setOrigin(.5);
    const bar=this.add.rectangle(110,525,0,5,COLORS.primary).setOrigin(0,.5); this.add.rectangle(210,525,200,5,0xdfe1ea,1);
    this.add.text(210,555,'正在加载…',{fontFamily:FONT,fontSize:'14px',color:'#7e849b'}).setOrigin(.5);
    this.tweens.add({targets:bar,width:200,duration:700,ease:'Sine.easeOut',onComplete:()=>this.time.delayedCall(150,()=>this.scene.start(PlayerManager.instance.data.onboardingCompleted?'Home':'Onboarding'))});
  }
}
