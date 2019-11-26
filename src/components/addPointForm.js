import React, {useState} from 'react';
import {Form, Input, Button} from 'semantic-ui-react';

export const AddPointForm = ({onNewPoint}) => {
    const [x, setX] = useState('');
    const [y, setY] = useState('');
    const [xStatus, setXStatus] = useState('');
    const [yStatus, setYStatus] = useState('');

    const validNumber = str => {
        return str.length > 0 && isFinite(str);
    };
    
    return (
        <Form>
            <div style={{display: 'flex'}}>
                <Form.Field>
                    <Input  placeholder='X-Coordinate'
                            value={x}
                            onChange={e => {
                                setX(e.target.value);
                                if (!validNumber(e.target.value))
                                    setXStatus('Not a number!');
                                else
                                    setXStatus('');
                            }}
                    />
                </Form.Field>
                &nbsp;&nbsp;
                <span style={{color: 'red'}}>{xStatus}</span>
            </div>
            <div style={{display: 'flex'}}>
                <Form.Field>
                    <Input  placeholder='Y-Coordinate'
                            value={y}
                            onChange={e => {
                                setY(e.target.value);
                                if (!validNumber(e.target.value))
                                    setYStatus('Not a number!');
                                else
                                    setYStatus('');
                            }}
                    />
                </Form.Field>
                &nbsp;&nbsp;
                <span style={{color: 'red'}}>{yStatus}</span>
            </div>
            <Button disabled={!(validNumber(x) && validNumber(y))}
                    onClick={() => {
                        onNewPoint([x, y]);
                        setX('');
                        setY('');
                        setXStatus('');
                        setYStatus('');
                    }
            }>
                Add Point
            </Button>
        </Form>
    );
};