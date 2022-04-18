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
    let valor1 = document.querySelector("#inputTriangulo").value;
    let valor2 = document.querySelector("#inputTriangulo2").value;
    let valor3 = document.querySelector("#inputTriangulo3").value;
    alert("Perímetro Triánguulo:" + perimetro_triangulo(valor1,valor2,valor3));
    
}

function calcular_area_triangulo(){
    let valor3 = document.querySelector("#inputTriangulo3").value;
    let altura = document.querySelector("#inputTrianguloAltura").value;
    alert("Área Triánguulo:" + area_triangulo(valor3,altura));    
}






