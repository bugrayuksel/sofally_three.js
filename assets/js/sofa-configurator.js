var SofaConfigurator = function (item, isLoad) {







    var armR = 0;
    var armL = 0;
    var lngR = 0;
    var lngL = 0;
    var reg = 0;
    var regH = 0;
    var coff = 0;
    var cor = 0;
    var cov = "bonded";

    var priceCover = 1.0;
    var livePrice = 0;
    var totalPrice = 0;
    var colorflag = 1;



    var lstElement = [];
    var movingGroup = [];

    leftPosition = $("#canvasSofa").offset().left;
    topPosition = $("#canvasSofa").offset().top;

    var undoManager = new UndoManager();
    var fullItemList = item.components;
    var lstCubeCameras = [];
    var groupGlobal = [];

    var currentMapTexture = null;
    var currentBumpTexture = null;
    var currentPrimaryColor = null;
    var currentSecondaryColor = null;

    ////////////////////////////////////////////
    //Initialize DOM
    ////////////////////////////////////////////

    $("#category-list").hide();
    $("#sofa-config-panel").show();
    $(".footer-section").show();
    $(".progress").hide();
    $("#step1").show();
    $("#canvasSofa")
        .children()
        .remove();
    $("#select-type")
        .children()
        .remove();

    //display all sofa components
    if (item.components) {
        $("#select-type")
            .children()
            .remove();
        item.components.map((component, i) => {
            $("#select-type").append(
                "<div class='single-component' cat='" +
                component.data +
                "'>" +
                "<img src='" +

                "models/" +
                component.thumbImage +
                "' width='200px'>" +
                "<p>" +
                component.name +
                "</p>" +
                "</div>"
            );
        });

        $("#additional-items")
            .children()
            .remove();
        item.components.map((component, i) => {
            $("#additional-items").append(
                "<div class='additional-component hidden' cat='" +
                component.data +
                "'>" +
                "<img src='" +

                "models/" +
                component.thumbImage +
                "' width='200px'>" +
                "<p>" +
                component.name +
                "</p>" +
                "</div>"
            );
        });
    }

    if (isMobile === true) {
        console.log("THIS IS PHONE");
        $(".mobile-swip").css('visibility', 'visible');
        $(".mobile-check").css('visibility', 'visible');
        $(".footer-section").hide();

    }


    window.onbeforeunload = function (event) {
        return confirm("Confirm refresh");
    };

};