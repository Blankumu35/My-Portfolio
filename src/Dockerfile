# Use a base image with Node.js
FROM node:18-alpine

# Install pnpm globally
RUN npm install -g pnpm


# Set the working directory
WORKDIR /app/Portfolio

# Copy package.json and install dependencies
COPY package.json .
COPY pnpm-lock.yaml ./

RUN pnpm install

# Copy the rest of the application code
COPY . .

ENV PORT=8080

# Build the application
RUN npm run build



# Expose the port the frontend runs on
EXPOSE 8080

# Start Nginx server
CMD ["dev", "build", "run;"]