document.getElementById("datos").addEventListener ("submit",crear);

function crear(e){
    //e.preventDefault();
    let infor = []
    nombre = document.getElementById("nombre").value
    correo = document.getElementById("correo").value
    numero = document.getElementById("numero").value

    let info = {
        nombre,
        correo,
        numero
    }

    if(!localStorage.getItem("infor")) {
        infor.push(info)
        localStorage.setItem("infor",JSON.stringify(infor))
    }else{
        infor = JSON.parse(localStorage.getItem("infor"))
        infor.push(info)
        localStorage.setItem("infor",JSON.stringify(infor))
    }
    document.getElementById("datos").reset();
    console.log("Datos guardados correctamente")

}

function leer(){
    let infor = JSON.parse(localStorage.getItem("infor"))
    document.getElementById("tbody").innerHTML = ""
    for (let i=0; i < infor.length; i++){
        let nombre = infor[i].nombre
        let correo = infor[i].correo
        let numero = infor[i].numero

        document.getElementById("tbody").innerHTML +=
        `<tr>
            <td>${nombre}</td>
            <td>${correo}</td>
            <td>${numero}</td>
      </tr>`

    }
}

leer();