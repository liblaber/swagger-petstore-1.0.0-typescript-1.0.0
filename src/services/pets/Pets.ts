// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Pet, petRequest, petResponse } from './models';
import { ListPetsParams } from './request-params';

export class PetsService extends BaseService {
  /**
   *
   * @param {number} [limit] - How many items to return at one time (max 100)
   * @returns {Promise<HttpResponse<Pet[]>>} A paged array of pets
   */
  async listPets(params: ListPetsParams, requestConfig?: RequestConfig): Promise<HttpResponse<Pet[]>> {
    const path = '/pets';
    const options = {
      responseSchema: z.array(petResponse),
      requestSchema: z.any(),
      queryParams: {
        limit: params.limit,
      },
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
    };

    return this.client.get(path, options);
  }

  /**
   *
   * @returns {Promise<HttpResponse<any>>} Null response
   */
  async createPets(body: Pet, requestConfig?: RequestConfig): Promise<HttpResponse<undefined>> {
    const path = '/pets';
    const options = {
      responseSchema: z.undefined(),
      requestSchema: petRequest,
      body: body as any,
      headers: {
        'Content-Type': 'application/json',
      },
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
    };

    return this.client.post(path, options);
  }

  /**
   *
   * @param {string} petId - The id of the pet to retrieve
   * @returns {Promise<HttpResponse<Pet>>} Expected response to a valid request
   */
  async showPetById(petId: string, requestConfig?: RequestConfig): Promise<HttpResponse<Pet>> {
    const path = this.client.buildPath('/pets/{petId}', { petId });
    const options = {
      responseSchema: petResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
    };

    return this.client.get(path, options);
  }
}
