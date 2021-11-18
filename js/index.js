$('.nav-in').click(function(e){
    let a = $('#register')
    let b = $('#sing')
    let a1 = $('.nav-in1')
    let b1 = $('.nav-in2')
    if(e.target.id == "nav1"){
        a.removeClass('off')
        b.addClass('off')
        a1.addClass('nav-in-select')
        b1.removeClass('nav-in-select')
    }else if(e.target.id === "nav2"){
        b.removeClass('off')
        a.addClass('off')
        b1.addClass('nav-in-select')
        a1.removeClass('nav-in-select')
    }
})

$('#r-valide').click(function(){
    $('.r-error').addClass('off')
    let phone = $('#r-phone').val()
    let mail = $('#r-mail').val()
    let pwd = $('#r-pwd').val()
    let user = new User(0,phone, mail, pwd)
    let aws = user.AmGood1()
    if(aws == 'ok'){
        let type = "r"
        $.ajax({
            url : "php/RegisterSing.php",
            type : 'POST',
            data : 'type=' + type + '&phone=' + user.getPhone() + '&mail=' + user.getMail() + '&pwd=' + user.getPwd(),
            dataType : 'text',
            success : function(rps){
                document.write(rps)
                if(rps === 'ok'){
                    $('.r-error').replaceWith('<div class="box-warning r-error off">Le compte a été crée</div>')
                }else{
                    $('.r-error').replaceWith('<div class="box-warning r-error off">Un problème est survenu !</div>')
                }
            }
         });
    }else{
        $('.r-error').replaceWith(aws)
        $('.r-error').removeClass('off')
    } 
})


$('#s-valide').click(function(){
    $('.s-error').addClass('off')
    let phone = $('#s-phone').val()
    let pwd = $('#s-pwd').val()
    let user = new User(0, phone, 'fake@gamil.com', pwd)
    let aws = user.AmGood2()
    if(aws == 'ok'){
        let type = "s"
        $.ajax({
            url : "php/RegisterSing.php",
            type : 'POST',
            data : 'type=' + type + '&phone=' + user.getPhone() + '&mail=' + user.getMail() + '&pwd=' + user.getPwd(),
            dataType : 'text',
            success : function(rps){
                console.log(rps)
                if(parseInt(rps) !== -1){
                    document.location.href="html/welcome.html";
                }else{
                    $('.s-error').replaceWith('<div class="box-warning s-error off">Ce compte n\'existe pas !</div>')
                }
            }
         });
    }else{
        $('.s-error').replaceWith(aws)
        $('.s-error').removeClass('off')
    } 
})

let InclureJs = function name(src) {
    $.getScript("js/" + src, function(){console.log("jdljdoj")});
}

