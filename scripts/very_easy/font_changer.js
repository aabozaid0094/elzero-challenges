// Font Changer
let font_families = {
    serif: "Serif",
    "sans-serif": "Sans Serif",
    cursive: "Cursive",
};

let class_toggle = (element, classes_to_remove, classes_to_add) => {
    if (Array.isArray(classes_to_remove))
        element.classList.remove(...classes_to_remove);
    else element.classList.remove(classes_to_remove);

    if (Array.isArray(classes_to_add)) element.classList.add(...classes_to_add);
    else element.classList.add(classes_to_add);
};

Object.keys(font_families).forEach(function (key) {
    var option_element = document.createElement("option");
    option_element.textContent = font_families[key];
    option_element.value = key;
    font_families_select.appendChild(option_element);
});

document.addEventListener("DOMContentLoaded", function () {
    class_toggle(
        font_changer_test,
        Object.keys(font_families),
        font_families_select.value
    );
});
font_families_select.addEventListener("change", function () {
    class_toggle(font_changer_test, Object.keys(font_families), this.value);
});