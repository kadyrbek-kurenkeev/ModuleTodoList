import React from "react";
import CompleteContextProvider from "./components/Context/CompleteContextProvider";
import ListContexProvider from "./components/Context/ListContextProvider";
import MainRoutes from "./MainRoutes";

const App: React.FunctionComponent = () => {
  return (
    <>
      <CompleteContextProvider>
        <ListContexProvider>
          <MainRoutes />
        </ListContexProvider>
      </CompleteContextProvider>
    </>
  );
};

export default App;
