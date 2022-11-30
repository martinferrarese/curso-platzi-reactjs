import { useCallback, useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const saveItem = useCallback((newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      } catch (error) {
        setError(error);
      }
    },[itemName]);

    const sincronizeStorage = useCallback(() => {
      setLoading(true);
      setTimeout(() => {
        try {
          let localStorageItem;
          let parsedItem;
    
          localStorageItem = localStorage.getItem(itemName);
          if(!localStorageItem) {
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
          saveItem(parsedItem);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      }, 1500);
    },[initialValue, itemName, saveItem]);
    
    useEffect(() => {
      sincronizeStorage();
    }, [sincronizeStorage]);
  
    return {
      item,
      saveItem,
      loading,
      error,
      sincronizeStorage,
    }
  }

  export { useLocalStorage };