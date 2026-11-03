module.exports = function() {
  const now = new Date();
  return {
    timestamp: now.toISOString(),
    formatted: now.toUTCString()
  };
};
