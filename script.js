const totalIncome = document.querySelector(".totalIncome");
const totalExpenses = document.querySelector(".totalExpenses");
const currentBalance = document.querySelector(".currentBalance");
const titleInput = document.querySelector(".titleInput");
const typeInput = document.querySelector(".typeInput");
const amountInput = document.querySelector(".amountInput");
const categoryInput = document.querySelector(".categoryInput");
const addTransactionBtn = document.getElementById("addTransactionBtn");
const searchInput = document.querySelector(".searchInput");
const showInsomeOrExpenseInput = document.querySelector(
  ".showInsomeOrExpenseInput",
);
const transactionsShowList = document.querySelector(".transactionsShowList");
const footerTxt = document.querySelector(".footerTxt");

addTransactionBtn.addEventListener("click", function () {
  const titleValue = titleInput.value.trim();
  const typeValue = typeInput.value;
  const amountValue = amountInput.value;
  const categoryValue = categoryInput.value;
  const dateValue = document.querySelector(".dateInput").value;

  //   if (
  //     titleValue === "" ||
  //     typeValue === "" ||
  //     amountValue === "" ||
  //     categoryValue === "" ||
  //     dateValue === ""
  //   ) {
  //     alert("Please fill in all fields!");
  //     return;
  //   }
  //   const newRow = document.createElement("tr");
  //   const values = [titleValue, typeValue, categoryValue, amountValue, dateValue];
  //   const actionTd = document.createElement("td");
  //   actionTd.textContent = "Delete";
  //   newRow.appendChild(actionTd);
  //   transactionsShowList.appendChild(newRow);

  //   document.querySelector(".footerTxt").style.display = "none";

  //   titleInput.value = "";
  //   amountInput.value = "";
  //   typeInput.selectedIndex = 0;
  //   categoryInput.selectedIndex = 0;
  //   document.querySelector(".dateInput").value = "";
});
