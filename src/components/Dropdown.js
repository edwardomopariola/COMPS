import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from "react-icons/go";
import Panel from './Panel';
import { use } from 'react';

function Dropdown({ options, value, onChange }) {  // Destructuring props  options, selection and onSelect
    const [isOpen, setisOpen] = useState(false);  // Initialize the state with false
    const divEl = useRef();  // Create a ref to store the reference to the dropdown, useRef is used to create a mutable object that persists for the lifetime of the component

    useEffect(() => {  // Create a useEffect hook. useEffect is used to perform side effects in function components
        const handler = (event) => {  // Create a function to handle the click event
            if (!divEl.current) return;  // Check if the dropdown does not exist
            
            if (!divEl.current.contains(event.target)) {  // Check if the dropdown does not contain the event target
                setisOpen(false);  // Close the dropdown
            }
        };
        document.addEventListener('click', handler, true);  // Add an event listener to the document, passing the handler function, and setting the useCapture parameter to true
        
        return () => {  // Return a cleanup function
            document.removeEventListener('click', handler);  // Remove the event listener
        }
    }, []);  // Add an empty dependency array


    const handleClicked = () => {  // Create a function to handle the click event
        setisOpen(!isOpen);  // Toggle the state, opening or closing the dropdown
    };

    const handleOptionClick = (option) => {  // Create a function to handle the option click event
        setisOpen(false);  // Set the state to false, closing the dropdown
       onChange(option);  // Call the onSelect function, passing the option as an argument 
    }


    const renderedOptions = options.map((option) => {   // Map over the options
        return (
            <div className="hover:bg-sky-100 rounded cursor-pointer p-1" 
            onClick={() => handleOptionClick(option)} key={option.value}>{option.label} </div>  // Add an onClick event to the div, passing the option as an argument
        );
    });

    let content = 'select...';  // Initialize the content with 'select...'
    if (value) {  // Check if there is a selection
        content = value.label;  // Set the content to the selection label
    }


    return (
        <div ref={divEl} className="w-48 relative">  {/* Add a className to the parent div */} 
            <Panel 
                className="flex justify-between items-center cursor-pointer"
                onClick={handleClicked}  // Add an onClick event to the parent div
            >
                {value?.label || 'select...'}   {/* Render the selection label or 'select...' */}
                <GoChevronDown className='text-lg'/>   {/* Render the chevron icon */}
            </Panel>

            {isOpen && (
                <Panel className="absolute top-full ">   {/* Add a className to the dropdown */}
                    {renderedOptions}   {/* Render the options only if the dropdown is open */}
                </Panel>
            )}  
        </div>
    );
}


export default Dropdown;