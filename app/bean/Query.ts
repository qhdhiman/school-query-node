import * as Enum from '../module/Enum';

/**
 * Query Bean
 */
export default class Query {

  private _keyword: string = ''; // 关键字查询
  private _page: number = 1; // 当前页
  private _size: number = 30; // 每页数据条数
  private _province: Enum.Province = Enum.Province.All ; // 省份
  private _schooltype: Enum.SchoolType = Enum.SchoolType.All; // 院校分类
  private _schoolprop: Enum.SchoolProp = Enum.SchoolProp.All; // 学历层次
  private _schoolflag: Enum.SchoolFlag = Enum.SchoolFlag.All; // 特殊属性

  constructor (keyword = '') {
    this.keyword = keyword;
  }

  get keyword() {
    return this._keyword;
  }

  set keyword(value: string) {
    if (value) {
      this._keyword = value;
    }
  }

  get page(): number {
    return this._page;
  }

  set page(value: number) {
    if (value) {
      this._page = value;
    }
  }

  get size (): number {
    return this._size;
  }

  set size (value: number) {
    if (value) {
      this._size = value;
    }
  }

  get province() {
    return this._province;
  }

  set province(value: Enum.Province) {
    if (value) {
      this._province = value;
    }
  }

  get schooltype() {
    return this._schooltype;
  }

  set schooltype(value: Enum.SchoolType) {
    if (value) {
      this._schooltype = value;
    }
  }

  get schoolprop() {
    return this._schoolprop;
  }

  set schoolprop(value: Enum.SchoolProp) {
    if (value) {
      this._schoolprop = value;
    }
  }

  get schoolflag() {
    return this._schoolflag;
  }

  set schoolflag(value: Enum.SchoolFlag) {
    if (value) {
      this._schoolflag = value;
    }
  }

  public toParams(): any {
    const query = {
      keyWord1: this.keyword,
      page: this.page,
      size: this.size,
      province: this.province,
      schooltype: this.schooltype,
      schoolprop: this.schoolprop,
      schoolflag: this.schoolflag,
    };
    if (!this.keyword) {
      delete query.keyWord1;
    }
    if (!this.province) {
      delete query.province;
    }
    if (!this.schooltype) {
      delete query.schooltype;
    }
    if (!this.schoolprop) {
      delete query.schoolprop;
    }
    if (!this.schoolflag) {
      delete query.schoolflag;
    }
    return query;
  }

}
