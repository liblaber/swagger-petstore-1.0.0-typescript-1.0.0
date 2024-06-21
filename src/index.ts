// This file was generated by liblab | https://liblab.com/

import { Environment } from './http/environment';
import { SdkConfig } from './http/types';
import { PetsService } from './services/pets';

export class TestSdk {
  public readonly pets: PetsService;

  constructor(public config: SdkConfig) {
    const baseUrl = config.environment || config.baseUrl || Environment.DEFAULT;
    this.config = {
      ...config,
      baseUrl,
    };
    this.pets = new PetsService(this.config);
  }

  set baseUrl(baseUrl: string) {
    this.pets.baseUrl = baseUrl;
  }

  set environment(environment: Environment) {
    this.pets.baseUrl = environment;
  }

  set token(token: string) {
    this.pets.token = token;
  }
}

// c029837e0e474b76bc487506e8799df5e3335891efe4fb02bda7a1441840310c
