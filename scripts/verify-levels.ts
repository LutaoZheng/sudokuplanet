import { LEVEL_MODES } from '../src/data/difficulty';
import { getLevelConfig } from '../src/data/levels';
import { SudokuGenerator } from '../src/sudoku/SudokuGenerator';
import { SudokuSolver } from '../src/sudoku/SudokuSolver';

const seeds=new Set<number>();
for(const mode of LEVEL_MODES){
  let previousAverage=Infinity;
  for(let level=1;level<=100;level++){
    const config=getLevelConfig(mode.id,level);
    if(config.level!==level)throw new Error(`${mode.id} level mismatch at ${level}`);
    if(config.clues[0]<22||config.clues[1]>55||config.clues[0]>config.clues[1])throw new Error(`${mode.id} invalid clues at ${level}`);
    if(seeds.has(config.seed))throw new Error(`duplicate seed ${config.seed}`);
    seeds.add(config.seed);
    const average=(config.clues[0]+config.clues[1])/2;
    if(average>previousAverage)throw new Error(`${mode.id} curve became easier at ${level}`);
    previousAverage=average;
  }
}
if(seeds.size!==400)throw new Error(`expected 400 unique levels, got ${seeds.size}`);
const checkpoints=[1,10,25,26,50,51,75,76,100];
const expectedTiers=['veryEasy','veryEasy','easy','easyMedium','medium','mediumHard','hard','expert','master'];
checkpoints.forEach((level,index)=>{const config=getLevelConfig('normal',level);if(config.logicTier!==expectedTiers[index])throw new Error(`level ${level} tier mismatch`);const first=SudokuGenerator.generate(config.generatorDifficulty,config.seed,config.clues,config.removalPattern);const second=SudokuGenerator.generate(config.generatorDifficulty,config.seed,config.clues,config.removalPattern);if(JSON.stringify(first.puzzle)!==JSON.stringify(second.puzzle))throw new Error(`level ${level} is not deterministic`);if(SudokuSolver.countSolutions(first.puzzle.map(row=>[...row]))!==1)throw new Error(`level ${level} is not unique`);});
console.log('Verified 4 modes × 100 levels, 8-tier curve, deterministic checkpoints and unique solutions.');
