import "./App.css";
import { useState } from "react";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Main from "./pages/Main";
import Avaliacao from "./pages/Avaliacao";
import Avaliacao2 from "./pages/Avaliacao2";
import Observatorio from "./pages/Observatorio";
import Observatorio2 from "./pages/Observatorio2";
import Feedback1 from "./pages/FeedBack1";
import Feedback2 from "./pages/FeedBack2";
import Feedback3 from "./pages/Feedback3";
import Erro from "./pages/Erro";
import Header from "./components/Header/index.js";
import Footer from "./components/Footer/index.js";
import ProtectedRouter from "./protectedRouter.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Cadastro" element={<Cadastro />} />
            <Route path="/Login" element={<Login />} />
            <Route element={<ProtectedRouter />}>
              <Route path="/Avaliacao" element={<Avaliacao />} />
              <Route path="/Avaliacoes" element={<Avaliacao2 />} />
              <Route path="/Feedback1" element={<Feedback1 />} />
              <Route path="/Feedback2" element={<Feedback2 />} />
              <Route path="/Feedback3" element={<Feedback3 />} />
              <Route path="/Observatorio" element={<Observatorio />} />
              <Route
                path="/Observatorio/Detalhes"
                element={<Observatorio2 />}
              />
            </Route>
            <Route path="*" element={<Erro />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
