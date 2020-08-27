import React, {useState} from 'react';
import { TestChildren } from "./testChildren/TestChildren";

export const Test = (props) => {
    const [data, setNewData] = useState([{name: "alex"}])

    const clickHandler = (name) => {
        console.log('props', name)
    }
    return (
        <div>
            {props.name ? <p>{props.name}</p> : <p>Loading...</p>}
            {props && <TestChildren data={data} /> }
            <button className="btn" onClick={() => clickHandler(props.name)}>Click</button>
        </div>
    )
}

