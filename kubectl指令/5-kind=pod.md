```yaml
apiVersion: v1
kind: Pod
metadata:
  name: pod1          # ← 对应 "Pod named pod1"
spec:
  containers:
  - image: nginx:alpine  # ← 对应 "of image nginx:alpine"
    name: pod1        # ← 容器名也是 pod1
```