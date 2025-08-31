# 1-基本用法（主要是结合deployment用的）
![alt text](README_Images/10-expose指令/image.png)
# 2-初始环境配置
![alt text](README_Images/10-expose指令/image-3.png)
```yaml

apiVersion: v1
kind: Pod
metadata:
  name: backend-pod
  labes: 
    app: tiny-backend
spec:
  containers:
  - image: express-backend1:latest
    name: express-backend1
    ports:
    - containerPort: 3000
```

# 3-用expose的指令为现有pod创建service
```sh
kubectl expose pod backend-pod --name=backend-service --port=3000 --target-port=3000
```
![alt text](README_Images/10-expose指令/image-4.png)
## `kubectl run test-pod --image=curlimages/curl --rm -it -- sh`建测试环境
### curl http://backend-service:3000有响应
![alt text](README_Images/10-expose指令/image-5.png)

# 4-但是基本上还是跟着deploy模式走的，后续加service的操作比较少见

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx
spec:
  replicas: 1
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
![alt text](README_Images/10-expose指令/image-6.png)
## `kubectl apply -f kind-deployment.yaml`
## `kubectl expose deploy nginx --name=nginx --port=3000 --target-port=80`
## `kubectl run test-pod --image=curlimages/curl --rm -it -- sh`测试
![alt text](README_Images/10-expose指令/image-7.png)