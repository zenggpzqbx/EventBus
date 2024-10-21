# EventBus
全局事件总线
# 使用方式
```javascript
import {EventBus} from "@zqbx/event-bus"
const eventBus = new EventBus()
// 添加事件处理器
eventBus.on('click',callback)
//移除事件处理器
eventBus.un('click',callback)
//触发事件
第一个参数必须写
使用剩余参数接受用户传递的数据
eventBus.emit('click','eventBus', 'test')
//清空所有事件处理器
eventBus.clearListeners()
```
