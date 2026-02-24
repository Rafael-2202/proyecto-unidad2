//cambiar tema-------------------------------------------------------------------------------
        const tema = document.getElementById("modo");



        tema.addEventListener("click", function(){
            document.body.classList.toggle("dark");

            if(document.body.classList.contains("dark")){
                tema.innerText = "tema claro";
                document.body.style.backgroundColor = "";
            }else{
                tema.innerText = "tema oscuro";
            }
        });

//cambiar fondo-------------------------------------------------------------------------------
        const fondo = document.getElementById("colores");  

        let colores = ["#d7d8c5", "#e47267", "#d6d1af", "#e6e5c4", "#8a8780", "#ffffff"];
        let i = 0;

        function cambiarColor(){
            i++
            if(i >= colores.length){
                i = 0;
            }
            document.body.style.backgroundColor = colores[i];
        }
        fondo.addEventListener("click", cambiarColor);

//ocultar secciones-------------------------------------------------------------------------------
        const ocultar_play = document.getElementById("ocultar_play");
        const ocultar_fig = document.getElementById("ocultar_fig");

        const playeras = document.getElementById("playeras");

            ocultar_play.addEventListener("click", function(){
            if (playeras.style.display === "none"){
                playeras.style.display = "block";
                document.getElementById("ocultar_play").innerText = "ocultar playeras";
            }else{
                playeras.style.display = "none";
                document.getElementById("ocultar_play").innerText = "mostrar playeras";
            }
        });

        const figuras = document.getElementById("figuras");

            ocultar_fig.addEventListener("click", function(){
            if (figuras.style.display === "none"){
                figuras.style.display = "block";
                document.getElementById("ocultar_fig").innerText = "ocultar figuras";
            }else{
                figuras.style.display = "none";
                document.getElementById("ocultar_fig").innerText = "mostrar figuras";
            }
        });

//contador-------------------------------------------------------------------------------
        const compra = document.querySelectorAll(".compra");
        const contador = document.getElementById("contador");

        let numero = 0;

        compra.forEach(boton=>{
            boton.addEventListener("click", function(){
                numero++;
                contador.innerText = numero;
            });
        });

//formulario-------------------------------------------------------------------------------
        const formulario = document.getElementById("form");
        const mensaje = document.getElementById("mensaje");

        formulario.addEventListener("submit", function(evento){
            evento.preventDefault();
            const nombre = document.getElementById("nombre").value.trim();
            if(nombre===""){
                mensaje.innerText = "el campo está vacío";
                mensaje.style.color = "red";
            }else if (nombre.length < 3){
                mensaje.innerText = "caracteres insuficientes"
                mensaje.style.color = "orange";
            }else{
                mensaje.innerText = "bienvenido, "+ nombre + " !";
                mensaje.style.color = "green"
            }
        });