const content=document.getElementById('text');
var character=document.getElementById('para');
let count=0;
let first,second=0;
content.addEventListener('keypress',counter);
content.addEventListener('keydown',c1);

function counter(e)
{
    
     count=count+1;
    character.textContent=`Total characters you typed:${count}`;
    
}
    function c1(e)
    {
        
if(e.key==="Backspace")
{ 
    
    
    if(count<=0)
    {
        count=0;
       return; 
        
        
    }
    else
    {
        count=count-1;
        character.textContent=`Total characters you typed:${count}`;
    }
    
    
    
   
}

    }

    
  



    

