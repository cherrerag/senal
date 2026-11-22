---
titulo: 'El teléfono que habla con el cielo: quién cobra y cuándo funciona'
parte: IV
parte_titulo: ¿Cómo llega el satélite directo al celular y a las cosas?
orden: 42
---

*En marzo de 2026, alguien perdido en un sendero chileno sin una sola barra de señal ya podía mandar un WhatsApp desde un teléfono común; la pelea ahora es por quién se queda con esa conversación.*

<figure class="fig"><img src="/biblioteca/cielo_conectado/img/web_7c725fda6ffe.jpg" alt="Laguna en el circuito W de Torres del Paine, Chile: el tipo de paisaje donde un teléfono común queda sin barras y donde el satélite directo busca llenar el vacío." loading="lazy" /><figcaption>Laguna en el circuito W de Torres del Paine, Chile: el tipo de paisaje donde un teléfono común queda sin barras y donde el satélite directo busca llenar el vacío. <span class="credito">Fuente: Douglas Scortegagna, Wikimedia Commons (CC BY 2.0)</span></figcaption></figure>


El 25 de marzo de 2026, la Subsecretaría de Telecomunicaciones de Chile anunció que Entel y Starlink sumaban WhatsApp, Google Maps, AccuWeather y X a los mensajes de texto que ya viajaban por satélite. Con eso, Chile pasó a ser el primer país de América Latina y el quinto del mundo con datos satelitales directos al celular. La letra chica dice mucho del negocio: el servicio funciona con cielo despejado, con un equipo compatible y actualizado, y con el roaming y la voz sobre LTE (VoLTE) activados. El teléfono cree que está de visita en la red de otro operador. Ese otro operador vuela a 360 km de altura.

A esto la industria lo llama **directo al dispositivo** (D2D, por *direct-to-device*), o directo al celular: un satélite que se conecta con un teléfono o un sensor normal, sin parábola ni antena externa. Las operadoras móviles (MNO, por *mobile network operator*) lo ven como una forma de llevar su cobertura cerca del 100 % sin levantar torres. Los operadores satelitales (SNO) lo ven como el primer mercado de consumo masivo de su historia. Y los fabricantes de teléfonos lo ven como una función que vende equipos.

## Dos decisiones que ordenan todo el mapa

Cada sistema D2D responde dos preguntas. La primera es **con qué espectro**. Hay dos caminos: usar las bandas de la telefonía móvil terrestre (identificadas para IMT, el estándar de la UIT para redes móviles), que pertenecen a una operadora y que el satélite solo puede usar con su permiso; o usar las bandas del **servicio móvil por satélite** (MSS), las bandas L y S que la UIT reparte desde hace décadas a operadores como Iridium, Globalstar o Inmarsat. El primer camino sirve para cualquier teléfono que ya está en el bolsillo; el segundo exige que el chip del teléfono sepa sintonizar esas bandas.

La segunda pregunta es **con qué tecnología**. Starlink y AST SpaceMobile hacen que su satélite se comporte como una antena 4G más, y corrigen desde la red los efectos de la distancia y la velocidad, como el corrimiento Doppler (el cambio de frecuencia que produce un satélite que pasa a casi 8 km por segundo). La alternativa es el estándar **3GPP NTN** (redes no terrestres), donde el propio teléfono hace esas correcciones; funciona mejor, pero solo en equipos nuevos. Ericsson resume el dilema así: el 4G sin modificar es la solución pragmática de corto plazo; el NTN es la apuesta de largo plazo.

