import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-layout',
  templateUrl: './game-layout.component.html',
  styleUrls: ['./game-layout.component.css']
})
export class GameLayoutComponent implements OnInit {
  turnOfX = false;
  count = 0;
  draw = false;
  gameArray = [
    ['E','E','E'],
    ['E','E','E'],
    ['E','E','E']
  ];


  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  gamePlay(event:any, row:number, col:number):void{
    if(this.gameArray[row][col] === 'O' || this.gameArray[row][col] === 'X'){
      return
    }
    if(!this.turnOfX){
        this.count++;
        this.gameArray[row][col] = 'O';
        event.target.className = 'text-center text-light fw-600 tab m-0 p-4';
    }else{
      this.count++;
      this.gameArray[row][col] = 'X'
      event.target.className = 'text-center text-secondary fw-600 tab m-0 p-4'
    }
    this.turnOfX = !this.turnOfX;
    this.winnerChecker();
  }

  reset(){
    location.reload();
  }

  winnerChecker(): void {
    if((this.gameArray[0][0] === 'O' && this.gameArray[1][1] === 'O' && this.gameArray[2][2] === 'O') ||
       (this.gameArray[0][2] === 'O' && this.gameArray[1][1] === 'O' && this.gameArray[2][0] === 'O') ||
       (this.gameArray[0][0] === 'O' && this.gameArray[0][1] === 'O' && this.gameArray[0][2] === 'O') ||
       (this.gameArray[0][0] === 'O' && this.gameArray[1][0] === 'O' && this.gameArray[2][0] === 'O') ||
       (this.gameArray[0][1] === 'O' && this.gameArray[1][1] === 'O' && this.gameArray[2][1] === 'O') ||
       (this.gameArray[0][2] === 'O' && this.gameArray[1][2] === 'O' && this.gameArray[2][2] === 'O') ||
       (this.gameArray[1][0] === 'O' && this.gameArray[1][1] === 'O' && this.gameArray[1][2] === 'O') ||
       (this.gameArray[2][0] === 'O' && this.gameArray[2][1] === 'O' && this.gameArray[2][2] === 'O')
    )
    {
      this.router.navigate(["/welcome"],{ queryParams:{winner:'O'}})
    }
    else if((this.gameArray[0][0] === 'X' && this.gameArray[1][1] === 'X' && this.gameArray[2][2] === 'X') ||
            (this.gameArray[0][2] === 'X' && this.gameArray[1][1] === 'X' && this.gameArray[2][0] === 'X') ||
            (this.gameArray[0][0] === 'X' && this.gameArray[0][1] === 'X' && this.gameArray[0][2] === 'X') ||
            (this.gameArray[0][0] === 'X' && this.gameArray[1][0] === 'X' && this.gameArray[2][0] === 'X') ||
            (this.gameArray[0][1] === 'X' && this.gameArray[1][1] === 'X' && this.gameArray[2][1] === 'X') ||
            (this.gameArray[0][2] === 'X' && this.gameArray[1][2] === 'X' && this.gameArray[2][2] === 'X') ||
            (this.gameArray[1][0] === 'X' && this.gameArray[1][1] === 'X' && this.gameArray[1][2] === 'X') ||
            (this.gameArray[2][0] === 'X' && this.gameArray[2][1] === 'X' && this.gameArray[2][2] === 'X')
    ){
      this.router.navigate(["/welcome"],{ queryParams:{winner:'X'}})
    }else{
      this.gameDrawCheck();
    }
  }

  gameDrawCheck(): void{
    if(this.count === 9){
      this.draw = true;
    }
  }

}
