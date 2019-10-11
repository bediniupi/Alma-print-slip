function saveOptions(e) {
  e.preventDefault();
  chrome.storage.local.set({
    slip_name: document.querySelector("#slip_name").value,
    button_name: document.querySelector("#button_name").value,
    institution_name: document.querySelector("#institution_name").value,
    institution_logo: document.querySelector("#institution_logo").value,
    button_css: document.querySelector("#button_css").value,
    body_css: document.querySelector("#body_css").value,
    table_css: document.querySelector("#table_css").value,
    institution_css: document.querySelector("#institution_css").value,
    library_css: document.querySelector("#library_css").value,
    title_css: document.querySelector("#title_css").value,
    user_css: document.querySelector("#user_css").value,
    loans_css: document.querySelector("#loans_css").value,
    signature_css: document.querySelector("#signature_css").value,
    date_format: document.querySelector("#date_format").value,
    signature: document.querySelector("#signature").value,
    print_now: document.querySelector("#print_now").checked,
    table_rotate: document.querySelector("#table_rotate").checked,
    only_title: document.querySelector("#only_title").checked,
    sortable_translated: document.querySelector("#sortable_translated").value
  });
    
    if (sessionStorage.getItem("is_reloaded")) {
     document.querySelector("#updated").style.display="block";
     sessionStorage.clear();
        
    } else {
     location.reload(true);
     sessionStorage.setItem("is_reloaded", "1");
     
    }
}

function restoreOptions() {

  function setCurrentChoice(result) {
   document.querySelector("#slip_name").value = result.slip_name || "Loan Receipt";
    document.querySelector("#button_name").value = result.button_name || "Print the Receipt";
    document.querySelector("#institution_name").value = result.institution_name || "[My Institution]";
    document.querySelector("#institution_logo").value = result.institution_logo || "[Logo Url]";
    document.querySelector("#button_css").value = result.button_css || "background-color:red; color:white; height: 32px; padding: 6px 12px 6px 12px; border: 1px solid transparent; border-radius:4px";
    document.querySelector("#body_css").value = result.body_css || "font-family: Arial, Helvetica, sans-serif;";
    document.querySelector("#table_css").value = result.table_css || "border-collapse: collapse;";
    document.querySelector("#institution_css").value = result.institution_css || "order: 0; font-size: medium;";
    document.querySelector("#library_css").value = result.library_css || "order: 1; font-size: medium;";
    document.querySelector("#title_css").value = result.title_css || "order: 2; font-size: large;";
    document.querySelector("#user_css").value = result.user_css || "order: 3; font-size: small; font-weight:bold;";
    document.querySelector("#loans_css").value = result.loans_css || "order: 4; padding-top: 20px;";
    document.querySelector("#signature_css").value = result.signature_css || "order: 5; padding-top:50px;";
    document.querySelector("#date_format").value = result.date_format || "en-US";
    document.querySelector("#signature").value = result.signature || "Signature _________________________";
    document.querySelector("#print_now").checked = result.print_now;
    document.querySelector("#table_rotate").checked = result.table_rotate;
    document.querySelector("#only_title").checked = result.only_title;
    document.querySelector("#sortable_translated").value = result.sortable_translated || "";
}

 
   chrome.storage.local.get(setCurrentChoice);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions); 
