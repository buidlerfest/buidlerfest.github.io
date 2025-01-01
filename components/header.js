class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header>
        <nav>
          <a href="/">Home</a>
          <a href="/agenda">Agenda</a>
          <a href="/venue">Venue</a>
          <a href="/posts">Posts</a>
          <a href="/gallery">Gallery</a>
          <a href="/register">Register</a>
        </nav>
      </header>
    `;
  }
}

customElements.define("header-component", Header);
