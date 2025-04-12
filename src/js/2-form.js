const formData = {
  email: "",
  message: "",
};

const form = document.querySelector('.feedback-form');


const localStorageKey = "feedback-form-state";


const savedFormData = JSON.parse(localStorage.getItem(localStorageKey));

if (savedFormData) {

  formData.email = savedFormData.email ?? "";
  formData.message = savedFormData.message ?? "";

 
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}


form.addEventListener("input", (event) => {

  if (event.target.name === "email") {

    formData.email = event.target.value.trim();

  } else if (event.target.name === "message") {

    formData.message = event.target.value.trim();
  }

  
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});


form.addEventListener("submit", (event) => {

  event.preventDefault();

 
  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }


  console.log(formData);

 
  localStorage.removeItem(localStorageKey);
  formData.email = "";
  formData.message = "";
  form.reset();
});
