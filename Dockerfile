# 第一阶段 编译
FROM node:10.16.3

LABEL SJCZ "626040875@qq.com"

RUN mkdir -p /src/app
WORKDIR /src/app
COPY . /src/app/

RUN npm config set registry https://registry.npm.taobao.org && npm i

RUN npm run build

# 第二阶段 启动 nginx
FROM nginx

RUN mkdir -p /www/public
WORKDIR /www

COPY --from=0 /src/app/dist/ /www/public/

COPY --from=0 /src/app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80