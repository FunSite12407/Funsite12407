$(".hamburger").click(function(){
   $(".wrapper").toggleClass("collapse");
});

$(".sidebar a").click(function(e) {
  e.preventDefault();
  var pageId = $(this).data("page");
  $(".page").hide();
  $("#" + pageId).show();
  $(".sidebar a").removeClass("active");
  $(this).addClass("active");
});

// Show the first page by default
$("#notes").show();

document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};