import { useState } from 'react';

function useSort(data, config) {
    const [sortOrder, setSortOrder] = useState(null);  // 'asc' or 'desc' 
    const [sortBy, setSortBy] = useState(null);  // 'name', 'color', or 'score'

    const setSortColumn = (label) => {
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

    return {
        sortOrder,
        sortBy,
        setSortColumn,
        sortedData,
    };
}

export default useSort;