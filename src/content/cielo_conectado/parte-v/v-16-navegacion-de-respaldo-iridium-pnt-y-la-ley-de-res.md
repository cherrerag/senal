---
titulo: 'Navegación de respaldo: Iridium PNT y la ley de resiliencia del GPS'
parte: V
parte_titulo: ¿Cómo se comunican los gobiernos y las fuerzas armadas por satélite, y cómo se orienta el mundo?
orden: 70
---

*Cuando la señal del GPS se vuelve un blanco diario, la posición y la hora "de repuesto" dejan de ser un lujo militar y empiezan a venderse como servicio.*

<figure class="fig"><img src="/biblioteca/cielo_conectado/img/web_4e0697fd1d9d.jpg" alt="Un satélite Iridium de primera generación, expuesto en el Museo Nacional del Aire y el Espacio, con sus paneles solares y su haz de antenas. La constelación Iridium orbita a unos 780 km, mucho más cerca que el GPS, y por eso su señal llega más fuerte." loading="lazy" /><figcaption>Un satélite Iridium de primera generación, expuesto en el Museo Nacional del Aire y el Espacio, con sus paneles solares y su haz de antenas. La constelación Iridium orbita a unos 780 km, mucho más cerca que el GPS, y por eso su señal llega más fuerte. <span class="credito">Fuente: ideonexus, Flickr (CC BY-SA 2.0)</span></figcaption></figure>


El 1 de abril de 2024, Iridium compró Satelles, una empresa que proveía servicios de posición y tiempo por satélite "altamente seguros". La idea de fondo es usar la constelación de Iridium en órbita baja, a unos 780 km de altura†, para transmitir una señal de posición y tiempo mucho más fuerte en tierra que la del GPS, que llega desde unos 20.000 km†. Iridium describe el resultado, Iridium PNT, como "un complemento o alternativa" segura al GPS y a los demás sistemas de navegación, pensado para proteger aplicaciones del *jamming* y el *spoofing*, con hardware pequeño, barato y que no necesita antenas exteriores.

La sigla **PNT** (posicionamiento, navegación y tiempo) nombra lo que hacen los cuatro grandes sistemas de navegación ([Cuatro sistemas para saber dónde estás: GPS, Galileo, BeiDou y GLONASS](/biblioteca/cielo_conectado/parte-v/v-13-cuatro-sistemas-para-saber-donde-estas-gps-galileo)). La novedad es que ahora hay quien la vende por separado, como servicio de respaldo.

## Quién lo compra

En su informe anual de 2025, Iridium enumera los sectores: finanzas, telecomunicaciones, transporte marítimo, transporte terrestre, energía y servicios públicos. Y precisa usos concretos: proteger infraestructura crítica, **centros de datos y radiobases 5G**, además de aviación, buques e internet de las cosas. Al gobierno de EE.UU. le entrega una señal "resiliente y diversa" como capacidad alternativa de posición y tiempo (APNT). Para abaratar la integración, Iridium anunció un chip dedicado, el Iridium PNT ASIC, de 8 mm por 8 mm, previsto para mediados de 2026.

En sus cuentas, la compra de Satelles dejó un fondo de comercio de 98,9 millones de dólares a diciembre de 2025: la parte del precio que excede el valor de los activos adquiridos y que Iridium atribuye a las sinergias esperadas y al equipo incorporado. La empresa cree que la compra "podría generar un crecimiento sustancial" de sus ingresos por servicios, pero no reporta la línea PNT por separado.

## Los gobiernos se mueven

La presión viene de la escala de la interferencia. La ESA contó más de 10.000 buques afectados en el segundo trimestre de 2025, ocho veces más que en el primero. En EE.UU., el 15 de julio de 2025 se presentó en el Senado la **GPS Resiliency Report Act** (S. 2277), un proyecto que obliga al secretario de Defensa a informar sobre los riesgos para el GPS y los servicios de posición, navegación y tiempo asociados. La Comisión Federal de Comunicaciones (FCC) abrió, también en 2025, una consulta pública sobre alternativas al GPS†.

