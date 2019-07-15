var estudiantes = [
    {
        "codigo": 1,
        "nombre": "Jorge Pérez",
        "nota": 9.9
    },
    {
        "codigo": 2,
        "nombre": "Mario Loría",
        "nota": 8.0
    },
    {
        "codigo": 3,
        "nombre": "Juana de Arco",
        "nota": 9.1
    },
    {
        "codigo": 4,
        "nombre": "Luis de la O",
        "nota": 7.6
    },
    {
        "codigo": 5,
        "nombre": "Julio Varela",
        "nota": 6.7
    },
    {
        "codigo": 006,
        "nombre": "María Garzón",
        "nota": 8.3
    },
    {
        "codigo": 7,
        "nombre": "Ana Laura",
        "nota": 9.3
    },
    {
        "codigo": 8,
        "nombre": "Julio Josefo",
        "nota": 7.8
    },
    {
        "codigo": 9,
        "nombre": "Minor Chinchilla",
        "nota": 7.8
    },
    {
        "codigo": 10,
        "nombre": "Augusto Pinochet",
        "nota": 8.9
    }
];

// Mostrar estudiantes en una tabla:
function mostrarEstudiantes(){
    document.getElementById('alumnos').style.display = "table";
    var notasTBody = document.getElementById('notas');

    while(notasTBody.hasChildNodes()){
        notasTBody.removeChild(notasTBody.lastChild);
    }

    for(var i = 0; i < estudiantes.length; ++i){
        var nuevoTr = document.createElement('tr');

        var idTd = document.createElement('td');
        idTd.textContent = estudiantes[i].codigo;
        nuevoTr.appendChild(idTd);

        var nombreTd = document.createElement('td');
        nombreTd.textContent = estudiantes[i].nombre;
        nuevoTr.appendChild(nombreTd);

        var notaTd = document.createElement('td');
        notaTd.textContent = estudiantes[i].nota;
        nuevoTr.appendChild(notaTd);

        notasTBody.appendChild(nuevoTr);
    }
}

// Promedio de notas
function calcularNotaPromedio(){
    var sumaNotas = 0.0;

    for(var i = 0; i < estudiantes.length; ++i){
        sumaNotas += estudiantes[i].nota;
    }

    alert("La nota promedio es: " + (sumaNotas/estudiantes.length).toFixed(2));
}

// Nota mayor
function calcularNotaMayor(){
    var indiceNotaMayor = 0;
    var notaMayor = estudiantes[indiceNotaMayor].nota;

    for(var i = 1; i < estudiantes.length; ++i){
        if(estudiantes[i].nota > notaMayor){
            notaMayor = estudiantes[i].nota;
            indiceNotaMayor = i;
        }
    }

    alert("El estudiante " + estudiantes[indiceNotaMayor].nombre + " tiene la nota mayor: " + notaMayor);
}

// Nota menor
function calcularNotaMenor(){
    var indiceNotaMenor = 0;
    var notaMenor = estudiantes[indiceNotaMenor].nota;

    for(var i = 1; i < estudiantes.length; ++i){
        if(estudiantes[i].nota < notaMenor){
            notaMenor = estudiantes[i].nota;
            indiceNotaMenor = i;
        }
    }

    alert("El estudiante " + estudiantes[indiceNotaMenor].nombre + " tiene la nota menor: " + notaMenor);
}
