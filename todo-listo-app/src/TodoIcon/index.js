import { ReactComponent as CloseIcon } from "./close.svg"; 

const icons = {
    "close": (
        <CloseIcon />
    )
}

function TodoIcon(props) {
    const {height, width, size, icon} = props;

    return <>
        <span>{icons[icon]}</span>
    </>;
}

export {TodoIcon}