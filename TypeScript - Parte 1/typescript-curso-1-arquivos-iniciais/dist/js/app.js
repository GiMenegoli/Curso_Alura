import { Negociacaocontroller } from './controllers/negociacao-controller.js';
import { Negociacao } from './models/negociacao.js';
const controller = new Negociacaocontroller();
const negociacao = new Negociacao(new Date(), 10, 100);
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe');
}
