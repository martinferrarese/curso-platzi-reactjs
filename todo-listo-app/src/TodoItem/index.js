import './TodoItem.css';
import { TodoIcon } from '../TodoIcon';

function TodoItem(props) {

    return (
        <li className="TodoItem">
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={!props.refreshNeeded ? props.onComplete : null}
            >
                ✓
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span 
                className='Icon-delete'
                onClick={!props.refreshNeeded ? props.onDelete : null}
            >
                <TodoIcon icon={"close"}/>
            </span>
        </li>
    );
}

export {TodoItem};