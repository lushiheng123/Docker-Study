# 命令行创建密码secret 
![alt text](README_Images/5-kind=Secret/image.png)
## 从文件创建secret是常见的情况

```sh
kubectl create secret generic database-app-secret \
> --from-file=database-data.txt
```
![alt text](README_Images/5-kind=Secret/image-1.png)
![alt text](README_Images/5-kind=Secret/image-2.png)

# 通过清单文件创建
![alt text](README_Images/5-kind=Secret/image-3.png)
![alt text](README_Images/5-kind=Secret/image-4.png)

# 查看secret  `kubectl get secrets`
![alt text](README_Images/5-kind=Secret/image-5.png)

![alt text](README_Images/5-kind=Secret/image-6.png)


# 用base64可以解析密码（自己的环境）
![alt text](README_Images/5-kind=Secret/image-7.png)