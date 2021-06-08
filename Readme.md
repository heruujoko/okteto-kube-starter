# Deployment guide

1. Download your Kubernetes credentials from the Okteto Cloud UI https://okteto.com/docs/cloud/credentials/index.html

2. push image to okteto registry
`docker login registry.cloud.okteto.net`
`docker build -t docker login registry.cloud.okteto.net/heruujoko/testapp:1.0.0`
`docker push registry.cloud.okteto.net/heruujoko/testapp:1.0.0`

3. deploy the app
`cd app && kubectl apply -f k8s.yml`
