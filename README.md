<br/>
<div align="center">
  <a href="https://www.buildwithfern.com/?utm_source=github&utm_medium=readme&utm_campaign=express-starter&utm_content=logo">
    <img src="fern.png" height="120" align="center" alt="header" />
  </a>
  
  <br/>

# Express + Fern starter repo

[![Contributors](https://img.shields.io/github/contributors/fern-api/express-starter.svg)](https://GitHub.com/dotnet/docs/graphs/contributors/)
[![Pulls-merged](https://img.shields.io/github/issues-search/fern-api/express-starter?label=merged%20pull%20requests&query=is%3Apr%20is%3Aclosed%20is%3Amerged&color=darkviolet)](https://github.com/dotnet/docs/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged)

[![Discord](https://img.shields.io/badge/Join%20Our%20Community-black?logo=discord)](https://discord.com/invite/JkkXumPzcG)

</div>

This repo is a starter repo for building an Express server using [Fern](https://github.com/fern-api/fern).

**Fern is an open source toolkit for designing, building, and consuming REST APIs.** With Fern, you can generate client libraries, API documentation, and boilerplate for your backend server.

With Fern, you:

1. Define your API
1. Implement your API on the backend
1. Consume your API on the frontend

## Quick start

### Step 1: Fork this repo

### Step 2: Clone your fork

### Step 3: Generate code

Most of the code for this server is auto-generated by Fern!

In a terminal, run:

```
npm install -g fern-api
fern generate
```

### Step 4: Run the backend

```
yarn install
yarn dev
```

Now you can cURL the server!

```
curl 'http://localhost:8080/movies/goodwill-hunting'
```

## Development

To get started, open a VSCode window for the root of this repo:

```
code .
```

Install the recommended extensions. These will give you a better experience in the IDE.

Install dependencies:

```
yarn install
```

Run the server:

```
yarn start
```

You can edit the server code, and the server will automatically reload.

### Auto-generated server code

Nearly all of the server code is generated by Fern when you run `fern generate`.
The generated code lives in [src/api/generated](src/api/generated).

In addition to saving you time, the auto-generated code gives you compile-time safety
that your API is implemented correctly. For example, if you forget to define the `getMovie`
endpoint, you'll get a compile error:

![backend mypy error](assets/missing-getMovie.png)

## Changing the API

The API is defined using the [Fern specification](https://github.com/fern-api/fern/blob/main/README.md#fern-and-openapi) which is a simpler format than an OpenAPI specification. The API definition
lives in the [fern/](fern/api/definition) directory. You can edit these YAML files
to update the API. Check out the [docs](https://buildwithfern.com/docs/definition) to read more about defining APIs.

Most of the server code in this repo is **automatically generated
by Fern.** You can regenerate the code using the Fern CLI:

```
npm install -g fern
fern generate
```

This will output newly generated code to [src/api/generated](src/api/generated).

When you change your API, you'll get compile errors if you're not implementing
the API correctly.

## Issues & contributing

If you run into any problems, join [our discord](https://discord.com/invite/JkkXumPzcG) or [file an
issue](https://github.com/fern-api/express-starter/issues). PRs are
welcome and encouraged!