| Sistema | Dueño | Flota y órbita | Espectro | Tecnología | Estado a noviembre de 2026 | Quién tiene al cliente |
|---|---|---|---|---|---|---|
| Starlink Direct to Cell | SpaceX | Más de 650 satélites a 360 km (mediados de 2025) | Bandas móviles de cada socio, entre 1,6 y 2,7 GHz; 50 MHz de banda S comprados a EchoStar, aún sin traspasar | 4G LTE sin modificar | Comercial: mensajes, apps y datos al aire libre en seis continentes | La operadora socia, por ahora |
| AST SpaceMobile | AST SpaceMobile (en bolsa; Vodafone, AT&T, Rakuten y American Tower entre sus accionistas) | 12 BlueBird en órbita baja (octubre de 2026) | Bandas bajas de las operadoras; acuerdos por banda L (Ligado) y banda S | 2G/4G/5G sin modificar | Pruebas y beta; servicio continuo aún no disponible | La operadora, con ingresos compartidos |
| Apple + Globalstar | Globalstar, con Apple como socio | Órbita baja, satélites repetidores | MSS en bandas L y S | Propietaria | Comercial: emergencias y mensajes en iPhone 14 y posteriores | Apple |
| Iridium NTN Direct | Iridium | 66 satélites en malla | MSS en banda L | 3GPP NTN (NB-IoT) | Lanzamiento comercial previsto para 2026 | Operadoras y fabricantes de equipos |
| Skylo | Skylo, sobre satélites geoestacionarios arrendados | GEO de terceros, como Viasat | MSS | 3GPP NTN (NB-IoT) | Comercial: mensajería en algunos Android, con Verizon | La operadora |
| Lynk Global (+ Omnispace) | Lynk; SES invirtió 20 millones de dólares; fusión con Omnispace anunciada en 2025 | 5 satélites en órbita (marzo de 2024) | Bandas móviles 617–960 MHz fuera de EE.UU.; banda S de Omnispace | Sin modificar | SMS con operadoras en mercados pequeños | La operadora |

## ¿Quién cobra?

Hoy, casi todo el dinero pasa por la operadora móvil. SpaceX dice que se integra "como un socio de roaming estándar"; AST busca repartir ingresos con cada operadora; Cisco, que vende la plataforma para conectar ambos mundos, da por hecho que los satelitales venderán roaming mayorista porque la operadora es "dueña de la relación con el cliente". Los precios al usuario todavía tantean el terreno: T-Mobile cobra 10 dólares al mes por su servicio satelital si no viene incluido en el plan; One NZ anunció 3 dólares; Verizon no cobra extra por la mensajería de Skylo; Entel Perú lo incluye en planes desde 29,9 soles para SMS y desde 59,9 soles para WhatsApp ilimitado. Apple, en cambio, lo regala dentro del iPhone† y se queda con el cliente completo.

El equilibrio empezó a moverse en septiembre de 2025, cuando SpaceX acordó comprarle a EchoStar espectro propio por unos 19.600 millones de dólares. Con bandas exclusivas, Starlink ya no necesita pedirle permiso a cada operadora para iluminar un país. Iridium lo dice sin rodeos en su informe anual: si ese servicio se despliega, "podría aumentar de manera significativa la competencia". La GSMA, que agrupa a las operadoras, responde con su propia línea: el uso satelital de bandas móviles debe derivar siempre de la licencia de la operadora.

## ¿Cuándo va a funcionar en cualquier parte?

Depende de qué se entienda por "funcionar". Mensajes de texto y apps livianas al aire libre ya funcionan, con demoras: en EE.UU. solo la mitad de los SMS satelitales llegaban en menos de 3 segundos en las primeras mediciones. Banda ancha móvil comparable a la terrestre, en interiores y en ciudades, no va a llegar nunca por satélite, según los cálculos de la GSMA: incluso con 42.000 satélites y todo el espectro móvil disponible, un servicio tipo 3G alcanzaría para el 12 % de la población mundial. El D2D es un complemento para el 4 % de la humanidad que vive fuera de la cobertura móvil, unos 300 millones de personas, y para todos los demás cuando salen de ella.

Lo que viene se separa en dos grupos. **Aprobado y financiado o en construcción:** la primera generación de Starlink en servicio; la compra del espectro de EchoStar, firmada y en espera de la FCC y el Departamento de Justicia de EE.UU., con cierre previsto hacia el 30 de noviembre de 2027; los BlueBird de AST, que se fabrican y lanzan; y el NTN Direct de Iridium, que usa la constelación que ya está arriba. **Propuesto:** la nueva generación de Starlink sobre ese espectro, con una petición a la FCC por 15.000 satélites en órbita muy baja y la promesa de cien veces más capacidad; las 45 a 60 naves que AST necesita para un servicio continuo en sus mercados clave; y la armonización mundial que se discutirá en la Conferencia Mundial de Radiocomunicaciones de 2027 (CMR-27).


<aside class="recuadro sirve">
<p class="recuadro-t">¿Y eso para qué sirve?</p>


