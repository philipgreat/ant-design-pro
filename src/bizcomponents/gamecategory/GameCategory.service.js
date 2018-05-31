import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}gameCategoryManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}gameCategoryManager/loadGameCategory/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateStore = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}gameCategoryManager/requestCandidateStore/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addGame = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameCategoryManager/addGame/gameCategoryId/name/shortDescription/longDescription/gameIcon/backgroundImage/coverImage/gameImage1/gameImage2/gameImage3/gameImage4/gameImage5/gameImage6/gameVideo/maximumPlayerCount/minimumPlayerCount/recommendPlayerCount/baseListPrice/gameDuration/gameReservation/gameStatus/sessionGame/storeId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateGame = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameCategoryManager/updateGameProperties/gameCategoryId/id/name/shortDescription/longDescription/gameIcon/backgroundImage/coverImage/gameImage1/gameImage2/gameImage3/gameImage4/gameImage5/gameImage6/gameVideo/maximumPlayerCount/minimumPlayerCount/recommendPlayerCount/baseListPrice/gameDuration/gameReservation/gameStatus/sessionGame/tokensExpr/`
  const gameCategoryId = targetObjectId
  const requestParameters = { ...parameters, gameCategoryId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeGameList = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameCategoryManager/removeGameList/gameCategoryId/gameIds/tokensExpr/`
  const requestParameters = { ...parameters, gameCategoryId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const GameCategoryService = { view,
  load,
  addGame,
  updateGame,
  removeGameList,
  requestCandidateStore }
export default GameCategoryService

