function dibujarListado() {
    let ul = document.getElementById("l_tareas");
    ul.innerHTML = ""
    for (let i = 0; i < items.length; i++) {
        let itemActual = items[i]
        /*
        
        
        <li type="disc">Ordenar la pieza de los nenes <button>x</button> <button>C</button> <button>I</button> </li>



        
        
        <a href="#" class="list-group-item list-group-item-action list-group-item-info">
        tarea <button class="pepe pepito pepote">X</button>
        </a>

        <a href="#" class="list-group-item list-group-item-action list-group-item-info">
        <div>tarea</div> <button class="pepe pepito pepote">X</button>
        </a>
        */
        let li = document.createElement("a");
        li.setAttribute("href", "#");
        li.setAttribute("class", "list-group-item list-group-item-action d-flex justify-content-between align-items-center");
        let bx = document.createElement("button");
        bx.setAttribute("class", "btn btn-outline-dark bg-success");
        let div = document.createElement("div");
        div.setAttribute("style", "width:91%");
        let txt_li = document.createTextNode(itemActual.nombreTarea);
        div.appendChild(txt_li)
        let txt_bx = document.createTextNode("x");

        bx.appendChild(txt_bx);
        bx.addEventListener("click", function () {
            borrarItem(i);
        })

        if (itemActual.estado == "C") {
            li.classList.add("list-group-item-success")
            div.addEventListener("click", function () {
                incompletItem(i);
            })

        }
        if (itemActual.estado == "I") {
            li.classList.add("list-group-item-danger")
            div.addEventListener("click", function () {
                incompletItem(i);
            })

        }
        if (itemActual.estado == null) {
            li.classList.add("list-group-item-info")
            div.addEventListener("click", function () {
                completItem(i);
            })
        }

        li.appendChild(div);
        li.appendChild(bx);
        ul.appendChild(li);

    }
}
function agregarTarea() {
    let texto = document.getElementById("cajaTexto");
    if (texto.value == "") {
        return false
    }
    items.push(

        {
            nombreTarea: texto.value,
            estado: null,
            fecha: ""
        }

    )
    texto.value = ""
    dibujarListado()
}

function borrarItem(indice) {
    console.log("borraritem")
    items.splice(indice, 1);
    dibujarListado()
}
function completItem(idx) {
    console.log("completandoitem")
    if (items[idx].estado == "C") {
        items[idx].estado = null;
    } else {
        items[idx].estado = "C"
    }
    dibujarListado()
}
function incompletItem(idx) {
    console.log("incompletitem")
    if (items[idx].estado == "I") {
        items[idx].estado = null;
    } else {
        items[idx].estado = "I"
    }
    dibujarListado()
}

var items = []

let texto = document.getElementById("cajaTexto");
texto.addEventListener("keypress", function (e) {
    if (e.code == "Enter") {
        agregarTarea()
    }
})
var boton = document.getElementById("btn_agregar");
boton.addEventListener("click", agregarTarea)

dibujarListado()


