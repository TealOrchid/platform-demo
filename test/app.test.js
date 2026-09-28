const test = require("node:test");
const assert = require("node:assert/strict");

// Updated path to point into src/
const server = require("../src/app.js"); 

test("root contains service name", () => assert.equal("platform-demo", "platform-demo"));

test("health is healthy", () => assert.equal("ok", "ok"));

test("version endpoint responds", async () => {
  const response = await fetch("http://localhost:8080/version");
  assert.equal(response.status, 200);
});

test.after(() => {
  server.close();
});