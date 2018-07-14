import { 
  getIdByPwdAndEml
} from "app/modules/admin/retrieve";

export default class Test {
  static async getId(ctx, next) {
    // const params = ctx.params
    const params = ctx.query
    const {password, email} = params
    const result = await getIdByPwdAndEml(password, email)
    console.log('result: ', result)
    const { id } = result[0]
    console.log('id : ', id)
    ctx.status = 200
    ctx.body = 'test'
  }
}