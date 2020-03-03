export default (req, res, next) => {
  const rules = ["specific", "daily", "weekly"];
  const rule = req.body.type;

  if (!rule || !rules.find(r => r === rule)) {
    return res.status(400).json({ error: "Rule does not exist" });
  }

  return next();
};
