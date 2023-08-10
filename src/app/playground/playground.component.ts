import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {
  playground!: any[];
  xIsNext!: boolean;
  isTheWinner!: any;

  constructor() { } ngOnInit(): void {
    this.newGame();

  };

  newGame() {
    this.playground = Array(9).fill(null);
    this.xIsNext = true;
    this.isTheWinner = null;
  };

  get player() {
    return this.xIsNext ? 'X' : 'O';
  };

  makeMove(idx: number) {
    if (!this.playground[idx]) {
      // check if the square index is empty or not and replace the value by X or O
      this.playground.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    };
    this.isTheWinner = this.calculateWinner();
  };
  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.playground[a] &&

        this.playground[a] === this.playground[b] &&
        this.playground[a] === this.playground[c]) {
        return this.playground[a]
      };
    }
    return null;
  }
};


