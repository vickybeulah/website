

var j=1;
var flag=1;
var nam,nam1,d,ad;
var tel;
var gender="";
function validation(){
console.log('hai');
    
d = document.getElementById("dob").value;
    nam = document.getElementById("fname").value;
    console.log(nam);
    
        if (nam=="")
        {
            document.getElementById("s1").innerHTML="! field is empty !";
            flag=false;
            return false;
        }
        console.log('hai');
var regexp1=new RegExp("[^a-zA-Z]");
if(regexp1.test(nam))
{
document.getElementById("s1").innerHTML="Only alphabets from a-z are allowed";
 flag=false;
 return false;
}
else{
     document.getElementById("s1").innerHTML="";
}
    nam1=document.getElementById("lname").value;
    if (nam1 == "")
        {
       document.getElementById("s2").innerHTML="! field is empty !";
       flag=false;
       return false;
        }

        console.log('hai');
var regexp1=new RegExp("[^a-zA-Z]");
if(regexp1.test(nam1))
{
document.getElementById("s2").innerHTML="Only alphabets from a-z are allowed";
 flag=false;
 return false;
}
else{
   document.getElementById("s2").innerHTML="";
   flag = 1;  
}
  
    
dob=document.getElementById('dob').value;
    if(d==""){
        document.getElementById("s4").innerHTML="please select date";
        flag=0;
        return false;
    }
  else{
         document.getElementById("s4").innerHTML="";
         flag = 1;
    }
console.log('hai');
 var phoneno = /^\d{10}$/;
 tel=document.getElementById("phno").value;
 if(tel=="")
 {
 document.getElementById("s5").innerHTML="field is empty";
flag=0;

 }
  else if(!phoneno.test(tel))
        {
          document.getElementById("s5").innerHTML="enter valid mobile number";
         flag = 0;
       return false; 
        }
      else
        {
       document.getElementById("s5").innerHTML="";
       flag=1;
        } 
  
  var g = $("input[class='gen']:checked").length;
 var ans=isMandatory(g);

  if(ans==true)
 {
  
   $('#g1').text("field is empty");
   flag=0;
   return false;
 }
else{
  $('#g1').text("");
  flag=1;
  
}

ad=document.getElementById("address").value;

if(ad==""){
      document.getElementById("s6").innerHTML="enter the address";
      flag=0;
      return false;
}
else{

    document.getElementById("s6").innerHTML="";
    flag=1;
} 
g = $("input[class='gen']:checked").val();
function isMandatory(vals)
{
if(vals=="" || vals==0)
{
 return true;
}
else{

return false;

}

}
console.log(g);
i=1;


if(flag==1)
{

    var table = "";


    table = document.getElementById("display");
     var row = table.insertRow(j);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      
      
      cell1.innerHTML = nam + " " + nam1;
      cell2.innerHTML = dob;
      cell3.innerHTML = g;
      cell4.innerHTML = tel;
      cell5.innerHTML = ad;
    
      j++;
      
}
    

}
