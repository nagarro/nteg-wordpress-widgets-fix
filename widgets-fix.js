(function () {

    var frontAndIndex = ["front-page", "home"],
        postsOnly = ["single"],
        none = [];

    var selectionOptions = {
        "Search": frontAndIndex,
        "Tags": frontAndIndex,
        "Cat + Tag Filter: Filter": frontAndIndex,
        "Most Viewed: Most Viewed": frontAndIndex,
        "kk Star Ratings: Top Rated": frontAndIndex,
        "Recent Comments: Recent Comments": frontAndIndex,
        "List Related Attachments: Attachments": postsOnly,
        "PHP Code: More Like This": postsOnly,
        "Category Contributors": postsOnly,
        "Meta": frontAndIndex,
        "Ultimate Posts: Recent Contributions": none,
        "PHP Code": frontAndIndex,
        "Yop Polls:  ": frontAndIndex,
        "Categories: By Group": frontAndIndex,
        "Authors: By Member": frontAndIndex,
        "Archives: By Month": frontAndIndex,
        "Calendar: By Date": frontAndIndex
    };

    var totalAjaxCalls = 0,
        saveButtons = [];

    $(".widget-liquid-right .widget .widget-context .wl-incexc select")
        .val("selected")
        .each(function () {
            var el = $(this),
                widgetEl = el.closest(".widget"),
                widgetName = widgetEl.find(".widget-top .widget-title h4").text(),
                madeChange;

            selectionOptions[widgetName].forEach(function (pageType) {
                var checkBox = widgetEl.find(".wl-is-" + pageType).find("input");
                if (!checkBox.is(":checked")) {
                    checkBox.click();
                    madeChange = true;
                }
            });

            if (widgetName === "Category Contributors") {
                var categoryContribEl = widgetEl.find(".widget-content .widefat"),
                    categoryContribTitle = categoryContribEl.val();

                if (!categoryContribTitle) {
                    categoryContribEl.val("Contributing to this category");
                    madeChange = true;
                }
            }

            if (madeChange) {
                saveButtons.push(widgetEl.find(".widget-control-save")[0]);
                totalAjaxCalls += 1;
            }

        });

    var nextTime = 0;
    saveButtons.forEach(function (button) {
        setTimeout(function () {
            console.log("Clicking button: " + $(button).attr("id"));
            $(button).click();
        }, (nextTime += 2000));
    });

    setTimeout(function () {
        alert("Done!");
    }, (nextTime += 2000));

}());
