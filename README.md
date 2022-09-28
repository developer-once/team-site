## D-One

关于 D-One 是什么可以参考文档 https://dev-one.cn/#/

## 开发

本项目使用 react-router-dom v6 开发前请参考文档 https://reactrouter.com/docs/en/v6/getting-started/tutorial#add-some-routes

## docker

需要使用模版的 docker 部署能力请阅读该文档片段

docker 文件分为两个, `docker-compose` 文件提供项目能力 `docker-compose-base` 提供数据库与redis能力，如需用到请先修改两份文件中的 `networks` 修改成新项目的名称。然后修改 `container_name` 字段，该字段主要提供数据库连接别名，修改之后需要在 config 中配置数据库的连接与使用。

更多请参考 :
[sequelize](https://www.eggjs.org/zh-CN/tutorials/sequelize)
[config 配置](https://www.eggjs.org/zh-CN/basics/config) 

docker 部署流程请参阅文档 https://dev-one.cn/#/zh-cn/devops/docker