Para una operadora, el D2D convierte las zonas sin cobertura en un argumento de venta sin construir torres, y le da un respaldo cuando un terremoto o un incendio tumba su red. Para un operador satelital es la puerta a miles de millones de teléfonos que ya existen. El riesgo para la operadora es que, con espectro propio, el satelital deje de necesitarla. El negocio en dinero, eso sí, es más chico de lo que sugieren los titulares: el Foro Económico Mundial y McKinsey estiman que hacia 2035 el D2D servirá sobre todo para mensajes y llamadas en zonas remotas, por unos 2.000 millones de dólares al año. Las cuentas cierran mejor del lado de los chips: ese segmento pasaría de 2.000 a 8.000 millones de dólares anuales, y el D2D explicaría más del 70 % del aumento.

</aside>

<aside class="recuadro sabias">
<p class="recuadro-t">América Latina: Chile y Perú, adelante</p>


Entel es el socio de Starlink en los dos países. En Perú, el Ministerio de Transportes y Comunicaciones autorizó el proyecto como un "espacio controlado de experimentación" por 24 meses, y Entel se presenta como el séptimo operador del mundo con este servicio. La cobertura llega hasta 50 km antes de la frontera y cubre las 200 millas marítimas. En noviembre de 2026, Anatel formalizó en Brasil espectro en banda S para Starlink y AST SpaceMobile, la banda clave del D2D.

</aside>

<aside class="recuadro hondo">
<p class="recuadro-t">Para ir más hondo</p>


- **Personas con acceso a Starlink Direct to Cell a través de sus socios:** más de 400 millones (informe 2025)
- **Valor anual del D2D en 2035:** unos 2.000 millones de dólares (WEF/McKinsey, 2024)
- **Satélites D2D por lanzar en los próximos 10 años:** más de 12.000 (SWISSto12/Novaspace, 2026)
- [Starlink Progress Report 2025](https://starlink.com/public-files/starlinkProgressReport_2025.pdf) — SpaceX, 2025 (S0129): flota, usuarios, socios y la promesa de la nueva generación.
- [Satellite direct-to-device: 4G or 3GPP NTN?](https://www.ericsson.com/4aed3b/assets/local/reports-papers/ericsson-technology-review/docs/2025/satellite-direct-to-device-communication.pdf) — Ericsson, 2025 (S0075): los dos modelos de espectro y de tecnología, comparados.
- [Satellite communication benchmarking with terrestrial 5G networks](https://www.nokia.com/asset/i/215031) — Nokia, 2025 (S0080): precios de T-Mobile, One NZ y Verizon, y mediciones reales.
- [The Limits of D2D](https://www.gsma.com/connectivity-for-good/spectrum/wp-content/uploads/2026/03/The-Limits-of-D2D-v2.pdf) — GSMA, 2026 (S0078): cuántos usuarios puede servir el D2D, con escenarios.
- [Chile se posiciona como primer país de la región…](https://www.subtel.gob.cl/chile-se-posiciona-como-primer-pais-de-la-region-y-quinto-del-mundo-entel-y-starlink-d2c-amplian-sus-servicios-incluyendo-aplicaciones-como-whatsapp-y-google-maps/) — Subtel, 2026 (S0024): el anuncio chileno y sus condiciones.

</aside>

**Puertas:** [Starlink Direct to Cell: del SMS a WhatsApp](/biblioteca/cielo_conectado/parte-iv/iv-2-starlink-direct-to-cell-del-sms-a-whatsapp), [19.600 millones de dólares por espectro: SpaceX compra las bandas de EchoStar](/biblioteca/cielo_conectado/parte-iv/iv-3-19-600-millones-de-dolares-por-espectro-spacex-com), [Los límites del directo al celular según la GSMA](/biblioteca/cielo_conectado/parte-iv/iv-11-los-limites-del-directo-al-celular-segun-la-gsma), [Diversidad de espectro: por qué la banda importa más que el satélite](/biblioteca/cielo_conectado/parte-iv/iv-12-diversidad-de-espectro-por-que-la-banda-importa-ma), [Entel y Starlink: Chile, primer país de la región con datos directo al celular](/biblioteca/cielo_conectado/parte-xiii/xiii-5-entel-y-starlink-chile-primer-pais-de-la-region-co)
