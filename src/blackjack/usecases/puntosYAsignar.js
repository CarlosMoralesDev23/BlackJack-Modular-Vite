
import { valorCarta } from "./valor-carta";

export const puntosYAsignar = ( puntos, carta, puntosHTML )=>{

    puntos = puntos + valorCarta(carta);
    console.log(puntosHTML)
    puntosHTML.innerText = puntos;

    return puntos
}