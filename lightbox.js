//fucntion to include html popup code
function popuphtml()
{
    let html='  <div id="vis-pop"> <span id="close" onclick="closepopup()"><img src="./close.png" alt="" id="npop"></span><img src="./left.jpeg" id="left"><img src="./right.jpeg" id="right"><img src="./1.jpeg" id="mainimage"></div>'
    let popdiv=document.createElement("div")
    popdiv.innerHTML=html;
    document.body.insertBefore(popdiv,document.body.firstChild);
}
let img;
let current;
function imgpopinit(target)
{
    //select all images with class target
    img=document.getElementsByClassName(target);
    // console.log(img);//it is an array.
    for(var i=0;i<img.length;i++)
    {
        img[i].style.cursor='pointer';
        img[i].addEventListener("click",function(){
            document.getElementById("mainimage").src=this.src;
            document.getElementById("vis-pop").style.display='block';
            checkarrow();
        })
    }
    popuphtml();
    //next button
    document.getElementById('right').addEventListener('click',function(){
        nextimg();
    });
    //prev img
    document.getElementById('left').addEventListener('click',function(){
        previmg();
    });
    
}
function closepopup()
{
    document.getElementById("mainimage").src="";
    document.getElementById("vis-pop").style.display='none';

}
//nextimg
function nextimg(){
          getcurrenimg();
      
          current++;
          document.getElementById("mainimage").src=img[current].src;
          checkarrow();
}
function previmg(){
    
    getcurrenimg();
  
    current--;
    document.getElementById("mainimage").src=img[current].src;
    checkarrow();
}
function getcurrenimg(){
    for(var i=0;i<img.length;i++)
    {
        if(img[i].src==document.getElementById("mainimage").src){
            current=i;
        }
    }
}
function checkarrow(){
    getcurrenimg();
    if(current == "0")
    {
        document.getElementById('left').style.display='none';
        document.getElementById('right').style.display='block';

    }
    else if(current == img.length-1){
        document.getElementById('right').style.display='none';
        
        document.getElementById('left').style.display='block';
    }
    else{
        document.getElementById('left').style.display='block';
        document.getElementById('right').style.display='block';
    }
}