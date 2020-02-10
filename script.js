$(document).ready(function() {
    var a = 1;
    var speed = 1;
    var array = ['Ok you got me..', 'Do not get too excited.', 'You aint seen nothin yet.', 'Okay big shot...', 'Time to pick up the pace.',
'I am done taking it easy.','Time to crush you.', 'I am not impressed..', 'Okay this is impressive.'];
    $(document).on('click','.ball', function() {
        $('#replay').css('visibility', 'hidden');
        $('.bounce.column').css('visibility', 'hidden');
        $('.message__container').css('display','inline-block');
        if(a < 10) {
            $('#message').html(array[(a-1)]  + '<br/>' + 'You advance to level ' + (a+1));   
            setTimeout(
                function()  
                {
                    $('.bounce.column').css('visibility', 'visible');
                    $('.message__container').css('display','none');
                    console.log(a);
                if( a < 10) {
                    $('.ball').css('-webkit-animation-duration', speed + 's');
                    a++;
                    speed-=0.1
                }
         
                }, 3000);
        }
        else {
            console.log('hi');
            $('#message').text('Congratulations. You win !');   

            $('.message__container').css('display','inline-block');
            $('#message').css('visibility', 'visible');
            $('#replay').css('visibility','visible');
        }

        
    });

    $(document).on('click','#replay',function() {
        location.reload();
    });

    
});

