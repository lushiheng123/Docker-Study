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
    server 172.19.0.3:3000;
    server 172.19.0.2:3000;
    keepalive 32; # 保持 32 个空闲连接
    }
}
```


![alt text](<README_Images/2-优化 TCP 连接和 Keep-Alive/image-1.png>)


# 记得ngint -t 检查nginx配置及nginx -s reload重加载（不会断链）


## 更改`conf.d/default.conf` 的`location`部分,调用反向代理nginx.conf中的`upstream backend`的内容

![alt text](<README_Images/2-优化 TCP 连接和 Keep-Alive/image-3.png>)

<details>
<summary>conf.d/default.conf</summary>

```sh
server {
    listen       80;
    listen  [::]:80;
    server_name  localhost;

    #access_log  /var/log/nginx/host.access.log  main;

    location / {
    #    root   /usr/share/nginx/html;
    #    index  index.html index.htm;
         proxy_pass http://backend;
         proxy_set_header Host $host;
         proxy_set_header X-Real-IP $remote_addr;
         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
         proxy_set_header X-Forwarded-Proto $scheme;
         proxy_connect_timeout 30s;
         proxy_send_timeout    30s;
         proxy_read_timeout    30s;
    }

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

    # proxy the PHP scripts to Apache listening on 127.0.0.1:80
    #
    #location ~ \.php$ {
    #    proxy_pass   http://127.0.0.1;
    #}

    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
    #
    #location ~ \.php$ {
    #    root           html;
    #    fastcgi_pass   127.0.0.1:9000;
    #    fastcgi_index  index.php;
    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
    #    include        fastcgi_params;
    #}

    # deny access to .htaccess files, if Apache's document root
    # concurs with nginx's one
    #
    #location ~ /\.ht {
    #    deny  all;
    #}
}
```

</details>

# 用curl去测试(默认就是轮询)
```sh
 curl -l -s -0 http://localhost:8080
```
![alt text](<README_Images/2-优化 TCP 连接和 Keep-Alive/image-4.png>)