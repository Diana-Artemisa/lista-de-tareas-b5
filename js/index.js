function dibujarListado(){
    let ul=document.getElementById("l_tareas");
    ul.innerHTML=""
    for (let i = 0; i <items.length; i++) {
        let itemActual= items[i]
        /*
        <li type="disc">Ordenar la pieza de los nenes <button>x</button> <button>C</button> <button>I</button> </li>
        */
        let li=document.createElement("li");
        li.setAttribute("type","disc");
        let bx=document.createElement("button");
        let bc=document.createElement("button");
        let bi=document.createElement("button");
        let txt_li=document.createTextNode(itemActual.nombreTarea);
        let txt_bx=document.createTextNode("x");
        let txt_bc=document.createTextNode("c");
        let txt_bi=document.createTextNode("i");
        bx.appendChild(txt_bx);
        bx.addEventListener("click",function(){
            borrarItem(i);
        })
        bc.appendChild(txt_bc);
        if (itemActual.estado == "C") {
            bc.setAttribute("style","background-color:green");
        }
        if (itemActual.estado == "I") {
            bi.setAttribute("style","background-color:red");
        }
        bc.addEventListener("click",function(){
            completItem(i);
        })
        bi.appendChild(txt_bi);
        bi.addEventListener("click",function(){
            incompletItem(i);
        })

        li.appendChild(txt_li);
        li.appendChild(bx);
        li.appendChild(bc);
        li.appendChild(bi);
        ul.appendChild(li);

        console.log(`${i} nombreTarea:${itemActual.nombreTarea}, estado:${itemActual.estado}`)
    }    
} 
function agregarTarea (){
    let texto=document.getElementById("cajaTexto");
    items.push({nombreTarea: texto.value,estado: null})
    dibujarListado()
}
function borrarItem(indice){
   items.splice(indice, 1);
   dibujarListado()
}
function completItem(idx){
    if (items[idx].estado == "C")
    {
        items[idx].estado = null;
    }else{
        items[idx].estado = "C"
    }
    dibujarListado()
}
function incompletItem(idx){
    if (items[idx].estado == "I")
    {
        items[idx].estado = null;
    }else{
        items[idx].estado = "I"
    }
    dibujarListado()
}

var items= []

let texto=document.getElementById("cajaTexto");
texto.addEventListener("keypress",function(e) {
    if (e.code== "Enter") {
        agregarTarea()
    }
})
var boton=document.getElementById("btn_agregar");
boton.addEventListener("click",agregarTarea)

dibujarListado()