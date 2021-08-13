

    
function check() {
    let elem = document.getElementById('input');
    let elems = document.getElementsByName('name');
    if (elem.value !== 0) {
        let str = elem.value;
        let arr = str.split(" ");
        for (let i = 0; i < elems.length; i++) {
            elems[i].value = arr[i];
         }
    }
}

