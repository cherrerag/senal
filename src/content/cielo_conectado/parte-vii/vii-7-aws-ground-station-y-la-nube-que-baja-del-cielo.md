---
titulo: AWS Ground Station y la nube que baja del cielo
parte: VII
parte_titulo: ¿Qué hace falta en tierra para que todo esto funcione, y quién lo provee?
orden: 84
---

*Amazon alquila la antena, vende el servidor que procesa lo que baja por ella y, de paso, construye su propia constelación.*

<div class="galeria"><figure class="fig"><img src="/biblioteca/cielo_conectado/img/S0116_p018_4cb93bd7fea5.jpg" alt="El recorrido de AWS Ground Station según la NASA: se registra el satélite, se agenda el contacto, la antena baja los datos a una nube privada virtual y de ahí pasan al almacenamiento para procesarlos." loading="lazy" /><figcaption>El recorrido de AWS Ground Station según la NASA: se registra el satélite, se agenda el contacto, la antena baja los datos a una nube privada virtual y de ahí pasan al almacenamiento para procesarlos. <span class="credito">Fuente: NASA/Amazon Web Services, vía NASA SOA 2026</span></figcaption></figure><figure class="fig"><img src="/biblioteca/cielo_conectado/img/S0116_p019_4665d842739c.jpg" alt="Ubicación de las antenas de AWS Ground Station (2026): Alaska, Oregon, Ohio, Hawái, Irlanda, Estocolmo, Baréin, Ciudad del Cabo, Singapur, Seúl, Dubbo y Punta Arenas." loading="lazy" /><figcaption>Ubicación de las antenas de AWS Ground Station (2026): Alaska, Oregon, Ohio, Hawái, Irlanda, Estocolmo, Baréin, Ciudad del Cabo, Singapur, Seúl, Dubbo y Punta Arenas. <span class="credito">Fuente: Amazon Web Services, vía NASA SOA 2026</span></figcaption></figure><p class="galeria-pie">La antena como extensión de la nube: el flujo de datos desde el satélite hasta el servidor del cliente, y las regiones del mundo donde AWS tiene antenas, entre ellas Punta Arenas, en Chile.</p></div>


Para un operador de satélites de observación, el problema nunca fue solo bajar los datos. Era qué hacer después: copiarlos a un centro de proceso, guardarlos, analizarlos, entregarlos al cliente. AWS Ground Station, el servicio de estaciones terrenas de Amazon Web Services, ataca las dos cosas a la vez. Sus antenas transmiten los datos directamente a los servidores de Amazon (EC2) o a su almacenamiento (S3), y desde ahí el cliente los procesa con las mismas herramientas de la nube que usa cualquier empresa. La NASA da un ejemplo: tareas como pronóstico del tiempo o análisis de imágenes de desastres pueden pasar "de horas a minutos o segundos".

## Qué ofrece y cómo cobra

El producto es estandarizado. Según la NASA, AWS ofrece antenas de 5,4 m en cada una de sus regiones de antena, con subida en banda S y bajada en S y X. Se reserva por consola, se paga por minuto y no hay compromisos de largo plazo. Para clientes con más volumen hay dos variantes: prioridad sobre una antena para una constelación, o una solución dedicada diseñada a medida, con bandas, diámetros o ubicaciones especiales. Las tres fórmulas se pueden combinar.

Dos funciones muestran hacia dónde va el negocio. La entrega de datos entre regiones transporta los datos satelitales a otra región de AWS "en segundos" y "sin costo adicional", lo que permite empezar a procesar antes. El gemelo digital, disponible para todos los clientes desde agosto según el blog de AWS, deja probar la integración de una misión sin contactar un satélite real y sin tramitar licencias de satélite para el ensayo. Detrás está la red global de Amazon: en septiembre de 2024, la nube de AWS abarcaba 108 zonas de disponibilidad en 34 regiones geográficas, con seis regiones más anunciadas, entre ellas México.

## La estrategia de socios

AWS no intenta cubrir el mundo solo. Su programa de socios de estación como servicio deja que los proveedores tradicionales sumen las antenas de AWS a su red y ofrezcan la entrega de datos de AWS "sin inversiones iniciales". En julio de 2025 se sumó KSAT, con sus sitios polares y su centro de operaciones 24/7 en Tromsø. En enero de 2026 entró Skynopy, una empresa fundada en 2023 que opera una red terrestre virtualizada y nativa de la nube. ATLAS Space Operations, otro proveedor, ya despliega su software sobre la infraestructura de AWS.

