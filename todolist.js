//creating a new todo item.
$('#inp').keypress(function(e)
{
    if(e.which === 13)
    {
        const todotext=$('#inp').val();
        $('#list').append(`<li><span><i class="fa-solid fa-trash"></i></span> ${todotext} </li>`);
        $('#inp').val("");
    }
   
})
//Mark todo list as complete magar ye new created list pe properties apply nhi hongi.To isko karne ke liye hum on operator use karenge.
// $('li') . click(function(){
//     $(this).toggleClass('completed')
// });
// $('span').click(function()
//     {
//          $(this).parent().remove();
//     }
// )
$('ul').on('click','li', function(){
    $(this).toggleClass('completed')
});
//ab agar hum fadeout function chalaege to completed waali class bhi active ho jaegi or ise kehte hai event bubling or ise rokne ke liye stop propagation use kro.
$('ul').on('click','span',function(e)
    { $(this).parent().fadeOut(700,function()
        {
            $(this).remove();
        })
        e.stopPropagation();
    }
)


