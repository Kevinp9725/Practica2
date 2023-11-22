const matriz = [[17, 9, 36],[8, 7, 3],[15, 28, 57]]
let sumaT = 0;
let suma = 0
let prom = 0;
const noAplica = []
const siAplica = []
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
        sumaT += matriz[i][j];
        prom += 1;
        
    }
     
}
prom = sumaT / prom;
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
        if (matriz[i][j] >= (prom*0.40) && matriz[i][j] <= (prom*1.60)){
        suma += matriz[i][j];
        siAplica.push(matriz[i][j]);
    } else {
        noAplica.push(matriz[i][j]);
    } 
    }  
}
console.log("La suma Es: "+ suma)
console.log("Promedio: " + prom)
console.log("No aplican para sumar:")
noAplica.forEach(datos => {
    console.log(datos);
});
console.log("Si aplican para sumar:")
siAplica.forEach(datos2 => {
    console.log(datos2);
});