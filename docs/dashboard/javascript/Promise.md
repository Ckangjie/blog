---
title: 非常简陋的Promise
date: 2020-06-23 10:55
publish: true
categories:
	- javascript
tags:
	- javascript
---
## 1.Promise基本结构
一个Promise有三种状态、pending（等待）、resolved（成功）、rejected(失败)。
只有当状态为pending时才会改变为其它两种状态。

```javascript
// Promise
// executor 为一个函数
function Promise(executor) {
    var _this = this
    this.status = 'pending'//保存状态
    this.value = undefined //保存成功的结果
    this.reason = undefined //保存失败的结果

    // 成功的回调
    function resolve(value) {}

    // 失败的回调
    function reject(value) {}

    //立即执行
    try {
        executor(resolve, reject)
    } catch (error) {
        reject(error)
    }
}

module.exports = Promise
```

## 2.then方法的基本实现及异步

1. then方法是在Promise的原型上实现的,无论Promise成功与否都会调用then方法,可根据status来判断当前状态,调用相应的回调函数。
2. 支持异步,当我们执行一个setTimeout时会有时间延迟,此时状态依然为pending,then也没有去调用onFulfilled、onRejected函数,此时我们可以定义两个数组来缓存pending状态时的函数,当状态改变时在读取缓存的回调函数。
```javascript
// Promise
// executor 为一个函数
function Promise(executor) {
    var _this = this
    this.status = 'pending'//保存状态
    this.value = undefined //保存成功的结果
    this.reason = undefined //保存失败的结果
    // 缓存status=pending时的函数
    this.onFulfilledFunc = [] //保存成功回调
    this.onRejectedFunc = [] //保存失败回调

    // 成功的回调
    function resolve(value) {
        if (_this.status === 'pending') {
            _this.value = value //保存成功结果
            _this.onFulfilledFunc.forEach(fn => fn(value))
            _this.status = 'resolved'
        }
    }

    // 失败的回调
    function reject(value) {
        if (_this.status === 'pending') {
            _this.value = value //保存失败的结果
            _this.onRejectedFunc.forEach(fn => fn(value))
            _this.status = 'rejected'
        }
    }

    //立即执行
    try {
        executor(resolve, reject)
    } catch (error) {
        reject(error)
    }

    //then 方法定义在原型上
	myPromise.prototype.then = function (onFulfilled, onRejected) {
		// 返回Promise
		var newPromise = new Promise((resolve, reject) => {
			// 支持异步
			if (_this.status === 'pending') {
				if (typeof onFulfilled === 'function') {
					_this.onFulfilledFunc.push(() => {
						setTimeout(() => {
							try {
								let x = onFulfilled(_this.value)
								resolvePromise(newPromise, x, resolve, reject)
							} catch (error) {
								reject(error)
							}
						}, 0)
					})
				}
				if (typeof onRejected === 'function') {
					_this.onRejectedFunc.push(() => {
						setTimeout(() => {
							try {
								let x = onRejected(_this.value)
								console.log(x)
								resolvePromise(newPromise, x, resolve, reject)
							} catch (error) {
								reject(error)
							}
						}, 0)
					})
				}
			}
			//成功
			if (_this.status === 'resolved') {
				if (typeof onFulfilled === 'function') {
					setTimeout(() => {
						try {
							let x = onFulfilled(_this.value)
							resolvePromise(newPromise, x, resolve, reject)
						} catch (error) {
							reject(error)
						}
					}, 0);
				}
			}
			//失败
			if (_this.status === 'rejected') {
				if (typeof onRejected === 'function') {
					setTimeout(() => {
						try {
							let x = onRejected(_this.value)
							resolvePromise(newPromise, x, resolve, reject)
						} catch (error) {
							reject(error)
						}
					}, 0);
				}
			}
		})
		return newPromise
	}
}

module.exports = Promise
```

## 3. Promise链式调用
1. 不论是什么种情况then方法都会返回一个Promise对象（return Promise）,这样就有了下一个then方法。
2. 在then里面实例化一个新的newPromise对象，并返回newPromise。

