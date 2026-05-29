export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false });
  }

  const { name, message } = req.body;

  if (!name || !message) {
    return res.status(400).json({ success: false });
  }

  const text =
`📩 NEW MESSAGE
👤 ${name}
💬 ${message}`;