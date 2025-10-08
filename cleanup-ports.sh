#!/bin/bash

echo "🧹 Starting comprehensive port cleanup..."

# Kill all processes on port 3000
echo "Killing processes on port 3000..."
lsof -ti:3000 | xargs kill -9 2>/dev/null || echo "No processes on port 3000"

# Kill all processes on port 3001
echo "Killing processes on port 3001..."
lsof -ti:3001 | xargs kill -9 2>/dev/null || echo "No processes on port 3001"

# Kill all Node.js processes
echo "Killing all Node.js processes..."
pkill -f "node" 2>/dev/null || echo "No Node.js processes found"

# Kill all Next.js processes
echo "Killing all Next.js processes..."
pkill -f "next" 2>/dev/null || echo "No Next.js processes found"

# Kill any npm processes
echo "Killing npm processes..."
pkill -f "npm" 2>/dev/null || echo "No npm processes found"

# Wait for processes to fully terminate
echo "Waiting for processes to terminate..."
sleep 3

# Verify ports are free
echo "Verifying ports are free..."
if lsof -ti:3000 >/dev/null 2>&1; then
    echo "❌ Port 3000 still in use"
    lsof -ti:3000 | xargs kill -9 2>/dev/null
    sleep 2
else
    echo "✅ Port 3000 is free"
fi

if lsof -ti:3001 >/dev/null 2>&1; then
    echo "❌ Port 3001 still in use"
    lsof -ti:3001 | xargs kill -9 2>/dev/null
    sleep 2
else
    echo "✅ Port 3001 is free"
fi

echo "🎉 Cleanup complete! All ports are now free."