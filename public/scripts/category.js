let categoryBtns = document.querySelectorAll(".drop-drop li");
let categoryInput = document.querySelector(".category-input")
  categoryBtns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
      categoryInput.value = btn.innerText;
    })
  })
  
