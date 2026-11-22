---
titulo: 'La Deep Space Network y sus pares: cómo se escucha el espacio profundo'
parte: VI
parte_titulo: ¿Cómo se comunican la ciencia y la exploración?
orden: 72
---

*Las Voyager, más allá del Sistema Solar, siguen hablando con tres complejos de antenas repartidos por el planeta, y esas mismas antenas ahora tienen que hacer espacio para la Luna.*

Para hablar con una nave a miles de millones de kilómetros no basta una antena grande: hacen falta varias, repartidas de modo que siempre haya una mirando al cielo correcto mientras la Tierra gira. Esa es la idea de la Deep Space Network (DSN), la red de espacio profundo de la NASA. Ha atendido misiones al Sol y a todos los planetas del Sistema Solar, incluido Plutón. Las dos Voyager, que ya cruzaron al espacio interestelar, todavía se comunican con ella.

## El sistema en un bloque

- **Objetivo:** mando, telemetría, seguimiento y radiociencia para misiones más allá de dos millones de kilómetros. También atiende órbitas lunares, puntos de Lagrange y órbitas muy elípticas alrededor de la Tierra.
- **Estado a noviembre de 2026:** operativa. Según el informe de segmento terrestre de la NASA de mayo de 2026, ningún proveedor comercial atiende misiones de espacio profundo, así que la DSN no tiene sustituto.
- **Dueños:** la NASA es la propietaria y el programa de comunicaciones y navegación de la agencia (SCaN) la financia. El Jet Propulsion Laboratory (JPL) la administra y mantiene.
- **Segmento espacial:** no tiene satélites propios. Habla directo con cada nave, sin intermediarios en órbita.
- **Segmento terrestre:** tres complejos, en California (Goldstone), Madrid y Canberra. Según el dato de 2021 del informe, cada uno opera una antena de 70 metros y cuatro de 34 metros con guía de ondas. A la red se suma una antena de 21 metros de la Universidad Estatal de Morehead para banda X. Para pruebas de compatibilidad tiene un centro cerca del JPL y un tráiler que viaja hasta donde se arma la nave.
- **Bandas:** S (2 GHz), X (7 y 8 GHz) y Ka (26 y 32 GHz).
- **Clientes y alianzas:** la NASA, otras agencias de EE.UU. y socios internacionales. Usa estándares comunes del Comité Consultivo de Sistemas de Datos Espaciales (CCSDS), del grupo de coordinación de frecuencias de las agencias (SFCG) y de la UIT, lo que permite que las agencias se presten antenas entre sí.
- **Cifras clave:** New Horizons, a 7.000 millones de kilómetros, trabaja con un margen de enlace de 1 dB o menos.

## Escuchar un susurro

Ese margen de 1 dB dice mucho. Un margen de enlace es cuánta señal sobra por encima del mínimo necesario para decodificar. En órbita baja la NASA considera adecuados 3 dB, que equivalen a recibir el doble de la potencia mínima. Con 1 dB la señal llega apenas un 26 % por encima de ese mínimo: una tormenta sobre la antena o un error de apuntamiento basta para perder el enlace. Por eso el tamaño de la antena manda. La ganancia de un plato crece con el cuadrado de su diámetro, de modo que una antena de 70 metros capta unas cuatro veces más que una de 34 metros, y una de 34 metros unas tres veces y media más que una de 18 metros.

## Cuando la Luna se pone de moda

¿Qué pasa cuando decenas de misiones lunares compiten por las mismas antenas? Durante años hubo un hueco entre las antenas más grandes de la red cercana de la NASA, de 18 metros, y las de 34 y 70 metros de la DSN. Ninguna empresa ofrecía algo intermedio. Según el informe de 2026, ese hueco ya se llenó. Viasat instaló en 2022 antenas de 19 y 24 metros en Duluth, Georgia. KSAT invirtió en 2023 en tres antenas de 20 metros que cubrirán la Luna desde el primer trimestre de 2027. Y la NASA anunció sus propios sitios lunares de 18 metros (LEGS): uno en White Sands (Nuevo México), otro previsto en Matjiesfontein (Sudáfrica) y un tercero en el Pacífico, aún por definir.

