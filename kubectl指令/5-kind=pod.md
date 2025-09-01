# 1-指令直接创建`kubectl run nginx --image=nginx:stable-alpine3.21-perl`
## 带标签创建`kubectl run nginx --image=nginx:stable-alpine3.21-perl --labels="app=nginx-test"`
# 2-yaml创建

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: pod1          # ← 对应 "Pod named pod1"
spec:
  containers:
  - image: nginx:stable-alpine3.21-perl  # ← 对应 "of image nginx:alpine"
    name: pod1        # ← 容器名也是 pod1
```

