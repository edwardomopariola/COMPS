import Button from '../components/Button';
import useCounter from '../hooks/use-counter';


// The CounterPage component imports the useCounter hook and uses it to manage the count state and increment function.
// The count state is displayed in a paragraph element, and the increment function is called when the button is clicked.
function CounterPage({ initialCount }) {
    const { count, increment } = useCounter();
   
    return (
        <div>
            <p>You clicked {count} times</p>
            <Button onClick={increment}>
               Increment
            </Button>
        </div>
    );
}


export default CounterPage;