import React from 'react';
import {Button} from 'semantic-ui-react';

export const PerformRegression = ({points}) => {
    return (
        <Button onClick={ async () => {
            const x = [];
            const y = [];
            points.map(point => {
                x.push(point[0]);
                y.push(point[1]);
            });

            const response = await fetch('/lin_regress', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'x': x,
                    'y': y
                })
            });

            const outputData = await response.json();
            console.log(JSON.stringify(outputData));
        }}>
            Perform Linear Regression!
        </Button>
    );
};