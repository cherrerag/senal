---
titulo: 'IoT por satélite: lo que muestra el caso Iridium y el NB-IoT NTN'
parte: IV
parte_titulo: ¿Cómo llega el satélite directo al celular y a las cosas?
orden: 54
---

*Un sensor que avisa la presión de un oleoducto, la posición de un contenedor o el nivel de un estanque en medio del campo le paga a Iridium menos de 8 dólares al mes; multiplicado por dos millones, eso es un negocio.*

El IoT satelital es el pariente modesto del directo al celular. No transmite videos ni WhatsApp: manda unos pocos bytes, muchas veces al día o una vez por semana, desde lugares donde no hay ninguna otra red. Sus clientes no son personas sino máquinas: camiones, barcos, bombas de agua, maquinaria pesada, boyas. Es un mercado de volumen y márgenes finos, y tiene hoy dos caminos: las redes propietarias de siempre y el nuevo estándar NB-IoT NTN.

## Lo que enseñan las cifras de Iridium

Iridium publica sus números de IoT por separado, y son el mejor termómetro disponible de este negocio. A fines de 2025 tenía 1.998.000 suscriptores de IoT, el 83 % de sus clientes comerciales, que generaron 181,4 millones de dólares en el año. Pero ese 83 % de los clientes aportó solo un tercio de los ingresos por servicios comerciales: cada dispositivo paga en promedio 7,78 dólares al mes, contra 47 dólares de un usuario de voz y datos. El IoT creció 9 % en ingresos y 6 % en suscriptores en 2025, más que el resto del negocio comercial.

Los usos que describe la empresa dibujan el mapa del mercado: seguimiento de activos, monitoreo ambiental, control del estado de equipos, seguridad y alertas, telemetría de ubicación y motor de vehículos, y comando y control de drones aéreos, submarinos y de superficie. Entre los rubros que atiende figuran la minería, el petróleo y el gas, los servicios básicos, la silvicultura, la construcción, la maquinaria pesada y el transporte. En 2024 lanzó un servicio de mensajería para IoT que entrega los datos directamente en la nube, con más volumen y seguridad. Iridium no vende el sensor ni la plataforma: lo hacen cientos de revendedores e integradores que montan la solución completa.

Su competidor más directo en este segmento es Orbcomm, que opera satélites de órbita baja en VHF y revende servicios de banda L de Viasat. Iridium señala que la red de Orbcomm es de tipo "tubo doblado", con cobertura en tiempo real limitada a las zonas con estaciones en tierra, y que se enfoca en datos de bajo costo, sin voz. Otros actores de nicho, como Swarm, comprada por SpaceX†, o la australiana Myriota†, completan un mercado fragmentado del que esta obra no tiene cifras verificadas.

## El estándar llega al sensor

El Release 17 del 3GPP adaptó al satélite el NB-IoT y el LTE-M, las tecnologías de IoT celular. La promesa es que el mismo módulo sirva en tierra y en el espacio, y que un dispositivo que entra y sale de la cobertura, como una máquina agrícola o un contenedor, no tenga que cambiar de tecnología. Nokia pone un ejemplo: un contenedor que sale de un puerto en Asia, navega hasta Brasil y se interna en la Amazonía, seguido durante todo el viaje.

Hacerlo funcionar exigió resolver problemas propios del satélite. Un dispositivo de IoT debe repetir muchas veces su transmisión para que llegue, y en ese lapso el satélite se mueve: el estándar divide la transmisión en segmentos y corrige tiempo y frecuencia al inicio de cada uno. Muchos módulos no pueden usar el GPS y transmitir a la vez, así que el estándar define cuánto tiempo sigue siendo válida la última posición. Y como las primeras constelaciones tendrán huecos de cobertura, la red le informa al dispositivo cuándo pasarán los próximos satélites, para que duerma entre pasadas y ahorre batería.

Ya hay servicios comerciales. Skylo ofrece NB-IoT NTN sobre satélites geoestacionarios arrendados, y Ericsson destaca que el NB-IoT cabe en el espectro que ya tienen los operadores geoestacionarios. Iridium prepara NTN Direct, que llevará NB-IoT por su constelación propia. El Release 20, previsto para 2027, agregará voz sobre NB-IoT. Y la CMR-27 discute, en su punto 1.12, espectro nuevo para IoT satelital de baja velocidad en cuatro tramos entre 1.427 y 2.025 MHz.

## ¿Dónde está el negocio para un integrador?

