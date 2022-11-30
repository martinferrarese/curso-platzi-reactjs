import withStorageListener from '../HOC/withStorageListener';
import './RefreshAlert.css';

const RefreshAlert = (props) => {
    return <>
        {props.show ?
            <div className='textAlertContainer'>
                <h2 onClick={() => {
                    props.toogleVisibility(false);
                    props.disableActions(false);
                    props.refreshAction();
                    }} 
                    className='textAlert'
                >
                    Hubo cambios - Refrescar
                </h2>
            </div>
            :
            null
            
        }
    </>
}

const RefreshAlertWithStorageListener = withStorageListener(RefreshAlert);

export { RefreshAlert, RefreshAlertWithStorageListener };