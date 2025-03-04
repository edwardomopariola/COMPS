import { useState } from "react";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";
import Table from "./Table";

function SortableTable(props) {
    const [sortOrder, setSortOrder] = useState(null);  // 'asc' or 'desc' 
    const [sortBy, setSortBy] = useState(null);  // 'name', 'color', or 'score'
    const { config, data } = props;

    const handleClick = (label) => {
        if (sortBy && label !== sortBy) {
            setSortOrder('asc');
            setSortBy(label);
            return;
        }


        if (sortOrder === null) {
            setSortOrder('asc');
            setSortBy(label);
        } else if (sortOrder === 'asc') {
            setSortOrder('desc');
            setSortBy(label);
        } else if (sortOrder === 'desc') {
            setSortOrder(null);
            setSortBy(null);
        }
       
    };
   
    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }

        return {
            ...column,
            header: () => (
                <th className="cursor-pointer hover:bg-gray-100" onClick={() => handleClick(column.label)}>
                    <div className="flex items-center">
                        {getIcons(column.label, sortOrder, sortBy)}
                        {column.label} 
                    </div>
                </th>
            ),
        };
    });

    //Only sort the data if sortOrder and sortBy are not null
    //Make a copy of the data props before sorting it
    //Find the correct sortvalue function based on the sortBy value
    //Sort the data based on the sortOrder and sortValue

    let sortedData = data;

    // Only sort the data if sortOrder and sortBy are not null
    if (sortOrder && sortBy) {
        const { sortValue} =config.find(column => column.label === sortBy);   // Find the correct sortValue function based on the sortBy value 
        sortedData = [...data].sort((a, b) => {
            // Sort the data based on the sortOrder and sortValue
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            // If the value is a string, use localeCompare to compare the strings
            // If the value is a number, subtract the values to compare them
            const reverOrder = sortOrder === 'asc' ? 1 : -1;
            if (typeof valueA === 'string') {
                return valueA.localeCompare(valueB) * reverOrder;
            } else {
                return (valueA - valueB) * reverOrder;
            }
        });
    
    }

    return <Table {...props} data={sortedData} config={updatedConfig}  />;
}

function getIcons(label, sortOrder, sortBy) {
    if (label !== sortBy) {
        return (
            <div>
                <GoArrowSmallUp />
                <GoArrowSmallDown />
            </div>
        );
    }

    if (sortOrder === 'asc') {
        return (
            <div>
                <GoArrowSmallUp />
            </div>
        );

    } else if (sortOrder === 'desc') {
        return (
            <div>
                <GoArrowSmallDown />
            </div>
        );
    }
    
    return null;
};

export default SortableTable;