const darkModeToggle = document.getElementById("dark__mode__toggle");
const tableBody = document.querySelector(".table__body");

function renderTableBody() {
  let htmlContent = "";
  for (let i = 1; i < 20; i++) {
    htmlContent += `
         <tr class="table__row">
            <td class="table__cell table__cell--checkbox">
              <input type="checkbox" class="checkbox"/>
            </td>
            <td class="table__cell table__cell--id td-id">${i}</td>
            <td class="table__cell table__cell--name">Christmas</td>
            <td class="table__cell table__cell--advertiser">
              <span class="cell__advertiser__line">Food Market</span>
              <span class="cell__advertiser__line cell__advertiser__line--group"
                >Krab</span
              >
            </td>
            <td class="table__cell table__cell--description">
              Holiday night during Christmas eve is a hot time.
            </td>
            <td class="table__cell table__cell--price">$2000</td>
            <td class="table__cell table__cell--starttime">2020/12/24 19:30</td>
            <td class="table__cell table__cell--endtime">2021/01/02 23:00</td>
            <td class="table__cell table__cell--action">
              <img
                class="cell__action__icon"
                src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/menu.svg"
                id="action__input_${i}"
                alt="menu"
              />
              <!-- menu -->
              <div
                class="action__menu hidden "
                role="dialog"
                aria-modal="true"
                aria-labelledby="action__input_${i}"
                id="action__menu_${i}"
              >
                <menu class="menu__body">
                  <menuitem class="menu__item">
                    <img
                      src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/duplicate.svg"
                      class="menu__item__icon"
                    />
                    <span>Duplicate</span>
                  </menuitem>
                  <menuitem class="menu__item">
                    <img
                      src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/edit.svg"
                      class="menu__item__icon"
                    />
                    <span>Edit</span>
                  </menuitem>
                  <menuitem class="menu__item">
                    <img
                      src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/delete.svg"
                      class="menu__item__icon"
                    />
                    <span>Delete</span>
                  </menuitem>
                </menu>
              </div>
            </td>
          </tr>
    `;
  }
  tableBody.innerHTML = htmlContent;
}

function changeTableBackground() {
  const idArr = document.querySelectorAll(".td-id");
  idArr.forEach((id) => {
    if (Number(id.innerText) % 2 === 0) {
      id.parentElement.style.background = "var(--zebra-color)";
    }
  });
}

function toggleMenu(event) {
  const target = event.target;

  if (!target.classList.contains("cell__action__icon")) {
    return;
  }

  if (target.classList.contains("cell__action__icon")) {
    target.nextElementSibling.classList.toggle("hidden");
  }
}

function darkModeToggleHandler(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

function changeCheckedColor(event) {
  const target = event.target;
  const parent = target.parentElement.parentElement;
  if (!target.classList.contains("checkbox")) {
    return;
  }

  if (target.classList.contains("checkbox")) {
    parent.classList.toggle("checked");
  }
}

renderTableBody();
changeTableBackground();
tableBody.addEventListener("click", changeCheckedColor);
tableBody.addEventListener("click", toggleMenu);
darkModeToggle.addEventListener("change", darkModeToggleHandler);
