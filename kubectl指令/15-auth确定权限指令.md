# 实际上就是看权限够不够
![alt text](README_Images/15-auth确定权限指令/image-1.png)
![alt text](README_Images/15-auth确定权限指令/image.png)

# 例子

## 检查当前用户权限
```sh
kubectl auth can-i get pods
kubectl auth can-i create deployments -n development
kubectl auth can-i '*' '*'
```

![alt text](README_Images/15-auth确定权限指令/image-2.png)


## 检查特定ServiceAccount权限
![alt text](README_Images/15-auth确定权限指令/image-3.png)

## 检查具体资源的操作权限
![alt text](README_Images/15-auth确定权限指令/image-4.png)