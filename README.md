# vcrx

> vue3 typescript

## run

```bash
yarn install

yarn build
```

`chrome` 扩展加载 `dist`目录

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
