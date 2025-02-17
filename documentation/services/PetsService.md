# PetsService

A list of all methods in the `PetsService` service. Click on the method name to view detailed information about that method.

| Methods                     | Description |
| :-------------------------- | :---------- |
| [listPets](#listpets)       |             |
| [createPets](#createpets)   |             |
| [showPetById](#showpetbyid) |             |

## listPets

- HTTP Method: `GET`
- Endpoint: `/pets`

**Parameters**

| Name  | Type   | Required | Description                                    |
| :---- | :----- | :------- | :--------------------------------------------- |
| limit | number | ❌       | How many items to return at one time (max 100) |

**Return Type**

`Pet[]`

**Example Usage Code Snippet**

```typescript
import { PetstoreClient } from 'petstore_client';

(async () => {
  const petstoreClient = new PetstoreClient({
    token: 'YOUR_TOKEN',
  });

  const { data } = await petstoreClient.pets.listPets({
    limit: 81,
  });

  console.log(data);
})();
```

## createPets

- HTTP Method: `POST`
- Endpoint: `/pets`

**Parameters**

| Name | Type                    | Required | Description       |
| :--- | :---------------------- | :------- | :---------------- |
| body | [Pet](../models/Pet.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { Pet, PetstoreClient } from 'petstore_client';

(async () => {
  const petstoreClient = new PetstoreClient({
    token: 'YOUR_TOKEN',
  });

  const input: Pet = {
    id: 2,
    name: 'name',
    tag: 'tag',
  };

  const { data } = await petstoreClient.pets.createPets(input);

  console.log(data);
})();
```

## showPetById

- HTTP Method: `GET`
- Endpoint: `/pets/{petId}`

**Parameters**

| Name  | Type   | Required | Description                   |
| :---- | :----- | :------- | :---------------------------- |
| petId | string | ✅       | The id of the pet to retrieve |

**Return Type**

`Pet`

**Example Usage Code Snippet**

```typescript
import { PetstoreClient } from 'petstore_client';

(async () => {
  const petstoreClient = new PetstoreClient({
    token: 'YOUR_TOKEN',
  });

  const { data } = await petstoreClient.pets.showPetById('petId');

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
