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

function safeJsonParse(text: string) {
  try {
    return JSON.parse(text);
  } catch {
    return {};
  }
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
        'Content-Type': 'application/json',
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

  async listUsers() {
    return this.fetchWithAuth('/api/users');
  }

  async getUser(uid: string) {
    return this.fetchWithAuth(`/api/users/${uid}`);
  }

  async updateUser(uid: string, userData: UpdateUserPayload) {
    return this.fetchWithAuth(`/api/users/${uid}`, {
      method: 'PATCH',
      body: JSON.stringify(userData),
    });
  }


  async deleteUser(uid: string) {
    return this.fetchWithAuth(`/api/users/${uid}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ _method: 'DELETE', userId: uid })
    });
  }


}

export const weavyApi = new WeavyAPI({
  apiKey: import.meta.env.VITE_WEAVY_API_KEY || '',
});