function checkSpam() {
    let userCommet = document.getElementById("add_com");
    let otvet = document.querySelector(".tasks-container");
    if (userCommet.value) {
        let str = userCommet.value;
        str = str.toLowerCase();
        let firstLet = str.replaceAll(/(viagra|xxx)/g, '***');
        otvet.innerHTML = firstLet;
    }
}