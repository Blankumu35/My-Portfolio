# Use a base image with Node.js
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .


ENV PORT=3000

# Expose the port the backend runs on
EXPOSE 3000

# Start the application
CMD ["node", "npm", "start"]