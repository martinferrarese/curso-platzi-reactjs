import { createPortal } from 'react-dom';
import './Modal.css'

const Modal = ({children, setIsModalVisible}) => {
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