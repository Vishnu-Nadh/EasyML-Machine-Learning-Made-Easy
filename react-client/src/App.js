// import "./sass/App.scss";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import TopNavbar from "./Layouts/TopNavbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import Register from "./Pages/Register";

function App() {
  return (
    <Fragment>
      <TopNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
}

export default App;
