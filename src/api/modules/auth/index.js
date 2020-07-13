import { post } from '../../utils';

export async function loginApi(data) {
  return post('/auth/login', data);
}

export async function registerApi(data) {
  return post('/auth/register', data);
}

export async function verifyApi(data) {
  return post('/auth/verify', data);
}
