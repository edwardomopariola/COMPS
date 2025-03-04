import { Fragment } from "react";

// This component is a table that takes in data and a config array as props
function Table({ data = [], config = [], keyFn }) {
    // Render the headers using the map function and the config array
    const renderedHeaders = config.map((column) => {
        if (column.header) {
            return <Fragment key={column.label}>{column.header()}</Fragment>;
        }

        return <th key={column.label}>{column.label}</th>;
    });

    // Render the rows using the map function and the config array
    const renderedRows = data.map((rowData) => {
        // Render the cells using the map function and the config array
        const renderedCells = config.map((column) => {
            return <td className="p-2" key={column.label}>{column.render(rowData)}</td>;
        });

        return (  // Return a table row with the rendered cells
            <tr className="border-b" key={keyFn(rowData)}>
                {renderedCells}
            </tr>
        );
    });

    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {renderedHeaders}
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    );
};


export default Table;