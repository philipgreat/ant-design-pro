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
    url: `${PREFIX}taskManager/view/${targetObjectId}/`,
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
    url: `${PREFIX}taskManager/loadTask/${targetObjectId}/${parametersExpr}/`,
  });
};



const addTaskAssigment = (targetObjectId, parameters) => {
  const url = `${PREFIX}taskManager/addTaskAssigment/taskId/assigneeId/comments/tokensExpr/`;
  const requestParameters = { ...parameters, tokensExpr: 'none' };

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  });
};

const updateTaskAssigment = (targetObjectId, parameters) => {
  const url = `${PREFIX}taskManager/updateTaskAssigmentProperties/taskId/id/comments/tokensExpr/`;
  const taskId = targetObjectId;
  const requestParameters = { ...parameters, taskId, tokensExpr: 'none' };
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  });
};

const removeTaskAssigmentList = (targetObjectId, parameters) => {
  const url = `${PREFIX}taskManager/removeTaskAssigmentList/taskId/taskAssigmentIds/tokensExpr/`;
  const requestParameters = { ...parameters, taskId: targetObjectId, tokensExpr: 'none' };
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  });
};


const addTaskLike = (targetObjectId, parameters) => {
  const url = `${PREFIX}taskManager/addTaskLike/taskId/replierId/tokensExpr/`;
  const requestParameters = { ...parameters, tokensExpr: 'none' };

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  });
};

const updateTaskLike = (targetObjectId, parameters) => {
  const url = `${PREFIX}taskManager/updateTaskLikeProperties/taskId/id/tokensExpr/`;
  const taskId = targetObjectId;
  const requestParameters = { ...parameters, taskId, tokensExpr: 'none' };
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  });
};

const removeTaskLikeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}taskManager/removeTaskLikeList/taskId/taskLikeIds/tokensExpr/`;
  const requestParameters = { ...parameters, taskId: targetObjectId, tokensExpr: 'none' };
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  });
};


const addTaskReply = (targetObjectId, parameters) => {
  const url = `${PREFIX}taskManager/addTaskReply/taskId/content/replierId/likeByCurrentUser/tokensExpr/`;
  const requestParameters = { ...parameters, tokensExpr: 'none' };

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  });
};

const updateTaskReply = (targetObjectId, parameters) => {
  const url = `${PREFIX}taskManager/updateTaskReplyProperties/taskId/id/content/likeByCurrentUser/tokensExpr/`;
  const taskId = targetObjectId;
  const requestParameters = { ...parameters, taskId, tokensExpr: 'none' };
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  });
};

const removeTaskReplyList = (targetObjectId, parameters) => {
  const url = `${PREFIX}taskManager/removeTaskReplyList/taskId/taskReplyIds/tokensExpr/`;
  const requestParameters = { ...parameters, taskId: targetObjectId, tokensExpr: 'none' };
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  });
};


const TaskService = { view,
load,
addTaskAssigment,
addTaskLike,
addTaskReply,
updateTaskAssigment,
updateTaskLike,
updateTaskReply,
removeTaskAssigmentList,
removeTaskLikeList,
removeTaskReplyList };
export default TaskService;

