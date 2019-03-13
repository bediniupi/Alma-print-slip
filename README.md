# Alma-print-slip
Alma-Print Slip browser extensions
The source of this extension is available for Firefox and Chrome.

## What it does
Add a "Print Slip" button in the fulfillment Patron services Alma page when loans are made and/or displayed, when it pressed displays and print a loan slip/receipt immediately bypassing the Alma email based circulation desks printers.

## Installation
Firefox: go to about:addons and install the extension from the xpi file.
Chrome: go to chrome://extensions, activate delevloper mode, and then load non packaged extension from the chrome Alma Print Slip extension directory saved locally.

## Configuration
Click on the Alma Print slip icon on the toolbar.
Here you can personalize the button and the slip appearance (css and text) and behaviour (display or display and print the receipt immediately).

## Tips and tricks
If you do not want to display some data (for example, the signature part) simply add a display:none; to the relative css textbox of the element to delete.

To reorder the elements swap the "order n" part of css.

Remember that the data displayed in loans table are the same and in the same order of the datas displayed in the table you visualize in the fulfillment Patron services Alma page.

You can add a image adding its url: for example, you can add the Alma email logo from Configuration Branding management adding the url https://[...].alma.exlibrisgroup.com/infra/branding/logo/logo-email.png?[...].

In general use your css knowlewdge to personalize the aspect of the receipts: in case you messed it up, reset the values to the default values simply delete the content of the textbox.

## Troubleshooting
After installation you have to save the configuration even if you don't change it, or the button will be "undefined".
Sometimes the loan table of the first receipt you display to print may contain a row with "sorted"/"Sortable" text.
