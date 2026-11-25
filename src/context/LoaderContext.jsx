import React, { createContext, useContext, useState } from 'react';

export const LoaderContext = createContext({
  loaderDone: false,
  setLoaderDone: () => {},
});

export const useLoader = () => useContext(LoaderContext);

export function LoaderProvider({ children }) {
  const [loaderDone, setLoaderDone] = useState(false);

  return (
    <LoaderContext.Provider value={{ loaderDone, setLoaderDone }}>
      {children}
    </LoaderContext.Provider>
  );
}
