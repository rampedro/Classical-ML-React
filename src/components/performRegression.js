import React from 'react';
import {Button} from 'semantic-ui-react';

export const PerformRegression = ({points, updateMetadata}) => {
    return (
        <Button onClick={ async () => {
            const x = [];
            const y = [];
            points.map(point => {
                x.push(point.x);
                y.push(point.y);
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

            const metadata = await response.json();
            updateMetadata(metadata);
        }}>
            Perform Linear Regression!
        </Button>
    );
};