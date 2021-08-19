$("#button").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#contact").offset().top,
    },
    6000
  );
});
