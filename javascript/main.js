// ========================================
// Your JavaScript goes here
// ========================================
$("button").click(function() {
  $("html,body").animate(
    {
      scrollTop: $(".second").offset().top
    },
    "slow"
  );
});
// If you want to use the toggleClass
// function, uncomment the function below
// and replace '.myClass' and
// 'class-to-toggle' with your own data.
// Both parameters must be in quotes.

// toggleClass('.myClass', 'class-to-toggle');
