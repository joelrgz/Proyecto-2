document.getElementById("datos").addEventListener ("submit",crear);

function crear(e){
    e.preventDefault();
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
