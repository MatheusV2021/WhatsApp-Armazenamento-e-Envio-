# Formulário de Contato com Armazenamento Local e Envio por WhatsApp

Este projeto é um formulário de contato interativo que permite aos usuários gravar informações no armazenamento local do navegador, exibir os dados salvos e enviar as informações via WhatsApp.

## Funcionalidades

- **Gravação de Dados**: Armazena informações do formulário (nome, endereço, e-mail e telefone) no localStorage do navegador.
- **Exibição de Dados**: Recupera e exibe os dados previamente armazenados em um painel dedicado.
- **Envio por WhatsApp**: Envia os dados do formulário para um número de WhatsApp especificado.
- **Design Responsivo**: Layout adaptável para diferentes tamanhos de tela.
- **Animações e Efeitos Visuais**: Interações suaves e feedback visual para melhor experiência do usuário.

## Tecnologias Utilizadas

- HTML5
- CSS3 (com animações e design responsivo)
- JavaScript (manipulação do DOM e localStorage)
- Fontes do Google (Poppins)
- API do WhatsApp para envio de mensagens

## Estrutura do Projeto

- **index.html**: Estrutura principal do formulário.
- **styles.css**: Estilos e animações do formulário.
- **script.js**: Lógica para manipulação de dados e interações.

## Como Usar

1. Preencha os campos do formulário (Nome, Endereço, E-mail, Telefone).
2. Utilize os botões para:
   - **Gravar**: Salva os dados no armazenamento local do navegador.
   - **Exibir**: Mostra os dados previamente salvos.
   - **Enviar**: Envia os dados para um número de WhatsApp (é necessário informar o número no campo dedicado).

## Personalização

- Para alterar o esquema de cores, modifique as ocorrências de `#9f01ea` no arquivo CSS.
- Para ajustar o layout, edite as classes no arquivo CSS, especialmente nas media queries para responsividade.

## Requisitos

- Navegador moderno com suporte a JavaScript e localStorage.
- Conexão com a internet para carregar as fontes do Google.

## Limitações

- Os dados são armazenados apenas no navegador local do usuário.
- O envio por WhatsApp requer que o usuário tenha o aplicativo instalado no dispositivo.
