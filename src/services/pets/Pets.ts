// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { Pet, petRequest, petResponse } from './models';
import { ListPetsParams } from './request-params';

export class PetsService extends BaseService {
  /**
   *
   * @param {number} [limit] - How many items to return at one time (max 100)
   * @returns {Promise<HttpResponse<Pet[]>>} A paged array of pets
   */
  async listPets(params?: ListPetsParams, requestConfig?: RequestConfig): Promise<HttpResponse<Pet[]>> {
    const request = new RequestBuilder<Pet[]>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/pets')
      .setRequestSchema(z.any())
      .setResponseSchema(z.array(petResponse))
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addQueryParam('limit', params?.limit)
      .build();
    return this.client.call<Pet[]>(request);
  }

  /**
   *
   * @returns {Promise<HttpResponse<any>>} Null response
   */
  async createPets(body: Pet, requestConfig?: RequestConfig): Promise<HttpResponse<undefined>> {
    const request = new RequestBuilder<undefined>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('POST')
      .setPath('/pets')
      .setRequestSchema(petRequest)
      .setResponseSchema(z.undefined())
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addHeaderParam('Content-Type', 'application/json')
      .addBody(body)
      .build();
    return this.client.call<undefined>(request);
  }

  /**
   *
   * @param {string} petId - The id of the pet to retrieve
   * @returns {Promise<HttpResponse<Pet>>} Expected response to a valid request
   */
  async showPetById(petId: string, requestConfig?: RequestConfig): Promise<HttpResponse<Pet>> {
    const request = new RequestBuilder<Pet>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/pets/{petId}')
      .setRequestSchema(z.any())
      .setResponseSchema(petResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam('petId', petId)
      .build();
    return this.client.call<Pet>(request);
  }
}
