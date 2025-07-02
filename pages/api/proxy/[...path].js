export default async function handler(req, res) {
  const workerUrl = `https://ai-gateway-proxy.rishikeshpatange128.workers.dev${req.url.replace('/api/proxy', '')}`;
  
  const headers = {
    'Content-Type': 'application/json',
    'x-api-key': 'demo123',
    'x-user-id': req.headers['x-user-id'] || 'valid_user' // Forward the header
  };

  try {
    const response = await fetch(workerUrl, {
      method: req.method,
      headers: headers,
      body: req.body ? JSON.stringify(req.body) : undefined
    });
    res.status(response.status).json(await response.json());
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}