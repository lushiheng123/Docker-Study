# CrashLoopBackOff看日志不再是从系统日志中看，应该从crictl或者pod的日志看
![alt text](README_Images/1-CrashLoopBackOff/image.png)
# crictl ps -a找到指定容器的container id
![alt text](README_Images/1-CrashLoopBackOff/image-1.png)

# crictl logs <container id>看日志，对应到的错误