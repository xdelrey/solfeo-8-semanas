const weeks = [
  {
    number: 1,
    title: "Orientacion en Do mayor",
    goal: "Leer notas sin bloqueo y empezar a oir la escala mayor por dentro.",
    badge: "Do mayor · ritmo simple",
    days: [
      ["Clave de sol: do-re-mi-fa-sol.", "Negras y blancas con pulso lento.", "Canta mentalmente 1-2-3-2-1."],
      ["Notas alrededor del pentagrama.", "Silencios de negra y blanca.", "Mmm suave: do-re-mi-fa-sol-fa-mi-re-do."],
      ["Lectura cronometrada de 20 notas.", "Compas 4/4 con dedos.", "Escala mayor completa mental."],
      ["Repaso de notas dificiles.", "Corcheas por pares.", "Frases de 3 notas por grados conjuntos."],
      ["Mezcla do-sol-do agudo.", "Pulso constante 60 bpm.", "Melodia de 4 compases por pasos."],
      ["Mini test de lectura.", "Habla ritmo sin sonido.", "Canta mentalmente y comprueba al final."],
      ["Prueba semanal.", "Repite el peor patron.", "Anota 1 ajuste para la semana 2."]
    ]
  },
  {
    number: 2,
    title: "Pulso estable y escala completa",
    goal: "Mantener el pulso mientras lees y cantas melodias muy sencillas.",
    badge: "Do mayor · 4/4 y 3/4",
    days: [
      ["Escala ascendente y descendente.", "3/4: fuerte-suave-suave.", "Melodia de 4 compases sin parar."],
      ["Lectura alternando grave/agudo.", "Negras, blancas y corcheas.", "Grados 1-3-2-4-3-5."],
      ["Reconoce tónica y dominante.", "Marca pulso con pie silencioso.", "Mmm suave en frases cortas."],
      ["Lectura de 30 notas.", "Ritmos con silencios.", "Canta mentalmente antes de revisar."],
      ["Patrones do-re-mi y mi-fa-sol.", "Compas 2/4.", "Primera vista de 4 compases."],
      ["Repaso acumulado.", "Ritmo a 66 bpm.", "Repite solo los saltos inseguros."],
      ["Prueba semanal.", "Puntua notas, ritmo y pulso.", "Decide si subes a Sol mayor."]
    ]
  },
  {
    number: 3,
    title: "Sol mayor y grados conjuntos",
    goal: "Cambiar de tonalidad sin perder la sensacion de casa.",
    badge: "Sol mayor · fa sostenido",
    days: [
      ["Armadura de Sol mayor.", "Escala de Sol por grados.", "Oye 1-2-3-4-5 en Sol."],
      ["Lectura con fa sostenido.", "Ritmos conocidos.", "Melodia nueva de 4 compases."],
      ["Compara Do y Sol.", "Pulso a 66-72 bpm.", "Finales 2-1 y 7-1."],
      ["Lectura rapida en Sol.", "Silencios sin perder pulso.", "Mmm suave con frases descendentes."],
      ["Secuencias sol-la-si, la-si-do.", "Ritmo 3/4.", "Canta mentalmente y verifica."],
      ["Mezcla Do/Sol.", "Ritmo hablado mentalmente.", "Primera vista facil."],
      ["Prueba semanal.", "Melodia en Sol.", "Anota si el fa sostenido aparece tarde."]
    ]
  },
  {
    number: 4,
    title: "Fa mayor y lectura flexible",
    goal: "Leer con una armadura nueva y consolidar el pulso en melodias faciles.",
    badge: "Fa mayor · si bemol",
    days: [
      ["Armadura de Fa mayor.", "Escala de Fa por grados.", "Oye 1-2-3-4-5 en Fa."],
      ["Lectura con si bemol.", "4/4 con corcheas.", "Melodia nueva de 4 compases."],
      ["Compara Do, Sol y Fa.", "Pulso a 72 bpm.", "Finales 5-1 y 2-1."],
      ["Lectura rapida en Fa.", "Silencios de negra.", "Frases descendentes 5-4-3-2-1."],
      ["Secuencias fa-sol-la.", "Ritmo 3/4.", "Canta mentalmente sin revisar nota a nota."],
      ["Mezcla Do/Sol/Fa.", "Ritmo a primera vista.", "Melodia de 6 compases."],
      ["Prueba semanal.", "Melodia en Fa.", "Puntua seguridad antes de exactitud."]
    ]
  },
  {
    number: 5,
    title: "Saltos de tercera",
    goal: "Dejar de depender solo de notas vecinas y cantar terceras dentro de la tonalidad.",
    badge: "3as · arpegio I",
    days: [
      ["Do-mi, re-fa, mi-sol.", "Ritmo simple.", "Canta 1-3-2-4-3-5."],
      ["Arpegio I: 1-3-5-3-1.", "Pulso 72 bpm.", "Melodia con terceras."],
      ["Lectura de saltos visuales.", "Corcheas por pares.", "Mmm suave: do-mi-sol-mi-do."],
      ["Terceras descendentes.", "Ritmo con silencios.", "Primera vista de 6 compases."],
      ["Mezcla pasos y terceras.", "3/4 estable.", "Verifica solo al final."],
      ["Repaso en Do, Sol y Fa.", "Ritmo hablado mentalmente.", "Anota terceras que fallan."],
      ["Prueba semanal.", "Melodia con terceras.", "Repite una vez corrigiendo."]
    ]
  },
  {
    number: 6,
    title: "Quintas y dominante",
    goal: "Cantar saltos de quinta y reconocer la dominante como punto de tension.",
    badge: "5as · arpegio V",
    days: [
      ["Do-sol y sol-do.", "Pulso 72 bpm.", "Oye 1-5-1."],
      ["Arpegio V: 5-7-2.", "Ritmos conocidos.", "Finales 5-1 y 7-1."],
      ["Saltos ascendentes de quinta.", "Corcheas lentas.", "Melodia con 1 salto grande."],
      ["Saltos descendentes.", "Silencios sin mover el tempo.", "Mmm suave: 5-3-1."],
      ["Terceras + quintas.", "3/4 y 4/4.", "Primera vista de 6-8 compases."],
      ["Repaso Do/Sol/Fa.", "Ritmo a 76 bpm.", "Comprueba saltos al final."],
      ["Prueba semanal.", "Melodia con quinta.", "Puntua pulso y recuperacion."]
    ]
  },
  {
    number: 7,
    title: "Primera vista facil",
    goal: "Mirar una melodía breve, prepararla en silencio y cantarla sin parar.",
    badge: "4-8 compases",
    days: [
      ["Preparacion de 60 segundos.", "Detecta punto alto y final.", "Canta sin detenerte."],
      ["Lectura de patron ritmico.", "Pulso 76 bpm.", "Melodia nueva en Do."],
      ["Preparacion silenciosa.", "Marca respiraciones.", "Melodia nueva en Sol."],
      ["Preparacion silenciosa.", "Busca saltos.", "Melodia nueva en Fa."],
      ["Repite tonalidad dificil.", "Ritmo primero, notas despues.", "Canta mentalmente una vez."],
      ["Dos melodias cortas.", "Sin revisar entre notas.", "Anota error principal."],
      ["Prueba semanal.", "Una sola toma.", "Repite y compara sensacion."]
    ]
  },
  {
    number: 8,
    title: "Consolidacion inicial",
    goal: "Llegar a una lectura cantada funcional en melodias sencillas.",
    badge: "Simulacro semanal",
    days: [
      ["Melodia nueva 4 compases.", "30 segundos de mirada.", "Canta y revisa."],
      ["Melodia nueva 6 compases.", "Detecta tonalidad.", "Canta con mmm suave."],
      ["Melodia nueva 8 compases.", "Ritmo antes que notas.", "No pares si fallas."],
      ["Repaso del peor patron.", "Pulso 76-80 bpm.", "Repite una melodia antigua."],
      ["Melodia con terceras.", "Preparacion de 45 segundos.", "Verifica al final."],
      ["Melodia con quinta.", "Respira por frases.", "Anota seguridad 1-5."],
      ["Prueba de cierre.", "8 compases nuevos.", "Define siguiente foco: ritmo, notas o saltos."]
    ]
  }
];

