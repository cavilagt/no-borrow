import React from "react";
import Layout from "./containers/Layout";
import AppContextProvider from "./context/AppContextProvider";

const App:React.FC = () => {
  return (
    <AppContextProvider>
      <p>
        Hint: You also can use the arrow keys and Enter as controls.
      </p>
      <Layout />
    </AppContextProvider>
  );
};

export default App;
