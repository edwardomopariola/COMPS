// import Table from "../components/Table";
import SortableTable from "../components/SortableTable";
import Table from "../components/Table";

// Create a TablePage component that renders a table
function TablePage() {
    const data = [
        { name: "Orange", color: 'bg-orange-500', score: 5 },
        { name: "Apple", color: 'bg-red-500', score: 3 },
        { name: "Banana", color: 'bg-yellow-500', score: 1 },
        { name: "Lime", color: 'bg-green-500', score: 4 },
        { name: "Blueberry", color: 'bg-blue-500', score: 2 },
        
      
    ];

    // Create a config array that specifies the labels for each column in the table
    const config = [
        {   
            label: 'Name', 
            render: (fruit) => fruit.name,
            sortValue: (fruit) => fruit.name,
        }, 

        {   
            label: 'Color',
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`} />,
        },

        {   
            label: 'Score',
            render: (fruit) => fruit.score,
            sortValue: (fruit) => fruit.score,
        },

        {
            label: 'Score Squared',
            render: (fruit) => fruit.score * fruit.score,
            sortValue: (fruit) => fruit.score * fruit.score,
        },

        {
            label: 'Actions',
            render: (fruit) => <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button>
        },
    ];

    const keyFn = (fruit) => {
       return fruit.name;
    }

    return (
        // Render the SortableTable component with the data, config, and keyFn props
        // Pass the data, config, and keyFn props to the SortableTable component
        <div>
            <h1 className="text-2xl font-bold mb-4">Fruit Table</h1>
            <SortableTable data={data} config={config} keyFn={keyFn}/>
        </div>
    );
}

export default TablePage;