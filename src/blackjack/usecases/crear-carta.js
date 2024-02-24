

/**
 * 
 * @param {String} carta 
 * @returns {HTMLImageElement} iamgen de retorno
 */

export const crearCarta = ( carta )=>{

    if ( !crearCarta ) throw new Error ('La carta es un argumento obligatorio')
    
    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
    imgCarta.classList.add("carta");

    return imgCarta
}