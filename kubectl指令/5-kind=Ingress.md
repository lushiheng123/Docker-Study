# 大致作用，是作为入口网关使的
![alt text](README_Images/5-kind=Ingress/image-5.png)


# 1- 实验环境
![alt text](README_Images/5-kind=Ingress/image.png)
## 先创建namespace为ingress-nginx
![alt text](README_Images/5-kind=Ingress/image-14.png)
## 随后部署ingree-nginx的controller
```sh
helm upgrade --install ingress-nginx ingress-nginx \
  --repo https://kubernetes.github.io/ingress-nginx \
  --namespace ingress-nginx --create-namespace
```
![alt text](README_Images/5-kind=Ingress/image-15.png)

## 随后在default上部署咱的nginx服务
## deploymnet.yaml
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx
  namespace: default
spec:
  replicas: 1
  selector:
    matchLabels:
      app: nginx-test
  template:
    metadata:
      labels:
        app: nginx-test
    spec:
      containers:
        - name: nginx
          image: nginx:stable-alpine3.21-perl
          ports:
          - containerPort: 80
```

## services.yaml
```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-server
  namespace: default
spec:
  selector:
    app: nginx-test
  ports:
    - protocol: TCP
      port: 3000
      targetPort: 80
  type: ClusterIP
```


## ingress.yaml
```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: simple-ingress
  namespace: default
  annotations:
    # this annotation removes the need for a trailing slash when calling urls
    # but it is not necessary for solving this scenario
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  ingressClassName: nginx
  rules:
    - http:
        paths:
        - path: /
          pathType: Prefix
          backend:
            service:
              name: nginx-server
              port:
                number: 3000
```

# `kubectl apply -f deployment.yaml`
![alt text](README_Images/5-kind=Ingress/image-1.png)
# `kubectl apply -f service.yaml`
![alt text](README_Images/5-kind=Ingress/image-2.png)
# `kubectl apply -f ingress.yaml`
## `kubectl get ingress`
![alt text](README_Images/5-kind=Ingress/image-3.png)

# `kubectl get service nginx-server  -o wide`
![alt text](README_Images/5-kind=Ingress/image-4.png)



# 测试环境主要还是看service暴露的什么端口`kubectl get service`，这里是3000

![alt text](README_Images/5-kind=Ingress/image-12.png)

## 随后，我们`kubectl run test-pod --image=curlimages/curl --rm -it -- sh`创建一个测试的pod，`curl http://nginx-server:3000`出了结果,成功

![alt text](README_Images/5-kind=Ingress/image-13.png)




# 2-考试环境
## 配置
```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: world
  namespace: world
  annotations:
    # this annotation removes the need for a trailing slash when calling urls
    # but it is not necessary for solving this scenario
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  ingressClassName: nginx # k get ingressclass
  rules:
  - host: "world.universe.mine"
    http:
      paths:
      - path: /europe
        pathType: Prefix
        backend:
          service:
            name: europe
            port:
              number: 80
      - path: /asia
        pathType: Prefix
        backend:
          service:
            name: asia
            port:
              number: 80
```


## 重定向`annotations`
![alt text](README_Images/5-kind=Ingress/image-8.png)
![alt text](README_Images/5-kind=Ingress/image-7.png)
## `rules`路由规则集合
![alt text](README_Images/5-kind=Ingress/image-9.png)
![alt text](README_Images/5-kind=Ingress/image-10.png)
##  总体实现的效果
![alt text](README_Images/5-kind=Ingress/image-11.png)