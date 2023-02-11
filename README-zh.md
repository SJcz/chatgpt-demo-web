[简体中文](https://github.com/SJcz/chatgpt-demo-web/blob/main/README-zh.md) | [English](https://github.com/SJcz/chatgpt-demo-web/blob/main/README.md)

# chatgpt-demo-web
chatgpt demo 的 web 端

## 介绍
一个允许用户可以方便快捷跟 `OpenAI API` 进行交互的应用程序, 目前仅是一个 demo  

这个项目并不直接和 `OpenAI API` 进行交互, 你需要启动 [chatgpt-demo-server](https://github.com/SJcz/chatgpt-demo-server) 服务

* web 端和 [chatgpt-demo-server](https://github.com/SJcz/chatgpt-demo-server) 服务通过 webscoket 交互
* [chatgpt-demo-server](https://github.com/SJcz/chatgpt-demo-server) 服务和 `OpenAI API` 进行交互
 

## 使用
1. 克隆项目到本地:  
```
git clone git@github.com:SJcz/chatgpt-demo-web.git
```

2. 安装依赖:  
```
npm install
```

3. 修改根目录下的 `src/config/config.json` 文件, 设置你启动的 *chatgpt-demo-server* 服务的 IP 和 端口:  
```
{
  "ws_server_host": your chatgpt-demo-server ip,
  "ws_server_port": your chatgpt-demo-server webscoket port
}
```

4. 启动 web 应用:  
```
npm run start
```

5.访问 [http://localhost:8080](http://localhost:8080), 然后就可以在网页上和 `OpenAI API` 交互了


## web端效果图
<image src="/snipaste/Snipaste_chat.png" width="1200"/>

