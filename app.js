function mostrarResultado(value) {
    document.getElementById('resultado').innerHTML = value;
}
function obtenerResultado() {
    return(document.getElementById('resultado').innerHTML);
}
function add(key) { 
    var resultado = obtenerResultado();
    if (resultado!='0' || isNaN(key)) mostrarResultado(resultado + key);
    else mostrarResultado(key);
}
function calc() {
    var resultado = eval(obtenerResultado()); 
    mostrarResultado(resultado);
}
function del() { 
    mostrarResultado(0);
}