#!/bin/bash

echo "🚀 Starting clean development server..."

# Run comprehensive cleanup
./cleanup-ports.sh

# Wait a moment for everything to settle
sleep 2

# Start the development server
echo "Starting Next.js development server on port 3000..."
npm run dev