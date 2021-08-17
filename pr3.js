// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".

function formatDate(date) {
    let sek = new Date() - date;
    if (sek < 1000) {
        return 'прямо сейчас';
      }
    
// // В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".

    
    let sek2 = Math.floor(sek / 1000);
    if (sek2 < 60) {
        return sek2 + 'секунд назад';
    }

    // В противном случае, если меньше часа, вывести "m мин. назад".

    let min = (sek / 60000);
    if (min < 60) {
        return min + 'мин. назад';
    }


// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.

    let d = date;
    d = [
      '0' + d.getDate(),
      '0' + (d.getMonth() + 1),
      '' + d.getFullYear(),
      '0' + d.getHours(),
      '0' + d.getMinutes()
    ];
   
    for (let i = 0; i < d.length; i++) {
      d[i] = d[i].slice(-2);
    }
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');  
 }
   
  alert( formatDate(new Date(new Date - 1)) ); // только что
  alert( formatDate(new Date(new Date - 30 * 1000)) ); // 30 сек. назад
  alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // 5 мин. назад
  alert( formatDate(new Date(new Date - 86400 * 1000)) ); // вчерашняя дата в формате "дд.мм.гг чч:мм"