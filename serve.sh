#!/bin/bash

# Simple server script to serve the RoboCat website locally
echo "🤖 Starting RoboCat Website Server..."
echo "🌐 Your website will be available at: http://localhost:8000"
echo "📂 Serving files from: $(pwd)"
echo "🛑 Press Ctrl+C to stop the server"
echo ""

# Start a simple Python HTTP server
python3 -m http.server 8000