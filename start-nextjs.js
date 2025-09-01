#!/usr/bin/env node

import { spawn } from 'child_process';

console.log('🚀 Starting Next.js development server on port 5000...');

// Start Next.js development server
const nextProcess = spawn('npx', ['next', 'dev', '-p', '5000'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    NODE_ENV: 'development',
    PORT: '5000'
  }
});

nextProcess.on('error', (error) => {
  console.error('❌ Failed to start Next.js server:', error);
  process.exit(1);
});

nextProcess.on('close', (code) => {
  if (code !== 0) {
    console.error(`❌ Next.js server exited with code ${code}`);
    process.exit(code);
  }
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down Next.js server...');
  nextProcess.kill('SIGTERM');
});

process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down Next.js server...');
  nextProcess.kill('SIGINT');
});