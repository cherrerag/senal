---
titulo: 'Bajar a 340 kilómetros: por qué SpaceX quiere volar más cerca'
parte: II
parte_titulo: ¿Quién da internet desde órbita baja y cómo lo hace?
orden: 14
---

*Por debajo de la Estación Espacial, la señal es mejor y la basura se limpia sola; el precio es reemplazar satélites más seguido.*

<figure class="fig"><img src="/biblioteca/cielo_conectado/img/web_5878853589da.jpg" alt="El borde de la atmósfera, fotografiado desde la Estación Espacial al atardecer: una capa finísima, pero con roce suficiente para frenar a los satélites que vuelan a 340 km y hacerlos caer solos." loading="lazy" /><figcaption>El borde de la atmósfera, fotografiado desde la Estación Espacial al atardecer: una capa finísima, pero con roce suficiente para frenar a los satélites que vuelan a 340 km y hacerlos caer solos. <span class="credito">Fuente: NASA (dominio público)</span></figcaption></figure>


El 20 de febrero de 2024, SpaceX envió una carta a la FCC con un pedido que parecía técnico: usar, para los 7.500 satélites Gen2 ya autorizados, unas órbitas que estaban en su solicitud original pero que la FCC había dejado en suspenso. Eran cuatro capas a 340, 345, 350 y 360 km de altura, con inclinaciones de 53, 46, 38 y 96,9 grados. Es decir, por debajo de la Estación Espacial Internacional, que vuela a unos 400 km. El 26 de noviembre de 2024, la Oficina Espacial de la FCC lo aprobó.

En el mismo trámite, SpaceX sumó otra pieza: antenas para hablar directo con teléfonos en bandas móviles, en el rango de 1.429 a 2.690 MHz, fuera de Estados Unidos, y en el bloque PCS G que le arrienda T-Mobile dentro del país. Volar bajo y hablar con celulares son dos caras del mismo plan: la red Direct to Cell ya opera a 360 km, «más bajo que cualquier otra constelación», según SpaceX, para mejorar el enlace con un teléfono que tiene una antena diminuta.

## Lo que se gana

La primera ganancia es la latencia, el tiempo que tarda un paquete en ir y volver. Nokia lo calcula así: a 550 km, una señal tarda unos 1,8 milisegundos en subir al satélite si está justo encima. Como un viaje de ida y vuelta a un centro de datos cruza ese tramo cuatro veces, el mínimo físico es de 7 ms, y con ángulos reales va de 7 a 17 ms. Bajando a unos 300 km, ese aporte del espacio podría reducirse a unos 10 ms. No es mucho para ver una película, pero cuenta para juegos en línea, voz y redes empresariales.

La segunda ganancia es la potencia. La FCC aceptó que, más cerca de la Tierra, SpaceX puede transmitir en banda V con menos potencia (EIRP, la potencia efectiva radiada) para dejar la misma señal en el suelo. Eso mejora la convivencia con otros operadores en la misma banda.

La tercera es la limpieza. La FCC escribió que operar más bajo reduce el riesgo de choque en caso de falla y acorta el tiempo que un satélite muerto tarda en caer. A esas alturas, el roce con la atmósfera hace el trabajo de desorbitar en poco tiempo.

## Lo que cuesta

El mismo roce que limpia también desgasta. SpaceX pidió una tolerancia de 50 km hacia abajo y 70 hacia arriba (de 290 a 430 km) justamente para poder subir sus satélites cuando la actividad solar engrosa la atmósfera y frena las naves. Más roce significa más combustible para mantener la altura y, en última instancia, vidas útiles más cortas. Nokia estima que un satélite de órbita baja dura de 5 a 10 años, y que reponerlos se vuelve un costo operativo significativo pocos años después del despliegue.

