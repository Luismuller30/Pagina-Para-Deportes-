export default async function handler(req, res) {
  const sub = req.query.sub || "gonewild";
  try {
    const r = await fetch(`https://www.reddit.com/r/${sub}/hot.json?limit=25`, {
      headers: { "User-Agent": "Mozilla/5.0 (galeria)" }
    });
    const data = await r.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: "fallo" });
  }
}
