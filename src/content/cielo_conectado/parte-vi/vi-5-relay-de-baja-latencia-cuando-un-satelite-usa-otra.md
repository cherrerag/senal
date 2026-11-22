---
titulo: 'Relay de baja latencia: cuando un satélite usa otra constelación para hablar con tierra'
parte: VI
parte_titulo: ¿Cómo se comunican la ciencia y la exploración?
orden: 75
---

*Un satélite recién lanzado puede pasar semanas sin que nadie sepa cuál de los puntos en el radar es él, salvo que lleve a bordo un módem de Iridium.*

Imagine un lanzamiento compartido que suelta decenas de satélites pequeños en la misma órbita, casi pegados. Para comunicarse con el suyo, cada operador necesita saber dónde apuntar la antena. La referencia habitual son los datos de órbita que publica el Mando de Defensa Aeroespacial de Norteamérica (NORAD). Según el informe de segmento terrestre de la NASA de 2026, NORAD puede tardar una semana o más en agregar un objeto nuevo a su lista. Si salieron muchos juntos, no siempre queda claro qué dato corresponde a qué satélite, y "no es raro pasar semanas intentando contactar distintos objetos" hasta dar con el correcto.

## La solución: mandar un mensaje por otra red

El relay de baja latencia resuelve ese problema con una idea sencilla. En vez de esperar a pasar sobre una antena propia, el satélite manda mensajes cortos a través de una constelación de comunicaciones que está siempre a la vista. El ejemplo que cita la NASA es Iridium. El operador instala en su nave un transceptor Iridium de la serie 9600 y contrata un plan de datos "como los planes de celular". El módem tiene su propio identificador, el IMEI, igual que un teléfono. Los mensajes viajan por el servicio de datos en ráfagas cortas de Iridium y pueden llegar a hasta cinco destinos: correos, direcciones IP fijas u otro módem.

<figure class="fig"><img src="/biblioteca/cielo_conectado/img/web_e52430059add.jpg" alt="Un satélite Iridium de primera generación, armado con repuestos y exhibido en el Museo Nacional del Aire y del Espacio. Es el tipo de nave a la que el módem de cada satélite cliente le manda sus mensajes cortos." loading="lazy" /><figcaption>Un satélite Iridium de primera generación, armado con repuestos y exhibido en el Museo Nacional del Aire y del Espacio. Es el tipo de nave a la que el módem de cada satélite cliente le manda sus mensajes cortos. <span class="credito">Fuente: ideonexus (Flickr), vía Wikimedia Commons (CC BY-SA 2.0)</span></figcaption></figure>


Para el operador, la ganancia está en los momentos críticos. Justo después de separarse del cohete, cuando las estaciones todavía buscan el satélite, el módem ya puede mandar su estado de salud y su posición. Si algo falla antes de la puesta en marcha, el equipo recibe datos para diagnosticar. Y los científicos pueden recibir alertas en tiempo real sin reservar antes un pase de antena: si el instrumento detecta un fenómeno, el aviso sale de inmediato.

## Lo que no hace: bajar imágenes

El límite es la velocidad. Según la NASA, los relays actuales en órbita baja permiten 9,6 kilobits por segundo o menos, mientras que un satélite pequeño logra 3 megabits por segundo o más hablando directo con una estación. Las cuentas muestran la diferencia. Un archivo de telemetría de 1 megabyte tarda unos 14 minutos por el relay. Una imagen de 1 gigabyte tardaría más de nueve días; por enlace directo a 3 megabits por segundo, unos 45 minutos. El relay de baja tasa es el canal del mando y del estado de salud. Los datos pesados siguen bajando por estaciones en tierra o por relays ópticos.

Iridium anunció además un servicio de "banda media" de 88 kilobits por segundo, Certus 100, pensado para antenas pequeñas y equipos a batería. Eso es unas nueve veces más que el relay clásico: la misma telemetría de 1 megabyte bajaría en un minuto y medio.

## Quién más ofrece este servicio

