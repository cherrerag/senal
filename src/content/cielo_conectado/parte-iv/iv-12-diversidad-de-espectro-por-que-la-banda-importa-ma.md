---
titulo: 'Diversidad de espectro: por qué la banda importa más que el satélite'
parte: IV
parte_titulo: ¿Cómo llega el satélite directo al celular y a las cosas?
orden: 53
---

*Dos satélites idénticos pueden dar servicios completamente distintos según en qué megahertz transmitan; en el directo al celular, la pregunta decisiva no es quién lanza, sino quién tiene qué banda en qué país.*

Un satélite para teléfonos necesita frecuencias bajas, que viajen lejos y que el teléfono ya sepa sintonizar. Esas frecuencias son escasas y casi todas tienen dueño. Hay dos familias, y cada una abre un modelo de negocio distinto.

## Dos familias de bandas

**Las bandas móviles** (las identificadas para IMT, el estándar de la UIT para telefonía celular) van de 600 MHz a 3,8 GHz. Las asignan los Estados, casi siempre por subasta, y la licencia da uso exclusivo; Nokia recuerda que se pagan miles de millones por ellas. Su gran virtud es que cualquier teléfono ya las usa, incluidos los más baratos y los reacondicionados. Su límite es que pertenecen a la operadora: el satélite solo entra con su permiso y en condición secundaria.

**Las bandas de servicio móvil por satélite** (MSS) están en banda L, cerca de 1,5–1,6 GHz, y en banda S, alrededor de 2 GHz y 2,5 GHz. La UIT las repartió hace décadas entre unos pocos operadores, se asignan administrativamente y no por subasta, y tienen un marco internacional de coordinación. Su límite es el inverso: pocos teléfonos las soportan. El 3GPP las estandarizó como n254, n255 y n256, pero hoy solo aparecen en algunos modelos de gama alta. Además son angostas: entre todas suman unos 140 MHz, y cada bloque está repartido entre operadores que deben coordinarse.

## La física favorece a las bandas bajas

La pérdida de la señal en el espacio crece con la frecuencia. Con la fórmula de propagación que usa el propio 3GPP, bajar de 2 GHz a 700 MHz reduce la pérdida en unos 9 dB: la señal llega unas ocho veces más fuerte al teléfono. Por eso el servicio rinde mejor en banda baja. Pero hay un costo: con la misma antena, el haz es más ancho. Según Nokia, las celdas de AST miden unos 48 km de diámetro en banda baja, 24 km en banda media y 12 km cerca de 3,7 GHz. Celdas más grandes significan más usuarios compartiendo la misma capacidad. La GSMA agrega que en 3,5 GHz el enlace de subida, del teléfono al satélite, es muy difícil de cerrar.

## Cuántos megahertz y cómo se comparten

Hoy el servicio en bandas móviles suele usar 2×5 MHz, un canal de subida y otro de bajada de 5 MHz cada uno. Es poco, y la capacidad crece casi en proporción al espectro: por eso One NZ triplicó lo que le cede a Starlink, de 2×5 a 2×15 MHz, cuando la demanda superó lo esperado. Para una operadora con bloques fragmentados hay otra restricción: el 5G estándar trabaja con canales de al menos 5 MHz, mientras el LTE admite canales más angostos†.

Ceder espectro también tiene un costo de oportunidad. Ericsson describe dos estrategias. La operadora puede entregar en exclusiva una porción de su banda en todo el país: así el satélite convive sin problemas con la red terrestre y hasta puede tapar huecos de cobertura, pero esos megahertz dejan de servir en tierra, donde rinden mucho más. O puede permitir un uso oportunista solo en zonas sin torres, lo que exige planificación fina y zonas de exclusión dentro del país. En ambos casos hacen falta zonas de exclusión en las fronteras, del tamaño de un haz, para no interferir con las redes del país vecino que usan las mismas frecuencias.

## Lo que se juega en la CMR-27

La Conferencia Mundial de Radiocomunicaciones de 2027 tiene tres puntos de agenda que tocan este negocio. El 1.13 busca armonizar el uso satelital de bandas móviles entre 694 MHz y 2,7 GHz. El 1.12 busca espectro nuevo para IoT satelital de baja velocidad. El 1.14 estudia extender las bandas satelitales cerca de 2 GHz. La GSMA pide que cualquier nueva atribución satelital en bandas móviles sea secundaria y que las tres discusiones se resuelvan juntas, para evitar reglas contradictorias.


