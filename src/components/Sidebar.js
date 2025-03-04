import classNames from "classnames";
import Link from "./Link";

// Create a Sidebar component that renders a list of links
function Sidebar() {
    const links = [
        { label: "Accordion", path: '/accordion' },
        { label: "Dropdown", path: '/' },
        {label: 'Buttons', path: '/buttons' },
        {label: 'Modal', path: '/modal' },
        {label: 'Table', path: '/table' },
        {label: 'Counter', path: '/counter' },
    ];

    // Render the links using the map function
    const renderedLinks = links.map((link) => {
        return (
            <Link
                key={link.label} 
                to={link.path} 
                className="mb-3"
                activeClassName="font-bold border-l-4 border-blue-500 pl-2"
            >
                {link.label} 
            </Link>
        );
    });

    return (
        <div className={"sticky top-0 overflow-y-scroll flex flex-col items-start"}>
            {renderedLinks}
        </div>
    );
}


export default Sidebar;