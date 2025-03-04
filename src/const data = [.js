const data = [
    { name: 'tomato', cost: 10, weight: 5 },
    { name: 'apple', cost: 5, weight: 5 },
    { name: 'banana', cost: 3, weight: 7 },
    { name: 'orange', cost: 2, weight: 4 },
    { name: 'kiwi', cost: 1, weight: 5 },
   
];

function getSortedData(data) {
    return data.name;
}
   
// Sort by name in ascending order 
const sortOrder = 'asc'; // 'asc' or 'desc'

data.sort((a, b) => {
    const valueA = getSortedData(a);
    const valueB = getSortedData(b);

    const sortValue = sortOrder === 'asc' ? 1 : -1;

    if (typeof valueA === 'string') {
        return valueA.localeCompare(valueB) * sortValue;
    } else {
        return (valueA - valueB) * sortValue;
    }

});

