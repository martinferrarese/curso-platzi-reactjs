import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)
    
    useEffect(() => {
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
        }
      }, 2500);
      
    }, []);
  
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      } catch (error) {
        setError(error);
      }
    }
  
    return {
      item,
      saveItem,
      loading,
      error
    }
  }

  export { useLocalStorage };