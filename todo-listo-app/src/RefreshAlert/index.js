import withStorageListener from '../HOC/withStorageListener';
import './RefreshAlert.css';

const RefreshAlert = (props) => {
    return <>
        {props.show ?
            <p onClick={() => {
                props.toogleVisibility(false);
                props.disableActions(false);
                props.refreshAction();
            }} 
            className='textAlert'>
                Hubo cambios - Refrescar
            </p>
            :
            null
        }
    </>
}

const RefreshAlertWithStorageListener = withStorageListener(RefreshAlert);

export { RefreshAlert, RefreshAlertWithStorageListener };