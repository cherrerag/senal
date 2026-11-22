---
titulo: Lo que puede apagar una red satelital
parte: XI
parte_titulo: ¿Qué riesgos amenazan a las redes satelitales?
orden: 123
---

*Ninguna red comercial ha perdido un satélite por un misil enemigo, pero una sola VPN mal configurada dejó fuera de línea a decenas de miles de módems en una mañana.*

<figure class="fig"><img src="/biblioteca/cielo_conectado/img/web_5020b51ef9ae.jpg" alt="Los objetos rastreados en órbita terrestre (naranja) y los satélites activos (verde), en una visualización de febrero de 2024. Se ve la nube de basura y satélites que rodea el planeta, y lo poco que queda libre cerca de la Tierra." loading="lazy" /><figcaption>Los objetos rastreados en órbita terrestre (naranja) y los satélites activos (verde), en una visualización de febrero de 2024. Se ve la nube de basura y satélites que rodea el planeta, y lo poco que queda libre cerca de la Tierra. <span class="credito">Fuente: NASA Scientific Visualization Studio (dominio público)</span></figcaption></figure>


A las 03:02 UTC del 24 de febrero de 2022, horas antes de que los tanques rusos cruzaran la frontera†, la red de banda ancha del satélite KA-SAT empezó a recibir un tráfico malicioso que salía de módems instalados en Ucrania. A las 04:15 los módems comenzaron a caerse en masa en buena parte de Europa. Nadie tocó el satélite. El atacante entró por tierra, por un equipo VPN mal configurado, y desde la red de gestión envió comandos legítimos que borraron la memoria de los módems. Viasat terminó enviando casi 30.000 equipos de reemplazo ([KA-SAT, 24 de febrero de 2022: el ciberataque que apagó módems en Europa](/biblioteca/cielo_conectado/parte-xi/xi-9-ka-sat-24-de-febrero-de-2022-el-ciberataque-que-ap)).

Ese caso resume la lección de esta parte. Los riesgos que más se comentan en la prensa, como los misiles antisatélite o una cascada de choques en órbita, son reales pero lentos o poco probables. Los que hoy le cuestan plata a un operador comercial son más baratos y más frecuentes: la interferencia, el ciberataque al segmento terrestre y el costo creciente de operar en una órbita llena. A eso se suma un riesgo de otro tipo, el regulatorio: lo que los astrónomos y los reguladores pidan hoy puede convertirse mañana en condición de licencia.

## Cinco familias de riesgo

**La órbita llena.** La Agencia Espacial Europea (ESA) contaba unos 40.000 objetos rastreados a fines de 2024, de los cuales unos 11.000 eran satélites activos. Su modelo estima más de 1,2 millones de fragmentos de más de 1 cm, cada uno capaz de destruir un satélite. A 550 km, la altura favorita de las constelaciones de banda ancha, ya hay tantos desechos peligrosos como satélites activos, en el mismo orden de magnitud ([¿Cuán llena está la órbita baja? El informe de entorno espacial de la ESA](/biblioteca/cielo_conectado/parte-xi/xi-2-cuan-llena-esta-la-orbita-baja-el-informe-de-entor)). Para un operador esto significa más maniobras de evasión, más combustible y más personal de operaciones. El riesgo de fondo, una reacción en cadena de choques conocida como síndrome de Kessler, es de largo plazo: la ESA la proyecta en una escala de siglos.

**La puerta de salida.** Las megaconstelaciones resolvieron parte del problema con satélites de vida corta que bajan solos. Starlink lleva unas 440 reentradas en lo que va de 2026, más de una por día, según el catálogo de KeepTrack a octubre ([Más de una reentrada por día: el ciclo de vida de una megaconstelación](/biblioteca/cielo_conectado/parte-xi/xi-3-mas-de-una-reentrada-por-dia-el-ciclo-de-vida-de-u)). Pero esa solución abre preguntas nuevas sobre lo que queda en la atmósfera, y las reglas para salir de órbita se endurecen. La ESA pasó de 25 a 5 años el plazo para desocupar la órbita baja ([Las reglas para no dejar basura: el estándar de mitigación de la ESA](/biblioteca/cielo_conectado/parte-xi/xi-4-las-reglas-para-no-dejar-basura-el-estandar-de-mit)). La FCC, el regulador de Estados Unidos, convirtió los planes de desechos en condiciones de licencia, con informes semestrales y frenos al despliegue si fallan demasiados satélites ([Kuiper y la orden de desechos orbitales de la FCC](/biblioteca/cielo_conectado/parte-xi/xi-5-kuiper-y-la-orden-de-desechos-orbitales-de-la-fcc)). Casi todo lo demás sigue siendo voluntario ([Sostenibilidad espacial: lo que se acordó y lo que falta](/biblioteca/cielo_conectado/parte-xi/xi-6-sostenibilidad-espacial-lo-que-se-acordo-y-lo-que-)).

