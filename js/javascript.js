// JavaScript source code
var xmlhttp = new XMLHttpRequest();
var xmlhttp2 = new XMLHttpRequest();
var url = "data/json.php";
var urlDependencias = "data/ArrayGenerate.php";

var arr;
var arrDependencias;
//ARRAY DEPENDENCIAS
xmlhttp2.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        arrDependencias = JSON.parse(this.responseText);
        //alert(this.responseText)
    }
};
xmlhttp2.open("GET", urlDependencias, true);
xmlhttp2.send();


//ARRAY NORMAL PREGUNTAS
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        arr = JSON.parse(this.responseText);

        generateQuestions();
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();



function generateQuestions(){
    //Contenedor de preguntas
    var containerP = document.getElementById("General");
    //Bucle For
    for (i = 0; i < arr.length; i++) {
        //Elementos que usaremos
        var div = document.createElement("div");
        var p = document.createElement("p");
        var textP = document.createTextNode(arr[i].pregunta);
        var img = document.createElement("img");

        if(arr[i].img != null){
            img.setAttribute("class", "imgPregunta");
            img.setAttribute("src", arr[i].img);
            img.setAttribute("alt", "Imagen");
        }

        //Condiciones de las preguntas para que se ordenen en
        //cada bloque
        if(arr[i].categoria == "general" || arr[i].categoria == "General"){
          containerP = document.getElementById("General");
        }
        else if(arr[i].categoria == "energia" || arr[i].categoria == "Energia"){
          containerP = document.getElementById("Energia");
        }
        else if(arr[i].categoria == "transportes" || arr[i].categoria == "Transportes"){
          containerP = document.getElementById("Transportes");
        }
        else if(arr[i].categoria == "agua" || arr[i].categoria == "Agua"){
          containerP = document.getElementById("Agua");
        }
        else if(arr[i].categoria == "materiales" || arr[i].categoria == "Materiales"){
          containerP = document.getElementById("Materiales");
        }


        for (var x = 0; x < arrDependencias.length; x++) {
          var idPregunta = arrDependencias[x].idPregunta;
          var idRespuesta = arrDependencias[x].idRespuesta;
          //var idPregunta = arrDependencias[i];
          console.log("i " + i + " pregunta " + idPregunta+" res " +idRespuesta)

           if(i+3 == idPregunta){
             //alert(i+3);
             //div.className="oculto";
             //div.setAttribute("class", "oculto");
             div.setAttribute("hola", "hola");
             div.classList.add("oculto");
             console.log("iguales " + (i+3) + "clases "+div.classList);
             break;
           } else {
            //Atributos de los elementos
            div.className="section";
            div.setAttribute("id", arr[i].id_p);
            containerP.appendChild(div);
            
            
            p.appendChild(textP);
            div.appendChild(p);
            if(arr[i].img != null){
                div.appendChild(img);
            }
            console.log("diferentes " + (i+3) + "clases "+div.classList);
          }

        }



        //Aqui habra que hacer otro for
        for (j = 0; j < arr[i].respuesta.length; j++) {
            var input = document.createElement("input");
            var label = document.createElement("label");
            //- - - - - - - - - - - - - -

            input.setAttribute("onclick", "generateDepend(this.id)");
            if(i == "10" || i == "12"){
              var textLabel = document.createTextNode(arr[i].respuesta[j].content);
              input.setAttribute("type", arr[i].tipo);
              input.setAttribute("name", arr[i].respuesta[j].value);
              input.setAttribute("value", arr[i].respuesta[j].value);
              input.setAttribute("id", arr[i].respuesta[j].id);
              label.setAttribute("for", arr[i].respuesta[j].id);
              label.appendChild(textLabel);
              div.appendChild(input);
              div.appendChild(label);
            }
            else{

              var textLabel = document.createTextNode(arr[i].respuesta[j].content);
              input.setAttribute("type", arr[i].tipo);
              input.setAttribute("name", arr[i].name);
              input.setAttribute("value", arr[i].respuesta[j].value);
              input.setAttribute("id", arr[i].respuesta[j].id);
              label.setAttribute("for", arr[i].respuesta[j].id);
              label.appendChild(textLabel);
              div.appendChild(input);
              div.appendChild(label);
            }
        }
    }
    btnSiguiente();
}

