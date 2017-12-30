

import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
// import enUS from 'antd/lib/locale-provider/en_US'
import Launcher from './launcher/Launcher'

import {CommunityBizApp} from './custcomponents';
import {InvitationCodeBizApp} from './custcomponents';
import {HomePageBizApp} from './custcomponents';
import {SlideBizApp} from './custcomponents';
import {EncyclopediaItemBizApp} from './custcomponents';
import {TaskPageBizApp} from './custcomponents';
import {TaskFilterBizApp} from './custcomponents';
import {CommunityUserBizApp} from './custcomponents';
import {PatientInfoBizApp} from './custcomponents';
import {UserSkillBizApp} from './custcomponents';
import {MessageFilterBizApp} from './custcomponents';
import {UserMessageBizApp} from './custcomponents';
import {TaskBizApp} from './custcomponents';
import {TaskAssigmentBizApp} from './custcomponents';
import {TaskHidingBizApp} from './custcomponents';
import {TaskResolvingBizApp} from './custcomponents';
import {TaskRewardBizApp} from './custcomponents';
import {TaskLikeBizApp} from './custcomponents';
import {TaskReplyBizApp} from './custcomponents';
import {TaskBestAnswerSettingBizApp} from './custcomponents';
import {TaskReplyLikeBizApp} from './custcomponents';
import {GroupPageBizApp} from './custcomponents';
import {GroupFilterBizApp} from './custcomponents';
import {ThreadBizApp} from './custcomponents';
import {ThreadHidingBizApp} from './custcomponents';
import {ThreadReplyBizApp} from './custcomponents';
import {ThreadApprovalBizApp} from './custcomponents';
import {ThreadCompletionBizApp} from './custcomponents';
import {ThreadCancelingBizApp} from './custcomponents';
import {ThreadRegistrationBizApp} from './custcomponents';
import {ThreadLikeBizApp} from './custcomponents';
import {ThreadReplyLikeBizApp} from './custcomponents';
import {FanBizApp} from './custcomponents';
import {FollowBizApp} from './custcomponents';
import {BonusPointBizApp} from './custcomponents';
import {ExperiencePointBizApp} from './custcomponents';
import {UserDomainBizApp} from './custcomponents';
import {SecUserBizApp} from './custcomponents';
import {SecUserBlockingBizApp} from './custcomponents';
import {UserAppBizApp} from './custcomponents';
import {ObjectAccessBizApp} from './custcomponents';
import {LoginHistoryBizApp} from './custcomponents';


function RouterConfig({ history }) {
  return (
    <LocaleProvider locale={zhCN}>
      <Router history={history}>
        <Switch>
         <Route path="/home" component={Launcher} />
          <Route path="/community/" component={CommunityBizApp} />
          <Route path="/invitationCode/" component={InvitationCodeBizApp} />
          <Route path="/homePage/" component={HomePageBizApp} />
          <Route path="/slide/" component={SlideBizApp} />
          <Route path="/encyclopediaItem/" component={EncyclopediaItemBizApp} />
          <Route path="/taskPage/" component={TaskPageBizApp} />
          <Route path="/taskFilter/" component={TaskFilterBizApp} />
          <Route path="/communityUser/" component={CommunityUserBizApp} />
          <Route path="/patientInfo/" component={PatientInfoBizApp} />
          <Route path="/userSkill/" component={UserSkillBizApp} />
          <Route path="/messageFilter/" component={MessageFilterBizApp} />
          <Route path="/userMessage/" component={UserMessageBizApp} />
          <Route path="/task/" component={TaskBizApp} />
          <Route path="/taskAssigment/" component={TaskAssigmentBizApp} />
          <Route path="/taskHiding/" component={TaskHidingBizApp} />
          <Route path="/taskResolving/" component={TaskResolvingBizApp} />
          <Route path="/taskReward/" component={TaskRewardBizApp} />
          <Route path="/taskLike/" component={TaskLikeBizApp} />
          <Route path="/taskReply/" component={TaskReplyBizApp} />
          <Route path="/taskBestAnswerSetting/" component={TaskBestAnswerSettingBizApp} />
          <Route path="/taskReplyLike/" component={TaskReplyLikeBizApp} />
          <Route path="/groupPage/" component={GroupPageBizApp} />
          <Route path="/groupFilter/" component={GroupFilterBizApp} />
          <Route path="/thread/" component={ThreadBizApp} />
          <Route path="/threadHiding/" component={ThreadHidingBizApp} />
          <Route path="/threadReply/" component={ThreadReplyBizApp} />
          <Route path="/threadApproval/" component={ThreadApprovalBizApp} />
          <Route path="/threadCompletion/" component={ThreadCompletionBizApp} />
          <Route path="/threadCanceling/" component={ThreadCancelingBizApp} />
          <Route path="/threadRegistration/" component={ThreadRegistrationBizApp} />
          <Route path="/threadLike/" component={ThreadLikeBizApp} />
          <Route path="/threadReplyLike/" component={ThreadReplyLikeBizApp} />
          <Route path="/fan/" component={FanBizApp} />
          <Route path="/follow/" component={FollowBizApp} />
          <Route path="/bonusPoint/" component={BonusPointBizApp} />
          <Route path="/experiencePoint/" component={ExperiencePointBizApp} />
          <Route path="/userDomain/" component={UserDomainBizApp} />
          <Route path="/secUser/" component={SecUserBizApp} />
          <Route path="/secUserBlocking/" component={SecUserBlockingBizApp} />
          <Route path="/userApp/" component={UserAppBizApp} />
          <Route path="/objectAccess/" component={ObjectAccessBizApp} />
          <Route path="/loginHistory/" component={LoginHistoryBizApp} />

        </Switch>
      </Router>
    </LocaleProvider>
  )
}

export default RouterConfig