**La señal atacada.** Bloquear una señal satelital (*jamming*) o falsificarla (*spoofing*) es barato. El Centro de Estudios Estratégicos e Internacionales (CSIS) de Washington describe los equipos como "comercialmente disponibles y baratos" y llama a la interferencia regional indiscriminada "la nueva normalidad" de los conflictos. En el segundo trimestre de 2025, más de 10.000 barcos reportaron interferencia maliciosa en sus receptores de navegación, ocho veces más que en el trimestre anterior, según la ESA ([Interferencia, jamming y spoofing: cómo se ataca una señal](/biblioteca/cielo_conectado/parte-xi/xi-7-interferencia-jamming-y-spoofing-como-se-ataca-una)). Noruega convirtió ese problema en un laboratorio abierto ([Jammertest: Noruega convierte la interferencia en laboratorio](/biblioteca/cielo_conectado/parte-xi/xi-8-jammertest-noruega-convierte-la-interferencia-en-l)).

**El segmento terrestre.** Gateways, centros de operación, redes de gestión y terminales son la superficie de ataque más grande de una red satelital. El caso KA-SAT es el ejemplo de manual, pero no el único. En junio de 2023, hackers que decían estar ligados al grupo Wagner interrumpieron un telepuerto ruso que daba servicio a militares y a la seguridad estatal rusa, según el CSIS ([KA-SAT, 24 de febrero de 2022: el ciberataque que apagó módems en Europa](/biblioteca/cielo_conectado/parte-xi/xi-9-ka-sat-24-de-febrero-de-2022-el-ciberataque-que-ap)).

**El Estado como adversario.** Cuatro países (Estados Unidos, Rusia, China e India) han probado misiles antisatélite contra sus propios satélites. Rusia desarrolla una capacidad nueva que, según teorías recogidas por el CSIS, podría ser nuclear. China ha demostrado "casi todas" las capacidades de contraespacio que existen ([Armas contra satélites y amenazas de contraespacio](/biblioteca/cielo_conectado/parte-xi/xi-10-armas-contra-satelites-y-amenazas-de-contraespacio)). Para una red comercial, ese riesgo es poco probable pero sistémico: un solo ensayo destructivo llena una órbita para todos.

## La matriz para un operador comercial

| Riesgo | Probabilidad en 2026 | Impacto típico | Caso reciente | Dónde se mitiga |
|---|---|---|---|---|
| Interferencia y jamming | Alta, diaria en zonas de conflicto | Degradación local del servicio | Más de 10.000 barcos afectados en el segundo trimestre de 2025 | Antenas que filtran por dirección, monitoreo, terminales actualizables |
| Ciberataque al segmento terrestre | Media, con baja barrera de entrada | Caída masiva y costo de reposición | KA-SAT, 24 de febrero de 2022 | Red de gestión aislada, control de accesos, auditoría de proveedores |
| Congestión y conjunciones | Alta y en aumento a 400-600 km | Costo operativo, combustible, vida útil | Fragmentaciones de 2024: más de 3.000 objetos nuevos catalogados | Maniobras automáticas, intercambio de efemérides |
| Reglas de desechos más duras | Alta | Costo de diseño y de licencia | Regla de 5 años de la ESA (2023) y de la FCC | Diseño para reingreso, propulsión confiable |
| Reclamo astronómico | Media | Condiciones de licencia, rediseño | Condiciones de la FCC a Starlink Gen2 (2022) | Satélites más oscuros, filtros de emisiones |
| Arma antisatélite o nuclear | Baja | Catastrófico y compartido | Ensayo ruso de 2021 | Fuera del alcance del operador: diplomacia y diversidad orbital |

La tabla se lee en diagonal. Arriba están los riesgos frecuentes y de impacto acotado, que se pagan con ingeniería y operación. Abajo están los raros y catastróficos, que ningún operador puede mitigar solo. El seguro no cubre la brecha: según cifras de la industria citadas por Insurance Business en 2025, de casi 13.000 satélites activos solo unos 300 tenían seguro en órbita ([Por qué las constelaciones casi no se aseguran](/biblioteca/cielo_conectado/parte-viii/viii-13-por-que-las-constelaciones-casi-no-se-aseguran)).

## Lo que viene

