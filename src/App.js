import Accordion from "./components/Accordion";

function App() {
    const items = [ 
        {
            id: '123',
            label: 'What is React?',
            content: 'React is a front end JavaScript framework.'
        },
        {
            id: '456',
            label: 'Why use React?',
            content: 'React is a favorite JS library among engineers.'
        },
        {
            id: '789',
            label: 'How do you use React?',
            content: 'You use React by creating components.'
        }
    ];
    return <Accordion items={items}/>
};

function myFunction(items, expandedIndex) {
    return items.map((item, index) => {
        if (index === expandedIndex) {
            return 'Expanded';
        } else {
            return 'collapsed';
        }
    });

};

// myFunction(propsItems, 0); 

// myFunction(propsItems, 2);



export default App;