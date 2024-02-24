import _ from "underscore";

import { btnPedir, btnDetener, btnNuevo, divCartasJugador, divCartasComputadora, puntosHTML  } from "./usecases/barril.js"

import { crearDeck, pedirCarta, valorCarta, turnoComputadora, crearCarta, puntosYAsignar} from "./usecases/barril.js";

/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = []
const tiposDeCarta = ["C", "D", "H", "S"];
const tiposEspeciales = ["A", "J", "Q", "K"];
let puntosJugador = 0
let puntosComputadora = 0
// Referencias del HTML


deck = crearDeck( tiposDeCarta, tiposEspeciales);


// Eventos
btnPedir.addEventListener("click", () => {

    const carta = pedirCarta( deck );

    puntosJugador = puntosYAsignar( puntosJugador, carta, puntosHTML[0] )

    const imgCarta =  crearCarta( carta )
    divCartasJugador.append( imgCarta );

    if (puntosJugador > 21) {
        console.warn("Lo siento mucho, perdiste");
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);
    } else if (puntosJugador === 21) {
        console.warn("21, genial!");
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);
    }
});

btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);
});

btnNuevo.addEventListener("click", () => {
    console.clear();
    deck = [];
    deck = crearDeck(tiposDeCarta, tiposEspeciales);

    puntosJugador = 0;
    puntosComputadora = 0;

    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = "";
    divCartasJugador.innerHTML = "";

    btnPedir.disabled = false;
    btnDetener.disabled = false;
});
