

import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import enUS from 'antd/lib/locale-provider/en_US';
import Launcher from './launcher/Launcher'




import CommunityBizApp from './bizcomponents/community/Community.app'
import InvitationCodeBizApp from './bizcomponents/invitationcode/InvitationCode.app'
import HomePageBizApp from './bizcomponents/homepage/HomePage.app'
import SlideBizApp from './bizcomponents/slide/Slide.app'
import EncyclopediaItemBizApp from './bizcomponents/encyclopediaitem/EncyclopediaItem.app'
import TaskPageBizApp from './bizcomponents/taskpage/TaskPage.app'
import TaskFilterBizApp from './bizcomponents/taskfilter/TaskFilter.app'
import CommunityUserBizApp from './bizcomponents/communityuser/CommunityUser.app'
import PatientInfoBizApp from './bizcomponents/patientinfo/PatientInfo.app'
import UserSkillBizApp from './bizcomponents/userskill/UserSkill.app'
import MessageFilterBizApp from './bizcomponents/messagefilter/MessageFilter.app'
import UserMessageBizApp from './bizcomponents/usermessage/UserMessage.app'
import TaskBizApp from './bizcomponents/task/Task.app'
import TaskAssigmentBizApp from './bizcomponents/taskassigment/TaskAssigment.app'
import TaskHidingBizApp from './bizcomponents/taskhiding/TaskHiding.app'
import TaskResolvingBizApp from './bizcomponents/taskresolving/TaskResolving.app'
import TaskRewardBizApp from './bizcomponents/taskreward/TaskReward.app'
import TaskLikeBizApp from './bizcomponents/tasklike/TaskLike.app'
import TaskReplyBizApp from './bizcomponents/taskreply/TaskReply.app'
import TaskBestAnswerSettingBizApp from './bizcomponents/taskbestanswersetting/TaskBestAnswerSetting.app'
import TaskReplyLikeBizApp from './bizcomponents/taskreplylike/TaskReplyLike.app'
import GroupPageBizApp from './bizcomponents/grouppage/GroupPage.app'
import GroupFilterBizApp from './bizcomponents/groupfilter/GroupFilter.app'
import ThreadBizApp from './bizcomponents/thread/Thread.app'
import ThreadHidingBizApp from './bizcomponents/threadhiding/ThreadHiding.app'
import ThreadReplyBizApp from './bizcomponents/threadreply/ThreadReply.app'
import ThreadApprovalBizApp from './bizcomponents/threadapproval/ThreadApproval.app'
import ThreadCompletionBizApp from './bizcomponents/threadcompletion/ThreadCompletion.app'
import ThreadCancelingBizApp from './bizcomponents/threadcanceling/ThreadCanceling.app'
import ThreadRegistrationBizApp from './bizcomponents/threadregistration/ThreadRegistration.app'
import ThreadLikeBizApp from './bizcomponents/threadlike/ThreadLike.app'
import ThreadReplyLikeBizApp from './bizcomponents/threadreplylike/ThreadReplyLike.app'
import FanBizApp from './bizcomponents/fan/Fan.app'
import FollowBizApp from './bizcomponents/follow/Follow.app'
import BonusPointBizApp from './bizcomponents/bonuspoint/BonusPoint.app'
import ExperiencePointBizApp from './bizcomponents/experiencepoint/ExperiencePoint.app'
import UserDomainBizApp from './bizcomponents/userdomain/UserDomain.app'
import SecUserBizApp from './bizcomponents/secuser/SecUser.app'
import SecUserBlockingBizApp from './bizcomponents/secuserblocking/SecUserBlocking.app'
import UserAppBizApp from './bizcomponents/userapp/UserApp.app'
import ObjectAccessBizApp from './bizcomponents/objectaccess/ObjectAccess.app'
import LoginHistoryBizApp from './bizcomponents/loginhistory/LoginHistory.app'


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
  );
}

export default RouterConfig;












	
