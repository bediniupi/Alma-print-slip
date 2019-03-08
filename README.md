# Alma-print-slip
Alma-Print Slip browser extensions
This extension is available for Firefox and Chrome.
## What it does
Add a "Print Slip" button in the fulfillment Patron services Alma page when loans are made/listed, when pressed displays and print a loan slip immediately bypassing the Alma email based circulation desks printers.
## Configuration
In alma_print_slip.js you can personalize the slip appearance (css and text):
```
var header_html ="<html><head><style>body {font-family: Arial, Helvetica, sans-serif;} table {border-collapse: collapse;} </style></head><body>"; 

var title = "Loan Slip";

var button_name = "Print slip";

var institution = "Your Institution Name";
```
