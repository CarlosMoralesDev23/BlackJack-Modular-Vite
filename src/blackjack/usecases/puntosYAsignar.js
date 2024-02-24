
import { valorCarta } from "./valor-carta";

export const puntosYAsignar = ( puntosJugador, carta, puntosHTML )=>{

    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTML.innerText = puntosJugador;

    return puntosJugador

}

