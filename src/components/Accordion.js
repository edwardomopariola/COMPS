import { useState } from 'react';   // Import the useState hook from React

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(-1); // Initialize the state with null

    const renderedItems = items.map((item, index) => {
       const isExpanded = index === expandedIndex; // Check if the item is expanded

       const icon = <span>
        {isExpanded ? '🔽' : '🔼'}   
       </span>

        return (
            <div key={item.id}>
                <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => setExpandedIndex(index)}>
                    {icon}
                    {item.label}
                </div>  {/* Set the expanded index on click */}
                {isExpanded && <div className="border-b p-5">{item.content}</div>}   {/* Render the content only if the item is expanded */}
            </div>
        );
    });
    
    return <div className="border-x border-t rounded">{renderedItems}</div>;
};


export default Accordion;