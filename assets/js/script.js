//example data
const lstCategory = [{
        name: "Medici",
        thumbImage: "images/LV8005.jpg",
        description: "Luxury Sofa",
        components: [{
                name: "Armchair Seat(R)",
                thumbImage: "LV8005-1.png",
                data: "LV8005-1.3DS",
                combineInfo: {
                    backChair: ["top"],
                    leftTop: [false, false],
                    rightTop: [false, true],
                    rightBottom: [true, false],
                    leftBottom: [false, false]
                }
            },
            {
                name: "Armchair Seat(L)",
                thumbImage: "LV8005-A1.png",
                data: "LV8005-A1.3DS",
                combineInfo: {
                    backChair: ["top"],
                    leftTop: [true, false],
                    rightTop: [false, false],
                    rightBottom: [false, false],
                    leftBottom: [false, true]
                }
            },
            {
                name: "Regular Seat (Headrest)",
                thumbImage: "LV8005-3.png",
                data: "LV8005-3.3DS",
                combineInfo: {
                    backChair: ["top"],
                    leftTop: [true, false],
                    rightTop: [false, true],
                    rightBottom: [true, false],
                    leftBottom: [false, true]
                }
            },
            {
                name: "Regular Seat",
                thumbImage: "LV8005-B2.png",
                data: "LV8005-B2.3DS",
                combineInfo: {
                    backChair: ["top"],
                    leftTop: [true, false],
                    rightTop: [false, true],
                    rightBottom: [true, false],
                    leftBottom: [false, true]
                }
            },
            {
                name: "Lounge Seat(L)",
                thumbImage: "LV8005-B5.png",
                data: "LV8005-B5.3DS",
                combineInfo: {
                    backChair: ["left"],
                    leftTop: [true, false],
                    rightTop: [false, false],
                    rightBottom: [false, false],
                    leftBottom: [false, false]
                }
            },
            {
                name: "Lounge Seat(R)",
                thumbImage: "LV8005-A5.png",
                data: "LV8005-A5.3DS",
                combineInfo: {
                    backChair: ["left"],
                    leftTop: [false, false],
                    rightTop: [false, true],
                    rightBottom: [true, false],
                    leftBottom: [false, false]
                }
            },
            {
                name: "Corner Seat",
                thumbImage: "LV8005-B4.png",
                data: "LV8005-B4.3DS",
                combineInfo: {
                    backChair: ["top", "right"],
                    leftTop: [true, false],
                    rightTop: [false, true],
                    rightBottom: [false, true],
                    leftBottom: [true, true]
                }
            },
            {
                name: "Coffee Table",
                thumbImage: "LV8005-B6.png",
                data: "LV8005-B6.3DS"
            }
        ]
    },
    {
        name: "Raphael",
        thumbImage: "images/LV8013.jpg",
        description: "Luxury Sofa",
        components: [{
                name: "Armchair Seat(R)",
                thumbImage: "LV8013-C1.png",
                data: "LV8013-C1.3DS",
                combineInfo: {
                    backChair: ["top"],
                    leftTop: [false, false],
                    rightTop: [false, true],
                    rightBottom: [true, false],
                    leftBottom: [false, false]
                }
            },
            {
                name: "Armchair Seat(L)",
                thumbImage: "LV8013-A1.png",
                data: "LV8013-A1.3DS",
                combineInfo: {
                    backChair: ["top"],
                    leftTop: [true, false],
                    rightTop: [false, false],
                    rightBottom: [false, false],
                    leftBottom: [false, true]
                }
            },
            {
                name: "Regular Seat",
                thumbImage: "LV8013-C2.png",
                data: "LV8013-C2.3DS",
                combineInfo: {
                    backChair: ["top"],
                    leftTop: [true, false],
                    rightTop: [false, true],
                    rightBottom: [true, false],
                    leftBottom: [false, true]
                }
            },
            {
                name: "Corner Seat",
                thumbImage: "LV8013-C3.png",
                data: "LV8013-C3.3DS",
                combineInfo: {
                    backChair: ["top", "right"],
                    leftTop: [true, false],
                    rightTop: [false, true],
                    rightBottom: [false, true],
                    leftBottom: [true, true]
                }
            },
            {
                name: "Lounge Seat(L)",
                thumbImage: "LV8013-C4.png",
                data: "LV8013-C4.3DS",
                combineInfo: {
                    backChair: ["top"],
                    leftTop: [true, false],
                    rightTop: [false, false],
                    rightBottom: [false, false],
                    leftBottom: [false, false]
                }
            },
            {
                name: "Lounge Seat(R)",
                thumbImage: "LV8013-A4.png",
                data: "LV8013-A4.3DS",
                combineInfo: {
                    backChair: ["top"],
                    leftTop: [false, false],
                    rightTop: [false, true],
                    rightBottom: [true, false],
                    leftBottom: [false, false]
                }
            },
            {
                name: "Coffee Table",
                thumbImage: "LV8013-C5.png",
                data: "LV8013-C5.3DS"
            }
        ]
    },
    {
        name: "Armati",
        thumbImage: "images/LV8019.jpg",
        description: "Luxury Sofa",
        components: [{
                name: "Armchair Sear(R)",
                thumbImage: "LV8019-01.png",
                data: "LV8019-01.3DS",
                combineInfo: {
                    backChair: ["top"],
                    leftTop: [false, false],
                    rightTop: [false, true],
                    rightBottom: [true, false],
                    leftBottom: [false, false]
                }
            },
            {
                name: "Armchair Seat(L)",
                thumbImage: "LV8019-A1.png",
                data: "LV8019-A1.3DS",
                combineInfo: {
                    backChair: ["top"],
                    leftTop: [true, false],
                    rightTop: [false, false],
                    rightBottom: [false, false],
                    leftBottom: [false, true]
                }
            },
            {
                name: "Regular Seat (Headrest)",
                thumbImage: "LV8019-02.png",
                data: "LV8019-02.3DS",
                combineInfo: {
                    backChair: ["top"],
                    leftTop: [true, false],
                    rightTop: [false, true],
                    rightBottom: [true, false],
                    leftBottom: [false, true]
                }
            },
            {
                name: "Regular Seat",
                thumbImage: "LV8019-03.png",
                data: "LV8019-03.3DS",
                combineInfo: {
                    backChair: ["top"],
                    leftTop: [true, false],
                    rightTop: [false, true],
                    rightBottom: [true, false],
                    leftBottom: [false, true]
                }
            },
            {
                name: "Lounge Seat(L)",
                thumbImage: "LV8019-05.png",
                data: "LV8019-05.3DS",
                combineInfo: {
                    backChair: ["top"],
                    leftTop: [true, false],
                    rightTop: [false, false],
                    rightBottom: [false, false],
                    leftBottom: [false, false]
                }
            },
            {
                name: "Lounge Seat(R)",
                thumbImage: "LV8019-A5.png",
                data: "LV8019-A5.3DS",
                combineInfo: {
                    backChair: ["top"],
                    leftTop: [false, false],
                    rightTop: [false, true],
                    rightBottom: [true, false],
                    leftBottom: [false, false]
                }
            },
            {
                name: "Corner Seat",
                thumbImage: "LV8019-04.png",
                data: "LV8019-04.3DS",
                combineInfo: {
                    backChair: ["top", "right"],
                    leftTop: [true, false],
                    rightTop: [false, true],
                    rightBottom: [false, true],
                    leftBottom: [true, true]
                }
            },
            {
                name: "Coffee Table",
                thumbImage: "LV8019-06.png",
                data: "LV8019-06.3DS"
            }
        ]
    }
];

