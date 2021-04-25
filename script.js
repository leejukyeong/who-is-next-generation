const content = "Who is Next Generation?"
const text = document.querySelector(".text")
let index = 0;
 
function typing(){
  text.textContent += content[index++]
  if(index > content.length){
    text.textContent = ""
    index = 0;
    
  }
}
setInterval(typing, 500)

//https://penguingoon.tistory.com/254