Más abajo, además, cada satélite ve un pedazo más chico de la Tierra, así que hacen falta más para cubrir lo mismo†. Y aparecen nuevos vecinos: la FCC condicionó la operación bajo 400 km a la coordinación física con la NASA. Al aprobarla, solo había coordinación para 400 satélites, y cada nuevo grupo exige certificarla 30 días antes del lanzamiento. SpaceX se comprometió a no operar de forma rutinaria entre 385 y 430 km, la franja de la estación internacional y de la estación china.

## La cuenta de fondo

Para casi cualquier operador, bajar a 340 km sería un mal negocio: más satélites, más reemplazos, más lanzamientos. Para SpaceX la ecuación cambia porque fabrica sus satélites a más de 70 por semana y los sube en cohetes propios. En lo que iba de 2026, el catálogo registraba unas 440 reentradas de Starlink, más de una por día: la red ya funciona como una cinta transportadora que sube satélites nuevos y baja los viejos. La tercera generación, según SpaceX, operará en altitudes más bajas que las anteriores para mejorar la latencia.


<aside class="recuadro sirve">
<p class="recuadro-t">¿Y eso para qué sirve?</p>


Volar bajo convierte la constelación en un servicio de reposición permanente. Quien tiene la fábrica y el cohete transforma ese costo en ventaja: mejor latencia y mejor enlace con teléfonos, a cambio de un gasto que solo él puede pagar barato. Para un competidor que compra lanzamientos a terceros, copiar esa estrategia sería multiplicar su gasto de capital. Para la órbita baja en general, es una buena noticia: lo que falla abajo no se queda décadas dando vueltas.

</aside>

<aside class="recuadro sabias">
<p class="recuadro-t">¿Sabías que…?</p>


SpaceX mantiene a sus satélites recién lanzados entre 21 y 50 días en la órbita baja de inyección, probando las comunicaciones antes de subirlos. Si uno falla, lo desorbita en semanas. Por eso la FCC le exige informar cada 30 días cuántos satélites están en esa fase y cuántos están por debajo de 400 km.

</aside>

<aside class="recuadro hondo">
<p class="recuadro-t">Para ir más hondo</p>


- [SpaceX Gen2 deployment at 340-360 km (DA 24-1193)](https://docs.fcc.gov/public/attachments/DA-24-1193A1.docx) — FCC, 2024 (S0057): la autorización de noviembre de 2024, la coordinación con la NASA, las tolerancias orbitales y las bandas para celulares.
- [Public Notice SAT-01836](https://docs.fcc.gov/public/attachments/DOC-403909A1.pdf) — FCC, 2024 (S0056): el detalle de las cuatro capas, sus inclinaciones y la tolerancia pedida.
- [Satellite communication benchmarking with terrestrial 5G networks](https://www.nokia.com/asset/i/215031) — Nokia, 2025 (S0080): cómo la altura fija la latencia mínima y por qué reponer satélites pesa en los costos.
- [Starlink Progress Report 2025](https://starlink.com/public-files/starlinkProgressReport_2025.pdf) — SpaceX, 2025 (S0129): Direct to Cell a 360 km y los planes de V3 en órbitas más bajas.

</aside>

**Puertas:** [Baja, media o geoestacionaria: latencia, cobertura y costo por bit](/biblioteca/cielo_conectado/parte-i/i-2-baja-media-o-geoestacionaria-latencia-cobertura-y-), [Gen2: las 15.000 autorizaciones de la FCC y la letra chica](/biblioteca/cielo_conectado/parte-ii/ii-3-gen2-las-15-000-autorizaciones-de-la-fcc-y-la-letr), [Más de una reentrada por día: el ciclo de vida de una megaconstelación](/biblioteca/cielo_conectado/parte-xi/xi-3-mas-de-una-reentrada-por-dia-el-ciclo-de-vida-de-u), [Starlink Direct to Cell: del SMS a WhatsApp](/biblioteca/cielo_conectado/parte-iv/iv-2-starlink-direct-to-cell-del-sms-a-whatsapp), [Starlink V3 en Starship: un terabit por satélite](/biblioteca/cielo_conectado/parte-ii/ii-5-starlink-v3-en-starship-un-terabit-por-satelite)
