---
titulo: 'Apple y Globalstar: el SOS que convirtió al iPhone en terminal satelital'
parte: IV
parte_titulo: ¿Cómo llega el satélite directo al celular y a las cosas?
orden: 47
---

*El 15 de noviembre de 2022, millones de iPhone en EE.UU. y Canadá se volvieron teléfonos satelitales de emergencia con una actualización, y ninguna operadora móvil participó en el negocio.*

Ese día Apple activó "Emergency SOS via satellite" en la línea iPhone 14. Quien se quedaba sin señal celular ni wifi podía apuntar el teléfono al cielo, seguir las flechas en pantalla y mandar un mensaje de auxilio a través de los satélites de Globalstar. Un año después, con el iPhone 15, el servicio ya funcionaba en 14 países y regiones de tres continentes. Fue el primer servicio satelital masivo en un teléfono de consumo, y llegó antes que Starlink, AST o cualquier estándar.

## Cómo funciona

El modelo es exactamente el opuesto al de Starlink. No usa espectro de operadoras móviles, sino las bandas L y S que Globalstar tiene asignadas para el **servicio móvil por satélite** (MSS). Tampoco usa el estándar celular: Apple y Globalstar emplean protocolos propios, diseñados para mensajes cortos que llegan aunque la señal sea débil. La FCC lo describe así en su regla de 2024: Globalstar usa su espectro satelital licenciado para dar mensajería de emergencia a los iPhone recientes cuando no hay servicio celular ni wifi.

Globalstar opera una constelación en órbita baja de tipo "tubo doblado" (*bent pipe*): cada satélite recibe la señal y la reenvía de inmediato a una estación en tierra cercana, sin enlaces entre satélites. Iridium, su competidor, subraya en su informe anual el límite de ese diseño: requiere muchas estaciones terrenas y no cubre bien algunas latitudes extremas ni partes del océano.

## Por qué solo Apple podía hacerlo

El gran obstáculo del espectro MSS es que los teléfonos comunes no lo entienden. La GSMA lo dice claro: los equipos necesitan hardware específico para las bandas satelitales, presente solo en unos pocos modelos de gama alta. Nokia agrega la observación clave: para un fabricante como Apple, eso es un problema menor, porque diseña su propio teléfono; para una operadora móvil, que no controla los equipos que usan sus clientes, es una barrera enorme.

<figure class="fig"><img src="/biblioteca/cielo_conectado/img/web_c3f95b9c0805.jpg" alt="Teléfono satelital Globalstar de la era Qualcomm: un aparato aparte, con una antena gruesa que se extiende a mano. El iPhone hizo lo mismo dentro de un teléfono de bolsillo." loading="lazy" /><figcaption>Teléfono satelital Globalstar de la era Qualcomm: un aparato aparte, con una antena gruesa que se extiende a mano. El iPhone hizo lo mismo dentro de un teléfono de bolsillo. <span class="credito">Fuente: Statikuz, Wikimedia Commons (CC BY-SA 4.0)</span></figcaption></figure>


Apple juntó las tres piezas que nadie más tenía a la vez: el diseño del teléfono, una base de cientos de millones de usuarios† y el dinero para asegurar la red. El Foro Económico Mundial menciona esta alianza como ejemplo de fabricantes de teléfonos que entran al sector "mediante alianzas e inversiones". Apple financió buena parte de la renovación de la red de Globalstar a cambio de capacidad reservada†. El servicio se ofreció sin costo extra para los usuarios del iPhone†: un gasto de marketing que vende teléfonos, no un negocio de suscripción.

## ¿Modelo del futuro o excepción?

Para Globalstar fue una resurrección. En febrero de 2002 había quebrado con 3.340 millones de dólares de deuda; a comienzos de 1999 esperaba 500.000 suscriptores para fines de 2000 y 7,5 millones a largo plazo, cifras que nunca alcanzó. Un solo cliente gigante le dio lo que no había logrado con millones de usuarios dispersos.

