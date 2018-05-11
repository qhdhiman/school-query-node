import { Controller } from 'egg';
import Query from '../bean/Query';
/**
 * HomeController
 */
export default class HomeController extends Controller {

  public async index() {
    const { ctx } = this;
    const query = new Query(ctx.query.keyword);
    query.page = ctx.query.page;
    query.size = ctx.query.size;
    query.province = ctx.query.province;
    query.schoolflag = ctx.query.schoolflag;
    query.schoolprop = ctx.query.schoolprop;
    query.schooltype = ctx.query.schooltype;

    ctx.body = await ctx.service.eol.querySchool(query);
  }
}
