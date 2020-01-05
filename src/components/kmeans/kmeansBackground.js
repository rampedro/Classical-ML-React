import React from 'react';
import {Header, Image} from 'semantic-ui-react';
import { InlineMath, BlockMath } from 'react-katex';

export const KMeansBackground = _ => {
    return (
        <div className='kmeans__background'>
            <Header size='huge'>
                Background
            </Header>
        </div>
    );
}