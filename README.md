# vcrx

![Alt](https://repobeats.axiom.co/api/embed/970eae350bad087ace3e475d8697243bbf64eb3e.svg "Repobeats analytics image")

> vue3 typescript tailwindcss

## run

```bash
yarn install

yarn build
```

- 调试基础功能: `yarn serve` 后 访问 `http://localhost:8080/{page}.html`

- 调试完整功能: `chrome` 扩展加载`build`构建后的 `dist`目录

## 项目结构

```bash

  ├─ src
  │   ├─ assets                 静态资源 css/图片
  │   ├─ options                options页面
  │   ├─ popup                  popup页面
  │   ├─ router                 路由 vue-touter
  │   └─ tab                    默认newtab页
  │   └─ views                  页面
  │   └─ background.js          service worker 可以调用大部分chrome api
  │   └─ content_script.js      页面中注入的js 只能调用部分chrome api 对newtab页无效
  │   └─ manifest.json          manifest声明

```

## background.js

后台进程 `service worker`  可以调用大部分`chrome api`

demo中注册了`action click`事件 在`tab`标签页中打开`popup`页面

## options

插件图标右键`options`选项

## content_scripts

注入到页面`dom`元素中的`js css` 可以调用部分`chrome api`

## permissions

注意声明需要的权限

## message

消息通信

....其它根据需要自行添加
