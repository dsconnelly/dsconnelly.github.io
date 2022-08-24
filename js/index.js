var active = "";

$(document).ready(function() {
    $("#nav>a").each(function() {
        $(this).click(function() {
            page = $(this).html();
            if (page !== active) {
                $.ajax({
                    url: "pages/" + page + ".html",
                    success: setContent,
                    dataType: "html"
                });

                active = page;
            }
        });
    });

    $("#nav>a").first().click();
});

function setContent(data) {
    if ($("#content").is(":empty")) {
        $("#content").html(data);
    } else {
        $("#content").fadeOut(150, function() {
            $(this).html(data);
            $(this).fadeIn(150);
        });
    }
}