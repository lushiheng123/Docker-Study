![alt text](<README_Images/8-kubectl logs看日志/image-1.png>)
# 1. -c或者--container指定容器`kubectl  logs deploy/collect-data -c nginx >> /root/logs.log`

![alt text](<README_Images/8-kubectl logs看日志/image.png>)

## 打印日志到某个文件
```sh
kubectl -n management logs deploy/collect-data -c nginx >> /root/logs.log
```