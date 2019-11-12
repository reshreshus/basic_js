$(function(){
    $('#name').keyup(function() {
        $('#greet').text('Who is pidor? ' + $('#name').val())
    })
})