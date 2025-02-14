$(document).ready(function () {
  $(".container").each(function () {
    let isOpen = false;
    $(this).click(function () {
      let card = $(this).find(".card");
      if (!isOpen) {
        card.stop().animate({ top: "-90px" }, "slow");
      } else {
        card.stop().animate({ top: "5px" }, "slow");
      }
      isOpen = !isOpen;
    });
  });
});
