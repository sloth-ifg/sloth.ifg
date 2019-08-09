export class Chart {
    public chartType: string;
    public datasets: Array<any>;
    public chartLabels: Array<any>;
    public chartColors: Array<any> = [];
    public lineChartOptions: any = {
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };

    public doughnutChartOptions: any = {
        responsive: true,
        tooltips: {
            callbacks: {
                label: function(tooltipItem: any, data: any) {
                    var label = data.labels[tooltipItem.index];
                    if (label) {
                        label += ' : ';
                    }
                    label += data.datasets[0].data[tooltipItem.index] + "%";
                    return label;
                }
            }
        }
    };

    constructor(
        chartType: string,
        datasets: Array<any>,
        chartLabels: Array<any>
    ) {
        this.chartType = chartType;
        this.datasets = datasets;
        this.chartLabels = chartLabels;
    }

}