export default function eventlistener(func: Function) {
  console.log(func);
  window.addEventListener("keyup", () => {
    console.log(func);
  });
}
