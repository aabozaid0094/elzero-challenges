// Show/Hide Paragraph
paragraph_toggle_test_computed_style = window.getComputedStyle(
    paragraph_toggle_test
);
paragraph_toggle.addEventListener("click", function () {
    switch (
        paragraph_toggle_test_computed_style.getPropertyValue("visibility")
    ) {
        case "visible":
            paragraph_toggle_test.style.visibility = "hidden";
            break;
        case "hidden":
            paragraph_toggle_test.style.visibility = "visible";
            break;
    }
});