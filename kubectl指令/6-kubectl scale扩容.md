# 这里拿我们的replicaSet做实验
![alt text](<README_Images/6-kubectl scale扩容/image.png>)
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
        image: nginx:stable-alpine3.21-perl
        ports:
        - containerPort: 80
```
# 经过指令扩容
```sh
kubectl scale replicaset nginx-replicaset --replicas=5
kubectl describe replicaSet nginx-replicaset
```
![alt text](<README_Images/6-kubectl scale扩容/image-1.png>)