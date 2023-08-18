import { RouterProvider } from "react-router-dom";
import { route } from "./Routes/Routes";
// import Preloder from "./Components/Preloder/Preloder";

function App() {

  return (
    <div>
      {/* <Preloder></Preloder> */}
      <div>
        <RouterProvider router={route}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
