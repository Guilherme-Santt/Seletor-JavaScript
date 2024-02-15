const ano = new Date().getFullYear();
console.log(ano);

const dia = new Date().getDay();



for (let y = ano; y >= 1900; y-- ) {
    document.getElementById("ano").innerHTML += "<option value='" + y+ "'>" + y + "</option>";
}


for (let m = 1; m <= 12; m++ ) {
    document.getElementById("mes").innerHTML += "<option value='" + m + "'>" + m + "</option>";
}


const mes = new Date().getMonth();

for (let d = 1; d <= 31; d++ ) {
    document.getElementById("dia").innerHTML += "<option value='" + d + "'>" + d + "</option>";
}