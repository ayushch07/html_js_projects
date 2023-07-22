let flag=3;
show(flag);
function show(num)
{
        let slide=document.getElementsByClassName('slide');

        if(num==slide.length)
        {
            flag=0;
            num=0;
        }
        if(num<0)
        {
            flag=slide.length-1;
            num=slide.length-1;
        }
        for(let y of slide)
        {
            y.style.display="none";
        }
         slide[num].style.display="block";
}
function control(x)
{
    flag=flag+x;
    show(flag);
}
