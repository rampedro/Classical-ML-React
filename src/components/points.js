import React from 'react';
import {List, Header} from 'semantic-ui-react';

export const Points = ({points}) => {
    return (
        <List>
        {points.map((point, i) => {
            return (
                <List.Item key={i}>
                    <Header>({point[0]}, {point[1]})</Header>
                </List.Item>
            );
        })}
        </List>
    );
};