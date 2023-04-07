const calculator = () => {
  const principal = Number(document.getElementById("principal-amount").value);
  const rate = Number(document.getElementById("interest").value);
  const time = Number(document.getElementById("period").value);
  const outputResult = document.getElementById("output");

  outputResult.innerHTML = ` ${"#"} ${((principal * rate * time) / 100).toFixed(
    1
  )}  `;
  const calc = (principal * rate * time) / 100;
};
