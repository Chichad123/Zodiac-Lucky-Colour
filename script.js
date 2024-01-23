const select=document.querySelector('select');
const body=document.querySelector('body');
const button=document.querySelector('button');

select.addEventListener('change',function(){
    let val=select.value;
    let index=select.selectedIndex;
    
    // button.onclick=get_colour(val,index);
    button.addEventListener('click',function(){
        if(index==0)
        body.style.backgroundColor="white";
        if(index==1)
        body.style.backgroundColor="crimson";
        if(index==2)
        body.style.backgroundColor="rgb(170, 216, 216)";
        if(index==3)
        body.style.backgroundColor="rgb(245, 245, 88)";
        if(index==4)
        body.style.backgroundColor="rgb(139, 135, 135)";
        if(index==5)
        body.style.backgroundColor="rgb(245, 190, 190)";
        if(index==6)
        body.style.backgroundColor="rgb(23, 224, 116)";
        if(index==7)
        body.style.backgroundColor="rgb(238, 180, 73)";
        if(index==8)
        body.style.backgroundColor="rgb(209, 115, 173)";
        if(index==9)
        body.style.backgroundColor="rgb(188, 133, 222)";
        if(index==10)
        body.style.backgroundColor="rgb(157, 149, 200)";
        if(index==11)
        body.style.backgroundColor="rgb(180,245,245)";

        const heading=document.querySelector('h1');
        heading.innerText=`Lucky Colour For ${val}`;
    });
    
    // console.log(typeof select.selectedIndex)
});
// function get_colour(val,index)
// {
    
// }