function generateDepend(GenerarPreguntaX){
  var created = false;

  for (var i = 0; i < arrDependencias.length; i++) {
    var idPregunta = arrDependencias[i].idPregunta;
    var idRespuesta = arrDependencias[i].idRespuesta;

    if(idRespuesta == GenerarPreguntaX && created == false){
      //alert("SI! "+idPregunta+" "+idRespuesta);
      created = true;

      var PreguntaX = document.getElementById(idPregunta);

      if(PreguntaX.getAttribute("class") == "oculto"){
        PreguntaX.setAttribute("class", "section");
        console.log("ahora esta visible");
      }
      else if(PreguntaX.getAttribute("class") == "section"){
        PreguntaX.setAttribute("class", "oculto");
        console.log("ahora esta oculto");
      }

    } else{
      console.log("no");
    }
  }
  //GenerarPreguntaX es el parametro que pasaremos para mostrar esa pregunta que estara oculta
  console.log(GenerarPreguntaX);





}

function btnSiguiente(){
   //if(div == null){
        var padre = document.getElementById("padre");
        var div = document.createElement("div");
        div.setAttribute("class", "botonSiguiente");
        div.setAttribute("id", "botonComSig");
        div.setAttribute("onclick","Siguiente()");
        div.setAttribute("href", "#");
        var textP = document.createTextNode("Comenzar");
        padre.appendChild(div);
        div.appendChild(textP);
    //}
}

function Siguiente(){
    var Start = document.getElementById("Start");
    var boton = document.getElementById("botonComSig");
    var General = document.getElementById("General");
    var Energia = document.getElementById("Energia");
    var Transportes = document.getElementById("Transportes");
    var Agua = document.getElementById("Agua");
    var Materiales = document.getElementById("Materiales");

    if(Start.getAttribute("class") == "startform"){
        // var currentNode = boton.childNodes[0];
        // boton.removeChild(boton.childNodes[0]);
    }
    // var xmlDoc = xml.responseXML;
    // y = xmlDoc.getElementById("botonComSig");
    // xmlDoc.documentElement.removeChild(y)
    // if(currentNode.nodeName == "Comenzar"){
    //      alert(currentNode.nodeValue);
    // }

    if(Start.getAttribute("class") == "startform"){
        Start.setAttribute("class", "startformOff");
        General.setAttribute("class", "GeneralOn");
        var boton = document.getElementById("botonComSig");
        boton.removeChild(boton.childNodes[0]);
        var textP = document.createTextNode("Siguiente");
        boton.appendChild(textP);
    }
    else if(General.getAttribute("class") == "GeneralOn"){
        General.setAttribute("class", "GeneralOff");
        Energia.setAttribute("class", "EnergiaOn");
    }
    else if(Energia.getAttribute("class") == "EnergiaOn"){
        Energia.setAttribute("class", "EnergiaOff");
        Transportes.setAttribute("class", "TransportesOn");
    }
    else if(Transportes.getAttribute("class") == "TransportesOn"){
        Transportes.setAttribute("class", "TransportesOff");
        Agua.setAttribute("class", "AguaOn");
    }
    else if(Agua.getAttribute("class") == "AguaOn"){
        Agua.setAttribute("class", "AguaOff");
        Materiales.setAttribute("class", "MaterialesOn");
        var boton = document.getElementById("botonComSig");
        boton.removeChild(boton.childNodes[0]);

        var inputEnviar = document.createElement("input");
        inputEnviar.setAttribute("type", "submit");
        inputEnviar.setAttribute("value", "Enviar");
        inputEnviar.setAttribute("class", "inputBoton");
        boton.appendChild(inputEnviar);
    }
}


// Text del select
function desplegable(){
    var texto = document.getElementById("ccaa").value
    var select = document.getElementById("select");

    if (texto == "España"){
        select.setAttribute("class", "mostrar");

    } else if(texto == "españa"){
      select.setAttribute("class", "mostrar");
    } else {
      select.setAttribute("class", "oculto");
    }
}


function GeneralOn() {
    var Start = document.getElementById("Start");
    Start.setAttribute("class", "startformOff");

    var General = document.getElementById("General");
    General.setAttribute("class", "GeneralOn");

    var Energia = document.getElementById("Energia");
    Energia.setAttribute("class", "EnergiaOff");

    var Agua = document.getElementById("Agua");
    Agua.setAttribute("class", "AguaOff");

    var Materiales = document.getElementById("Materiales");
    Materiales.setAttribute("class", "MaterialesOff");

    var Transportes = document.getElementById("Transportes");
    Transportes.setAttribute("class", "TransportesOff");

    //---------------
    var generalbtn = document.getElementById("generalbtn");
    generalbtn.setAttribute("class", "activo navbtn");

    var energiabtn = document.getElementById("energiabtn");
    energiabtn.setAttribute("class", "navbtn");

    var transportesbtn = document.getElementById("transportesbtn");
    transportesbtn.setAttribute("class", "navbtn");

    var aguabtn = document.getElementById("aguabtn");
    aguabtn.setAttribute("class", "navbtn");

    var materialesbtn = document.getElementById("materialesbtn");
    materialesbtn.setAttribute("class", "navbtn");

    //--------------
        var boton = document.getElementById("botonComSig");
        boton.removeChild(boton.childNodes[0]);
        var textP = document.createTextNode("Siguiente");
        boton.appendChild(textP);
}

