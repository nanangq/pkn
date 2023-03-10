import { FormInstance, RuleObject, RuleRender } from 'antd/es/form'

export const createYupSync = (schema: any): RuleObject | RuleRender => {
  const ruleWithCtx =
    (fieldName?: string): RuleRender =>
    (ctx: FormInstance): RuleObject => {
      const { getFieldsValue } = ctx
      return {
        // field using any type to avoid issue type from ant design
        async validator({ field }: any) {
          await schema.validateSyncAt(field, getFieldsValue())
        },
        required: schema.fields[fieldName]?.exclusiveTests?.required,
      }
    }

  function rule(param: string): RuleRender
  function rule(param: FormInstance): RuleObject
  function rule(param) {
    if (typeof param === 'string') return ruleWithCtx(param) as RuleRender
    else return ruleWithCtx(undefined)(param) as RuleObject
  }

  return rule
}
