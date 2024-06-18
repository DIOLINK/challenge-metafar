const API_KEY = import.meta.env.VITE_API_KEY;
export function fetchGET(url: string) {
  return fetch(url, {
    method: 'GET',
    headers,
  });
}
export const headers: HeadersInit = {
  'content-type': 'application/json',
  Authorization: `apikey ${API_KEY}`,
};
