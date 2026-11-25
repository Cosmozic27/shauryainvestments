import { spawn } from 'child_process';
import http from 'http';

const PORT = 3456;
const HOST = '127.0.0.1';

function checkServerReady(port = PORT, maxAttempts = 40) {
  return new Promise((resolve, reject) => {
    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      const req = http.get({ host: HOST, port, path: '/' }, (res) => {
        clearInterval(interval);
        resolve();
      });
      req.on('error', () => {
        if (attempts >= maxAttempts) {
          clearInterval(interval);
          reject(new Error(`Server on ${HOST}:${port} did not become ready in time`));
        }
      });
      req.end();
    }, 250);
  });
}

function runScript(scriptPath, args = []) {
  return new Promise((resolve, reject) => {
    console.log(`\n========================================`);
    console.log(`Running ${scriptPath}...`);
    console.log(`========================================`);
    const proc = spawn('node', [scriptPath, ...args], {
      shell: true,
      stdio: 'inherit',
      env: { ...process.env, PORT: String(PORT), HOST }
    });
    proc.on('close', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${scriptPath} failed with code ${code}`));
    });
  });
}

async function main() {
  console.log(`Starting Vite preview server on ${HOST}:${PORT}...`);
  const server = spawn('npx', ['vite', 'preview', '--host', HOST, '--port', String(PORT), '--strictPort'], {
    shell: true,
    stdio: 'inherit'
  });

  try {
    await checkServerReady(PORT);
    console.log(`Server is ready on http://${HOST}:${PORT}! Starting full suite...`);

    // 1. Run full visual QA screenshot suite
    await runScript('scripts/qa_runner.mjs', [String(PORT)]);

    // 2. Run card hover verification
    await runScript('scripts/test_hover.mjs', [String(PORT)]);

    // 3. Run navbar independent per-link contrast test
    await runScript('scripts/test_navbar_independent.mjs', [String(PORT)]);

    console.log(`\nAll QA test suites passed successfully!`);
    server.kill();
    process.exit(0);
  } catch (err) {
    console.error('QA execution failed:', err);
    server.kill();
    process.exit(1);
  }
}

main();
