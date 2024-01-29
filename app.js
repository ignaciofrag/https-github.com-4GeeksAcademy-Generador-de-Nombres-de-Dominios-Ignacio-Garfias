window.onload = function() {
    let pronoun = ['the', 'our'];
    let adj = ['great', 'big'];
    let noun = ['jogger', 'racoon'];
    let container = document.getElementById('dominios');

    function generarNombresDominio() {
        let dominios = '';
        for (let p of pronoun) {
            for (let a of adj) {
                for (let n of noun) {
                    dominios += '<p>' + p + a + n + '.com' + '</p>';
                }
            }
        }
        return dominios;
    }

    container.innerHTML = generarNombresDominio();
};