Hagamos la cuenta con el promedio de Iridium. Un dispositivo que paga 7,78 dólares al mes deja unos 93 dólares al año en conectividad. Para facturar 1 millón de dólares anuales solo en tráfico, un integrador necesita más de 10.700 equipos activos. Por eso el valor rara vez está en revender la conexión: está en el equipo, la plataforma, la instalación y el conocimiento del rubro, sea minería, agro o logística. El estándar NTN abarata los módulos y abre la puerta a más proveedores de red; eso presiona el precio de la conectividad a la baja y desplaza aún más el margen hacia la solución completa.


<aside class="recuadro sirve">
<p class="recuadro-t">¿Y eso para qué sirve?</p>


Para una minera, una salmonera o una empresa agrícola, el IoT satelital permite medir y controlar activos donde no llega ninguna red, por pocos dólares al mes. Para un integrador, la oportunidad está en dominar una vertical y combinar redes: la terrestre donde exista, la satelital donde no. Y para una operadora, el NB-IoT NTN es la forma de vender cobertura nacional de IoT sin levantar torres.

</aside>

<aside class="recuadro sabias">
<p class="recuadro-t">¿Sabías que…?</p>


En el NB-IoT por satélite, la red le envía al dispositivo un mensaje especial con la posición de hasta cuatro satélites que pasarán después. Con eso, el sensor calcula cuándo vale la pena despertar. En un dispositivo que debe durar años con una batería, esa información vale más que la velocidad.

</aside>

<aside class="recuadro hondo">
<p class="recuadro-t">Para ir más hondo</p>


- **IoT de Iridium (2025):** 1.998.000 suscriptores; 181,4 millones de dólares de ingresos (+9 %); ARPU de 7,78 dólares al mes
- **Peso del IoT en Iridium comercial:** 83 % de los suscriptores, cerca de un tercio de los ingresos por servicios
- **Espectro en estudio para IoT satelital (CMR-27, punto 1.12):** 1427–1432, 1645,5–1646,5, 1880–1920 y 2010–2025 MHz
- [Iridium 10-K 2025](https://www.sec.gov/Archives/edgar/data/1418819/000141881926000009/irdm-20251231.htm) — Iridium, 2026 (S0079): cifras de IoT, usos, canales y competencia con Orbcomm.
- [5G New Radio for spectrum allocations below 5 MHz (Global coverage through non-terrestrial networks)](https://www.nokia.com/asset/i/212761) — Nokia, 2025 (S0081): cómo resolvió el 3GPP el IoT por satélite.
- [Satellite direct-to-device: 4G or 3GPP NTN?](https://www.ericsson.com/4aed3b/assets/local/reports-papers/ericsson-technology-review/docs/2025/satellite-direct-to-device-communication.pdf) — Ericsson, 2025 (S0075): NB-IoT NTN sobre satélites geoestacionarios.
- [Harnessing Spectrum Diversity (Spectrum for D2D)](https://www.gsma.com/connectivity-for-good/spectrum/wp-content/uploads/2025/09/Spectrum-for-D2D-Public-Policy-Paper.pdf) — GSMA, 2025 (S0077): las bandas para IoT en la CMR-27.
- [5G NR Non-Terrestrial Networks: From Early Results to the Road Ahead](https://arxiv.org/pdf/2601.04882) — arXiv, 2026 (S0071): voz sobre NB-IoT en el Release 20.

</aside>

**Puertas:** [Iridium: el sobreviviente que ahora apuesta por NTN y PNT](/biblioteca/cielo_conectado/parte-iv/iv-5-iridium-el-sobreviviente-que-ahora-apuesta-por-ntn), [3GPP NTN: qué cambia cuando el satélite entra al estándar](/biblioteca/cielo_conectado/parte-iv/iv-9-3gpp-ntn-que-cambia-cuando-el-satelite-entra-al-es), [Lynk, Skylo y Omnispace: los otros caminos hacia el celular](/biblioteca/cielo_conectado/parte-iv/iv-7-lynk-skylo-y-omnispace-los-otros-caminos-hacia-el-), [Siete negocios con el mismo satélite: banda ancha, movilidad, video, IoT, celular, troncal y gobierno](/biblioteca/cielo_conectado/parte-i/i-4-siete-negocios-con-el-mismo-satelite-banda-ancha-m), [Conectividad rural: los programas que usan satélite en la región](/biblioteca/cielo_conectado/parte-xiii/xiii-9-conectividad-rural-los-programas-que-usan-satelite)
