const express = require('express');
const mysql = require('mysql2');
const app = express();

// 创建数据库连接
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'lushiheng'
});

// 连接到数据库
connection.connect((err) => {
    if (err) {
        console.error('数据库连接失败:', err);
        return;
    }
    console.log('成功连接到MySQL数据库');
    
    // 创建password表（如果不存在）
    const createTableSQL = `
        CREATE TABLE IF NOT EXISTS password (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL
        )
    `;
    
    connection.query(createTableSQL, (err) => {
        if (err) {
            console.error('创建表失败:', err);
            return;
        }
        console.log('password表创建成功或已存在');
        
        // 插入一些测试数据
        const testData = [
            { username: 'admin', password: 'admin123' },
            { username: 'test', password: 'test123' },
            { username: 'user', password: 'user123' }
        ];
        
        connection.query('INSERT IGNORE INTO password (username, password) VALUES ?', 
            [testData.map(item => [item.username, item.password])],
            (err) => {
                if (err) {
                    console.error('插入测试数据失败:', err);
                    return;
                }
                console.log('测试数据插入成功');
            }
        );
    });
});

// 有意的SQL注入漏洞路由
app.get('/user', (req, res) => {
    const id = req.query.id;
    // 故意不使用参数化查询，造成SQL注入漏洞
    const query = `SELECT * FROM password WHERE id = ${id}`;
    
    connection.query(query, (err, results) => {
        if (err) {
            res.status(500).json({ error: '查询失败' });
            return;
        }
        res.json(results);
    });
});

// 启动服务器
const PORT = 8080;
const HOST = '192.168.1.101';

app.listen(PORT, HOST, () => {
    console.log(`服务器运行在 http://${HOST}:${PORT}`);
});