Europa responde con su propio repertorio. La ESA estudia un sistema de navegación en capas que incluye satélites en órbita baja (Celeste LEO-PNT) y financia, mediante su programa NAVISP, desde antenas que bloquean interferencia con aprendizaje automático (un contrato con Leonardo firmado en el Salón Aeronáutico de París) hasta herramientas para mapear la interferencia. En el Pentágono, la constelación en órbita baja de la SDA también se diseña para servir como alternativa al GPS ([La capa de transporte de la SDA y los láseres que no se entienden entre sí](/biblioteca/cielo_conectado/parte-v/v-5-la-capa-de-transporte-de-la-sda-y-los-laseres-que-)).


<aside class="recuadro sirve">
<p class="recuadro-t">¿Oportunidad comercial real o nicho para gobiernos?</p>


Hoy, más nicho que mercado masivo, pero con un comprador civil muy concreto: quien necesita la hora exacta y no puede tolerar que falle. Bancos, operadores eléctricos, centros de datos y operadores móviles dependen de una referencia de tiempo que normalmente sale de un receptor GNSS. Para ellos, un respaldo que funciona en interiores y resiste la interferencia es un seguro barato. El empuje decisivo vendrá de la regulación: si los gobiernos exigen respaldo de PNT en infraestructura crítica, el nicho se vuelve norma. Para un operador de telecomunicaciones, la pregunta es simple y urgente: ¿qué pasa con mi sincronización si mañana se cae el GPS en mi zona?

</aside>

<aside class="recuadro sabias">
<p class="recuadro-t">¿Sabías que…?</p>


Una de las técnicas que estudia la ESA contra la interferencia son las antenas de patrón de recepción controlado (CRPA): conjuntos de antenas que "miran" solo hacia los satélites y se vuelven sordas hacia donde viene el *jammer*. El proyecto con Leonardo busca hacerlas más pequeñas, para que quepan en aviones, en un plazo de dos años.

</aside>

<aside class="recuadro hondo">
<p class="recuadro-t">Para ir más hondo</p>


- **Compra de Satelles por Iridium:** 1 de abril de 2024; fondo de comercio de 98,9 millones de dólares (diciembre de 2025).
- **Iridium PNT ASIC:** 8 × 8 mm, disponibilidad prevista a mediados de 2026.
- **GPS Resiliency Report Act (S. 2277):** presentada en el Senado de EE.UU. el 15 de julio de 2025.
- **Interferencia marítima:** más de 10.000 buques en el segundo trimestre de 2025 (ESA).
- [Iridium Communications 10-K 2025](https://www.sec.gov/Archives/edgar/data/1418819/000141881926000009/irdm-20251231.htm) — Iridium Communications, 2026 (S0079): qué es Iridium PNT, quién lo compra y qué espera la empresa.
- [S. 2277 – GPS Resiliency Report Act](https://www.govinfo.gov/app/details/BILLS-119s2277is) — U.S. Congress, 2025 (S0090): el proyecto de ley sobre riesgos del GPS.
- [ESA teams up with Leonardo against satnav jamming](https://www.esa.int/media-advisories/news-media/media/media-advisories/n-36-2025-esa-teams-up-with-leonardo-against-satnav-jamming) — ESA, 2025 (S0012): antenas inteligentes contra la interferencia.
- [No signal left behind: new ways to detect jamming and spoofing](https://www.esa.int/it/articoli/no-signal-left-behind-new-ways-to-detect-jamming-and-spoofing) — ESA, 2025 (S0014): la escala del problema y la apuesta por la navegación en órbita baja.

</aside>

**Puertas:** [Iridium: el sobreviviente que ahora apuesta por NTN y PNT](/biblioteca/cielo_conectado/parte-iv/iv-5-iridium-el-sobreviviente-que-ahora-apuesta-por-ntn), [Cuatro sistemas para saber dónde estás: GPS, Galileo, BeiDou y GLONASS](/biblioteca/cielo_conectado/parte-v/v-13-cuatro-sistemas-para-saber-donde-estas-gps-galileo), [Interferencia, jamming y spoofing: cómo se ataca una señal](/biblioteca/cielo_conectado/parte-xi/xi-7-interferencia-jamming-y-spoofing-como-se-ataca-una), [Jammertest: Noruega convierte la interferencia en laboratorio](/biblioteca/cielo_conectado/parte-xi/xi-8-jammertest-noruega-convierte-la-interferencia-en-l), [La capa de transporte de la SDA y los láseres que no se entienden entre sí](/biblioteca/cielo_conectado/parte-v/v-5-la-capa-de-transporte-de-la-sda-y-los-laseres-que-)
