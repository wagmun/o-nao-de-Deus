// Endereço do formulário Formspree (ex.: "https://formspree.io/f/abcdwxyz").
// Enquanto estiver vazio, o formulário mostra um aviso em vez de enviar.
const FORM_ENDPOINT = "";

const AMAZON_LINKS = {
  pt: "https://www.amazon.com.br/dp/B0GZHS3YHK",
  en: "https://www.amazon.com/dp/B0HS8GGMML",
};

const COVER_ASSETS = {
  pt: {
    src: "assets/capa-pt.jpg",
    alt: "Capa do livro O Não de Deus é o Espaço para Nossa Liberdade — Wagner Correa Munhê",
  },
  en: {
    src: "assets/capa-en.jpg",
    alt: "Book cover of God's No Is the Space for Our Freedom — Wagner Correa Munhê",
  },
};

const TRANSLATIONS = {
  pt: {
    page_title: "O Não de Deus é o Espaço para Nossa Liberdade — Wagner Correa Munhê",
    nav_about: "Sobre o ensaio",
    nav_sample: "Ler prévia",
    hero_eyebrow: "Jesus orou três vezes no Getsêmani. E a resposta foi não.",
    hero_title: 'O <span class="gold">Não</span> de Deus é o Espaço para Nossa <span class="gold">Liberdade</span>',
    hero_subtitle:
      "Um ensaio existencial breve e sem clichês sobre a oração, o silêncio divino e por que Deus não é um balconista de pedidos.",
    hero_rating: "★★★★★ 5,0 na Amazon",
    hero_format: "Leitura em uma sentada • Kindle & Kindle Unlimited",
    cta_amazon: "Ler na Amazon (Kindle / KU)",
    cta_sample: "Receber 1º trecho grátis",
    ku_note: "Disponível gratuitamente para assinantes do Kindle Unlimited ou para compra avulsa.",
    cover_title:
      'O <span class="gold">NÃO</span><br />DE DEUS<br /><span class="small-word">É</span><br />O ESPAÇO<br /><span class="small-word">PARA NOSSA</span><br /><span class="gold">LIBERDADE</span>',
    cover_sub: "UM ENSAIO EXISTENCIAL SOBRE O DIÁLOGO DIVINO E A LIBERDADE HUMANA",
    quote_text: "“E se o silêncio de Deus fosse, na verdade, a maior prova do respeito d’Ele pela sua autonomia?”",
    pillars_kicker: "A INVESTIGAÇÃO",
    pillars_title: "O que resta quando o “Não” parece ser a única palavra vinda do alto?",
    pillars_intro:
      "Muitos foram ensinados a encarar a oração como um balcão de pedidos: você entrega a lista e espera o atendimento. Quando o pedido falha, surgem a culpa (“faltou fé”) ou a revolta. Este ensaio propõe um outro olhar.",
    card1_title: "A oração não é mágica",
    card1_body:
      "Orar não é um controle remoto para dobrar a vontade divina. É um diálogo maduro onde o “Não” protege a nossa capacidade real de escolha.",
    card2_title: "O silêncio é um convite",
    card2_body:
      "No espaço deixado pela ausência de uma intervenção divina automática, nasce o terreno onde a responsabilidade e a liberdade humana florescem.",
    card3_title: "Deus não é um ditador de destinos",
    card3_body:
      "Mas Alguém que se retira o suficiente para que possamos existir, amar e decidir de verdade — sem virarmos peças em um roteiro pronto.",
    for_kicker: "PARA QUEM É ESTE ENSAIO",
    for_title: "Para quem prefere perguntas honestas a respostas fáceis.",
    for_intro:
      "Escrito como um ensaio conciso e direto — ideal para ler em uma única sentada e reler com calma quando o silêncio apertar.",
    aud_1:
      "<strong>Cristãos cansados de clichês:</strong> que já ouviram “faltou fé” em um momento de dor e buscam uma espiritualidade adulta.",
    aud_2:
      "<strong>Quem já orou e recebeu silêncio:</strong> e sente que há algo profundamente errado com a ideia de um “Deus balconista”.",
    aud_3:
      "<strong>Céticos e almas inquietas:</strong> que rejeitam caricaturas religiosas, mas se interessam por uma reflexão lúcida sobre existência, fé e liberdade.",
    sample_kicker: "PRÉVIA GRATUITA & CARTAS DO AUTOR",
    sample_title: "Leia a abertura e acompanhe novas reflexões por e-mail",
    sample_intro:
      "Deixe seu e-mail para ler agora o trecho de abertura e receber, de vez em quando, novos textos sobre fé, dúvida e liberdade. Sem spam.",
    form_label: "Seu melhor e-mail",
    form_btn: "Quero receber",
    form_placeholder: "seu@email.com",
    form_demo_msg: "O cadastro ainda não está ativo. Tente de novo em breve.",
    form_ok_msg: "Pronto, seu e-mail foi registrado. O trecho está logo ao lado.",
    form_err_msg: "Não foi possível registrar agora. Tente de novo em instantes.",
    excerpt_tag: "TRECHO DO LIVRO",
    excerpt_p1:
      "“O Não é a forma que Deus tem de nos manter como seres livres e potentes. É o véu que nos protege do colapso diante do infinito que é o próprio Deus.”",
    excerpt_p2:
      "Este livro nasceu de uma experiência difícil vivida há cinco anos, quando me perguntei: se Deus já conhece todas as minhas necessidades e só atende o que está de acordo com Sua vontade, por que então orar? Eu orei bastante, não fui atendido — e passei cinco anos investigando esse dilema.",
    excerpt_cta: "Continuar lendo na Amazon →",
    author_kicker: "SOBRE O AUTOR",
    author_bio:
      "Escritor e desenvolvedor, Wagner escreve sobre fé, oração e as perguntas silenciosas que tanto cristãos quanto céticos carregam. Partindo da oração não atendida no Getsêmani, ele investiga por que o “Não” de Deus pode ser exatamente o lugar onde a liberdade humana começa.",
    editions_kicker: "EDIÇÕES DISPONÍVEIS",
    footer_note: "O Não de Deus é o Espaço para Nossa Liberdade • God's No Is the Space for Our Freedom",
  },
  en: {
    page_title: "God's No Is the Space for Our Freedom — Wagner Correa Munhê",
    nav_about: "About the essay",
    nav_sample: "Read preview",
    hero_eyebrow: "Jesus prayed three times in Gethsemane. And the answer was no.",
    hero_title: 'God’s <span class="gold">No</span> Is the Space for Our <span class="gold">Freedom</span>',
    hero_subtitle:
      "A short, cliché-free existential essay on prayer, divine silence, and why God is not a cosmic vending machine.",
    hero_rating: "New English Edition on Amazon",
    hero_format: "One-sitting read • Kindle & Kindle Unlimited",
    cta_amazon: "Read on Amazon (Kindle / KU)",
    cta_sample: "Get free opening excerpt",
    ku_note: "Read free with Kindle Unlimited or purchase the Kindle edition directly.",
    cover_title:
      'GOD’S <span class="gold">NO</span><br /><span class="small-word">IS</span><br />THE SPACE<br /><span class="small-word">FOR OUR</span><br /><span class="gold">FREEDOM</span>',
    cover_sub: "AN EXISTENTIAL ESSAY ON DIVINE DIALOGUE AND HUMAN FREEDOM",
    quote_text: "“What if God’s silence were actually the greatest proof of His respect for your autonomy?”",
    pillars_kicker: "THE INQUIRY",
    pillars_title: "What remains when “No” seems to be the only word coming from above?",
    pillars_intro:
      "Many of us were taught to view prayer as a service counter for requests: hand over your list and wait for delivery. When it fails, guilt (“not enough faith”) or cynicism takes over. This essay opens a different door.",
    card1_title: "Prayer is not magic",
    card1_body:
      "Prayer isn't a remote control to bend God's will. It is a mature dialogue in which a “No” protects our genuine capacity to choose.",
    card2_title: "Silence is an invitation",
    card2_body:
      "In the space left by the absence of automatic divine intervention, true human freedom and responsibility finally have room to grow.",
    card3_title: "God is not a dictator of destinies",
    card3_body:
      "Rather, He is a God who steps back just enough for us to truly exist, love, and decide—not as puppets inside a rigged script.",
    for_kicker: "WHO THIS ESSAY IS FOR",
    for_title: "For minds that prefer honest questions over shallow answers.",
    for_intro:
      "Written as a concise, focused essay—designed to be read in a single sitting and reflected on whenever silence feels heavy.",
    aud_1:
      "<strong>Christians tired of clichés:</strong> who have been told “you lacked faith” during hard seasons and want an honest, adult spirituality.",
    aud_2:
      "<strong>Anyone who prayed and heard silence:</strong> and senses something is deeply broken about treating God like a store clerk.",
    aud_3:
      "<strong>Skeptics and restless thinkers:</strong> who reject religious caricatures, yet welcome a lucid inquiry into faith, doubt, and freedom.",
    sample_kicker: "FREE EXCERPT & AUTHOR LETTERS",
    sample_title: "Read the opening and receive quiet reflections by email",
    sample_intro:
      "Leave your email to read the opening excerpt right away and receive occasional new essays on faith, doubt, and freedom. No spam.",
    form_label: "Your email address",
    form_btn: "Send me the excerpt",
    form_placeholder: "you@email.com",
    form_demo_msg: "Sign-up is not active yet. Please try again soon.",
    form_ok_msg: "Done, your email is saved. The excerpt is right beside this form.",
    form_err_msg: "Could not save your email right now. Please try again shortly.",
    excerpt_tag: "FROM THE BOOK",
    excerpt_p1:
      "“No is God’s way of keeping us as free and powerful beings. It is the veil that protects us from collapse before the infinite that is God himself.”",
    excerpt_p2:
      "This book was born from a painful season five years ago, when I began asking: if God already knows everything I need and only grants what aligns with His will, why pray at all? I prayed hard, was not answered—and spent five years wrestling with that dilemma.",
    excerpt_cta: "Continue reading on Amazon →",
    author_kicker: "ABOUT THE AUTHOR",
    author_bio:
      "Writer and software developer Wagner Correa Munhê writes about faith, prayer, and the quiet questions both Christians and skeptics carry. Starting from Jesus' unanswered prayer in Gethsemane, he explores why God's “No” may be the very place where human freedom begins.",
    editions_kicker: "AVAILABLE EDITIONS",
    footer_note: "God's No Is the Space for Our Freedom • O Não de Deus é o Espaço para Nossa Liberdade",
  },
};

