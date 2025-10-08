#!/bin/bash

# Kill any existing processes on port 3000
echo "Cleaning up port 3000..."
lsof -ti:3000 | xargs kill -9 2>/dev/null || true

# Kill any existing Next.js processes
echo "Stopping any existing Next.js processes..."
pkill -f "next dev" 2>/dev/null || true

# Wait a moment for processes to fully stop
sleep 2

# Start the development server on port 3000
echo "Starting development server on port 3000..."
npm run dev