var lstColor = [{
        category: "bonded",
        list: [
            "FFDDAA",
            "F9E1B7",
            "F7C995",
            "F7C995",
            "EE9D26",
            "EAD8D6",
            "E8C6A9",
            "E6CAB4",
            "DDCFD0",
            "DCD7D2",
            "DCC6BB",
            "DCC6BB",
            "DAD9D6",
            "DAB9A1",
            "D2C7C4",
            "D0CEC9",
            "CFC7C0",
            "CEB4A9",
            "CEB4A9",
            "CAA58E",
            "C0BAB0",
            "BE8B60",
            "BB9275",
            "BACDE6",
            "BAA18D",
            "BA8032",
            "B7B8B9",
            "B7A9AD",
            "B7A8A1",
            "B1ACAA",
            "AB6E67",
            "A99B9F",
            "A85959",
            "A5633D",
            "A35965",
            "A2715D",
            "9D6F3C",
            "9A5D6D",
            "996E5C",
            "926660",
            "8F5B4F",
            "8E595A",
            "8D5A54",
            "845E9A",
            "80615E",
            "805D5B",
            "805558",
            "736255",
            "685A5C",
            "685A5C",
            "615D59",
            "4C4E56",
            "3C5C78",
            "385D7F"
        ]
    },
    {
        category: "genuine",
        list: [
            "beb7be",
            "b99d92",
            "b7a8a1",
            "b4a298",
            "b07637",
            "afaab0",
            "ad9d9d",
            "ad9b97",
            "ad8468",
            "a8896d",
            "a79d9c",
            "a68b7a",
            "a18e88",
            "998a83",
            "987b6b",
            "967d76",
            "94a4be",
            "947c70",
            "918c92",
            "918383",
            "90808a",
            "8d7e79",
            "8b6f5a",
            "875135",
            "7b5940",
            "7b1f22",
            "786868",
            "776b75",
            "746364",
            "745344",
            "6b7380",
            "675758",
            "62443a",
            "5e2c37",
            "57311e",
            "4c1300",
            "481d0d",
            "42332c",
            "414352",
            "412017",
            "3e1f1d",
            "3b131b",
            "261013",
            "252d40",
            "250f11",
            "1b395d",
            "1a131a",
            "151c2e"
        ]
    },
    {
        category: "italian",
        list: [
            "c9c6b3",
            "c0b98d",
            "afb4ad",
            "a88369",
            "a78059",
            "a28670",
            "9c7c63",
            "987360",
            "926d53",
            "905e3b",
            "8d6f64",
            "8d6049",
            "847e4c",
            "84685d",
            "836f64",
            "836857",
            "7d250b",
            "77280a",
            "6d5145",
            "6d432b",
            "611108",
            "5e602e",
            "57230e",
            "562118",
            "4f3e24",
            "412d24",
            "411917",
            "3e1710",
            "37190f",
            "2f4576",
            "2b1719",
            "2a1215",
            "271919",
            "271314",
            "261616",
            "24211c",
            "221819",
            "201519",
            "1b161c",
            "191219",
            "181d17",
            "151419",
            "130f10",
            "0e111a"
        ]
    }
];
//example data end