function EnergiaOn() {
    var Start = document.getElementById("Start");
    Start.setAttribute("class", "startformOff");

    var General = document.getElementById("General");
    General.setAttribute("class", "GeneralOff");

    var Energia = document.getElementById("Energia");
    Energia.setAttribute("class", "EnergiaOn");
//--------------------
    var Agua = document.getElementById("Agua");
    Agua.setAttribute("class", "AguaOff");

    var Materiales = document.getElementById("Materiales");
    Materiales.setAttribute("class", "MaterialesOff");

    var Transportes = document.getElementById("Transportes");
    Transportes.setAttribute("class", "TransportesOff");

    //---------------
    var generalbtn = document.getElementById("generalbtn");
    generalbtn.setAttribute("class", "navbtn");

    var energiabtn = document.getElementById("energiabtn");
    energiabtn.setAttribute("class", "activo navbtn");

    var transportesbtn = document.getElementById("transportesbtn");
    transportesbtn.setAttribute("class", "navbtn");

    var aguabtn = document.getElementById("aguabtn");
    aguabtn.setAttribute("class", "navbtn");

    var materialesbtn = document.getElementById("materialesbtn");
    materialesbtn.setAttribute("class", "navbtn");
    //--------------
        var boton = document.getElementById("botonComSig");
        boton.removeChild(boton.childNodes[0]);
        var textP = document.createTextNode("Siguiente");
        boton.appendChild(textP);
}
function TransportesOn() {
    var Start = document.getElementById("Start");
    Start.setAttribute("class", "startformOff");

    var General = document.getElementById("General");
    General.setAttribute("class", "GeneralOff");

    var Energia = document.getElementById("Energia");
    Energia.setAttribute("class", "EnergiaOff");
//--------------------
    var Agua = document.getElementById("Agua");
    Agua.setAttribute("class", "AguaOff");

    var Materiales = document.getElementById("Materiales");
    Materiales.setAttribute("class", "MaterialesOff");

    var Transportes = document.getElementById("Transportes");
    Transportes.setAttribute("class", "TransportesOn");

    //---------------
    var generalbtn = document.getElementById("generalbtn");
    generalbtn.setAttribute("class", "navbtn");

    var energiabtn = document.getElementById("energiabtn");
    energiabtn.setAttribute("class", "navbtn");

    var transportesbtn = document.getElementById("transportesbtn");
    transportesbtn.setAttribute("class", "activo navbtn");

    var aguabtn = document.getElementById("aguabtn");
    aguabtn.setAttribute("class", "navbtn");

    var materialesbtn = document.getElementById("materialesbtn");
    materialesbtn.setAttribute("class", "navbtn");
    //--------------
        var boton = document.getElementById("botonComSig");
        boton.removeChild(boton.childNodes[0]);
        var textP = document.createTextNode("Siguiente");
        boton.appendChild(textP);
}
function AguaOn() {
    var Start = document.getElementById("Start");
    Start.setAttribute("class", "startformOff");

    var General = document.getElementById("General");
    General.setAttribute("class", "GeneralOff");

    var Energia = document.getElementById("Energia");
    Energia.setAttribute("class", "EnergiaOff");
//--------------------
    var Agua = document.getElementById("Agua");
    Agua.setAttribute("class", "AguaOn");

    var Materiales = document.getElementById("Materiales");
    Materiales.setAttribute("class", "MaterialesOff");

    var Transportes = document.getElementById("Transportes");
    Transportes.setAttribute("class", "TransportesOff");

    //---------------
    var generalbtn = document.getElementById("generalbtn");
    generalbtn.setAttribute("class", "navbtn");

    var energiabtn = document.getElementById("energiabtn");
    energiabtn.setAttribute("class", "navbtn");

    var transportesbtn = document.getElementById("transportesbtn");
    transportesbtn.setAttribute("class", "navbtn");

    var aguabtn = document.getElementById("aguabtn");
    aguabtn.setAttribute("class", "activo navbtn");

    var materialesbtn = document.getElementById("materialesbtn");
    materialesbtn.setAttribute("class", "navbtn");
    //--------------
        var boton = document.getElementById("botonComSig");
        boton.removeChild(boton.childNodes[0]);
        var textP = document.createTextNode("Siguiente");
        boton.appendChild(textP);
}
function MaterialesOn() {
    var Start = document.getElementById("Start");
    Start.setAttribute("class", "startformOff");

    var General = document.getElementById("General");
    General.setAttribute("class", "GeneralOff");

    var Energia = document.getElementById("Energia");
    Energia.setAttribute("class", "EnergiaOff");
//--------------------
    var Agua = document.getElementById("Agua");
    Agua.setAttribute("class", "AguaOff");

    var Materiales = document.getElementById("Materiales");
    Materiales.setAttribute("class", "MaterialesOn");

    var Transportes = document.getElementById("Transportes");
    Transportes.setAttribute("class", "TransportesOff");

    //---------------
    var generalbtn = document.getElementById("generalbtn");
    generalbtn.setAttribute("class", "navbtn");

    var energiabtn = document.getElementById("energiabtn");
    energiabtn.setAttribute("class", "navbtn");

    var transportesbtn = document.getElementById("transportesbtn");
    transportesbtn.setAttribute("class", "navbtn");

    var aguabtn = document.getElementById("aguabtn");
    aguabtn.setAttribute("class", "navbtn");

    var materialesbtn = document.getElementById("materialesbtn");
    materialesbtn.setAttribute("class", "activo navbtn");

    //---------------
        var boton = document.getElementById("botonComSig");
        boton.removeChild(boton.childNodes[0]);

        var inputEnviar = document.createElement("input");
        inputEnviar.setAttribute("type", "submit");
        inputEnviar.setAttribute("value", "Enviar");
        inputEnviar.setAttribute("class", "inputBoton");
        boton.appendChild(inputEnviar);
}
function ResetBtn() {
    var Start = document.getElementById("Start");
    Start.setAttribute("class", "startform");

    var General = document.getElementById("General");
    General.setAttribute("class", "GeneralOff");

    var Energia = document.getElementById("Energia");
    Energia.setAttribute("class", "EnergiaOff");

    var Transportes = document.getElementById("Transportes");
    Transportes.setAttribute("class", "TransportesOff");

    var Agua = document.getElementById("Agua");
    Agua.setAttribute("class", "AguaOff");

    var Materiales = document.getElementById("Materiales");
    Materiales.setAttribute("class", "MaterialesOff");

    var select = document.getElementById("select");
    select.setAttribute("class", "oculto");
    //-------------

    var boton = document.getElementById("botonComSig");
    boton.removeChild(boton.childNodes[0]);
    var textP = document.createTextNode("Comenzar");
    boton.appendChild(textP);
    //---------------
    var generalbtn = document.getElementById("generalbtn");
    generalbtn.setAttribute("class", "navbtn");

    var energiabtn = document.getElementById("energiabtn");
    energiabtn.setAttribute("class", "navbtn");

    var transportesbtn = document.getElementById("transportesbtn");
    transportesbtn.setAttribute("class", "navbtn");

    var aguabtn = document.getElementById("aguabtn");
    aguabtn.setAttribute("class", "navbtn");

    var materialesbtn = document.getElementById("materialesbtn");
    materialesbtn.setAttribute("class", "navbtn");
}


    //General.element.class[0]("EnergiaOn");



// function GeneralShowHide() {
// //Energia
//     var myElement = document.querySelector(".Energia");
//     myElement.style.display = "none";
// //Agua
//     var myElement2 = document.querySelector(".Agua");
//     myElement2.style.display = "none";
// //Materiales
//     var myElement3 = document.querySelector(".Materiales");
//     myElement3.style.display = "none";
// //Transportes
//     var myElement4 = document.querySelector(".Transportes");
//     myElement4.style.display = "none";
// //General
//     var myElement5 = document.querySelector(".General");
//     myElement5.style.display = "initial";
//
//
// }
// function EnergiaShowHide() {
//     //Energia
//     var myElement = document.querySelector(".Energia");
//     myElement.style.display = "initial";
//     //Agua
//     var myElement2 = document.querySelector(".Agua");
//     myElement2.style.display = "none";
//     //Materiales
//     var myElement3 = document.querySelector(".Materiales");
//     myElement3.style.display = "none";
//     //Transportes
//     var myElement4 = document.querySelector(".Transportes");
//     myElement4.style.display = "none";
//     //General
//     var myElement5 = document.querySelector(".General");
//     myElement5.style.display = "none";
//
//
// }
