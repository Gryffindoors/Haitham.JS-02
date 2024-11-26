var repeatX = Number(prompt('Please enter requested repetitions'));
var starPrint="";
var i=0
var j=0
for(i = 0; i <= repeatX; i++) {
    for (j = 0; j < i; j++){
        starPrint += '<i class="fa-solid fa-star m-2 text-dark-emphasis"></i>';
    }
    starPrint +='<br>'
}
document.getElementById('jsWritten').innerHTML = starPrint;