<figure class="fig"><img src="/biblioteca/cielo_conectado/img/S0116_p050_3831852039d9.jpg" alt="Las nuevas antenas de gran apertura de Viasat, de la clase intermedia que faltaba entre los 18 metros de la red cercana de la NASA y los 34 metros de la DSN." loading="lazy" /><figcaption>Las nuevas antenas de gran apertura de Viasat, de la clase intermedia que faltaba entre los 18 metros de la red cercana de la NASA y los 34 metros de la DSN. <span class="credito">Fuente: Viasat, en NASA, «SOA: Ground Data Systems and Mission Operations» (2026)</span></figcaption></figure>


La clave operativa de LEGS es que cada antena podrá recibir hasta cuatro naves a la vez (tres en banda Ka), una técnica que la NASA llama múltiples satélites por apertura. La lectura que hace este atlas es simple: cada misión lunar que se atiende con estas antenas medianas deja libres horas de los platos de 70 y 34 metros para Marte, Júpiter o las Voyager, que no tienen otra opción. La DSN no compite con la Luna; se protege de ella.

## Más que antenas: espectro protegido

La DSN también es un actor regulatorio. Cuando la Comisión Federal de Comunicaciones de EE.UU. (FCC) autorizó a SpaceX a dar servicio directo al celular, le exigió que, antes de transmitir en la banda de 2.300 a 2.395 MHz dentro del alcance de radio de cualquier instalación de la DSN fuera de EE.UU., certifique que se coordinó con la NASA. Las antenas de Madrid y Canberra escuchan señales tan débiles que un servicio comercial cercano en una banda vecina puede taparlas. Para un operador que planea servicios satelitales en España o Australia, esa condición es parte del costo de entrada.

## Lo que viene

La DSN prepara su salto a la luz. Desde fines de 2023, una antena de investigación de 34 metros en Goldstone, la DSS-13, hace bajadas láser continuas con siete espejos pequeños montados en su centro, que juntos equivalen a un telescopio de 1,3 metros. El paso siguiente es la DSS-23: 64 espejos de 1 metro dentro de una antena de radio de 34 metros, equivalentes a un telescopio de 8 metros, operativa a inicios de la década de 2030. Esa apertura cumple el requisito de 230 megabits por segundo que la NASA fija para la exploración humana de Marte.

<div class="galeria"><figure class="fig"><img src="/biblioteca/cielo_conectado/img/web_c639b001aa80.jpg" alt="DSS-13, la antena experimental de 34 metros de Goldstone. La caja bajo el centro del plato es el terminal óptico que ya hace bajadas láser." loading="lazy" /><figcaption>DSS-13, la antena experimental de 34 metros de Goldstone. La caja bajo el centro del plato es el terminal óptico que ya hace bajadas láser. <span class="credito">Fuente: NASA/JPL-Caltech (dominio público)</span></figcaption></figure><figure class="fig"><img src="/biblioteca/cielo_conectado/img/S0116_p061_6dfd70624317.jpg" alt="Ilustración de la DSS-23: un plato de radio con los segmentos ópticos de 8 metros en su centro, prevista para inicios de la década de 2030." loading="lazy" /><figcaption>Ilustración de la DSS-23: un plato de radio con los segmentos ópticos de 8 metros en su centro, prevista para inicios de la década de 2030. <span class="credito">Fuente: NASA, en «SOA: Ground Data Systems and Mission Operations» (2026)</span></figcaption></figure><p class="galeria-pie">Del presente al plan: la DSS-13, con su terminal óptico bajo el plato, y la ilustración de la DSS-23, un plato de radio de 34 metros con 64 espejos de 1 metro en el centro, equivalentes a un telescopio de 8 metros.</p></div>


