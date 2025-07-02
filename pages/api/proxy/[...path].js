export default async function handler(req, res) {
  try {
    // 1. Forward to Cloudflare Worker
    const workerResponse = await fetch('https://ai-gateway-proxy.rishikeshpatange128.workers.dev', {
      method: req.method,
      headers: {
        'x-api-key': 'demo123', // Required by your Worker
        'x-user-id': req.headers['x-user-id'] || 'premium_user', // Forward or default
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body) // Forward original body
    });

    // 2. Return Worker's response
    res.status(workerResponse.status).json(await workerResponse.json());
    
  } catch (error) {
    // 3. Error handling
    res.status(500).json({
      error: "Proxy failed",
      message: error.message,
      debug: {
        receivedHeaders: req.headers,
        receivedBody: req.body
      }
    });
  }
}
