---
title: Examples
position: 6
icon: arrow-right
---
The SDK includes several examples in [/examples](https://github.com/biteral-ai/biteral-sdk-php/tree/main/examples) that you can use as reference.

:::info
If you installed the SDK with composer, you will find all the examples in the `vendor/biteral-ai/biteral-sdk-php/examples` directory of your project.
:::

You can run the examples using the `bin/example` script included in the SDK:

First make sure that `bin/example` is executable:

```bash
chmod +x bin/example
```

Run `bin/example` without any parameters to get a list of the available examples:

```bash
Usage: bin/example <example-name>

Available examples:

  product-delete - Remove one product from a Biteral project
  product-get - Get one product from a Biteral project
  product-ingest-massive - Ingest many products into a Biteral project
  product-ingest - Ingest one product into a Biteral project
  simple-request - A simple request to first learn how the SDK works
  status - Get Biteral's API status and info about your request
  [...]
```
