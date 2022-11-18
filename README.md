# wisder-aux
&emsp;&emsp;JavaScript开发辅助函数库。

# 安装
```bash
npm i -S wisder-aux
```

# 使用
```js
const Aux = require('wisder-aux')
// or
const { camelToKebab } = require('wisder-aux')

import * as Aux from 'wisder-aux'
// or
import { camelToKebab } from 'wisder-aux'
```

# 助手函数列表

### 类型判断
* [isArray: 判断是否是数组](/type.md#isArray)
### 字符串相关
* [divideText: 以某字符分隔字符串](/string.md#divideText)
* [spliceText: 隐藏/替换字符串中间几位](/string.md#spliceText)
* [toDecimal: 金额每三位正数添加逗号，支持保留小数](/string.md#toDecimal)
* [sortJSON: 根据对象数组的某字段进项排序](/string.md#sortJSON)
* [camelToKebab: 驼峰命名转换为短横线命名](/string.md#camelToKebab)
* [kebabToCamel: 短横线命名转换为驼峰命名](/string.md#kebabToCamel)
* [formatHTML: 过滤文本中的html标签](/string.md#formatHTML)
* [randomString: 随机生成长度为len的字符串](/string.md#randomString)
* [getHighlightList: 获取高亮分词列表](/string.md#getHighlightList)
* [getHighlightTemplate: 获取高亮分词模板](/string.md#getHighlightTemplate)
* [getHighlight: 获取高亮分词信息](/string.md#getHighlight)
* [__spreadArrays: undefined](/string.md#__spreadArrays)
### 数组
* [unionArr: 求数组并集](/array.md#unionArr)
* [intersectArr: 求数组交集](/array.md#intersectArr)
* [differenceArr: 求数组差集](/array.md#differenceArr)
* [uniqueArr: 基本类型数组去重](/array.md#uniqueArr)
* [uniqueKeyInArr: 对象数组单个键值匹配去重](/array.md#uniqueKeyInArr)
* [uniqueObjInArr: 对象数组完全匹配去重](/array.md#uniqueObjInArr)
* [flattenArr: 规整多重数组](/array.md#flattenArr)
### 存储相关
* [getStorage: localStorage获取值](/storage.md#getStorage)
* [setStorage: localStorage设置值](/storage.md#setStorage)
* [removeStorage: localStorage移除键为key的存储](/storage.md#removeStorage)
* [clearStorage: localStorage清空存储](/storage.md#clearStorage)
* [setCookie: 设置Cookie](/storage.md#setCookie)
* [getCookie: 获取Cookie](/storage.md#getCookie)
* [removeCookie: 清除Cookie](/storage.md#removeCookie)
### Map、Set相关
* [mapToObj: Map转换成Object](/map.md#mapToObj)
* [objToMap: Object转换成Map](/map.md#objToMap)
### 时间
* [getDate: 返回格林威治时间](/date.md#getDate)
* [prefixDate: 前缀加0](/date.md#prefixDate)
* [formatDate: 自定义时间转换](/date.md#formatDate)
* [getNextDate: 获取N天后的日期](/date.md#getNextDate)
* [getMonthDays: 获取某个月有多少天](/date.md#getMonthDays)
* [getPrevMonth: 获取上个月初时间](/date.md#getPrevMonth)
* [getNextMonth: 获取下个月初时间](/date.md#getNextMonth)
* [getCountDown: 获取倒计时时间](/date.md#getCountDown)
* [getAgoDate: 获取N天前、N小时、N分钟前](/date.md#getAgoDate)
* [getMonthLastDay: 获取某月最后一天](/date.md#getMonthLastDay)
* [getWeekFirstDay: 获取某周的第一天，以周日计算](/date.md#getWeekFirstDay)
* [getWeekLastDay: 获取某周的最后一天，以周六计算](/date.md#getWeekLastDay)
* [getFirstMonday: 获取某月第一个周一](/date.md#getFirstMonday)
* [getLastSunday: 获取某月最后一个周日](/date.md#getLastSunday)
* [getFirstSunday: 获取某月第一个周日](/date.md#getFirstSunday)
* [getLastSaturday: 获取某月最后一个周六](/date.md#getLastSaturday)
* [getWeekIndex: 获取日期今年第几周，以周一开始算](/date.md#getWeekIndex)
### 浏览器相关
* [hasClass: 是否具有 className](/browser.md#hasClass)
* [addClass: 添加 className](/browser.md#addClass)
* [removeClass: 删除 className](/browser.md#removeClass)
* [toggleClass: 切换 className](/browser.md#toggleClass)
* [getUrlParam: 获取链接中键相应的值](/browser.md#getUrlParam)
* [getUrlObj: 返回链接中所有键值对象](/browser.md#getUrlObj)
* [addUrlParam: 向链接中添加键值对](/browser.md#addUrlParam)
* [modifyUrlParam: 修改链接中键对应的值](/browser.md#modifyUrlParam)
* [isIE: 判断是否是IE浏览器](/browser.md#isIE)
* [isIE11: 判断是否是IE11](/browser.md#isIE11)
* [isEdge: 判断是否是Edge](/browser.md#isEdge)
* [getIEVersion: 获取IE浏览器版本](/browser.md#getIEVersion)
* [isAndroid: 判断是否是Android](/browser.md#isAndroid)
* [isIOS: 判断是否是IOS](/browser.md#isIOS)
* [isMobile: 判断是否是移动端](/browser.md#isMobile)
* [isPC: 判断是否是PC](/browser.md#isPC)
* [isWX: 判断是否是微信浏览器](/browser.md#isWX)
* [getEvent: 获取事件源](/browser.md#getEvent)
* [getEventTarget: 获取事件对象](/browser.md#getEventTarget)
* [addHandler: 添加事件](/browser.md#addHandler)
* [removeHandler: 移除事件](/browser.md#removeHandler)
* [preventDefault: 阻止默认事件](/browser.md#preventDefault)
* [stopPropagation: 阻止事件冒泡](/browser.md#stopPropagation)
* [getPageX: 获取当前位置的X轴坐标](/browser.md#getPageX)
* [getPageY: 获取当前位置的Y轴坐标](/browser.md#getPageY)
* [getScrollTop: 获取页面滚动高度](/browser.md#getScrollTop)
### 函数相关
* [memoize: 缓存函数调用结果](/function.md#memoize)
* [debounce: 防抖函数](/function.md#debounce)
* [throttle: 节流函数](/function.md#throttle)