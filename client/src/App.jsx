import "./App.css";
import { router } from "./Router/routes.jsx";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
