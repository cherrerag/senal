---
titulo: Los límites del directo al celular según la GSMA
parte: IV
parte_titulo: ¿Cómo llega el satélite directo al celular y a las cosas?
orden: 52
---

*Incluso con 42.000 satélites y todo el espectro móvil del planeta, el directo al celular daría apenas una conexión tipo 3G al 12 % de la humanidad; ahí empieza y termina su promesa.*

La GSMA representa a las operadoras móviles del mundo, así que tiene interés en marcar los límites de un competidor potencial. Por eso su estudio de febrero de 2026, *The Limits of D2D*, se apoya en un escenario deliberadamente generoso: toma como modelo a Starlink, el líder, le supone la flota máxima anunciada y le regala todo el espectro posible. Aun así, las cifras son modestas. Y la explicación no es política, es física.

## Dos leyes que no se negocian

La primera es la **pérdida en el espacio libre**: la potencia de una señal cae con el cuadrado de la distancia. Un teléfono a 1 km de su torre está en una situación muy distinta a uno con un satélite a 550 km. Según la GSMA, el satélite debe superar una pérdida unas 300.000 veces mayor. Bajando a 330 km, la órbita muy baja que planea SpaceX, la desventaja sigue siendo de 110.000 veces. Compensarla del todo exigiría antenas o potencias inviables en el satélite, y el teléfono no puede ayudar: su antena es pequeña, omnidireccional y transmite con poca potencia.

La segunda es el **tamaño del haz**. Una celda terrestre mide unos cientos de metros; un haz satelital para teléfonos, entre 25 y 50 km. Todos los usuarios dentro de él comparten la misma capacidad. Las velocidades que se anuncian, unos 17 Mbit/s para Starlink y unos 120 Mbit/s para AST, son por haz, no por usuario. Hagamos la cuenta: un haz de 25 km de diámetro cubre unos 490 km². Si entrega 120 Mbit/s y cada usuario necesita 2 Mbit/s, caben 60 personas conectadas a la vez; con 17 Mbit/s, ocho. En una zona rural esos 490 km² pueden albergar a más de 100.000 personas; en una ciudad densa, a más de un millón.

## Lo que dicen los escenarios

Con 15.000 satélites, la cifra del pedido de SpaceX para su próxima generación, y entre 10 y 80 MHz de espectro móvil, lo realista hoy, el directo al celular podría sostener un servicio de 2 Mbit/s para entre 5 y 35 millones de personas a la vez. Usando todas las bandas de servicio móvil por satélite, unos 65 millones. Con 42.000 satélites, cerca de 180 millones. En porcentaje de la población mundial, los escenarios realistas quedan entre 0,1 % y 1,3 %. Para un servicio de 20 Mbit/s, comparable a un 4G, ningún escenario supera el 2 %.

Y el estudio advierte que su modelo es optimista. Supone que un haz puede combinar varias bandas a la vez, algo que hoy no es posible; no considera que entre el 50 % y el 90 % del uso móvil ocurre bajo techo, donde la señal satelital casi no llega; y asume que los haces pueden achicarse sin límite.

## Dónde sí alcanza

El reverso de las cifras es la geografía. El directo al celular rinde donde hay poca gente: con 15.000 satélites y todas las bandas satelitales, podría atender a más del 10 % de la población en zonas con menos de 40 habitantes por km², y a más del 20 % bajo 20 habitantes por km². Esos son justamente los lugares donde la red móvil no llega, porque el costo de cubrir el último 1 % a 3 % de la población crece de forma exponencial. Ahí está su valor: 300 millones de personas, el 4 % del mundo, viven fuera de la cobertura de banda ancha móvil. A eso se suman senderos, mares y desastres.

Lo que no resuelve es la **brecha de uso**: el 38 % de la población vive bajo cobertura móvil y no se conecta, por precio o por habilidades digitales. Ningún satélite cambia eso.


<aside class="recuadro sirve">
<p class="recuadro-t">¿Y eso para qué sirve?</p>


