#!/usr/bin/env node

const { spawn } = require('child_process');

// Start Next.js development server
const nextProcess = spawn('npx', ['next', 'dev', '--port', '5000'], {
  stdio: 'inherit',
  shell: true
});

process.on('SIGTERM', () => {
  nextProcess.kill('SIGTERM');
});

process.on('SIGINT', () => {
  nextProcess.kill('SIGINT');
});