En la tabla de relays de órbita baja de la NASA aparecen dos nombres. Iridium figura con nivel de madurez tecnológica 9, el máximo, que significa sistema probado en operación†. Analytical Space figura con nivel 6, el de un prototipo demostrado†, con su red Fast Pixel, que planea recoger datos de otros satélites y moverlos con enlaces láser entre nodos. En órbita geoestacionaria aparecen los operadores históricos. Viasat ofrece, con su sistema HaloNet, mando y telemetría en banda L de forma continua o bajo demanda para satélites en órbita baja. SES validó ante la NASA un servicio de mando y telemetría de baja tasa sobre sus satélites geoestacionarios en banda C, probado con un satélite de Planet Labs.

## Un detalle que pesa en el negocio

El relay exige decidir antes del lanzamiento. El módem debe ir integrado en la nave, y después no se agrega. Por eso los proveedores suelen licenciar sus chips a fabricantes de módems que actúan también como revendedores del servicio. Para la constelación, cada satélite que sube con su módem es un abonado con plan de datos durante toda su vida útil. Con miles de satélites pequeños lanzados cada año, aparece un abonado nuevo que no viaja en un avión ni en un barco: vive en órbita.


<aside class="recuadro sirve">
<p class="recuadro-t">¿Y eso qué significa para las constelaciones?</p>


Abre un cliente que antes casi no contaba: los propios satélites. Cada operador de satélites pequeños que quiere seguridad en el lanzamiento o alertas sin esperar es un comprador potencial de minutos de relay. Para Iridium, Viasat o SES es ingreso sobre una red ya pagada, con un amarre fuerte, porque el módem queda integrado a la nave. Para el operador del satélite, la cuenta es un seguro: un módem a bordo y un plan mensual a cambio de no perder semanas buscando su satélite.

</aside>

<aside class="recuadro sabias">
<p class="recuadro-t">¿Sabías que…?</p>


Entre sus propios satélites, Iridium se comunica en banda Ka (23,18 a 23,28 GHz). Con las naves cliente habla en banda L (1.616 a 1.626,5 MHz), la misma que usan sus teléfonos satelitales de mano†.

</aside>

<aside class="recuadro hondo">
<p class="recuadro-t">Para ir más hondo</p>


- **Velocidad del relay de baja tasa en órbita baja:** 9,6 kbps o menos. **Enlace directo típico de un satélite pequeño:** 3 Mbps o más.
- **Iridium Certus 100:** 88 kbps.
- **Bandas de Iridium:** banda L 1.616–1.626,5 MHz (usuario); Ka 23,18–23,28 GHz (entre satélites).
- **Madurez tecnológica (NASA):** Iridium nivel 9; Analytical Space (Fast Pixel) nivel 6.
- [SOA: Ground Data Systems and Mission Operations](https://www.nasa.gov/wp-content/uploads/2026/05/11-soa-ground-data-systems-2026-final.pdf) — NASA, 2026 (S0116): la sección de proveedores de relay de baja latencia y el problema de identificar satélites tras el lanzamiento.
- [NASA's Push Toward Commercial Space Communications Gains Momentum](https://www.nasa.gov/technology/space-comms/nasas-push-toward-commercial-space-communications-gains-momentum/) — NASA, 2025 (S0107): los servicios de mando y telemetría de SES y Viasat.

</aside>

**Puertas:** [TDRS: 40 años de relay continuo y su retiro programado](/biblioteca/cielo_conectado/parte-vi/vi-3-tdrs-40-anos-de-relay-continuo-y-su-retiro-program), [La NASA sale a comprar: 278,5 millones de dólares para relay comercial](/biblioteca/cielo_conectado/parte-vi/vi-4-la-nasa-sale-a-comprar-278-5-millones-de-dolares-p), [Iridium: el sobreviviente que ahora apuesta por NTN y PNT](/biblioteca/cielo_conectado/parte-iv/iv-5-iridium-el-sobreviviente-que-ahora-apuesta-por-ntn), [IoT por satélite: lo que muestra el caso Iridium y el NB-IoT NTN](/biblioteca/cielo_conectado/parte-iv/iv-13-iot-por-satelite-lo-que-muestra-el-caso-iridium-y-), [Estaciones como servicio: el mercado de alquilar antenas](/biblioteca/cielo_conectado/parte-vii/vii-5-estaciones-como-servicio-el-mercado-de-alquilar-an)
