import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();  // Create a context to store the navigation items

const NavigationProvider = ({ children }) => {  // Create a provider
    const [currentPath, useCurrentPath] = useState(window.location.pathname);  // Initialize the state with an empty string

    //handing the path change
    useEffect(() => {  // Create a useEffect hook
        const handlePathChange = () => {  // Create a function to handle the path change
            useCurrentPath(window.location.pathname);  // Update the state with the new path
        };
        window.addEventListener('popstate', handlePathChange);  // Add an event listener to the window, passing the handlePathChange function
        return () => {  // Return a cleanup function
            window.removeEventListener('popstate', handlePathChange);  // Remove the event listener
        };
    }
    , []);  // Add an empty dependency array

    // Navigation
    const navigate = (to) => {  // Create a function to navigate to a new path
        window.history.pushState({}, '', to);  // Push a new state to the history object
        useCurrentPath(to);  // Update the state with the new path
    }

    // Navigation items
    const state = {
        items: [
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Contact", href: "/contact" },
        ]
    };

    return (
        <NavigationContext.Provider value={{ currentPath, navigate }}>
            {children}
        </NavigationContext.Provider>
    );
};

export { NavigationProvider };  // Export the provider
export default NavigationContext;  // Export the context