# replicaSet管理一组的pod（通常不直接用，而是通过deployment去管理）
![alt text](README_Images/5-pod的不同类型/image-1.png)
```yaml
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: nginx-replicaset
  namespace: default
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.14
        ports:
        - containerPort: 80
```
# 部署步骤
```sh
kubectl apply -f kind-replicaSet-Sample.yaml
```
![alt text](README_Images/5-pod的不同类型/image.png)
# 检查状态
```sh
 kubectl get pods -o wide
```