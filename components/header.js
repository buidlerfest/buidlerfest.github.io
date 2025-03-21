class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Buidler Fest #2</title>
        <link href="/static/styles.css" rel="stylesheet" type="text/css" />
        <link rel="icon" href="/static/favicon-32x32-dark.ico" type="image/x-icon" />
      </head>
      <header>
        <nav>
          <a href="/">Home</a>
          <a href="/agenda">Agenda</a>
          <a href="/posts">Posts</a>
          <a href="/gallery">Gallery</a>
          <a href="/register">Register</a>
        </nav>
      </header>
    `;
  }
}

customElements.define("header-component", Header);
