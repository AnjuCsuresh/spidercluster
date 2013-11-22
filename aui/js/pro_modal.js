
// Note this is a small dialog, so it fits in the Sandbox panel
// Standard sizes are 400, 600 and 840 pixels wide
var dialog = new AJS.Dialog({
    width: 400, 
    height: 330, 
    id: "example-dialog", 
    closeOnOutsideClick: true
});
var dialog1 = new AJS.Dialog({
    width: 450, 
    height: 330, 
    id: "example-dialog", 
    closeOnOutsideClick: true
});
// PAGE 0 (first page)
// adds header for first page
dialog.addHeader("Add Project");
dialog1.addHeader("Add Job");
// add panel 1
dialog.addPanel("Panel 1", "<form action='#' method='post' id='d' class='aui'><fieldset><div class='field-group'><label for='dBase'>Project Name</label><input class='text ' type='text' ></div><div class='field-group'><label for='dBase'>Project Description</label><input class='text ' type='text' ></div><div class='field-group'><label for='dBase'>Owner</label><input class='text ' type='text' ></div></fieldset><div class='buttons-container'><div class='buttons'><input class='aui-button aui-button-primary' type='submit' id='submit' name='submit' value='Submit'></div></div></form>", "panel-body");
// You can remove padding with:
// dialog.get("panel:0").setPadding(0);
dialog1.addPanel("Panel 1", "<form action='#' method='post' id='d' class='aui'><fieldset><div class='field-group'><label for='dBase'>Spider Name</label><input class='text ' type='text' ></div><div class='field-group'><label for='dBase'>Version</label><input class='text ' type='text' ></div></fieldset><fieldset><legend><span>File upload<span class='aui-icon icon-required'></span></span></legend><div class='field-group'><label for='uploadFile'>Upload file</label><input class='upfile' type='file' id='uploadFile' name='uploadFile' title='upload file'></div></fieldset><div class='buttons-container'><div class='buttons'><input class='aui-button aui-button-primary' type='submit' id='submit' name='submit' value='Submit'></div></div></form> ", "panel-body");


// add panel 2 (this will create a menu on the left side for selecting panels within page 0)
//dialog.addPanel("Panel 2", "<p>Some content for panel 2.</p><div style='height: 2000px;'>(forced-height element to demonstrate scrolling content)</div><p>End.</p>", "panel-body");

//dialog.addButton("Next", function (dialog) {
//    dialog.nextPage();
//});
dialog.addLink("Cancel", function (dialog) {
    dialog.hide();
}, "#");
dialog1.addLink("Cancel", function (dialog) {
    dialog1.hide();
}, "#");

/* PAGE 1 (second page)
// adds a new page to dialog
dialog.addPage();

// adds header for second page
dialog.addHeader("Dialog - Page 1");

// adds a single panel on second page (as there is only one panel, no menu will appear on the left side)
dialog.addPanel("SinglePanel", "<p>Some content for the only panel on Page 1</p>", "singlePanel");

// add "Previous" button to page 1
dialog.addButton("Previous", function(dialog) {
   dialog.prevPage();
});
// adds "Cancel" button to page 1
dialog.addButton("Cancel", function (dialog) {
    dialog.hide();
});
*/
// Add events to dialog trigger elements
AJS.$("#smalldialog-button").click(function() {
    // PREPARE FOR DISPLAY
    // start first page, first panel
    dialog.gotoPage(0);
    dialog.gotoPanel(0);
    dialog.show();
});
AJS.$("#smalldialog-button1").click(function() {
    // PREPARE FOR DISPLAY
    // start first page, first panel
    dialog1.gotoPage(0);
    dialog1.gotoPanel(0);
    dialog1.show();
});
        
