import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import startNewGame from "./game.js"

export default function showPopup(title, icon, confirmButtonText, cancelButtonText) {
  setTimeout(() => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title,
      html: icon,
      showCancelButton: true,
      confirmButtonText, 
      cancelButtonText,
    }).then((result) => {
      if (result.value) {
        startNewGame();
      }
    });
  }, 700);
}