---
titulo: Lo que no cabe en un CubeSat
parte: III
parte_titulo: ¿Qué se necesita para construir una de estas máquinas?
orden: 44
---

*Un cubo de 10 cm tiene que resolver los mismos problemas que una sonda de seis toneladas, pero sin espacio para abrigarse ni para blindarse.*

<figure class="fig"><img src="/biblioteca/satelital/img/web_b37e46890efd.jpg" alt="HSKSAT, un CubeSat de 3U antes del vuelo: sus caras están cubiertas de celdas solares y no queda lugar para mantas térmicas ni blindajes gruesos. Una pila de 10 cm por lado." loading="lazy" /><figcaption>HSKSAT, un CubeSat de 3U antes del vuelo: sus caras están cubiertas de celdas solares y no queda lugar para mantas térmicas ni blindajes gruesos. Una pila de 10 cm por lado. <span class="credito">Fuente: NASA Johnson Space Center (dominio público)</span></figcaption></figure>


Una sonda grande se envuelve en mantas térmicas multicapa, como JUICE. Un CubeSat casi nunca puede. Viaja apretado dentro de un contenedor de lanzamiento que lo expulsa con un resorte, y no queda lugar para esas mantas alrededor. Además, una manta comprimida pierde drásticamente su capacidad de aislar, y sus bordes pueden engancharse en las guías del contenedor. Por eso, explica el informe de la NASA sobre naves pequeñas de 2026, en un CubeSat el control térmico se convierte en «un problema de recubrimientos»: pinturas, cintas y acabados elegidos para absorber o emitir la cantidad justa de calor.

<figure class="fig"><img src="/biblioteca/satelital/img/web_eee14211e168.jpg" alt="Un CubeSat recién soltado desde la Estación Espacial Internacional, a la vista de los paneles de la estación: así de pequeño sale al espacio, y con la misma lista de necesidades que una sonda." loading="lazy" /><figcaption>Un CubeSat recién soltado desde la Estación Espacial Internacional, a la vista de los paneles de la estación: así de pequeño sale al espacio, y con la misma lista de necesidades que una sonda. <span class="credito">Fuente: NASA (dominio público)</span></figcaption></figure>


El problema de fondo es la masa. Una nave grande tiene inercia térmica: tarda en calentarse y en enfriarse, como una olla pesada. Un CubeSat es una cucharita: reacciona enseguida a cada cambio. Cada vez que entra en la sombra de la Tierra, algo que en una órbita baja ocurre en cada vuelta, de alrededor de hora y media†, se enfría rápido.

## Una estufa para la batería

La pieza más delicada suele ser la batería, que tiene el rango de temperatura más estrecho. Tres CubeSats de una sola unidad, Compass-1, MASAT-1 y OUTFI-1, necesitaron un calefactor eléctrico pegado a la batería, además del control pasivo de toda la nave, para mantener la temperatura durante los eclipses. La buena noticia es que, como la nave es tan liviana, no hace falta mucha potencia: los calefactores de los satélites pequeños suelen ser láminas finas de Kapton con circuitos grabados que se encienden con un termostato o un sensor.

## Orientarse en menos de medio kilo

Durante décadas, apuntar con precisión en los tres ejes fue cosa de naves de unos 100 kg; solo hace relativamente poco llegó a los satélites más chicos. Hoy existe un módulo integrado, el iADCS-200 de la empresa AAC Clyde Space, que reúne tres ruedas de reacción, tres bobinas magnéticas, un rastreador de estrellas y una unidad inercial, con su propio procesador, en 470 gramos, y apunta con un error menor a un grado. Otro sistema integrado, el XACT de Blue Canyon Technologies, voló en las misiones MarCO y ASTERIA, ambas de 6U.

## Sin blindaje grueso

La radiación también aprieta. Un CubeSat a 500 km, con una piel típica de 2 mm de aluminio, recibe unos 2.133 rad por año. Muchos de sus componentes son comerciales, más baratos y eficientes, pero más sensibles: toleran entre 2.000 y 10.000 rad. Hagamos la cuenta: en el peor caso, la electrónica puede llegar a su límite en menos de un año, y los modelos de radiación a esa altura tienen una incertidumbre de al menos el doble. Por eso muchos CubeSats combinan procesadores comerciales con piezas de apoyo endurecidas, memorias que corrigen errores y temporizadores que reinician el sistema si se cuelga [Un bit cambiado por una partícula: la radiación contra la electrónica](/biblioteca/satelital/parte-iii/iii-9-un-bit-cambiado-por-una-particula-la-radiacion-con).


<aside class="recuadro sirve">
<p class="recuadro-t">¿Cuánto se puede encoger una nave sin perder lo esencial?</p>


Mucho, pero no sin costo. Se puede encoger la orientación hasta menos de medio kilo y la computadora hasta una placa. Lo que no se puede encoger es la física: el frío de un eclipse, la radiación y la luz que recibe un panel. Lo que se pierde al achicar no es la función, es el margen: menos tolerancia a fallas, menos años de vida y menos potencia.

</aside>

<aside class="recuadro sabias">
<p class="recuadro-t">¿Sabías que…?</p>


Las misiones biológicas de la NASA en nanosatélites, como GeneSat, PharmaSat o BioSentinel, usaron calefactores con control de temperatura en circuito cerrado para mantener en condiciones a sus pasajeros microscópicos.

</aside>

<aside class="recuadro hondo">
<p class="recuadro-t">Para ir más hondo</p>


- State-of-the-Art Small Spacecraft Technology (NASA/TP-20260003140) — NASA, 2026 (S0005): los capítulos de control térmico, orientación y radiación en naves pequeñas, con tablas de productos.
- Manual sobre satélites pequeños, edición de 2023 — UIT (S0003): por qué la poca masa y el poco volumen cambian el diseño de un satélite.

</aside>

**Puertas:** [Del cubo de 5 cm a la sonda de 6 toneladas: la escala de las máquinas](/biblioteca/satelital/parte-iii/iii-11-del-cubo-de-5-cm-a-la-sonda-de-6-toneladas-la-esca), [Un bit cambiado por una partícula: la radiación contra la electrónica](/biblioteca/satelital/parte-iii/iii-9-un-bit-cambiado-por-una-particula-la-radiacion-con), [Un cubo de 10 cm para que aprendieran los estudiantes](/biblioteca/satelital/parte-x/x-2-un-cubo-de-10-cm-para-que-aprendieran-los-estudian), [XI-IV: un kilo, más de 700 imágenes y 18 años de servicio](/biblioteca/satelital/parte-x/x-3-xi-iv-un-kilo-mas-de-700-imagenes-y-18-anos-de-ser), [Una vuelta cada 90 minutos, y hay que volver a subir](/biblioteca/satelital/parte-v/v-3-una-vuelta-cada-90-minutos-y-hay-que-volver-a-subi)
