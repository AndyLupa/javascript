function perimetro_cuadrado(ladoCuadrado){    
    return ladoCuadrado*4;
}

function area_cuadrado(ladoCuadrado){    
    return ladoCuadrado*ladoCuadrado;
}


function perimetro_triangulo(ladoTriangulo,ladoTriangulo2,ladoTriangulo3){    
    return ladoTriangulo+ladoTriangulo2+ladoTriangulo3;
}

function area_triangulo(baseTriangulo,alturaTriangulo){    
    return (baseTriangulo*alturaTriangulo)/2;
}

const PI=Math.PI;

function perimetro_circulo(radio){    
    return (radio*2)*PI;
}

function area_circulo(radio){    
    return (radio*radio)*PI;
}

function calcular_perimetro_cuadrdo(){
    let valor = document.querySelector("#inputCuadrado").value;
    alert("Perímetro Cuadrado:" + perimetro_cuadrado(valor));
    
}


function calcular_area_cuadrdo(){
    let valor = document.querySelector("#inputCuadrado").value;
    alert("Área Cuadrado:" + area_cuadrado(valor));
    
}

function calcular_perimetro_triangulo(){
    let valor2 = document.querySelector("#inputTriangulo2").value;
    let valor3 = document.querySelector("#inputTriangulo3").value;
    
    if(VerificoIsoceles(valor2,valor3)==1){    
        alert("Perímetro Triánguulo:" + perimetro_triangulo(valor2,valor2,valor3));
    }
    else{
        alert("El triángulo debe ser Isosceles, dos lados iguales y uno distinto");
    }
    
}

function VerificoIsoceles(l,b){
    if(l==b){
        return 0;
    }
    else{
        return 1;
    }
}

function calcular_area_triangulo(){
    let valor3 = document.querySelector("#inputTriangulo3").value;
    let valor2 = document.querySelector("#inputTriangulo2").value;
    
    if(VerificoIsoceles(valor2,valor3)==1){    
        let altura = document.querySelector("#inputTrianguloAltura").value;
        alert("Área Triánguulo:" + area_triangulo(valor3,altura));  
    }
    else{
        alert("El triángulo debe ser Isosceles, dos lados iguales y uno distinto");
    }
    

     
}






