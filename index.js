function handlesidebar(){
    var x=document.getElementById('sidebar');
    if(x.style.display==="none"){
        x.style.display="flex";
    }else{
        x.style.display="none";
    }
}
function darkmode(){
    var k=document.getElementById('totals');
    if(k.getAttribute("class")==="total"){
        
    
    k.setAttribute("class","darkmode-background total");
    }else{
    k.setAttribute("class","total");
    }
    var l=document.getElementById('navbars');
    if(l.getAttribute("class")==="navbar"){
        
    
        l.setAttribute("class","darkmode-navbar navbar");
        }else{
        l.setAttribute("class","navbar");
        }
    var m=document.getElementById('onoff');
    if(m.innerHTML==="off"){
        m.innerHTML="on";
    }else{
        m.innerHTML="off";
    }
    var n=document.getElementById('footers');
    if(n.getAttribute("class")==="footer"){
        
    
        n.setAttribute("class","darkmode-footer footer");
        }else{
        n.setAttribute("class","footer");
        }
}