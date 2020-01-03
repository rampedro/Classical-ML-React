import React, {Component} from 'react';
import * as d3 from 'd3';


export class LinRegressChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 800,
            height: 400,
            radius: 5,
            color: '#FF0000',
            margin: {
                left: 50,
                right: 10,
                top: 20,
                bottom: 50
            }
        };

        this.drawWidth = this.state.width - this.state.margin.left - this.state.margin.right;
        this.drawHeight = this.state.height - this.state.margin.top - this.state.margin.bottom;
    };

    componentDidMount() {
        this.update();
    }

    componentDidUpdate() {
        this.update();
    };

    updateScales() {
        // Calculate limits
        const allPoints = this.props.points
            .concat(this.props.bestFitLine);
        
        let xMin = d3.min(allPoints, (d) => +d.x * 0.9);
        let xMax = d3.max(allPoints, (d) => +d.x * 1.1);
        let yMin = d3.min(allPoints, (d) => +d.y * 0.9);
        let yMax = d3.max(allPoints, (d) => +d.y * 1.1);

        // Define scales
        this.xScale = d3.scaleLinear().domain([xMin, xMax]).range([0, this.drawWidth])
        this.yScale = d3.scaleLinear().domain([yMax, yMin]).range([0, this.drawHeight])
    }
    
    updatePoints() {
        // Select all circles and bind data
        let circles = d3.select(this.chartArea).selectAll('circle').data(this.props.points);

        // Use the .enter() method to get your entering elements, and assign their positions
        circles.enter().append('circle')
            .merge(circles)
            .attr('r', (d) => this.state.radius)
            .attr('fill', this.state.color)
            .attr('label', (d) => d.label)
            .transition().duration(500)
            .attr('cx', (d) => this.xScale(d.x))
            .attr('cy', (d) => this.yScale(d.y))
            .style('stroke', "black")
            .style('stroke-width', (d) => d.selected == true ? "3px" : "0px")


        // Use the .exit() and .remove() methods to remove elements that are no longer in the data
        circles.exit().remove();
    }

    updateLine() {
        const line = d3.line()
            .x((d) => this.xScale(+d.x))
            .y((d) => this.yScale(+d.y))
            .curve(d3.curveMonotoneX);

        let bestFitLine = d3.select(this.chartArea)
            .selectAll('.lin-regress__chart__best-fit-line')
            .data([this.props.bestFitLine]);
        
        bestFitLine.enter().append('path')
            .merge(bestFitLine)
            .attr('class', 'lin-regress__chart__best-fit-line')
            .attr('fill', 'none')
            .attr('stroke', '#000000')
            .attr('stroke-width', 3)
            .transition().duration(500)
            .attr('d', (d) => line(d))
    }
    
    updateAxes() {
        let xAxisFunction = d3.axisBottom()
            .scale(this.xScale)
            .ticks(5, 's');

        let yAxisFunction = d3.axisLeft()
            .scale(this.yScale)
            .ticks(5, 's');

        d3.select(this.xAxis)
            .call(xAxisFunction);

        d3.select(this.yAxis)
            .call(yAxisFunction);
    }
    
    update() {
        this.updateScales();
        this.updateAxes();
        this.updatePoints();
        this.updateLine();
    }

    render() {
        return (
            <div className="lin-regress__chart">
                <svg className="chart" width={this.state.width} height={this.state.height}>
                    <g ref={(node) => { this.chartArea = node; }}
                        transform={`translate(${this.state.margin.left}, ${this.state.margin.top})`} />

                    {/* Axes */}
                    <g ref={(node) => { this.xAxis = node; }}
                        transform={`translate(${this.state.margin.left}, ${this.state.height - this.state.margin.bottom})`}></g>
                    <g ref={(node) => { this.yAxis = node; }}
                        transform={`translate(${this.state.margin.left}, ${this.state.margin.top})`}></g>
                </svg>
            </div>

        )
    }
};