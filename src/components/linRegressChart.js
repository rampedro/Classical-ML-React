import React, {componentDidUpdate, Component} from 'react';
import {Bar} from 'react-chartjs-2';


const getData = (points, pts) => {
    const leftPoint = {
        x: pts[0].x,
        y: pts[0].y
    }

    const rightPoint = {
        x: pts[1].x,
        y: pts[1].y
    }
    return {
        datasets: [
            {
                label                    : 'Points',
                type                     : 'scatter',
                data                     : points,
                fill                     : false,
                borderColor              : '#EC932F',
                backgroundColor          : '#EC932F',
                pointBorderColor         : '#EC932F',
                pointBackgroundColor     : '#EC932F',
                pointHoverBackgroundColor: '#EC932F',
                pointHoverBorderColor    : '#EC932F',
                pointRadius              : 5,
                pointHoverRadius         : 5,
                yAxisID                  : 'y-axis-0'
            }, {
                label               : 'Best Fit Line',
                type                : 'line',
                data                : [leftPoint, rightPoint],
                fill                : false,
                backgroundColor     : '#71B37C',
                borderColor         : '#71B37C',
                hoverBackgroundColor: '#71B37C',
                hoverBorderColor    : '#71B37C',
                pointRadius              : 0,
                pointHoverRadius         : 0,
                yAxisID             : 'y-axis-1'
            }
        ]
    };
};

const getOptions = (labels) => {
    return {
        tooltips: {
            filter: function (tooltipItem) {
                return tooltipItem.datasetIndex === 0;
            },
            mode: 'point',
            displayColors: false,
            callbacks: {    
                title: function() {
                    return '';
                },
                label: function(tooltipItem) {
                    return '(' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ')';
                }
            },
        },
        legend: {
            display: false
        },
        responsive: true,
        elements: {
            line: {
                fill: false
            }
        },
        scales: {
            xAxes: [{
                labels: labels
            }, {
                position: 'top',
                ticks: {
                    display: false
                },
                gridLines: {
                    display: false,
                    drawTicks: false
                }
            }],
            yAxes: [{
                /* Your yAxes options here */
            }, {
                position: 'right',
                ticks: {
                    display: false
                },
                gridLines: {
                    display: false,
                    drawTicks: false
                }
            }]
        }
    };
};

const range = (low, high) => { 
    return Array.from(new Array(high - low + 1), (_, i) => i + low);
};

export class LinRegressChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            points: this.props.points,
            labels: range(this.props.metadata.pts[0].x, this.props.metadata.pts[1].x),
            metadata: this.props.metadata,
            toggle: 0
        };
    };

    componentDidUpdate(prevProps) {
        if (this.props.toggle !== prevProps.toggle) {
            this.setState({
                points: this.props.points,
                labels: range(this.props.metadata.pts[0].x, this.props.metadata.pts[1].x),
                metadata: this.props.metadata,
                toggle: this.props.toggle
            });
        }
    };


    render() {
        return (
            <Bar
                data={getData(this.state.points, this.state.metadata.pts)}
                width={800}
                options={getOptions(this.state.labels)}
            />
        );
    }
};