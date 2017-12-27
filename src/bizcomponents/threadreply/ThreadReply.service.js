import { get, post } from '../../axios/tools';

const getURLPrefix = () => {
  const url = new URL(window.location);
  if (url.hostname === 'localhost') {
    return `http://${url.hostname}:8080/naf/`;
  }
  return `${url.origin}/bbt/`;
};

const PREFIX = getURLPrefix();

const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}threadReplyManager/view/${targetObjectId}/`,
  });
};

const joinParameters = (parameters) => {
  const obj = parameters; // {value1: 'prop1', value2: 'prop2', value3: 'prop3'};
  const arr = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      arr.push(`${key}=${encodeURIComponent(obj[key])}`);
    }
  }
  const result = arr.join(';');
  return result;
};

const joinPostParameters = (parameters) => {
  const obj = parameters; // {value1: 'prop1', value2: 'prop2', value3: 'prop3'};
  const arr = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key]
      if (!Array.isArray(value)) {
        arr.push(key + '=' + encodeURIComponent(value));
      }
      for (const subKey in value) {
        const subvalue = value[subKey];
        arr.push(key + '=' + encodeURIComponent(subvalue));
      }
    }
  };
  const result = arr.join('&');
  return result;
};

const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters);
  return get({
    url: `${PREFIX}threadReplyManager/loadThreadReply/${targetObjectId}/${parametersExpr}/`,
  });
};



const addThreadReplyLike = (targetObjectId, parameters) => {
  const url = `${PREFIX}threadReplyManager/addThreadReplyLike/threadReplyId/replierId/tokensExpr/`;
  const requestParameters = { ...parameters, tokensExpr: 'none' };

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  });
};

const updateThreadReplyLike = (targetObjectId, parameters) => {
  const url = `${PREFIX}threadReplyManager/updateThreadReplyLikeProperties/threadReplyId/id/tokensExpr/`;
  const threadReplyId = targetObjectId;
  const requestParameters = { ...parameters, threadReplyId, tokensExpr: 'none' };
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  });
};

const removeThreadReplyLikeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}threadReplyManager/removeThreadReplyLikeList/threadReplyId/threadReplyLikeIds/tokensExpr/`;
  const requestParameters = { ...parameters, threadReplyId: targetObjectId, tokensExpr: 'none' };
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  });
};


const ThreadReplyService = { view,
  load,
  addThreadReplyLike,
  updateThreadReplyLike,
  removeThreadReplyLikeList };
export default ThreadReplyService;

