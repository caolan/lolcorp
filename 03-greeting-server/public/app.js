(function () {
    'use strict';
    
    var name = window.initData.name;
    if (name) {
        $("#welcome").text("Hello, " + name + "!").lettering();
        $("#welcome span").each(function (i) {
            if (i % 2) {
                $(this).addClass('alt');
            }
        });
    }
    
}());
