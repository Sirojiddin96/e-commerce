import React, { useContext, useRef } from "react";
import Routers from "./routers/Routers";
import { ContextData } from "./context/Context";
import Adminpanel from "./admin-panel/Admin-panel";


function App() {
  const {Amodal, Cmodal, adminlog, menu, modal, side} = useContext(ContextData);
  const roller = useRef();
  function checking(){
    window.addEventListener()
  }
  return (
    <div onClick={()=>checking()} ref={roller} className={Amodal || Cmodal || menu || modal || side ? "wrapper noscroll" : "wrapper"}>
      { adminlog ? 
      <>
        <Adminpanel/>
      </> :
      <>
        <Routers/>
      </>
      }
      
    </div>
  );
}

export default App;
