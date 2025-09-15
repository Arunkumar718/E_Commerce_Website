import React from 'react';
 // Assuming you will create a specific CSS file for this component if needed

const Modal = ({ text, onClose }) => {
    if (!text) return null;
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <p className="modal-text">{text}</p>
                <button onClick={onClose} className="modal-button">OK</button>
            </div>
        </div>
    );
};
export default Modal;
