  
function projectmodal(){
    var dialog = new AJS.Dialog({
    width: 400, 
    height: 330, 
    id: "example-dialog", 
    closeOnOutsideClick: true
    });
    dialog.addHeader("Add Project");
    dialog.addPanel("Panel 1", "<form action='#' method='post' id='d' class='aui'><fieldset><div class='field-group'><label for='dBase'>Project Name</label><input class='text ' type='text' ></div><div class='field-group'><label for='dBase'>Project Description</label><input class='text ' type='text' ></div><div class='field-group'><label for='dBase'>Owner</label><input class='text ' type='text' ></div></fieldset><div class='buttons-container'><div class='buttons'><input class='aui-button aui-button-primary' type='submit' id='submit' name='submit' value='Submit'></div></div></form>", "panel-body");
    dialog.addLink("Cancel", function (dialog) {
    dialog.hide();
    }, "#");
    dialog.show();
}     
