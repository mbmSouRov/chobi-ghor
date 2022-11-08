import { RouterProvider } from "react-router-dom";
import "./App.css";
import Routes from "./Components/Routes/Routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={Routes} />
    </div>
  );
}

export default App;
