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
            <td><button onclick="eliminar()" class="btn btn-danger">Eliminar</button></td>
            <td><button onclick="editar('${any}')" class="btn btn-success">Editar</button></td>
      </tr>`

    }
}

function editar(any){
    let infor = JSON.parse(localStorage.getItem("infor"));
    for (let i=0; i<infor.length; i++){
        if(infor[i].any === any){
            document.getElementById("body").innerHTML =
            `<div class="row">
            <div class="column-md-5">
                <div class="card">
                    <div class="card-header">
                        <h2>Editar datos<h2>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="form-group">
                                <input type="text" 
                                id="newNombre" 
                                class="form-control" 
                                placeholder="${infor[i].nombre}">
                            </div>
                            <div class="form-group">
                                <input type="email" 
                                id="newCorreo" 
                                class="form-control" 
                                placeholder="${infor[i].correo}"></input>
                            </div>
                            <div class="form-group">
                                <input type="tel" 
                                id="newNumero" 
                                class="form-control" 
                                placeholder="${infor[i].numero}">
                            </div>
                            <button class="btn btn-success" onclick="editar('${i}')">Editar</button>
                            <button class="btn btn-primary">Eliminar</button>
                        </form>
                    </div>
                </div>`
        }
    }
    
}


leer();