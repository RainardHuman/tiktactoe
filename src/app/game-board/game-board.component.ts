import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {

  board: string[][] = [
    ['_', '_', '_'],
    ['_', '_', '_'],
    ['_', '_', '_'],
  ];

  playerSelect = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  setPlayerValue(rowIndex: number, columnIndex: number, player: string) {
    if(['x', 'o'].includes(player)) {
      this.board[rowIndex][columnIndex] = player;
    } else {
      alert('select user')
    }
  }
}
