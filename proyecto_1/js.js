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
    alert("Perímetro :" + perimetro_cuadrado(valor));
    
}


function calcular_area_cuadrdo(){
    let valor = document.querySelector("#inputCuadrado").value;
    alert("Área :" + area_cuadrado(valor));
    
}


