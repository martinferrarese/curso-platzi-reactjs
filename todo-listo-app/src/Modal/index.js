import { createPortal } from 'react-dom';
import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './Modal.css'

const Modal = ({children}) => {
    const { setIsModalVisible } = useContext(TodoContext);
    return createPortal(
        <div>
            <div className='ModalBackground'>
                {children}
            </div>
            <button 
            className="CloseModalButton"
            onClick={() => setIsModalVisible(false)}
            >
                X
            </button>
        </div>,
        document.getElementById('modal')
    )
};

export default Modal;