El mismo patrón aparece en el video. Intelsat, hoy parte de SES, ofrece un servicio que conecta a sus clientes de medios directamente con la nube de AWS, con menos latencia y costos de conexión más bajos, según el blog de AWS. La nube ya no es solo destino de los datos: también es el lugar donde se interconectan operadores, telepuertos y clientes.

## Lo que no hace, por ahora

La oferta de AWS Ground Station cubre bien las bandas S y X de los satélites de observación y de los pequeños satélites. No es una red de gateways de banda ancha. Para eso Amazon construye otra cosa: Amazon Leo, la ex Kuiper, que a octubre de 2026 tenía 392 satélites en órbita y cuyo diseño incluye gateways, terminales y centros de operación propios, como explica la entrada sobre esa constelación. La compañía juega en dos tableros terrestres a la vez.


<aside class="recuadro sirve">
<p class="recuadro-t">¿Y eso para qué sirve?</p>


Para un telepuerto tradicional, que la nube sea también estación terrena cambia el terreno de juego. La antena sola vale menos si el cliente puede reservarla en una consola junto al servidor que procesará los datos. Las salidas son tres: ser socio de la nube y aportar lo que esta no tiene (sitios escasos, antenas grandes, licencias locales, operación humana); especializarse en servicios críticos como LEOP o defensa; o competir en precio en un mercado que se abarata. Quedarse como "antena aislada" es la opción más riesgosa.

</aside>

<aside class="recuadro sabias">
<p class="recuadro-t">¿Sabías que…?</p>


AWS también vende su servicio a gobiernos con antenas compartidas o dedicadas, y aclara que su programa de socios comerciales no cambia los acuerdos con clientes de seguridad nacional y defensa. Su blog de 2025 incluso publica guías de respuesta a incidentes de ciberseguridad para operaciones satelitales, donde una acción de contención puede tener que "esperar la próxima pasada orbital".

</aside>

<aside class="recuadro hondo">
<p class="recuadro-t">Para ir más hondo</p>


- [AWS Expands Ground Station as a Service Partner Program](https://aws.amazon.com/blogs/publicsector/aws-expands-ground-station-as-a-service-partner-program-with-ksat/) — AWS, 2026 (S0109): programa de socios, KSAT, Skynopy, entrega entre regiones y gemelo digital.
- [Aerospace & Satellite, AWS Public Sector Blog](https://aws.amazon.com/blogs/publicsector/category/public-sector/aerospace-and-satellite/) — AWS, 2025 (S0110): Intelsat y AWS Direct Connect, ciberseguridad y oferta para gobierno.
- [SOA: Ground Data Systems and Mission Operations](https://www.nasa.gov/wp-content/uploads/2026/05/11-soa-ground-data-systems-2026-final.pdf) — NASA, 2026 (S0116): antenas de 5,4 m, bandas, modelos de cobro y red de regiones de AWS.
- [10 Satellite Constellations Being Built Right Now (2026)](https://keeptrack.space/top-10/10-satellite-constellations-being-built-right-now) — KeepTrack, 2026 (S0016): Amazon Leo con 392 satélites en órbita a octubre de 2026.

</aside>

**Puertas:** [Estaciones como servicio: el mercado de alquilar antenas](/biblioteca/cielo_conectado/parte-vii/vii-5-estaciones-como-servicio-el-mercado-de-alquilar-an), [KSAT: 200 antenas en más de 40 sitios, del Ártico a la Antártica](/biblioteca/cielo_conectado/parte-vii/vii-6-ksat-200-antenas-en-mas-de-40-sitios-del-artico-a-), [Amazon Leo (ex Kuiper): 392 satélites y un servicio que aún no tiene fecha](/biblioteca/cielo_conectado/parte-ii/ii-6-amazon-leo-ex-kuiper-392-satelites-y-un-servicio-q), [Datacenters y cómputo: del gateway al borde de la nube](/biblioteca/cielo_conectado/parte-vii/vii-10-datacenters-y-computo-del-gateway-al-borde-de-la-n), [Cómputo en órbita: satélites que procesan antes de bajar](/biblioteca/cielo_conectado/parte-xii/xii-5-computo-en-orbita-satelites-que-procesan-antes-de-)
