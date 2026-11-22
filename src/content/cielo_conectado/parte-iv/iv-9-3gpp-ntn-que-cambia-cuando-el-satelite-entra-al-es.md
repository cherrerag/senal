---
titulo: '3GPP NTN: qué cambia cuando el satélite entra al estándar'
parte: IV
parte_titulo: ¿Cómo llega el satélite directo al celular y a las cosas?
orden: 50
---

*Durante medio siglo, hablar por satélite exigió un teléfono especial; desde marzo de 2022, el estándar que usan todos los celulares del mundo incluye al satélite como una celda más.*

El 3GPP (*3rd Generation Partnership Project*) es el consorcio que escribe las especificaciones del 4G y el 5G. Sus documentos se publican por entregas, llamadas *releases*, y lo que entra en ellas termina, años después, en los chips de todos los fabricantes. En 2017 el 3GPP empezó a estudiar cómo llevar el 5G a los satélites. Lo llamó **NTN**, redes no terrestres. Tras dos rondas de estudio, el Release 17, cerrado en marzo de 2022, fue el primero en estandarizar el acceso directo por satélite.

## Dos sabores y un cambio de responsabilidad

El Release 17 definió dos variantes. **NR-NTN** es el 5G New Radio adaptado al satélite, para teléfonos y también para terminales con antena pequeña (VSAT). **IoT-NTN** adapta las tecnologías de IoT celular, NB-IoT y LTE-M, para sensores y mensajería de muy bajo consumo.

El cambio de fondo está en quién corrige los efectos de la distancia. Un satélite en órbita baja viaja a unos 7,5 km por segundo, lo que produce un corrimiento Doppler de la frecuencia y una deriva del tiempo de la señal. En los sistemas que usan 4G sin modificar, como Starlink y AST, la red corrige esos efectos para un punto de referencia en cada haz. En NTN lo hace el propio teléfono: primero averigua su posición por GPS u otro sistema de navegación (GNSS), luego recibe del satélite su posición y velocidad, y con eso calcula y aplica la corrección exacta. Además, el estándar duplicó de 16 a 32 los procesos de retransmisión para que la demora del satélite no ahogue el enlace, y agregó traspasos programados por tiempo y por ubicación, aprovechando que la órbita de cada satélite se conoce de antemano.

## Release por release

- **Release 17 (marzo de 2022):** satélites transparentes, que solo repiten la señal, en órbita baja y geoestacionaria; bandas L y S de servicio móvil por satélite (n254, n255, n256).
- **Release 18 (junio de 2024):** bandas Ka para terminales con antena; mejoras de cobertura de subida; ubicación del usuario verificada por la red, necesaria para emergencias; traspasos entre red terrestre y satelital.
- **Release 19 (cierre a fines de 2025):** satélites regenerativos, con la estación base a bordo; banda Ku; equipos de capacidad reducida para IoT. Las frecuencias y la tecnología de Iridium entraron al estándar en esta entrega.
- **Release 20 (previsto para marzo de 2027):** operación resistente a la pérdida de GNSS por bloqueo o suplantación; voz sobre NB-IoT; teléfonos que transmitan con más potencia, hasta 37 dBm; primeros estudios del 6G, que nacerá con el satélite incluido.

<figure class="fig"><img src="/biblioteca/cielo_conectado/img/S0071_p003_13b477c5d15b.jpg" alt="Las dos arquitecturas NTN. Arriba, el satélite transparente solo repite la señal hacia una estación en tierra (Release 17). Abajo, el regenerativo lleva la estación base a bordo y se enlaza con otros satélites (Release 19)." loading="lazy" /><figcaption>Las dos arquitecturas NTN. Arriba, el satélite transparente solo repite la señal hacia una estación en tierra (Release 17). Abajo, el regenerativo lleva la estación base a bordo y se enlaza con otros satélites (Release 19). <span class="credito">Fuente: Universidad de Padua y Toyota, arXiv 2026</span></figcaption></figure>


## Lo que rinde en la práctica

Nokia calcula el desempeño de un teléfono común conectado a un satélite a 600 km, en 2 GHz y con 30 MHz de ancho de banda: unos 20 Mbit/s de bajada en la mediana, pero solo entre 100 y 600 kbit/s de subida. El cuello de botella es el teléfono, que transmite con 23 dBm (unos 0,2 W) y una antena que irradia en todas direcciones. Con eso alcanza para llamar y mandar mensajes donde no hay nada; no para subir un video. Un estudio de 2026 de la Universidad de Padua y Toyota simuló el estándar completo y halló otra diferencia de escala: un satélite en órbita baja entrega unos 170 kbit/s por kilómetro cuadrado, contra 1,4 en órbita geoestacionaria, porque sus haces cubren áreas mucho más chicas.

## Quién gana y quién pierde

