
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
   let xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function()
	{
		if(this.status==200&&this.readyState==4)
		{
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
function viewone(ip)
{
	dlt();
	let content=document.getElementById("content");            let h=document.createElement("h3");                        h.innerHTML="Details";                                     h.style.textAlign="center";                                h.style.color="purple";                                    content.appendChild(h);
	let c=document.createElement("div");                       c.style.border="1px solid green";                          c.style.backgroundColor="yellow";                          let name=document.createElement("h4");                     name.innerHTML="NAME: "+(ip[i].name);                                                                                 let bal=document.createElement("h5");                      bal.innerHTML="BALANCE: "+ip[i].bal;                       let mail=document.createElement("h5");                     mail.innerHTML="MAIL: "+ip[i].mail;
        let no=document.createElement("h5");
         no.innerHTML="ACC NO: "+ip[i].no;   
	let tabut=document.createElement("button");
	tabut.id="lbut";
	tabut.innerHTML="Transfer amount";
	let ttbut=document.createElement("button");
	ttbut.id="lbut";
	ttbut.innerHTML="View all transactions";

	content.appendChild(document.createElement("br"));                                                            //      c.appendChild(document.createElement("br"));      
	c.appendChild(name);                               //      c.appendChild(document.createElement("br"));     
	c.appendChild(no);                                 //      c.appendChild(document.createElement("br"));                                                                 
	c.appendChild(mail);                               //      c.appendChild(document.createElement("br"));    
	c.appendChild(bal);
	c.appendChild(tabut);
	c.appendChild(ttbut);
         content.appendChild(c);
	
}
function viewc(ip)
{
	dlt();
	let j=0;
	let content=document.getElementById("content");
	let h=document.createElement("h3");
	h.innerHTML="Customers";
	h.style.textAlign="center";
	h.style.color="purple";
	content.appendChild(h);

	for(i in ip)
	{
	
		let c=document.createElement("div");
		c.id=j.toString();
		c.onclick=function()
		{
			viewone(ip);
		}
		c.style.border="1px solid green";
		c.style.backgroundColor="yellow";
		let name=document.createElement("h4");
		name.innerHTML="NAME: "+(ip[i].name);
		
		let bal=document.createElement("h5");
		bal.innerHTML="BALANCE: "+ip[i].bal;
		let mail=document.createElement("h5");
		mail.innerHTML="MAIL: "+ip[i].mail;
		let no=document.createElement("h5");
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
		content.appendChild(c);

	}
}


function dlt()
{
        while(document.getElementById("content").hasChildNodes())
	{
		document.getElementById("content").removeChild(document.getElementById('content').firstChild);
	}
}





