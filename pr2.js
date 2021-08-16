

function checkSpam() {
    let userCommet = document.getElementById("add_com");
    let otvet = document.querySelector(".tasks-container");
    if (userCommet.value) {
        let str = userCommet.value;
        str = str.toLowerCase();
      
 }

    // if (!userCommet.value) return;
    otvet.innerHTML = userCommet.value;
    
}

