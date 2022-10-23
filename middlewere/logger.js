const logger = (req, res, next) => {
  const d = new Date();
  const day = d.getDay();
  const hours = d.getHours();
  if (day >= 0 && day < 6 && hours > 8 && hours < 17) {
    next();
  } else res.send("Closed");
};

module.exports = logger;
