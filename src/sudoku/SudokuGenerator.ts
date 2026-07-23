import { SudokuSolver,type Grid } from './SudokuSolver'; import type { Difficulty } from '../types'; import { getDifficulty,type RemovalPattern } from '../data/levels';
const shuffle=<T>(a:T[])=>{for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
export interface Puzzle { puzzle:Grid; solution:Grid; }
export class SudokuGenerator {
  static seeded(seed:number){let s=seed>>>0;return()=>((s=Math.imul(1664525,s)+1013904223>>>0)/4294967296);}
  static generate(difficulty:Difficulty,seed?:number,clueRange?:[number,number],pattern:RemovalPattern='random'):Puzzle {
    const oldRandom=Math.random;if(seed!==undefined)Math.random=this.seeded(seed);
    try { const solution=Array.from({length:9},()=>Array(9).fill(0)); this.fill(solution); const puzzle=solution.map(r=>[...r]); const [min,max]=clueRange??getDifficulty(difficulty).clues; const target=min+Math.floor(Math.random()*(max-min+1));
      const base=Array.from({length:41},(_,i)=>i);const cells=pattern==='random'?shuffle(Array.from({length:81},(_,i)=>i)):shuffle(base).flatMap(i=>i===40?[40]:[i,80-i]);if(pattern==='mixed'){const split=Math.floor(cells.length*.6);cells.splice(split,cells.length-split,...shuffle(cells.slice(split)));}let clues=81;
      for(const idx of cells){if(clues<=target)break;const r=Math.floor(idx/9),c=idx%9,old=puzzle[r][c];puzzle[r][c]=0;if(SudokuSolver.countSolutions(puzzle.map(row=>[...row]))!==1)puzzle[r][c]=old;else clues--;}
      return {puzzle,solution};
    } finally {Math.random=oldRandom;}
  }
  private static fill(grid:Grid):boolean {for(let r=0;r<9;r++)for(let c=0;c<9;c++)if(grid[r][c]===0){for(const n of shuffle([1,2,3,4,5,6,7,8,9]))if(SudokuSolver.isValid(grid,r,c,n)){grid[r][c]=n;if(this.fill(grid))return true;grid[r][c]=0;}return false;}return true;}
}
