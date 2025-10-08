# Port Management Guide

## Problem
Sometimes the development server fails to start on port 3000 due to conflicting processes.

## Solutions

### Option 1: Fresh Start (Recommended)
```bash
npm run dev:fresh
```
This will:
- Clean all ports (3000, 3001)
- Kill all Node.js/Next.js processes
- Start fresh server on port 3000

### Option 2: Manual Cleanup
```bash
./cleanup-ports.sh
npm run dev
```

### Option 3: Quick Clean
```bash
npm run dev:clean
```

## Available Scripts

- `npm run dev` - Start development server (if port 3000 is free)
- `npm run dev:clean` - Clean port 3000 and start server
- `npm run dev:fresh` - Complete cleanup and start server
- `./cleanup-ports.sh` - Comprehensive port cleanup script

## Troubleshooting

If you still get "EADDRINUSE" errors:

1. Run the comprehensive cleanup:
   ```bash
   ./cleanup-ports.sh
   ```

2. Wait a few seconds, then start:
   ```bash
   npm run dev
   ```

3. If still having issues, use the fresh start:
   ```bash
   npm run dev:fresh
   ```

## What the Cleanup Does

- Kills all processes on ports 3000 and 3001
- Stops all Node.js processes
- Stops all Next.js processes
- Stops all npm processes
- Verifies ports are completely free
- Starts fresh development server