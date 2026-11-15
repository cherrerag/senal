---
titulo: 'Cómo nos hablan: una imagen cada siete horas'
parte: IX
parte_titulo: ¿Cómo nos hablan?
orden: 109
---

*La sonda más grande que Europa envió a otro planeta tendrá, cada día, unas ocho horas para contar lo que vio, y en ese tiempo cabe mucho menos de lo que ve.*

<figure class="fig"><img src="/biblioteca/satelital/img/web_3ba9674495d1.jpg" alt="La antena de 35 m de la ESA en Malargüe, Mendoza, al atardecer: uno de los tres oídos con que la agencia escucha a JUICE y a las demás sondas del espacio profundo." loading="lazy" /><figcaption>La antena de 35 m de la ESA en Malargüe, Mendoza, al atardecer: uno de los tres oídos con que la agencia escucha a JUICE y a las demás sondas del espacio profundo. <span class="credito">Fuente: ESA (CC BY-SA 3.0 IGO)</span></figcaption></figure>


En Malargüe, en la provincia argentina de Mendoza, una antena de 35 metros de diámetro gira despacio hasta apuntar a un punto del cielo donde no se ve nada. Allí, a cientos de millones de kilómetros, viaja JUICE (Jupiter Icy Moons Explorer, el explorador de las lunas heladas de Júpiter), lanzada por la Agencia Espacial Europea (ESA) en abril de 2023 y con llegada prevista para julio de 2031. Cuando empiece a trabajar entre Ganímedes, Calisto y Europa, cada observación terminará en el mismo embudo: una radio que tiene que cruzar el sistema solar y una antena en tierra que la escucha unas horas por día.

Una nave que no puede contar lo que vio es una nave perdida. Por eso, antes de decidir qué cámaras llevaría JUICE, los ingenieros hicieron la cuenta más humilde de la misión: cuánto puede bajar por día.

## La cuenta en voz alta

El informe con que la ESA definió la misión, en 2014, supuso una radio de 50 kilobits por segundo y una sola pasada diaria de ocho horas sobre una estación terrena. La multiplicación es simple: 50.000 bits por segundo, por 3.600 segundos que tiene una hora, por 8 horas, da unos 1.440 millones de bits. Es decir, unos 1,4 gigabits por día, que son apenas unos 180 megabytes: menos de lo que ocupa un video corto en un teléfono.

La pregunta que guía esta parte es: si baja una imagen cada siete horas, ¿alcanza para lo que la misión necesita? Antes de responder hay que confesar un supuesto. Los documentos de la misión no dicen cuánto pesa "una imagen". Siete horas a 50 kilobits por segundo equivalen a unos 1,26 gigabits, casi todo el presupuesto del día. Una "imagen" de ese tamaño solo tiene sentido si hablamos de un producto enorme: un mosaico de muchas fotos o un cubo de datos de un espectrómetro, que registra cientos de colores por cada punto.

Una foto sola de la cámara principal, JANUS, es mucho más chica. Su detector tiene 2.000 por 1.504 píxeles, unos 3 millones. Si cada píxel se guardara con 12 bits, un valor habitual en cámaras científicas†, una foto sin comprimir ocuparía unos 36 megabits y tardaría unos 12 minutos en bajar. En una pasada de ocho horas cabrían unas 40. El problema real no es una imagen: es que los diez instrumentos de JUICE, todos juntos, producen muchísimo más de lo que la radio puede llevar.

## Lo que se queda afuera

Para comprobar si la misión era posible, el equipo simuló los primeros 100 días en órbita circular alrededor de Ganímedes, a 500 km de altura. El resultado fue una lista de renuncias. El altímetro láser no puede disparar todo el tiempo y deja, en el ecuador, una traza cada unos 20 km. El radar que sondea bajo el hielo solo trabaja sobre "regiones de interés". Los instrumentos que miden partículas y campos magnéticos quedaron con una parte de lo que habrían querido. Al final, todo cabía en 1,4 gigabits por día, pero el informe dejó escrita una frase que resume esta parte entera: la capacidad de bajada es "el factor clave que limita el retorno científico de la misión".

La nave que finalmente se construyó mejoró la cuenta. Según el artículo técnico publicado en 2026 por los responsables del diseño, JUICE combina dos bandas de radio y, en las pruebas de rendimiento, mostró un promedio de unos 3 gigabits diarios desde Júpiter, más del doble de lo exigido, con una ventana diaria de unas siete horas y media. Es un caño más ancho, pero sigue siendo un caño.

