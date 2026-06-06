const EARMASTER_URL = "https://www.earmaster.com/";
const TOTAL_DAYS = 56;

const concepts = {
  audiacion: "Audiación es oír la música por dentro antes de cantarla. Es el entrenamiento central cuando practicas en voz baja.",
  grados: "Los grados son los números de la escala: 1 es la tónica, 5 suele crear estabilidad fuerte y 7 pide resolver.",
  tonica: "La tónica es la nota de reposo. En Do mayor, la tónica es do.",
  dominante: "La dominante es el grado 5. Suele crear tensión estable que quiere volver a la tónica.",
  primeraVista: "Primera vista significa cantar una melodía nueva sin estudiarla antes. Preparas poco y no te detienes.",
  mmm: "El mmm suave entrena afinación sin cantar alto. No susurres: el susurro no fija altura.",
  earmaster: "En la pantalla inicial de EarMaster, entra por Curso para Principiantes. Durante estas semanas evita Talleres, repertorio y Ejercicios personalizados."
};

const weeks = [
  {
    title: "Orientación en Do mayor",
    badge: "Do mayor",
    goal: "Leer sin bloqueo y sentir la escala mayor.",
    days: [
      "Notas do-re-mi-fa-sol y pulso lento.",
      "Notas alrededor del pentagrama y silencios básicos.",
      "Escala mayor completa con audiación.",
      "Repaso de notas difíciles y corcheas por pares.",
      "Patrones do-re-mi y mi-fa-sol.",
      "Mini test de lectura sin detenerte.",
      "Prueba semanal: melodía de 4 compases."
    ]
  },
  {
    title: "Pulso estable",
    badge: "4/4 y 3/4",
    goal: "Mantener el pulso mientras lees y cantas.",
    days: [
      "Escala ascendente y descendente.",
      "Lectura alternando grave y agudo.",
      "Tónica y dominante en Do mayor.",
      "Ritmos con silencios.",
      "Compás 2/4 y melodía de 4 compases.",
      "Repaso acumulado a tempo lento.",
      "Prueba semanal: notas, ritmo y pulso."
    ]
  },
  {
    title: "Sol mayor",
    badge: "Fa sostenido",
    goal: "Cambiar de tonalidad sin perder la sensación de casa.",
    days: [
      "Armadura de Sol mayor.",
      "Lectura con fa sostenido.",
      "Finales 2-1 y 7-1.",
      "Frases descendentes en Sol.",
      "Secuencias sol-la-si y la-si-do.",
      "Mezcla Do y Sol.",
      "Prueba semanal: melodía en Sol."
    ]
  },
  {
    title: "Fa mayor",
    badge: "Si bemol",
    goal: "Leer con una armadura nueva y seguir cantando con pulso.",
    days: [
      "Armadura de Fa mayor.",
      "Lectura con si bemol.",
      "Finales 5-1 y 2-1.",
      "Frases descendentes 5-4-3-2-1.",
      "Secuencias fa-sol-la.",
      "Mezcla Do, Sol y Fa.",
      "Prueba semanal: melodía en Fa."
    ]
  },
  {
    title: "Terceras",
    badge: "Arpegio I",
    goal: "Cantar saltos pequeños sin depender solo de notas vecinas.",
    days: [
      "Saltos do-mi, re-fa y mi-sol.",
      "Arpegio 1-3-5-3-1.",
      "Lectura visual de terceras.",
      "Terceras descendentes.",
      "Mezcla pasos y terceras.",
      "Repaso en Do, Sol y Fa.",
      "Prueba semanal: melodía con terceras."
    ]
  },
  {
    title: "Quintas",
    badge: "Arpegio V",
    goal: "Cantar saltos de quinta y reconocer la dominante.",
    days: [
      "Saltos do-sol y sol-do.",
      "Dominante 5-7-2.",
      "Quintas ascendentes.",
      "Quintas descendentes.",
      "Terceras y quintas mezcladas.",
      "Repaso de saltos a 76 bpm.",
      "Prueba semanal: melodía con quinta."
    ]
  },
  {
    title: "Primera vista",
    badge: "4-8 compases",
    goal: "Preparar poco y cantar sin parar.",
    days: [
      "Preparación de 60 segundos.",
      "Patrón rítmico antes de notas.",
      "Melodía nueva en Do.",
      "Melodía nueva en Sol.",
      "Melodía nueva en Fa.",
      "Dos melodías cortas.",
      "Prueba semanal: una sola toma."
    ]
  },
  {
    title: "Consolidación inicial",
    badge: "Simulacro",
    goal: "Llegar a una lectura cantada funcional.",
    days: [
      "Melodía nueva de 4 compases.",
      "Melodía nueva de 6 compases.",
      "Melodía nueva de 8 compases.",
      "Repaso del peor patrón.",
      "Melodía con terceras.",
      "Melodía con quinta.",
      "Prueba de cierre: 8 compases nuevos."
    ]
  }
];

