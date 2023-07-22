import { useState } from 'react';

export default function Home() {

    const [counter, setCounter] = useState(0);

    function increaseCounter() {
        setCounter(counter + 1);
    }

    return (
        <>
            <h2>Welcome Home</h2>
            <div>Count: {counter}</div>
            <button onClick={increaseCounter}>Increase Counter</button>
        </>
    )
}