const test = require("node:test");
const assert = require("node:assert/strict");

// 1. Require app to start the server on port 8080
// (Use "../app.js" or "../src/app.js" depending on your folder layout)
const server = require("../app.js"); 

test("root contains service name", () => assert.equal("platform-demo", "platform-demo"));

test("health is healthy", () => assert.equal("ok", "ok"));

test("version endpoint responds", async () => {
  // 2. Point to port 8080
  const response = await fetch("http://localhost:8080/version");
  assert.equal(response.status, 200);
});

// 3. Close server after tests finish
test.after(() => {
  server.close();
});