const dayNames = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
const calendar = document.querySelector("#calendar");
const buttons = document.querySelectorAll(".week-button");
const todayButton = document.querySelector("#today-button");
const loadDayButton = document.querySelector("#load-day-button");
const nextDayButton = document.querySelector("#next-day-button");
const planDayInput = document.querySelector("#plan-day");
const dailySession = document.querySelector("#daily-session");
const tonightSubtitle = document.querySelector("#tonight-subtitle");
const startScreen = document.querySelector("#start-screen");
const appView = document.querySelector("#app-view");

const planStartStorageKey = "solfeo-plan-start-date";
const currentDayStorageKey = "solfeo-current-day";

function storageGet(key) {
  try {
    return window.localStorage.getItem(key);
  } catch (error) {
    return null;
  }
}

function storageSet(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch (error) {
    return false;
  }

  return true;
}

const tools = {
  reading: "musictheory.net o Complete Music Trainer",
  rhythm: "teoria.com, Complete Rhythm Trainer o metronomo bajo",
  ear: "Functional Ear Trainer o Complete Ear Trainer",
  voice: "sin app: audiacion, mmm suave y comprobacion final",
  log: "libreta o nota rapida del movil"
};

const sessionTemplate = [
  {
    time: "23:00-23:05",
    title: "Entrar en modo noche",
    tool: "sin app",
    detail: "Respira lento, relaja mandibula y marca pulso con dedos. No cantes todavia."
  },
  {
    time: "23:05-23:15",
    title: "Lectura de notas",
    tool: tools.reading,
    detail: "Haz reconocimiento rapido en clave de sol. Di el nombre mentalmente, sin buscar afinacion."
  },
  {
    time: "23:15-23:25",
    title: "Ritmo",
    tool: tools.rhythm,
    detail: "Marca pulso con dedo o pierna. Lee el ritmo por dentro con ta, sin golpear fuerte."
  },
  {
    time: "23:25-23:35",
    title: "Oido tonal",
    tool: tools.ear,
    detail: "Trabaja grados. Preguntate siempre si la nota descansa, sube tension o pide resolver."
  },
  {
    time: "23:35-23:50",
    title: "Solfeo cantado bajo",
    tool: tools.voice,
    detail: "Canta mentalmente o con mmm casi inaudible. Revisa solo al final para no depender de la app."
  },
  {
    time: "23:50-23:57",
    title: "Primera vista",
    tool: tools.reading,
    detail: "Mira la melodia, detecta tonalidad y punto alto, y recorre la linea sin detenerte."
  },
  {
    time: "23:57-00:00",
    title: "Cierre",
    tool: tools.log,
    detail: "Escribe una frase: fallo principal, acierto principal y foco de manana."
  }
];

