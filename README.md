
# Fluxo Pro - Site Institucional

Este repositório contém o código-fonte do site institucional da Fluxo Pro, uma empresa de [área de atuação]. O projeto foi estruturado para ser um site estático, utilizando as melhores práticas de desenvolvimento web para garantir manutenibilidade, escalabilidade e um deploy simplificado em plataformas como a Netlify.

## Visualização Local

Para visualizar o site em sua máquina local, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/DEVguto1997/fluxo-pro-site.git
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd fluxo-pro-site
    ```

3.  **Abra o arquivo `index.html` no seu navegador de preferência.**

Não é necessário nenhum servidor local ou processo de compilação, pois o site é totalmente estático.

## Estrutura de Pastas

A estrutura de pastas foi organizada de forma lógica e semântica para facilitar a manutenção e a adição de novos conteúdos:

```
fluxo-pro-site/
├── index.html                # Página inicial
├── about.html                # Página "Sobre Nós"
├── contact.html              # Página de "Contato"
├── css/                      # Pasta para folhas de estilo
│   ├── main.css              # Estilos principais, reset e base
│   └── components.css        # (Opcional) Para componentes modulares
├── js/                       # Pasta para arquivos JavaScript
│   └── main.js               # Arquivo JavaScript principal
├── images/                   # Pasta para imagens e ícones
│   └── .gitkeep              # Mantém a pasta no repositório
├── fonts/                    # Pasta para fontes locais
│   └── .gitkeep
├── assets/                   # Pasta para outros recursos (PDFs, etc.)
│   └── .gitkeep
└── README.md                 # Este arquivo
```

## Tecnologias Utilizadas

*   **HTML5:** Para a estruturação semântica do conteúdo.
*   **CSS3:** Para estilização, layout responsivo e metodologia BEM (Block, Element, Modifier).
*   **JavaScript (ES6+):** Para interatividade e manipulação do DOM.

## Dicas de Manutenção

*   **Novas Páginas:** Ao adicionar uma nova página (ex: `servicos.html`), mantenha a mesma estrutura do `index.html` e adicione o link correspondente no menu de navegação (`<header>`) de todas as outras páginas.
*   **Estilos Modulares:** Para evitar que o `main.css` fique muito grande, considere criar arquivos CSS específicos para componentes complexos (ex: `css/carousel.css`) e importá-los no HTML ou no `main.css`.
*   **Imagens:** Otimize as imagens para a web antes de adicioná-las à pasta `images/` para garantir um carregamento rápido do site.

---

*Este projeto foi inicializado e estruturado por Manus, um assistente de IA especializado em desenvolvimento front-end.*

