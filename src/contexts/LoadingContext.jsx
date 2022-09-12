import React, {
  useState,
  // useEffect,
  useMemo,
  createContext,
  useContext,
} from 'react';
import PropTypes from 'prop-types';

// import PacmanLoader from 'react-spinners/PacmanLoader';

const LoadingContext = createContext(null);

const useLoading = () => useContext(LoadingContext);

// function Loading() {
//   const { isLoading } = useLoading();

//   return (
//     <div className="fixed bottom-4 right-16">
//       <p className="sr-only">LOADING...</p>

//       <PacmanLoader
//         color="#DB8C8C"
//         loading={isLoading}
//         // cssOverride={override}
//         size={16}
//       />
//     </div>
//   );
// }

function LoadingProvider({ children }) {
  const [isLoading, setLoading] = useState(false);
  /**
   * #NOTE: The object passed as the value prop to the Context provider
   *  changes every render. To fix this consider wrapping it in a useMemo hook
   */
  const loadingContextValue = useMemo(
    () => ({
      isLoading,
      setLoading,
    }),
    [isLoading, setLoading],
  );

  return (
    <LoadingContext.Provider value={loadingContextValue}>
      {/* <LoadingContext.Provider
      value={{
        isLoading,
        setLoading,
      }}
    > */}
      {children}
      {/* {isLoading && <Loading />} */}
    </LoadingContext.Provider>
  );
}

LoadingProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// export default { LoadingProvider };
export default { LoadingProvider, useLoading };
