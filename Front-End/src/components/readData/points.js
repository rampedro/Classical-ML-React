import React, {Component} from 'react';
import {List, Button, Icon} from 'semantic-ui-react';
import './points.css';
import * as d3 from 'd3';



export class Points extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mylist : [10,2,3,4],
            points: this.props.points,
            toggle: this.props.toggle,
            deletePoint: this.props.deletePoint
        };
    };



    componentDidMount() {
        this.update();
    }

    componentDidUpdate() {
        this.update();
    };



    printdata(){
        d3.select("body").selectAll("p")
            .data(this.state.mylist)
            .enter()
            .append("p")
            .text((d)=>d);
            };

    update(){
        this.printdata();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.toggle !== this.props.toggle) {
            this.setState(this.props);
        }
    }

    render() {
        return (
            <div className="lin-regress__points">
                <h2><u>Points</u>:</h2>
                <div className="lin-regress__points-list">
                    <List>
                    {this.state.points.map((point, i) => {
                        return (
                            <List.Item key={i}>
                                <header className='point-row'>
                                    <span className='point-row__point'>
                                        ({point.x}, {point.y})
                                    </span>
                                    <Button className='point-row__delete'
                                        onClick={_ => {
                                            this.state.deletePoint(i);
                                        }
                                    }>
                                        <Icon name='close' />
                                    </Button>
                                </header>
                            </List.Item>
                        );
                    })}
                    </List>
                </div>
            </div>
        );
    }
};