const ano = new Date().getFullYear();
console.log(ano);

for (let y = ano; y >= 1900; y-- ) {
    document.getElementById("ano").innerHTML += "<option value='" + y+ "'>" + y + "</option>";
}

const mensal = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
var tamanho = mensal.length;
for (let m = 0; m<tamanho; m++ ) {
    document.getElementById("mes").innerHTML += "<option value='" + mensal[m] + "'>" + mensal[m] + "</option>";
}

for (let d = 1; d <= 31; d++ ) {
    document.getElementById("dia").innerHTML += "<option value='" + d + "'>" + d + "</option>";
}
