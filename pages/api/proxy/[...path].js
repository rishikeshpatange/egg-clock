export default async function handler(req, res) {
  const url = `https://ai-gateway-proxy.rishikeshpatange128.workers.dev${req.url.replace('/api/proxy', '')}`;
  const response = await fetch(url, {
    method: req.method,
    headers: { 
      'x-api-key': 'demo123',  // Forward auth headers
      'Content-Type': 'application/json'
    },
    body: req.body ? JSON.stringify(req.body) : undefined
  });
  res.status(response.status).send(await response.text());
}