import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form/Form";
import NavBar from "./components/NavBar/NavBar";
import Intro from "./components/Intro/Intro";
import TextIconBlocks from "./components/TextIconBlocks/TextIconBlocks";
import Button from "./components/Button/Button";
import Info from "./components/Info/Info";

function App() {
  const formRef = useRef(null);

  const submitForm = () => {
    if (formRef.current) {
      formRef.current.submit();
    }
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 992);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="app">
        <NavBar />
        <div className="content">
          <div className="container h-100">
            <div className="row h-100">
              <div className="left col-lg-6 align-self-center">
                <Intro />
                <Form ref={formRef} />
              </div>
              <div className="right col-lg-6 align-self-center">
                <Info />
                <TextIconBlocks />
                <div className="text-center">
                  <Button
                    type="button"
                    text="EXPRIMER MES RÊVES >"
                    onClick={submitForm}
                    disabled={isMobile}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
