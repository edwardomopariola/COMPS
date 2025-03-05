import { useState, useEffect } from 'react';


// Custom hook that takes an initial count and returns the count state and an increment function
function useCounter(initialCount = 10) {
    const [count, setCount] = useState(initialCount);
   

    // useEffect hook that logs a message to the console whenever the count state changes 
    useEffect(() => {
        console.log(`You clicked ${count} times`);
    }, [count]);

    // increment function that increments the count state by 1
    const increment = () => {
        setCount(count + 1);
    };

    // Returns the count state and increment function
    return {
        count,
        increment,
    }
}

export default useCounter;