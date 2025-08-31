# ConfigMap管理与使用指南

## 目录
1. [查看ConfigMap](#kubectl--n-namespace-get-cm-查看当前命名空间的证书数据库啥的)
   - [查看详细信息](#可以descirbe看具体的)
   - [在Deployment中引用](#在写deploy中引用)
2. [创建ConfigMap的方法](#通过apply的方式创建cm)
   - [使用YAML文件创建](#通过apply的方式创建cm)
   - [通过命令行创建](#通过指令的方式创建cm)

# `kubectl -n <namespace> get cm `查看当前命名空间的证书数据库啥的
![alt text](<README_Images/7-kubectl get cm指令/image.png>)
# 可以descirbe看具体的
![alt text](<README_Images/7-kubectl get cm指令/image-1.png>)
## 在写deploy中引用
![alt text](<README_Images/7-kubectl get cm指令/image-2.png>)
![alt text](<README_Images/7-kubectl get cm指令/image-3.png>)

# 通过apply的方式创建cm
```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: trauerweide  # 这是关键，资源名必须唯一
data:
  tree: "trauerweide" # --from-literal tree=trauerweide 对应的数据
```
## `kubectl apply -f trauerweide-cm.yaml`应用
## `kubectl get cm trauerweide -o yaml`或者`kubectl get cm `验证是否成功
![alt text](<README_Images/7-kubectl get cm指令/image-4.png>)

# 通过指令的方式创建cm
```sh
kubectl -f /root/cm.yaml  create
```
```yaml
apiVersion: v1
data:
  tree: birke
  level: "3"
  department: park
kind: ConfigMap
metadata:
  name: birke
```
## 验证
![alt text](<README_Images/7-kubectl get cm指令/image-5.png>) 