### 一个类风格的工具包

A set of utility functions in the style of class

eg.

```ts
StrUtil.isBlank('24') // false
```

```ts
VoidUtil.isVoid(null) // true
```

```ts
VoidUtil.isVoid(undefined) // true
```

## 注意事项

需要 typescript

## 如何进行开发

```shell
pnpm i
pnpm dev
```

## 如何运行测试

这个项目使用 `vitest` 运行测试用例

测试文件可以在 `src/__test__` 目录下找到

```shell
pnpm test
```
