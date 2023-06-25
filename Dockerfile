FROM node:14 as npm6
WORKDIR /app
# Create a node project using npm 6 and install a dev dependency
# that contains a binary.
RUN npm init --yes && \
    npm install --save-dev typescript

FROM node:15 as npm7
COPY --from=npm6 /app/package*.json /app/
WORKDIR /app
# Install production dependencies, then all dependencies. This should
# link the binaries for typescript in (e.g. tsc) under node_modules/.bin.
RUN npm install -g npm@7.10.0 && \
    npm install --production && \
    npm install

# Causes error, tsc not found.
CMD ["npx", "-c", "tsc --version"]