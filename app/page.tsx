"use client";

/* eslint-disable @next/next/no-img-element -- This page is also built by Vite as a static Cloudflare asset. */

import { type FormEvent, useEffect, useRef, useState } from "react";

const phone = "5555991352816";
const createWhatsappUrl = (message: string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
const whatsappUrl = createWhatsappUrl(
  "Olá! Quero solicitar um projeto e orçamento para um painel de LED.",
);

const pillars = [
  ["01", "Projeto e dimensionamento", "A equipe define o tamanho, o modelo, a estrutura e a posição de instalação conforme o local e o objetivo."],
  ["02", "Fornecimento e importação", "Os equipamentos e componentes são escolhidos conforme o ambiente, o tipo de uso e a distância de visualização."],
  ["03", "Instalação e configuração", "A equipe monta o painel, instala a estrutura, configura o sistema e testa tudo antes da entrega."],
  ["04", "Orientação e suporte", "O painel é entregue pronto para uso, com orientações iniciais e suporte quando necessário."],
];

const applications = [
  { title: "Painéis externos", text: "Mais brilho e proteção para fachadas e áreas expostas ao tempo.", image: "media/hero-multi10.webp", width: 1080, height: 1921, tag: "OUTDOOR" },
  { title: "Painéis internos", text: "Mais definição para conteúdos visualizados a pouca distância.", image: "media/projeto-painel-indoor.webp", width: 900, height: 1200, tag: "INDOOR" },
  { title: "Fachadas comerciais", text: "Conteúdos em movimento para divulgar produtos, campanhas e a própria marca.", image: "media/projeto-victhoria.webp", width: 1080, height: 1920, tag: "FACHADAS" },
  { title: "Ambientes corporativos", text: "Painéis para apresentações, convenções, auditórios e espaços institucionais.", image: "media/projeto-corporativo.webp", width: 1400, height: 1050, tag: "CORPORATIVO" },
  { title: "Projetos personalizados", text: "Medidas e estruturas definidas conforme a necessidade de cada projeto.", image: "media/projeto-formatura.webp", width: 1533, height: 1080, tag: "SOB MEDIDA" },
  { title: "Instalações especiais", text: "Painéis integrados a estruturas, cenários e projetos arquitetônicos.", image: "media/projeto-cenario-led.webp", width: 1600, height: 1068, tag: "ESPECIAL" },
];

const processSteps = [
  ["01", "Você explica a necessidade", "Conte onde pretende instalar o painel, qual é o objetivo e o conteúdo que deseja exibir. Você não precisa conhecer detalhes técnicos."],
  ["02", "Analisamos o local", "A equipe avalia medidas, visibilidade, estrutura, energia e as condições de instalação."],
  ["03", "Apresentamos a proposta", "Você recebe uma proposta técnica e comercial preparada para o local e a aplicação."],
  ["04", "Fornecemos e instalamos", "Painel, componentes e estrutura são preparados e montados conforme o escopo aprovado."],
  ["05", "Configuramos e entregamos", "A equipe testa e configura o sistema, entrega o painel pronto para uso e orienta você nos primeiros passos."],
];

const faq = [
  ["Qual é o valor de um painel de LED?", "O investimento depende do tamanho, pixel pitch, uso interno ou externo, estrutura, energia e condições de instalação. Por isso, cada orçamento é dimensionado para o local e o objetivo do cliente."],
  ["Como saber o tamanho ideal?", "A equipe considera a área disponível, a distância de visualização, o conteúdo que será exibido e o impacto desejado. Você pode enviar fotos, medidas aproximadas e a localização para iniciar a análise."],
  ["Qual é a diferença entre painel interno e externo?", "Painéis externos precisam de mais brilho e proteção contra o clima. Em ambientes internos, a prioridade costuma ser a resolução para visualização mais próxima."],
  ["A LED Outdoor faz a estrutura e a instalação?", "Sim. A estrutura, a montagem e a instalação podem fazer parte do projeto, conforme o escopo técnico e as condições do local."],
  ["O sistema já é entregue configurado?", "Sim. A processadora e o software são configurados, o sistema é testado e o painel é entregue pronto para uso, com orientação inicial."],
  ["É possível instalar em outra cidade?", "Sim. A LED Outdoor realiza vendas e instalações em todo o Rio Grande do Sul. A logística é avaliada na proposta."],
  ["Qual é o prazo médio de entrega?", "O prazo varia conforme o modelo, a disponibilidade ou importação dos componentes e a complexidade da estrutura. O cronograma é informado na proposta comercial."],
  ["O painel possui garantia e manutenção?", "As condições de garantia e manutenção dependem dos equipamentos e do escopo contratado. Tudo é especificado na proposta e no contrato do projeto."],
];

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow"><span /> {children}</p>;
}

