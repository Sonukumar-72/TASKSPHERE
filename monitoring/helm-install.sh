#!/bin/bash

NAMESPACE="monitoring"

kubectl create namespace $NAMESPACE || echo "Namespace '$NAMESPACE' already exists"

helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo add grafana https://grafana.github.io/helm-charts
helm repo update

helm upgrade --install prometheus prometheus-community/kube-prometheus-stack \
  --namespace $NAMESPACE \
  --values prometheus-values.yaml

helm upgrade --install loki grafana/loki-stack \
  --namespace $NAMESPACE \
  --values loki-values.yaml

echo -e "\n✅ Monitoring tools deployed!"
echo "To access Grafana: run --> kubectl port-forward svc/prometheus-grafana -n $NAMESPACE 3000:80"
