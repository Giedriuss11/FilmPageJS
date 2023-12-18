import "./App.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom"; // Import Link for navigation

import http from "./plugins/http";
import { setData, setName, setUserData } from "./features/userReducer";

import { FrontPage } from "./pages/FrontPage";
import { MoviePage } from "./pages/MoviePage";
import { SinginPage } from "./pages/SinginPage";

function App() {
  const dispatch = useDispatch();
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    async function fetchName() {
      try {
        const res = await http.get("GetFilm", { ok: "ok" });

        if (res.success) {
          if (res.data && res.data.films) {
            dispatch(setData(res.data.films));
          }

          if (res.data && res.data.category) {
            dispatch(setName(res.data.category));
          }
        } else {
          console.error("Fetch request was not successful:", res.error);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchName();
  }, [dispatch]);

  useEffect(() => {
    async function autologin() {
      if (token) {
        try {
          const response = await http.postWithToken("autologin", { ok: "ok" });
          dispatch(setUserData(response.data.user));
        } catch (error) {
          console.error("Error during fetch:", error);
        }
      }
    }
    autologin();
  }, [token]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route
          path="/moviepage"
          element={
            <>
              <MoviePage />
            </>
          }
        />
        <Route path="/singup" element={<SinginPage />} />
      </Routes>
    </div>
  );
}

export default App;