Las demás potencias tienen redes propias. La ESA opera ESTRACK, con antenas de espacio profundo en España, Australia y Argentina; China tiene estaciones en su territorio y otra en Neuquén, Argentina; India opera la suya desde las cercanías de Bangalore†. Todas cooperan bajo los mismos estándares, lo que permite que una agencia preste horas de antena a otra cuando hace falta.


<aside class="recuadro sirve">
<p class="recuadro-t">¿Y eso qué significa?</p>


El espacio profundo es el último territorio puramente estatal de las comunicaciones espaciales: no hay suficientes clientes para que una empresa construya platos de 70 metros. Pero su borde se está privatizando. Las antenas de 18 a 24 metros para la Luna son el primer negocio comercial que se acerca a la DSN, y quien las tenga bien ubicadas venderá horas a la NASA, a la ESA y a las empresas de aterrizadores. Para un operador de servicios satelitales, la DSN también es un vecino de espectro que hay que respetar.

</aside>

<aside class="recuadro sabias">
<p class="recuadro-t">¿Sabías que…?</p>


En banda Ka la onda mide cerca de 1 centímetro, así que una antena de espacio profundo de 34 metros equivale a unas 3.000 longitudes de onda de diámetro. Esa enorme proporción entre el plato y la onda es lo que le permite concentrar la recepción en un punto diminuto del cielo.

</aside>

<aside class="recuadro hondo">
<p class="recuadro-t">Para ir más hondo</p>


- **Complejos:** California (Goldstone), Madrid, Canberra; cada uno con una antena de 70 m y cuatro de 34 m (dato de 2021).
- **Alcance:** misiones a más de 2 millones de km; también lunares, en puntos de Lagrange y en órbitas muy elípticas.
- **Bandas:** S (2 GHz), X (7 y 8 GHz), Ka (26 y 32 GHz).
- **LEGS:** antenas de 18 m en White Sands, Matjiesfontein (por confirmar) y el Pacífico (por definir); hasta 4 naves simultáneas por antena (3 en Ka).
- **Óptica:** DSS-13 con apertura de 1,3 m (bajadas láser desde fines de 2023); DSS-23 con apertura equivalente de 8 m a inicios de la década de 2030.
- [SOA: Ground Data Systems and Mission Operations](https://www.nasa.gov/wp-content/uploads/2026/05/11-soa-ground-data-systems-2026-final.pdf) — NASA, 2026 (S0116): la DSN, LEGS, las antenas grandes comerciales y el plan óptico.
- [SpaceX Gen2 deployment at 340–360 km (orden de modificación)](https://docs.fcc.gov/public/attachments/DA-24-1193A1.docx) — FCC, 2024 (S0057): la condición de coordinar con la NASA cerca de la DSN para el servicio directo al celular.

</aside>

**Puertas:** [Hablar con naves lejanas: de las antenas gigantes al relay comercial](/biblioteca/cielo_conectado/parte-vi/vi-1-hablar-con-naves-lejanas-de-las-antenas-gigantes-a), [Láser a 100 Gbps: el relay óptico de próxima generación](/biblioteca/cielo_conectado/parte-vi/vi-6-laser-a-100-gbps-el-relay-optico-de-proxima-genera), [Moonlight y LunaNet: la red lunar como servicio](/biblioteca/cielo_conectado/parte-vi/vi-7-moonlight-y-lunanet-la-red-lunar-como-servicio), [Starlink Direct to Cell: del SMS a WhatsApp](/biblioteca/cielo_conectado/parte-iv/iv-2-starlink-direct-to-cell-del-sms-a-whatsapp), [KSAT: 200 antenas en más de 40 sitios, del Ártico a la Antártica](/biblioteca/cielo_conectado/parte-vii/vii-6-ksat-200-antenas-en-mas-de-40-sitios-del-artico-a-)
