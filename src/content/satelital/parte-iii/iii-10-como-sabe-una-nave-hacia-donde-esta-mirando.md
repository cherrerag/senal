---
titulo: ¿Cómo sabe una nave hacia dónde está mirando?
parte: III
parte_titulo: ¿Qué se necesita para construir una de estas máquinas?
orden: 42
---

*En el vacío no hay arriba ni abajo, así que una nave se orienta como los navegantes antiguos: mirando las estrellas.*

<figure class="fig"><img src="/biblioteca/satelital/img/S0008_p012_9b58fe0a7cd7.jpg" alt="El sistema de orientación de JUICE en un esquema: sensores solares, cámara de navegación, rastreadores de estrellas y unidades inerciales a un lado; cuatro ruedas de reacción y los propulsores en el otro, todo hablando con la computadora central." loading="lazy" /><figcaption>El sistema de orientación de JUICE en un esquema: sensores solares, cámara de navegación, rastreadores de estrellas y unidades inerciales a un lado; cuatro ruedas de reacción y los propulsores en el otro, todo hablando con la computadora central. <span class="credito">Fuente: ESA / Airbus Defence and Space (The JUICE Spacecraft System Design, 2026)</span></figcaption></figure>


El 8 de septiembre de 1962, la sonda Mariner 2 iba camino de Venus cuando, de golpe, perdió el control de su orientación. Tres minutos después, sus giroscopios la habían recuperado. Nunca se supo bien qué pasó; quizás chocó con algún objeto pequeño. Mariner 2 se orientaba usando el Sol y la Tierra como referencias y corregía su posición con chorros de gas nitrógeno. Su error de apuntado era de 1 grado. Para la primera visita a otro planeta, alcanzó.

Hoy el problema es el mismo, pero la exigencia es otra. Una nave moderna necesita contestar dos preguntas sin parar: ¿hacia dónde estoy mirando? y ¿cómo giro para mirar hacia donde debo?

## Sentidos: estrellas, Sol y giroscopios

Para la primera pregunta, la herramienta estrella, nunca mejor dicho, es el rastreador de estrellas: una pequeña cámara que fotografía el cielo, reconoce el dibujo de las estrellas y deduce la orientación. Los sensores solares, más simples, buscan dónde está el Sol. Los giroscopios miden cuánto gira la nave entre una foto y otra. En naves pequeñas, los mejores rastreadores comerciales dan una orientación con un error de unos 8 segundos de arco, y los sensores solares de una décima de grado.

JUICE combina todo: un rastreador de estrellas con tres cabezas, dos unidades de medición inercial con giroscopios y acelerómetros, dos sensores solares que vigilan que la nave no se exponga al Sol por error, y cámaras de navegación. Cerca de las lunas de Júpiter suma un truco propio, llamado EAGLE: sigue el borde de la luna en las imágenes para apuntar mejor sus instrumentos durante cada sobrevuelo.

## Músculos: ruedas que giran

Para girar sin gastar combustible, las naves usan ruedas de reacción: discos que el motor hace girar más rápido en un sentido para que la nave gire, por pura física, en el otro†. JUICE lleva cuatro de alta capacidad. Webb lleva seis, dos de ellas de repuesto. Como las ruedas acumulan giro, cada tanto hay que «descargarlas» con un pequeño encendido de propulsores; Webb lo hace aproximadamente cada seis semanas, aprovechando las maniobras que mantienen su órbita.

<figure class="fig"><img src="/biblioteca/satelital/img/web_d21a61c3a0cf.jpg" alt="Las cuatro ruedas de reacción de la Europa Clipper, vistas desde abajo del cuerpo de la nave. Cada una mide unos 60 cm de ancho y orienta la nave sin gastar combustible." loading="lazy" /><figcaption>Las cuatro ruedas de reacción de la Europa Clipper, vistas desde abajo del cuerpo de la nave. Cada una mide unos 60 cm de ancho y orienta la nave sin gastar combustible. <span class="credito">Fuente: NASA/JPL-Caltech (dominio público)</span></figcaption></figure>


## Una décima de grado

La antena principal de JUICE se diseñó aceptando un error de apuntado de hasta 0,1 grados, porque es un nivel que se puede lograr con seguridad. Hagamos la cuenta de qué significa a la distancia de Júpiter, unas 5 veces la distancia Tierra-Sol, es decir, unos 750 millones de kilómetros: una décima de grado desplaza el haz cerca de 1,3 millones de kilómetros, más de tres veces la distancia entre la Tierra y la Luna†. El diseño de la antena tiene que tolerar ese desvío y aun así entregar la señal. Por eso la precisión de la orientación entra en la misma cuenta que la potencia del transmisor.

Webb juega en otra liga. Su sensor de guiado fino corrige la puntería 16 veces por segundo moviendo un espejo pequeño, y logra una estabilidad de alrededor de una milésima de segundo de arco, mucho mejor que las seis milésimas que se esperaban antes del lanzamiento. Hagamos la cuenta: eso equivale a ver una moneda de 2 cm desde unos 4.000 km de distancia, y es unas 3,6 millones de veces más fino que el grado de error de Mariner 2.


<aside class="recuadro sirve">
<p class="recuadro-t">¿Qué pasa si una antena se desvía apenas una décima de grado?</p>


Si el sistema está bien diseñado, nada: esa décima ya está prevista en el cálculo del enlace. El problema llega cuando el error supera lo previsto. Entonces la señal se debilita, baja la cantidad de datos que llegan a la Tierra o se pierde el contacto. Por eso JUICE lleva antenas de ganancia media y baja, más tolerantes, como respaldo para emergencias.

</aside>

<aside class="recuadro sabias">
<p class="recuadro-t">¿Sabías que…?</p>


Hoy existe un sistema completo de orientación para satélites pequeños, con tres ruedas, tres bobinas magnéticas, un rastreador de estrellas y un giroscopio, que pesa 470 gramos. Menos que una botella de agua llena†.

</aside>

<aside class="recuadro hondo">
<p class="recuadro-t">Para ir más hondo</p>


- [Mariner 2 - NSSDCA Master Catalog](https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1962-041A) — NASA NSSDCA (S0019): cómo se orientaba la primera sonda que visitó otro planeta.
- [The JUICE Spacecraft System Design](https://doi.org/10.1007/s11214-026-01289-4) — Space Science Reviews, 2026 (S0008): los sensores, ruedas y el apuntado de ±0,1° de la antena.
- [The James Webb Space Telescope Mission](https://arxiv.org/pdf/2304.04869) — PASP / arXiv, 2023 (S0032): rastreadores, giroscopios, ruedas y guiado fino de Webb.
- State-of-the-Art Small Spacecraft Technology (NASA/TP-20260003140) — NASA, 2026 (S0005): el estado del arte de la orientación en naves pequeñas.

</aside>

**Puertas:** [Lo que no cabe en un CubeSat](/biblioteca/satelital/parte-iii/iii-12-lo-que-no-cabe-en-un-cubesat), [Tres lugares para no perder nunca la conversación](/biblioteca/satelital/parte-ix/ix-4-tres-lugares-para-no-perder-nunca-la-conversacion), [Segundas vidas: Kepler sin ruedas y Deep Impact con otro nombre](/biblioteca/satelital/parte-vi/vi-4-segundas-vidas-kepler-sin-ruedas-y-deep-impact-con), [Cómo nos hablan: una imagen cada siete horas](/biblioteca/satelital/parte-ix/ix-1-como-nos-hablan-una-imagen-cada-siete-horas)
