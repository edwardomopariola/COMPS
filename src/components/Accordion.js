import { useState } from 'react';   // Import the useState hook from React

// Create an Accordion component
function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(-1); // Initialize the state with null

    const renderedItems = items.map((item, index) => {  // Map over the items
       const isExpanded = index === expandedIndex; // Check if the item is expanded

       const icon = <span>   {/* Create a span element for the icon */}
        {isExpanded ? '🔽' : '🔼'}                
       </span>   

        return (
            <div key={item.id}>  {/* Add a key prop to the parent div */}
                <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => setExpandedIndex(index)}>   {/* Add an onClick event to the parent div */}
                    {item.label}   {/* Render the label */}
                    {icon}    {/* Render the icon */}
                </div>  {/* Set the expanded index on click */}
                {isExpanded && <div className="border-b p-5">{item.content}</div>}   {/* Render the content only if the item is expanded */}
            </div>   // Return the parent div with the label and content
        );
    });
    
    return <div className="border-x border-t rounded">{renderedItems}</div>;  // Return the parent div with the rendered items
};


export default Accordion;