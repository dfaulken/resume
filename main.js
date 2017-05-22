$(document).ready(function(){
  $('.main-content').on('click', '.comment-link', toggleCommentBox)
});

function toggleCommentBox(){
  fillComment($(this).data('id'));
  var isCurrentlyAnimating = $('.comment-container').hasClass('slideInLeft') ||
    $('.comment-container').hasClass('slideOutLeft');
  if(!isCurrentlyAnimating){
    if($('.comment-container').is(':visible'))
      hideCommentBox();
    else showCommentBox();
  }
}

function showCommentBox(){
  $('.comment-container').show().addClass('slideInLeft');
  setTimeout(function(){
    $('.comment-container').removeClass('slideInLeft');
  }, 1000);
}

function hideCommentBox(){
  $('.comment-container').addClass('slideOutLeft');
  // Just in case browser doesn't support CSS animations
  setTimeout(function(){
    $('.comment-container').removeClass('slideOutLeft').hide();
  }, 1000);
}

function fillComment(commentID){
  var commentText = $('.comment-text').filter(function(){
    return $(this).data('id')
  }).eq(0).html();
  $('.comment').html(commentText);
}
