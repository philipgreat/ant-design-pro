
import dva from 'dva'
import 'moment/locale/zh-cn'
import models from './models'
import './polyfill'
import './g2'
import RouterConfig from './router'
// import { browserHistory } from 'dva/router'
import './index.less'

import LauncherModel from './launcher/Launcher.model'

import CommunityModel from './bizcomponents/community/Community.model'
import InvitationCodeModel from './bizcomponents/invitationcode/InvitationCode.model'
import HomePageModel from './bizcomponents/homepage/HomePage.model'
import SlideModel from './bizcomponents/slide/Slide.model'
import EncyclopediaItemModel from './bizcomponents/encyclopediaitem/EncyclopediaItem.model'
import TaskPageModel from './bizcomponents/taskpage/TaskPage.model'
import TaskFilterModel from './bizcomponents/taskfilter/TaskFilter.model'
import CommunityUserModel from './bizcomponents/communityuser/CommunityUser.model'
import PatientInfoModel from './bizcomponents/patientinfo/PatientInfo.model'
import UserSkillModel from './bizcomponents/userskill/UserSkill.model'
import MessageFilterModel from './bizcomponents/messagefilter/MessageFilter.model'
import UserMessageModel from './bizcomponents/usermessage/UserMessage.model'
import TaskModel from './bizcomponents/task/Task.model'
import TaskAssigmentModel from './bizcomponents/taskassigment/TaskAssigment.model'
import TaskHidingModel from './bizcomponents/taskhiding/TaskHiding.model'
import TaskResolvingModel from './bizcomponents/taskresolving/TaskResolving.model'
import TaskRewardModel from './bizcomponents/taskreward/TaskReward.model'
import TaskLikeModel from './bizcomponents/tasklike/TaskLike.model'
import TaskReplyModel from './bizcomponents/taskreply/TaskReply.model'
import TaskBestAnswerSettingModel from './bizcomponents/taskbestanswersetting/TaskBestAnswerSetting.model'
import TaskReplyLikeModel from './bizcomponents/taskreplylike/TaskReplyLike.model'
import GroupPageModel from './bizcomponents/grouppage/GroupPage.model'
import GroupFilterModel from './bizcomponents/groupfilter/GroupFilter.model'
import ThreadModel from './bizcomponents/thread/Thread.model'
import ThreadHidingModel from './bizcomponents/threadhiding/ThreadHiding.model'
import ThreadReplyModel from './bizcomponents/threadreply/ThreadReply.model'
import ThreadApprovalModel from './bizcomponents/threadapproval/ThreadApproval.model'
import ThreadCompletionModel from './bizcomponents/threadcompletion/ThreadCompletion.model'
import ThreadCancelingModel from './bizcomponents/threadcanceling/ThreadCanceling.model'
import ThreadRegistrationModel from './bizcomponents/threadregistration/ThreadRegistration.model'
import ThreadLikeModel from './bizcomponents/threadlike/ThreadLike.model'
import ThreadReplyLikeModel from './bizcomponents/threadreplylike/ThreadReplyLike.model'
import FanModel from './bizcomponents/fan/Fan.model'
import FollowModel from './bizcomponents/follow/Follow.model'
import BonusPointModel from './bizcomponents/bonuspoint/BonusPoint.model'
import ExperiencePointModel from './bizcomponents/experiencepoint/ExperiencePoint.model'
import UserDomainModel from './bizcomponents/userdomain/UserDomain.model'
import SecUserModel from './bizcomponents/secuser/SecUser.model'
import SecUserBlockingModel from './bizcomponents/secuserblocking/SecUserBlocking.model'
import UserAppModel from './bizcomponents/userapp/UserApp.model'
import ObjectAccessModel from './bizcomponents/objectaccess/ObjectAccess.model'
import LoginHistoryModel from './bizcomponents/loginhistory/LoginHistory.model'


// 1. Initialize
const app = dva({
  // history: browserHistory,
})

// 2. Plugins
// app.use({})


app.model(LauncherModel)


app.model(CommunityModel)
app.model(InvitationCodeModel)
app.model(HomePageModel)
app.model(SlideModel)
app.model(EncyclopediaItemModel)
app.model(TaskPageModel)
app.model(TaskFilterModel)
app.model(CommunityUserModel)
app.model(PatientInfoModel)
app.model(UserSkillModel)
app.model(MessageFilterModel)
app.model(UserMessageModel)
app.model(TaskModel)
app.model(TaskAssigmentModel)
app.model(TaskHidingModel)
app.model(TaskResolvingModel)
app.model(TaskRewardModel)
app.model(TaskLikeModel)
app.model(TaskReplyModel)
app.model(TaskBestAnswerSettingModel)
app.model(TaskReplyLikeModel)
app.model(GroupPageModel)
app.model(GroupFilterModel)
app.model(ThreadModel)
app.model(ThreadHidingModel)
app.model(ThreadReplyModel)
app.model(ThreadApprovalModel)
app.model(ThreadCompletionModel)
app.model(ThreadCancelingModel)
app.model(ThreadRegistrationModel)
app.model(ThreadLikeModel)
app.model(ThreadReplyLikeModel)
app.model(FanModel)
app.model(FollowModel)
app.model(BonusPointModel)
app.model(ExperiencePointModel)
app.model(UserDomainModel)
app.model(SecUserModel)
app.model(SecUserBlockingModel)
app.model(UserAppModel)
app.model(ObjectAccessModel)
app.model(LoginHistoryModel)


// 3. Model move to router
models.forEach((m) => {
  app.model(m)
})

// 4. Router
app.router(RouterConfig)

// 5. Start
app.start('#root')









