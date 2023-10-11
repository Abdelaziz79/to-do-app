import React from 'react'
import { Container } from 'react-bootstrap';
import { useState } from 'react';

import './CounterStyle.css';

const Counter = () => {
    const [count, setCount] = useState(0);
    const plus = () => {
        setCount(count => count + 1);
    }

    const minus = () => {
        setCount(count => count - 1);
    }
    const reset = () => {
        setCount(0);
    }

    return (
        <Container className='con1 text-center'>
            <Container className='con2 p-3 border rounded m-3 bg-dark text-white'>
                <h1 className='display-2 ' id='h1'>{count}</h1>
                <button className='btn btn-primary p-3 m-2 ' type="button" onClick={() => plus()}>+</button>
                <button className='btn btn-primary p-3 m-2' type="button" onClick={() => reset()}>Reset</button>
                <button className='btn btn-primary p-3 m-2 ' type="button" onClick={() => minus()}>-</button>
            </Container>
        </Container>
    )
}

export default Counter