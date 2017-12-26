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
    url: `${PREFIX}threadManager/view/${targetObjectId}/`,
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
    url: `${PREFIX}threadManager/loadThread/${targetObjectId}/${parametersExpr}/`,
  });
};



const addThreadReply = (targetObjectId, parameters) => {
  const url = `${PREFIX}threadManager/addThreadReply/threadId/content/replierId/likeByCurrentUser/tokensExpr/`;
  const requestParameters = { ...parameters, tokensExpr: 'none' };

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  });
};

const updateThreadReply = (targetObjectId, parameters) => {
  const url = `${PREFIX}threadManager/updateThreadReplyProperties/threadId/id/content/likeByCurrentUser/tokensExpr/`;
  const threadId = targetObjectId;
  const requestParameters = { ...parameters, threadId, tokensExpr: 'none' };
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  });
};

const removeThreadReplyList = (targetObjectId, parameters) => {
  const url = `${PREFIX}threadManager/removeThreadReplyList/threadId/threadReplyIds/tokensExpr/`;
  const requestParameters = { ...parameters, threadId: targetObjectId, tokensExpr: 'none' };
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  });
};


const addThreadRegistration = (targetObjectId, parameters) => {
  const url = `${PREFIX}threadManager/addThreadRegistration/threadId/participantId/comments/tokensExpr/`;
  const requestParameters = { ...parameters, tokensExpr: 'none' };

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  });
};

const updateThreadRegistration = (targetObjectId, parameters) => {
  const url = `${PREFIX}threadManager/updateThreadRegistrationProperties/threadId/id/comments/tokensExpr/`;
  const threadId = targetObjectId;
  const requestParameters = { ...parameters, threadId, tokensExpr: 'none' };
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  });
};

const removeThreadRegistrationList = (targetObjectId, parameters) => {
  const url = `${PREFIX}threadManager/removeThreadRegistrationList/threadId/threadRegistrationIds/tokensExpr/`;
  const requestParameters = { ...parameters, threadId: targetObjectId, tokensExpr: 'none' };
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  });
};


const addThreadLike = (targetObjectId, parameters) => {
  const url = `${PREFIX}threadManager/addThreadLike/threadId/replierId/tokensExpr/`;
  const requestParameters = { ...parameters, tokensExpr: 'none' };

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  });
};

const updateThreadLike = (targetObjectId, parameters) => {
  const url = `${PREFIX}threadManager/updateThreadLikeProperties/threadId/id/tokensExpr/`;
  const threadId = targetObjectId;
  const requestParameters = { ...parameters, threadId, tokensExpr: 'none' };
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  });
};

const removeThreadLikeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}threadManager/removeThreadLikeList/threadId/threadLikeIds/tokensExpr/`;
  const requestParameters = { ...parameters, threadId: targetObjectId, tokensExpr: 'none' };
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  });
};


const ThreadService = { view,
load,
addThreadReply,
addThreadRegistration,
addThreadLike,
updateThreadReply,
updateThreadRegistration,
updateThreadLike,
removeThreadReplyList,
removeThreadRegistrationList,
removeThreadLikeList };
export default ThreadService;