Hay dos frentes regulatorios con fecha. El primero es la Conferencia Mundial de Radiocomunicaciones de 2027 (CMR-27), en Shanghái, que estudia por primera vez la interferencia sumada de varias constelaciones sobre la radioastronomía. También estudia zonas de silencio radioeléctrico alrededor de ALMA, en Chile, y del sitio del radiotelescopio SKA-Mid, en Sudáfrica. Son propuestas en estudio, no reglas aprobadas ([Astronomía y megaconstelaciones: el brillo y la radio](/biblioteca/cielo_conectado/parte-xi/xi-11-astronomia-y-megaconstelaciones-el-brillo-y-la-rad), [Radioastronomía en la CMR-27: las zonas silenciosas](/biblioteca/cielo_conectado/parte-xi/xi-12-radioastronomia-en-la-cmr-27-las-zonas-silenciosas)). El segundo es el Congreso de Estados Unidos: la comisión de Comercio del Senado informó favorablemente, el 14 de septiembre de 2026, un proyecto de ley de ciberseguridad satelital. Es un proyecto propuesto, todavía no es ley.


<aside class="recuadro sirve">
<p class="recuadro-t">¿Y eso qué significa para el negocio?</p>


Que si alguien bloquea la señal, el servicio cae solo donde está el bloqueador y mientras dure. Si alguien entra a la red de gestión, decenas de miles de módems pueden caer en menos de una hora. Y si la órbita se llena, el servicio no se corta de golpe: se encarece de a poco, maniobra a maniobra. Para quien vende servicio garantizado a gobiernos, aerolíneas o empresas, la resiliencia es parte del producto. Detectar interferencia, aislar la red de gestión y reponer terminales a distancia pasaron a ser argumentos de venta tanto como la velocidad.

</aside>

<aside class="recuadro sabias">
<p class="recuadro-t">¿Sabías que…?</p>


El mayor generador de basura de la órbita baja no fue un accidente sino un ensayo. Según datos de LeoLabs recogidos por el CSIS, más de una cuarta parte de los fragmentos que hoy circulan en órbita baja salió de un solo evento: el misil con que China destruyó su satélite meteorológico Fengyun 1C en 2007.

</aside>

<aside class="recuadro hondo">
<p class="recuadro-t">Para ir más hondo</p>


- **Objetos rastreados (fines de 2024):** unos 40.000, de ellos unos 11.000 satélites activos (ESA, 2025).
- **Satélites asegurados en órbita (2025):** unos 300 de casi 13.000 activos.
- **Ataque a KA-SAT:** 24 de febrero de 2022; casi 30.000 módems de reemplazo enviados.
- [ESA Space Environment Report 2025](https://www.esa.int/articles/esa-space-environment-report-2025) — ESA, 2025 (S0009): el resumen de la congestión, los reingresos y la regla de 5 años.
- [KA-SAT Network cyber attack overview](https://www.viasat.com/perspectives/corporate/2022/ka-sat-network-cyber-attack-overview/) — Viasat, 2022 (S0011): la cronología del ataque contada por la víctima.
- [Space Threat Assessment 2024](https://aerospace.csis.org/wp-content/uploads/2024/04/240417_Swope_SpaceThreatAssessment_2024.pdf) — CSIS, 2024 (S0099): el catálogo de capacidades de contraespacio por país.
- [No signal left behind: new ways to detect jamming and spoofing](https://www.esa.int/it/articoli/no-signal-left-behind-new-ways-to-detect-jamming-and-spoofing) — ESA, 2025 (S0014): la cifra de barcos afectados por interferencia.
- [Satellite insurance in freefall as space risks multiply](https://www.insurancebusinessmag.com/us/news/breaking-news/satellite-insurance-in-freefall-as-space-risks-multiply--report-540870.aspx) — Insurance Business, 2025 (S0127): por qué casi nadie asegura sus satélites en órbita.

</aside>

**Puertas:** [¿Cuán llena está la órbita baja? El informe de entorno espacial de la ESA](/biblioteca/cielo_conectado/parte-xi/xi-2-cuan-llena-esta-la-orbita-baja-el-informe-de-entor), [Interferencia, jamming y spoofing: cómo se ataca una señal](/biblioteca/cielo_conectado/parte-xi/xi-7-interferencia-jamming-y-spoofing-como-se-ataca-una), [KA-SAT, 24 de febrero de 2022: el ciberataque que apagó módems en Europa](/biblioteca/cielo_conectado/parte-xi/xi-9-ka-sat-24-de-febrero-de-2022-el-ciberataque-que-ap), [Armas contra satélites y amenazas de contraespacio](/biblioteca/cielo_conectado/parte-xi/xi-10-armas-contra-satelites-y-amenazas-de-contraespacio), [Por qué las constelaciones casi no se aseguran](/biblioteca/cielo_conectado/parte-viii/viii-13-por-que-las-constelaciones-casi-no-se-aseguran)
