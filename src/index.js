import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Users from "./app/components/users";
import "bootstrap/dist/css/bootstrap.css"
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
  <Users />
  </React.StrictMode>  
);


// ReactDOM.render(<Users />,document.getElementById('root'))

reportWebVitals();

root.render(<Users />)