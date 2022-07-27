import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pictures from "./components/pictures/pictures";
import { Faq } from "./components/faq/faq";
import { Header } from "./components/header/header";
import Traditions from "./components/traditions/traditions";
import Promo from "./pages/promo/promo"
import Main from "./pages/main/main";


function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Promo />} />
          <Route path="/main" element={<Main/>} />
            {/* <Route path="traditions" element={<Traditions/>} />
            <Route path="pictures" element={<Pictures />} />
            <Route path="faq" element={<Faq />} />
          </Route> */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
