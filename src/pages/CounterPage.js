import { useState, useEffect } from 'react';
import Button from '../components/Button';

function CounterPage({ initialCount }) {
    const [count, setCount] = useState(initialCount);
   

    // useEffect hook that logs a message to the console whenever the count state changes 
    useEffect(() => {
        console.log(`You clicked count ${count} times`);
    }, [count]);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>You clicked {count} times</p>
            <Button onClick={handleClick}>
               Increment
            </Button>
        </div>
    );
}


export default CounterPage;