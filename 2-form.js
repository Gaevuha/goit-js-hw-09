import"./assets/styles-EFEcvpD7.js";const e={email:"",message:""},t=document.querySelector(".feedback-form"),m="feedback-form-state",s=JSON.parse(localStorage.getItem(m));s&&(e.email=s.email??"",e.message=s.message??"",t.elements.email.value=e.email,t.elements.message.value=e.message);t.addEventListener("input",a=>{a.target.name==="email"?e.email=a.target.value.trim():a.target.name==="message"&&(e.message=a.target.value.trim()),localStorage.setItem(m,JSON.stringify(e))});t.addEventListener("submit",a=>{if(a.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),localStorage.removeItem(m),e.email="",e.message="",t.reset()});
//# sourceMappingURL=2-form.js.map
