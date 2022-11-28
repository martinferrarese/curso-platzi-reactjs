/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

const withStorageListener = (WrappedComponent) => {

    return function WrappedComponenteWithStorageListener(props) {
        const [storageHasChanged, setStorageHasChanged] = useState(true);
        window.addEventListener()

        return <WrappedComponent show={storageHasChanged} />
    }
}

export default withStorageListener;