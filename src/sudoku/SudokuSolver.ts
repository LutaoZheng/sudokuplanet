export type Grid = number[][];
export class SudokuSolver {
  static isValid(grid:Grid,row:number,col:number,num:number){
    for(let i=0;i<9;i++) if(grid[row][i]===num||grid[i][col]===num)return false;
    const br=Math.floor(row/3)*3,bc=Math.floor(col/3)*3;
    for(let r=br;r<br+3;r++)for(let c=bc;c<bc+3;c++)if(grid[r][c]===num)return false;
    return true;
  }
  static solve(grid:Grid):boolean {
    for(let r=0;r<9;r++)for(let c=0;c<9;c++)if(grid[r][c]===0){
      for(let n=1;n<=9;n++)if(this.isValid(grid,r,c,n)){grid[r][c]=n;if(this.solve(grid))return true;grid[r][c]=0;} return false;
    } return true;
  }
  static countSolutions(grid:Grid,limit=2):number {
    let count=0;
    const search=()=>{if(count>=limit)return;let bestR=-1,bestC=-1,best:number[]=[];
      for(let r=0;r<9;r++)for(let c=0;c<9;c++)if(grid[r][c]===0){const cand=[];for(let n=1;n<=9;n++)if(this.isValid(grid,r,c,n))cand.push(n);if(!cand.length)return;if(bestR<0||cand.length<best.length){bestR=r;bestC=c;best=cand;if(cand.length===1)break;}}
      if(bestR<0){count++;return;} for(const n of best){grid[bestR][bestC]=n;search();grid[bestR][bestC]=0;if(count>=limit)return;}
    }; search(); return count;
  }
}
