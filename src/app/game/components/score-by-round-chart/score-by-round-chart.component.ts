import { Component, OnInit, Input } from '@angular/core';
import { GameRound } from 'src/app/core/models/game-round';

@Component({
  selector: 'lm-score-by-round-chart',
  templateUrl: './score-by-round-chart.component.html',
  styleUrls: ['./score-by-round-chart.component.scss']
})
export class ScoreByRoundChartComponent implements OnInit {
  @Input() rounds: GameRound[];

  options = {
    backgroundColor: {
      fill: 'rgba(255 0 0 255)'
    },
    hAxis: {
      title: 'Round'
    }
  };

  chartData = [];
  columnNames: string[] = [];

  constructor() { }

  ngOnInit() {
    this.initializeChart();
  }

  initializeChart() {
    this.initializeChartColumnNames();
    this.initializeChartData();
  }

  initializeChartColumnNames() {
    if (!this.rounds || this.rounds.length === 0) { return; }
    this.columnNames = this.rounds[0].teamScores.map(t => t.team.name);
    if (!this.columnNames || this.columnNames.length === 0) { return; }
    this.columnNames.unshift('Round');
  }

  initializeChartData() {
    this.chartData = [];
    if (!this.rounds || this.rounds.length === 0) { return; }

    const firstRow = this.rounds[0].teamScores.map(() => 0);
    firstRow.unshift(0);
    this.chartData.push(firstRow);

    for (let i = 0; i < this.rounds.length; i++) {
      const data: number[] = this.rounds[i].teamScores.map((x, j) => i > 0 ? (x.score * 1) + this.chartData[i][j + 1] : x.score * 1);
      data.unshift(this.rounds[i].number);
      this.chartData.push(data);
    }
  }
}
