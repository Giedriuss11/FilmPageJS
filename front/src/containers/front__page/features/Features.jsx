import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./features.css";

import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { setUserData } from "../../../features/userReducer";

import http from "../../../plugins/http";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^.{8,24}$/;

const Features = () => {
  const userRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
  }, [pwd]);

  const goSingIn = () => {
    navigate("/singup");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      username: user,
      password: pwd,
    };
    const response = await http.post("Login", userData);

    if (response.success) {
      sessionStorage.setItem("token", response.data.token);
      dispatch(setUserData(response.data.user));
      toast.success(response.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
        setUser("");
        setPwd("");
    } else {
      toast.warn(response.message, {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <div id="login" className="front__features section__padding">
      <div className="front__features-login">
        <h1 className="gradient__text">Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">
            <h6 className="front__features-login-Ptext">
              Username:
              <FontAwesomeIcon
                icon={faCheck}
                className={validName ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validName || !user ? "hide" : "invalid"}
              />
            </h6>
          </label>
          <input
            className="section__input-classes"
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
            aria-invalid={validName ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
          />
          <p
            id="uidnote"
            className={
              userFocus && user && !validName ? "instructions" : "offscreen"
            }
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            4 to 24 characters.
            <br />
            Must begin with a letter.
            <br />
            Letters, numbers, underscores, hyphens allowed.
          </p>

          <label htmlFor="password">
            <h6 className="front__features-login-Ptext">
              Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={validPwd ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validPwd || !pwd ? "hide" : "invalid"}
              />
            </h6>
          </label>
          <input
            className="section__input-classes"
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
            aria-invalid={validPwd ? "false" : "true"}
            aria-describedby="pwdnote"
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
          />
          <p
            id="pwdnote"
            className={` ${
              pwdFocus && !validPwd ? "instructions" : "offscreen"
            }`}
          >
            <FontAwesomeIcon icon={faInfoCircle} />8 to 24 characters.
          </p>

          <button
            className={
              !validName || !validPwd
                ? "front__features-login-button-disabled"
                : "front__features-login-button"
            }
            disabled={!validName || !validPwd}
          >
            Sign In
          </button>
        </form>

        <p>
          If you do yet have an account <span onClick={goSingIn}>Sign up</span>
        </p>
      </div>
      <ToastContainer
            position="bottom-right"
            autoClose={4000}
            limit={3}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
    </div>
  );
};

export default Features;
