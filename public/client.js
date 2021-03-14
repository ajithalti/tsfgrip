
let ts=0;
let w=window.innerWidth;
let h=window.innerHeight;
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
function customers(ip,from,to,amt)
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
				if(ip=="tamt")
				{
			
					tamt(res,from);
					return;
				}
				else if(ip=="send")
				{
				}
			
				viewc(res);
				
			}
		}
	}
	if(ip=="send")
	{
		xhr.open("POST","send",true);
		xhr.setRequestHeader('Content-Type','application/json');
                xhr.send(JSON.stringify({from:from,amt:amt,to:to}));
	
	}
	else
	{
	xhr.open("GET","viewc",true);
	xhr.send();
	}



}
function tamt(ip,from)
{
	let pop=document.createElement("div");
	pop.id="pop";
	let h=document.createElement("h4");
	h.innerHTML="Transfer amount";
	let abut=document.createElement("button");
	abut.id="abut";
	abut.innerHTML="Abort";
	abut.onclick=function()
	{
		document.getElementById("pop").remove();
	}
	pop.appendChild(abut);
	
	let amt=document.createElement("input");
	amt.id="amt";
	amt.type="number";
	amt.placeholder="Amount";
	let to=document.createElement("input");
	to.type="text";
	to.id="to";
	to.placeholder="Recipient";
	to.oninput=function()
	{
		filter(to.value.toLowerCase(),ip,from);
	}
	let center=document.createElement("center");
	center.id="center";
	center.appendChild(h);
	center.appendChild(document.createElement("br"));

	center.appendChild(amt);
	center.appendChild(document.createElement("br"));
	center.appendChild(document.createElement("br"));
	center.appendChild(to);
	center.appendChild(document.createElement("br"));
	center.appendChild(document.createElement("br"));

 	function filter(fip,ip,from)
	{
	
	if(document.getElementById("filter"))
	{
		document.getElementById("filter").remove();
	}
	
	let pop=document.getElementById("pop");
	let div=document.createElement("div");
	div.id="filter";
	div.setAttribute("style","width:320px;height:300px;overflow-x:hidden;overflow-y:auto;");
	let to=document.getElementById("to");
	for(i in ip)                                               {           
		if(ip[i].mail==from.mail)
			continue;
         	if(ip[i].mail.toLowerCase().includes(fip)||ip[i].no.toLowerCase().includes(fip)||ip[i].name.toLowerCase().includes(fip))
		{
		

		let c=document.createElement("div");                        let temp=i;                                                c.onclick=function()                     
		 {                                                                  document.getElementById("to").value=ip[temp].mail;
			 document.getElementById("filter").remove();
			 if(!document.getElementById("sbut"))
			 {
			 let sbut=document.createElement("button");

			 sbut.id="sbut";
			 sbut.setAttribute("style","background-coor:lightgreen;border:0px;color:purple;");
			 sbut.innerHTML="SEND";

			 sbut.onclick=function()
			 {
				 customers("send",from,amt.value,ip[temp]);
				 return;

			 }
			 document.getElementById("center").appendChild(sbut);
			 }
			 return;
			
		 }            
	        c.style.border="1px solid green";    
		c.style.backgroundColor="gray";     
		let name=document.createElement("p");  
		name.innerHTML="NAME: "+(ip[i].name);                    
		let bal=document.createElement("p");   
		bal.innerHTML="BALANCE: "+ip[i].bal;    
		let mail=document.createElement("p");   
		mail.innerHTML="MAIL: "+ip[i].mail;

                let no=document.createElement("p");
                no.innerHTML="ACC NO: "+ip[i].no;
			

               // pop.appendChild(document.createElement("br"));

        //      c.appendChild(document.createElement("br"));
                c.appendChild(name);

        //      c.appendChild(document.createElement("br"));
        //      c.appendChild(no);
        //      c.appendChild(document.createElement("br"));
                c.appendChild(mail);
        //      c.appendChild(document.createElement("br"));
        //      c.appendChild(bal);

                div.appendChild(c);
		
	
		}

        }
		pop.appendChild(div);
	}
	pop.appendChild(center);
	pop.setAttribute("style","position:absolute;width:320px;left:"+(w-320)/2+"px;background-color:white;top:50px;border:2px solid lightgreen;");
        //pop.innerHTML="SGJJHHGJHDUUU";
	document.body.appendChild(pop);
	document.getElementById("abut").setAttribute("style","position:relative;left:"+320-document.getElementById('abut').offsetWidth+"px;");
	


}
function viewone(ip)
{
	dlt();
	let content=document.getElementById("content");            let h=document.createElement("h3");                        h.innerHTML="Details";                                     h.style.textAlign="center";                                h.style.color="purple";                                    content.appendChild(h);
	let c=document.createElement("div");                       c.style.border="1px solid green";                          c.style.backgroundColor="yellow";                          let name=document.createElement("h4");                     name.innerHTML="NAME: "+(ip.name);                                                                                 let bal=document.createElement("h5");                      bal.innerHTML="BALANCE: "+ip.bal;                       let mail=document.createElement("h5");                     mail.innerHTML="MAIL: "+ip.mail;
        let no=document.createElement("h5");
         no.innerHTML="ACC NO: "+ip.no;   
	let tabut=document.createElement("button");
	tabut.id="lbut";
	tabut.innerHTML="Transfer amount";
	tabut.onclick=function()
	{
		customers("tamt",ip);
	}
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
	        let temp=i;
		c.onclick=function()
		{
			//alert(JSON.stringify(ip[temp]));
			viewone(ip[temp]);
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