处理过程
```javascript
// 出来Promise过程
    // newPromise 新的Promise
    // x 上一个 then的结果（promise）
    function resolvePromise(newPromise, x, resolve, reject) {
        if (newPromise === x) {
            reject(new TypeError('Promise发生了循环'))
        }
        if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
            // 对象或者函数
            try {
                let then = x.then //取出then方法
                if (typeof then === 'function') {
                    // 执行 Promise
                    var y = then.call(x, (y) => {
                        resolvePromise(newPromise, y, resolve, reject)
                    }, (r) => {
                        reject(r)
                    })
                } else {
                    resolve(x)
                }
            } catch (error) {
                reject(error)
            }
        } else {
            // 普通值
            resolve(x)
        }
    }
```
## 4.测试Promise（源码）

```javascript
// Promise
// executor 为一个函数
function myPromise(executor) {
    var _this = this
    this.status = 'pending'//保存状态
    this.value = undefined //保存成功的结果
    this.reason = undefined //保存失败的结果
    // 缓存status=pending时的函数
    this.onFulfilledFunc = [] //保存成功回调
    this.onRejectedFunc = [] //保存失败回调

    // 成功的回调
    function resolve(value) {
        if (_this.status === 'pending') {
            _this.value = value //保存成功结果
            _this.onFulfilledFunc.forEach(fn => fn(value)) //执行成功回调
            _this.status = 'resolved'
        }
    }

    // 失败的回调
    function reject(value) {
        if (_this.status === 'pending') {
            _this.value = value //保存失败的结果
            _this.onRejectedFunc.forEach(fn => fn(value)) // 执行失败回调
            _this.status = 'rejected'
        }
    }

    //立即执行
    try {
        executor(resolve, reject)
    } catch (error) {
        reject(error)
    }

    //then 方法定义在原型上
    myPromise.prototype.then = function (onFulfilled, onRejected) {
        // 返回Promise
        var newPromise = new Promise((resolve, reject) => {
            // 支持异步
            if (_this.status === 'pending') {
                if (typeof onFulfilled === 'function') {
                    _this.onFulfilledFunc.push(() => {
                        setTimeout(() => {
                            try {
                                let x = onFulfilled(_this.value)
                                resolvePromise(newPromise, x, resolve, reject)
                            } catch (error) {
                                reject(error)
                            }
                        }, 0)
                    })
                }
                if (typeof onRejected === 'function') {
                    _this.onRejectedFunc.push(() => {
                        setTimeout(() => {
                            try {
                                let x = onRejected(_this.reason)
                                console.log(x)
                                resolvePromise(newPromise, x, resolve, reject)
                            } catch (error) {
                                reject(error)
                            }
                        }, 0)
                    })
                }
            }
            //成功
            if (_this.status === 'resolved') {
                if (typeof onFulfilled === 'function') {
                    setTimeout(() => {
                        try {
                            let x = onFulfilled(_this.value)
                            resolvePromise(newPromise, x, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    }, 0);
                }
            }
            //失败
            if (_this.status === 'rejected') {
                if (typeof onRejected === 'function') {
                    setTimeout(() => {
                        try {
                            let x = onRejected(_this.reason)
                            resolvePromise(newPromise, x, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    }, 0);
                }
            }
        })
        return newPromise
    }
    // 出来Promise过程
    // newPromise 新的Promise
    // x 上一个 then的结果（promise）
    function resolvePromise(newPromise, x, resolve, reject) {
        if (newPromise === x) {
            reject(new TypeError('Promise发生了循环'))
        }
        if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
            // 对象或者函数
            try {
                let then = x.then //取出then方法
                if (typeof then === 'function') {
                    // 执行 Promise
                    var y = then.call(x, (y) => {
                        resolvePromise(newPromise, y, resolve, reject)
                    }, (r) => {
                        reject(r)
                    })
                } else {
                    resolve(x)
                }
            } catch (error) {
                reject(error)
            }
        } else {
            // 普通值
            resolve(x)
        }
    }
}

module.exports = myPromise

```
eg:使用Promise
```javascript
let Pro = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(5)
    }, 2000)
})

// Pro.then(res => {
//     console.log(res)
// })
Pro.then(res => { return 8 })
    .then()
    .then()
    .then(res => {
        console.log(res)
})
```

