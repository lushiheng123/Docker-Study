![alt text](<README_Images/2-优化 TCP 连接和 Keep-Alive/image.png>)

# 示例配置
```sh
http {
    keepalive_timeout 65; # 客户端 Keep-Alive 超时时间
    keepalive_requests 100; # 单个 Keep-Alive 连接可处理的最大请求数
    sendfile on; # 启用 sendfile 提高文件传输效率
    tcp_nopush on; # 配合 sendfile，优化数据包发送
    tcp_nodelay on; # 禁用 Nagle 算法，适合实时性要求高的场景
    upstream backend {
    server 172.19.0.3:80;
    server 172.19.0.2:80;
    keepalive 32; # 保持 32 个空闲连接
    }
}
```


![alt text](<README_Images/2-优化 TCP 连接和 Keep-Alive/image-1.png>)