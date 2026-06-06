const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000'

export async function get(path){
  const res = await fetch(`${API_BASE}${path}`)
  return res.json()
}
