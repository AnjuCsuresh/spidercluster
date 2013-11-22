
// Note this is a small dialog, so it fits in the Sandbox panel
// Standard sizes are 400, 600 and 840 pixels wide
var dialog = new AJS.Dialog({
    width: 600, 
    height: 450, 
    id: "example-dialog", 
    closeOnOutsideClick: true
});

// PAGE 0 (first page)
// adds header for first page
dialog.addHeader("SCHEDULE ");

// add panel 1
dialog.addPanel("Panel 1", "<form action='#' method='post' id='d' class='aui'><fieldset><div class='field-group'><label for='dBase'>Select Month</label><select class='select' id='dBase' name='dBase' ><option>All Months</option><option>January</option><option>February</option><option>March</option><option>April</option><option>May</option><option>June</option><option>July</option><option>August</option><option>September</option><option>October</option><option>November</option><option>December</option></select></div><div class='field-group'><label>Select Day</label><select class='select' ><option>All Days</option><option>Sunday</option><option>Monday</option><option>Tuesday</option><option>Wednesday</option><option>Thursday</option><option>Friday</option><option>Saturday</option></select></div><div class='field-group'><label>Select Hour</label><select class='select' ><option>All Hour</option><option>00:00</option><option>01:00</option><option>02:00</option><option>03:00</option><option>04:00</option><option>05:00</option><option>06:00</option><option>07:00</option><option>08:00</option><option>09:00</option><option>10:00</option><option>11:00</option><option>12:00</option><option>13:00</option><option>14:00</option><option>15:00</option><option>16:00</option><option>17:00</option><option>18:00</option><option>19:00</option><option>20:00</option><option>21:00</option><option>22:00</option><option>23:00</option></select></div><div class='field-group'><label>Select Minutes Shift</label><select class='select' ><option>00</option><option>05</option><option>10</option><option>15</option><option>20</option><option>25</option><option>30</option><option>35</option><option>40</option><option>45</option><option>50</option><option>55</option></select></div><div class='field-group'><label>Priority</label><select class='select' ><option>Highest</option><option>High</option><option>Normal</option><option>Low</option><option>Lowest</option></select></div><div class='field-group'><label>Comment</label><input class='text ' type='text' id='Comment' name='Comment' title='Comment'></div><div class='buttons-container'><div class='buttons'><input class='aui-button aui-button-primary' type='submit' id='submit' name='submit' value='SCHEDULE'></div></div></form>", "panel-body");
// You can remove padding with:
// dialog.get("panel:0").setPadding(0);

// add panel 2 (this will create a menu on the left side for selecting panels within page 0)
//dialog.addPanel("Panel 2", "<p>Some content for panel 2.</p><div style='height: 2000px;'>(forced-height element to demonstrate scrolling content)</div><p>End.</p>", "panel-body");
/*
dialog.addButton("Done", function (dialog) {
    dialog.hide();
});*/
dialog.addLink("Cancel", function (dialog) {
    dialog.hide();
}, "#");

// PAGE 1 (second page)
// adds a new page to dialog
/*dialog.addPage();

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
AJS.$("#dialog-button").click(function() {
    // PREPARE FOR DISPLAY
    // start first page, first panel
    dialog.gotoPage(0);
    dialog.gotoPanel(0);
    dialog.show();
});
AJS.$("#dialog-button1").click(function() {
    // PREPARE FOR DISPLAY
    // start first page, first panel
    dialog.gotoPage(0);
    dialog.gotoPanel(0);
    dialog.show();
});
AJS.$("#dialog-button2").click(function() {
    // PREPARE FOR DISPLAY
    // start first page, first panel
    dialog.gotoPage(0);
    dialog.gotoPanel(0);
    dialog.show();
});

  