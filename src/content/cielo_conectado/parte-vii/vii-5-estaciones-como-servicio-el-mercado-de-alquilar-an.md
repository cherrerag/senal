---
titulo: 'Estaciones como servicio: el mercado de alquilar antenas'
parte: VII
parte_titulo: ¿Qué hace falta en tierra para que todo esto funcione, y quién lo provee?
orden: 82
---

*Un operador de satélites puede pasar años sin tener una sola antena propia: le basta con reservar minutos en las de otros.*

<figure class="fig"><img src="/biblioteca/cielo_conectado/img/S0116_p029_e745ae7c33f2.jpg" alt="Antena de seguimiento en Fairbanks, Alaska, parte de la red de estaciones de la NASA. Es la clase de equipo, de seguimiento y con montura que gira para seguir al satélite, que un operador pequeño evita comprar y prefiere alquilar por minutos." loading="lazy" /><figcaption>Antena de seguimiento en Fairbanks, Alaska, parte de la red de estaciones de la NASA. Es la clase de equipo, de seguimiento y con montura que gira para seguir al satélite, que un operador pequeño evita comprar y prefiere alquilar por minutos. <span class="credito">Fuente: NASA/Clare Skelly, vía NASA SOA 2026 (dominio público)</span></figcaption></figure>


Un satélite en órbita baja pasa sobre una estación terrena unos minutos cada vez, varias veces al día†. Construir una red propia de antenas repartidas por el mundo para aprovechar esos minutos cuesta caro, exige licencias en cada país y deja las antenas ociosas la mayor parte del tiempo. De ahí nació la **estación como servicio** (GSaaS, por *Ground Station as a Service*): la NASA la define como un servicio administrado que permite comunicarse con un satélite, bajar y procesar sus datos "pagando por uso", sin construir estaciones propias.

## Cuatro formas de cobrar

El menú de precios se parece al de la nube. **Por minuto**: AWS Ground Station cobra solo el tiempo reservado, sin compromisos de largo plazo, y deja cancelar o mover una reserva hasta 15 minutos antes. **Por prioridad**: el mismo AWS ofrece reservar con prioridad una antena para una constelación, o diseñar una solución dedicada con bandas, diámetro y ubicación a medida. **Por pasada, minuto o gigabyte**: RBC Signals vende pases sueltos o un plan "core" de pasadas ilimitadas. **Por antena dedicada**: Leaf Space compra, instala y opera estaciones exclusivas para un cliente con frecuencias o necesidades especiales, un servicio que llama "Leaf Key".

En el escalón más alto están los servicios críticos. La fase de lanzamiento y primeras órbitas (LEOP), cuando el satélite recién separado del cohete tiene que ser encontrado, contactado y estabilizado, se vende aparte y con primas. Los avisos de la FCC de 2025 muestran casos concretos: Universal Space Network dio soporte LEOP desde Hawái a la nave lunar Blue Ghost de Firefly, e Intelsat lo hizo desde tres telepuertos para el satélite SXM-10 de SiriusXM.

## El volumen detrás del modelo

La escala explica por qué el modelo funciona. KSAT opera más de 100 antenas de 3,7 m de su línea KSATLITE en más de 15 sitios, y en 2023 atendió más de 1,5 millones de pasadas. Dividido por 365 días, son más de 4.100 pasadas diarias; repartidas entre 100 antenas, unas 41 por antena al día. ATLAS Space Operations suma 51 antenas en 34 estaciones. RBC Signals agregó más de 90 antenas en casi 60 lugares, pero en 2025 era dueña solo de alrededor del 30 %: el resto son antenas de socios cuya capacidad ociosa revende.

Ese último modelo tiene nombre en la industria. La NASA describe a los **agregadores** (RBC Signals, Infostellar, AWS, Spaceit) como plataformas que permiten a dueños de antenas vender su capacidad sobrante a una base global de clientes, y lo llama la "uberización" de las estaciones terrenas.

## ¿Qué cliente para qué modelo, y dónde está el margen?

