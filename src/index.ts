import "./styles/style.scss";
import flightLogo from "./assets/ft_logo.png";
import pikachu from "./assets/pikachu.gif";
import { runFlightTracker } from "./ts/modules/flightTracker";

const logo = document.getElementById("logo") as HTMLImageElement;
logo.src = flightLogo;
const pikachuLoadingGif = document.getElementById(
  "pikachu-gif"
) as HTMLImageElement;
pikachuLoadingGif.src = pikachu;

runFlightTracker();

document.addEventListener("DOMContentLoaded", function () {
    console.log("Checking for overflowing elements");
  var docWidth = document.documentElement.offsetWidth;
  var docHeight = document.documentElement.offsetHeight;
  var elements = document.querySelectorAll("*");
  [].forEach.call(elements, function (el: HTMLElement) {
    if (el.offsetWidth > docWidth || el.offsetHeight > docHeight) {
      console.log(el);
      console.log("found the bastards")
    }
  });
});
