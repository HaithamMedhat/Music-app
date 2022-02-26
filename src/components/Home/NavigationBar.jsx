import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../images/logo2.png";
import style from "./NavigationBar.module.css";
import { AuthContext } from "./../../state/AuthLogin";

export default function NavigationBar() {
  const authCtx = useContext(AuthContext);
  const isLogin = authCtx.isLoggedIn;
  const navigate = useNavigate();
  const logout = () => {
    authCtx.logout();
    navigate("/");
  };
  return (
    <nav className={"navbar navbar-expand-lg " + style.navbar_color}>
      <div className="container">
        <img src={logo} alt="Logo of company" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={"collapse navbar-collapse " + style.navbar_edit_collapse}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {isLogin ? (
              <React.Fragment>
                <li className="nav-item">
                  <NavLink
                    className={(navData) =>
                      navData.isActive ? style.active : style.normal
                    }
                    to="/Music"
                  >
                    Music
                  </NavLink>
                </li>
                <li>
                  <button className="btn btn-dark" onClick={logout}>
                    logout
                  </button>
                </li>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <li className="nav-item">
                  <NavLink
                    className={(navData) =>
                      navData.isActive ? style.active : style.normal
                    }
                    to="/Home"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={(navData) =>
                      navData.isActive ? style.active : style.normal
                    }
                    to="/Signup"
                  >
                    Sign up
                  </NavLink>
                </li>
              </React.Fragment>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
