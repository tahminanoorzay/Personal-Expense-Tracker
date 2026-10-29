const totalIncome = document.querySelector(".totalIncome");
const totalExpenses = document.querySelector(".totalExpenses");
const currentBalance = document.querySelector(".currentBalance");
const titleInput = document.querySelector(".titleInput");
const typeInput = document.querySelector(".typeInput");
const amountInput = document.querySelector(".amountInput");
const categoryInput = document.querySelector(".categoryInput");
const addTransactionBtn = document.getElementById("addTransactionBtn");
const searchInput = document.querySelector(".searchInput");
const showIncomeOrExpenseInput = document.querySelector(
  ".showIncomeOrExpenseInput",
);
const transactionsShowList = document.querySelector(".transactionsShowList");
const footerTxt = document.querySelector(".footerTxt");

addTransactionBtn.addEventListener("click", function () {
  const titleValue = titleInput.value.trim();
  const typeValue = typeInput.value;
  const categoryValue = categoryInput.value;
  const amountValue = amountInput.value;
  const dateValue = document.querySelector(".dateInput").value;

  // if (
  //   titleValue === "" ||
  //   typeValue === "" ||
  //   amountValue === "" ||
  //   categoryValue === "" ||
  //   dateValue === ""
  // ) {
  //   alert("Please fill in all fields!");
  //   return;
  // }

  // Set values and show these
  const values = [titleValue, typeValue, categoryValue, amountValue, dateValue];
  const newRow = document.createElement("tr");

  values.forEach((value) => {
    const td = document.createElement("td");
    td.textContent = value;
    newRow.appendChild(td);

    // Green and Red colors of type in show values section
    if (value === "Income") {
      td.style.color = "green";
    } else if (value === "Expense") {
      td.style.color = "red";
    }
  });

  const actionTd = document.createElement("td");
  newRow.appendChild(actionTd);

  transactionsShowList.appendChild(newRow);

  document.querySelector(".footerTxt").style.display = "none";

  // Show values in cards
  if (typeValue === "Income") {
    totalIncome.textContent =
      Number(totalIncome.textContent) + Number(amountValue);
    currentBalance.textContent =
      Number(currentBalance.textContent) + Number(amountValue);
  } else if (typeValue === "Expense") {
    totalExpenses.textContent =
      Number(totalExpenses.textContent) + Number(amountValue);
    currentBalance.textContent =
      Number(currentBalance.textContent) - Number(amountValue);
  }

  // create delete button in action section
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.style.padding = "10px";
  deleteBtn.style.backgroundColor = "red";
  deleteBtn.style.color = "#ffff";
  deleteBtn.style.borderRadius = "10px";
  actionTd.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", function () {
    newRow.remove();

    if (typeValue === "Income") {
      totalIncome.textContent =
        Number(totalIncome.textContent) - Number(amountValue);

      currentBalance.textContent =
        Number(currentBalance.textContent) - Number(amountValue);
    } else if (typeValue === "Expense") {
      totalExpenses.textContent =
        Number(totalExpenses.textContent) - Number(amountValue);

      currentBalance.textContent =
        Number(currentBalance.textContent) + Number(amountValue);
    }

    if (transactionsShowList.children.length === 0) {
      footerTxt.style.display = "";
    }
  });

  titleInput.value = "";
  typeInput.selectedIndex = 0;
  categoryInput.selectedIndex = 0;
  amountInput.value = "";
  document.querySelector(".dateInput").value = "";
});

// Search bar section
searchInput.addEventListener("input", function () {
  const rows = transactionsShowList.querySelectorAll("tr");

  rows.forEach((row) => {
    if (
      row.children[0].textContent
        .toLowerCase()
        .includes(searchInput.value.toLowerCase())
    ) {
      row.style.display = "table-row";
    } else {
      row.style.display = "none";
    }
  });
});

// show Income Or Expense Input Section
showIncomeOrExpenseInput.addEventListener("change", function () {
  const rows = transactionsShowList.querySelectorAll("tr");

  rows.forEach((row) => {
    if (showIncomeOrExpenseInput.value === "All Transactions") {
      row.style.display = "table-row";
    } else if (
      showIncomeOrExpenseInput.value === "Income Only" &&
      row.children[1].textContent === "Income"
    ) {
      row.style.display = "table-row";
    } else if (
      showIncomeOrExpenseInput.value === "Expense Only" &&
      row.children[1].textContent === "Expense"
    ) {
      row.style.display = "table-row";
    } else {
      row.style.display = "none";
    }
  });
});
