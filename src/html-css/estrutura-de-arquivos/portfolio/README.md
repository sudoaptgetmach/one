# Guia de Estilo do Projeto Portfolio

Este documento serve como um guia para o arquivo `style.css` usado no projeto de portfólio. O arquivo CSS define os estilos fundamentais aplicados à estrutura HTML, garantindo uma apresentação visualmente consistente e atraente.

## Visão Geral

O estilo do projeto visa criar uma aparência limpa e moderna para um site de portfólio. As regras CSS definidas no arquivo `style.css` cobrem a configuração básica, incluindo um reset global, estilização do corpo e classes específicas para gerenciamento de layout e formatação de texto.

## Reset Global

Um reset global é aplicado para garantir consistência entre diferentes navegadores, removendo margens, paddings e box-sizing padrões:

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

# Estilização do Corpo

O corpo do documento é estilizado para ter um fundo escuro (#2C2B33), com texto em um tom mais claro (#5448A0) para contraste. A fonte é definida como Arial, com uma altura de linha de 1.6 para legibilidade. Um padding de 20px é adicionado para evitar que o conteúdo toque as bordas da viewport:

```css
body {
    background-color: #2C2B33;
    color: #5448A0;
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    padding: 20px;
}
```

# Classe container

Classe Container

A classe ```.container``` é projetada para envolver o conteúdo principal, centralizando-o e limitando sua largura máxima a 800px. Isso torna a leitura confortável em telas maiores. O fundo é definido como branco (```#fff```), com 20px de padding e cantos arredondados (```8px```) para criar um efeito de cartão, destacando o conteúdo principal contra o fundo escuro do corpo:

```css
.container {
    max-width: 800px;
    margin: auto;
    background: #fff;
    padding: 20px;
    border-radius: 8px;
}
```

# Conclusão

Este guia de estilo cobre a estrutura básica e estilos definidos no arquivo ```style.css``` para o projeto de portfólio. As escolhas de design visam criar um site visualmente atraente e legível, adequado para exibir um portfólio. Para mais detalhes, consulte o arquivo completo ```style.css```.