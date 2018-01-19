import { get, post } from '../../axios/tools'

const getURLPrefix = () => {
  const url = new URL(window.location)
  if (url.hostname === 'localhost') {
    return `http://${url.hostname}:8080/naf/`
  }
  if(url.hostname === "30.30.126.37"){
    return `http://${url.hostname}:8080/naf/`
  }
  return `${url.origin}/cis/`
}

const PREFIX = getURLPrefix()

const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}genericFormManager/view/${targetObjectId}/`,
  })
}

const joinParameters = (parameters) => {
  const obj = parameters // {value1: 'prop1', value2: 'prop2', value3: 'prop3'}
  const arr = []
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      arr.push(`${key}=${encodeURIComponent(obj[key])}`)
    }
  }
  const result = arr.join(';')
  return result
}

const joinPostParameters = (parameters) => {
  const obj = parameters // {value1: 'prop1', value2: 'prop2', value3: 'prop3'}
  const arr = []
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key]
      if (!Array.isArray(value)) {
        arr.push(key + '=' + encodeURIComponent(value))
      }
      for (const subKey in value) {
        const subvalue = value[subKey]
        arr.push(key + '=' + encodeURIComponent(subvalue))
      }
    }
  }
  const result = arr.join('&')
  return result
}

const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}genericFormManager/loadGenericForm/${targetObjectId}/${parametersExpr}/`,
  })
}



const addFormField = (targetObjectId, parameters) => {
  const url = `${PREFIX}genericFormManager/addFormField/formId/label/localeKey/type/defaultValue/description/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateFormField = (targetObjectId, parameters) => {
  const url = `${PREFIX}genericFormManager/updateFormFieldProperties/genericFormId/id/label/localeKey/type/defaultValue/description/tokensExpr/`
  const genericFormId = targetObjectId
  const requestParameters = { ...parameters, genericFormId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeFormFieldList = (targetObjectId, parameters) => {
  const url = `${PREFIX}genericFormManager/removeFormFieldList/genericFormId/formFieldIds/tokensExpr/`
  const requestParameters = { ...parameters, genericFormId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addFormAction = (targetObjectId, parameters) => {
  const url = `${PREFIX}genericFormManager/addFormAction/formId/label/localeKey/url/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateFormAction = (targetObjectId, parameters) => {
  const url = `${PREFIX}genericFormManager/updateFormActionProperties/genericFormId/id/label/localeKey/url/tokensExpr/`
  const genericFormId = targetObjectId
  const requestParameters = { ...parameters, genericFormId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeFormActionList = (targetObjectId, parameters) => {
  const url = `${PREFIX}genericFormManager/removeFormActionList/genericFormId/formActionIds/tokensExpr/`
  const requestParameters = { ...parameters, genericFormId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const GenericFormService = { view,
  load,
  addFormField,
  addFormAction,
  updateFormField,
  updateFormAction,
  removeFormFieldList,
  removeFormActionList }
export default GenericFormService
