const API_BASE = import.meta.env.VITE_API_URL || '/api'

function buildUrl(path) {
  if (path.startsWith(API_BASE)) return path
  if (path.startsWith('/')) return `${API_BASE}${path}`
  return `${API_BASE}/${path}`
}

export async function get(path) {
  const res = await fetch(buildUrl(path))
  return res.json()
}
