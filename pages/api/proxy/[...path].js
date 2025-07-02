export default async function handler(req, res) {
  // Block GET requests
  if (req.method === 'GET') {
    return res.status(400).json({
      error: "Use POST method",
      example: {
        curl: 'curl -X POST -H "Content-Type: application/json" -d \'{"messages":[{"content":"Hello"}]}\' https://your-domain.com/api/proxy'
      }
    });
  }

  try {
    const workerResponse = await fetch('https://ai-gateway-proxy.rishikeshpatange128.workers.dev', {
      method: 'POST',
      headers: {
        'x-api-key': 'demo123',
        'x-user-id': req.headers['x-user-id'] || 'premium_user',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    });

    res.status(workerResponse.status).json(await workerResponse.json());
  } catch (error) {
    res.status(500).json({
      error: "Proxy failed",
      message: error.message,
      debug: {
        receivedMethod: req.method,
        receivedHeaders: Object.fromEntries(
          Object.entries(req.headers).filter(([k]) => !k.startsWith('x-vercel'))
        )  // <-- Missing parenthesis added here
      }
    });
  }
}
