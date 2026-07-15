"use client";

import { type FormEvent, useState } from "react";

const phone = "5555991352816";
const whatsappUrl = `https://wa.me/${phone}?text=Ol%C3%A1%21%20Quero%20solicitar%20um%20projeto%20e%20or%C3%A7amento%20para%20um%20painel%20de%20LED.`;

const pillars = [
  ["01", "Projeto e dimensionamento", "Tamanho, modelo, estrutura e disposição definidos para o local e o objetivo do painel."],
  ["02", "Fornecimento e importação", "Equipamentos e componentes selecionados conforme a aplicação e a distância de visualização."],
  ["03", "Instalação e configuração", "Montagem, estrutura, processadora, software e testes em uma entrega técnica completa."],
  ["04", "Orientação e suporte", "O painel é entregue pronto para uso, com instruções iniciais e acompanhamento próximo."],
];

const applications = [
  { title: "Painéis externos", text: "Brilho e resistência para fachadas, ruas e pontos de grande circulação.", image: "media/hero-multi10.webp", tag: "OUTDOOR" },
  { title: "Painéis internos", text: "Alta definição para lojas, recepções, palcos e ambientes fechados.", image: "media/projeto-painel-indoor.webp", tag: "INDOOR" },
  { title: "Fachadas comerciais", text: "Comunicação dinâmica para promoções, campanhas e presença de marca.", image: "media/projeto-victhoria.webp", tag: "FACHADAS" },
  { title: "Ambientes corporativos", text: "Soluções visuais para convenções, auditórios e espaços institucionais.", image: "media/projeto-corporativo.webp", tag: "CORPORATIVO" },
  { title: "Projetos personalizados", text: "Formatos e estruturas dimensionados para desafios fora do padrão.", image: "media/projeto-formatura.webp", tag: "SOB MEDIDA" },
  { title: "Instalações especiais", text: "Integração do painel com estruturas, cenários e arquiteturas complexas.", image: "media/projeto-cenario-led.webp", tag: "ESPECIAL" },
];

const processSteps = [
  ["01", "Você explica a necessidade", "Conte onde será instalado, o objetivo e o que deseja comunicar. Não é preciso conhecer os detalhes técnicos."],
  ["02", "Analisamos o local", "A equipe avalia dimensões, visibilidade, estrutura, energia e condições de instalação."],
  ["03", "Apresentamos a proposta", "Você recebe a solução técnica e comercial dimensionada para a aplicação."],
  ["04", "Fornecemos e instalamos", "Painel, componentes e estrutura são preparados e montados conforme o escopo aprovado."],
  ["05", "Configuramos e entregamos", "O sistema é testado, configurado e entregue com a orientação inicial de uso."],
];

