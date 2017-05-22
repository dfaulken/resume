// Welcome! jQuery, animate.css, and JS intervals are three things I have
// a good amount of experience with, so feel free to peruse this source code.
// For more examples of Javascript I've worked on, check out my GitHub profile.

$(document).ready(function(){
  $('.main-content').on('click', '.comment-link', toggleCommentBox)
  $('body').on('click', '.container', hideCommentBox);
});

function toggleCommentBox(){
  $(this).toggleClass('selected');
  if($('.comment-container').is(':visible'))
    hideCommentBox();
  else{
    fillComment($(this).data('id'));
    showCommentBox();
  }
}

function showCommentBox(){
  if(commentBoxIsAnimating()){ return; }
  $('.comment-container').show().addClass('slideInLeft');
  setTimeout(function(){
    $('.comment-container').removeClass('slideInLeft');
  }, 1000);
}

function hideCommentBox(){
  if(commentBoxIsAnimating()){ return; }
  $('.comment-link').removeClass('selected');
  $('.comment-container').addClass('slideOutLeft');
  // Just in case browser doesn't support CSS animations
  setTimeout(function(){
    $('.comment-container').removeClass('slideOutLeft').hide();
  }, 1000);
}

function fillComment(commentID){
  var commentText = $('.comment-text').filter(function(){
    return $(this).data('id') == commentID
  }).eq(0).html();
  $('.comment').html(commentText);
}

function commentBoxIsAnimating(){
  return $('.comment-container').hasClass('slideInLeft') ||
         $('.comment-container').hasClass('slideOutLeft');
}
