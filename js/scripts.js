$(document).ready(function() {
  $("button#cat").click(function() {
  $("ul.cul").prepend("<li>Meow</li>");
  $("ul.dul").prepend("<li>Bark</li>");
  $("img.catpic").removeClass("catpic");
});
  $("button#dog").click(function() {
    $("ul.dul").prepend("<li>Bark</li>");
    $("ul.cul").prepend("<li>Meow</li>");
    $("img.dogpic").removeClass("dogpic");
  });
  // $("button#clear").click(function() {
  //   $('img').addClass("catpic, dogpic");
  // });

});
