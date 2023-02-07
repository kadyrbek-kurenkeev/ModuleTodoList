import React from "react";
import { Route, Routes } from "react-router-dom";
import EditTodo from "./components/EditTodo/EditTodo";
import MainPage from "./components/MainPage/MainPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/edit/:id" element={<EditTodo />} />
    </Routes>
  );
};

export default MainRoutes;
