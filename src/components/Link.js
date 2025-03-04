import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

function Link({ to, children, className, activeClassName }) {
    const { navigate, currentPath } = useNavigation();  // Destructure the navigate function from the context
   
    // Create a classes variable that conditionally applies the activeClassName
    const classes = classNames(
        'text-blue-500', 
        className,
        currentPath === to && activeClassName
    );  
    
    // Create a handleClick function that prevents the default behavior of the anchor element and calls the navigate function
    const handleClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault();

        navigate(to);
    };

    return <a className={classes} href={"to"} onClick={handleClick}>{children}</a>  // Add an onClick event to the anchor element
};


export default Link;