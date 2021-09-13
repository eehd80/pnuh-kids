$(function () {
    $(document).on("click", "li[id^=tab]", function () {
        var varObj = $(this);
        var varObjRel = varObj.attr("rel");
        $("li[id^=tab]").each(function () {
            $(this).removeClass("on");
            $("#" + $(this).attr("rel")).hide();
        });
        varObj.addClass("on");
        $("#" + varObjRel).show();
        return false;
    });
});
