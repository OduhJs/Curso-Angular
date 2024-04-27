import { Component } from "@angular/core";
import { Carros } from "../../interfaces/Carros";

@Component({
    selector: "app-render-lista",
    templateUrl: "./render-lista.component.html",
    styleUrl: "./render-lista.component.css"
})
export class RenderListaComponent {
    carros: Carros[] = [
        { nome: "Koenigsegg Jesko Absolut", vel: "531 Km/h", cor: "Preto" },
        { nome: "Bugatti Chiron", vel: "498 Km/h", cor: "Branca" }
    ];

    carro: Carros = {
        nome: "Nome",
        vel: "Velocidade",
        cor: "Cor"
    };
    detalhesCarro = ``;
    mostrarDetalhes(carro: Carros) {
        this.detalhesCarro = `O ${ carro.nome } pode chegar a ${ carro.vel }`;
    }
}
