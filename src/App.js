import React, { useContext } from "react";
import Routers from "./routers/Routers";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import { ContextData } from "./context/Context";
import Adminpanel from "./admin-panel/Admin-panel";


function App() {
  const {adminlog} = useContext(ContextData);
 
  return (
    <div className="wrapper">
      { adminlog ? 
      <>
        <Adminpanel/>
      </> :
      <>
        <Header/>
        <Routers/>
        <Footer/>
      </>
      }
      
    </div>
  );
}

export default App;
