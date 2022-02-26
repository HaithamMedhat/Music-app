import "./App.css";
import Home from "./components/Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Music from "./components/Home/Music";
import SignUp from "./components/User/AuthForm";
import NavigationBar from "./components/Home/NavigationBar";
import React, { useContext } from "react";
import { AuthContext } from "./state/AuthLogin";
import MixCloud from "./components/Music_app/MixCloud";
import Youtube from "./components/Music_app/Youtube";
import NotFound from './components/Home/NotFound';
function App() {
  const authCtx = useContext(AuthContext);
  const isLogin = authCtx.isLoggedIn;
  return (
    <React.Fragment>
      <NavigationBar />
      <Routes>
        {isLogin ? (
          <React.Fragment>
            <Route path="/Music/*" element={<Music />}>
              <Route path="Youtube" element={<Youtube />} />
              <Route path="Mix-Cloud" element={<MixCloud />} />
            </Route>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Route path="/Home" element={<Home />} />
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/" element={<Navigate to="/Home" />} />
          </React.Fragment>
        )}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
