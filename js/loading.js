$('#search').focusin(function(){
    $(this).css({boxShadow:'0 0 8px #158AC4'});
});
$('#search').focusout (function(){
    $(this).css({boxShadow:'0 0 0 0'});
});

$('.loading div:not(:last-child,:nth-child(4))').focusin(function(){
    $(this).css({boxShadow:'0 0 8px #158AC4'});
});
$('.loading div:not(:last-child,:nth-child(4))').focusout (function(){
    $(this).css({boxShadow:'0 0 0 0'});
});

