// --- Navegación ---
function entrarMenu() {
  document.querySelector("#inicio").classList.remove("active");
  document.querySelector("#menu").classList.add("active");
}

function volverInicio() {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.querySelector("#inicio").classList.add("active");
}

function abrirVentana(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  traducirVentana();
}

function volverMenu() {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.querySelector("#menu").classList.add("active");
  traducirVentana();
}

function volverPortafolio() {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById("portafolio").classList.add("active");
  traducirVentana();
}

// --- Galería ---
let videoIndex = 1;
function nextVideo() {
  videoIndex++;
  if (videoIndex > 27) videoIndex = 1;
  const video = document.getElementById("galleryVideo");
  video.src = `img/DJ${videoIndex}.mp4`;
  video.play();
}
function prevVideo() {
  videoIndex--;
  if (videoIndex < 1) videoIndex = 27;
  const video = document.getElementById("galleryVideo");
  video.src = `img/DJ${videoIndex}.mp4`;
  video.play();
}

// --- Traducción ---
let lang = "es";

const translations = {
  es: {
    portfolio: "Portafolio",
    gallery: "Galería",
    contact: "Contacto",
    back: "Volver al menú",
    send: "Enviar",

    portfolioText: `
    🎧 Escuchá en 
    <a href="https://open.spotify.com/artist/7axLvRbXb9P7M1rEaI6Epj" 
       target="_blank" class="neon-link">Spotify</a><br><br>
    Soy productor musical, beatmaker, DJ y técnico de sonido. 
    Trabajo en mixtapes, podcasts y sets en vivo entre Argentina y Brasil.
    Desarrollo proyectos de producción y mezcla, experimentando con estilos como 
    funk carioca, reggaetón y música electrónica, integrando también sonido en vivo 
    y diseño audiovisual.
    `,

    experienceTitle: "Experiencia",
    expButton: "👉 Ver experiencia",
    experienceTitle: "Experiencia",
expButton: "👉 Ver experiencia",
experienceText: `
<strong>Río de Janeiro (2023–2025)</strong><br>
• Producción técnica y de sonido en eventos independientes.<br>
• Producción y mezcla para artistas de funk carioca, reggaetón y estilos experimentales.<br>
• Operación de audio y soporte técnico con OBS Studio y DAWs.<br><br>

<strong>Córdoba, Argentina (2021–2023)</strong><br>
• Trabajo técnico y de edición en proyecto de streaming.<br>
• Configuración de cámaras, micrófonos, iluminación y sonido.<br>
• Operación de OBS Studio (escenas, fuentes, audio y overlays).<br><br>

<strong>Buenos Aires, Montevideo y Santiago (2019–2022)</strong><br>
• Producción de sonido y visuales en centros culturales y espacios independientes.<br>
• Proyectos que integran música electrónica, performance y arte visual.<br><br>

<strong>Competencias Técnicas</strong><br><br>

<strong>Audio y Producción Musical</strong><br>
• DAWs: Ableton Live, FL Studio.<br>
• Creación de beats, grabación, mezcla y masterización.<br>
• Diseño sonoro y manipulación de samples.<br><br>

<strong>Producción y Streaming</strong><br>
• Operación de OBS Studio y soporte para streamers y artistas.<br>
• Montaje de setups audiovisuales (audio, video, iluminación).<br><br>

<strong>Diseño y Escenografía</strong><br>
• Photoshop, Illustrator, Gimp, Corel Draw, SAI Paint, Inkscape.<br>
• Creación visual y pintura digital/manual.
`,

    namePlaceholder: "Tu nombre",
    emailPlaceholder: "Tu correo",
    messagePlaceholder: "Tu mensaje",
  },

  en: {
    portfolio: "Portfolio",
    gallery: "Gallery",
    contact: "Contact",
    back: "Back to menu",
    send: "Send",

    portfolioText: `
    🎧 Listen on 
    <a href="https://open.spotify.com/artist/7axLvRbXb9P7M1rEaI6Epj" 
       target="_blank" class="neon-link">Spotify</a><br><br>
    I’m a music producer, beatmaker, DJ and sound technician. 
    I work on mixtapes, podcasts, and live sets between Argentina and Brazil.
    I develop production and mixing projects, experimenting with funk carioca, reggaeton, and electronic music, 
    integrating live sound and audiovisual design.
    `,

    experienceTitle: "Experience",
expButton: "👉 View experience",
experienceText: `
<strong>Rio de Janeiro (2023–2025)</strong><br>
• Technical and sound production for independent events.<br>
• Production and mixing for funk carioca, reggaeton, and experimental artists.<br>
• Audio operation and technical support using OBS Studio and DAWs.<br><br>

<strong>Córdoba, Argentina (2021–2023)</strong><br>
• Technical and editing work in a streaming project.<br>
• Configuration of cameras, microphones, lighting, and sound.<br>
• Operation of OBS Studio (scenes, sources, audio, overlays).<br><br>

<strong>Buenos Aires, Montevideo, and Santiago (2019–2022)</strong><br>
• Sound and visual production in cultural centers and independent spaces.<br>
• Projects integrating electronic music, performance, and visual arts.<br><br>

<strong>Technical Skills</strong><br><br>

<strong>Audio and Music Production</strong><br>
• DAWs: Ableton Live, FL Studio.<br>
• Beat creation, recording, mixing, and mastering.<br>
• Sound design and sample manipulation.<br><br>

<strong>Production and Streaming</strong><br>
• Operation of OBS Studio and support for streamers and artists.<br>
• Setup assembly for audiovisual environments (audio, video, lighting).<br><br>

<strong>Design and Scenography</strong><br>
• Photoshop, Illustrator, Gimp, Corel Draw, SAI Paint, Inkscape.<br>
• Visual creation and digital/manual painting.
`,

    namePlaceholder: "Your name",
    emailPlaceholder: "Your email",
    messagePlaceholder: "Your message",
  },

  pt: {
    portfolio: "Portfólio",
    gallery: "Galeria",
    contact: "Contato",
    back: "Voltar ao menu",
    send: "Enviar",

    portfolioText: `
    🎧 Ouça no 
    <a href="https://open.spotify.com/artist/7axLvRbXb9P7M1rEaI6Epj" 
       target="_blank" class="neon-link">Spotify</a><br><br>
    Sou produtor musical, beatmaker, DJ e técnico de som. 
    Trabalho com mixtapes, podcasts e sets ao vivo entre Argentina e Brasil.
    Desenvolvo projetos de produção e mixagem, experimentando com estilos como 
    funk carioca, reggaeton e música eletrônica, integrando também som ao vivo 
    e design audiovisual.
    `,

    experienceTitle: "Experiência",
expButton: "👉 Ver experiência",
experienceText: `
<strong>Rio de Janeiro (2023–2025)</strong><br>
• Produção técnica e de som em eventos independentes.<br>
• Produção e mixagem para artistas de funk carioca, reggaeton e estilos experimentais.<br>
• Operação de áudio e suporte técnico com OBS Studio e DAWs.<br><br>

<strong>Córdoba, Argentina (2021–2023)</strong><br>
• Trabalho técnico e de edição em projeto de streaming.<br>
• Configuração de câmeras, microfones, iluminação e som.<br>
• Operação do OBS Studio (cenas, fontes, áudio e overlays).<br><br>

<strong>Buenos Aires, Montevidéu e Santiago (2019–2022)</strong><br>
• Produção de som e visuais em centros culturais e espaços independentes.<br>
• Projetos que integram música eletrônica, performance e arte visual.<br><br>

<strong>Competências Técnicas</strong><br><br>

<strong>Áudio e Produção Musical</strong><br>
• DAWs: Ableton Live, FL Studio.<br>
• Criação de beats, gravação, mixagem e masterização.<br>
• Design sonoro e manipulação de samples.<br><br>

<strong>Produção e Streaming</strong><br>
• Operação do OBS Studio e suporte para streamers e artistas.<br>
• Montagem de setups audiovisuais (áudio, vídeo, iluminação).<br><br>

<strong>Design e Cenografia</strong><br>
• Photoshop, Illustrator, Gimp, Corel Draw, SAI Paint, Inkscape.<br>
• Criação visual e pintura digital/manual.
`,

    namePlaceholder: "Seu nome",
    emailPlaceholder: "Seu e-mail",
    messagePlaceholder: "Sua mensagem",
  },
};

function toggleLanguageMenu() {
  document.getElementById("languageMenu").classList.toggle("active");
}

function setLanguage(selectedLang) {
  lang = selectedLang;
  document.getElementById("languageMenu").classList.remove("active");
  traducirVentana();
}

// --- Traducción de las secciones visibles ---
function traducirVentana() {
  const visible = document.querySelector(".screen.active[data-translatable='true']");
  if (!visible) return;

  visible.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      if (el.tagName === "P" || el.tagName === "DIV") {
        el.innerHTML = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  visible.querySelectorAll("[data-placeholder]").forEach(el => {
    const key = el.getAttribute("data-placeholder");
    if (translations[lang][key]) el.placeholder = translations[lang][key];
  });
}
