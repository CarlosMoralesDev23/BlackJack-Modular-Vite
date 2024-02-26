import { crearCarta, pedirCarta } from "./barril";
import { puntosYAsignar } from "./puntosYAsignar";



/**
 * 
 * @param {Number} puntosMinimos puntos minimos que la pc necesita para ganar
 * @param {HTMLElement} puntosHTML elemento para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora elemento HTML para msotrar las cartas
 * @param {Array<String>} deck 
 */

export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck) => {

    if ( !puntosMinimos ) throw new Error('Puntos mínimos son necesarios');
    if ( !puntosHTML ) throw new Error('Puntos mínimos son necesarios');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosYAsignar(puntosComputadora, carta, puntosHTML);

        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = crearCarta( carta )
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }
    } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert("Nadie gana :(");
        } else if (puntosMinimos > 21) {
            alert("Computadora gana");
        } else if (puntosComputadora > 21) {
            alert("Jugador Gana");
        } else {
            alert("Computadora Gana");
        }
    }, 100);

    return puntosComputadora
};  