---
title: Introducción
sidebar_position: 1
icon: arrow-right
---
# Integrar datos

Biteral analiza los datos de vuestros productos y el comportamiento de vuestros clientes para ofrecer herramientas como recomendaciones personalizadas, búsqueda en lenguaje natural, análisis de tendencias o etiquetas de cliente. Por eso, enviar datos precisos y actualizados a Biteral es clave para obtener el máximo rendimiento de la plataforma.

Aunque podéis enviarnos los datos en un archivo Excel o CSV, lo más recomendable es hacerlo a través de la API o el SDK para PHP. Esto garantiza la máxima flexibilidad y permite que Biteral funcione en tiempo real, adaptándose siempre a los datos más recientes.

:::tip
En muchos casos, esta inmediatez es clave: por ejemplo, Biteral puede sugerir productos más adecuados justo después de una compra, aprovechando el momento de mayor interés del cliente.
:::

Éstos son los tres tipos de datos clave que debes enviar a Biteral:

| <Badge icon="product" text="Productos" transparent />| <Badge icon="customer" text="Clientes" transparent /> | <Badge icon="event" text="Eventos" transparent /> |
| :--- | :--- | :--- |
| Los artículos que ofrecéis: nombre, descripción, precio, características, etc.| Identificadores internos para el seguimiento: ubicación, tipo de cliente, etc. | Acciones que realizan: visitas, compras, añadir al carrito, etc. |


### Métodos de integración

| <Badge icon="code" text="SDK PHP" transparent /> | <Badge icon="technology/api" text="API" transparent /> |
| :--- | :--- |
| Si trabajas con PHP, te recomendamos utilizar el [SDK de Biteral para PHP](/php-sdk/install). Es la forma más sencilla, flexible y segura de integrar la plataforma.| Utiliza la [API de Biteral](/api/connect) desde cualquier plataforma o lenguaje de programación conectando directamente. |

Como primer paso, continúa a la siguiente página para aprender cómo enviar tus primeros productos a Biteral:
