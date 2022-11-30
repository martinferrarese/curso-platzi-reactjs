/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

const withStorageListener = (WrappedComponent) => {

    return function WrappedComponenteWithStorageListener(props) {
        const [storageHasChanged, setStorageHasChanged] = useState(false);
        window.addEventListener('storage', (change) => {
            if (change.key === "TODOS") {
                props.disableActions(true);
                setStorageHasChanged(true);
            }
        });


        return <WrappedComponent 
            {...props}
            show={storageHasChanged} 
            toogleVisibility={setStorageHasChanged}
        />
    }
}

export default withStorageListener;