Para una operadora, el estudio es un argumento para tratar el directo al celular como un complemento valioso y no como una amenaza a su negocio principal: no compite en ciudades ni bajo techo. Para un satelital, marca el techo del mercado y dónde concentrar la oferta: zonas rurales despobladas, mar, emergencias y respaldo. Para un regulador, recuerda que conectar a quienes no usan internet exige política de precios y alfabetización, no solo cobertura.

</aside>

<aside class="recuadro sabias">
<p class="recuadro-t">¿Sabías que…?</p>


La GSMA distingue entre el directo al celular y la banda ancha satelital fija. Una antena de Starlink en un techo es direccional y usa bandas Ku y Ka con mucho más espectro; según Nokia, logra una experiencia comparable a la de un 5G fijo inalámbrico. Un teléfono en la mano no tiene nada de eso: misma constelación, física completamente distinta.

</aside>

<figure class="fig"><img src="/biblioteca/cielo_conectado/img/S0080_p004_280b0ca78a22.jpg" alt="Dos usos de la misma constelación: banda ancha fija con antena en el techo, que compite con el 5G fijo, y cobertura para teléfonos y sensores, que complementa la red móvil a velocidades limitadas." loading="lazy" /><figcaption>Dos usos de la misma constelación: banda ancha fija con antena en el techo, que compite con el 5G fijo, y cobertura para teléfonos y sensores, que complementa la red móvil a velocidades limitadas. <span class="credito">Fuente: Nokia, Satellite communication benchmarking with terrestrial 5G networks, 2025</span></figcaption></figure>



<aside class="recuadro hondo">
<p class="recuadro-t">Para ir más hondo</p>


- **Población bajo cobertura móvil:** 96 %; **brecha de cobertura:** 4 % (300 millones); **brecha de uso:** 38 %
- **Pérdida de señal frente a una torre a 1 km:** unas 300.000 veces a 550 km; unas 110.000 veces a 330 km
- **Usuarios simultáneos a 2 Mbit/s con 15.000 satélites:** 5 a 35 millones (10 a 80 MHz móviles); unos 65 millones (todas las bandas satelitales)
- **Techo con 42.000 satélites y todo el espectro móvil:** 12 % de la población (2 Mbit/s); menos de 2 % (20 Mbit/s)
- [The Limits of D2D](https://www.gsma.com/connectivity-for-good/spectrum/wp-content/uploads/2026/03/The-Limits-of-D2D-v2.pdf) — GSMA, 2026 (S0078): el modelo completo, los escenarios y las tablas de espectro por región.
- [Harnessing Spectrum Diversity (Spectrum for D2D)](https://www.gsma.com/connectivity-for-good/spectrum/wp-content/uploads/2025/09/Spectrum-for-D2D-Public-Policy-Paper.pdf) — GSMA, 2025 (S0077): brechas de cobertura y de uso.
- [Satellite communication benchmarking with terrestrial 5G networks](https://www.nokia.com/asset/i/215031) — Nokia, 2025 (S0080): por qué el D2D es complementario y no competidor de la red terrestre.

</aside>

**Puertas:** [El teléfono que habla con el cielo: quién cobra y cuándo funciona](/biblioteca/cielo_conectado/parte-iv/iv-1-el-telefono-que-habla-con-el-cielo-quien-cobra-y-c), [¿Le gana a la fibra? Lo que dicen las mediciones frente al 5G](/biblioteca/cielo_conectado/parte-ii/ii-15-le-gana-a-la-fibra-lo-que-dicen-las-mediciones-fre), [Diversidad de espectro: por qué la banda importa más que el satélite](/biblioteca/cielo_conectado/parte-iv/iv-12-diversidad-de-espectro-por-que-la-banda-importa-ma), [Conectividad rural: los programas que usan satélite en la región](/biblioteca/cielo_conectado/parte-xiii/xiii-9-conectividad-rural-los-programas-que-usan-satelite), [AST SpaceMobile: satélites gigantes para teléfonos comunes](/biblioteca/cielo_conectado/parte-iv/iv-4-ast-spacemobile-satelites-gigantes-para-telefonos-)
