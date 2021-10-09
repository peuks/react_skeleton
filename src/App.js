import React from "react";
import ROUTES, { RenderRoutes } from "./routes";

const App = () => {
  return (
    <div style={{ display: "flex", height: "100vh", alignItems: "stretch" }}>
      <div style={{ flex: 0.3, backgroundColor: "#f2f2f2" }}>route menu</div>
      <div>
        <RenderRoutes routes={ROUTES} />
      </div>
    </div>
  );
};

export default App;
