import React from 'react';
import { add, sub, mul, div } from './Cal';


function App() {
    return (
        <>
            <ul>
                <li>Addiation of two number is       : {add(20, 30)} </li>
                <li>Subtraction of two number is     : {sub(50, 30)} </li>
                <li>Multiplication of two number is  : {mul(20, 30)} </li>
                <li>Division of two number is        : {div(500, 366)} </li>

            </ul>
        </>
    );
}
export default App;