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
            <td><button onclick="eliminar('${nombre}')" class="btn btn-danger">Eliminar</button></td>
            <td><button onclick="editar('${correo}')" class="btn btn-success">Editar</button></td>
      </tr>`
    }
}

function editar(nombre){
    let infor = JSON.parse(localStorage.getItem("infor"));
    for (let i=0; i<infor.length; i++){
          // infor[i].any -> infor[i].correo
        if(infor[i].correo === nombre){
            document.getElementById("body").innerHTML =
            `<div class="row">
            <div class="column-md-5">
                <div class="card">
                    <div class="card-header">
                        <h2>Editar datos<h2>
                    </div>
                    <div class="card-body">
                            <div class="form-group">
                                <input type="text" 
                                id="newNombre" 
                                class="form-control" 
                                value="${infor[i].nombre}">
                            </div>
                            <div class="form-group">
                                <input type="email" 
                                id="newCorreo" 
                                class="form-control" 
                                value="${infor[i].correo}">
                            </div>
                            <div class="form-group">
                                <input type="tel" 
                                id="newNumero" 
                                class="form-control" 
                                value="${infor[i].numero}">
                            </div>
                            <button class="btn btn-success" onclick="actualizar(${i})">Editar</button>
                            <button class="btn btn-primary" onclick="vistaPrincipal()">Eliminar</button>
                    </div>
                </div>`
        }
    }
    
}

function actualizar(i){
    let infor = JSON.parse(localStorage.getItem("infor"));
    infor[i].nombre = document.getElementById("newNombre").value;
    infor[i].correo = document.getElementById("newCorreo").value;
    infor[i].numero = document.getElementById("newNumero").value;
    localStorage.setItem("infor", JSON.stringify(infor));
    vistaPrincipal()
}

function eliminar(nombre){
    let infor = JSON.parse(localStorage.getItem("infor"));
    for(let i=0; i<infor.length; i++){
        if(infor [i].nombre === nombre){
        infor.splice(i,1);
        }
    }
    localStorage.setItem("infor",JSON.stringify(infor));
    leer();
}

function vistaPrincipal(){
    document.getElementById("body").innerHTML = `<div class="column-md-5">
    <div class="card">
        <div class="card-header">
            <h2>Ingresa tus datos<h2>
        </div>
        <div class="card-body">
            <form id="datos">
                <div class="form-group">
                    <input type="text" id="nombre" class="form-control" placeholder="Ingresa tu nombre">
                </div>
                <div class="form-group">
                    <input type="email" id="correo" class="form-control" placeholder="Ingresa tu correo"></input>
                </div>
                <div class="form-group">
                    <input type="tel" id="numero" class="form-control" placeholder="Ingresa tu número telefónico">
                </div>
                <button type="submit" class="btn btn-primary">Guardar</button>
            </form>
        </div>
    </div>
</div>
<div class="column-md-6">
    <table class="table">
        <thead class="table-striped">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">Teléfono</th>
          </tr>
        </thead>
        <tbody id="tbody">
          <tr>
            <td>Mark</td>
            <td>Me gustan los perros</td>
            <td>3314768956</td>
          </tr>
        </tbody>
      </table>
</div>
</div>`
leer();
}
leer();