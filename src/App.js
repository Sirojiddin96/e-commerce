import React from "react";
import Routers from "./routers/Routers";
import Footer from "./containers/Footer";
import Header from "./containers/Header";


function App() {
 
  return (
    <div className="wrapper">
      <Header/>
      <Routers/>
      <Footer/>
    </div>
  );
}

export default App;
