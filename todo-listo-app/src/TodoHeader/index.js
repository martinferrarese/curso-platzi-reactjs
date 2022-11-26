import { Children, cloneElement } from "react";
import "./TodoHeader.css";

function TodoHeader({ children, loading }) {
    return (
        <div className="culo">
            <header>
                {Children
                    .toArray(children)
                    .map((child) => cloneElement(child, { loading }))}
            </header>
        </div>
        
    );
}

export default TodoHeader;