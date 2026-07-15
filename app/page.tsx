const whatsappUrl =
  "https://wa.me/5555991352816?text=Ol%C3%A1%21%20Quero%20solicitar%20um%20projeto%20e%20or%C3%A7amento%20para%20um%20painel%20de%20LED.";

const pillars = [
  {
    number: "01",
    title: "Projeto e dimensionamento",
    text: "Tamanho, modelo, estrutura e disposição definidos para o local e o objetivo do painel.",
  },
  {
    number: "02",
    title: "Fornecimento e importação",
    text: "Equipamentos e componentes selecionados de acordo com a aplicação e a distância de visualização.",
  },
  {
    number: "03",
    title: "Instalação e configuração",
    text: "Montagem, estrutura, processadora, software e testes reunidos em uma entrega técnica completa.",
  },
  {
    number: "04",
    title: "Orientação e suporte",
    text: "O painel é entregue pronto para uso, com instruções iniciais e acompanhamento próximo.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="LED Outdoor — início">
          <img src="/media/led-outdoor-logo.png" alt="LED Outdoor" />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#solucoes">Soluções</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#projetos">Projetos</a>
          <a href="#duvidas">Dúvidas</a>
          <a href="#contato">Contato</a>
        </nav>
        <a className="outline-button header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
          Solicitar orçamento
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow"><span /> Venda e instalação em todo o RS</p>
          <h1>
            Painéis de LED <span>sob medida,</span> do projeto à instalação.
          </h1>
          <p className="hero-lead">
            Projetamos, fornecemos, instalamos e configuramos painéis de LED para empresas que querem transformar sua comunicação e seus espaços.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href={whatsappUrl} target="_blank" rel="noreferrer">
              Solicitar meu projeto <b aria-hidden="true">↗</b>
            </a>
            <a className="ghost-button" href="#solucoes">Conhecer as soluções</a>
          </div>
          <div className="trust-line" aria-label="Etapas atendidas pela LED Outdoor">
            <span>Projeto</span><i />
            <span>Fornecimento</span><i />
            <span>Instalação</span><i />
            <span>Configuração</span>
          </div>
        </div>

        <div className="hero-media" aria-label="Projeto real da LED Outdoor na Multi10, em Jaguari">
          <video autoPlay muted loop playsInline poster="/media/hero-multi10.webp" preload="metadata">
            <source src="/media/hero-multi10.mp4" type="video/mp4" />
          </video>
          <div className="hero-media-shade" />
          <div className="project-chip">
            <span className="live-dot" />
            <div><small>PROJETO REAL</small><strong>Multi10 · Jaguari/RS</strong></div>
          </div>
          <a className="instagram-chip" href="https://www.instagram.com/reel/DZvvPA_MhvF/" target="_blank" rel="noreferrer">
            Ver instalação <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="complete-solution" id="solucoes">
        <div className="section-heading">
          <p className="eyebrow"><span /> Solução completa</p>
          <h2>Um único parceiro, <em>do primeiro cálculo à primeira exibição.</em></h2>
          <p>A LED Outdoor cuida de todas as etapas para que você não precise coordenar fornecedores diferentes.</p>
        </div>
        <div className="pillar-grid">
          {pillars.map((pillar) => (
            <article className="pillar-card" key={pillar.number}>
              <span className="pillar-number">{pillar.number}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
              <div className="card-line" aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Falar com a LED Outdoor pelo WhatsApp">
        <span>WhatsApp</span><b aria-hidden="true">↗</b>
      </a>
    </main>
  );
}
