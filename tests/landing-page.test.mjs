import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import test from "node:test";

const pageSource = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
const styles = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
const html = await readFile(new URL("../gh-pages-dist/index.html", import.meta.url), "utf8");
const robots = await readFile(new URL("../public/robots.txt", import.meta.url), "utf8");
const sitemap = await readFile(new URL("../public/sitemap.xml", import.meta.url), "utf8");

test("commercial CTAs and lead form use the configured WhatsApp", () => {
  assert.match(pageSource, /const phone = "5555991352816"/);
  assert.match(pageSource, /className="cta-button ghost-button" href=\{createWhatsappUrl/);
  assert.match(pageSource, /className="cta-button instagram-chip" href=\{createWhatsappUrl/);
  assert.match(pageSource, /className="cta-button instagram-projects" href=\{createWhatsappUrl/);
  assert.match(pageSource, /className="cta-button submit-button" type="submit">Enviar e abrir o WhatsApp/);
  assert.match(pageSource, /window\.open\(createWhatsappUrl\(lines\.join\("\\n"\), "formulario_orcamento"\)/);
  assert.doesNotMatch(pageSource, /className="cta-button ghost-button" href="#/);
});

test("CTA visual language is consistent", () => {
  assert.match(styles, /\.cta-button \{/);
  for (const className of ["outline-button", "primary-button", "ghost-button", "instagram-chip", "solution-cta", "text-link", "instagram-projects", "submit-button", "floating-whatsapp"]) {
    assert.match(pageSource, new RegExp(`cta-button[^\"]*${className}|${className}[^\"]*cta-button`));
  }
  assert.match(styles, /linear-gradient\(105deg, var\(--cyan\), var\(--magenta\)\) border-box/);
  assert.match(styles, /border-radius: 8px/);
});

test("commercial CTAs expose consistent UTM attribution and dataLayer events", () => {
  for (const parameter of ["utm_source", "utm_medium", "utm_campaign", "utm_content"]) {
    assert.match(pageSource, new RegExp(`searchParams\\.set\\("${parameter}"`));
  }

  assert.match(pageSource, /event: "cta_click"/);
  assert.match(pageSource, /utm_source: "site_led_outdoor"/);
  assert.match(pageSource, /utm_medium: "cta"/);
  assert.match(pageSource, /const utmCampaign = "orcamento_paineis_led"/);

  for (const content of [
    "header_orcamento",
    "hero_orcamento",
    "hero_falar_equipe",
    "hero_projeto_multi10",
    "processo_whatsapp",
    "projetos_whatsapp",
    "contato_telefone",
    "formulario_orcamento",
    "rodape_whatsapp",
    "rodape_instagram",
    "whatsapp_flutuante",
  ]) {
    assert.match(pageSource, new RegExp(content));
  }

  assert.doesNotMatch(pageSource, /href=\{whatsappUrl\}/);
});

test("static HTML exposes essential SEO metadata", () => {
  assert.match(html, /<html lang="pt-BR">/);
  assert.match(html, /<title>Painéis de LED em Santa Maria e RS \| LED Outdoor<\/title>/);
  assert.match(html, /name="description"/);
  assert.match(html, /name="robots" content="index, follow, max-image-preview:large"/);
  assert.match(html, /property="og:title"/);
  assert.match(html, /property="og:image" content="https:\/\/ledoutdor\.com\.br\/og-led-outdoor-v2\.webp"/);
  assert.match(html, /name="twitter:card" content="summary_large_image"/);
  assert.match(html, /rel="canonical" href="https:\/\/ledoutdor\.com\.br\/"/);
  assert.match(html, /type="application\/ld\+json"/);
  assert.match(html, /"@type": "Organization"/);
  assert.match(robots, /Sitemap: https:\/\/ledoutdor\.com\.br\/sitemap\.xml/);
  assert.match(sitemap, /<loc>https:\/\/ledoutdor\.com\.br\/<\/loc>/);
});

test("static HTML installs Google Tag Manager in head and body", () => {
  assert.match(html, /googletagmanager\.com\/gtm\.js\?id=/);
  assert.match(html, /googletagmanager\.com\/ns\.html\?id=GTM-NF5VR9SC/);
  assert.equal((html.match(/GTM-NF5VR9SC/g) ?? []).length, 2);
});

test("critical media stays within the static performance budget", async () => {
  const heroPoster = await stat(new URL("../public/media/hero-multi10.webp", import.meta.url));
  const logo = await stat(new URL("../public/media/led-outdoor-logo.webp", import.meta.url));
  const heroVideo = await stat(new URL("../public/media/hero-multi10.mp4", import.meta.url));
  const openGraphImage = await stat(new URL("../public/og-led-outdoor-v2.webp", import.meta.url));
  assert.ok(heroPoster.size < 200_000, `hero poster is ${heroPoster.size} bytes`);
  assert.ok(logo.size < 50_000, `logo is ${logo.size} bytes`);
  assert.ok(heroVideo.size < 3_500_000, `hero video is ${heroVideo.size} bytes`);
  assert.ok(openGraphImage.size < 200_000, `Open Graph image is ${openGraphImage.size} bytes`);
});
