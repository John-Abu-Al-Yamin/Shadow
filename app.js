const box = document.getElementById("box");
const sldr1 = document.getElementById("sldr1");
const sldr2 = document.getElementById("sldr2");
const sldr3 = document.getElementById("sldr3");
const sldr4 = document.getElementById("sldr4");
const shadowColor = document.getElementById("shadowcolor");
const sldr5 = document.getElementById("sldr5");
const insetCheckbox = document.getElementById("inset-checkbox");
const cssCode = document.getElementById("css-code");
const copyButton = document.getElementById("copy");

function updateBoxShadow() {
  const hShadow = sldr1.value + "px";
  const vShadow = sldr2.value + "px";
  const blur = sldr3.value + "px";
  const spread = sldr4.value + "px";
  const color = hexToRgba(shadowColor.value, sldr5.value / 100);
  const inset = insetCheckbox.checked ? "inset " : "";
  const boxShadow = `${inset}${hShadow} ${vShadow} ${blur} ${spread} ${color}`;
  box.style.boxShadow = boxShadow;
  cssCode.value = `box-shadow: ${boxShadow};`;
}

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

sldr1.addEventListener("input", updateBoxShadow);
sldr2.addEventListener("input", updateBoxShadow);
sldr3.addEventListener("input", updateBoxShadow);
sldr4.addEventListener("input", updateBoxShadow);
shadowColor.addEventListener("input", updateBoxShadow);
sldr5.addEventListener("input", updateBoxShadow);
insetCheckbox.addEventListener("input", updateBoxShadow);

copyButton.addEventListener("click", () => {
  cssCode.select();
  document.execCommand("copy");
});

updateBoxShadow();
