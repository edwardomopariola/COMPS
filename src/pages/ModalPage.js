import { useState } from 'react';           // Import the useState hook
import Modal from '../components/Modal';    // Import the Modal component
import Button from '../components/Button';  // Import the Button component


// Create a ModalPage component that renders a button and a modal
function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button onClick= {handleClose} primary> I Accept</Button>
        </div>
    )


    // Create a modal element that displays a message and a button to close the modal
    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <h1>Important Agreement</h1>
        <p> Here is an important agreement for you to accept</p>
    </Modal>;
      

    return (
        // Render the button and the modal using the Button and Modal components
        <div className='relative'>  
            <Button onClick={handleClick}>Show Modal</Button>
            {showModal && modal}
        
           
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nisl sed orci interdum vehicula vel et mi.
                Maecenas enim libero, tempus sed fermentum at, volutpat vel odio. Donec viverra massa nec leo iaculis finibus. 
                Nulla tempus pharetra odio a finibus. Donec quis mollis turpis, at commodo purus. Praesent ac ante magna. Praesent semper, velit ac scelerisque mattis, 
                lectus tortor malesuada quam, non viverra diam nulla quis est. Sed condimentum quam sed elit porta, vel eleifend sem blandit. 
                Pellentesque non nisl nec sem ullamcorper vestibulum eu vulputate ipsum. Nunc laoreet, nunc eu vestibulum ornare, orci nisl vestibulum nibh, quis viverra magna lectus nec ligula. 
                Vivamus dictum scelerisque interdum. Sed vel nisl orci. Vivamus condimentum turpis vitae risus bibendum, in dictum metus facilisis.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nisl sed orci interdum vehicula vel et mi.
                Maecenas enim libero, tempus sed fermentum at, volutpat vel odio. Donec viverra massa nec leo iaculis finibus. 
                Nulla tempus pharetra odio a finibus. Donec quis mollis turpis, at commodo purus. Praesent ac ante magna. Praesent semper, velit ac scelerisque mattis, 
                lectus tortor malesuada quam, non viverra diam nulla quis est. Sed condimentum quam sed elit porta, vel eleifend sem blandit. 
                Pellentesque non nisl nec sem ullamcorper vestibulum eu vulputate ipsum. Nunc laoreet, nunc eu vestibulum ornare, orci nisl vestibulum nibh, quis viverra magna lectus nec ligula. 
                Vivamus dictum scelerisque interdum. Sed vel nisl orci. Vivamus condimentum turpis vitae risus bibendum, in dictum metus facilisis.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nisl sed orci interdum vehicula vel et mi.
                Maecenas enim libero, tempus sed fermentum at, volutpat vel odio. Donec viverra massa nec leo iaculis finibus. 
                Nulla tempus pharetra odio a finibus. Donec quis mollis turpis, at commodo purus. Praesent ac ante magna. Praesent semper, velit ac scelerisque mattis, 
                lectus tortor malesuada quam, non viverra diam nulla quis est. Sed condimentum quam sed elit porta, vel eleifend sem blandit. 
                Pellentesque non nisl nec sem ullamcorper vestibulum eu vulputate ipsum. Nunc laoreet, nunc eu vestibulum ornare, orci nisl vestibulum nibh, quis viverra magna lectus nec ligula. 
                Vivamus dictum scelerisque interdum. Sed vel nisl orci. Vivamus condimentum turpis vitae risus bibendum, in dictum metus facilisis.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nisl sed orci interdum vehicula vel et mi.
                Maecenas enim libero, tempus sed fermentum at, volutpat vel odio. Donec viverra massa nec leo iaculis finibus. 
                Nulla tempus pharetra odio a finibus. Donec quis mollis turpis, at commodo purus. Praesent ac ante magna. Praesent semper, velit ac scelerisque mattis, 
                lectus tortor malesuada quam, non viverra diam nulla quis est. Sed condimentum quam sed elit porta, vel eleifend sem blandit. 
                Pellentesque non nisl nec sem ullamcorper vestibulum eu vulputate ipsum. Nunc laoreet, nunc eu vestibulum ornare, orci nisl vestibulum nibh, quis viverra magna lectus nec ligula. 
                Vivamus dictum scelerisque interdum. Sed vel nisl orci. Vivamus condimentum turpis vitae risus bibendum, in dictum metus facilisis.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nisl sed orci interdum vehicula vel et mi.
                Maecenas enim libero, tempus sed fermentum at, volutpat vel odio. Donec viverra massa nec leo iaculis finibus. 
                Nulla tempus pharetra odio a finibus. Donec quis mollis turpis, at commodo purus. Praesent ac ante magna. Praesent semper, velit ac scelerisque mattis, 
                lectus tortor malesuada quam, non viverra diam nulla quis est. Sed condimentum quam sed elit porta, vel eleifend sem blandit. 
                Pellentesque non nisl nec sem ullamcorper vestibulum eu vulputate ipsum. Nunc laoreet, nunc eu vestibulum ornare, orci nisl vestibulum nibh, quis viverra magna lectus nec ligula. 
                Vivamus dictum scelerisque interdum. Sed vel nisl orci. Vivamus condimentum turpis vitae risus bibendum, in dictum metus facilisis.
            </p>
            
        </div>
    );
}


export default ModalPage;