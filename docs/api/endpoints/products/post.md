---
sidebar_label: Post
sidebar_position: 1
icon: arrow-right
---
# <Badge variant="api-endpoint" text="/products" /> <Badge variant="http-post" text="POST" />

Crear o modificar un producto.

<Tabs>
<TabItem value=":icon-project-roadmap: JSON request body" label=":icon-project-roadmap: JSON request body">

```json
{
    "code": "N30123",
    "title": "Zapatillas deportivas urbanas para hombre – modelo AirFlow",
    "description": "Estas zapatillas combinan estilo y comodidad para el uso diario. Diseñadas con materiales transpirables, suela de goma antideslizante y plantilla ergonómica, son ideales tanto para caminar por la ciudad como para entrenar en interiores. El modelo AirFlow ofrece un ajuste perfecto y un diseño moderno que se adapta a cualquier look casual. Disponibles en varias tallas y colores.",
    "price": {
        "amount": "49.95",
        "currency": "EUR"
    },
    "attributes": [
        {"title": "Material", "value": "Cuero"},
        {"title": "Color", "value": "negro con detalles en gris"},
        {"title": "Tallas disponibles", "value": "39, 40, 41, 42, 43, 44"},
        {"title": "Suela", "value": "goma antideslizante"},
        {"title": "Peso", "value": "850g (par, talla 42)"},
        {"title": "Uso recomendado", "value": "Uso diario y entrenamiento ligero"}
    ],
    "brand": {
        "code": "OW142302",
        "name": "Nike"
    },
    "category": {
        "code": "MC418292",
        "title": "Zapatillas deportivas",
        "description": "Calzado diseñado para ofrecer comodidad, soporte y rendimiento en actividades físicas o deportivas. Estas zapatillas también se adaptan al uso urbano y diario gracias a sus diseños modernos y materiales versátiles. Incluyen características como suelas antideslizantes, tejidos transpirables y estilos que combinan funcionalidad con moda."
    },
    "imageUrl": "https://m.media-amazon.com/images/I/61cELGQXXhL._AC_UL320_.jpg",
    "url": "https://www.amazon.es/Hitmars-Zapatillas-Deportivas-Transpirables-Sneakers/dp/B0CYGMZVL7",
    "metadata": {
        "videoUrl": "https://m.media-amazon.com/videos/C/dk14lkKlsnw._AC_UL1080_.mp4",
        "currentDiscountRate": "50%",
        "isNew": true,
        "isFeatured": false
    }
}
```

</TabItem>
<TabItem value=":icon-book: Documentación" label=":icon-book: Documentación">

<Badge variant="danger" icon="lock" text="code" />
: Código de producto, por ejemplo `N39291` <Badge variant="light" icon="arrow-both" text="255" />

<Badge variant="warning" text="isActive" />
: Indica si el producto está habilitado para ser utilizado por los servicios de Biteral, como recomendaciones, búsqueda o análisis. Si no se incluye este campo al enviar o actualizar el producto, se asume automáticamente que el producto está activo `true`. Poner isActive a `false` permite mantener el producto en el sistema sin que participe en ningún procesamiento o resultado de los servicios.

<Badge variant="danger" icon="lock" text="title" />
: Título del producto. <Badge variant="light" icon="arrow-both" text="10000" />

<Badge variant="warning" text="description" />
: Descripción del producto. <Badge variant="light" icon="arrow-both" text="60000" />

<Badge variant="warning" text="price" />
: El precio del producto. Un objeto JSON donde <Badge variant="danger" icon="lock" text="amount" /> es el precio del producto, y <Badge variant="danger" icon="lock" text="currency" /> es la moneda en la que se expresa el precio, según el estándar [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). Por ejemplo:
```json
    {
        "amount": "49.95",
        "currency": "EUR"
    }
```

