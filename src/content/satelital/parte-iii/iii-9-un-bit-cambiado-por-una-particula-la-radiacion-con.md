---
titulo: 'Un bit cambiado por una partícula: la radiación contra la electrónica'
parte: III
parte_titulo: ¿Qué se necesita para construir una de estas máquinas?
orden: 41
---

*En el espacio, un solo grano de energía invisible puede convertir un 0 en un 1 dentro de la memoria de una nave, y nadie va a estar ahí para apretar el botón de reinicio.*

<figure class="fig"><img src="/biblioteca/satelital/img/web_664a7a9c0707.jpg" alt="Técnicos instalan la bóveda de titanio de Juno, una caja con paredes de casi un centímetro de espesor que protege la electrónica de la radiación de Júpiter." loading="lazy" /><figcaption>Técnicos instalan la bóveda de titanio de Juno, una caja con paredes de casi un centímetro de espesor que protege la electrónica de la radiación de Júpiter. <span class="credito">Fuente: NASA/JPL-Caltech/Lockheed Martin (dominio público)</span></figcaption></figure>


El 11 de septiembre de 2014, la sonda Dawn de la NASA viajaba de Vesta hacia Ceres cuando, de repente, dejó de empujar con su motor iónico y entró en «modo seguro». Los controladores reconstruyeron lo ocurrido: una combinación casual de partículas de alta energía había inhabilitado el sistema de propulsión, y a eso se sumó un error de software que nadie conocía. El 15 de septiembre, Dawn volvía a empujar. La radiación no había roto nada para siempre, pero había mostrado de qué es capaz.

## Dos maneras de dañar un chip

Los ingenieros distinguen dos efectos. El primero es lento: la dosis total, la radiación que el material absorbe a lo largo del tiempo, como el sol que va decolorando una tela. Se mide en rad o kilorad, y poco a poco degrada el chip hasta que deja de funcionar. El segundo es instantáneo: un efecto de partícula única, cuando un solo impacto deposita carga suficiente para provocar un cambio. Si solo voltea un bit de memoria, el daño es reversible. Si dispara una corriente descontrolada dentro del circuito, puede ser destructivo.

Para defenderse hay varias capas. La primera es la masa: rodear la electrónica de material. La segunda son los componentes «endurecidos», diseñados para resistir; hoy incluso se fabrican chips en procesos comerciales con transistores y trazados modificados para que sean más resistentes por diseño. La tercera es la vigilancia: memorias que corrigen sus propios errores, temporizadores de control que reinician un sistema colgado, revisiones periódicas que limpian la memoria y equipos repetidos. Y la última es la autonomía: un software capaz de detectar la falla, aislarla y volver a un estado seguro.

## Júpiter, el peor vecindario

Para JUICE, la radiación condicionó todo el diseño. Júpiter tiene un campo magnético unas 20 veces más intenso que el de la Tierra, y sus cinturones atrapan electrones con energías mucho más altas que los cinturones de Van Allen terrestres. La tabla de diseño de la misión anota una dosis ionizante total del orden de 1 gigarad, mil millones de rad, para el entorno de la nave.

La respuesta fue construir dos bóvedas. La electrónica más sensible viaja dentro de ellas, protegida por el cilindro central y los propios tanques de combustible de un lado, y por paneles forrados con una lámina de plomo del otro: unos 100 kg de plomo a nivel de nave. Los equipos se acomodaron para blindarse unos a otros, y durante el montaje se fabricaron «parches» de blindaje a medida. El objetivo, fijado ya en 2014, era que cada unidad recibiera como máximo 50 kilorad en su superficie exterior. De las 51 actividades de desarrollo tecnológico de la misión, 26 se dedicaron a la radiación.

<figure class="fig"><img src="/biblioteca/satelital/img/S0008_p011_67eff44826a9.jpg" alt="El plan de blindaje de JUICE: dos bóvedas de plomo sobre el cilindro central, baterías y ruedas que protegen a los equipos más sensibles, y metas de 50 kilorad para cada pieza electrónica." loading="lazy" /><figcaption>El plan de blindaje de JUICE: dos bóvedas de plomo sobre el cilindro central, baterías y ruedas que protegen a los equipos más sensibles, y metas de 50 kilorad para cada pieza electrónica. <span class="credito">Fuente: ESA / Airbus Defence and Space (The JUICE Spacecraft System Design, 2026)</span></figcaption></figure>


Hagamos una cuenta para dimensionar. Un CubeSat a 500 km de altura, con 2 mm de aluminio de blindaje, recibe en un año unos 2.133 rad, según un estudio citado por la NASA. Los componentes comerciales soportan, según una guía de la NASA, entre 2.000 y 10.000 rad. Es decir, un satélite pequeño con piezas comunes puede agotar su tolerancia en uno a cinco años, y eso en una órbita relativamente benigna. El entorno de Júpiter es un mundo aparte.


<aside class="recuadro sirve">
<p class="recuadro-t">¿Qué le pasa a una computadora que no puede reiniciarse a mano?</p>


Tiene que reiniciarse sola. Por eso las naves llevan circuitos que vigilan al procesador y lo reinician si se cuelga, memorias que corrigen bits cambiados y software que, ante una falla que no puede resolver, apaga lo prescindible, mantiene el contacto con la Tierra y espera órdenes. En JUICE, una unidad de reconfiguración duplicada y siempre encendida decide qué secuencia ejecutar ante cada alarma.

</aside>

<aside class="recuadro sabias">
<p class="recuadro-t">¿Sabías que…?</p>


JUICE lleva dosímetros dentro de sus propias bóvedas y un monitor de radiación, RADEM, que detecta protones, iones pesados y electrones. Los modelos de radiación de Júpiter tienen tanta incertidumbre que hace falta medir, en vivo, cuánta radiación se recibe en realidad.

</aside>

<aside class="recuadro hondo">
<p class="recuadro-t">Para ir más hondo</p>


- [The JUICE Spacecraft System Design](https://doi.org/10.1007/s11214-026-01289-4) — Space Science Reviews, 2026 (S0008): el plan de mitigación de radiación, las bóvedas y el sistema de detección y recuperación de fallas.
- [JUICE Definition Study Report (Red Book)](https://sci.esa.int/documents/33960/35865/1567260128466-JUICE_Red_Book_i1.0.pdf) — ESA, 2014 (S0046): el requisito de 50 kilorad por unidad y el entorno de electrones de Júpiter.
- State-of-the-Art Small Spacecraft Technology (NASA/TP-20260003140) — NASA, 2026 (S0005): dosis total, efectos de partícula única, blindaje y chips endurecidos en naves pequeñas.
- [Beyond Earth: A Chronicle of Deep Space Exploration, 1958-2016](https://www.nasa.gov/wp-content/uploads/2018/09/beyond-earth-tagged.pdf) — NASA History Division, 2018 (S0010): el episodio de Dawn en septiembre de 2014.

</aside>

**Puertas:** [Lo que no cabe en un CubeSat](/biblioteca/satelital/parte-iii/iii-12-lo-que-no-cabe-en-un-cubesat), [Explorer 1 y el cinturón invisible que rodea la Tierra](/biblioteca/satelital/parte-viii/viii-8-explorer-1-y-el-cinturon-invisible-que-rodea-la-ti), [Cuando el Sol se agita, los satélites sienten el aire](/biblioteca/satelital/parte-xi/xi-10-cuando-el-sol-se-agita-los-satelites-sienten-el-ai), [Lo que mata a una nave: una tormenta solar, una rueda, un panel](/biblioteca/satelital/parte-vi/vi-11-lo-que-mata-a-una-nave-una-tormenta-solar-una-rued), [Júpiter por dentro, Júpiter por sus lunas: Juno y JUICE](/biblioteca/satelital/parte-ii/ii-9-jupiter-por-dentro-jupiter-por-sus-lunas-juno-y-ju)
