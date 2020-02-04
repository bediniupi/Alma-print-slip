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
                var table_rotate = item.table_rotate;
                var only_title = item.only_title;
                var sortable_translated = "|sortable|sorted descending|sorted ascending|"+item.sortable_translated+"|";
                var user_name = document.getElementById("pageBeanfullPatronName").innerHTML;    
                var user_id = document.getElementById("pageBeanuserIDisplay").value;    
                var library = document.getElementById("locationText").innerHTML;  
                var rowLength = loan_table.rows.length;
                var header_ray = [];
                var loan_ray = [];
                var i,j;
                var h,l;
                var loan_row, loan_rows;
                var loan_list_table;
                var header_el = document.querySelectorAll('th[id^="SELENIUM_ID_loanList_HEADER"]');
                for(i=0; i<header_el.length; i++) {
                    h = header_el[i].innerText;
                    if (!h || sortable_translated.indexOf("|"+h+"|") !== -1) h = header_el[i].querySelector('input[id^="sortHeader-checkout.patron.workspace"]').value;  
                    header_ray.push(h);
                }
                loan_rows = document.querySelectorAll('tr[id^="recordContainerloanList"]');
                for (j=0; j<loan_rows.length; j++) {
                    l = loan_rows[j].innerText;
                    if(only_title) l=l.replace(/\s\/\s.*?(?=\t)/, "");
                    loan_ray.push(l.split('\t'));
                }
                if (!table_rotate) {    
                    loan_list_table='<table border=1>';
                    loan_list_table+="<tr><th>" + header_ray.join("</th><th>") + "</th></tr>\n";
                for (i=0; i<loan_ray.length; i++) {
                    for(j=0; j<header_ray.length; j++) {
                        loan_row+=loan_ray[i][j+2]+"</td><td>";
                        }            
                    loan_list_table+="<tr><td>" + loan_row.substring(0, loan_row.length-4) + "</tr>\n";
                    loan_row="";
                    }                    
                loan_list_table+="</table>";    
                } else {
                    for (i=0; i<loan_ray.length; i++) {
                        loan_list_table+='<table border=1>';
                        for (j=0; j<header_ray.length; j++) {
                            loan_list_table+="<tr><th>"+header_ray[j]+"</th><td>"+loan_ray[i][j+2]+"</td></tr>\n";
                        }
                    loan_list_table+="</table>\n";
                    }
                }
                loan_list_table=loan_list_table.replace("undefined", "");
                    
                var css_style = "body {"+body_css+"} table {"+table_css+"} #slip_flex { display: flex; flex-direction: column;} #slip_institution {"+institution_css+"} #slip_library {"+library_css+"} #slip_title {"+title_css+"} #slip_user {"+user_css+"} #slip_loan_list_table {"+loans_css+"} #slip_signature {"+signature_css+"}";

                var header_html ="<html><head><meta charset='UTF-8';><style>"+css_style+"</style></head><body><div id='slip_flex'>"; 

                var html_slip = header_html+"<div id='slip_institution'><div id='slip_logo'><img src='"+institution_logo_link+"'/></div>"+institution_name+"</div><div id='slip_library'>"+library+"</div><div id='slip_title'>"+slip_name+"</div><div id='slip_user'>"+user_name+"<span id='user_id'> ("+user_id+")</span></div><div id='slip_loan_list_table'>"+loan_list_table+"</div><div id='slip_signature'>"+data+"&nbsp;&nbsp;&nbsp;&nbsp;"+firma+"</div></div></body></html>";
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
            
            var res = browser.storage.local.get(null);
            res.then(onGot, onError);    
 
}

