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
    url: `${PREFIX}homePageManager/view/${targetObjectId}/`,
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
    url: `${PREFIX}homePageManager/loadHomePage/${targetObjectId}/${parametersExpr}/`,
  });
};



const addSlide = (targetObjectId, parameters) => {
  const url = `${PREFIX}homePageManager/addSlide/homePageId/title/imageUrl/linkUrl/tokensExpr/`;
  const requestParameters = { ...parameters, tokensExpr: 'none' };

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  });
};

const updateSlide = (targetObjectId, parameters) => {
  const url = `${PREFIX}homePageManager/updateSlideProperties/homePageId/id/title/imageUrl/linkUrl/tokensExpr/`;
  const homePageId = targetObjectId;
  const requestParameters = { ...parameters, homePageId, tokensExpr: 'none' };
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  });
};

const removeSlideList = (targetObjectId, parameters) => {
  const url = `${PREFIX}homePageManager/removeSlideList/homePageId/slideIds/tokensExpr/`;
  const requestParameters = { ...parameters, homePageId: targetObjectId, tokensExpr: 'none' };
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  });
};


const addEncyclopediaItem = (targetObjectId, parameters) => {
  const url = `${PREFIX}homePageManager/addEncyclopediaItem/homePageId/title/publishTime/content/communityId/tokensExpr/`;
  const requestParameters = { ...parameters, tokensExpr: 'none' };

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  });
};

const updateEncyclopediaItem = (targetObjectId, parameters) => {
  const url = `${PREFIX}homePageManager/updateEncyclopediaItemProperties/homePageId/id/title/publishTime/content/tokensExpr/`;
  const homePageId = targetObjectId;
  const requestParameters = { ...parameters, homePageId, tokensExpr: 'none' };
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  });
};

const removeEncyclopediaItemList = (targetObjectId, parameters) => {
  const url = `${PREFIX}homePageManager/removeEncyclopediaItemList/homePageId/encyclopediaItemIds/tokensExpr/`;
  const requestParameters = { ...parameters, homePageId: targetObjectId, tokensExpr: 'none' };
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  });
};


const addTaskFilter = (targetObjectId, parameters) => {
  const url = `${PREFIX}homePageManager/addTaskFilter/homePageId/name/filterKey/linkUrl/taskPageId/tokensExpr/`;
  const requestParameters = { ...parameters, tokensExpr: 'none' };

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  });
};

const updateTaskFilter = (targetObjectId, parameters) => {
  const url = `${PREFIX}homePageManager/updateTaskFilterProperties/homePageId/id/name/filterKey/linkUrl/tokensExpr/`;
  const homePageId = targetObjectId;
  const requestParameters = { ...parameters, homePageId, tokensExpr: 'none' };
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  });
};

const removeTaskFilterList = (targetObjectId, parameters) => {
  const url = `${PREFIX}homePageManager/removeTaskFilterList/homePageId/taskFilterIds/tokensExpr/`;
  const requestParameters = { ...parameters, homePageId: targetObjectId, tokensExpr: 'none' };
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  });
};


const addTask = (targetObjectId, parameters) => {
  const url = `${PREFIX}homePageManager/addTask/homePageId/title/selectedTask/content/creatorId/communityId/taskPageId/videoUrl/coverImagePath1/coverImagePath2/coverImagePath3/imagePath1/imagePath2/imagePath3/imagePath4/imagePath5/creatorBonus/additionalBonus/likeByCurrentUser/repliedByCurrentUser/tokensExpr/`;
  const requestParameters = { ...parameters, tokensExpr: 'none' };

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  });
};

const updateTask = (targetObjectId, parameters) => {
  const url = `${PREFIX}homePageManager/updateTaskProperties/homePageId/id/title/selectedTask/content/videoUrl/coverImagePath1/coverImagePath2/coverImagePath3/imagePath1/imagePath2/imagePath3/imagePath4/imagePath5/creatorBonus/additionalBonus/likeByCurrentUser/repliedByCurrentUser/tokensExpr/`;
  const homePageId = targetObjectId;
  const requestParameters = { ...parameters, homePageId, tokensExpr: 'none' };
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  });
};

const removeTaskList = (targetObjectId, parameters) => {
  const url = `${PREFIX}homePageManager/removeTaskList/homePageId/taskIds/tokensExpr/`;
  const requestParameters = { ...parameters, homePageId: targetObjectId, tokensExpr: 'none' };
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  });
};


const addThread = (targetObjectId, parameters) => {
  const url = `${PREFIX}homePageManager/addThread/homePageId/title/displayOrder/eventTime/registrationStopTime/eventLocation/city/communityGroup/threadType/communityId/creatorId/groupPageId/videoUrl/coverImagePath1/coverImagePath2/coverImagePath3/imagePath1/imagePath2/imagePath3/imagePath4/imagePath5/content/likeByCurrentUser/repliedByCurrentUser/registeredByCurrentUser/tokensExpr/`;
  const requestParameters = { ...parameters, tokensExpr: 'none' };

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  });
};

const updateThread = (targetObjectId, parameters) => {
  const url = `${PREFIX}homePageManager/updateThreadProperties/homePageId/id/title/displayOrder/eventTime/registrationStopTime/eventLocation/city/communityGroup/threadType/videoUrl/coverImagePath1/coverImagePath2/coverImagePath3/imagePath1/imagePath2/imagePath3/imagePath4/imagePath5/content/likeByCurrentUser/repliedByCurrentUser/registeredByCurrentUser/tokensExpr/`;
  const homePageId = targetObjectId;
  const requestParameters = { ...parameters, homePageId, tokensExpr: 'none' };
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  });
};

const removeThreadList = (targetObjectId, parameters) => {
  const url = `${PREFIX}homePageManager/removeThreadList/homePageId/threadIds/tokensExpr/`;
  const requestParameters = { ...parameters, homePageId: targetObjectId, tokensExpr: 'none' };
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  });
};


const HomePageService = { view,
load,
addSlide,
addEncyclopediaItem,
addTaskFilter,
addTask,
addThread,
updateSlide,
updateEncyclopediaItem,
updateTaskFilter,
updateTask,
updateThread,
removeSlideList,
removeEncyclopediaItemList,
removeTaskFilterList,
removeTaskList,
removeThreadList };
export default HomePageService;

