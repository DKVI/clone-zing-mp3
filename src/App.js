import "./index.css";
import Todo from "./Todo/Todo";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Public } from "./containers/public/index";
import path from "./ultis/path";
import { useEffect } from "react";
import * as actions from "./store/action";
import Personal from "./containers/public/Personal";
const testSelector = (state) => state.app;
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getHome());
  }, []);
  return (
    <>
      <div className="">
        <Routes>
          <Route path={path.PUBLIC} element={<Public />}>
            <Route path={path.HOME} element={<Home />} />
            <Route path={path.LOGIN} element={<Login />} />
            <Route path={path.MY_MUSIC} element={<Personal />} />
            <Route path={path.STAR} element={<Home />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
