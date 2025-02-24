import useNavigation from "../hooks/use-navigation";

function Route({ path, children }) {
    const { currentPath } = useNavigation();  // Destructure the currentPath from the context

    if (path === currentPath) {  // Check if the path matches the current path
        return children;  // Return the children
    }
    
    return null;  // Return null if the path does not match the current path
}
export default Route;  // Export the Route component