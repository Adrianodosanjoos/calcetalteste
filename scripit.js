
// Capturar o evento de envio do formulário
const form = document.getElementById('formulario');
const button = document.getElementById('button');
form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Impede o comportamento padrão do formulário

    <button onclick= "window.location.href='https://calcetal1.netlify.app/';"></button>

    const formData = new FormData(form);
    const dados = {
        nome: formData.get('nome'),
        code: formData.get('code'),
        litros: formData.get('litros'),
        hora: formData.get('hora'),
        data: formData.get('data')
    };

    // Enviar os dados para a API
    const response = await fetch('http://localhost:3000', {
        method: 'POST',
        headers: {
            'Content-Type': 'aplication/json'
        },
        body: JSON.stringify(dados)
    });

    const resultado = await response.json();

    // Redirecionar para a página de exibição com os dados
    const params = new URLSearchParams(resultado).toString();
    window.location.href = mostrar-dados.html, "http://127.0.0.1:5501/index.html";
});
