# 高校查询接口服务

## QuickStart
高校信息查询服务。技术堆（node.js、egg.js、typescript）
使用方式：http://localhost:7001?params
``` json
  params = {
    keyword: '', // 查询关键字
    page: 1, // 当前页
    size: 30, // 每页条数
    province: '北京', // 院校省份 枚举字典 参见 Enum.ts>Province
    schooltype: '', // 学历层次 枚举字典 参见 Enum.ts>Schooltype
    schoolprop: '', // 院校分类 枚举字典 参见 Enum.ts>Schoolprop
    schoolflag: '', // 特殊属性 枚举字典 参见 Enum.ts>Schoolflag
  }
```
### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### Deploy

```bash
$ npm run tsc
$ npm start
```

### Npm Scripts

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- se `npm run clean` to clean compiled js at development mode once

### Requirement

- Node.js 8.x
- Typescript 2.8+