## La cadena: de la antena a la pantalla

Cada bit hace un recorrido largo. A bordo, JUICE guarda lo que observa en una memoria de 1.000 gigabits (al final de la vida útil), una sala de espera donde los datos aguardan su turno durante días. Cuando llega la hora, la antena principal de la nave, un plato de 2,5 m fijo al cuerpo, apunta a la Tierra. Del otro lado escuchan las tres estaciones de espacio profundo de la ESA, en Cebreros (España), New Norcia (Australia) y Malargüe, y desde allí los datos viajan al centro de control de Darmstadt, en Alemania.

<figure class="fig"><img src="/biblioteca/satelital/img/web_706e25721b1b.jpg" alt="JUICE en una recreación de la ESA: el plato blanco de 2,5 m, fijo al cuerpo de la nave, es la salida por donde sale todo lo que observa. Para apuntarlo hay que girar la sonda entera hacia la Tierra." loading="lazy" /><figcaption>JUICE en una recreación de la ESA: el plato blanco de 2,5 m, fijo al cuerpo de la nave, es la salida por donde sale todo lo que observa. Para apuntarlo hay que girar la sonda entera hacia la Tierra. <span class="credito">Fuente: ESA (CC BY-SA 3.0 IGO)</span></figcaption></figure>


La distancia agrega otro obstáculo: el tiempo. Desde Júpiter, una orden y su respuesta pueden tardar hasta 1 hora y 46 minutos en ir y volver. Nadie puede manejar JUICE "en vivo"; la nave recibe instrucciones con anticipación y tiene que resolver sola buena parte de sus problemas.

## Cuanto más lejos, más bajito

La señal se debilita con la distancia, y las misiones más lejanas lo pagan caro. Cuando la Voyager 2 llegó a Urano, en 1986, su señal llegaba con la cuarta parte de la fuerza que tenía en Saturno, y la NASA tuvo que unir varias antenas para escucharla. Treinta años después, New Horizons pasó junto a Plutón y necesitó más de 15 meses para bajar todo lo que había registrado. En el otro extremo, Europa Clipper, la sonda de la NASA que también va a Júpiter, puede enviar hasta 500 kilobits por segundo a una sola antena de 34 m: diez veces más que la cifra con que se diseñó JUICE.

## Las salidas

Hay dos caminos para ensanchar el embudo. Uno es el relevo: en Marte, los rovers casi nunca hablan directo con la Tierra, sino con los orbitadores que pasan por encima. El otro es la luz. En 2013, un experimento láser envió datos desde la órbita lunar a 622 megabits por segundo, y un satélite pequeño lanzado en 2022, poco más grande que una caja de zapatos, llegó a bajar 4,8 terabits en una sola pasada. El láser tiene su propio enemigo: una nube basta para cortarlo.

Esta parte recorre ese viaje paso a paso. Empieza por la cámara que produce once veces más de lo que puede enviar ([Una cámara que produce once veces más de lo que puede enviar](/biblioteca/satelital/parte-ix/ix-2-una-camara-que-produce-once-veces-mas-de-lo-que-pu)) y los tres meses que costará bajar dos sobrevuelos de Europa ([Tres meses para bajar dos sobrevuelos de Europa](/biblioteca/satelital/parte-ix/ix-3-tres-meses-para-bajar-dos-sobrevuelos-de-europa)). Sigue con las antenas repartidas alrededor del planeta ([Tres lugares para no perder nunca la conversación](/biblioteca/satelital/parte-ix/ix-4-tres-lugares-para-no-perder-nunca-la-conversacion)), con el ingenio que mantuvo audibles a las Voyager ([Escuchar a las Voyager: sumar antenas y cambiar el código en pleno viaje](/biblioteca/satelital/parte-ix/ix-5-escuchar-a-las-voyager-sumar-antenas-y-cambiar-el-)) y con lo que tarda una respuesta según la distancia ([2,6 segundos, 1 hora 46, casi un día: lo que tarda una respuesta](/biblioteca/satelital/parte-ix/ix-6-2-6-segundos-1-hora-46-casi-un-dia-lo-que-tarda-un)). Después vienen la autonomía ([Manejar en la Luna con 4 segundos de demora, aterrizar en Marte sin ayuda](/biblioteca/satelital/parte-ix/ix-7-manejar-en-la-luna-con-4-segundos-de-demora-aterri)), la rutina de un centro de control ([Un día en el control de una sonda](/biblioteca/satelital/parte-ix/ix-8-un-dia-en-el-control-de-una-sonda)), los relevos ([Por qué un satélite casi nunca le habla a otro](/biblioteca/satelital/parte-ix/ix-9-por-que-un-satelite-casi-nunca-le-habla-a-otro)), los minutos contados de un satélite pequeño ([Cuánto baja un satélite pequeño en lo que dura un paso](/biblioteca/satelital/parte-ix/ix-10-cuanto-baja-un-satelite-pequeno-en-lo-que-dura-un-)) y, al final, la promesa de hablar con luz ([Hablar con luz: 600 GB en una sola pasada](/biblioteca/satelital/parte-ix/ix-11-hablar-con-luz-600-gb-en-una-sola-pasada)).


