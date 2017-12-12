

import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import enUS from 'antd/lib/locale-provider/en_US';
import BasicLayout from './layouts/BasicLayout';
import Launcher from './launcher/Launcher'
import BizAppLayout from './layouts/BizAppLayout'
import UserLayout from './layouts/UserLayout';




import CommunityBizApp from './bizcomponents/ccommunity/Community.app'
import InvitationCodeBizApp from './bizcomponents/cinvitationcode/InvitationCode.app'
import HomePageBizApp from './bizcomponents/chomepage/HomePage.app'
import SlideBizApp from './bizcomponents/cslide/Slide.app'
import EncyclopediaItemBizApp from './bizcomponents/cencyclopediaitem/EncyclopediaItem.app'
import TaskPageBizApp from './bizcomponents/ctaskpage/TaskPage.app'
import TaskFilterBizApp from './bizcomponents/ctaskfilter/TaskFilter.app'
import CommunityUserBizApp from './bizcomponents/ccommunityuser/CommunityUser.app'
import PatientInfoBizApp from './bizcomponents/cpatientinfo/PatientInfo.app'
import UserSkillBizApp from './bizcomponents/cuserskill/UserSkill.app'
import MessageFilterBizApp from './bizcomponents/cmessagefilter/MessageFilter.app'
import UserMessageBizApp from './bizcomponents/cusermessage/UserMessage.app'
import TaskBizApp from './bizcomponents/ctask/Task.app'
import TaskAssigmentBizApp from './bizcomponents/ctaskassigment/TaskAssigment.app'
import TaskHidingBizApp from './bizcomponents/ctaskhiding/TaskHiding.app'
import TaskResolvingBizApp from './bizcomponents/ctaskresolving/TaskResolving.app'
import TaskRewardBizApp from './bizcomponents/ctaskreward/TaskReward.app'
import TaskLikeBizApp from './bizcomponents/ctasklike/TaskLike.app'
import TaskReplyBizApp from './bizcomponents/ctaskreply/TaskReply.app'
import TaskBestAnswerSettingBizApp from './bizcomponents/ctaskbestanswersetting/TaskBestAnswerSetting.app'
import TaskReplyLikeBizApp from './bizcomponents/ctaskreplylike/TaskReplyLike.app'
import GroupPageBizApp from './bizcomponents/cgrouppage/GroupPage.app'
import GroupFilterBizApp from './bizcomponents/cgroupfilter/GroupFilter.app'
import ThreadBizApp from './bizcomponents/cthread/Thread.app'
import ThreadHidingBizApp from './bizcomponents/cthreadhiding/ThreadHiding.app'
import ThreadReplyBizApp from './bizcomponents/cthreadreply/ThreadReply.app'
import ThreadApprovalBizApp from './bizcomponents/cthreadapproval/ThreadApproval.app'
import ThreadCompletionBizApp from './bizcomponents/cthreadcompletion/ThreadCompletion.app'
import ThreadCancelingBizApp from './bizcomponents/cthreadcanceling/ThreadCanceling.app'
import ThreadRegistrationBizApp from './bizcomponents/cthreadregistration/ThreadRegistration.app'
import ThreadLikeBizApp from './bizcomponents/cthreadlike/ThreadLike.app'
import ThreadReplyLikeBizApp from './bizcomponents/cthreadreplylike/ThreadReplyLike.app'
import FanBizApp from './bizcomponents/cfan/Fan.app'
import FollowBizApp from './bizcomponents/cfollow/Follow.app'
import BonusPointBizApp from './bizcomponents/cbonuspoint/BonusPoint.app'
import ExperiencePointBizApp from './bizcomponents/cexperiencepoint/ExperiencePoint.app'
import UserDomainBizApp from './bizcomponents/cuserdomain/UserDomain.app'
import SecUserBizApp from './bizcomponents/csecuser/SecUser.app'
import SecUserBlockingBizApp from './bizcomponents/csecuserblocking/SecUserBlocking.app'
import UserAppBizApp from './bizcomponents/cuserapp/UserApp.app'
import ObjectAccessBizApp from './bizcomponents/cobjectaccess/ObjectAccess.app'
import LoginHistoryBizApp from './bizcomponents/cloginhistory/LoginHistory.app'


function RouterConfig({ history }) {
  return (
    <LocaleProvider locale={zhCN}>
      <Router history={history}>
        <Switch>
        <Route path="/user" component={UserLayout} />
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




