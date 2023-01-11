import React, { useContext } from "react";
import Routers from "./routers/Routers";
import Header from "./containers/Header";
import { ContextData } from "./context/Context";
import Adminpanel from "./admin-panel/Admin-panel";


function App() {
  const {adminlog, menu} = useContext(ContextData);
 
  return (
    <div className={menu ? "wrapper noscroll" : "wrapper"}>
      { adminlog ? 
      <>
        <Adminpanel/>
      </> :
      <>
        <Header/>
        <Routers/>
      </>
      }
      
    </div>
  );
}

export default App;
