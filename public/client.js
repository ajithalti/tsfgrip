
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

			       //	document.getElementById("content").innerHTML=
					let res=JSON.parse(this.responseText);
			
				viewc(res);
				
			}
		}
	}
	xhr.open("GET","viewc",true);
	xhr.send();



}
function viewc(ip)
{
	dlt();
	let j=0;
	let content=document.getElementById("content");

	for(i in ip)
	{
	
		let c=document.createElement("div");
		c.id=j.toString();
		c.style.border="1px solid green";
		c.style.backgroundColor="yellow";
		let name=document.createElement("h3");
		name.innerHTML="NAME: "+(ip[i].name);
		
		let bal=document.createElement("h4");
		bal.innerHTML="BALANCE: "+ip[i].bal;
		let mail=document.createElement("h4");
		mail.innerHTML="MAIL: "+ip[i].mail;
		let no=document.createElement("h4");
		no.innerHTML="ACC NO: "+ip[i].no;
		
		content.appendChild(document.createElement("br"));
	//	c.appendChild(document.createElement("br"));
		c.appendChild(name);
	//	c.appendChild(document.createElement("br"));
	//	c.appendChild(no);
	//	c.appendChild(document.createElement("br"));
		c.appendChild(mail);
	//	c.appendChild(document.createElement("br"));
	//	c.appendChild(bal);
		content.appendChild(c);;

	}
}


function dlt()
{
/*	while(document.getElementById("content").hasChild)
	{
		document.getElementById('content').firstChild.remove();
	}*/
}





