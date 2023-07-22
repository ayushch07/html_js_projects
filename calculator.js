const screen= document.getElementById('screen');
$('#screen').keypress(function(e)
{
    const todotext=$('#screen').val();
       if(e.which===13)
       {
        try{
           screen.value=eval(todotext);
        }
        catch(e)
        {
            screen.value='Sahi likhle bhai yrr'
        }
    
       }

    
     
       
})
$('#screen').keypress(function(e)
    {
        
         
        $('button').toggleClass('completed');
        e.stopPropagation();
    }
)



$('button').click(function(e)
{
    const todotext=e.target.innerText;   
    if(e.target.innerText==='C')
    {
        screen.value="";
    }
    else if(todotext==='x')
    {
        screen.value+='*';
    }
    else if(todotext==='=')
    {
        try{
        screen.value=eval(screen.value);
    }
      catch (e){ screen.value='Invalid Operation'

      }          
}
    else

    {   
         screen.value+=todotext;
       }   // console.log($('button').val());

   
})