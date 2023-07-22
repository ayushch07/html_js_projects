let fah=document.getElementById("fah");
let cel=document.getElementById("cel");
cel.addEventListener('input',function(){
        let val=this.value;
        let f=(val*(9/5))+32;
        
    if(!Number.isInteger(f))
    {
        f=f.toFixed(4);
    }
        fah.value=f;
}
);
fah.addEventListener('input',function(){
    let j=this.value;
    let f=((j-32)*5)/9;
    if(!Number.isInteger(f))
    {
        f=f.toFixed(4);
    }
    cel.value=f;
}
);