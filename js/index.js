const nombres= ['Carlos', 'Alejandro', 'Manuel', 'Cesar'];

//Function
/* const numeros_caracteres= nombres.map(function(nombre){
    console.log(`${nombre} tiene ${nombre.length} letras`);
}); */

//Arrow Function
/* const numeros_caracteres= nombres.map((nombre) =>{
    console.log(`${nombre} tiene ${nombre.length} letras`);
}); */

const numeros_caracteres= nombres.map((nombre) =>{
    return (`${nombre} tiene ${nombre.length} letras`);
});

console.log(numeros_caracteres);