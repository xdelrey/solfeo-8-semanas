# Rediseño De La App Diaria De Solfeo

## Resumen

Convertir la web en una microapp nocturna de alta calidad: una pantalla inicial mínima, una lección diaria clara tras pulsar, ortografía cuidada, flujo optimizado para no saltar entre apps y ayuda contextual mediante iconos `(i)`/tooltips.

La aplicación recomendada es **EarMaster** como herramienta principal, porque cubre oído, canto a primera vista y ritmo en una sola app, con feedback por voz/palmas y uso en móvil/desktop. SightSing queda como alternativa puntual, no como flujo base.

Fuentes usadas:

- EarMaster: https://www.earmaster.com/
- Compra EarMaster: https://www.earmaster.com/how-to-buy-earmaster.html
- SightSing: https://sightsing.app/
- Complete Music Trainer: https://completemusictrainer.com/

## Cambios Clave

- Corregir el bug visual: al pulsar `Empezar`, la pantalla inicial debe desaparecer totalmente.
- Primera pantalla:
  - Texto único: `Solfeo de esta noche`
  - Subtexto pequeño: `23:00-00:00 · voz baja · sin instrumento`
  - Botón principal: `Empezar`
- Lección diaria:
  - Mostrar `Día X de 56`, `Semana X`, foco musical y progreso.
  - Bloques horarios simples, escaneables y accionables.
  - Reducir texto explicativo; cada bloque debe decir qué hacer, cuánto tiempo y cómo hacerlo en silencio.
- Herramientas:
  - Recomendación principal: **EarMaster**.
  - Añadir un botón `Abrir EarMaster` cuando el bloque requiera app.
  - Evitar musictheory.net, teoría.com, Functional Ear Trainer y Complete Music Trainer en el flujo diario base.
  - Mantener enlaces secundarios solo en una sección oculta `Alternativas`.
- Ayuda contextual:
  - Añadir iconos `(i)` junto a conceptos como `audiación`, `grados`, `tónica`, `dominante`, `primera vista`, `mmm suave`.
  - En móvil, el tooltip se abre por tap y se cierra al tocar fuera.
  - En desktop, se abre por hover/focus.
- Cierre de sesión:
  - Botón `Marcar como hecha`.
  - Al marcar, guardar progreso en `localStorage` y preparar el siguiente día.
  - Mostrar mensaje breve: `Listo. Mañana seguimos con Día X.`

## Contenido Y UX

- Revisar toda la ortografía:
  - `lección`, `menú`, `sesión`, `día`, `oído`, `metrónomo`, `afinación`, `mañana`, `preparación`, `melodía`.
- Tono de la app:
  - Directo, tranquilo, nocturno.
  - Nada de lenguaje técnico innecesario.
  - Nada de frases largas dentro de tarjetas.
- Estructura recomendada de bloque:
  - Hora
  - Verbo claro: `Prepara`, `Lee`, `Escucha`, `Canta`, `Revisa`
  - Instrucción de 1-2 líneas
  - Botón de herramienta si aplica
  - `(i)` con explicación breve si hay concepto musical.
- El selector de día y calendario completo quedan ocultos en `Ajustes` o `Ver calendario completo`.

## Implementación

- Actualizar `index.html`, `styles.css` y `script.js`.
- Crear `PRODUCT_PLAN.md` con este plan.
- Subir cambios a:
  - `xdelrey/solfeo-8-semanas`
  - `xdelrey/solfeo-8-sesmanas-privado`
- Mantener app estática, sin framework ni build step.
- No introducir dependencias externas.
- Usar enlaces externos solo como botones:
  - EarMaster: `https://www.earmaster.com/`
  - SightSing como alternativa: `https://sightsing.app/`
  - Complete Music Trainer como alternativa barata: `https://completemusictrainer.com/`

## Test Plan

- Verificar localmente:
  - `node --check script.js`
  - Al entrar solo se ve la pantalla inicial.
  - Al pulsar `Empezar`, desaparece el botón y aparece la lección.
  - `Marcar como hecha` avanza el día.
  - `Cambiar día` funciona sin romper progreso.
- Verificar en GitHub Pages:
  - La URL carga.
  - El botón funciona en móvil.
  - Los estilos se aplican.
  - Los tooltips funcionan por tap.
- Casos móviles:
  - iPhone Safari.
  - Android Chrome.
  - Pantalla estrecha: ningún texto se solapa ni queda cortado.
- Casos de almacenamiento:
  - Si `localStorage` falla, la lección sigue abriendo.
  - Si no hay progreso guardado, empieza en Día 1.

## Asunciones

- Se elige **EarMaster** como app principal aunque tenga coste, porque optimiza mejor el flujo de una sola herramienta.
- La app propia no intentará sustituir EarMaster; será el “menú diario” que guía qué hacer.
- La experiencia principal será móvil.
- El calendario completo es secundario.
- Se mantendrá el repositorio público como fuente de GitHub Pages.
