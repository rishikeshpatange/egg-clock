import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Extract client ID from path
  const { params } = req.query;
  const clientId = Array.isArray(params) ? params[0] : params;
  
  // Forward request to your Cloudflare Worker
  const workerUrl = `https://your-worker-name.your-account.workers.dev/${clientId}`;
  
  try {
    const response = await fetch(workerUrl, {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
        ...(req.headers.authorization && { Authorization: req.headers.authorization })
      },
      body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined
    });
    
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to contact AI gateway' });
  }
}