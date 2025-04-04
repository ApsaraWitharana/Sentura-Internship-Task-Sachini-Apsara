import { CreateUserPayload, UpdateUserPayload } from "./types.ts";

/**
 * @author : sachini Apsara
 * @date : 2025-04-04
 * @Project: Sentura Technologies Interview Task user auth
 **/

const API_URL = 'https://c35013e82272434488987d00b49bfbf7.weavy.io';

interface WeavyConfig {
  apiKey: string;
}


class WeavyAPI {
  private config: WeavyConfig;

  constructor(config: WeavyConfig) {
    this.config = config;
  }

  private async fetchWithAuth(endpoint: string, options: RequestInit = {}) {
    try {
      const headers: HeadersInit = {
        'Authorization': `Bearer ${this.config.apiKey}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json', // Ensure Content-Type is set
      };


      const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers,
        mode: 'cors',
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("API Error Response:", errorText); // Log full error
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }


      return response.status === 204 ? null : response.json();
    } catch (error) {
      console.error('API Request failed:', error);
      throw error;
    }
  }

  async createUser(userData: CreateUserPayload) {
    return this.fetchWithAuth('/api/users', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }




}

export const weavyApi = new WeavyAPI({
  apiKey: import.meta.env.VITE_WEAVY_API_KEY || '',
});