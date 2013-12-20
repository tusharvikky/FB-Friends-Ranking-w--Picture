FB-Friends-Ranking-w--Picture
=============================


Drag and drop the following link to your browser’s bookmarks bar:

[FB Friends Ranking](javascript:function creator(e,t,n){var r=document.createElement(n);r.cellspacing="3";var i=document.createTextNode(t);r.appendChild(i);e.appendChild(r)}function creator2(e,t,n){var r=document.createElement(n);r.cellspacing="1";var i=t;var s=document.createElement("img");s.src=t;r.appendChild(s);e.appendChild(r)}function creator3(e,t,n,r){var i=document.createElement("a");var s=document.createElement(r);i.cellspacing="3";var o=document.createTextNode(t);i.appendChild(o);url="https://www.facebook.com/"+n;i.href=url;i.setAttribute("target","_blank");s.appendChild(i);e.appendChild(s)}function displayData(e){var t=document.createElement("thead");var n=document.createElement("table");n.appendChild(t);var r=document.createElement("tr");creator(r,"Photo","th");creator(r,"Name","th");creator(r,"Type","th");creator(r,"Score","th");t.appendChild(r);var s=document.createElement("tbody");n.appendChild(s);for(i=0;i<e.length;i++){console.log(e[i]);var o=e[i].type;var r=document.createElement("tr");creator2(r,e[i]["photo"],"td");creator3(r,e[i]["text"],e[i]["uid"],"td");creator(r,Object.keys(e[i]["grammar_costs"])[0].slice(0,-1).substring(1),"td");creator(r,e[i]["grammar_costs"][Object.keys(e[i]["grammar_costs"])[0]],"td");s.appendChild(r)}document.body.innerHTML="";document.body.appendChild(n)}id=requireDynamic("Env").user||requireDynamic("CurrentUserInitialData")["id"];url="//www.facebook.com/ajax/typeahead/search/facebar/bootstrap/?viewer="+id+"&__a=1";x=new XMLHttpRequest;x.onreadystatechange=function(){if(x.readyState==4&&x.status==200){srr=JSON.parse(x.responseText.substring(9)).payload.entries;displayData(srr)}};x.open("GET",url,true);x.send())

Steps:

1. Log in to your facebook Account.
2. Click on the bookmark.

You should see your Friends’ Rating Score along with picture. 
Smaller the friend’s score, higher the rank.

Facebook constantly change their code; so if it doesn't work, you could help by updating this repo -or- raise an issue.