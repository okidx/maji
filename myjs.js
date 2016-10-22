$("#dialog").dialog({
    autoOpen: false,
    buttons: { 
        Ok: function() {
            $("#nameentered").text($("#name").val());
            $(this).dialog("close");
       },
        Cancel: function () {
            $(this).dialog("close");
        }
    }
});

$("#open").click(function () {
    $("#dialog").dialog("open");
});