var isMobile = false;
var leftPosition;
var topPosition;

var CategoryLoader = function () {
    $("#category-list")
        .children()
        .remove();
    lstCategory.map((item, i) => {
        $("#category-list").append(
            "<div class='category-item' data-index='" +
            i +
            "'>" +
            "<img src='" +
            item.thumbImage +
            "' width='100%'>" +
            "<p class='title'>" +
            item.name +
            "</p>" +
            "</div>"
        );
    });

    if (saveExist == true) {
        $("#load-data").css('visibility', 'visible');
    }

    $("#load-data").click(function () {
        setTimeout(() => {
            $("#load-data").css('visibility', 'hidden');
        }, 300);

        $.ajax({
            url: ajaxurl,
            type: "POST",
            data: {
                action: "myload_action"
            },
            success: function (response) {
                if (response) {
                    var newStr = response.substring(0, response.length - 1)
                    console.log("SUCCESS LOADED");
                    var getRes = JSON.parse(newStr);
                    if(getRes.category.includes('Medici')) SofaConfigurator(lstCategory[0], true);
                    else if(getRes.category.includes('Raphael')) SofaConfigurator(lstCategory[1], true);
                    else SofaConfigurator(lstCategory[2], true);
                } else {}
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log('Error: ' + textStatus + ' ' + errorThrown);
            }
        });
    })

    $(".category-item").click(function () {
        $("#load-data").css('visibility', 'hidden');
        var id = $(this).data("index");
        SofaConfigurator(lstCategory[id], false);
    });
};

function hideSideDrawer() {
    $(".toggle-collapse").removeClass("fa-angle-right");
    $(".toggle-collapse").addClass("fa-angle-left");
    $(".side-drawer").removeClass("expanded");
    $(".side-drawer").addClass("collapsed");
}

function openSideDrawer() {
    $(".toggle-collapse").addClass("fa-angle-right");
    $(".toggle-collapse").removeClass("fa-angle-left");
    $(".side-drawer").addClass("expanded");
    $(".side-drawer").removeClass("collapsed");
}

