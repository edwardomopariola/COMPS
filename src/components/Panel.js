import classNames from "classnames";   

function Panel({ children, className, ...rest }) {    // Destructuring props children, className and rest
    const finalClassNames = classNames('border rounded p-3 shadow bg-white w-full', className);  // Create a variable to store the final class names
    return (
        <div  {...rest} className={finalClassNames}>   {/* Spread the rest of the props and add the final class names */}
            {children}  {/* Render the children */}
        </div>
    );
};





export default Panel;