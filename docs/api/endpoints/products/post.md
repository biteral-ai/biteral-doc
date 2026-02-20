---
sidebar_label: Post
sidebar_position: 1
icon: arrow-right
---
# <Badge variant="api-endpoint" text="/products" /> <Badge variant="http-post" text="POST" />

Crear o modificar un producto.

<Tabs>
<TabItem value="result" label={<Badge icon="json" text="JSON request body" transparent />}>

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
<TabItem value="documentation" label={<Badge icon="parameter" text="Documentation" transparent />}>

<table>
    <thead>
        <tr>
            <th>Parámetro</th>
            <th>Descripción</th>
        </tr>
    </thead>
    <tbody>

        <tr>
            <td><Badge variant="api parameter required" icon="required" text="code" /></td>
            <td>Código de producto, por ejemplo <Badge variant="value" text="N39291" /></td>
        </tr>

        <tr>
            <td><Badge variant="api parameter" icon="parameter" text="isActive" /></td>
            <td>
                Indica si el producto está habilitado para ser utilizado por los servicios de Biteral, como recomendaciones, búsqueda o análisis. Si no se incluye este campo al enviar o actualizar el producto, se asume automáticamente que el producto está activo <Badge variant="value" text="true" />. Poner <Badge variant="api parameter" text="isActive" /> a <Badge variant="value" text="false" /> permite mantener el producto en el sistema sin que participe en ningún procesamiento ni aparezca en ningún resultado.
            </td>
        </tr>

        <tr>
            <td><Badge variant="api parameter required" icon="required" text="title" /></td>
            <td>Título del producto. <Badge variant="value-restriction" icon="max-length" text="10000" /></td>
        </tr>

        <tr>
            <td><Badge variant="api parameter" icon="parameter" text="description" /></td>
            <td>Descripción del producto. <Badge variant="value-restriction" icon="max-length" text="60000" /></td>
        </tr>

        <tr>
            <td><Badge variant="api parameter" icon="parameter" text="price" /></td>
            <td>
                El precio del producto. Un objeto JSON donde <Badge variant="property required" icon="required" text="amount" /> es el precio del producto, y <Badge variant="property required" icon="required" text="currency" /> es la moneda en la que se expresa el precio, según el estándar [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). Por ejemplo:

                ```json
                {
                    "amount": "49.95",
                    "currency": "EUR"
                }
                ```
            </td>
        </tr>

        <tr>
            <td><Badge variant="api parameter" icon="parameter" text="attributes" /></td>
            <td>
                Los atributos del producto. Un array de objetos JSON donde <Badge variant="property required" icon="required" text="title" /> <Badge variant="value-restriction" icon="max-length" text="255" /> es el título del atributo y <Badge variant="property" icon="required" text="value" /> <Badge variant="value-restriction" icon="max-length" text="60000" /> es su valor. Por ejemplo:

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
            </td>
        </tr>

        <tr>
            <td><Badge variant="api parameter" icon="parameter" text="brand" /></td>
            <td>
                La marca del producto. Un objeto JSON donde <Badge variant="property required" icon="required" text="code" /> <Badge variant="value-restriction" icon="max-length" text="255" /> es el código de la marca y <Badge variant="property" text="name" /> <Badge variant="value-restriction" icon="max-length" text="255" /> su nombre. Por ejemplo:

                ```json
                {
                    "code": "OW142398",
                    "name": "Nike"
                }
                ```
            </td>
        </tr>

        <tr>
            <td><Badge variant="api parameter" icon="parameter" text="category" /></td>
            <td>
                La categoría del producto. Un objeto JSON donde <Badge variant="property required" icon="required" text="code" /> <Badge variant="value-restriction" icon="max-length" text="255" /> es el código de la categoría, <Badge variant="property" text="title" /> <Badge variant="value-restriction" icon="max-length" text="255" /> el título y <Badge variant="property" text="description" /> <Badge variant="value-restriction" icon="max-length" text="60000" /> su descripción. Por ejemplo:

                ```json
                {
                    "code": "MC418298",
                    "title": "Zapatillas deportivas",
                    "description": "Calzado diseñado para ofrecer comodidad, soporte y
                    rendimiento en actividades físicas o deportivas. Estas zapatillas
                    también se adaptan al uso urbano y diario gracias a sus diseños
                    modernos y materiales versátiles. Incluyen características como suelas
                    antideslizantes, tejidos transpirables y estilos que combinan
                    funcionalidad con moda."
                }
                ```
            </td>
        </tr>

        <tr>
            <td><Badge variant="api parameter" icon="parameter" text="imageUrl" /></td>
            <td>La URL de la imagen del producto, preferiblemente una imagen de aproximadamente 600 píxeles de ancho. Por ejemplo: <Badge variant="value" text="https://m.media-amazon.com/images/I/61cELGQXXhL._AC_UL320_.jpg" /></td>
        </tr>

        <tr>
            <td><Badge variant="api parameter" icon="parameter" text="url" /></td>
            <td>La URL pública del producto. Por ejemplo: <Badge variant="value" text="https://www.amazon.es/Hitmars-Zapatillas-Deportivas-Transpirables-Sneakers/dp/B0CYGMZVL7" /></td>
        </tr>

        <tr>
            <td><Badge variant="api parameter" icon="parameter" text="metadata" /></td>
            <td>
                Datos adicionales que te resulten útiles cuando recibas el producto como resultado de las herramientas de Biteral. Un objeto JSON <Badge variant="value-restriction" icon="max-length" text="60000" />. Por ejemplo:

                ```json
                {
                    "videoUrl": "https://m.media-amazon.com/videos/C/dk14lkKlsnw._AC_UL1080_.mp4",
                    "currentDiscountRate": "50%",
                    "isNew": true,
                    "isFeatured": false
                }
                ```
            </td>
        </tr>

    </tbody>
</table>

</TabItem>
</Tabs>

### Actualizar un producto

Para actualizar los datos sobre un producto, realiza la misma petición <Badge variant="http-post" text="POST" /> a este endpoint con los nuevos datos.

Los datos que no especifiques mantendrán su valor anterior. Para eliminar un dato, pásalo como <Badge variant="value" text="null" />

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

:::tip
Puedes cargar hasta 100 productos a la vez utilizando este método
:::

:::info
Cuando cargas muchos productos a Biteral muy rápidamente, puede pasar un rato hasta que todos están disponibles para las herramientas de Biteral.
:::
