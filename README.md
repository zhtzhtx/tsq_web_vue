# 这是之前公司给天生桥景区做的官网样式，后来没有采用。我觉得设计得不错，就做成了个人的作品

## 上传时删除了依赖包
```
克隆后需要 npm install
```

### 用了vue+typescript
```
vue-property-decorator和vuex-class都有用到，还不是很熟练，后续还可以改进
```

### css预处理是stylus，采用flex布局，单位是rem
```
自适应方面没有适配移动端，因为当时ui设计就是pc端的，所以如果想要适配移动端，可以根据像素设置rem
```

### 插件都是自己写的，没有用ui框架
```
因为主要就一个轮播图，也不是很复杂，轮播图是响应式布局，可以根据屏幕自适应
```

### demo的主要目的是学习最新的vue框架
说实话vue中加入typescript和之前的差距还是比较大的，不过也更方便了一点，typescript代替javascript可能也是未来的趋势，所以及时学习还是必要的
