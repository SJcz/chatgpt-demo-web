# chatgpt-demo-web
web application of chatgpt demo

## Intro
A web application that allows users to interact with OpenAI API, It just a demo to test OpenAI API.     
  
This project is not directly calling OpenAI API, you also need start [chatgpt-demo-server](https://github.com/SJcz/chatgpt-demo-server).
  
* web application interact with [chatgpt-demo-server](https://github.com/SJcz/chatgpt-demo-server) by websocket 
* [chatgpt-demo-server](https://github.com/SJcz/chatgpt-demo-server) interact with OpenAI API
 

## Usage
1. Clone the repository:  
```
git clone git@github.com:SJcz/chatgpt-demo-web.git
```

2. Install the dependencies:  
```
npm install
```

3. Modify src/config/config.json file in the root folder, set your *chatgpt-demo-server* IP and Port key in the following format:  
```
{
  "ws_server_host": your chatgpt-demo-server ip,
  "ws_server_port": your chatgpt-demo-server webscoket port
}
```

4. Start node server:  
```
npm run serve
```

aftr server start, it will start webscoket server and a http server. 
* http server default prot: 10010. 
* websocket default port: 9090. 

if you want change webscoket port, you can modify `WS_PORT` filed of .env file in the root folder
