// FILTER

function toggleLicenceFilter() {
  let icon = document.querySelector(".licence-icon");
  let licence = document.querySelector(".licence");
  let licenceBtn = document.querySelector(".licence-button");

  icon.classList.toggle("rotate");
  licence.classList.toggle("show");
  licenceBtn.classList.toggle("active-filter");
}

function toggleDepositFilter() {
  let icon = document.querySelector(".deposit-icon");
  let filterOptions = document.querySelector(".deposit");
  let depositBtn = document.querySelector(".deposit-button");

  icon.classList.toggle("rotate");
  filterOptions.classList.toggle("show");
  depositBtn.classList.toggle("active-filter");
}

function toggleBonusFilter() {
  let icon = document.querySelector(".bonus-icon");
  let filterOptions = document.querySelector(".bonus");
  let bonusBtn = document.querySelector(".bonus-button");

  icon.classList.toggle("rotate");
  filterOptions.classList.toggle("show");
  bonusBtn.classList.toggle("active-filter");
}

function toggleAllFilter() {
  let allBtn = document.querySelector(".all-button");
  allBtn.classList.toggle("active-filter");
}

function toggleSortFilter() {
  let sortPaths = document.querySelectorAll(".sort-button svg path");
  let sortBtn = document.querySelector(".sort-button");
  let filterOptions = document.querySelector(".sort");

  filterOptions.classList.toggle("show");
  sortBtn.classList.toggle("active-filter");
  sortPaths.forEach((path) => {
    path.classList.toggle("active-sort");
  });
}

document.querySelector(".filter").addEventListener("click", (event) => {
  if (event.target.classList.contains("deposit-button")) {
    toggleDepositFilter();
  } else if (event.target.classList.contains("licence-button")) {
    toggleLicenceFilter();
  } else if (event.target.classList.contains("sort-button")) {
    toggleSortFilter();
  } else if (event.target.classList.contains("bonus-button")) {
    toggleBonusFilter();
  } else if (event.target.classList.contains("all-button")) {
    toggleAllFilter();
  }
});

document.querySelector(".info-button").addEventListener("mouseover", () => {
  let infoDescription = document.querySelector(".info__description");
  infoDescription.classList.add("show-info");
});

document.querySelector(".info-button").addEventListener("mouseout", () => {
  let infoDescription = document.querySelector(".info__description");
  infoDescription.classList.remove("show-info");
});

// FILTERED FUNCTION

const checkboxes = document.querySelectorAll(
  '.filter__options input[type="checkbox"], .filter__sort-options input[type="checkbox"]'
);
const filteredContainer = document.querySelector(".filtered__list");
const clearFilteredItems = document.querySelector(".filtered__clear");


// Adding filtered items

function updateFilteredItems() {
  filteredContainer.innerHTML = "";

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const label = document.querySelector(
        `label[for="${checkbox.id}"]`
      ).textContent;
      const item = document.createElement("li");
      const deleteIcon = document.createElement("i");

      deleteIcon.classList.add("fa-solid", "fa-xmark");
      deleteIcon.addEventListener("click", removeFilter);
      item.classList.add("filtered__item");
      item.textContent = label;
      item.appendChild(deleteIcon);
      filteredContainer.appendChild(item);
    }
  });
}

// Remove filtered item

function removeFilter(event) {
  const listItem = event.target.closest(".filtered__item");
  const label = listItem.textContent;

  const checkbox = Array.from(checkboxes).find((checkbox) => {
    const checkboxLabel = document.querySelector(
      `label[for="${checkbox.id}"]`
    ).textContent;
    return checkboxLabel === label;
  });

  if (checkbox) {
    checkbox.checked = false;
    updateFilteredItems();
  }
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", updateFilteredItems);
});



// Clear all filters

clearFilteredItems.addEventListener("click", () => {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
    updateFilteredItems();
  });
});


// MORE INFO

const moreBtns = document.querySelectorAll(".content__more-btn");

moreBtns.forEach((btn) => {
  btn.addEventListener("click", function() {
    const infoContainer = btn.nextElementSibling;
    const icon = btn.querySelector('i');
    const terms = btn.closest('.content__item-wrapper').querySelector('.content__terms');
    infoContainer.classList.toggle("info-show");

    btn.classList.toggle('more-show');
    icon.classList.toggle('rotate');
    if (terms) {
      terms.classList.toggle('show-term');
    }
  });
});




// SHOW MORE PAYMENT METHODS


const paymentBtns = document.querySelectorAll('.content__payment-btn');

paymentBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.content__item-wrapper');
        const extraPayments = card.querySelector('.content__payment-extra');
        extraPayments.classList.toggle('hidden');
    });
});



// SHOW MORE 



const hiddenItems = document.querySelectorAll('.content__item-wrapper:nth-last-child(-n+5)');

hiddenItems.forEach(item => {
    item.classList.add('hidden');
});

const showMoreBtn = document.querySelector('.content__show-more button');
showMoreBtn.addEventListener('click', function() {

    document.querySelectorAll('.content__item-wrapper.hidden').forEach((item, index) => {
        if (index < 5) {
            item.classList.remove('hidden');
        }
    });
});