export default async function handler(req, res) {
  // Extract client ID from path
  const { params } = req.query;
  const clientId = Array.isArray(params) ? params[0] : params;

  // Validate client ID format (e.g., "client123")
  if (!clientId || !/^client\d+$/.test(clientId)) {
    return res.status(400).json({ 
      error: 'Invalid client ID',
      example: '/api/ai/client123' 
    });
  }

  // Forward request to Cloudflare Worker
  const workerUrl = `https://ai-gateway-proxy.rishikeshpatange128.workers.dev/${clientId}`;
  
  try {
    // Security: Limit allowed HTTP methods
    if (!['GET', 'POST'].includes(req.method)) {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    const response = await fetch(workerUrl, {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
        // Forward only necessary headers
        ...(req.headers.authorization && { 
          Authorization: req.headers.authorization 
        })
      },
      body: req.method === 'POST' ? JSON.stringify(req.body) : undefined
    });

    // Handle non-OK responses from worker
    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).json(errorData);
    }

    const data = await response.json();
    res.status(response.status).json(data);
    
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ 
      error: 'AI gateway error',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}