import './index.css';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import { CompletedIcon } from '../TodoIcon/CompleteIcon';

function TodoItem(props) {
   return (
      <li className="TodoItem">
         <span onClick={props.onComplete} className={`Icon Icon-container-check ${props.completed && "Icon-container-check--active"}`}>
            <CompletedIcon />
         </span>
         <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
            {props.text}
         </p>
         <span onClick={props.onDelete} className="Icon Icon-container-delete">
            <DeleteIcon />
         </span>
      </li>
   );
}

export { TodoItem };