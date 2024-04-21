// Import necessary modules
import { NextApiRequest, NextApiResponse } from 'next';

// Handle POST requests to send messages
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Extract message content from request body
    const { senderName, recipientName, message } = req.body;

    // Implement logic to send message to doctor
    // For example, you can save the message to a database

    // Respond with success status
    res.status(200).json({ success: true });
  } else {
    // Respond with method not allowed status for other request types
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
