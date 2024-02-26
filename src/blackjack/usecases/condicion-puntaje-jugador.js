

export const condicionPuntajeJugador = (puntosJugador, puntosHTML, divCartasComputadora, deck, turnoComputadora) => {

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
