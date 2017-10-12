$("#paste").on("submit", evt => {
    evt.preventDefault();
    $.post("/api/paste", {
        title: $("#title").val(),
        body: $("#body").val(),
        password: $("#password").val()
    }).then(response => {
        window.location = "/paste/" + response;
    });
});
