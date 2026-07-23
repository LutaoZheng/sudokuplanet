import { getChapter } from '../src/data/levels';
import { TitleManager } from '../src/systems/TitleManager';
import { StarManager } from '../src/systems/StarManager';
import { ACHIEVEMENTS } from '../src/data/achievements';
import { SHOP_ITEMS } from '../src/data/shop';
import { GAME_THEMES } from '../src/data/themes';

const assert=(condition:boolean,message:string)=>{if(!condition)throw new Error(message);};
assert(getChapter(1).name==='星球启航','level 1 chapter mismatch');
assert(getChapter(25).chapter===1,'level 25 chapter mismatch');
assert(getChapter(26).name==='逻辑森林','level 26 chapter mismatch');
assert(getChapter(51).name==='智慧大陆','level 51 chapter mismatch');
assert(getChapter(100).name==='大师领域','level 100 chapter mismatch');
assert(TitleManager.instance.getTitle(1).title==='数独新手','level 1 title mismatch');
assert(TitleManager.instance.getTitle(5).title==='逻辑探索者','level 5 title mismatch');
assert(TitleManager.instance.getTitle(100).title==='数独传奇','level 100 title mismatch');
assert(StarManager.instance.calculate({elapsed:200,errors:0,hintsUsed:0,targetTime:300})===3,'three-star rule mismatch');
assert(StarManager.instance.calculate({elapsed:400,errors:1,hintsUsed:1,targetTime:300})===2,'two-star rule mismatch');
assert(StarManager.instance.calculate({elapsed:400,errors:2,hintsUsed:2,targetTime:300})===1,'one-star rule mismatch');
assert(ACHIEVEMENTS.length===20,'expected 20 achievements');
assert(SHOP_ITEMS.some(item=>item.id==='hint_ticket'),'hint ticket missing');
assert(SHOP_ITEMS.filter(item=>item.type==='boardTheme').length>=4,'board themes missing');
for(const id of ['default','theme_starry','theme_sakura','theme_ocean']){const theme=GAME_THEMES[id];assert(Boolean(theme),`theme ${id} missing`);assert(theme.board!==theme.selected,`theme ${id} selection color missing`);assert(theme.givenNumber!==theme.playerNumber,`theme ${id} number contrast missing`);}
console.log('Verified chapters, titles, star ratings, 20 achievements, shop catalog and game themes.');
