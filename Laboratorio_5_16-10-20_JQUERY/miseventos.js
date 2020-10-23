$(document).ready(function (){
    //Ejercicio 9
    $(".oculta").click(function(){
        $(this).hide();
    }); 

    //Ejercicio 10
    $(".doble").dblclick(function(){
        $(this).hide();
    }); 

    //Ejercicio 11
    $("#p1").mouseenter(function(){
        alert("Ingresaste a P1!");
    }); 

    //Ejercicio 12
    $("#p2").mouseleave(function(){
        alert("¡Adiós! ¡Ahora te vas p2!");
    }); 

    //Ejercicio 13
    $("#p3").mousedown(function(){
        alert("Pase el mouse sobre p3!");
    });

    //Ejercicio 14
    $("#parrafo").mouseup(function(){
        alert("Pase el mouse sobre p1!");
    });

    //Ejercicio 15
    $("#parrafo_2").hover(function(){        
        console.log("¡Ingresaste a parrafo 2!");
      },
      function(){        
        console.log("¡Adiós! ¡Ahora dejas parrafo 2!");
    });      
      
});