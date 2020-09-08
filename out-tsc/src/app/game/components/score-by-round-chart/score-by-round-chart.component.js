import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let ScoreByRoundChartComponent = class ScoreByRoundChartComponent {
    constructor() {
        this.roundLabel = 'Round';
        this.options = {
            backgroundColor: {
                fill: '#fff9c4'
            },
            chartArea: {
                backgroundColor: '#ffffff'
            },
            hAxis: {
                title: this.roundLabel,
                ticks: []
            },
            vAxis: {
                title: 'Score'
            }
        };
        this.chartData = [];
        this.columnNames = [];
    }
    ngOnInit() {
        this.initializeChart();
        this.options.hAxis.title = this.roundLabel;
    }
    initializeChart() {
        this.initializeChartColumnNames();
        this.initializeChartData();
    }
    initializeChartColumnNames() {
        if (!this.rounds || this.rounds.length === 0) {
            return;
        }
        this.columnNames = this.rounds[0].teamScores.map(t => t.team.name);
        if (!this.columnNames || this.columnNames.length === 0) {
            return;
        }
        this.columnNames.unshift(this.roundLabel);
    }
    initializeChartData() {
        this.chartData = [];
        if (!this.rounds || this.rounds.length === 0) {
            return;
        }
        const firstRow = this.rounds[0].teamScores.map(() => 0);
        firstRow.unshift(0);
        this.chartData.push(firstRow);
        for (let i = 0; i < this.rounds.length; i++) {
            const data = this.rounds[i].teamScores.map((x, j) => i > 0 ? (x.score * 1) + this.chartData[i][j + 1] : x.score * 1);
            data.unshift(this.rounds[i].number);
            this.chartData.push(data);
        }
        this.options.hAxis.ticks = this.rounds.map(x => x.number);
        this.options.hAxis.ticks.unshift('');
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], ScoreByRoundChartComponent.prototype, "roundLabel", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], ScoreByRoundChartComponent.prototype, "rounds", void 0);
ScoreByRoundChartComponent = tslib_1.__decorate([
    Component({
        selector: 'lm-score-by-round-chart',
        templateUrl: './score-by-round-chart.component.html',
        styleUrls: ['./score-by-round-chart.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], ScoreByRoundChartComponent);
export { ScoreByRoundChartComponent };
//# sourceMappingURL=score-by-round-chart.component.js.map