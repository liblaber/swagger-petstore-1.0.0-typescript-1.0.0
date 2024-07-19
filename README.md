# PetstoreClient TypeScript SDK 1.0.0

Welcome to the PetstoreClient SDK documentation. This guide will help you get started with integrating and using the PetstoreClient SDK in your project.

## Versions

- API version: `1.0.0`
- SDK version: `1.0.0`

## Table of Contents

- [Setup & Configuration](#setup--configuration)
  - [Supported Language Versions](#supported-language-versions)
  - [Installation](#installation)
- [Authentication](#authentication)
  - [Access Token Authentication](#access-token-authentication)
- [Services](#services)
- [Models](#models)
- [License](#license)

# Setup & Configuration

## Supported Language Versions

This SDK is compatible with the following versions: `TypeScript >= 4.8.4`

## Installation

To get started with the SDK, we recommend installing using `npm`:

```bash
npm install petstore_client
```

## Authentication

### Access Token Authentication

The PetstoreClient API uses an Access Token for authentication.

This token must be provided to authenticate your requests to the API.

#### Setting the Access Token

When you initialize the SDK, you can set the access token as follows:

```ts
const sdk = new PetstoreClient({ token: 'YOUR_TOKEN' });
```

If you need to set or update the access token after initializing the SDK, you can use:

```ts
const sdk = new PetstoreClient();
sdk.token = 'YOUR_TOKEN';
```

## Services

The SDK provides various services to interact with the API.

<details> 
<summary>Below is a list of all available services with links to their detailed documentation:</summary>

| Name                                                 |
| :--------------------------------------------------- |
| [PetsService](documentation/services/PetsService.md) |

</details>

## Models

The SDK includes several models that represent the data structures used in API requests and responses. These models help in organizing and managing the data efficiently.

<details> 
<summary>Below is a list of all available models with links to their detailed documentation:</summary>

| Name                               | Description |
| :--------------------------------- | :---------- |
| [Pet](documentation/models/Pet.md) |             |

</details>

## License

This SDK is licensed under the MIT License.

See the [LICENSE](LICENSE) file for more details.

<!-- This file was generated by liblab | https://liblab.com/ -->
