var loan_table = document.getElementById("TABLE_DATA_loanList");
var button_exists = document.getElementById("alma_print_slip");

if (loan_table && !button_exists) {

var user_name = document.getElementById("pageBeanfullPatronName").innerHTML;    
user_name = user_name.replace(/\'/g, "`");
var user_id = document.getElementById("pageBeanuserIDisplay").value;    
var library = document.getElementById("locationText").innerHTML;    
var rowLength = loan_table.rows.length;
var loan_list = "";

for (var i = 0; i < rowLength; i++) {
 var loan_cells = loan_table.rows.item(i).cells;
 var cellLength = loan_cells.length;
 for (var j = 1; j < cellLength; j++) {
     if (i == 0) {     
     var loan_text = loan_cells.item(j);
     var header = loan_text.getElementsByClassName("sort fontReg");
     if (header.length > 0) {
        var loan_text = header[0].value;
        } else {
          var loan_text =  loan_cells.item(j).innerText;            
        }
    } else {
    var loan_text = loan_cells.item(j).innerText;
    }
    if (loan_text.length > 0) {
        loan_list += "|" + loan_text + "|";
    }
     
  }
    
  loan_list += "\n";
 }

var loan_list_table = loan_list.replace(/\|\|/g, "</td><td>");
loan_list_table = loan_list_table.replace(/\|\n/g, "</td></tr>");
loan_list_table = loan_list_table.replace(/\|/g, "<tr><td>");
loan_list_table = loan_list_table.replace(/\'/g, "`");
loan_list_table = loan_list_table.replace(/\"/g, "``");
loan_list_table = loan_list_table.replace(/CET/g, "");
loan_list_table = loan_list_table.replace(/\n/g, "");
loan_list_table = "<table border=1>" + loan_list_table + "</table>";

// ricava la data di oggi
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

if (dd < 10) {
  dd = '0' + dd;
}

if (mm < 10) {
  mm = '0' + mm;
}

today = mm + '/' + dd + '/' + yyyy;

var header_html ="<html><head><style>body {font-family: Arial, Helvetica, sans-serif;} table {border-collapse: collapse;} </style></head><body>"; 

var button_name = "Print Slip";

var title = "Loan Slip";

var institution = "Your Institution";

var data = "Date "+today;

var firma = "Signature _________________________";

var html_slip = header_html+"<h4>"+institution+"<br />"+library+"</h4><h3>"+title+"</h3><h4>"+user_name+" ("+user_id+")</h4>"+loan_list_table+"<h2>&nbsp;</h2><p>"+data+"&nbsp;&nbsp;&nbsp;&nbsp;"+firma+"</p></body></html>";

var call_javascript = "var slip = window.open('', '_blank','toolbar=no,scrollbars=no,resizable=yes,titlebar=no,menubar=no,top=300,left=500,width=500,height=600'); slip.document.write('"+html_slip+"'); slip.print(); slip.close();";
var print_button = " <button id=\"alma_print_slip\" onclick=\""+call_javascript+"\" style=\"background-color:red; color:white; height: 32px; padding: 6px 12px 6px 12px; border: 1px solid transparent; border-radius:4px\"> <strong>"+button_name+"</strong> </button>"; 

var button_div = document.getElementById('PAGE_BUTTONS_checkoutpatronworkspacedone');
button_div.insertAdjacentHTML('afterend', print_button);
}
