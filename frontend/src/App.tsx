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
// console.log(|2);
// console.log(|3);

export default App;
// comnetario 1
// comnetario 10
