# 还是继续配置文件
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
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

# `kubectl apply -f <file.yaml>` 
![alt text](README_Images/5-pod的不同类型-deploy/image.png)
## `kubectl get deploy`
## `kubectl logs deploy/nginx-deployment`查看deploy里面的具体某一个deploy的日志
![alt text](README_Images/5-pod的不同类型-deploy/image-1.png)

##  `kubectl describe deploy nginx-deployment`查看具体配置

# 当我们发现某个deploy的配置有问题，可以直接edit更新它的配置文件内容`kubectl -n application1 edit deploy api`

![alt text](README_Images/5-pod的不同类型-deploy/image-2.png)
# 在写configmapkeyref引用的时候，key和value必须严格对应
![alt text](README_Images/5-pod的不同类型-deploy/image-4.png)
![alt text](README_Images/5-pod的不同类型-deploy/image-3.png)