<Badge variant="warning" text="attributes" />
: Los atributos del producto. Un array de objetos JSON donde <Badge variant="danger" icon="lock" text="title" /> <Badge variant="light" icon="arrow-both" text="255" /> es el título del atributo y <Badge variant="warning" text="value" /> <Badge variant="light" icon="arrow-both" text="60000" /> es su valor. Por ejemplo:
```json
    [
        {"title": "Material", "value": "Cuero"},
        {"title": "Color", "value": "negro con detalles en gris"},
        {"title": "Tallas disponibles", "value": "39, 40, 41, 42, 43, 44"},
        {"title": "Suela", "value": "goma antideslizante"},
        {"title": "Peso", "value": "850g (par, talla 42)"},
        {"title": "Uso recomendado", "value": "Uso diario y entrenamiento ligero"},
    ]
```

<Badge variant="warning" text="brand" />
: La marca del producto. Un objeto JSON donde <Badge variant="danger" icon="lock" text="code" /> <Badge variant="light" icon="arrow-both" text="255" /> es el código de la marca y <Badge variant="warning" text="name" /> <Badge variant="light" icon="arrow-both" text="255" /> su nombre. Por ejemplo:
```json
    {
        "code": "OW142398",
        "name": "Nike"
    }
```

<Badge variant="warning" text="category" />
: La categoría del producto. Un objeto JSON donde <Badge variant="danger" icon="lock" text="code" /> <Badge variant="light" icon="arrow-both" text="255" /> es el código de la categoría, <Badge variant="warning" text="title" /> <Badge variant="light" icon="arrow-both" text="255" /> el título y <Badge variant="warning" text="description" /> <Badge variant="light" icon="arrow-both" text="60000" /> su descripción. Por ejemplo:
```json
    {
        "code": "MC418298",
        "title": "Zapatillas deportivas",
        "description": "Calzado diseñado para ofrecer comodidad, soporte y rendimiento en actividades físicas o deportivas. Estas zapatillas también se adaptan al uso urbano y diario gracias a sus diseños modernos y materiales versátiles. Incluyen características como suelas antideslizantes, tejidos transpirables y estilos que combinan funcionalidad con moda."
    }
```

<Badge variant="warning" text="imageUrl" />
: La URL de la imagen del producto, preferiblemente una imagen de aproximadamente 600 píxeles de ancho. Por ejemplo: `https://m.media-amazon.com/images/I/61cELGQXXhL._AC_UL320_.jpg`

<Badge variant="warning" text="url" />
: La URL pública del producto. Por ejemplo: `https://www.amazon.es/Hitmars-Zapatillas-Deportivas-Transpirables-Sneakers/dp/B0CYGMZVL7`

<Badge variant="warning" text="metadata" />
: Datos adicionales que te resulten útiles cuando recibas el producto como resultado de las herramientas de Biteral. Un objeto JSON <Badge variant="light" icon="arrow-both" text="60000" />. Por ejemplo:
```json
    {
        "videoUrl": "https://m.media-amazon.com/videos/C/dk14lkKlsnw._AC_UL1080_.mp4",
        "currentDiscountRate": "50%",
        "isNew": true,
        "isFeatured": false
    }
```

</TabItem>
</Tabs>

### Actualizar un producto

Para actualizar los datos sobre un producto, realiza la misma petición `POST` a este endpoint con los nuevos datos.

Los datos que no especifiques mantendrán su valor anterior. Para eliminar un dato, pásalo como `null`

### Cargar varios productos a la vez

Puedes cargar los productos uno a uno, pero es más rápido cargarlos en bloques. Para hacerlo, pasa los productos en forma de un array, por ejemplo:

```json
[
    {
        "code": "N30123",
        "title": "Zapatillas deportivas urbanas para hombre – modelo AirFlow",
        "description": "Estas zapatillas combinan estilo y comodidad para el uso diario. Diseñadas con materiales transpirables, suela de goma antideslizante y plantilla ergonómica, son ideales tanto para caminar por la ciudad como para entrenar en interiores. El modelo AirFlow ofrece un ajuste perfecto y un diseño moderno que se adapta a cualquier look casual. Disponibles en varias tallas y colores.",
        "price": {
            "amount": "49.95",
            "currency": "EUR"
        }
    },
    {
        "code" : "J481955"
        ...
    },
    ...
]
```

!!!
Puedes cargar hasta 100 productos a la vez utilizando este método
!!!

!!!
Cuando cargas muchos productos a Biteral muy rápidamente, puede pasar un rato hasta que todos están disponibles para las herramientas de Biteral.
!!!