const sessionTemplate = [
  {
    time: "23:00",
    duration: "5 min",
    title: "Prepara",
    text: "Respira, suelta mandíbula y marca pulso con dedos. Entra en modo noche.",
    concepts: ["mmm"]
  },
  {
    time: "23:05",
    duration: "10 min",
    title: "Lee",
    text: "En EarMaster, toca Curso para Principiantes y empieza la primera lección disponible. Marca pulso antes de responder.",
    tool: true,
    route: "Curso para Principiantes → primera lección disponible",
    usesFocus: true,
    concepts: ["earmaster", "grados"]
  },
  {
    time: "23:15",
    duration: "10 min",
    title: "Escucha",
    text: "Sigue la lección de Principiantes. Atiende a reposo y tensión; no abras otros talleres.",
    tool: true,
    route: "Curso para Principiantes → continuar lección actual",
    concepts: ["earmaster", "tonica", "dominante"]
  },
  {
    time: "23:25",
    duration: "15 min",
    title: "Canta",
    text: "Sigue la misma lección. Si pide cantar, usa mmm suave o audiación cuando necesites practicar bajo.",
    tool: true,
    route: "Curso para Principiantes → continuar lección actual",
    usesFocus: true,
    concepts: ["earmaster", "audiacion", "mmm"]
  },
  {
    time: "23:40",
    duration: "12 min",
    title: "Repite",
    text: "Repite la parte que EarMaster marque como fallo. Si no hay repetición, repite el último ejercicio.",
    tool: true,
    route: "Curso para Principiantes → repetir o continuar",
    concepts: ["earmaster", "grados"]
  },
  {
    time: "23:52",
    duration: "5 min",
    title: "Primera vista",
    text: "Haz una toma sin parar dentro de la lección activa. Mira, respira y sigue aunque falles.",
    tool: true,
    route: "Curso para Principiantes → continuar lección actual",
    usesFocus: true,
    concepts: ["earmaster", "primeraVista"]
  },
  {
    time: "23:57",
    duration: "3 min",
    title: "Cierra",
    text: "Anota un fallo, un acierto y el foco de mañana. Después marca la sesión como hecha."
  }
];

const dayNames = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
const currentDayStorageKey = "solfeo-current-day";

const startButton = document.querySelector("#start-button");
const startScreen = document.querySelector("#start-screen");
const appView = document.querySelector("#app-view");
const lessonKicker = document.querySelector("#lesson-kicker");
const lessonTitle = document.querySelector("#lesson-title");
const lessonFocus = document.querySelector("#lesson-focus");
const weekLabel = document.querySelector("#week-label");
const progressFill = document.querySelector("#progress-fill");
const lessonSteps = document.querySelector("#lesson-steps");
const completeButton = document.querySelector("#complete-button");
const doneMessage = document.querySelector("#done-message");
const planDayInput = document.querySelector("#plan-day");
const loadDayButton = document.querySelector("#load-day-button");
const calendar = document.querySelector("#calendar");

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
    return true;
  } catch (error) {
    return false;
  }
}

function clampDay(day) {
  const parsed = Number.parseInt(day, 10);
  if (Number.isNaN(parsed)) return 1;
  return Math.min(TOTAL_DAYS, Math.max(1, parsed));
}

function getCurrentDay() {
  return clampDay(storageGet(currentDayStorageKey) || 1);
}

function getPlanInfo(day) {
  const safeDay = clampDay(day);
  const weekIndex = Math.floor((safeDay - 1) / 7);
  const dayIndex = (safeDay - 1) % 7;
  const week = weeks[weekIndex];

  return {
    day: safeDay,
    week,
    weekNumber: weekIndex + 1,
    dayName: dayNames[dayIndex],
    dailyFocus: week.days[dayIndex]
  };
}

function renderInfoButtons(conceptKeys = []) {
  return conceptKeys
    .map((key) => {
      const text = concepts[key];
      if (!text) return "";

      return `
        <span class="info-wrap">
          <button class="info-button" type="button" aria-label="Más información" aria-expanded="false">(i)</button>
          <span class="tooltip-text" role="tooltip">${text}</span>
        </span>
      `;
    })
    .join("");
}

function renderToolLink(step) {
  if (!step.tool) return "";

  return `
    <div class="tool-box">
      <a class="tool-link" href="${EARMASTER_URL}" target="_blank" rel="noreferrer">Abrir EarMaster</a>
      <span class="tool-route">Ruta: ${step.route}</span>
    </div>
  `;
}

function renderLesson(day) {
  const info = getPlanInfo(day);
  const progress = Math.round((info.day / TOTAL_DAYS) * 100);

  planDayInput.value = info.day;
  lessonKicker.textContent = `Día ${info.day} de ${TOTAL_DAYS} · ${info.dayName}`;
  lessonTitle.textContent = `Semana ${info.weekNumber}: ${info.week.title}`;
  lessonFocus.textContent = `${info.week.goal} Foco de hoy: ${info.dailyFocus}`;
  weekLabel.textContent = `${info.week.badge} · ${progress}%`;
  progressFill.style.width = `${progress}%`;
  doneMessage.textContent = "Marca la sesión como hecha para dejar preparado el próximo día.";

  lessonSteps.innerHTML = sessionTemplate
    .map((step) => {
      const text = step.usesFocus ? `${step.text} Foco: ${info.dailyFocus}` : step.text;

      return `
        <article class="step-card">
          <div class="step-time">${step.time}<br><span>${step.duration}</span></div>
          <div class="step-copy">
            <div class="step-title-row">
              <h3>${step.title}</h3>
              ${renderInfoButtons(step.concepts)}
            </div>
            <p>${text}</p>
          </div>
          ${renderToolLink(step)}
        </article>
      `;
    })
    .join("");
}

function showApp(day = getCurrentDay()) {
  renderLesson(day);
  startScreen.classList.add("is-hidden");
  appView.classList.remove("is-hidden");
  document.body.classList.add("started");
  window.scrollTo(0, 0);
}

function completeCurrentDay() {
  const currentDay = clampDay(planDayInput.value);
  const nextDay = clampDay(currentDay + 1);
  storageSet(currentDayStorageKey, String(nextDay));

  if (currentDay >= TOTAL_DAYS) {
    doneMessage.textContent = "Plan completado. Puedes repetir la semana 8 o ajustar el día en Ajustes.";
    return;
  }

  renderLesson(nextDay);
  doneMessage.textContent = `Listo. Mañana seguimos con Día ${nextDay}.`;
}

function renderCalendar() {
  calendar.innerHTML = weeks
    .map((week, index) => `
      <article class="week-card">
        <h3>Semana ${index + 1}: ${week.title}</h3>
        <p>${week.goal}</p>
      </article>
    `)
    .join("");
}

startButton.addEventListener("click", () => {
  showApp();
});

completeButton.addEventListener("click", () => {
  completeCurrentDay();
});

loadDayButton.addEventListener("click", () => {
  const day = clampDay(planDayInput.value);
  storageSet(currentDayStorageKey, String(day));
  renderLesson(day);
});

document.addEventListener("click", (event) => {
  const clickedInfoButton = event.target.closest(".info-button");

  document.querySelectorAll(".info-wrap.is-open").forEach((wrap) => {
    if (!wrap.contains(event.target)) {
      wrap.classList.remove("is-open");
      wrap.querySelector(".info-button")?.setAttribute("aria-expanded", "false");
    }
  });

  if (clickedInfoButton) {
    const wrap = clickedInfoButton.closest(".info-wrap");
    const isOpen = wrap.classList.toggle("is-open");
    clickedInfoButton.setAttribute("aria-expanded", String(isOpen));
  }
});

renderCalendar();
