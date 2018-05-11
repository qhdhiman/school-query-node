import { Controller } from 'egg';
import Query from '../bean/Query';
import {stringify} from 'querystring';

export default class HomeController extends Controller {

  public async index() {
    const { ctx } = this;
    const query = new Query(ctx.query.keyword);
    this.logger.info(ctx.query);
    query.page = ctx.query.page;
    query.size = ctx.query.size;
    query.province = ctx.query.province;
    this.logger.info('stringify', stringify(ctx.query.keyword));
    ctx.body = await ctx.service.eol.querySchool(query);
  }
}
