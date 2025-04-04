
/**
 * @author : sachini Apsara
 * @date : 2025-04-04
 * @Project: Sentura Technologies Interview Task user auth
 **/

export interface User {
  id: string;
  uid: string;
  name: string;
  email: string;
  given_name?: string;
  family_name?: string;
  picture?: string;
  created_at: string;
  modified_at: string;
}

export interface CreateUserPayload {
  uid: string;
  name: string;
  email: string;
  given_name?: string;
  family_name?: string;
  picture?: string;
}

export interface UpdateUserPayload extends Partial<CreateUserPayload> {
  uid: string;
}