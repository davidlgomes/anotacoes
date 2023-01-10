class AnotacoesController {
    constructor() {
        this.array_anotacoes = new Array();
    }
}
const form = document.querySelector('form');
anotacoesController=new AnotacoesController();
form.addEventListener('submit', (e) => {
    const note = new Anotacoes(document.getElementById('titulo').value, document.getElementById('descricaoTarefa').value)
    anotacoesController.array_anotacoes.push(note)
    console.log(anotacoesController.array_anotacoes)
    e.preventDefault()
});