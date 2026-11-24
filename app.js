/* Últimas publicações. O Instagram não deixa ler o feed só com HTML.
   Para mudar a faixa, edita este array. O primeiro item é o que aparece ao abrir. */
const NEWS = [
  {
    date: "20 Nov 2026",
    href: "https://www.instagram.com/reel/Df9wyljKFCX/",
    pt: "Ser fisioterapeuta é muito mais do que avaliar, diagnosticar e tratar.",
    en: "Being a physiotherapist is more than assessing, diagnosing and treating."
  },
  {
    date: "2 Nov 2026",
    href: "https://www.instagram.com/p/DfO9UGjijCh/",
    pt: "Campeonato nacional de Muay Thai 2026. Dois combates, duas vitórias.",
    en: "Portuguese Muay Thai nationals 2026. Two fights, two wins."
  },
  {
    date: "8 Set 2026",
    href: "https://www.instagram.com/p/DdCfoHZqOi8/",
    pt: "Dia Mundial da Fisioterapia. Do primeiro passo depois da lesão ao regresso ao treino.",
    en: "World Physiotherapy Day. From the first step after injury back to training."
  }
];

const DICT = {
  pt: {
    skip: "Saltar para o conteúdo",
    brandRole: "Fisioterapeuta",
    navWho: "Quem",
    navWork: "Fotos",
    navWhat: "O que faço",
    navHow: "Como",
    navPrice: "Preços",
    navWhere: "Onde",
    navContact: "Contacto",
    newsKicker: "Instagram",
    heroEye: "Desportos de combate · Lisboa",
    heroTitle: "Recuperação, performance e autonomia.",
    heroLede: "Ajudo-te a voltar a treinar, a prevenir a próxima lesão e a aguentar a carga da modalidade. No ringue e na vida.",
    heroAlt: "Rute Fonseca numa sessão de fisioterapia",
    altRing: "Rute Fonseca no ringue, no campeonato nacional de Muay Thai",
    capRing: "Campeonato nacional",
    workTitle: "No consultório e no treino",
    workLead: "Fotos e vídeos recentes do Instagram. O vídeo começa quando carregas em play.",
    altSession: "Rute Fonseca numa sessão de fisioterapia",
    altBoots: "Botas de compressão pneumática",
    altSpar: "Treino de Muay Thai no ringue",
    capSession: "Sessão de fisioterapia",
    capBoots: "Botas de compressão",
    capSpar: "Treino e competição",
    altPre: "Cartaz sobre a pré-época nos desportos de combate",
    capPre: "Pré-época",
    capV1: "Ser fisioterapeuta",
    capV2: "De volta à rotina",
    capV3: "Lições do treino: o clinch",
    ctaWa: "Falar no WhatsApp",
    ctaBook: "Marcar sessão",
    factSession: "cada sessão",
    factPrice: "gabinete, casa ou online",
    factPlace: "Lisboa · também domicílio",
    factRating: "Google · 23 avaliações",
    whoTitle: "Quem sou",
    whoLead: "Fisioterapeuta e atleta de Muay Thai. O plano sai da avaliação, não de um protocolo igual para toda a gente.",
    whoP1: "Sou fisioterapeuta, com licenciatura pela Escola Superior de Tecnologia da Saúde de Lisboa. Trabalho por conta própria em Lisboa desde 2019. Treino Muay Thai e, em 2026, disputei o campeonato nacional: dois combates, duas vitórias.",
    whoP2: "Essa combinação muda a sessão. Conheço a carga do treino, do clinch e da competição, e encaixo o tratamento na semana real — sem te mandar parar tudo, e sem te deixar treinar como se não houvesse dor.",
    whoP3: "Não sou massagista. A massagem pode fazer parte do plano, mas o trabalho começa na avaliação e acaba com ferramentas para continuares entre sessões.",
    whoA: "Atletas de manutenção, amadores e de competição",
    whoB: "Também dores do dia a dia: costas, pescoço, ombro",
    whoC: "Clubes: Dinamite Team, Privilégio Boxing Club, Fight Nation",
    whoD: "Português, inglês e espanhol",
    whatTitle: "O que faço",
    whatLead: "Três frentes. A mesma lógica em todas: perceber a origem, adaptar a carga e deixar-te a treinar com mais segurança.",
    s1t: "Recuperação de lesões",
    s1p: "Depois de uma lesão ou de uma cirurgia, o objetivo é o gesto da modalidade: golpe, clinch, luta, sparring. Na sessão vemos o que ainda podes fazer e o que tem de mudar, até ao regresso ao treino e à competição.",
    s2t: "Prevenção e manutenção",
    s2p: "Na pré-época e ao longo do ano olhamos para estabilidade, mobilidade e força — tornozelo, punho, ombro, core. Não é garantia de zero lesões. É mais margem para aguentar o volume da época.",
    s3t: "Performance",
    s3p: "Para quem já treina e quer mover-se melhor. Base estável, transferência de força, mobilidade onde o golpe precisa dela. O corpo tolera a modalidade em vez de a técnica cair com a fadiga.",
    bootsT: "Botas de compressão pneumática",
    bootsP: "Um complemento depois de treinos pesados, lutas, cirurgia ou semanas de muita carga. Ajudam a circulação e a sensação de pernas mais leves. Não substituem a avaliação nem o plano de regresso ao treino. Preço a combinar.",
    also: "Não treinas combate? Também acompanho dores e limitações do dia a dia, com o mesmo critério.",
    howTitle: "Como funciona",
    howLead: "Nada é receita. A primeira hora serve para perceber o teu caso, a modalidade e o que a semana de treino ainda aguenta.",
    h1t: "Avaliar",
    h1p: "O que dói, o que a modalidade exige, e o que ainda podes treinar esta semana.",
    h2t: "Adaptar",
    h2p: "Tratamento e exercício à medida. Ficas no ginásio no que é seguro, em vez de parar ou de insistir.",
    h3t: "Regressar",
    h3p: "Do técnico ao sparring, por critérios. O contacto volta quando o corpo está pronto, não quando o calendário manda.",
    h4t: "Continuar",
    h4p: "Levas um plano para entre sessões. Eu acompanho como te sentes até à próxima.",
    misLead: "Dois caminhos que atrasam a recuperação:",
    mis1t: "Treinar como se nada fosse",
    mis1p: "A dor acalma nuns dias e volta mais forte. O problema cresce em silêncio.",
    mis2t: "Parar tudo",
    mis2p: "A lesão desinflama, e com ela a forma, o timing e o condicionamento.",
    priceTitle: "Preços",
    priceLead: "Sessões de 60 minutos. A marcação fica pendente até eu confirmar. O pagamento é feito na página de reserva.",
    p1t: "Gabinete",
    p1p: "Sessão em consultório, em Sete Rios.",
    p2t: "Domicílio",
    p2p: "Vou a tua casa. O endereço indicas tu na marcação.",
    p3t: "Online",
    p3p: "Videochamada para plano, progressão e adaptação do treino.",
    book: "Reservar",
    whereTitle: "Onde",
    whereLead: "Consultório em Lisboa. Também vou a casa e trabalho online. Em Mafra, combina comigo.",
    directions: "Abrir no Google Maps",
    contactTitle: "WhatsApp",
    contactLead: "A mensagem abre no WhatsApp, no +351 910 465 285. Não fica guardada noutro sítio.",
    fName: "Nome",
    fNamePh: "O teu nome",
    fPhone: "Telemóvel",
    fService: "O que precisas",
    fMsg: "Mensagem",
    fMsgPh: "Modalidade, o que se passa, e quando treinas.",
    fSend: "Enviar no WhatsApp",
    footRole: "Fisioterapeuta · desportos de combate",
    services: ["Gabinete · 50 €", "Domicílio · 65 €", "Online · 35 €", "Botas de compressão", "Ainda não sei"],
    pageTitle: "Rute Fonseca · Fisioterapeuta de desportos de combate",
    waHello: "Olá Rute, sou"
  },
  en: {
    skip: "Skip to content",
    brandRole: "Physiotherapist",
    navWho: "Who",
    navWork: "Photos",
    navWhat: "What I do",
    navHow: "How",
    navPrice: "Prices",
    navWhere: "Where",
    navContact: "Contact",
    newsKicker: "Instagram",
    heroEye: "Combat sports · Lisbon",
    heroTitle: "Recovery, performance and autonomy.",
    heroLede: "I help you get back to training, lower the chance of the next injury, and handle the load of your sport. In the ring and in daily life.",
    heroAlt: "Rute Fonseca in a physiotherapy session",
    altRing: "Rute Fonseca in the ring at the Portuguese Muay Thai nationals",
    capRing: "National championship",
    workTitle: "In the clinic and in training",
    workLead: "Recent photos and videos from Instagram. Press play to start a video.",
    altSession: "Rute Fonseca in a physiotherapy session",
    altBoots: "Pneumatic compression boots",
    altSpar: "Muay Thai training in the ring",
    capSession: "Physiotherapy session",
    capBoots: "Compression boots",
    capSpar: "Training and competition",
    altPre: "Card about pre-season in combat sports",
    capPre: "Pre-season",
    capV1: "Being a physiotherapist",
    capV2: "Back to the routine",
    capV3: "Training notes: the clinch",
    ctaWa: "Message on WhatsApp",
    ctaBook: "Book a session",
    factSession: "every session",
    factPrice: "clinic, home or online",
    factPlace: "Lisbon · home visits too",
    factRating: "Google · 23 reviews",
    whoTitle: "Who I am",
    whoLead: "Physiotherapist and Muay Thai athlete. The plan comes from an assessment, not from the same protocol for everyone.",
    whoP1: "I am a physiotherapist, with a degree from the Lisbon School of Health Technology. I have worked independently in Lisbon since 2019. I train Muay Thai and, in 2026, fought at the national championships: two bouts, two wins.",
    whoP2: "That changes the session. I know the load of training, the clinch and competition, and I fit treatment into a real week — without telling you to stop everything, and without letting you train as if the pain were not there.",
    whoP3: "I am not a massage therapist. Massage can be part of the plan, but the work starts with an assessment and ends with tools you can use between sessions.",
    whoA: "Maintenance athletes, amateurs and competitors",
    whoB: "Everyday pain too: back, neck, shoulder",
    whoC: "Clubs: Dinamite Team, Privilégio Boxing Club, Fight Nation",
    whoD: "Portuguese, English and Spanish",
    whatTitle: "What I do",
    whatLead: "Three strands. The same logic in each: find the driver, adjust the load, and keep you training with more safety.",
    s1t: "Injury recovery",
    s1p: "After an injury or surgery, the goal is the movement your sport actually needs: the strike, the clinch, the roll, sparring. We sort what you can still do and what has to change, through to training and competition.",
    s2t: "Prevention and maintenance",
    s2p: "In pre-season and through the year we look at stability, mobility and strength — ankle, wrist, shoulder, core. This is not a promise of zero injuries. It is more room to tolerate the season's volume.",
    s3t: "Performance",
    s3p: "For people already training who want to move better. A stable base, force transfer, mobility where the strike needs it. The body tolerates the sport instead of technique falling apart when you get tired.",
    bootsT: "Pneumatic compression boots",
    bootsP: "An add-on after hard training, fights, surgery or heavy weeks. They support circulation and the feeling of lighter legs. They do not replace an assessment or the return-to-training plan. Price on request.",
    also: "You don't train combat sports? I also see everyday pain and limitations, with the same standard.",
    howTitle: "How it works",
    howLead: "Nothing is a template. The first hour is for your case, your sport, and what this week's training can still take.",
    h1t: "Assess",
    h1p: "What hurts, what the sport demands, and what you can still train this week.",
    h2t: "Adapt",
    h2p: "Treatment and exercise built for you. You stay in the gym where it is safe, instead of stopping or pushing through.",
    h3t: "Return",
    h3p: "From technical work to sparring, by criteria. Contact comes back when the body is ready, not when the calendar says so.",
    h4t: "Carry on",
    h4p: "You leave with a plan for between sessions. I check how you feel before the next one.",
    misLead: "Two paths that slow recovery:",
    mis1t: "Training as if nothing happened",
    mis1p: "The pain settles for a few days and comes back harder. The problem grows quietly.",
    mis2t: "Stopping everything",
    mis2p: "The injury calms down, and so do fitness, timing and conditioning.",
    priceTitle: "Prices",
    priceLead: "60-minute sessions. The booking stays pending until I confirm it. Payment is taken on the booking page.",
    p1t: "Clinic",
    p1p: "In the treatment room, in Sete Rios.",
    p2t: "Home visit",
    p2p: "I come to you. You add the address when you book.",
    p3t: "Online",
    p3p: "A video call for the plan, progression and training changes.",
    book: "Book",
    whereTitle: "Where",
    whereLead: "A treatment room in Lisbon. I also visit homes and work online. For Mafra, message me.",
    directions: "Open in Google Maps",
    contactTitle: "WhatsApp",
    contactLead: "The message opens in WhatsApp, on +351 910 465 285. It is not stored anywhere else.",
    fName: "Name",
    fNamePh: "Your name",
    fPhone: "Phone",
    fService: "What you need",
    fMsg: "Message",
    fMsgPh: "Your sport, what is going on, and when you train.",
    fSend: "Send on WhatsApp",
    footRole: "Physiotherapist · combat sports",
    services: ["Clinic · €50", "Home visit · €65", "Online · €35", "Compression boots", "Not sure yet"],
    pageTitle: "Rute Fonseca · Combat sports physiotherapist",
    waHello: "Hi Rute, I'm"
  }
};

