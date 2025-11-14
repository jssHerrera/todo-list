import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToastTify = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Tu resto de componentes */}
    </>
  );
};
