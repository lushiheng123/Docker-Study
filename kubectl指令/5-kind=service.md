# Service是必须单独写的，属于kind的一种，不能和Deployment啥的写在一个yaml文件中
# 创建service也基本上有两种或者3种常见的方式

# 1-`kubectl create`的方式
![alt text](README_Images/5-kind=service/image.png)
# 2-YAML 文件 - 声明式配置
![alt text](README_Images/5-kind=service/image-1.png)
# 3-expose基于现有资源创建
![alt text](README_Images/5-kind=service/image-2.png)


# 有哪些type的类型
![alt text](README_Images/5-kind=service/image-3.png)
## clusterIP
![alt text](README_Images/5-kind=service/image-4.png)

## nodeport
![alt text](README_Images/5-kind=service/image-5.png)
## LoadBalancer
![alt text](README_Images/5-kind=service/image-6.png)

## ExternalName
![alt text](README_Images/5-kind=service/image-7.png)