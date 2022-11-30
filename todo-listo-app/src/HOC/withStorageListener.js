/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";

const withStorageListener = (WrappedComponent) => {

    return function WrappedComponenteWithStorageListener(props) {
        const [storageHasChanged, setStorageHasChanged] = useState(false);
        useEffect(() => {
            console.log("hgfghj");
            window.addEventListener('storage', (change) => {
            if (change.key === "TODOS") {
                props.disableActions(true);
                setStorageHasChanged(true);
            }
            });

            return () => { window.removeEventListener("storage", () => null)}
        }, [])
        
        return <WrappedComponent 
            {...props}
            show={storageHasChanged} 
            toogleVisibility={setStorageHasChanged}
        />
    }
}

export default withStorageListener;