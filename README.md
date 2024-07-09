🐱‍💻 Access the course files on GitHub:https://github.com/lushiheng123/Docker-Study

```bash
echo "# Docker-Study" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:lushiheng123/Docker-Study.git
git push -u origin main
```

# 步骤

### 1. 使用 es6 的 import 模式

```package.json
"type":"module"
```

### 2. 不需要真正的安装 node_modules，而是用 docker 的方式封装

### 3. 创建 Dockerfile 文件,用 docker bulid -t myapp . 指令部署(node 可能要预先 pull 一下)

```cmd
docker build -t myapp .
```

(如果用 docker build -t myapp:v1 .)这个 v1 就代表标签

#### _Dockerfile_

```Dockerfile
FROM node:22-alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 4000
CMD ["node","app.js"]
```

##### ![image](https://github.com/lushiheng123/Simple-shopping-website/assets/80657580/c2c8bb88-76b9-4931-a5b8-aaa49108e081)

### 4. 或者可以本地安装了 node_module 文件配置，通过创建.dockerignore 文件忽略掉也是可以的

#### _.dockerignore_

```.dockerignore
node_modules
```

### 5.在 docker-desktop 上运行，指定 4000 端口的结果

```cmd
docker run --name myapp_1 -p 4000:4000 -d myapp
```

![image](https://github.com/lushiheng123/MarkDown/assets/80657580/4d2a9af6-1b6a-4f1c-b81c-82c7c92e2f33)

### docker ps 可以看到运行的容器

![image](https://github.com/lushiheng123/MarkDown/assets/80657580/8434be1a-6d1f-4ffd-9454-04d9fbf1dcf7)

### 6. _docker stop_+名字或者 container id 可以中止容器运行

![image](https://github.com/lushiheng123/MarkDown/assets/80657580/8617f2ff-2d7a-4d54-b9c0-c74e8f87b440)

### 7. docker run --name myapp_1(指定容器名字) -p 4000:4000（指定端口） -d myapp（通过 docker images 查看镜像） 命令行运行容器

```cmd
docker run --name myapp_1 -p 4000:4000 -d myapp
```

![image](https://github.com/lushiheng123/MarkDown/assets/80657580/39d6ba23-d961-4c2c-bc4a-b282a2311602)

### 8. 对于 docker ps -a 存在但未运行的 docker 容器，用 docker start 指令运行

![image](https://github.com/lushiheng123/MarkDown/assets/80657580/e24ded06-d4ea-4d6a-809b-824b6a82d82a)

### 9. 对于 docker stop 暂停但是未删除的容器，利用 docker container rm +容器名称删除

![image](https://github.com/lushiheng123/MarkDown/assets/80657580/148830b7-838d-4f41-9483-cace403cfb0b)

### 10. docker image rm +名称删除镜像(不行就-f 强行删除)

![image](https://github.com/lushiheng123/MarkDown/assets/80657580/87ff6e34-c23b-462e-857b-fdb9bf8c2dc8)

### 11. 先 stop 容器

![image](https://github.com/lushiheng123/MarkDown/assets/80657580/93b3d6d6-8805-4f49-9842-0df634f2e408)

#### 用 docker start -i 发现直接运行在当前终端

```cmd
docker start -i myapp_1
```

```
D:\代码\docker\2024_7_9api_Dockerfile>docker start -i myapp_1
Server is running!
```
