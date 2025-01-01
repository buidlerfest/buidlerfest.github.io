class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header>
        <nav>
          <a href="/index.html">Home</a>
          <a href="/agenda.html">Agenda</a>
          <a href="/venue.html">Venue</a>
          <a href="/posts">Posts</a>
          <a href="/gallery">Gallery</a>
          <a href="/register.html">Register</a>
        </nav>
      </header>
    `;
  }
}

customElements.define("header-component", Header);
