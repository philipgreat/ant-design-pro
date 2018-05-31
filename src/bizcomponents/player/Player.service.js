import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}playerManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}playerManager/loadPlayer/${targetObjectId}/${parametersExpr}/`,
  })
}






const addGamePlayerRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}playerManager/addGamePlayerRecord/playerId/playerNickName/gameName/gameSessionDatetime/gameSessionName/gameScore/gameId/gameSessionId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateGamePlayerRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}playerManager/updateGamePlayerRecordProperties/playerId/id/playerNickName/gameName/gameSessionDatetime/gameSessionName/gameScore/tokensExpr/`
  const playerId = targetObjectId
  const requestParameters = { ...parameters, playerId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeGamePlayerRecordList = (targetObjectId, parameters) => {
  const url = `${PREFIX}playerManager/removeGamePlayerRecordList/playerId/gamePlayerRecordIds/tokensExpr/`
  const requestParameters = { ...parameters, playerId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addGameToken = (targetObjectId, parameters) => {
  const url = `${PREFIX}playerManager/addGameToken/playerId/tokenContent/nFCID/gameSessionId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateGameToken = (targetObjectId, parameters) => {
  const url = `${PREFIX}playerManager/updateGameTokenProperties/playerId/id/tokenContent/nFCID/tokensExpr/`
  const playerId = targetObjectId
  const requestParameters = { ...parameters, playerId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeGameTokenList = (targetObjectId, parameters) => {
  const url = `${PREFIX}playerManager/removeGameTokenList/playerId/gameTokenIds/tokensExpr/`
  const requestParameters = { ...parameters, playerId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const PlayerService = { view,
  load,
  addGamePlayerRecord,
  addGameToken,
  updateGamePlayerRecord,
  updateGameToken,
  removeGamePlayerRecordList,
  removeGameTokenList }
export default PlayerService

