import withStorageListener from '../HOC/withStorageListener';
import './RefreshAlert.css';

const RefreshAlert = (props) => {
    return <p className='textAlert'>{`${props.mensaje ? props.mensaje : "Hubo cambios"} - Refrescar`}</p>;
}

const RefreshAlertWithStorageListener = withStorageListener("Se detectaron cambios")(RefreshAlert);

export { RefreshAlert, RefreshAlertWithStorageListener };