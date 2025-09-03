# docker inspect 可以跟镜像也可以跟容器
```sh
docker inspect nginx:stable-alpine3.21-perl | grep -A5
 -B5 "Cmd"
```
## 解释下默认启动
![alt text](README_Images/1-inspec/image.png)

```sh
docker inspect alpine:latest | grep -A5 -B5 "Cmd"
```
![alt text](README_Images/1-inspec/image-1.png)
![alt text](README_Images/1-inspec/image-2.png)