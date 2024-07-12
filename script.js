
let statements = document.querySelectorAll(".statement");
console.log(statements)

statements.forEach((statement) => {
      statement.addEventListener('click', () => {

            let ans = statement.nextElementSibling;
            let img = statement.querySelector("img");



            if ( ans.style.maxHeight == "0px" || ans.style.maxHeight == "") {

                  // ans.style.display = "block";
                  ans.style.maxHeight = ans.scrollHeight + "px";
                  ans.style.marginBottom = "1rem";
                  img.src = "icon-minus.svg"
            }

            else {
                  // setTimeout(() => {
                  //       // we have to make a delay to let the transition of max-Height to comp 
                  //       // otherwise it will abruptly set the display as none 
                  //       ans.style.display = "none";
                  // }, 300)

                  ans.style.maxHeight = "0px";
                  ans.style.marginBottom = "0rem";
                  img.src = "icon-plus.svg";

            }
      })
})