import React, {Component} from 'react';
import * as d3 from 'd3';


export class SVMChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 800,
            height: 400,
            radius: 5,
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
        const allPoints = this.props.points.concat(this.props.linePoints);
        let xMin = d3.min(allPoints, (d) => +d.x * .9);
        let xMax = d3.max(allPoints, (d) => +d.x * 1.1);
        let yMin = d3.min(allPoints, (d) => +d.y * .9);
        let yMax = d3.max(allPoints, (d) => +d.y * 1.1);

        // Define scales
        this.xScale = d3.scaleLinear().domain([xMin, xMax]).range([0, this.drawWidth])
        this.yScale = d3.scaleLinear().domain([yMax, yMin]).range([0, this.drawHeight])
    }
    
    updatePoints() {
        // Define hovers 
        // Add tip
        /*
        let tip = d3Tip.attr('class', 'd3-tip').html(function (d) {
            return d.label;
        });
        */

        // Select all circles and bind data
        let circles = d3.select(this.chartArea).selectAll('circle').data(this.props.points);

        // Use the .enter() method to get your entering elements, and assign their positions
        circles.enter().append('circle')
            .merge(circles)
            .attr('r', (d) => this.state.radius)
            .attr('fill', (d) => {
                if (d.label == 1)
                    return "red";
                else
                    return "blue";
            })
            .attr('label', (d) => d.label)
            //.on('mouseover', tip.show)
            //.on('mouseout', tip.hide)
            .transition().duration(500)
            .attr('cx', (d) => this.xScale(d.x))
            .attr('cy', (d) => this.yScale(d.y))
            .style('stroke', "black")
            .style('stroke-width', (d) => d.selected == true ? "3px" : "0px")


        // Use the .exit() and .remove() methods to remove elements that are no longer in the data
        circles.exit().remove();

        // Add hovers using the d3-tip library        
        //d3.select(this.chartArea).call(tip);
    }

    updateLine() {
        const line = d3.line()
            .x((d) => this.xScale(d.x))
            .y((d) => this.yScale(d.y))
            .curve(d3.curveMonotoneX);
        
        let svmBoundaryLine = d3.select(this.chartArea).selectAll('path');
        svmBoundaryLine.enter()
            .append('path')
            .merge(svmBoundaryLine)
            .attr('d', line(this.props.linePoints));

        svmBoundaryLine.exit().remove();
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
            <div className="svm__chart">
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