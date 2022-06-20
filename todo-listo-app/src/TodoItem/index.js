import './TodoItem.css';
import { TodoIcon } from '../TodoIcon';

function TodoItem(props) {

    return (
        <li className="TodoItem">
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            >
                ✓
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span 
                className='Icon-delete'
                onClick={props.onDelete}
            >
                <TodoIcon icon={"close"}/>
            </span>
        </li>
    );
}

export {TodoItem};