var active = "";

function setContent(data) {
    if ($("#dynamic").is(":empty")) {
        $("#dynamic").html(data);
    } else {
        $("#dynamic").fadeOut(75, function () {
            $(this).html(data);
            $(this).fadeIn(75);
        });
    }
}

function checkHash() {
    var hash = window.location.hash;
    if (!hash) {hash = "#about"};
    var page = hash.slice(1)

    if (page != active) {
        $.ajax({
            url: "pages/" + page + ".html",
            success: setContent,
            dataType: "html"
        });
    
        active = "page";
    }

}

$(window).on("hashchange", checkHash);

$(document).ready(function () {
    $("span.nav").click(function () {
        var hash = "#" + $(this).html();
        window.location.hash = hash;
    });

    checkHash();
});
