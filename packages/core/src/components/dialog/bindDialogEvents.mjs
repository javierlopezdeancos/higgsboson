// bind dialog events
function bindDialogEvents() {
  const triggerBig = document.querySelector("#open-dialog-btn-big");
  const closeBtnBig = document.querySelector("#close-dialog-btn-big");
  const okBtnBig = document.querySelector("#ok-dialog-btn-big");
  const modalBig = document.querySelector("#dialog-big");

  triggerBig.addEventListener("click", () => {
    modalBig.showModal();
  });

  closeBtnBig.addEventListener("click", () => {
    modalBig.close();
  });

  okBtnBig.addEventListener("click", () => {
    modalBig.close();
  });

  const triggerMedium = document.querySelector("#open-dialog-btn-medium");
  const closeBtnMedium = document.querySelector("#close-dialog-btn-medium");
  const okBtnMedium = document.querySelector("#ok-dialog-btn-medium");
  const modalMedium = document.querySelector("#dialog-medium");

  triggerMedium.addEventListener("click", () => {
    modalMedium.showModal();
  });

  closeBtnMedium.addEventListener("click", () => {
    modalMedium.close();
  });

  okBtnMedium.addEventListener("click", () => {
    modalMedium.close();
  });

  const triggerSmall = document.querySelector("#open-dialog-btn-small");
  const closeBtnSmall = document.querySelector("#close-dialog-btn-small");
  const okBtnSmall = document.querySelector("#ok-dialog-btn-small");
  const modalSmall = document.querySelector("#dialog-small");

  triggerSmall.addEventListener("click", () => {
    modalSmall.showModal();
  });

  closeBtnSmall.addEventListener("click", () => {
    modalSmall.close();
  });

  okBtnSmall.addEventListener("click", () => {
    modalSmall.close();
  });
}

export default bindDialogEvents;
