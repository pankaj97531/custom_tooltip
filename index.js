//document.getElementById(showinput).innerHTML="kkk";
//https://www.youtube.com/watch?v=6_zM6Tvq7Yc
document.getElementById("testinput").addEventListener('keyup',function(){
//    console.log(this.value);
    document.getElementById("showinput").innerHTML = this.value;
})
function showToolTip(){
    let tooltip="",tooltipDiv=document.querySelector(".div-tootip"),tooltipElements=Array.from(document.querySelectorAll('.hover-reveal')),timer,timerArr=[];
  //  console.log(tooltipDiv);
    let displayToolTip=(e,obj)=>{
//        tooltipDiv.style.display = 'block';
            tooltip =  obj.dataset.tooltipinfo;
            tooltipDiv.innerHTML=tooltip;
            tooltipDiv.style.top = e.pageY+"px";
            tooltipDiv.style.left = e.pageX+"px"; 
            //tooltipDiv.style.opacity = 1;
           // console.log(e);
           fadein(tooltipDiv);
           
    }
    let fadeout = function(element){
        let op = 1;        
        timer = setInterval(function(){
           // console.log('fadeout');
            if(op <= 0.1){
                clearInterval(timer);
                element.style.display = 'none';
                element.style.opacity = 0;
            }
            element.style.opacity = op;
            op -= op*0.1;
        },20)
        timerArr.push(timer);
    }
    let fadein = function(element){
        let op = 0.1;        
        timer = setInterval(function(){
           //console.log('fadein');
            if(op >= 0.9){
                clearInterval(timer);
                element.style.display = 'block';
                element.style.opacity = 1;
            }
            element.style.opacity = op;
            op += op*0.1;
        },20)
        timerArr.push(timer);
    }
    let timeout;
    tooltipElements.forEach((el)=>{
        el.addEventListener('mouseenter',function(e){
            for(let i=0;i<timerArr.length;i++){
                clearInterval(timerArr[i]);
            }
            timerArr=[];
            let that  = this;
            timeout=setTimeout(function(){
                displayToolTip(e,that);
            },400);

        })
        el.addEventListener('mouseleave',function(){
           // tooltipDiv.style.display = 'none';
           clearTimeout(timeout);
           if(timerArr.length){
               for(let i=0;i<timerArr.length;i++){
                   clearInterval(timerArr[i]);
               }
           }
           timerArr=[];
            fadeout(tooltipDiv);
            console.log(timerArr);
        })
    })
}
showToolTip();