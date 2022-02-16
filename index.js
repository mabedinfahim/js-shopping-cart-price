// common function  
function btnFunction(isIncreasing, inputId, caseValue, price, subTotal) {
    const phoneNumber = document.getElementById(inputId);
    const phoneNumberValue = phoneNumber.value;
    if (isIncreasing == true) {
        phoneNumber.value = parseInt(phoneNumberValue) + 1;
    } else if (phoneNumberValue > 0) {
        phoneNumber.value = parseInt(phoneNumberValue) - 1;
    }

    const phoneTotal = document.getElementById(caseValue);
    const phoneTotalValue = phoneTotal.innerText;
    phoneTotal.innerText = price * parseInt(phoneNumber.value);

}


//common click event handaler function 
function eventFunction(id, correct, inputId, caseValue, price, subTotal) {
    document.getElementById(id).addEventListener("click", function() {
        btnFunction(correct, inputId, caseValue, price, subTotal);
        totalPrice();
    })
}

//function calling
eventFunction("phone-plus", true, "phone-number", "phone-total", 1219);
eventFunction("phone-minus", false, "phone-number", "phone-total", 1219);
eventFunction("case-plus", true, "case-number", "case-total", 59);
eventFunction("case-minus", false, "case-number", "case-total", 59);


function totalPrice() {
    const phoneTotal = document.getElementById("phone-total").innerText;
    const caseTotal = document.getElementById("case-total").innerText;
    const subTotal = document.getElementById("sub-total");
    subTotal.innerText = parseInt(phoneTotal) + parseInt(caseTotal)

    const texAmout = document.getElementById("tax-amount")
    const finalTex = (subTotal.innerHTML) / 10;
    texAmout.innerText = parseFloat(finalTex);

    const finalTotal = document.getElementById("total-price")
    finalTotal.innerText = parseInt(phoneTotal) + parseInt(caseTotal) + parseFloat(finalTex);
}