<aside class="recuadro sabias">
<p class="recuadro-t">América Latina: la frontera como límite</p>


En Perú, el servicio de Entel con Starlink llega "hasta 50 km previos a la frontera terrestre o marítima" y cubre las 200 millas marítimas. Ese margen funciona como la zona de exclusión que describe Ericsson: evita que el haz satelital invada el espectro de las operadoras de los cinco países vecinos†. En países largos y con muchas fronteras, ese margen pesa. En la tabla de la GSMA para las Américas aparecen 70 MHz en 600 MHz, 90 MHz en 700 MHz, 50 MHz en 850 MHz y 120 MHz tanto en PCS como en AWS: las bandas bajas y medias que cada operadora de la región puede llevar a una negociación satelital, según lo que tenga licenciado en su país.

</aside>

<aside class="recuadro sirve">
<p class="recuadro-t">¿Y eso para qué sirve?</p>


Para una operadora latinoamericana, el espectro bajo que ya tiene licenciado es su activo más valioso frente a un socio satelital: sin él, el satélite no llega a los teléfonos baratos que dominan su base de clientes. Conviene saber cuántos megahertz puede ceder sin perjudicar su red terrestre, en qué zonas y con qué márgenes de frontera. Y conviene seguir la CMR-27: si las bandas satelitales se amplían o se armonizan, ese poder de negociación puede cambiar.

</aside>

<aside class="recuadro hondo">
<p class="recuadro-t">Para ir más hondo</p>


- **Espectro típico del D2D en bandas móviles:** 2×5 MHz
- **Bandas satelitales del 3GPP:** n254 (unos 33 MHz), n255 (unos 68 MHz), n256 (60 MHz fuera de América); n253 para IoT
- **Diámetro de celda de AST:** 48 km (banda baja), 24 km (banda media), 12 km (cerca de 3,7 GHz)
- **CMR-27:** puntos 1.12 (IoT), 1.13 (D2D en bandas móviles, 694 MHz–2,7 GHz) y 1.14 (más espectro satelital cerca de 2 GHz)
- [Harnessing Spectrum Diversity (Spectrum for D2D)](https://www.gsma.com/connectivity-for-good/spectrum/wp-content/uploads/2025/09/Spectrum-for-D2D-Public-Policy-Paper.pdf) — GSMA, 2025 (S0077): las dos familias de espectro, las posiciones de las operadoras y la CMR-27.
- [The Limits of D2D](https://www.gsma.com/connectivity-for-good/spectrum/wp-content/uploads/2026/03/The-Limits-of-D2D-v2.pdf) — GSMA, 2026 (S0078): tabla de espectro móvil y satelital por región.
- [Satellite direct-to-device: 4G or 3GPP NTN?](https://www.ericsson.com/4aed3b/assets/local/reports-papers/ericsson-technology-review/docs/2025/satellite-direct-to-device-communication.pdf) — Ericsson, 2025 (S0075): estrategias de uso del espectro de la operadora y zonas de exclusión.
- [Satellite communication benchmarking with terrestrial 5G networks](https://www.nokia.com/asset/i/215031) — Nokia, 2025 (S0080): licencias terrestres frente a satelitales y tamaño de celdas.
- [Starlink con Entel Perú](https://www.entel.pe/starlink) — Entel Perú, 2026 (S0040): el margen de 50 km en la frontera.

</aside>

**Puertas:** [19.600 millones de dólares por espectro: SpaceX compra las bandas de EchoStar](/biblioteca/cielo_conectado/parte-iv/iv-3-19-600-millones-de-dolares-por-espectro-spacex-com), [La regla de la FCC para la cobertura suplementaria desde el espacio](/biblioteca/cielo_conectado/parte-iv/iv-8-la-regla-de-la-fcc-para-la-cobertura-suplementaria), [Hacia la CMR-27: lo que se juegan los operadores](/biblioteca/cielo_conectado/parte-x/x-3-hacia-la-cmr-27-lo-que-se-juegan-los-operadores), [De la banda L a la luz: para qué sirve cada tramo del espectro](/biblioteca/cielo_conectado/parte-i/i-3-de-la-banda-l-a-la-luz-para-que-sirve-cada-tramo-d), [Entel y Starlink: Chile, primer país de la región con datos directo al celular](/biblioteca/cielo_conectado/parte-xiii/xiii-5-entel-y-starlink-chile-primer-pais-de-la-region-co)
