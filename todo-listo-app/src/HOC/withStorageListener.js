/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

const withStorageListener = (WrappedComponent) => {

    return function WrappedComponenteWithStorageListener() {
        const [storageHasChanged, setStorageHasChanged] = useState(false);
        window.addEventListener('storage', (change) => {
            if (change.key === "TODOS") {
                setStorageHasChanged(true);
            }
        })

        return <WrappedComponent show={storageHasChanged} />
    }
}

export default withStorageListener;