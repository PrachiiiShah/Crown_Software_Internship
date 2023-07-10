const input = document.querySelector("#phone_number");
//-new
// const input1 = document.querySelector("#phone_number1");
// //
const output = document.querySelector("#output");
const error_msg = document.querySelector("#error-msg");
const valid_msg = document.querySelector("#valid-msg");
var number, error_code;

// here, the index maps to the error code returned from getValidationError - see readme
// const errorMap = [


//     "Invalid number",
//     "Invalid country code",
//     "Too short",
//     "Too long",
//     "Invalid number",
// ];

// initialise plugin
const iti = window.intlTelInput(input, {
    separateDialCode: true,
    initialCountry: "IN",
    nationalMode: true,
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

const reset = () => {
    input.classList.remove("error");
    error_msg.innerHTML = "";
    error_msg.classList.add("hide");
    valid_msg.classList.add("hide");
};

// on blur: validate
input.addEventListener("blur", () => {
    reset();
    if (input.value.trim()) {
        if (iti.isValidNumber()) {
            valid_msg.classList.remove("hide");
            number = iti.getNumber();
            console.log(intlTelInputUtils.numberFormat.E164);
            console.log(iti.getSelectedCountryData());
            console.log(iti.getSelectedCountryData().dialCode);
        } else {
            input.classList.add("error");
            error_code = iti.getValidationError();
            if (error_code === "undefined") {

            }
            error_msg.innerHTML = errorMap[error_code];
            error_msg.classList.remove("hide");
        }
    }
});