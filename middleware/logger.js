// Custom Logger Middleware
// Logs Method, URL, and Time of every request

function logger(req, res, next) {
  const method = req.method;
  const url = req.url;
  const time = new Date().toISOString();

  console.log(`[${time}] ${method} ${url}`);

  next();
}

module.exports = logger;
