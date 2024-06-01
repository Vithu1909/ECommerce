var sidenav=document.querySelector(".side-nav");

function opennav()
{
    sidenav.style.left="0";

}
function closenav()
{
    sidenav.style.left="-60%";

}

var productcon=document.getElementById("product");
var search=document.getElementById("search")
var productlist=productcon.querySelectorAll("div");
var nofound=document.getElementById("nofound");

search.addEventListener('keyup',function(){
    var enterdata=event.target.value.toUpperCase();
    var count =0;
    for(var i=0;i<productlist.length;i++)
    {
        var productname=productlist[i].querySelector('p').textContent;
        if(productname.toUpperCase().indexOf(enterdata)<0)
        {
            productlist[i].style.display="none"
            count++;
        }
        else
        {
            productlist[i].style.display="block"
            count--;
        }
    }
    if(count>=productlist.length)
    {
       nofound.style.display="block"

    }
    else
    {
        nofound.style.display="none"

    }
})  

