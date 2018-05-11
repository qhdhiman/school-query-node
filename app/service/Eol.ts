/**
 * @description 全国高校查询网址数据抓取服务 服务接口地址：https://data-gkcx.eol.cn/soudaxue/queryschool.html?messtype=jsonp&callback=jQuery183013778661126038605_1525942357604&province=&schooltype=&page=2&size=30&keyWord1=%E5%A4%A7%E5%AD%A6&schoolprop=&schoolflag=&schoolsort=&schoolid=&_=1525942357878
 */
 import { Service } from 'egg';
 import Query from '../bean/Query';
 /**
  * Elo Service
  */
 export default class Eol extends Service {

  private readonly URL = 'https://data-gkcx.eol.cn/soudaxue/queryschool.html?messtype=jsonp&callback=jsonp'; // 查询接口地址

  public async querySchool (query: Query) {
    const res = await this.ctx.curl(this.URL, {dataType: 'text', data: query.toParams()});
    return res.data.replace(/^jsonp\(|\);$/g, '');
  }
 // tslint:disable-next-line:eofline
 }