

import { turnoComputadora } from "./turno-computadora";

/**
 * @param {Number} puntosJugador puntos acumulados por el jugador
 * @param {HTMLSmallElement} puntosHTML small donde renderizar los puntos del jugador
 * @param {HTMLDivElement} divCartasComputadora caja para colocar las cartas
 * @param {Array<string>} deck mazo de cartas
 */
export const condicionPuntajeJugador = (puntosJugador, puntosHTML, divCartasComputadora, deck) => {
    if (puntosJugador > 21) {
        console.warn("Lo siento mucho, perdiste");
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(
            puntosJugador,
            puntosHTML,
            divCartasComputadora,
            deck
        );
    } else if (puntosJugador === 21) {
        console.warn("21, genial!");
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(
            puntosJugador,
            puntosHTML,
            divCartasComputadora,
            deck
        );
    }
};