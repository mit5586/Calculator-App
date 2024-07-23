let string = ""
let input = document.getElementById("input")
let buttons = document.querySelectorAll(".btn")
Array.from(buttons).forEach((item)=>{
    item.addEventListener("click", (e)=>{
        try {
            if(e.target.innerHTML === "="){
                string = string.replace("x", "*")
                string = string.replace("%", "/100")
                string = eval(string);
                input.value = string
                
            }
            else if(e.target.innerHTML === "AC"){
                input.value = ""
                string = ""
            }
            else if(e.target.innerHTML ==="+/-"){
                string += "*-1"
                string = string.replace("x", "*")
                string = eval(string)
                input.value = string
            }
            else{
            string = string + e.target.innerHTML
            input.value = string
            }
        } catch (error) {
            console.log(error)
            string = ""
            input.value = "error"
        }
        
    })
})