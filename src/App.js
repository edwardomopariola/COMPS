import { useState } from "react";
import Dropdown from "./components/Dropdown";

function App() {
    const [selection, setSelection] = useState(null);  // Initialize the state with null

    const handleSelect = (option) => {  // Create a function to handle the selected option
        setSelection(option);  // Set the selected option
    };


    const options = [
        { label: "The Color Red", value: "red" },
        { label: "The Color Green", value: "green" },
        { label: "A Shade of Blue", value: "blue" },
    ];

    return(
        <div  className="flex">  {/* Add a className to the parent div */}
            <Dropdown
                options={options}   // Pass the options as a prop
                value={selection}   // Pass the selection as a prop
                onChange={handleSelect}   // Pass the handleSelected function as a prop
            />
        </div>
    );
};


export default App;