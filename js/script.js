"use strict";

////////////////////////
// FILLING THE INPUT BAR
////////////////////////

// input el
const input = document.querySelector(".input-slider");
// input bar fill
const inputFill = document.querySelector(".fill");

// fill the bar to percent that is equal input value
input.addEventListener("input", () => {
	inputFill.style.width = `${input.value}%`;
});

/////////////////////////
// CHANGING OFFER CONTENT
/////////////////////////

// button for billing option
const btnBilling = document.querySelector(".button");
// dot in billing button
const btnDot = document.querySelector(".dot");

let billingMonthly = true; // default

// activating button / setting the type of billing /
btnBilling.addEventListener("click", () => {
	btnDot.classList.toggle("dot--active");
	btnBilling.classList.toggle("button--active");
	// setting discount
	billingMonthly ? (billingMonthly = false) : (billingMonthly = true);
	console.log(billingMonthly);
	// changing prices
	if (!billingMonthly) changeContent();
	else changeContent();
});

// span where the cost of offer type will appear
const offerCostEl = document.querySelector(".numbers");
// value of span with offer cost
const offerCostValue = Number(document.querySelector(".numbers").textContent);
// all offer cost options
const offerCostOptions = [8, 12, 16, 24, 36];

// function that calculate the price with discount
function discountPrice(offerCostValue) {
	return offerCostValue * 0.75;
}

// amount of pageviews depends of offer type
const pageViews = document.querySelector(".page-views");
// all options for offer type
const pageViewsOptions = [
	`10K pageviews`,
	`50K pageviews`,
	`100K pageviews`,
	`500K pageviews`,
	`1M pageviews`,
];

// inner content in elements
function innerHTML(tabIndex) {
	pageViews.innerHTML = pageViewsOptions[tabIndex];

	// if discount
	if (billingMonthly === false) {
		offerCostEl.innerHTML = discountPrice(offerCostOptions[tabIndex]);
	} else {
		offerCostEl.innerHTML = offerCostOptions[tabIndex];
	}
}

// check what input value is and inner correct content
function changeContent() {
	const inputValue = Number(input.value);
	// selecting VALUE of input range element and mutating to Integer

	if (inputValue === 0) {
		innerHTML(0);
	}
	if (inputValue === 25) {
		innerHTML(1);
	}
	if (inputValue === 50) {
		innerHTML(2);
	}
	if (inputValue === 75) {
		innerHTML(3);
	}
	if (inputValue === 100) {
		innerHTML(4);
	}
}

input.addEventListener("input", changeContent);
