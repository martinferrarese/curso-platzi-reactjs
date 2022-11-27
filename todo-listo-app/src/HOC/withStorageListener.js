const withStorageListener = (mensaje) => {
    return function WrappedComponenteWithStorageListener(WrappedComponent) {
        return function ComponenteDeVerdad(props) {
            return <WrappedComponent {...props} mensaje={mensaje}></WrappedComponent>
        };
    }
}

export default withStorageListener;