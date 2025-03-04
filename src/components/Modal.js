import ReactDOM from 'react-dom';
import { useEffect } from 'react';

function Modal({ onClose, children, actionBar }) {
    useEffect(() => {
        // Add the overflow-hidden class to the body element when the modal is open
        document.body.classList.add('overflow-hidden');

        return () => {
            // Remove the overflow-hidden class from the body element when the modal is closed
            document.body.classList.remove('overflow-hidden');
        };
       
    }, []);

    // Create a portal to render the modal in the modal-container div in the index.html file 
    return ReactDOM.createPortal(
        <div>
            <div onClick={onClose} className="fixed inset-0 bg-gray-300 opacity-80"></div>
            <div className="fixed inset-40 p-10 bg-white">
                <div className="flex flex-col justify-between h-full">
                    {children} 
                </div>
                <div className="flex justify-end">
                    {actionBar}
                </div>
            </div>
        </div>,
        document.querySelector('.modal-container')
    );
}


export default Modal;