Para un operador con uno o pocos satélites, el pago por minuto es casi siempre la opción lógica: convierte inversión en gasto variable. Una constelación de decenas de satélites empieza a preferir prioridad o antenas dedicadas, porque necesita pasadas garantizadas. Las megaconstelaciones de banda ancha, en cambio, construyen gateways propios, porque su tráfico es continuo y no cabe en minutos alquilados.

El margen está donde hay escasez. La NASA advierte que, con más competencia, los diferenciadores "se reducen", y que el futuro diferenciador será comunicarse con el satélite "a pedido". Las pasadas estándar en banda S o X tienden a volverse commodity. Lo que conserva valor son los sitios polares, las antenas grandes para la Luna, la banda Ka de alta tasa, el soporte LEOP, la operación 24/7 y las licencias ya coordinadas. En Estados Unidos, además, la licencia la tiene que tener quien controla la estación: el proveedor que opera la antena carga con el trámite, y eso también se cobra.


<aside class="recuadro sirve">
<p class="recuadro-t">¿Y eso para qué sirve?</p>


El alquiler de antenas bajó la barrera de entrada para cientos de operadores pequeños, que pueden lanzar un satélite sin construir red. Para los proveedores, la consecuencia es una competencia de precio en lo estándar y una carrera por los activos difíciles de copiar. El acuerdo de Eutelsat para vender el 80 % de sus telepuertos y gateways a un fondo de infraestructura, con la promesa de crear la mayor empresa neutral de estaciones como servicio, muestra que los inversionistas ya ven las antenas como torres de telefonía: un activo que rinde más cuanto más clientes comparten.

</aside>

<aside class="recuadro sabias">
<p class="recuadro-t">¿Sabías que…?</p>


La NASA, que tiene sus propias redes, también compra estaciones como servicio. En su catálogo de 2026 figuran como socios comerciales de su red cercana a la Tierra KSAT en Svalbard, la Antártica, Inuvik, Singapur y Punta Arenas, y SSC en Kiruna, Alaska, Hawái, Australia y Santiago de Chile.

</aside>

<aside class="recuadro hondo">
<p class="recuadro-t">Para ir más hondo</p>


- [SOA: Ground Data Systems and Mission Operations](https://www.nasa.gov/wp-content/uploads/2026/05/11-soa-ground-data-systems-2026-final.pdf) — NASA, 2026 (S0116): definición de GSaaS, modelos de cobro de AWS, Leaf Space, RBC Signals y ATLAS, y la "uberización" de las estaciones.
- [AWS Expands Ground Station as a Service Partner Program](https://aws.amazon.com/blogs/publicsector/aws-expands-ground-station-as-a-service-partner-program-with-ksat/) — AWS, 2026 (S0109): socios, LEOP y facturación flexible.
- [Public Notice SES-02776](https://docs.fcc.gov/public/attachments/DOC-411788A1.pdf) — FCC, 2025 (S0115): Intelsat como proveedor de LEOP para SXM-10.
- [Public Notice SES-02744](https://docs.fcc.gov/public/attachments/DOC-409522A1.pdf) — FCC, 2025 (S0114): el soporte LEOP de Universal Space Network a Blue Ghost.
- [Universal Registration Document FY24-25](https://www.companiesmarketcap.com/universal-registration-documents/43436.urd.en.2024-2025.pdf) — Eutelsat, 2025 (S0063): la venta de sus activos terrestres a EQT y la ambición de crear un proveedor neutral de estaciones como servicio.

</aside>

**Puertas:** [KSAT: 200 antenas en más de 40 sitios, del Ártico a la Antártica](/biblioteca/cielo_conectado/parte-vii/vii-6-ksat-200-antenas-en-mas-de-40-sitios-del-artico-a-), [AWS Ground Station y la nube que baja del cielo](/biblioteca/cielo_conectado/parte-vii/vii-7-aws-ground-station-y-la-nube-que-baja-del-cielo), [SSC, Leaf Space, Viasat RTE y los demás: el resto del mapa de estaciones](/biblioteca/cielo_conectado/parte-vii/vii-8-ssc-leaf-space-viasat-rte-y-los-demas-el-resto-del), [Mayorista, minorista, gobierno o capacidad como servicio: los modelos de negocio](/biblioteca/cielo_conectado/parte-ix/ix-5-mayorista-minorista-gobierno-o-capacidad-como-serv)
