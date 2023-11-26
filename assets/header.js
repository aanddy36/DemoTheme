document.addEventListener("DOMContentLoaded", function() {
    //DROPDOWN
    const dropdownMenu = [...document.querySelectorAll(".dropdown")];
    const btnDropdown = document.querySelectorAll(".btn");
    dropdownMenu.forEach(section =>{
        if(!section.classList.contains("hide-div")){
            section.classList.add("hide-div")
        }
    })
    btnDropdown.forEach((btn)=>{
        btn.onclick = () => {
            dropdownMenu.forEach(div =>{
                if(div.id === btn.id){
                    if(div.classList.contains("hide-div")){
                        div.classList.remove("hide-div")
                    }
                    else {
                        div.classList.add("hide-div")
                    }
                }
                else{
                    if(!div.classList.contains("hide-div")){
                        div.classList.add("hide-div")
                    }
                }
            })
        };
    })

      //MOBILE MENU OPEN
    const mobileMenu = document.getElementById("mobileMenu");
    const openMobileBtn = document.getElementById("openMobileBtn");
    const closeMobileBtn = document.getElementById("closeMobileBtn");
    if(!mobileMenu.classList.contains("hide-div")){
        mobileMenu.classList.add("hide-div")
        }
        openMobileBtn.onclick = () => {
            mobileMenu.classList.remove("hide-div")
          };
        closeMobileBtn.onclick = () => {
            mobileMenu.classList.add("hide-div")
        };

    //MOBILE DROPDOWN
    const dropdownMobile = [...document.querySelectorAll(".dropdownMobile")];
    const btnDropMobile = document.querySelectorAll(".btnDropMobile");
    dropdownMobile.forEach(section =>{
        if(!section.classList.contains("hide-div")){
            section.classList.add("hide-div")
        }
    })
    btnDropMobile.forEach(btn=>{
        btn.onclick = ()=>{
            dropdownMobile.forEach(div =>{
                if(div.classList[0] === btn.id){
                    if(div.classList.contains("hide-div")){
                        div.classList.remove("hide-div")
                    }
                    else {
                        div.classList.add("hide-div")
                    }
                }
                else{
                    if(!div.classList.contains("hide-div")){
                        div.classList.add("hide-div")
                    }
                }
            })
        }
    })
  });