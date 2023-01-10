class AnotacoesController {
    constructor(){
        this.array_anotacoes=new Array();
    }
    function() {
        const form = document.querySelector('form');
        form.addEventListener('submit', (e) => {
            const note = new Anotacoes(document.getElementById('titulo').value, document.getElementById('descricaoTarefa').value)
            console.log(note)
            array_anotacoes.push(form)
            e.preventDefault()
        });
        return 0;
    }
}