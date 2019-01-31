function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var party_name=document.getElementById("partyname_row"+no);
 var party_leader=document.getElementById("partyleader_row"+no);
 var party_slogan=document.getElementById("partyslogan_row"+no);
	
 var partyname_data=party_name.innerHTML;
 var partyleader_data=party_leader.innerHTML;
 var partyslogan_data=party_slogan.innerHTML;
	
 party_name.innerHTML="<input type='text' id='partyname_text"+no+"' value='"+partyname_data+"'>";
 party_leader.innerHTML="<input type='text' id='partyleader_text"+no+"' value='"+partyleader_data+"'>";
 party_slogan.innerHTML="<input type='text' id='partyslogan_text"+no+"' value='"+partyslogan_data+"'>";
}

function save_row(no)
{
 var partyname_val=document.getElementById("partyname_text"+no).value;
 var partyleader_val=document.getElementById("partyleader_text"+no).value;
 var partyslogan_val=document.getElementById("partyslogan_text"+no).value;

 document.getElementById("partyname_row"+no).innerHTML=partyname_val;
 document.getElementById("partyleader_row"+no).innerHTML=partyleader_val;
 document.getElementById("partyslogan_row"+no).innerHTML=partyslogan_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

