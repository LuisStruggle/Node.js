## nodeAdvance（node进阶）

### node特性

> 1，非阻塞I/O工作方式  
> 2，选择用C、C++做了一个 IO 处理层，结合V8引擎，组成了 Node，这个 IO 处理层，就是我们现在说到的 libuv  
> 3， node 使用了 V8 引擎，但是在 node 里面 V8 充当的角色更多的是语法解析层面，另外它还充当了 JavaScript 和 c/c++ 的桥梁  
> 4，Node 中一切皆可异步，但这并不是通过 V8 来实现的，充当这个角色的是 libuv  
> 5，libuv的线程模型，在libuv大体上可以把线程分为两类，一类是事件轮询线程，一类是文件IO处理线程。第一类事件轮询线程是单线程；另外一类称其为文件IO处理线程多少有些不准确，因为他不仅能处理文件IO，还能处理DNS解析，也能处理用户自己编写的node扩展中的逻辑，他是一个线程池，如果你想自己编写一个 c++ 扩展来处理耗时业务的话，就会用上它

### 案例

```javascript
var fs = require('fs');

fs.exists(__filename, function (exists) {
  console.log(exists);
});
```

### 案例解析
![nodeAdvance1](../images/nodeAdvance1.png)