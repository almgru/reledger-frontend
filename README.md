# Reledger frontend

Front-end for Reledger written in React.

## Running locally

1. `docker build --tag reledger-frontend .`
2. `docker run --publish 127.0.0.1:8080:80 --name reledger-frontend --rm --detach reledger-frontend`

## Pushing to Azure Container Registry

1. Build the image: `docker build --tag reledger-frontend:latest .`
2. Login to the registry: `docker login <name of registry>.azurecr.io`
3. Attach tag: `docker tag reledger-frontent:latest <name of registry>.azurecr.io/reledger-frontend:<version>`
4. Push the image: `docker push <name of registry>.azurecr.io/reledger-frontend:<version>`