let lang = localStorage.getItem("rf-lang") || "pt";
let newsIndex = 0;
let newsTimer;

function apply(next) {
  lang = next;
  localStorage.setItem("rf-lang", lang);
  const t = DICT[lang];
  document.documentElement.lang = lang === "pt" ? "pt" : "en";
  document.title = t.pageTitle;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = t[el.dataset.i18n];
    if (typeof value === "string") el.textContent = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t[el.dataset.i18nPlaceholder];
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const value = t[el.dataset.i18nAlt];
    if (typeof value === "string") el.alt = value;
  });
  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
  });
  const select = document.getElementById("service");
  const previous = select.selectedIndex;
  select.innerHTML = "";
  t.services.forEach((label, i) => {
    const option = document.createElement("option");
    option.value = label;
    option.textContent = label;
    if (i === previous) option.selected = true;
    select.appendChild(option);
  });
  renderNews();
}

function renderNews() {
  const item = NEWS[newsIndex];
  document.getElementById("news-date").textContent = item.date;
  document.getElementById("news-text").textContent = item[lang];
  document.getElementById("news-link").href = item.href;
  const dots = document.getElementById("news-dots");
  dots.innerHTML = "";
  NEWS.forEach((entry, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", entry.date);
    dot.setAttribute("aria-selected", String(i === newsIndex));
    dot.addEventListener("click", () => {
      newsIndex = i;
      renderNews();
      queueNews();
    });
    dots.appendChild(dot);
  });
}

function queueNews() {
  clearInterval(newsTimer);
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  newsTimer = setInterval(() => {
    newsIndex = (newsIndex + 1) % NEWS.length;
    renderNews();
  }, 7000);
}

document.querySelectorAll("[data-lang]").forEach((btn) => {
  btn.addEventListener("click", () => apply(btn.dataset.lang));
});

document.getElementById("wa-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const t = DICT[lang];
  const text = [
    `${t.waHello} ${data.get("name")}.`,
    data.get("service"),
    data.get("message"),
    data.get("phone")
  ].join("\n");
  window.open(`https://wa.me/351910465285?text=${encodeURIComponent(text)}`, "_blank", "noopener");
});

apply(lang === "en" ? "en" : "pt");
queueNews();
