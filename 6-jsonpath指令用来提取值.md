# 这有个yaml文件

![alt text](README_Images/6-jsonpath指令用来提取值/image.png)


# `echo "kubectl get service redis-service -o jsonpath='{.spec.ports[0].targetPort}'" > svc-filter.sh`通过jsonpath就能轻松提取出来

#