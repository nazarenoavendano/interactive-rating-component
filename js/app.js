const rating_cards = document.querySelectorAll(".ratings span");
const submit_btn = document.querySelector(".submit_btn");
const rate_point = document.getElementById("rate");
const rating_section = document.querySelector(".rating_section");
const thank_section = document.querySelector(".thank_section");

let rate = null;

rating_cards.forEach((rating_cards) => {
    rating_cards.addEventListener("click", (e) => {
        const active = document.querySelector(".selected");

        if (active) {
            active.classList.remove("selected");
        }

        const card = e.currentTarget;

        card.classList.add("selected");

        rate = card.innerText;
    });
});


submit_btn.addEventListener("click", () => {
    if (rate) {
        rate_point.innerText = rate;
        rating_section.classList.add("hidden");
        thank_section.classList.remove("hidden");
    }
});
