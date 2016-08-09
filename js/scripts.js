$(document).ready(function() {
  $("button#cat").click(function() {
  $("ul.cul").prepend("<li>Meow</li>");
  $("ul.dul").prepend("<li>Bark</li>");
  $(this).next().toggleClass("catpic");
});
  $("button#dog").click(function() {
    $("ul.dul").prepend("<li>Bark</li>");
    $("ul.cul").prepend("<li>Meow</li>");
    $(this).next().toggleClass("dogpic");
  });
});