function AmbientVideo({
  src,
  poster,
  width,
  height,
  priority = false,
}: {
  src: string;
  poster: string;
  width: number;
  height: number;
  priority?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const connection = navigator as Navigator & { connection?: { saveData?: boolean } };
    if (connection.connection?.saveData) return;

    const startVideo = () => {
      const source = video.querySelector("source");
      if (source?.dataset.src && !source.src) {
        source.src = source.dataset.src;
        video.load();
      }
      void video.play().catch(() => undefined);
    };

    if (priority) {
      const timeoutId = window.setTimeout(startVideo, 1000);
      return () => window.clearTimeout(timeoutId);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) startVideo();
        else video.pause();
      },
      { rootMargin: "250px 0px" },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [priority]);

  return (
    <video ref={videoRef} muted loop playsInline poster={poster} preload="none" width={width} height={height} aria-hidden="true">
      <source data-src={src} type="video/mp4" />
    </video>
  );
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
          <img src="media/led-outdoor-logo.webp" width="250" height="250" alt="LED Outdoor" />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#solucoes">Soluções</a><a href="#como-funciona">Como funciona</a><a href="#projetos">Projetos</a><a href="#duvidas">Dúvidas</a><a href="#contato">Contato</a>
        </nav>
        <a className="cta-button outline-button header-cta" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Solicitar orçamento</a>
        <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen((value) => !value)}>
          <span /><span /><span /><b className="sr-only">{menuOpen ? "Fechar menu" : "Abrir menu"}</b>
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
          <p className="hero-lead">Painéis de LED para fachadas, lojas e ambientes profissionais. A mesma equipe projeta, fornece, instala e configura.</p>
          <div className="hero-actions">
            <a className="cta-button primary-button" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Pedir orçamento <b aria-hidden="true">↗</b></a>
            <a className="cta-button ghost-button" href={createWhatsappUrl("Olá! Quero entender qual solução de painel de LED é ideal para o meu espaço.")} target="_blank" rel="noopener noreferrer">Falar com a equipe</a>
          </div>
          <div className="trust-line" aria-label="Etapas atendidas pela LED Outdoor">
            <span>Projeto</span><i /><span>Fornecimento</span><i /><span>Instalação</span><i /><span>Configuração</span>
          </div>
        </div>
        <div className="hero-media" aria-label="Projeto real da LED Outdoor na Multi10, em Jaguari">
          <AmbientVideo src="media/hero-multi10.mp4" poster="media/hero-multi10.webp" width={720} height={1280} priority />
          <div className="hero-media-shade" />
          <div className="project-chip"><span className="live-dot" /><div><small>PROJETO REAL</small><strong>Multi10 · Jaguari/RS</strong></div></div>
          <a className="cta-button instagram-chip" href={createWhatsappUrl("Olá! Vi o projeto da Multi10 e quero orçar uma instalação semelhante.")} target="_blank" rel="noopener noreferrer">Quero um projeto semelhante <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="signal-strip" aria-label="Atuação da empresa">
        <p><span>LED Outdoor</span> Projetos de LED para empresas em todo o Rio Grande do Sul</p>
        <div><span>Santa Maria</span><i /><span>Atendimento em todo o RS</span><i /><span>Projeto completo</span></div>
      </section>

      <section className="complete-solution" id="solucoes">
        <div className="section-heading">
          <SectionEyebrow>Solução completa</SectionEyebrow>
          <h2>Um projeto completo, <em>conduzido por uma única equipe.</em></h2>
          <p>Você não precisa procurar fornecedores diferentes. A LED Outdoor reúne toda a operação em uma única equipe.</p>
        </div>
        <div className="pillar-grid">
          {pillars.map(([number, title, text]) => <article className="pillar-card" key={number}><span className="pillar-number">{number}</span><h3>{title}</h3><p>{text}</p><div className="card-line" aria-hidden="true" /></article>)}
        </div>
      </section>

      <section className="applications-section">
        <div className="section-topline">
          <div><SectionEyebrow>Soluções e aplicações</SectionEyebrow><h2>O painel certo para cada espaço.</h2></div>
          <p>Cada solução considera o tipo de espaço, a distância de visualização, o conteúdo e as condições do local.</p>
        </div>
        <div className="applications-grid">
          {applications.map((item) => (
            <article className="application-card" key={item.title}>
              <img src={item.image} width={item.width} height={item.height} alt={`Aplicação real de LED: ${item.title}`} loading="lazy" decoding="async" />
              <div className="application-overlay" />
              <span className="application-tag">{item.tag}</span>
              <div className="application-copy"><h3>{item.title}</h3><p>{item.text}</p><a className="cta-button solution-cta" href={createWhatsappUrl(`Olá! Quero solicitar um orçamento para ${item.title.toLowerCase()}.`)} target="_blank" rel="noopener noreferrer">Pedir orçamento <span aria-hidden="true">↗</span></a></div>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section" id="como-funciona">
        <div className="process-intro"><SectionEyebrow>Como funciona</SectionEyebrow><h2>Você conta o objetivo.<br /><span>A parte técnica fica com a gente.</span></h2><p>Você não precisa saber qual painel comprar. Para começar, basta enviar fotos do local, informar a cidade e explicar o que pretende exibir.</p><a className="cta-button text-link" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Conversar pelo WhatsApp <span aria-hidden="true">↗</span></a></div>
        <ol className="process-list">
          {processSteps.map(([number, title, text]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}
        </ol>
      </section>

      <section className="projects-section" id="projetos">
        <div className="section-topline projects-title">
          <div><SectionEyebrow>Projetos reais</SectionEyebrow><h2>Veja alguns projetos realizados pela equipe.</h2></div>
          <p>A seleção reúne instalações da LED Outdoor e projetos audiovisuais realizados pela Plugin Eventos.</p>
        </div>
        <div className="projects-grid">
          <article className="project-card project-large">
            <img src="media/hero-multi10.webp" width="1080" height="1921" alt="Painel de LED instalado na fachada da Multi10 em Jaguari" loading="lazy" decoding="async" />
            <div className="project-card-overlay" /><div className="project-meta"><span>01 · FACHADA COMERCIAL</span><h3>Multi10</h3><p>Jaguari/RS · Painel externo com instalação completa</p></div>
          </article>
          <article className="project-card project-video">
            <AmbientVideo src="media/projeto-victhoria.mp4" poster="media/projeto-victhoria.webp" width={540} height={960} />
            <div className="project-card-overlay" /><div className="project-meta"><span>02 · INSTALAÇÃO EM ALTURA</span><h3>Victhoria do Sol</h3><p>Estrutura em cobertura · Projeto imobiliário</p></div>
          </article>
          <article className="project-card"><img src="media/projeto-corporativo.webp" width="1400" height="1050" alt="Painel de LED em evento corporativo" loading="lazy" decoding="async" /><div className="project-card-overlay" /><div className="project-meta"><span>03 · CORPORATIVO</span><h3>Ambiente de convenção</h3><p>Visual de alta definição para apresentação institucional</p></div></article>
          <article className="project-card"><img src="media/projeto-cenario-led.webp" width="1600" height="1068" alt="Cenário de evento com painéis de LED" loading="lazy" decoding="async" /><div className="project-card-overlay" /><div className="project-meta"><span>04 · CENOGRAFIA</span><h3>Painéis integrados</h3><p>LED combinado a palco, estrutura e iluminação</p></div></article>
        </div>
        <a className="cta-button instagram-projects" href={createWhatsappUrl("Olá! Vi os projetos da LED Outdoor e quero conversar sobre uma solução para o meu espaço.")} target="_blank" rel="noopener noreferrer"><span>Quer um projeto como estes?</span><b>Falar no WhatsApp ↗</b></a>
      </section>

      <section className="founder-section">
        <div className="founder-image"><img src="media/juliano-paim.webp" width="1080" height="1180" alt="Juliano Paim, fundador da Plugin Eventos e responsável pela LED Outdoor" loading="lazy" decoding="async" /><div className="founder-frame" /></div>
        <div className="founder-copy">
          <SectionEyebrow>Experiência por trás de cada entrega</SectionEyebrow>
          <h2>Juliano Paim</h2><p className="founder-role">Fundador da Plugin Eventos e líder da LED Outdoor</p>
          <p>DJ e empreendedor de Santa Maria, Juliano Paim fundou a Plugin Eventos em 2020. Sua experiência reúne painéis de LED, estruturas, iluminação e operação audiovisual.</p>
          <p>Com essa experiência, Juliano criou a LED Outdoor para atender empresas que precisam comprar e instalar painéis de LED com orientação técnica. Hoje, ele acompanha cada projeto e orienta o cliente durante todo o processo.</p>
          <blockquote>“O cliente não precisa comprar apenas um equipamento. Ele precisa receber a solução certa para o espaço e saber que ela vai funcionar.”</blockquote>
          <div className="founder-signals"><span>Atendimento próximo</span><span>Visão técnica e comercial</span><span>Acompanhamento em todas as etapas</span></div>
        </div>
      </section>

      <section className="technical-section">
        <div className="section-topline">
          <div><SectionEyebrow>Sem complicação</SectionEyebrow><h2>O essencial para pedir seu orçamento.</h2></div>
          <p>Cada escolha interfere no resultado e no investimento. A equipe avalia o local e recomenda a configuração mais adequada.</p>
        </div>
        <div className="technical-grid">
          <article><span>01</span><h3>Interno ou externo?</h3><p>Ambientes externos exigem brilho e proteção maiores. Em ambientes internos, a resolução para curta distância ganha importância.</p></article>
          <article><span>02</span><h3>O que é pixel pitch?</h3><p>É a distância entre os pixels. Quanto menor, mais definição de perto — e maior tende a ser o investimento.</p></article>
          <article><span>03</span><h3>Como calcular o tamanho?</h3><p>Área disponível, conteúdo, distância do público e objetivo de comunicação determinam a proporção ideal.</p></article>
          <article><span>04</span><h3>Por que analisar o local?</h3><p>Estrutura, energia, ventilação, acesso e manutenção precisam estar previstos antes da instalação.</p></article>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="testimonials-heading"><SectionEyebrow>Quem já trabalhou com a equipe</SectionEyebrow><h2>O que os clientes dizem sobre o trabalho da equipe.</h2></div>
        <div className="testimonial-grid">
          <blockquote><p>“Vocês deram um show com as luzes, telões e sonorização. O evento não teria o impacto que teve sem o trabalho de vocês.”</p><footer><strong>Graziele</strong><span>Nutripampa</span></footer></blockquote>
          <blockquote><p>“Pessoal todo elogiando muito a qualidade do vídeo, som e tudo. Ficou maravilhoso, todo mundo amou.”</p><footer><strong>Virgínia</strong><span>Formatura de Medicina</span></footer></blockquote>
          <blockquote><p>“Foi bom o evento. Vamos repetir outros. O teu trabalho é diferenciado. Muito compromisso e competência.”</p><footer><strong>Lucas</strong><span>Nutripampa</span></footer></blockquote>
        </div>
        <p className="testimonial-note">Depoimentos publicados originalmente pela Plugin Eventos, operação fundada por Juliano Paim.</p>
      </section>

      <section className="faq-section" id="duvidas">
        <div className="faq-intro"><SectionEyebrow>Dúvidas frequentes</SectionEyebrow><h2>Respostas para as principais dúvidas antes de pedir um orçamento.</h2></div>
        <div className="faq-list">
          {faq.map(([question, answer], index) => <details key={question}><summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<b aria-hidden="true">+</b></summary><p>{answer}</p></details>)}
        </div>
      </section>

      <section className="contact-section" id="contato">
        <div className="contact-copy">
          <SectionEyebrow>Solicite seu projeto</SectionEyebrow>
          <h2>Vamos projetar o painel ideal para o seu espaço?</h2>
          <p>Conte onde pretende instalar o painel e o que deseja exibir. A equipe avalia as informações e chama você no WhatsApp para conversar sobre a solução.</p>
          <a className="contact-phone" href={whatsappUrl} target="_blank" rel="noopener noreferrer"><span>WhatsApp comercial</span><strong>(55) 99135-2816 ↗</strong></a>
          <div className="contact-location"><span>Base em Santa Maria/RS</span><span>Atendimento em todo o Rio Grande do Sul</span></div>
        </div>
        <form className="lead-form" onSubmit={handleLead} aria-label="Solicitar orçamento pelo WhatsApp">
          <div className="form-row"><label>Nome *<input name="nome" required autoComplete="name" placeholder="Como podemos te chamar?" /></label><label>Empresa<input name="empresa" autoComplete="organization" placeholder="Nome da empresa" /></label></div>
          <div className="form-row"><label>WhatsApp *<input name="whatsapp" type="tel" required inputMode="tel" autoComplete="tel" maxLength={20} placeholder="(55) 99999-9999" /></label><label>Cidade *<input name="cidade" required autoComplete="address-level2" placeholder="Sua cidade" /></label></div>
          <label>Local ou tipo de aplicação<select name="aplicacao" defaultValue=""><option value="">Selecione, se já souber</option><option>Painel externo / fachada</option><option>Painel interno</option><option>Ambiente corporativo</option><option>Estrutura especial</option><option>Ainda não sei</option></select></label>
          <label>Conte um pouco sobre o projeto<textarea name="mensagem" rows={4} placeholder="Ex.: Quero instalar um painel na fachada da minha loja. Ainda não tenho as medidas." /></label>
          <label className="consent"><input type="checkbox" required /> <span>Autorizo o uso destes dados para retorno sobre o orçamento e li a <a href="#privacidade">política de privacidade</a>.</span></label>
          <button className="cta-button submit-button" type="submit">Enviar e abrir o WhatsApp <span aria-hidden="true">↗</span></button>
          {formStatus && <p className="form-status" role="status">{formStatus}</p>}
        </form>
      </section>

      <footer className="site-footer">
        <div className="footer-main"><div className="footer-brand"><img src="media/led-outdoor-logo.webp" width="250" height="250" alt="LED Outdoor" loading="lazy" decoding="async" /><p>Painéis de LED sob medida, com projeto e instalação completos.</p></div><div className="footer-links"><h3>Navegação</h3><a href="#solucoes">Soluções</a><a href="#como-funciona">Como funciona</a><a href="#projetos">Projetos</a><a href="#duvidas">Dúvidas</a></div><div className="footer-links"><h3>Contato</h3><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">(55) 99135-2816</a><a href="https://www.instagram.com/ledoutdoor_sm/" target="_blank" rel="noopener noreferrer">@ledoutdoor_sm</a><span>Santa Maria/RS</span></div></div>
        <details className="privacy" id="privacidade"><summary>Política de privacidade</summary><p>Os dados enviados pelo formulário são usados somente para responder à solicitação de orçamento e dar continuidade ao atendimento comercial. O formulário prepara uma mensagem no WhatsApp; nenhuma informação fica armazenada neste site. Para solicitar correção ou exclusão de dados compartilhados durante o atendimento, entre em contato pelo WhatsApp comercial.</p></details>
        <div className="footer-bottom"><p>LED Outdoor — Plugin Eventos Ltda · CNPJ 27.865.923/0001-62</p><p>Rua Venâncio Aires, 1434, sala 312-D · Centro · Santa Maria/RS</p></div>
      </footer>

      <a className="cta-button floating-whatsapp" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Falar com a LED Outdoor pelo WhatsApp"><span>WhatsApp</span><b aria-hidden="true">↗</b></a>
    </main>
  );
}