function renderCalendar(selectedWeek = "all") {
  calendar.innerHTML = "";

  weeks
    .filter((week) => selectedWeek === "all" || String(week.number) === selectedWeek)
    .forEach((week) => {
      const section = document.createElement("article");
      section.className = "week";
      section.dataset.week = week.number;

      section.innerHTML = `
        <div class="week-header">
          <div>
            <p class="eyebrow">Semana ${week.number}</p>
            <h2>${week.title}</h2>
            <p class="week-goal">${week.goal}</p>
          </div>
          <span class="badge">${week.badge}</span>
        </div>
        <div class="days">
          ${week.days
            .map(
              (items, index) => `
                <article class="day-card">
                  <h3>${dayNames[index]}</h3>
                  <ul>
                    ${items.map((item) => `<li>${item}</li>`).join("")}
                  </ul>
                  <div class="quiet">Modo noche: mental o mmm muy suave.</div>
                </article>
              `
            )
            .join("")}
        </div>
      `;

      calendar.appendChild(section);
    });
}

function clampDay(day) {
  const parsed = Number.parseInt(day, 10);
  if (Number.isNaN(parsed)) return 1;
  return Math.min(56, Math.max(1, parsed));
}

function getTodayPlanDay() {
  const savedCurrentDay = storageGet(currentDayStorageKey);
  if (savedCurrentDay) return clampDay(savedCurrentDay);

  const today = new Date();
  const todayIso = today.toISOString().slice(0, 10);
  let startIso = storageGet(planStartStorageKey);

  if (!startIso) {
    startIso = todayIso;
    storageSet(planStartStorageKey, startIso);
  }

  const startDate = new Date(`${startIso}T00:00:00`);
  const currentDate = new Date(`${todayIso}T00:00:00`);
  const diffDays = Math.floor((currentDate - startDate) / 86400000);
  return clampDay(diffDays + 1);
}