Para el resto del mercado, es más bien una excepción que abrió camino. El modelo cerrado funciona porque Apple controla el hardware y se queda con el cliente completo: no hay operadora en la cadena ni ingresos compartidos. Pero el estándar ya está alcanzando ese diseño. El 3GPP incorporó en su Release 17 las bandas MSS al estándar celular; una de ellas, la n254 (1610–1626,5 y 2483,5–2500 MHz), es la llamada banda "Big LEO", el rango donde operan los sistemas de órbita baja como Globalstar†. Cuando los chips de cualquier fabricante soporten esas bandas, el satélite deja de ser una ventaja exclusiva del iPhone. Verizon ya ofrece mensajería satelital estándar en algunos teléfonos Android con Skylo, también sin costo extra.


<aside class="recuadro sirve">
<p class="recuadro-t">¿Y eso para qué sirve?</p>


El caso Apple-Globalstar mostró que el consumidor quiere un teléfono que no lo abandone fuera de la cobertura, y que alguien está dispuesto a pagar por ello. También mostró quién puede quedarse con ese valor: el que controla el dispositivo. Para una operadora, la lección es que si no ofrece el servicio satelital, puede hacerlo el fabricante del teléfono, saltándosela por completo.

</aside>

<aside class="recuadro sabias">
<p class="recuadro-t">¿Sabías que…?</p>


El servicio de Apple guía al usuario para que apunte el teléfono hacia el satélite, porque con la potencia y la antena de un iPhone el enlace es muy frágil†. La GSMA calcula que la señal desde un satélite a 550 km pierde unas 300.000 veces más fuerza que la de una torre a 1 km, y eso explica por qué el primer servicio masivo fue de mensajes y no de llamadas.

</aside>

<aside class="recuadro hondo">
<p class="recuadro-t">Para ir más hondo</p>


- **Lanzamiento:** 15 de noviembre de 2022, iPhone 14, EE.UU. y Canadá
- **Cobertura con iPhone 15:** 14 países y regiones de tres continentes (septiembre de 2023)
- **Quiebra de Globalstar:** febrero de 2002, 3.340 millones de dólares de deuda
- [FCC 24-28, Supplemental Coverage from Space Report and Order](https://docs.fcc.gov/public/attachments/FCC-24-28A1.pdf) — FCC, 2024 (S0076): cómo describe el regulador el modelo Apple-Globalstar frente al de espectro móvil.
- [Satellite communication benchmarking with terrestrial 5G networks](https://www.nokia.com/asset/i/215031) — Nokia, 2025 (S0080): espectro MSS, protocolos propios y el problema de los dispositivos.
- [Harnessing Spectrum Diversity (Spectrum for D2D)](https://www.gsma.com/connectivity-for-good/spectrum/wp-content/uploads/2025/09/Spectrum-for-D2D-Public-Policy-Paper.pdf) — GSMA, 2025 (S0077): ventajas y límites del espectro satelital para teléfonos.
- [Unit 1: Technological Success and Economic Failure](https://www.mit.edu/~deweck/research_files/comsats_2004_001_v10/Unit1%20Success%20and%20Failure/unit1_summary.htm) — MIT, 2004 (S0134): la quiebra de Globalstar y sus pronósticos.
- [Nonterrestrial Networks: Preparing for the Emerging D2D Market](https://www.cisco.com/c/en/us/solutions/collateral/service-provider/networking/nonterrestrial-networks-satellite-market-wp.pdf) — Cisco (S0073): los tres modelos de D2D, del propietario al estándar.

</aside>

**Puertas:** [El teléfono que habla con el cielo: quién cobra y cuándo funciona](/biblioteca/cielo_conectado/parte-iv/iv-1-el-telefono-que-habla-con-el-cielo-quien-cobra-y-c), [Globalstar y la lección del pronóstico optimista](/biblioteca/cielo_conectado/parte-ix/ix-3-globalstar-y-la-leccion-del-pronostico-optimista), [3GPP NTN: qué cambia cuando el satélite entra al estándar](/biblioteca/cielo_conectado/parte-iv/iv-9-3gpp-ntn-que-cambia-cuando-el-satelite-entra-al-es), [Diversidad de espectro: por qué la banda importa más que el satélite](/biblioteca/cielo_conectado/parte-iv/iv-12-diversidad-de-espectro-por-que-la-banda-importa-ma)
