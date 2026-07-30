const display=document.getElementById('display');
const keys=['7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+','C'];
let expr='';
const grid=document.getElementById('keys');
keys.forEach(k=>{
 const b=document.createElement('button');
 b.textContent=k;
 b.onclick=()=>{
   if(k==='C'){expr='';display.value='0';return;}
   if(k==='='){
      try{expr=String(eval(expr));display.value=expr;}
      catch(e){display.value='Error';expr='';}
      return;
   }
   expr+=k; display.value=expr;
 };
 grid.appendChild(b);
});
