// script untuk FAQ roller
let toggles = document.getElementsByClassName("toggle");
let contentDiv = document.getElementsByClassName("content");
let icons = document.getElementsByClassName("icon");

for (let i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener("click", () => {
    if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
      contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
      toggles[i].style.color = "#0084e9";
      icons[i].classList.remove("fa-plus");
      icons[i].classList.add("fa-minus");
    } else {
      contentDiv[i].style.height = "0px";
      toggles[i].style.color = "#111130";
      icons[i].classList.remove("fa-minus");
      icons[i].classList.add("fa-plus");
    }

    for (let j = 0; j < contentDiv.length; j++) {
      if (j !== i) {
        contentDiv[j].style.height = "0px";
        toggles[j].style.color = "#111130";
        icons[j].classList.remove("fa-minus");
        icons[j].classList.add("fa-plus");
      }
    }
  });
}





// script for modal pop-up
document.querySelector('#button').addEventListener("click", () => {
    const inputs = ['name', 'email', 'subject', 'message'];
    
    for (const inputId of inputs) {
        const input = document.getElementById(inputId);
        if (input.value.trim() === '') {
            return;
        }
    }
    
    const email = document.getElementById('email').value;
            if (!/^[^\s@]+@[^\s@]+.[^\s@]+$/.test(email)) {
                return;
            }

  document.querySelector('.bg-modal').style.display = "flex";
  document.body.style.overflowY='hidden';
});

document.querySelector('.close').addEventListener("click", close);
document.querySelector('.button').addEventListener("click", close);

function close()
{
    document.querySelector('.bg-modal').style.display = "none";
    document.body.style.overflowY = 'scroll';
    document.querySelector('#contactForm').reset();
}

//bad approach hahahaha
// function formCheck(element)
// {
//     if(element.value)
//     {
//         return  true;
//     }
//     else{
//         return false;
//     }
// }