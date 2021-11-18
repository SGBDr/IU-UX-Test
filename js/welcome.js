

$('.home').click(function(){
    $('.category').removeClass('nav-select')
    $('.story').removeClass('nav-select')
    $('.profil').removeClass('nav-select')
    $('.home').addClass('nav-select')

    $('#category-container').addClass('off')
    $('#story-container').addClass('off')
    $('#profil-container').addClass('off')
    $('#home-container').removeClass('off')
})
$('.category').click(function(){
    $('.category').addClass('nav-select')
    $('.story').removeClass('nav-select')
    $('.profil').removeClass('nav-select')
    $('.home').removeClass('nav-select')

    $('#category-container').removeClass('off')
    $('#story-container').addClass('off')
    $('#profil-container').addClass('off')
    $('#home-container').addClass('off')

})
$('.story').click(function(){
    $('.category').removeClass('nav-select')
    $('.story').addClass('nav-select')
    $('.profil').removeClass('nav-select')
    $('.home').removeClass('nav-select')

    $('#category-container').addClass('off')
    $('#story-container').removeClass('off')
    $('#profil-container').addClass('off')
    $('#home-container').addClass('off')

})
$('.profil').click(function(){
    $('.category').removeClass('nav-select')
    $('.story').removeClass('nav-select')
    $('.profil').addClass('nav-select')
    $('.home').removeClass('nav-select')

    $('#category-container').addClass('off')
    $('#story-container').addClass('off')
    $('#profil-container').removeClass('off')
    $('#home-container').addClass('off')
})

$('.search').keyup(function(e){
    if(e.code === "Enter"){

    }else {
        let value = $('.search').val()
        if(value.trim() !== "" && e.code !== "Space"){
            console.log(value);
        }
    }
})

$('.category-search').keyup(function(e){
    let category = ['Skirt', 'Bottom', 'Dresses', 'Fetch', 'Godd It', 'Test Slow', 'Barbi Fashion', 'Vibes', 'Eloquetion']
    if(e.code === "Enter"){

    }else {
        let value = $('.category-search').val()
        if(value.trim() !== "" && e.code !== "Space"){
            $('.category-results').replaceWith('<div class="category-results"></div>')
            for(let i = 0; i < category.length ; i++){
                ca = category[i]
                console.log(ca.split(value.trim()).length)
                if(ca.split(value.trim()).length > 1){
                    let c = document.createElement('p')
                    c.classList.add('ca-item')
                    c.innerHTML = '<span class="glyphicon glyphicon-plus"></span> ' + ca
                    c.addEventListener('click', function(e){
                        $('.category-items').append('<p class="ca-item"><span class="glyphicon glyphicon-minus"></span> ' + e.target.innerText + '</p>')
                        $('.ca-item').click(function(e){
                            e.target.replaceWith()
                        })
                    })
                    $('.category-results').append(c)
                }
           }
        }
    }
})

$('.ca-item').click(function(e){
    e.target.replaceWith()
})