<aside class="recuadro sirve">
<p class="recuadro-t">¿Y eso para qué sirve?</p>


Si baja una imagen cada siete horas, ¿alcanza? Para JUICE, la respuesta es "sí, si se elige bien". La misión no puede mirar todo lo que quiere: decide de antemano qué observar, comprime, guarda en memoria y baja por turnos. La ciencia de una sonda lejana se diseña alrededor de su radio. Por eso cada mejora en la bajada, como pasar de 1,4 a unos 3 gigabits diarios, se traduce directamente en más mapas, más trazas de radar y más preguntas respondidas.

</aside>

<aside class="recuadro sabias">
<p class="recuadro-t">¿Sabías que…?</p>


Después de pasar junto a Plutón en julio de 2015, New Horizons necesitó más de 15 meses para enviar los 6,25 gigabytes que había reunido. Estaba a unas 4,5 horas-luz de la Tierra y transmitía a 1 o 2 kilobits por segundo. La descarga terminó el 25 de octubre de 2016.

</aside>

<aside class="recuadro hondo">
<p class="recuadro-t">Para ir más hondo</p>


- [JUICE Definition Study Report (Red Book)](https://sci.esa.int/documents/33960/35865/1567260128466-JUICE_Red_Book_i1.0.pdf) — ESA, 2014 (S0046): el supuesto de 50 kbit/s y 8 horas diarias, la simulación de 100 días en Ganímedes y las renuncias de cada instrumento.
- [The JUICE Spacecraft System Design](https://doi.org/10.1007/s11214-026-01289-4) — Space Science Reviews, 2026 (S0008): la nave real, con su memoria, sus antenas, las tres estaciones de la ESA y el rendimiento de unos 3 Gbit diarios.
- [Science Overview of the Europa Clipper Mission](https://eprints.gla.ac.uk/326803/1/326803.pdf) — Space Science Reviews / Univ. Glasgow, 2024 (S0044): las velocidades de bajada de Europa Clipper y su plan para guardar datos hasta poder enviarlos.
- [Beyond Earth: A Chronicle of Deep Space Exploration, 1958-2016](https://www.nasa.gov/wp-content/uploads/2018/09/beyond-earth-tagged.pdf) — NASA History Division, 2018 (S0010): la larga descarga de New Horizons y el experimento láser desde la Luna.
- [Voyager: The Grand Tour of Big Science](https://history.nasa.gov/SP-4219/Chapter11.html) — NASA History Office (S0051): cómo se escuchó a la Voyager 2 en Urano y Neptuno.

</aside>

**Puertas:** [Una cámara que produce once veces más de lo que puede enviar](/biblioteca/satelital/parte-ix/ix-2-una-camara-que-produce-once-veces-mas-de-lo-que-pu), [Tres meses para bajar dos sobrevuelos de Europa](/biblioteca/satelital/parte-ix/ix-3-tres-meses-para-bajar-dos-sobrevuelos-de-europa), [Tres lugares para no perder nunca la conversación](/biblioteca/satelital/parte-ix/ix-4-tres-lugares-para-no-perder-nunca-la-conversacion), [Hablar con luz: 600 GB en una sola pasada](/biblioteca/satelital/parte-ix/ix-11-hablar-con-luz-600-gb-en-una-sola-pasada), [¿Por qué JUICE tarda ocho años en llegar a Júpiter?](/biblioteca/satelital/parte-v/v-10-por-que-juice-tarda-ocho-anos-en-llegar-a-jupiter)
