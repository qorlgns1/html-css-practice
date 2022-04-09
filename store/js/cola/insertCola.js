import { getLeftMoney, depositSubtract } from "../money/depositMoney.js";
import { getColaName, getColaPrice, getColaCount } from "./checkCola.js";
import { copyDisplayColaBtn } from "../component/colaButton.js";

// export const subtractDeposit = () => {
//   콜라의 가격을 가지고 온다.
//   디파짓에서 콜라의 가격을 뺀다.
//   뺸 금액을 디파짓에 보여준다.
// }

export const insertCola = () => {
  const cola = document.querySelectorAll(
    ".vending-machine > .items > ul > li > button"
  );

  cola.forEach((colaBtn) => {
    colaBtn.addEventListener("click", (e) => {
      const deposit = getLeftMoney();

      if (deposit < 1000) {
        alert("잔액을 확인해주세요.");
      } else {
        let display = document.querySelector(".display");

        const colaName = getColaName(colaBtn);
        let flag = false;
        Array.from(display.children).forEach((displayBtn) => {
          if (getColaName(displayBtn) === colaName) {
            displayBtn.children[2].innerHTML = getColaCount(displayBtn) + 1;
            flag = true;
          }
        });

        if (!flag) {
          const displayColaBtn = copyDisplayColaBtn(colaBtn);
          display.append(displayColaBtn);
        }

        depositSubtract(getColaPrice(colaBtn));
      }
    });
  });
};
