import React from "react";
import NavBar from "./template-1/NavBar";
import PageContent from "./template-1/PageContent";
import SideHeader from "./template-1/SideHeader";

//Fragment... <></>
function App() {
  return (
    <>
      <NavBar />
      <SideHeader />
      <PageContent />
    </>
  );
}

export default App;
