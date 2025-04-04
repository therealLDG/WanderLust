let filters = document.querySelectorAll(".filter")
filters.forEach((filter)=>{
  filter.addEventListener("click",()=>{
    let category = filter.innerText;
    window.location.href = `/listings/category/${category}`;
  })
})
