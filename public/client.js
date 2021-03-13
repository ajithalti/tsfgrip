
let ts=0;
window.onload=function()
{
    
}
let hm=0;
function hmenu()
{
    if(hm%2==0)
    {
        document.getElementById("hc").style.display="block";
        
    }
    else
    {
        document.getElementById("hc").style.display="none";
    }
    hm++;
}
function theme()
{
    
}
function customers()
{
	alert("hello");
   let xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function()
	{
		if(this.status==200&&this.readyState==4)
		{
			alert("res");
			if(this.responseText)
			{

				document.getElementById("content").innerHTML=JSON.parse(this.responseText);
			}
		}
	}
	xhr.open("GET","viewc",True);
	xhr.send();



}
 
