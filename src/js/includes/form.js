var mailResult = function(result, formid){
    
    if( result == 'fail' ) {

        setTimeout(function(){
            $('.contact-form-result').slideUp(100);
            $('.formFail').slideDown(300);
        }, 500);

    } else if(result == 'notfilled') {

        setTimeout(function(){
            $('.contact-form-result').slideUp(100);
            $('.formNotFilled').slideDown(300);
        }, 500);

    } else {

        setTimeout(function(){
            $('.contact-form-result').slideUp(100);
            $('.formSuccess').slideDown(300);
            $(formid + ' .formcontactmethod').val('');
            $(formid + ' .formmessage').val('');
        }, 500);

    }

}

$(function(){
    $('.contactForm').submit(function(e){
        e.preventDefault();

        theFormId = '#' + $(this).attr('id');

        $.ajax({
            url: "contact.php", 
            data: {
                formcontactmethod: $(theFormId + ' .formcontactmethod').val(),
                formmessage: $(theFormId + ' .formmessage').val(),
            },
            type: 'post',
            error: function(XMLHttpRequest, textStatus, errorThrown){
                mailResult('fail', theFormId);
            },
            success: function(data){
                mailResult(data, theFormId);
            }
        });


    });
});