const faq = [
  ["Qual é o valor de um painel de LED?", "O investimento depende do tamanho, pixel pitch, uso interno ou externo, estrutura, energia e condições de instalação. Por isso, cada orçamento é dimensionado para o local e o objetivo do cliente."],
  ["Como saber o tamanho ideal?", "A equipe considera a área disponível, a distância de visualização, o conteúdo que será exibido e o impacto desejado. Você pode enviar fotos, medidas aproximadas e a localização para iniciar a análise."],
  ["Qual é a diferença entre painel interno e externo?", "Painéis externos precisam de mais brilho e proteção contra clima. Em ambientes internos, a prioridade costuma ser a resolução para visualização mais próxima."],
  ["A LED Outdoor faz a estrutura e a instalação?", "Sim. A estrutura, a montagem e a instalação podem fazer parte do projeto, conforme o escopo técnico e as condições do local."],
  ["O sistema já é entregue configurado?", "Sim. Processadora, software e testes são realizados para que o painel seja entregue pronto para utilização, com orientação inicial."],
  ["É possível instalar em outra cidade?", "Sim. A LED Outdoor realiza vendas e instalações em todo o Rio Grande do Sul. A logística é avaliada na proposta."],
  ["Qual é o prazo médio de entrega?", "O prazo varia conforme o modelo, a disponibilidade ou importação dos componentes e a complexidade da estrutura. O cronograma é informado na proposta comercial."],
  ["O painel possui garantia e manutenção?", "As condições de garantia e manutenção dependem dos equipamentos e do escopo contratado. Tudo é especificado na proposta e no contrato do projeto."],
];

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow"><span /> {children}</p>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  function handleLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      "Olá! Quero solicitar um projeto de painel de LED.",
      "",
      `Nome: ${String(data.get("nome") || "")}`,
      `Empresa: ${String(data.get("empresa") || "Não informada")}`,
      `WhatsApp: ${String(data.get("whatsapp") || "")}`,
      `Cidade: ${String(data.get("cidade") || "")}`,
      `Aplicação: ${String(data.get("aplicacao") || "Ainda não definida")}`,
      `Mensagem: ${String(data.get("mensagem") || "Gostaria de receber orientação para começar.")}`,
    ];
    setFormStatus("Tudo certo — o WhatsApp será aberto com os dados do projeto.");
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="LED Outdoor — início" onClick={() => setMenuOpen(false)}>
          <img src="media/led-outdoor-logo.png" alt="LED Outdoor" />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#solucoes">Soluções</a><a href="#como-funciona">Como funciona</a><a href="#projetos">Projetos</a><a href="#duvidas">Dúvidas</a><a href="#contato">Contato</a>
        </nav>
        <a className="outline-button header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">Solicitar orçamento</a>
        <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen((value) => !value)}>
          <span /><span /><span /><b className="sr-only">Abrir menu</b>
        </button>
        <nav className={`mobile-menu ${menuOpen ? "is-open" : ""}`} id="mobile-menu" aria-label="Navegação para celular">
          {[["Soluções", "#solucoes"], ["Como funciona", "#como-funciona"], ["Projetos", "#projetos"], ["Dúvidas", "#duvidas"], ["Contato", "#contato"]].map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}<span>↘</span></a>
          ))}
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-content">
          <SectionEyebrow>Venda e instalação em todo o RS</SectionEyebrow>
          <h1>Painéis de LED <span>sob medida,</span> com projeto e instalação completos.</h1>
          <p className="hero-lead">Projetamos, fornecemos, instalamos e configuramos painéis de LED para empresas que querem transformar sua comunicação e seus espaços.</p>
          <div className="hero-actions">
            <a className="primary-button" href={whatsappUrl} target="_blank" rel="noreferrer">Solicitar meu projeto <b aria-hidden="true">↗</b></a>
            <a className="ghost-button" href="#solucoes">Conhecer as soluções</a>
          </div>
          <div className="trust-line" aria-label="Etapas atendidas pela LED Outdoor">
            <span>Projeto</span><i /><span>Fornecimento</span><i /><span>Instalação</span><i /><span>Configuração</span>
          </div>
        </div>
        <div className="hero-media" aria-label="Projeto real da LED Outdoor na Multi10, em Jaguari">
          <video autoPlay muted loop playsInline poster="media/hero-multi10.webp" preload="metadata"><source src="media/hero-multi10.mp4" type="video/mp4" /></video>
          <div className="hero-media-shade" />
          <div className="project-chip"><span className="live-dot" /><div><small>PROJETO REAL</small><strong>Multi10 · Jaguari/RS</strong></div></div>
          <a className="instagram-chip" href="https://www.instagram.com/reel/DZvvPA_MhvF/" target="_blank" rel="noreferrer">Ver instalação <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="signal-strip" aria-label="Atuação da empresa">
        <p><span>LED Outdoor</span> Soluções de alto impacto para empresas</p>
        <div><span>Santa Maria</span><i /><span>Atendimento em todo o RS</span><i /><span>Projeto completo</span></div>
      </section>

      <section className="complete-solution" id="solucoes">
        <div className="section-heading">
          <SectionEyebrow>Solução completa</SectionEyebrow>
          <h2>Seu painel completo, <em>com uma equipe que cuida de cada detalhe.</em></h2>
          <p>A LED Outdoor cuida de todas as etapas para que você não precise coordenar fornecedores diferentes.</p>
        </div>
        <div className="pillar-grid">
          {pillars.map(([number, title, text]) => <article className="pillar-card" key={number}><span className="pillar-number">{number}</span><h3>{title}</h3><p>{text}</p><div className="card-line" aria-hidden="true" /></article>)}
        </div>
      </section>

      <section className="applications-section">
        <div className="section-topline">
          <div><SectionEyebrow>Soluções e aplicações</SectionEyebrow><h2>O painel certo para cada espaço.</h2></div>
          <p>Do comércio de rua a grandes ambientes corporativos, cada solução é definida pela distância, pelo conteúdo e pelas condições do local.</p>
        </div>
        <div className="applications-grid">
          {applications.map((item) => (
            <article className="application-card" key={item.title}>
              <img src={item.image} alt={`Aplicação real de LED: ${item.title}`} loading="lazy" />
              <div className="application-overlay" />
              <span className="application-tag">{item.tag}</span>
              <div className="application-copy"><h3>{item.title}</h3><p>{item.text}</p><a href={whatsappUrl} target="_blank" rel="noreferrer">Orçar esta solução <span>↗</span></a></div>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section" id="como-funciona">
        <div className="process-intro"><SectionEyebrow>Como funciona</SectionEyebrow><h2>Você conta o objetivo.<br /><span>Nós cuidamos do técnico.</span></h2><p>Não é preciso saber qual painel comprar. Fotos do local, cidade e uma ideia do uso já são suficientes para começar.</p><a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">Começar pelo WhatsApp <span>↗</span></a></div>
        <ol className="process-list">
          {processSteps.map(([number, title, text]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}
        </ol>
      </section>

      <section className="projects-section" id="projetos">
        <div className="section-topline projects-title">
          <div><SectionEyebrow>Projetos reais</SectionEyebrow><h2>LED aplicado onde o impacto acontece.</h2></div>
          <p>Uma seleção de instalações da LED Outdoor e aplicações audiovisuais realizadas pela operação da Plugin Eventos.</p>
        </div>
        <div className="projects-grid">
          <article className="project-card project-large">
            <img src="media/hero-multi10.webp" alt="Painel de LED instalado na fachada da Multi10 em Jaguari" loading="lazy" />
            <div className="project-card-overlay" /><div className="project-meta"><span>01 · FACHADA COMERCIAL</span><h3>Multi10</h3><p>Jaguari/RS · Painel externo com instalação completa</p></div>
          </article>
          <article className="project-card project-video">
            <video autoPlay muted loop playsInline poster="media/projeto-victhoria.webp" preload="metadata"><source src="media/projeto-victhoria.mp4" type="video/mp4" /></video>
            <div className="project-card-overlay" /><div className="project-meta"><span>02 · INSTALAÇÃO EM ALTURA</span><h3>Victhoria do Sol</h3><p>Estrutura em cobertura · Projeto imobiliário</p></div>
          </article>
          <article className="project-card"><img src="media/projeto-corporativo.webp" alt="Painel de LED em evento corporativo" loading="lazy" /><div className="project-card-overlay" /><div className="project-meta"><span>03 · CORPORATIVO</span><h3>Ambiente de convenção</h3><p>Visual de alta definição para apresentação institucional</p></div></article>
          <article className="project-card"><img src="media/projeto-cenario-led.webp" alt="Cenário de evento com painéis de LED" loading="lazy" /><div className="project-card-overlay" /><div className="project-meta"><span>04 · CENOGRAFIA</span><h3>Painéis integrados</h3><p>LED combinado a palco, estrutura e iluminação</p></div></article>
        </div>
        <a className="instagram-projects" href="https://www.instagram.com/ledoutdoor_sm/" target="_blank" rel="noreferrer"><span>Mais projetos e bastidores no Instagram</span><b>@ledoutdoor_sm ↗</b></a>
      </section>

      <section className="founder-section">
        <div className="founder-image"><img src="media/juliano-paim.webp" alt="Juliano Paim, fundador da Plugin Eventos e responsável pela LED Outdoor" loading="lazy" /><div className="founder-frame" /></div>
        <div className="founder-copy">
          <SectionEyebrow>Experiência por trás de cada entrega</SectionEyebrow>
          <h2>Juliano Paim</h2><p className="founder-role">Fundador da Plugin Eventos e líder da LED Outdoor</p>
          <p>DJ e empreendedor santa-mariense, Juliano fundou a Plugin Eventos em 2020 com a visão de transformar ambientes por meio de tecnologia audiovisual.</p>
          <p>A experiência prática com painéis, estruturas, iluminação e operação técnica evoluiu para uma solução dedicada à venda e instalação de LED. Hoje, ele acompanha o cliente desde a escolha do equipamento até a entrega configurada.</p>
          <blockquote>“O cliente não precisa comprar apenas um equipamento. Ele precisa receber a solução certa para o espaço e saber que ela vai funcionar.”</blockquote>
          <div className="founder-signals"><span>Atendimento próximo</span><span>Visão técnica e comercial</span><span>Acompanhamento até a entrega</span></div>
        </div>
      </section>

      <section className="technical-section">
        <div className="section-topline">
          <div><SectionEyebrow>Sem complicação</SectionEyebrow><h2>O essencial para pedir seu orçamento.</h2></div>
          <p>Algumas decisões técnicas mudam o resultado e o investimento. A equipe calcula tudo com você.</p>
        </div>
        <div className="technical-grid">
          <article><span>01</span><h3>Interno ou externo?</h3><p>Ambientes externos exigem brilho e proteção maiores. No indoor, a resolução para curta distância ganha importância.</p></article>
          <article><span>02</span><h3>O que é pixel pitch?</h3><p>É a distância entre os pixels. Quanto menor, mais definição de perto — e maior tende a ser o investimento.</p></article>
          <article><span>03</span><h3>Como calcular o tamanho?</h3><p>Área disponível, conteúdo, distância do público e objetivo de comunicação determinam a proporção ideal.</p></article>
          <article><span>04</span><h3>Por que analisar o local?</h3><p>Estrutura, energia, ventilação, acesso e manutenção precisam estar previstos antes da instalação.</p></article>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="testimonials-heading"><SectionEyebrow>Quem já trabalhou com a equipe</SectionEyebrow><h2>Confiança construída na entrega.</h2></div>
        <div className="testimonial-grid">
          <blockquote><p>“Vocês deram um show com as luzes, telões e sonorização. O evento não teria o impacto que teve sem o trabalho de vocês.”</p><footer><strong>Graziele</strong><span>Nutripampa</span></footer></blockquote>
          <blockquote><p>“Pessoal todo elogiando muito a qualidade do vídeo, som e tudo. Ficou maravilhoso, todo mundo amou.”</p><footer><strong>Virgínia</strong><span>Formatura de Medicina</span></footer></blockquote>
          <blockquote><p>“Foi bom o evento. Vamos repetir outros. O teu trabalho é diferenciado. Muito compromisso e competência.”</p><footer><strong>Lucas</strong><span>Nutripampa</span></footer></blockquote>
        </div>
        <p className="testimonial-note">Depoimentos publicados originalmente pela Plugin Eventos, operação fundada por Juliano Paim.</p>
      </section>

      <section className="faq-section" id="duvidas">
        <div className="faq-intro"><SectionEyebrow>Dúvidas frequentes</SectionEyebrow><h2>Antes de transformar seu espaço.</h2><p>Respostas diretas para começar a conversa com segurança.</p></div>
        <div className="faq-list">
          {faq.map(([question, answer], index) => <details key={question}><summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<b aria-hidden="true">+</b></summary><p>{answer}</p></details>)}
        </div>
      </section>

      <section className="contact-section" id="contato">
        <div className="contact-copy">
          <SectionEyebrow>Solicite seu projeto</SectionEyebrow>
          <h2>Vamos projetar o painel ideal para o seu espaço?</h2>
          <p>Conte onde será instalado e o que você deseja comunicar. A LED Outdoor analisa a necessidade e prepara uma proposta personalizada.</p>
          <a className="contact-phone" href={whatsappUrl} target="_blank" rel="noreferrer"><span>WhatsApp comercial</span><strong>(55) 99135-2816 ↗</strong></a>
          <div className="contact-location"><span>Base em Santa Maria/RS</span><span>Atendimento em todo o Rio Grande do Sul</span></div>
        </div>
        <form className="lead-form" onSubmit={handleLead}>
          <div className="form-row"><label>Nome *<input name="nome" required autoComplete="name" placeholder="Como podemos te chamar?" /></label><label>Empresa<input name="empresa" autoComplete="organization" placeholder="Nome da empresa" /></label></div>
          <div className="form-row"><label>WhatsApp *<input name="whatsapp" required inputMode="tel" autoComplete="tel" placeholder="(55) 99999-9999" /></label><label>Cidade *<input name="cidade" required autoComplete="address-level2" placeholder="Sua cidade" /></label></div>
          <label>Local ou tipo de aplicação<select name="aplicacao" defaultValue=""><option value="">Selecione, se já souber</option><option>Painel externo / fachada</option><option>Painel interno</option><option>Ambiente corporativo</option><option>Estrutura especial</option><option>Ainda não sei</option></select></label>
          <label>Conte um pouco sobre o projeto<textarea name="mensagem" rows={4} placeholder="Ex.: Quero instalar um painel na fachada da minha loja. Ainda não tenho as medidas." /></label>
          <label className="consent"><input type="checkbox" required /> <span>Autorizo o uso destes dados para retorno sobre o orçamento e li a <a href="#privacidade">política de privacidade</a>.</span></label>
          <button className="submit-button" type="submit">Enviar pelo WhatsApp <span>↗</span></button>
          {formStatus && <p className="form-status" role="status">{formStatus}</p>}
        </form>
      </section>

      <footer className="site-footer">
        <div className="footer-main"><div className="footer-brand"><img src="media/led-outdoor-logo.png" alt="LED Outdoor" /><p>Painéis de LED sob medida, com projeto e instalação completos.</p></div><div className="footer-links"><h3>Navegação</h3><a href="#solucoes">Soluções</a><a href="#como-funciona">Como funciona</a><a href="#projetos">Projetos</a><a href="#duvidas">Dúvidas</a></div><div className="footer-links"><h3>Contato</h3><a href={whatsappUrl} target="_blank" rel="noreferrer">(55) 99135-2816</a><a href="https://www.instagram.com/ledoutdoor_sm/" target="_blank" rel="noreferrer">@ledoutdoor_sm</a><span>Santa Maria/RS</span></div></div>
        <details className="privacy" id="privacidade"><summary>Política de privacidade</summary><p>Os dados enviados pelo formulário são usados somente para responder à solicitação de orçamento e dar continuidade ao atendimento comercial. O formulário prepara uma mensagem no WhatsApp; nenhuma informação fica armazenada neste site. Para solicitar correção ou exclusão de dados compartilhados durante o atendimento, entre em contato pelo WhatsApp comercial.</p></details>
        <div className="footer-bottom"><p>LED Outdoor — Plugin Eventos Ltda · CNPJ 27.865.923/0001-62</p><p>Rua Venâncio Aires, 1434, sala 312-D · Centro · Santa Maria/RS</p></div>
      </footer>

      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Falar com a LED Outdoor pelo WhatsApp"><span>WhatsApp</span><b aria-hidden="true">↗</b></a>
    </main>
  );
}
