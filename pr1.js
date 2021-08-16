function check() {
    let elem = document.getElementById('input');
    let elems = document.getElementsByName('name');
    if (elem.value) {
        let str = elem.value;
        str = str.trim().replace(/ +/g, ' ');
        let arr = str.split(" ");
        for (let i = 0; i < elems.length; i++) {
            let string = arr[i];
            let lower = string.toLowerCase();
            let firstLetter = lower[0].toUpperCase() + lower.slice(1);
            elems[i].value = firstLetter;
        }
    }
}