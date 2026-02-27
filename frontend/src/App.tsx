import "./index.css";
import { SVGSprite } from "./assets/Icon";
import { Todo } from "./pages/Todo";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <SVGSprite />
      <ToastContainer position="top-right" autoClose={2500} theme="colored" />
      <Todo />
    </>
  );
}

// console.log(|1);

export default App;
