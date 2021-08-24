

function checkSpam() {
    let userCommet = document.getElementById("add_com");
    let otvet = document.querySelector(".tasks-container");
   
    if (userCommet.value) {
        let str = userCommet.value;
        str = str.toLowerCase();
        let firstLet = str.replaceAll(/(viagra|xxx|sex|drugs|rock'n'roll)/g, '*****');
        otvet.innerHTML  += firstLet + "</br>";
    }
    document.getElementById("add_com").value = "";
}