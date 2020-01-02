import React, {Component} from 'react';
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

const getOptions = (points, tickLabels) => {
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
                    const x = points[tooltipItem.index].x
                    const y = points[tooltipItem.index].y
                    return '(' + x + ', ' + y + ')';
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
                labels: tickLabels
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

const pointsCompare = (a, b) => {
    if (a.x > b.x)
        return 1;
    else if (a.x < b.x)
        return -1;
    else
        return 0;
};

const merge = (tickLabels, otherTickLabels) => {
    let newTickLabels = [];
    let i = 0, j = 0;
    while (i < tickLabels.length || j < otherTickLabels.length) {
        if (i < tickLabels.length && j < otherTickLabels.length) {
            if (tickLabels[i] < otherTickLabels[j].x) {
                newTickLabels.push(tickLabels[i]);
                i++;
            } else {
                newTickLabels.push(otherTickLabels[j].x);
                j++;
            }
        } else if (i < tickLabels.length) {
            newTickLabels.push(tickLabels[i]);
            i++;
        } else {
            newTickLabels.push(otherTickLabels[j].x);
            j++;
        }
    }

    return newTickLabels;
};

const range = (low, high, points) => { 
    let tickLabels = Array.from(new Array(high - low + 1), (_, i) => i + low);
    let otherTickLabels = points.filter((point) => {
        return !Number.isInteger(point.x);
    });
    otherTickLabels.sort(pointsCompare);

    let allTickLabels = merge(tickLabels, otherTickLabels);
    return allTickLabels;
};


export class SVMChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            points: this.props.points,
            tickLabels: range(this.props.metadata.pts[0].x, this.props.metadata.pts[1].x, this.props.points),
            metadata: this.props.metadata,
            toggle: this.props.toggle
        };
    };

    componentDidUpdate(prevProps) {
        if (this.props.toggle !== prevProps.toggle) {
            this.setState({
                points: this.props.points,
                labels: range(this.props.metadata.pts[0].x, this.props.metadata.pts[1].x, this.props.points),
                metadata: this.props.metadata,
                toggle: this.props.toggle
            });
        }
    };


    render() {
        return (
            <div className='svm__chart'>
                <Bar
                    data={getData(this.state.points, this.state.metadata.pts)}
                    width={400}
                    options={getOptions(this.state.points, this.state.tickLabels)}
                />
            </div>
        );
    }
};