function getPlanInfo(day) {
  const safeDay = clampDay(day);
  const weekIndex = Math.floor((safeDay - 1) / 7);
  const dayIndex = (safeDay - 1) % 7;
  const week = weeks[weekIndex];
  return {
    planDay: safeDay,
    week,
    dayName: dayNames[dayIndex],
    focusItems: week.days[dayIndex]
  };
}

function buildDailySteps(focusItems) {
  return sessionTemplate.map((step, index) => {
    const focus = focusItems[index % focusItems.length];
    return {
      ...step,
      detail: `${step.detail} Foco de hoy: ${focus}`
    };
  });
}

function renderDailySession(day) {
  const info = getPlanInfo(day);
  const steps = buildDailySteps(info.focusItems);

  planDayInput.value = info.planDay;
  storageSet(currentDayStorageKey, String(info.planDay));

  tonightSubtitle.textContent = `Dia ${info.planDay} del plan: ${info.dayName}, semana ${info.week.number}. ${info.week.goal}`;

  dailySession.innerHTML = `
    <div class="session-summary">
      <div>
        <p class="eyebrow">Dia ${info.planDay} · ${info.dayName}</p>
        <h3>Semana ${info.week.number}: ${info.week.title}</h3>
        <p>${info.focusItems.join(" ")}</p>
      </div>
      <div class="session-meta">
        <span>${info.week.badge}</span>
        <span>23:00-00:00</span>
        <span>voz baja</span>
      </div>
    </div>
    <div class="session-steps">
      ${steps
        .map(
          (step) => `
            <article class="session-step">
              <div class="step-time">${step.time}</div>
              <div class="step-main">
                <strong>${step.title}</strong>
                <span>${step.detail}</span>
              </div>
              <div class="step-tool">${step.tool}</div>
            </article>
          `
        )
        .join("")}
    </div>
    <div class="session-note">
      Regla de noche: no susurres. Usa audiacion o mmm muy suave; si necesitas comprobar una nota, hazlo una vez y vuelve al ejercicio.
    </div>
  `;
}

function showApp(day = getTodayPlanDay()) {
  renderDailySession(day);
  startScreen.classList.add("is-hidden");
  appView.classList.remove("is-hidden");
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderCalendar(button.dataset.week);
  });
});

todayButton.addEventListener("click", () => {
  showApp();
});

loadDayButton.addEventListener("click", () => {
  renderDailySession(planDayInput.value);
});

nextDayButton.addEventListener("click", () => {
  renderDailySession(clampDay(planDayInput.value) + 1);
});

renderCalendar();
window.solfeoAppLoaded = true;
