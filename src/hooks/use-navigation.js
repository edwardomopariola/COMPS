import { useContext } from "react";
import NavigationContext from "../context/navigation";

function useNavigation() {
    return useContext(NavigationContext);
}

export default useNavigation;
// The useNavigation hook is used to access the navigation context in any component. 
// It is a custom hook that returns the context value, which includes the current path and the navigate function. This hook can be used to navigate to different paths and access the current path in any component that needs it. It simplifies the process of using the navigation context in components by providing a reusable hook that encapsulates the context