import produce from 'immer';
import Button from '../components/Button';
import { useReducer  } from 'react';
import Panel from '../components/Panel';


// Action types that define the actions that can be dispatched to the reducer function
const INCREMENT_COUNT = 'increment';
const SET_VALUE_TO_ADD = 'change_value_to_add';
const DECREMENT_COUNT = 'decrement';
const ADD_VALUE_TO_COUNT = 'add_value_to_count';


// Reducer function that increments the count state by 1, it only has two arguments: state and action
const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:   // Reducer function that increments the count state by 1
            // return { 
            //     ...state, 
            //     count: state.count + 1 
            // };
          state.count = state.count + 1;
          return state;
        case DECREMENT_COUNT:   // Reducer function that decrements the count state by 1
            // return { 
            //     ...state, 
            //     count: state.count - 1 
            // };
            state.count = state.count - 1;
            return state;
        case SET_VALUE_TO_ADD:   // Reducer function that sets the valueToAdd state to the value entered in the input field
            // return { 
            //     ...state, 
            //     valueToAdd: action.payload,
            // };
            state.valueToAdd = action.payload;
            return state;
        case ADD_VALUE_TO_COUNT:   // Reducer function that adds the valueToAdd state to the count state
            // return { 
            //     ...state, 
            //     count: state.count + state.valueToAdd,
            //     valueToAdd: 0,
            // };
            state.count = state.count + state.valueToAdd;
            state.valueToAdd = 0;
            return state;
        default:   // Default case that returns the current state
            // return state;
            return;
    }
};
    
 
// CounterPage component that takes an initial count and returns the count state and increment and decrement functions
function CounterPage({ initialCount }) {
    // const [count, setCount] = useState(initialCount);
    // const [valueToAdd, setValueToAdd] = useState(0);
    const [state, dispatch] = useReducer(produce(reducer), {
        count: initialCount,
        valueToAdd: 0,
    });
    console.log(state);

    const increment = () => {   // increment function that increments the count state by 1
        dispatch({ 
            type: INCREMENT_COUNT, 
        });
    };

    const decrement = () => {   // decrement function that decrements the count state by 1
        dispatch({ 
            type: DECREMENT_COUNT,
        });
    };

    // Function that sets the valueToAdd state to the value entered in the input field
    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;

       dispatch({   // dispatch function that sends an action object to the reducer function
        type: SET_VALUE_TO_ADD,
        payload: value,
    });

    };
    const handleSubmit = (event) => {   // Function that adds the valueToAdd state to the count state
        event.preventDefault();
        dispatch({ 
            type: ADD_VALUE_TO_COUNT
        });
    }    
   
    // Returns the count state and increment and decrement functions
    return (
        <Panel className="m-3">
            <h1 className='text-lg'>Count is {state.count} </h1>
            <div className='flex flex-row'>
                <Button onClick={increment}>
                Increment
                </Button>
                <Button onClick={decrement}>
                Decrement
                </Button>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input 
                    value={state.valueToAdd || ''}
                    onChange={handleChange}
                    type='number' 
                    className="p-1 m-3 bg-gray-50 border border-gray-300" 
                />
                <Button>Add it!</Button>
            </form>
        </Panel>
    );
}


export default CounterPage;