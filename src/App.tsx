import React from "react";
// import CompleteContexProvider from "./components/Context/CompleteContextProvider";
import ListContexProvider from "./components/Context/ListContextProvider";
import MainPage from "./components/MainPage/MainPage";
import MainRoutes from "./MainRoutes";

const App: React.FunctionComponent = () => {
  return (
    <>
      {/* <CompleteContexProvider> */}
      <ListContexProvider>
        <MainRoutes />
      </ListContexProvider>
      {/* </CompleteContexProvider> */}
    </>
  );
};

export default App;
