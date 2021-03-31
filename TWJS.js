// select the button
const btn = document.querySelector("Switch Theme");
// select the stylesheet <link>
const theme = document.querySelector("#theme-link");

// listen for a click on the button
btn.addEventListener("click", function() {
    // if the current url contains "light-theme.css"
   if (theme.getAttribute("href") == "light-theme.css") {
     // then switch it to "dark-theme.css"
     theme.href = "dark-theme.css";
   // otherwise 
   } else {
    // switch it to "light-theme.css"
    theme.href = "light-theme.css";
  }
});