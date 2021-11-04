import throttle from "lodash.throttle";

const refs = {
form: document.querySelector(".feedback-form"),
email: document.querySelector('input[type="email"]'),
text: document.querySelector('textarea[name="message"]'),
}
const STORAGE_KEY = "feedback-form-state";
const formData = {};
populateForm();

function onInputForm(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function onSubmitForm(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.clear();
};

function populateForm() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    const parsedData = JSON.parse(savedData);
    if (parsedData) {
        refs.email.value = parsedData.email
        refs.text.value = parsedData.message
    };
};

refs.form.addEventListener('input', throttle(onInputForm , 500));

refs.form.addEventListener('submit', onSubmitForm);