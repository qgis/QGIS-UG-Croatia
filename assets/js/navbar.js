// first handler for hide / show of search box when magnifying glass is clicked
document.addEventListener("DOMContentLoaded", () => {
    const $toggles = Array.prototype.slice.call(
        document.querySelectorAll(".search-icon"),
        0,
    );

    $toggles.forEach((el) => {
        el.addEventListener("click", () => {
            const $target = document.getElementById("search-control");
            el.classList.toggle("is-hidden");
            $target.classList.toggle("is-hidden");
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll(".navbar-burger"),
        0,
    );

    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
        el.addEventListener("click", () => {
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            el.classList.toggle("is-active");
            $target.classList.toggle("is-active");
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {

    const $dropdownTriggers = Array.prototype.slice.call(
        document.querySelectorAll(".navbar-item.has-dropdown > .navbar-link"),
        0,
    );

    $dropdownTriggers.forEach((el) => {
        el.addEventListener("click", () => {
            el.parentElement.classList.toggle("is-active");
        });
    });
});
