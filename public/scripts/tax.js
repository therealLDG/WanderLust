let taxSwitch = document.getElementById("flexSwitchCheckDefault");

taxSwitch.addEventListener("click", () => {
  let taxInfo = document.getElementsByClassName("tax-info");
  for (const taxes of taxInfo) {
    if (taxes.style.display != "inline") {
      taxes.style.display = "inline";
    } else {
      taxes.style.display = "none";
    }
  }
});