jQuery("document").ready(function () {
    $ = jQuery;
    $("head").append("<meta property=\"og:image\" content=\"nothing\"/>");
    leftPosition = $("#canvasSofa").offset().left;
    topPosition = $("#canvasSofa").offset().top;
    if (/Mobile/i.test(navigator.userAgent) && !/Tablet/i.test(navigator.userAgent) && !/iPad/i.test(navigator.userAgent)) {
        isMobile = true;
        // console.log("Yes, it's mobile", isMobile);
    }
    CategoryLoader();
    $("#sofa-config-panel").hide();
    $(".footer-section").hide();
    $("#step1").hide();
    $("#step2").hide();

    $(".btn-back").click(function () {
        location.reload();
    });

    $(".toggle-collapse").click(function () {
        if ($(this).hasClass("fa-angle-right")) {
            hideSideDrawer();
        } else {
            openSideDrawer();
        }
    });

    ////////////////////////////////////////////
    //nav management
    ////////////////////////////////////////////
    $(".custom-nav-item").click(function () {
        $(this)
            .parent()
            .find(".custom-nav-item")
            .each(function () {
                $(this).removeClass("active");
            });
        $(this).addClass("active");
        if ($(this).data("cat") != "additional") openSideDrawer();
        else hideSideDrawer();

        var cat = $(this).data("cat");
        //side bar manage
        $(".side-drawer")
            .find(".side-drawer-content")
            .each(function () {
                if ($(this).data("cat") == cat) $(this).addClass("active");
                else $(this).removeClass("active");
            });
        $(".custom-nav-content")
            .find(".custom-nav-content-item")
            .each(function () {
                if ($(this).data("cat") == cat) $(this).addClass("active");
                else $(this).removeClass("active");
            });
    });

    //add element clicked
    $(".btn-add-element").click(function () {
        $("#select-type").show();
    });
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        var panel = this.nextElementSibling;
        var arrow = this.lastChild;
        if ($(this).hasClass("prt-ac")) {
            // if ($(this).hasClass("prt-exp")) {
            //     $(this).removeClass("prt-exp");
            //     $(arrow).removeClass("fa-chevron-circle-up");
            //     $(arrow).addClass("fa-chevron-circle-down");
            //     // $(this).nextAll().slice(0,4).css('display', 'none');
            //     $(this).nextUntil($('#material-btn')).css('display', 'none');
            // } else {
                $(this).addClass("prt-exp");
                $(arrow).removeClass("fa-chevron-circle-down");
                $(arrow).addClass("fa-chevron-circle-up");
                // $(this).nextAll().slice(0,4).css('display', 'block');
                $(this).nextUntil($('#additional-items')).css('display', 'block');
                // $("#select-type").css("display", "block");
                for (i = 3; i < acc.length; i++) {
                    // if (acc[i].classList.contains("prt-ac")) continue;
                    acc[i].nextElementSibling.style.display = "none";
                    var arrowA = acc[i].lastChild;
                    $(arrowA).removeClass("fa-chevron-circle-up");
                    $(arrowA).addClass("fa-chevron-circle-down");
                }
            // }
        } else if ($(this).hasClass("chd-ac")) {
            // if (panel.style.display === "block") {
            //     panel.style.display = "none";
            //     $(arrow).removeClass("fa-chevron-circle-up");
            //     $(arrow).addClass("fa-chevron-circle-down");
            // } else {
                for (i = 1; i < acc.length; i++) {
                    acc[i].nextElementSibling.style.display = "none";
                    var arrowA = acc[i].lastChild;
                    $(arrowA).removeClass("fa-chevron-circle-up");
                    $(arrowA).addClass("fa-chevron-circle-down");
                }
                panel.style.display = "block";
                $(arrow).removeClass("fa-chevron-circle-down");
                $(arrow).addClass("fa-chevron-circle-up");
            // }
        } else {
            // if (panel.style.display === "block") {
            //     panel.style.display = "none";
            //     $(arrow).removeClass("fa-chevron-circle-up");
            //     $(arrow).addClass("fa-chevron-circle-down");
            // } else {
                $(".prt-ac").removeClass("prt-exp");
                $(".prt-ac").nextUntil($('#material-btn')).css('display', 'none');
                for (i = 0; i < acc.length; i++) {
                    acc[i].nextElementSibling.style.display = "none";
                    var arrowA = acc[i].lastChild;
                    $(arrowA).removeClass("fa-chevron-circle-up");
                    $(arrowA).addClass("fa-chevron-circle-down");
                }
                panel.style.display = "block";
                $(arrow).removeClass("fa-chevron-circle-down");
                $(arrow).addClass("fa-chevron-circle-up");
            // }
        }
    });
}