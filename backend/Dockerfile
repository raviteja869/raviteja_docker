# Use the official Node.js image as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json files from your project into the container
COPY package*.json ./

# Install any dependencies
RUN npm install

# Copy the rest of your app's source code from your project into the container
COPY . .

# Make your app's port number available to the environment
EXPOSE 7000

# Define the command to run your app using CMD which defines your runtime
CMD [ "node", "server.js" ]