Gana el **operador móvil**, que puede comprarle servicio a cualquier satelital que siga el estándar y conectarlo a su núcleo de red con los mismos mecanismos que usa para el roaming. Ganan los **fabricantes de chips**: Ericsson cuenta que varios ya integran NB-IoT en plataformas de teléfonos, porque sirve para mensajería por satélites geoestacionarios existentes. Pierde terreno quien vende **tecnología propietaria**: el modelo Apple-Globalstar o las radios propias de los operadores históricos dejan de ser la única puerta. Iridium lo entendió y prefirió entrar al estándar antes que quedar fuera.

El freno está en los equipos. La GSMA advierte que el 3GPP ha estandarizado más de 60 bandas 5G terrestres y los teléfonos usan solo una parte; las bandas satelitales n254, n255 y n256 están hoy en un puñado de modelos de gama alta.


<aside class="recuadro sirve">
<p class="recuadro-t">¿Y eso para qué sirve?</p>


Para una operadora, el estándar convierte al satélite en un proveedor intercambiable, como un socio de roaming, y le quita poder al que tiene tecnología cerrada. Para un fabricante o un integrador de IoT, abre un mercado de volumen: el mismo chip sirve en tierra y en el espacio. El precio es la espera: el estándar funciona solo en equipos nuevos, y el parque instalado de teléfonos tarda años en renovarse.

</aside>

<aside class="recuadro sabias">
<p class="recuadro-t">¿Sabías que…?</p>


En el NTN del Release 17, el teléfono necesita saber dónde está antes de poder hablar con el satélite. Si alguien bloquea el GPS, el enlace satelital también cae. Por eso el Release 20 estudia cómo operar sin GNSS, una preocupación que creció con los casos de interferencia y suplantación de la navegación.

</aside>

<aside class="recuadro hondo">
<p class="recuadro-t">Para ir más hondo</p>


- **Bandas NTN estandarizadas:** n254 (1610–1626 / 2483,5–2500 MHz), n255 (1626,5–1660,5 / 1525–1559 MHz), n256 (1980–2010 / 2170–2200 MHz); Ka n510 a n512
- **Desempeño en teléfono (órbita baja, 2 GHz, 30 MHz):** bajada de 15 a 25 Mbit/s; subida de 100 a 600 kbit/s (Nokia)
- **Capacidad por área:** 170 kbit/s/km² en órbita baja frente a 1,4 kbit/s/km² en geoestacionaria (simulación, 2026)
- [5G NR Non-Terrestrial Networks: From Early Results to the Road Ahead](https://arxiv.org/pdf/2601.04882) — Universidad de Padua y Toyota, arXiv, 2026 (S0071): los releases 17 a 20 y simulaciones del estándar completo.
- [5G New Radio for spectrum allocations below 5 MHz (Global coverage through non-terrestrial networks)](https://www.nokia.com/asset/i/212761) — Nokia, 2025 (S0081): arquitectura, desafíos de órbita baja, IoT y desempeño esperado.
- [Satellite direct-to-device: 4G or 3GPP NTN?](https://www.ericsson.com/4aed3b/assets/local/reports-papers/ericsson-technology-review/docs/2025/satellite-direct-to-device-communication.pdf) — Ericsson, 2025 (S0075): cómo corrige el teléfono el Doppler y qué viene en el 6G.
- [Harnessing Spectrum Diversity (Spectrum for D2D)](https://www.gsma.com/connectivity-for-good/spectrum/wp-content/uploads/2025/09/Spectrum-for-D2D-Public-Policy-Paper.pdf) — GSMA, 2025 (S0077): bandas estandarizadas y su escasa presencia en teléfonos.
- [Iridium 10-K 2025](https://www.sec.gov/Archives/edgar/data/1418819/000141881926000009/irdm-20251231.htm) — Iridium, 2026 (S0079): su ingreso al Release 19.

</aside>

**Puertas:** [¿4G de siempre o NTN? El debate que plantea Ericsson](/biblioteca/cielo_conectado/parte-iv/iv-10-4g-de-siempre-o-ntn-el-debate-que-plantea-ericsson), [Del 5G NTN al 6G: el calendario del 3GPP hasta 2030](/biblioteca/cielo_conectado/parte-xii/xii-4-del-5g-ntn-al-6g-el-calendario-del-3gpp-hasta-2030), [Iridium: el sobreviviente que ahora apuesta por NTN y PNT](/biblioteca/cielo_conectado/parte-iv/iv-5-iridium-el-sobreviviente-que-ahora-apuesta-por-ntn), [IoT por satélite: lo que muestra el caso Iridium y el NB-IoT NTN](/biblioteca/cielo_conectado/parte-iv/iv-13-iot-por-satelite-lo-que-muestra-el-caso-iridium-y-), [Apple y Globalstar: el SOS que convirtió al iPhone en terminal satelital](/biblioteca/cielo_conectado/parte-iv/iv-6-apple-y-globalstar-el-sos-que-convirtio-al-iphone-)
