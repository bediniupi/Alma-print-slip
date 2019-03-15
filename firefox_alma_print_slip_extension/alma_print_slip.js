    function onError(error) {
        console.log(`Error: ${error}`);
        }
    function onGot(item) {
               
            
                var body_css = item.body_css;
                var table_css = item.table_css;
                // div   
                var institution_css = item.institution_css;
                var library_css = item.library_css;
                var title_css = item.title_css;
                var user_css = item.user_css;
                var loans_css = item.loans_css;
                var signature_css = item.signature_css;
                var date_format = item.date_format;
                var d = new Date();
                var today = d.toLocaleDateString(date_format);
                var slip_name = item.slip_name;
                var button_name = item.button_name;
                var button_style = item.button_css;
                var institution_name = item.institution_name;
                var institution_logo_link = item.institution_logo;
                var data = "Date "+today;
                var firma = item.signature;
                var print_now = item.print_now;
                
                var css_style = "body {"+body_css+"} table {"+table_css+"} #slip_flex { display: flex; flex-direction: column;} #slip_institution {"+institution_css+"} #slip_library {"+library_css+"} #slip_title {"+title_css+"} #slip_user {"+user_css+"} #slip_loans_table {"+loans_css+"} #slip_signature {"+signature_css+"}";

                var header_html ="<html><head><meta charset='UTF-8';><style>"+css_style+"</style></head><body><div id='slip_flex'>"; 

                var html_slip = header_html+"<div id='slip_institution'><div id='slip_logo'><img src='"+institution_logo_link+"'/></div>"+institution_name+"</div><div id='slip_library'>"+library+"</div><div id='slip_title'>"+slip_name+"</div><div id='slip_user'>"+user_name+" ("+user_id+")</div><div id='slip_loans_table'>"+loan_list_table+"</div><div id='slip_signature'>"+data+"&nbsp;&nbsp;&nbsp;&nbsp;"+firma+"</div></div></body></html>";
                var button_exists = document.getElementById("alma_print_slip");
                if (!button_exists) {
                var html_div = document.createElement('div');
                html_div.id = "alma_slip_hidden";
                html_div.style.display = "none";
                html_div.innerHTML = html_slip;
                //document.querySelector('body').appendChild(html_div);
                loan_table.appendChild(html_div);
                
                var call_javascript = "var html_slip = document.getElementById('alma_slip_hidden').innerHTML; slip = window.open('', '_blank','toolbar=no,scrollbars=no,resizable=yes,titlebar=no,menubar=no,top=300,left=500,width=500,height=600'); slip.document.write(html_slip); slip.document.close();";
                
                if (print_now) call_javascript += " slip.print(); slip.close();";
                
                var print_button = " <button id=\"alma_print_slip\" onclick=\""+call_javascript+"\" style=\""+button_style+"\"> <strong>"+button_name+"</strong> </button>"; 

                var button_div = document.getElementById('PAGE_BUTTONS_checkoutpatronworkspacedone');
                button_div.insertAdjacentHTML('afterend', print_button);
                }
    
        
    }
  
var loan_table = document.getElementById("TABLE_DATA_loanList");
if (loan_table) {
    var user_name = document.getElementById("pageBeanfullPatronName").innerHTML;    
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
            loan_list_table = loan_list_table.replace(/CET/g, "");
            loan_list_table = loan_list_table.replace(/\n/g, "");
            loan_list_table = "<table border=1>" + loan_list_table + "</table>";


            var res = browser.storage.local.get(null);
            res.then(onGot, onError);    
 
}

