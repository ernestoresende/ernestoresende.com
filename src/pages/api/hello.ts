import type { APIRoute } from 'astro'

export const get: APIRoute = async function get({ params, request }) {
  return {
    body: JSON.stringify({
      message: 'Hello!'
    })
  }
}