let currentLang = "pt";

function applyLanguage(lang) {
  currentLang = lang === "en" ? "en" : "pt";
  const dict = TRANSLATIONS[currentLang];

  document.documentElement.lang = currentLang === "en" ? "en" : "pt-BR";
  document.title = dict.page_title;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key]) el.innerHTML = dict[key];
  });

  const emailInput = document.getElementById("email-input");
  if (emailInput) emailInput.placeholder = dict.form_placeholder;

  const primaryCta = document.getElementById("primary-amazon-cta");
  const secondaryCta = document.getElementById("secondary-amazon-cta");
  if (primaryCta) primaryCta.href = AMAZON_LINKS[currentLang];
  if (secondaryCta) secondaryCta.href = AMAZON_LINKS[currentLang];

  const coverImg = document.getElementById("book-cover-img");
  if (coverImg) {
    coverImg.src = COVER_ASSETS[currentLang].src;
    coverImg.alt = COVER_ASSETS[currentLang].alt;
  }

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isActive = btn.getAttribute("data-lang") === currentLang;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });

  try {
    localStorage.setItem("book_site_lang", currentLang);
  } catch {
    // Ignore storage restrictions
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Detect URL param (?lang=en) or saved preference
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get("lang");
  let savedLang = null;
  try {
    savedLang = localStorage.getItem("book_site_lang");
  } catch {
    savedLang = null;
  }

  applyLanguage(urlLang || savedLang || "pt");

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      applyLanguage(btn.getAttribute("data-lang"));
    });
  });

  // Envio do e-mail para o Formspree sem sair da página
  const form = document.getElementById("lead-form");
  const feedback = document.getElementById("form-feedback");
  if (form && feedback) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const dict = TRANSLATIONS[currentLang];
      if (!FORM_ENDPOINT) {
        feedback.textContent = dict.form_demo_msg;
        return;
      }
      const button = form.querySelector("button");
      if (button) button.disabled = true;
      try {
        const data = new FormData(form);
        data.append("idioma", currentLang);
        data.append("origem", new URLSearchParams(window.location.search).get("utm_source") || "direto");
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        });
        if (!res.ok) throw new Error(String(res.status));
        form.reset();
        feedback.textContent = dict.form_ok_msg;
      } catch {
        feedback.textContent = dict.form_err_msg;
      } finally {
        if (button) button.disabled = false;
      }
    });
  }
});
