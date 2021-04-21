let x = prompt('Veuillez donner une valeur');
let y = x%2;

switch (y) {
    case 0:
        alert('le nombre est un multiple de 2');
        break;
    case 1:
        alert("le nombre n'est pas un multiple de 2");
        break;
    default:
        alert("ceci n'est pas un nombre");
        break;
}