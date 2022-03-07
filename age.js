let past = new Date("2001-03-01");
let now = new Date();
let age = 0;

if (((past.getDate() <= now.getDate()) && (past.getMonth() <= now.getMonth())) || (past.getMonth() < now.getMonth())) {
    age = now.getFullYear() - past.getFullYear();
}
else {
    age = now.getFullYear() - past.getFullYear() - 1;
}
document.getElementById("age").innerHTML = age;