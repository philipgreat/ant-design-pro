








//@savefile: src/bizcomponents/index.js




import CommunityBizApp from './community/Community.app';
import CommunityModel from './community/Community.model';
import CommunityDashboard from './community/Community.dashboard';
import CommunityConfirmationTable from './community/Community.confirmmationtable';
import CommunitySearch from './community/Community.search';
import CommunitySearchForm from './community/Community.searchform';
import CommunityCreateForm from './community/Community.createform';
import CommunityTable from './community/Community.table';
import CommunityEditTable from './community/Community.edittable';
import CommunityEditDetail from './community/Community.editdetail';
import CommunityService from './community/Community.service';
import CommunityUpdateForm from './community/Community.updateform';
import InvitationCodeBizApp from './invitationcode/InvitationCode.app';
import InvitationCodeModel from './invitationcode/InvitationCode.model';
import InvitationCodeDashboard from './invitationcode/InvitationCode.dashboard';
import InvitationCodeConfirmationTable from './invitationcode/InvitationCode.confirmmationtable';
import InvitationCodeSearch from './invitationcode/InvitationCode.search';
import InvitationCodeSearchForm from './invitationcode/InvitationCode.searchform';
import InvitationCodeCreateForm from './invitationcode/InvitationCode.createform';
import InvitationCodeTable from './invitationcode/InvitationCode.table';
import InvitationCodeEditTable from './invitationcode/InvitationCode.edittable';
import InvitationCodeEditDetail from './invitationcode/InvitationCode.editdetail';
import InvitationCodeService from './invitationcode/InvitationCode.service';
import InvitationCodeUpdateForm from './invitationcode/InvitationCode.updateform';
import HomePageBizApp from './homepage/HomePage.app';
import HomePageModel from './homepage/HomePage.model';
import HomePageDashboard from './homepage/HomePage.dashboard';
import HomePageConfirmationTable from './homepage/HomePage.confirmmationtable';
import HomePageSearch from './homepage/HomePage.search';
import HomePageSearchForm from './homepage/HomePage.searchform';
import HomePageCreateForm from './homepage/HomePage.createform';
import HomePageTable from './homepage/HomePage.table';
import HomePageEditTable from './homepage/HomePage.edittable';
import HomePageEditDetail from './homepage/HomePage.editdetail';
import HomePageService from './homepage/HomePage.service';
import HomePageUpdateForm from './homepage/HomePage.updateform';
import SlideBizApp from './slide/Slide.app';
import SlideModel from './slide/Slide.model';
import SlideDashboard from './slide/Slide.dashboard';
import SlideConfirmationTable from './slide/Slide.confirmmationtable';
import SlideSearch from './slide/Slide.search';
import SlideSearchForm from './slide/Slide.searchform';
import SlideCreateForm from './slide/Slide.createform';
import SlideTable from './slide/Slide.table';
import SlideEditTable from './slide/Slide.edittable';
import SlideEditDetail from './slide/Slide.editdetail';
import SlideService from './slide/Slide.service';
import SlideUpdateForm from './slide/Slide.updateform';
import EncyclopediaItemBizApp from './encyclopediaitem/EncyclopediaItem.app';
import EncyclopediaItemModel from './encyclopediaitem/EncyclopediaItem.model';
import EncyclopediaItemDashboard from './encyclopediaitem/EncyclopediaItem.dashboard';
import EncyclopediaItemConfirmationTable from './encyclopediaitem/EncyclopediaItem.confirmmationtable';
import EncyclopediaItemSearch from './encyclopediaitem/EncyclopediaItem.search';
import EncyclopediaItemSearchForm from './encyclopediaitem/EncyclopediaItem.searchform';
import EncyclopediaItemCreateForm from './encyclopediaitem/EncyclopediaItem.createform';
import EncyclopediaItemTable from './encyclopediaitem/EncyclopediaItem.table';
import EncyclopediaItemEditTable from './encyclopediaitem/EncyclopediaItem.edittable';
import EncyclopediaItemEditDetail from './encyclopediaitem/EncyclopediaItem.editdetail';
import EncyclopediaItemService from './encyclopediaitem/EncyclopediaItem.service';
import EncyclopediaItemUpdateForm from './encyclopediaitem/EncyclopediaItem.updateform';
import TaskPageBizApp from './taskpage/TaskPage.app';
import TaskPageModel from './taskpage/TaskPage.model';
import TaskPageDashboard from './taskpage/TaskPage.dashboard';
import TaskPageConfirmationTable from './taskpage/TaskPage.confirmmationtable';
import TaskPageSearch from './taskpage/TaskPage.search';
import TaskPageSearchForm from './taskpage/TaskPage.searchform';
import TaskPageCreateForm from './taskpage/TaskPage.createform';
import TaskPageTable from './taskpage/TaskPage.table';
import TaskPageEditTable from './taskpage/TaskPage.edittable';
import TaskPageEditDetail from './taskpage/TaskPage.editdetail';
import TaskPageService from './taskpage/TaskPage.service';
import TaskPageUpdateForm from './taskpage/TaskPage.updateform';
import TaskFilterBizApp from './taskfilter/TaskFilter.app';
import TaskFilterModel from './taskfilter/TaskFilter.model';
import TaskFilterDashboard from './taskfilter/TaskFilter.dashboard';
import TaskFilterConfirmationTable from './taskfilter/TaskFilter.confirmmationtable';
import TaskFilterSearch from './taskfilter/TaskFilter.search';
import TaskFilterSearchForm from './taskfilter/TaskFilter.searchform';
import TaskFilterCreateForm from './taskfilter/TaskFilter.createform';
import TaskFilterTable from './taskfilter/TaskFilter.table';
import TaskFilterEditTable from './taskfilter/TaskFilter.edittable';
import TaskFilterEditDetail from './taskfilter/TaskFilter.editdetail';
import TaskFilterService from './taskfilter/TaskFilter.service';
import TaskFilterUpdateForm from './taskfilter/TaskFilter.updateform';
import CommunityUserBizApp from './communityuser/CommunityUser.app';
import CommunityUserModel from './communityuser/CommunityUser.model';
import CommunityUserDashboard from './communityuser/CommunityUser.dashboard';
import CommunityUserConfirmationTable from './communityuser/CommunityUser.confirmmationtable';
import CommunityUserSearch from './communityuser/CommunityUser.search';
import CommunityUserSearchForm from './communityuser/CommunityUser.searchform';
import CommunityUserCreateForm from './communityuser/CommunityUser.createform';
import CommunityUserTable from './communityuser/CommunityUser.table';
import CommunityUserEditTable from './communityuser/CommunityUser.edittable';
import CommunityUserEditDetail from './communityuser/CommunityUser.editdetail';
import CommunityUserService from './communityuser/CommunityUser.service';
import CommunityUserUpdateForm from './communityuser/CommunityUser.updateform';
import PatientInfoBizApp from './patientinfo/PatientInfo.app';
import PatientInfoModel from './patientinfo/PatientInfo.model';
import PatientInfoDashboard from './patientinfo/PatientInfo.dashboard';
import PatientInfoConfirmationTable from './patientinfo/PatientInfo.confirmmationtable';
import PatientInfoSearch from './patientinfo/PatientInfo.search';
import PatientInfoSearchForm from './patientinfo/PatientInfo.searchform';
import PatientInfoCreateForm from './patientinfo/PatientInfo.createform';
import PatientInfoTable from './patientinfo/PatientInfo.table';
import PatientInfoEditTable from './patientinfo/PatientInfo.edittable';
import PatientInfoEditDetail from './patientinfo/PatientInfo.editdetail';
import PatientInfoService from './patientinfo/PatientInfo.service';
import PatientInfoUpdateForm from './patientinfo/PatientInfo.updateform';
import UserSkillBizApp from './userskill/UserSkill.app';
import UserSkillModel from './userskill/UserSkill.model';
import UserSkillDashboard from './userskill/UserSkill.dashboard';
import UserSkillConfirmationTable from './userskill/UserSkill.confirmmationtable';
import UserSkillSearch from './userskill/UserSkill.search';
import UserSkillSearchForm from './userskill/UserSkill.searchform';
import UserSkillCreateForm from './userskill/UserSkill.createform';
import UserSkillTable from './userskill/UserSkill.table';
import UserSkillEditTable from './userskill/UserSkill.edittable';
import UserSkillEditDetail from './userskill/UserSkill.editdetail';
import UserSkillService from './userskill/UserSkill.service';
import UserSkillUpdateForm from './userskill/UserSkill.updateform';
import MessageFilterBizApp from './messagefilter/MessageFilter.app';
import MessageFilterModel from './messagefilter/MessageFilter.model';
import MessageFilterDashboard from './messagefilter/MessageFilter.dashboard';
import MessageFilterConfirmationTable from './messagefilter/MessageFilter.confirmmationtable';
import MessageFilterSearch from './messagefilter/MessageFilter.search';
import MessageFilterSearchForm from './messagefilter/MessageFilter.searchform';
import MessageFilterCreateForm from './messagefilter/MessageFilter.createform';
import MessageFilterTable from './messagefilter/MessageFilter.table';
import MessageFilterEditTable from './messagefilter/MessageFilter.edittable';
import MessageFilterEditDetail from './messagefilter/MessageFilter.editdetail';
import MessageFilterService from './messagefilter/MessageFilter.service';
import MessageFilterUpdateForm from './messagefilter/MessageFilter.updateform';
import UserMessageBizApp from './usermessage/UserMessage.app';
import UserMessageModel from './usermessage/UserMessage.model';
import UserMessageDashboard from './usermessage/UserMessage.dashboard';
import UserMessageConfirmationTable from './usermessage/UserMessage.confirmmationtable';
import UserMessageSearch from './usermessage/UserMessage.search';
import UserMessageSearchForm from './usermessage/UserMessage.searchform';
import UserMessageCreateForm from './usermessage/UserMessage.createform';
import UserMessageTable from './usermessage/UserMessage.table';
import UserMessageEditTable from './usermessage/UserMessage.edittable';
import UserMessageEditDetail from './usermessage/UserMessage.editdetail';
import UserMessageService from './usermessage/UserMessage.service';
import UserMessageUpdateForm from './usermessage/UserMessage.updateform';
import TaskBizApp from './task/Task.app';
import TaskModel from './task/Task.model';
import TaskDashboard from './task/Task.dashboard';
import TaskConfirmationTable from './task/Task.confirmmationtable';
import TaskSearch from './task/Task.search';
import TaskSearchForm from './task/Task.searchform';
import TaskCreateForm from './task/Task.createform';
import TaskTable from './task/Task.table';
import TaskEditTable from './task/Task.edittable';
import TaskEditDetail from './task/Task.editdetail';
import TaskService from './task/Task.service';
import TaskUpdateForm from './task/Task.updateform';
import TaskAssigmentBizApp from './taskassigment/TaskAssigment.app';
import TaskAssigmentModel from './taskassigment/TaskAssigment.model';
import TaskAssigmentDashboard from './taskassigment/TaskAssigment.dashboard';
import TaskAssigmentConfirmationTable from './taskassigment/TaskAssigment.confirmmationtable';
import TaskAssigmentSearch from './taskassigment/TaskAssigment.search';
import TaskAssigmentSearchForm from './taskassigment/TaskAssigment.searchform';
import TaskAssigmentCreateForm from './taskassigment/TaskAssigment.createform';
import TaskAssigmentTable from './taskassigment/TaskAssigment.table';
import TaskAssigmentEditTable from './taskassigment/TaskAssigment.edittable';
import TaskAssigmentEditDetail from './taskassigment/TaskAssigment.editdetail';
import TaskAssigmentService from './taskassigment/TaskAssigment.service';
import TaskAssigmentUpdateForm from './taskassigment/TaskAssigment.updateform';
import TaskHidingBizApp from './taskhiding/TaskHiding.app';
import TaskHidingModel from './taskhiding/TaskHiding.model';
import TaskHidingDashboard from './taskhiding/TaskHiding.dashboard';
import TaskHidingConfirmationTable from './taskhiding/TaskHiding.confirmmationtable';
import TaskHidingSearch from './taskhiding/TaskHiding.search';
import TaskHidingSearchForm from './taskhiding/TaskHiding.searchform';
import TaskHidingCreateForm from './taskhiding/TaskHiding.createform';
import TaskHidingTable from './taskhiding/TaskHiding.table';
import TaskHidingEditTable from './taskhiding/TaskHiding.edittable';
import TaskHidingEditDetail from './taskhiding/TaskHiding.editdetail';
import TaskHidingService from './taskhiding/TaskHiding.service';
import TaskHidingUpdateForm from './taskhiding/TaskHiding.updateform';
import TaskResolvingBizApp from './taskresolving/TaskResolving.app';
import TaskResolvingModel from './taskresolving/TaskResolving.model';
import TaskResolvingDashboard from './taskresolving/TaskResolving.dashboard';
import TaskResolvingConfirmationTable from './taskresolving/TaskResolving.confirmmationtable';
import TaskResolvingSearch from './taskresolving/TaskResolving.search';
import TaskResolvingSearchForm from './taskresolving/TaskResolving.searchform';
import TaskResolvingCreateForm from './taskresolving/TaskResolving.createform';
import TaskResolvingTable from './taskresolving/TaskResolving.table';
import TaskResolvingEditTable from './taskresolving/TaskResolving.edittable';
import TaskResolvingEditDetail from './taskresolving/TaskResolving.editdetail';
import TaskResolvingService from './taskresolving/TaskResolving.service';
import TaskResolvingUpdateForm from './taskresolving/TaskResolving.updateform';
import TaskRewardBizApp from './taskreward/TaskReward.app';
import TaskRewardModel from './taskreward/TaskReward.model';
import TaskRewardDashboard from './taskreward/TaskReward.dashboard';
import TaskRewardConfirmationTable from './taskreward/TaskReward.confirmmationtable';
import TaskRewardSearch from './taskreward/TaskReward.search';
import TaskRewardSearchForm from './taskreward/TaskReward.searchform';
import TaskRewardCreateForm from './taskreward/TaskReward.createform';
import TaskRewardTable from './taskreward/TaskReward.table';
import TaskRewardEditTable from './taskreward/TaskReward.edittable';
import TaskRewardEditDetail from './taskreward/TaskReward.editdetail';
import TaskRewardService from './taskreward/TaskReward.service';
import TaskRewardUpdateForm from './taskreward/TaskReward.updateform';
import TaskLikeBizApp from './tasklike/TaskLike.app';
import TaskLikeModel from './tasklike/TaskLike.model';
import TaskLikeDashboard from './tasklike/TaskLike.dashboard';
import TaskLikeConfirmationTable from './tasklike/TaskLike.confirmmationtable';
import TaskLikeSearch from './tasklike/TaskLike.search';
import TaskLikeSearchForm from './tasklike/TaskLike.searchform';
import TaskLikeCreateForm from './tasklike/TaskLike.createform';
import TaskLikeTable from './tasklike/TaskLike.table';
import TaskLikeEditTable from './tasklike/TaskLike.edittable';
import TaskLikeEditDetail from './tasklike/TaskLike.editdetail';
import TaskLikeService from './tasklike/TaskLike.service';
import TaskLikeUpdateForm from './tasklike/TaskLike.updateform';
import TaskReplyBizApp from './taskreply/TaskReply.app';
import TaskReplyModel from './taskreply/TaskReply.model';
import TaskReplyDashboard from './taskreply/TaskReply.dashboard';
import TaskReplyConfirmationTable from './taskreply/TaskReply.confirmmationtable';
import TaskReplySearch from './taskreply/TaskReply.search';
import TaskReplySearchForm from './taskreply/TaskReply.searchform';
import TaskReplyCreateForm from './taskreply/TaskReply.createform';
import TaskReplyTable from './taskreply/TaskReply.table';
import TaskReplyEditTable from './taskreply/TaskReply.edittable';
import TaskReplyEditDetail from './taskreply/TaskReply.editdetail';
import TaskReplyService from './taskreply/TaskReply.service';
import TaskReplyUpdateForm from './taskreply/TaskReply.updateform';
import TaskBestAnswerSettingBizApp from './taskbestanswersetting/TaskBestAnswerSetting.app';
import TaskBestAnswerSettingModel from './taskbestanswersetting/TaskBestAnswerSetting.model';
import TaskBestAnswerSettingDashboard from './taskbestanswersetting/TaskBestAnswerSetting.dashboard';
import TaskBestAnswerSettingConfirmationTable from './taskbestanswersetting/TaskBestAnswerSetting.confirmmationtable';
import TaskBestAnswerSettingSearch from './taskbestanswersetting/TaskBestAnswerSetting.search';
import TaskBestAnswerSettingSearchForm from './taskbestanswersetting/TaskBestAnswerSetting.searchform';
import TaskBestAnswerSettingCreateForm from './taskbestanswersetting/TaskBestAnswerSetting.createform';
import TaskBestAnswerSettingTable from './taskbestanswersetting/TaskBestAnswerSetting.table';
import TaskBestAnswerSettingEditTable from './taskbestanswersetting/TaskBestAnswerSetting.edittable';
import TaskBestAnswerSettingEditDetail from './taskbestanswersetting/TaskBestAnswerSetting.editdetail';
import TaskBestAnswerSettingService from './taskbestanswersetting/TaskBestAnswerSetting.service';
import TaskBestAnswerSettingUpdateForm from './taskbestanswersetting/TaskBestAnswerSetting.updateform';
import TaskReplyLikeBizApp from './taskreplylike/TaskReplyLike.app';
import TaskReplyLikeModel from './taskreplylike/TaskReplyLike.model';
import TaskReplyLikeDashboard from './taskreplylike/TaskReplyLike.dashboard';
import TaskReplyLikeConfirmationTable from './taskreplylike/TaskReplyLike.confirmmationtable';
import TaskReplyLikeSearch from './taskreplylike/TaskReplyLike.search';
import TaskReplyLikeSearchForm from './taskreplylike/TaskReplyLike.searchform';
import TaskReplyLikeCreateForm from './taskreplylike/TaskReplyLike.createform';
import TaskReplyLikeTable from './taskreplylike/TaskReplyLike.table';
import TaskReplyLikeEditTable from './taskreplylike/TaskReplyLike.edittable';
import TaskReplyLikeEditDetail from './taskreplylike/TaskReplyLike.editdetail';
import TaskReplyLikeService from './taskreplylike/TaskReplyLike.service';
import TaskReplyLikeUpdateForm from './taskreplylike/TaskReplyLike.updateform';
import GroupPageBizApp from './grouppage/GroupPage.app';
import GroupPageModel from './grouppage/GroupPage.model';
import GroupPageDashboard from './grouppage/GroupPage.dashboard';
import GroupPageConfirmationTable from './grouppage/GroupPage.confirmmationtable';
import GroupPageSearch from './grouppage/GroupPage.search';
import GroupPageSearchForm from './grouppage/GroupPage.searchform';
import GroupPageCreateForm from './grouppage/GroupPage.createform';
import GroupPageTable from './grouppage/GroupPage.table';
import GroupPageEditTable from './grouppage/GroupPage.edittable';
import GroupPageEditDetail from './grouppage/GroupPage.editdetail';
import GroupPageService from './grouppage/GroupPage.service';
import GroupPageUpdateForm from './grouppage/GroupPage.updateform';
import GroupFilterBizApp from './groupfilter/GroupFilter.app';
import GroupFilterModel from './groupfilter/GroupFilter.model';
import GroupFilterDashboard from './groupfilter/GroupFilter.dashboard';
import GroupFilterConfirmationTable from './groupfilter/GroupFilter.confirmmationtable';
import GroupFilterSearch from './groupfilter/GroupFilter.search';
import GroupFilterSearchForm from './groupfilter/GroupFilter.searchform';
import GroupFilterCreateForm from './groupfilter/GroupFilter.createform';
import GroupFilterTable from './groupfilter/GroupFilter.table';
import GroupFilterEditTable from './groupfilter/GroupFilter.edittable';
import GroupFilterEditDetail from './groupfilter/GroupFilter.editdetail';
import GroupFilterService from './groupfilter/GroupFilter.service';
import GroupFilterUpdateForm from './groupfilter/GroupFilter.updateform';
import ThreadBizApp from './thread/Thread.app';
import ThreadModel from './thread/Thread.model';
import ThreadDashboard from './thread/Thread.dashboard';
import ThreadConfirmationTable from './thread/Thread.confirmmationtable';
import ThreadSearch from './thread/Thread.search';
import ThreadSearchForm from './thread/Thread.searchform';
import ThreadCreateForm from './thread/Thread.createform';
import ThreadTable from './thread/Thread.table';
import ThreadEditTable from './thread/Thread.edittable';
import ThreadEditDetail from './thread/Thread.editdetail';
import ThreadService from './thread/Thread.service';
import ThreadUpdateForm from './thread/Thread.updateform';
import ThreadHidingBizApp from './threadhiding/ThreadHiding.app';
import ThreadHidingModel from './threadhiding/ThreadHiding.model';
import ThreadHidingDashboard from './threadhiding/ThreadHiding.dashboard';
import ThreadHidingConfirmationTable from './threadhiding/ThreadHiding.confirmmationtable';
import ThreadHidingSearch from './threadhiding/ThreadHiding.search';
import ThreadHidingSearchForm from './threadhiding/ThreadHiding.searchform';
import ThreadHidingCreateForm from './threadhiding/ThreadHiding.createform';
import ThreadHidingTable from './threadhiding/ThreadHiding.table';
import ThreadHidingEditTable from './threadhiding/ThreadHiding.edittable';
import ThreadHidingEditDetail from './threadhiding/ThreadHiding.editdetail';
import ThreadHidingService from './threadhiding/ThreadHiding.service';
import ThreadHidingUpdateForm from './threadhiding/ThreadHiding.updateform';
import ThreadReplyBizApp from './threadreply/ThreadReply.app';
import ThreadReplyModel from './threadreply/ThreadReply.model';
import ThreadReplyDashboard from './threadreply/ThreadReply.dashboard';
import ThreadReplyConfirmationTable from './threadreply/ThreadReply.confirmmationtable';
import ThreadReplySearch from './threadreply/ThreadReply.search';
import ThreadReplySearchForm from './threadreply/ThreadReply.searchform';
import ThreadReplyCreateForm from './threadreply/ThreadReply.createform';
import ThreadReplyTable from './threadreply/ThreadReply.table';
import ThreadReplyEditTable from './threadreply/ThreadReply.edittable';
import ThreadReplyEditDetail from './threadreply/ThreadReply.editdetail';
import ThreadReplyService from './threadreply/ThreadReply.service';
import ThreadReplyUpdateForm from './threadreply/ThreadReply.updateform';
import ThreadApprovalBizApp from './threadapproval/ThreadApproval.app';
import ThreadApprovalModel from './threadapproval/ThreadApproval.model';
import ThreadApprovalDashboard from './threadapproval/ThreadApproval.dashboard';
import ThreadApprovalConfirmationTable from './threadapproval/ThreadApproval.confirmmationtable';
import ThreadApprovalSearch from './threadapproval/ThreadApproval.search';
import ThreadApprovalSearchForm from './threadapproval/ThreadApproval.searchform';
import ThreadApprovalCreateForm from './threadapproval/ThreadApproval.createform';
import ThreadApprovalTable from './threadapproval/ThreadApproval.table';
import ThreadApprovalEditTable from './threadapproval/ThreadApproval.edittable';
import ThreadApprovalEditDetail from './threadapproval/ThreadApproval.editdetail';
import ThreadApprovalService from './threadapproval/ThreadApproval.service';
import ThreadApprovalUpdateForm from './threadapproval/ThreadApproval.updateform';
import ThreadCompletionBizApp from './threadcompletion/ThreadCompletion.app';
import ThreadCompletionModel from './threadcompletion/ThreadCompletion.model';
import ThreadCompletionDashboard from './threadcompletion/ThreadCompletion.dashboard';
import ThreadCompletionConfirmationTable from './threadcompletion/ThreadCompletion.confirmmationtable';
import ThreadCompletionSearch from './threadcompletion/ThreadCompletion.search';
import ThreadCompletionSearchForm from './threadcompletion/ThreadCompletion.searchform';
import ThreadCompletionCreateForm from './threadcompletion/ThreadCompletion.createform';
import ThreadCompletionTable from './threadcompletion/ThreadCompletion.table';
import ThreadCompletionEditTable from './threadcompletion/ThreadCompletion.edittable';
import ThreadCompletionEditDetail from './threadcompletion/ThreadCompletion.editdetail';
import ThreadCompletionService from './threadcompletion/ThreadCompletion.service';
import ThreadCompletionUpdateForm from './threadcompletion/ThreadCompletion.updateform';
import ThreadCancelingBizApp from './threadcanceling/ThreadCanceling.app';
import ThreadCancelingModel from './threadcanceling/ThreadCanceling.model';
import ThreadCancelingDashboard from './threadcanceling/ThreadCanceling.dashboard';
import ThreadCancelingConfirmationTable from './threadcanceling/ThreadCanceling.confirmmationtable';
import ThreadCancelingSearch from './threadcanceling/ThreadCanceling.search';
import ThreadCancelingSearchForm from './threadcanceling/ThreadCanceling.searchform';
import ThreadCancelingCreateForm from './threadcanceling/ThreadCanceling.createform';
import ThreadCancelingTable from './threadcanceling/ThreadCanceling.table';
import ThreadCancelingEditTable from './threadcanceling/ThreadCanceling.edittable';
import ThreadCancelingEditDetail from './threadcanceling/ThreadCanceling.editdetail';
import ThreadCancelingService from './threadcanceling/ThreadCanceling.service';
import ThreadCancelingUpdateForm from './threadcanceling/ThreadCanceling.updateform';
import ThreadRegistrationBizApp from './threadregistration/ThreadRegistration.app';
import ThreadRegistrationModel from './threadregistration/ThreadRegistration.model';
import ThreadRegistrationDashboard from './threadregistration/ThreadRegistration.dashboard';
import ThreadRegistrationConfirmationTable from './threadregistration/ThreadRegistration.confirmmationtable';
import ThreadRegistrationSearch from './threadregistration/ThreadRegistration.search';
import ThreadRegistrationSearchForm from './threadregistration/ThreadRegistration.searchform';
import ThreadRegistrationCreateForm from './threadregistration/ThreadRegistration.createform';
import ThreadRegistrationTable from './threadregistration/ThreadRegistration.table';
import ThreadRegistrationEditTable from './threadregistration/ThreadRegistration.edittable';
import ThreadRegistrationEditDetail from './threadregistration/ThreadRegistration.editdetail';
import ThreadRegistrationService from './threadregistration/ThreadRegistration.service';
import ThreadRegistrationUpdateForm from './threadregistration/ThreadRegistration.updateform';
import ThreadLikeBizApp from './threadlike/ThreadLike.app';
import ThreadLikeModel from './threadlike/ThreadLike.model';
import ThreadLikeDashboard from './threadlike/ThreadLike.dashboard';
import ThreadLikeConfirmationTable from './threadlike/ThreadLike.confirmmationtable';
import ThreadLikeSearch from './threadlike/ThreadLike.search';
import ThreadLikeSearchForm from './threadlike/ThreadLike.searchform';
import ThreadLikeCreateForm from './threadlike/ThreadLike.createform';
import ThreadLikeTable from './threadlike/ThreadLike.table';
import ThreadLikeEditTable from './threadlike/ThreadLike.edittable';
import ThreadLikeEditDetail from './threadlike/ThreadLike.editdetail';
import ThreadLikeService from './threadlike/ThreadLike.service';
import ThreadLikeUpdateForm from './threadlike/ThreadLike.updateform';
import ThreadReplyLikeBizApp from './threadreplylike/ThreadReplyLike.app';
import ThreadReplyLikeModel from './threadreplylike/ThreadReplyLike.model';
import ThreadReplyLikeDashboard from './threadreplylike/ThreadReplyLike.dashboard';
import ThreadReplyLikeConfirmationTable from './threadreplylike/ThreadReplyLike.confirmmationtable';
import ThreadReplyLikeSearch from './threadreplylike/ThreadReplyLike.search';
import ThreadReplyLikeSearchForm from './threadreplylike/ThreadReplyLike.searchform';
import ThreadReplyLikeCreateForm from './threadreplylike/ThreadReplyLike.createform';
import ThreadReplyLikeTable from './threadreplylike/ThreadReplyLike.table';
import ThreadReplyLikeEditTable from './threadreplylike/ThreadReplyLike.edittable';
import ThreadReplyLikeEditDetail from './threadreplylike/ThreadReplyLike.editdetail';
import ThreadReplyLikeService from './threadreplylike/ThreadReplyLike.service';
import ThreadReplyLikeUpdateForm from './threadreplylike/ThreadReplyLike.updateform';
import FanBizApp from './fan/Fan.app';
import FanModel from './fan/Fan.model';
import FanDashboard from './fan/Fan.dashboard';
import FanConfirmationTable from './fan/Fan.confirmmationtable';
import FanSearch from './fan/Fan.search';
import FanSearchForm from './fan/Fan.searchform';
import FanCreateForm from './fan/Fan.createform';
import FanTable from './fan/Fan.table';
import FanEditTable from './fan/Fan.edittable';
import FanEditDetail from './fan/Fan.editdetail';
import FanService from './fan/Fan.service';
import FanUpdateForm from './fan/Fan.updateform';
import FollowBizApp from './follow/Follow.app';
import FollowModel from './follow/Follow.model';
import FollowDashboard from './follow/Follow.dashboard';
import FollowConfirmationTable from './follow/Follow.confirmmationtable';
import FollowSearch from './follow/Follow.search';
import FollowSearchForm from './follow/Follow.searchform';
import FollowCreateForm from './follow/Follow.createform';
import FollowTable from './follow/Follow.table';
import FollowEditTable from './follow/Follow.edittable';
import FollowEditDetail from './follow/Follow.editdetail';
import FollowService from './follow/Follow.service';
import FollowUpdateForm from './follow/Follow.updateform';
import BonusPointBizApp from './bonuspoint/BonusPoint.app';
import BonusPointModel from './bonuspoint/BonusPoint.model';
import BonusPointDashboard from './bonuspoint/BonusPoint.dashboard';
import BonusPointConfirmationTable from './bonuspoint/BonusPoint.confirmmationtable';
import BonusPointSearch from './bonuspoint/BonusPoint.search';
import BonusPointSearchForm from './bonuspoint/BonusPoint.searchform';
import BonusPointCreateForm from './bonuspoint/BonusPoint.createform';
import BonusPointTable from './bonuspoint/BonusPoint.table';
import BonusPointEditTable from './bonuspoint/BonusPoint.edittable';
import BonusPointEditDetail from './bonuspoint/BonusPoint.editdetail';
import BonusPointService from './bonuspoint/BonusPoint.service';
import BonusPointUpdateForm from './bonuspoint/BonusPoint.updateform';
import ExperiencePointBizApp from './experiencepoint/ExperiencePoint.app';
import ExperiencePointModel from './experiencepoint/ExperiencePoint.model';
import ExperiencePointDashboard from './experiencepoint/ExperiencePoint.dashboard';
import ExperiencePointConfirmationTable from './experiencepoint/ExperiencePoint.confirmmationtable';
import ExperiencePointSearch from './experiencepoint/ExperiencePoint.search';
import ExperiencePointSearchForm from './experiencepoint/ExperiencePoint.searchform';
import ExperiencePointCreateForm from './experiencepoint/ExperiencePoint.createform';
import ExperiencePointTable from './experiencepoint/ExperiencePoint.table';
import ExperiencePointEditTable from './experiencepoint/ExperiencePoint.edittable';
import ExperiencePointEditDetail from './experiencepoint/ExperiencePoint.editdetail';
import ExperiencePointService from './experiencepoint/ExperiencePoint.service';
import ExperiencePointUpdateForm from './experiencepoint/ExperiencePoint.updateform';
import UserDomainBizApp from './userdomain/UserDomain.app';
import UserDomainModel from './userdomain/UserDomain.model';
import UserDomainDashboard from './userdomain/UserDomain.dashboard';
import UserDomainConfirmationTable from './userdomain/UserDomain.confirmmationtable';
import UserDomainSearch from './userdomain/UserDomain.search';
import UserDomainSearchForm from './userdomain/UserDomain.searchform';
import UserDomainCreateForm from './userdomain/UserDomain.createform';
import UserDomainTable from './userdomain/UserDomain.table';
import UserDomainEditTable from './userdomain/UserDomain.edittable';
import UserDomainEditDetail from './userdomain/UserDomain.editdetail';
import UserDomainService from './userdomain/UserDomain.service';
import UserDomainUpdateForm from './userdomain/UserDomain.updateform';
import SecUserBizApp from './secuser/SecUser.app';
import SecUserModel from './secuser/SecUser.model';
import SecUserDashboard from './secuser/SecUser.dashboard';
import SecUserConfirmationTable from './secuser/SecUser.confirmmationtable';
import SecUserSearch from './secuser/SecUser.search';
import SecUserSearchForm from './secuser/SecUser.searchform';
import SecUserCreateForm from './secuser/SecUser.createform';
import SecUserTable from './secuser/SecUser.table';
import SecUserEditTable from './secuser/SecUser.edittable';
import SecUserEditDetail from './secuser/SecUser.editdetail';
import SecUserService from './secuser/SecUser.service';
import SecUserUpdateForm from './secuser/SecUser.updateform';
import SecUserBlockingBizApp from './secuserblocking/SecUserBlocking.app';
import SecUserBlockingModel from './secuserblocking/SecUserBlocking.model';
import SecUserBlockingDashboard from './secuserblocking/SecUserBlocking.dashboard';
import SecUserBlockingConfirmationTable from './secuserblocking/SecUserBlocking.confirmmationtable';
import SecUserBlockingSearch from './secuserblocking/SecUserBlocking.search';
import SecUserBlockingSearchForm from './secuserblocking/SecUserBlocking.searchform';
import SecUserBlockingCreateForm from './secuserblocking/SecUserBlocking.createform';
import SecUserBlockingTable from './secuserblocking/SecUserBlocking.table';
import SecUserBlockingEditTable from './secuserblocking/SecUserBlocking.edittable';
import SecUserBlockingEditDetail from './secuserblocking/SecUserBlocking.editdetail';
import SecUserBlockingService from './secuserblocking/SecUserBlocking.service';
import SecUserBlockingUpdateForm from './secuserblocking/SecUserBlocking.updateform';
import UserAppBizApp from './userapp/UserApp.app';
import UserAppModel from './userapp/UserApp.model';
import UserAppDashboard from './userapp/UserApp.dashboard';
import UserAppConfirmationTable from './userapp/UserApp.confirmmationtable';
import UserAppSearch from './userapp/UserApp.search';
import UserAppSearchForm from './userapp/UserApp.searchform';
import UserAppCreateForm from './userapp/UserApp.createform';
import UserAppTable from './userapp/UserApp.table';
import UserAppEditTable from './userapp/UserApp.edittable';
import UserAppEditDetail from './userapp/UserApp.editdetail';
import UserAppService from './userapp/UserApp.service';
import UserAppUpdateForm from './userapp/UserApp.updateform';
import ObjectAccessBizApp from './objectaccess/ObjectAccess.app';
import ObjectAccessModel from './objectaccess/ObjectAccess.model';
import ObjectAccessDashboard from './objectaccess/ObjectAccess.dashboard';
import ObjectAccessConfirmationTable from './objectaccess/ObjectAccess.confirmmationtable';
import ObjectAccessSearch from './objectaccess/ObjectAccess.search';
import ObjectAccessSearchForm from './objectaccess/ObjectAccess.searchform';
import ObjectAccessCreateForm from './objectaccess/ObjectAccess.createform';
import ObjectAccessTable from './objectaccess/ObjectAccess.table';
import ObjectAccessEditTable from './objectaccess/ObjectAccess.edittable';
import ObjectAccessEditDetail from './objectaccess/ObjectAccess.editdetail';
import ObjectAccessService from './objectaccess/ObjectAccess.service';
import ObjectAccessUpdateForm from './objectaccess/ObjectAccess.updateform';
import LoginHistoryBizApp from './loginhistory/LoginHistory.app';
import LoginHistoryModel from './loginhistory/LoginHistory.model';
import LoginHistoryDashboard from './loginhistory/LoginHistory.dashboard';
import LoginHistoryConfirmationTable from './loginhistory/LoginHistory.confirmmationtable';
import LoginHistorySearch from './loginhistory/LoginHistory.search';
import LoginHistorySearchForm from './loginhistory/LoginHistory.searchform';
import LoginHistoryCreateForm from './loginhistory/LoginHistory.createform';
import LoginHistoryTable from './loginhistory/LoginHistory.table';
import LoginHistoryEditTable from './loginhistory/LoginHistory.edittable';
import LoginHistoryEditDetail from './loginhistory/LoginHistory.editdetail';
import LoginHistoryService from './loginhistory/LoginHistory.service';
import LoginHistoryUpdateForm from './loginhistory/LoginHistory.updateform';


const OOTBComponents={
    CommunityBizApp,
    CommunityModel,
    CommunityDashboard,
    CommunityConfirmationTable,
    CommunitySearch,
    CommunitySearchForm,
    CommunityCreateForm,
    CommunityTable,
    CommunityEditTable,
    CommunityEditDetail,
    CommunityService,
    CommunityUpdateForm,
    InvitationCodeBizApp,
    InvitationCodeModel,
    InvitationCodeDashboard,
    InvitationCodeConfirmationTable,
    InvitationCodeSearch,
    InvitationCodeSearchForm,
    InvitationCodeCreateForm,
    InvitationCodeTable,
    InvitationCodeEditTable,
    InvitationCodeEditDetail,
    InvitationCodeService,
    InvitationCodeUpdateForm,
    HomePageBizApp,
    HomePageModel,
    HomePageDashboard,
    HomePageConfirmationTable,
    HomePageSearch,
    HomePageSearchForm,
    HomePageCreateForm,
    HomePageTable,
    HomePageEditTable,
    HomePageEditDetail,
    HomePageService,
    HomePageUpdateForm,
    SlideBizApp,
    SlideModel,
    SlideDashboard,
    SlideConfirmationTable,
    SlideSearch,
    SlideSearchForm,
    SlideCreateForm,
    SlideTable,
    SlideEditTable,
    SlideEditDetail,
    SlideService,
    SlideUpdateForm,
    EncyclopediaItemBizApp,
    EncyclopediaItemModel,
    EncyclopediaItemDashboard,
    EncyclopediaItemConfirmationTable,
    EncyclopediaItemSearch,
    EncyclopediaItemSearchForm,
    EncyclopediaItemCreateForm,
    EncyclopediaItemTable,
    EncyclopediaItemEditTable,
    EncyclopediaItemEditDetail,
    EncyclopediaItemService,
    EncyclopediaItemUpdateForm,
    TaskPageBizApp,
    TaskPageModel,
    TaskPageDashboard,
    TaskPageConfirmationTable,
    TaskPageSearch,
    TaskPageSearchForm,
    TaskPageCreateForm,
    TaskPageTable,
    TaskPageEditTable,
    TaskPageEditDetail,
    TaskPageService,
    TaskPageUpdateForm,
    TaskFilterBizApp,
    TaskFilterModel,
    TaskFilterDashboard,
    TaskFilterConfirmationTable,
    TaskFilterSearch,
    TaskFilterSearchForm,
    TaskFilterCreateForm,
    TaskFilterTable,
    TaskFilterEditTable,
    TaskFilterEditDetail,
    TaskFilterService,
    TaskFilterUpdateForm,
    CommunityUserBizApp,
    CommunityUserModel,
    CommunityUserDashboard,
    CommunityUserConfirmationTable,
    CommunityUserSearch,
    CommunityUserSearchForm,
    CommunityUserCreateForm,
    CommunityUserTable,
    CommunityUserEditTable,
    CommunityUserEditDetail,
    CommunityUserService,
    CommunityUserUpdateForm,
    PatientInfoBizApp,
    PatientInfoModel,
    PatientInfoDashboard,
    PatientInfoConfirmationTable,
    PatientInfoSearch,
    PatientInfoSearchForm,
    PatientInfoCreateForm,
    PatientInfoTable,
    PatientInfoEditTable,
    PatientInfoEditDetail,
    PatientInfoService,
    PatientInfoUpdateForm,
    UserSkillBizApp,
    UserSkillModel,
    UserSkillDashboard,
    UserSkillConfirmationTable,
    UserSkillSearch,
    UserSkillSearchForm,
    UserSkillCreateForm,
    UserSkillTable,
    UserSkillEditTable,
    UserSkillEditDetail,
    UserSkillService,
    UserSkillUpdateForm,
    MessageFilterBizApp,
    MessageFilterModel,
    MessageFilterDashboard,
    MessageFilterConfirmationTable,
    MessageFilterSearch,
    MessageFilterSearchForm,
    MessageFilterCreateForm,
    MessageFilterTable,
    MessageFilterEditTable,
    MessageFilterEditDetail,
    MessageFilterService,
    MessageFilterUpdateForm,
    UserMessageBizApp,
    UserMessageModel,
    UserMessageDashboard,
    UserMessageConfirmationTable,
    UserMessageSearch,
    UserMessageSearchForm,
    UserMessageCreateForm,
    UserMessageTable,
    UserMessageEditTable,
    UserMessageEditDetail,
    UserMessageService,
    UserMessageUpdateForm,
    TaskBizApp,
    TaskModel,
    TaskDashboard,
    TaskConfirmationTable,
    TaskSearch,
    TaskSearchForm,
    TaskCreateForm,
    TaskTable,
    TaskEditTable,
    TaskEditDetail,
    TaskService,
    TaskUpdateForm,
    TaskAssigmentBizApp,
    TaskAssigmentModel,
    TaskAssigmentDashboard,
    TaskAssigmentConfirmationTable,
    TaskAssigmentSearch,
    TaskAssigmentSearchForm,
    TaskAssigmentCreateForm,
    TaskAssigmentTable,
    TaskAssigmentEditTable,
    TaskAssigmentEditDetail,
    TaskAssigmentService,
    TaskAssigmentUpdateForm,
    TaskHidingBizApp,
    TaskHidingModel,
    TaskHidingDashboard,
    TaskHidingConfirmationTable,
    TaskHidingSearch,
    TaskHidingSearchForm,
    TaskHidingCreateForm,
    TaskHidingTable,
    TaskHidingEditTable,
    TaskHidingEditDetail,
    TaskHidingService,
    TaskHidingUpdateForm,
    TaskResolvingBizApp,
    TaskResolvingModel,
    TaskResolvingDashboard,
    TaskResolvingConfirmationTable,
    TaskResolvingSearch,
    TaskResolvingSearchForm,
    TaskResolvingCreateForm,
    TaskResolvingTable,
    TaskResolvingEditTable,
    TaskResolvingEditDetail,
    TaskResolvingService,
    TaskResolvingUpdateForm,
    TaskRewardBizApp,
    TaskRewardModel,
    TaskRewardDashboard,
    TaskRewardConfirmationTable,
    TaskRewardSearch,
    TaskRewardSearchForm,
    TaskRewardCreateForm,
    TaskRewardTable,
    TaskRewardEditTable,
    TaskRewardEditDetail,
    TaskRewardService,
    TaskRewardUpdateForm,
    TaskLikeBizApp,
    TaskLikeModel,
    TaskLikeDashboard,
    TaskLikeConfirmationTable,
    TaskLikeSearch,
    TaskLikeSearchForm,
    TaskLikeCreateForm,
    TaskLikeTable,
    TaskLikeEditTable,
    TaskLikeEditDetail,
    TaskLikeService,
    TaskLikeUpdateForm,
    TaskReplyBizApp,
    TaskReplyModel,
    TaskReplyDashboard,
    TaskReplyConfirmationTable,
    TaskReplySearch,
    TaskReplySearchForm,
    TaskReplyCreateForm,
    TaskReplyTable,
    TaskReplyEditTable,
    TaskReplyEditDetail,
    TaskReplyService,
    TaskReplyUpdateForm,
    TaskBestAnswerSettingBizApp,
    TaskBestAnswerSettingModel,
    TaskBestAnswerSettingDashboard,
    TaskBestAnswerSettingConfirmationTable,
    TaskBestAnswerSettingSearch,
    TaskBestAnswerSettingSearchForm,
    TaskBestAnswerSettingCreateForm,
    TaskBestAnswerSettingTable,
    TaskBestAnswerSettingEditTable,
    TaskBestAnswerSettingEditDetail,
    TaskBestAnswerSettingService,
    TaskBestAnswerSettingUpdateForm,
    TaskReplyLikeBizApp,
    TaskReplyLikeModel,
    TaskReplyLikeDashboard,
    TaskReplyLikeConfirmationTable,
    TaskReplyLikeSearch,
    TaskReplyLikeSearchForm,
    TaskReplyLikeCreateForm,
    TaskReplyLikeTable,
    TaskReplyLikeEditTable,
    TaskReplyLikeEditDetail,
    TaskReplyLikeService,
    TaskReplyLikeUpdateForm,
    GroupPageBizApp,
    GroupPageModel,
    GroupPageDashboard,
    GroupPageConfirmationTable,
    GroupPageSearch,
    GroupPageSearchForm,
    GroupPageCreateForm,
    GroupPageTable,
    GroupPageEditTable,
    GroupPageEditDetail,
    GroupPageService,
    GroupPageUpdateForm,
    GroupFilterBizApp,
    GroupFilterModel,
    GroupFilterDashboard,
    GroupFilterConfirmationTable,
    GroupFilterSearch,
    GroupFilterSearchForm,
    GroupFilterCreateForm,
    GroupFilterTable,
    GroupFilterEditTable,
    GroupFilterEditDetail,
    GroupFilterService,
    GroupFilterUpdateForm,
    ThreadBizApp,
    ThreadModel,
    ThreadDashboard,
    ThreadConfirmationTable,
    ThreadSearch,
    ThreadSearchForm,
    ThreadCreateForm,
    ThreadTable,
    ThreadEditTable,
    ThreadEditDetail,
    ThreadService,
    ThreadUpdateForm,
    ThreadHidingBizApp,
    ThreadHidingModel,
    ThreadHidingDashboard,
    ThreadHidingConfirmationTable,
    ThreadHidingSearch,
    ThreadHidingSearchForm,
    ThreadHidingCreateForm,
    ThreadHidingTable,
    ThreadHidingEditTable,
    ThreadHidingEditDetail,
    ThreadHidingService,
    ThreadHidingUpdateForm,
    ThreadReplyBizApp,
    ThreadReplyModel,
    ThreadReplyDashboard,
    ThreadReplyConfirmationTable,
    ThreadReplySearch,
    ThreadReplySearchForm,
    ThreadReplyCreateForm,
    ThreadReplyTable,
    ThreadReplyEditTable,
    ThreadReplyEditDetail,
    ThreadReplyService,
    ThreadReplyUpdateForm,
    ThreadApprovalBizApp,
    ThreadApprovalModel,
    ThreadApprovalDashboard,
    ThreadApprovalConfirmationTable,
    ThreadApprovalSearch,
    ThreadApprovalSearchForm,
    ThreadApprovalCreateForm,
    ThreadApprovalTable,
    ThreadApprovalEditTable,
    ThreadApprovalEditDetail,
    ThreadApprovalService,
    ThreadApprovalUpdateForm,
    ThreadCompletionBizApp,
    ThreadCompletionModel,
    ThreadCompletionDashboard,
    ThreadCompletionConfirmationTable,
    ThreadCompletionSearch,
    ThreadCompletionSearchForm,
    ThreadCompletionCreateForm,
    ThreadCompletionTable,
    ThreadCompletionEditTable,
    ThreadCompletionEditDetail,
    ThreadCompletionService,
    ThreadCompletionUpdateForm,
    ThreadCancelingBizApp,
    ThreadCancelingModel,
    ThreadCancelingDashboard,
    ThreadCancelingConfirmationTable,
    ThreadCancelingSearch,
    ThreadCancelingSearchForm,
    ThreadCancelingCreateForm,
    ThreadCancelingTable,
    ThreadCancelingEditTable,
    ThreadCancelingEditDetail,
    ThreadCancelingService,
    ThreadCancelingUpdateForm,
    ThreadRegistrationBizApp,
    ThreadRegistrationModel,
    ThreadRegistrationDashboard,
    ThreadRegistrationConfirmationTable,
    ThreadRegistrationSearch,
    ThreadRegistrationSearchForm,
    ThreadRegistrationCreateForm,
    ThreadRegistrationTable,
    ThreadRegistrationEditTable,
    ThreadRegistrationEditDetail,
    ThreadRegistrationService,
    ThreadRegistrationUpdateForm,
    ThreadLikeBizApp,
    ThreadLikeModel,
    ThreadLikeDashboard,
    ThreadLikeConfirmationTable,
    ThreadLikeSearch,
    ThreadLikeSearchForm,
    ThreadLikeCreateForm,
    ThreadLikeTable,
    ThreadLikeEditTable,
    ThreadLikeEditDetail,
    ThreadLikeService,
    ThreadLikeUpdateForm,
    ThreadReplyLikeBizApp,
    ThreadReplyLikeModel,
    ThreadReplyLikeDashboard,
    ThreadReplyLikeConfirmationTable,
    ThreadReplyLikeSearch,
    ThreadReplyLikeSearchForm,
    ThreadReplyLikeCreateForm,
    ThreadReplyLikeTable,
    ThreadReplyLikeEditTable,
    ThreadReplyLikeEditDetail,
    ThreadReplyLikeService,
    ThreadReplyLikeUpdateForm,
    FanBizApp,
    FanModel,
    FanDashboard,
    FanConfirmationTable,
    FanSearch,
    FanSearchForm,
    FanCreateForm,
    FanTable,
    FanEditTable,
    FanEditDetail,
    FanService,
    FanUpdateForm,
    FollowBizApp,
    FollowModel,
    FollowDashboard,
    FollowConfirmationTable,
    FollowSearch,
    FollowSearchForm,
    FollowCreateForm,
    FollowTable,
    FollowEditTable,
    FollowEditDetail,
    FollowService,
    FollowUpdateForm,
    BonusPointBizApp,
    BonusPointModel,
    BonusPointDashboard,
    BonusPointConfirmationTable,
    BonusPointSearch,
    BonusPointSearchForm,
    BonusPointCreateForm,
    BonusPointTable,
    BonusPointEditTable,
    BonusPointEditDetail,
    BonusPointService,
    BonusPointUpdateForm,
    ExperiencePointBizApp,
    ExperiencePointModel,
    ExperiencePointDashboard,
    ExperiencePointConfirmationTable,
    ExperiencePointSearch,
    ExperiencePointSearchForm,
    ExperiencePointCreateForm,
    ExperiencePointTable,
    ExperiencePointEditTable,
    ExperiencePointEditDetail,
    ExperiencePointService,
    ExperiencePointUpdateForm,
    UserDomainBizApp,
    UserDomainModel,
    UserDomainDashboard,
    UserDomainConfirmationTable,
    UserDomainSearch,
    UserDomainSearchForm,
    UserDomainCreateForm,
    UserDomainTable,
    UserDomainEditTable,
    UserDomainEditDetail,
    UserDomainService,
    UserDomainUpdateForm,
    SecUserBizApp,
    SecUserModel,
    SecUserDashboard,
    SecUserConfirmationTable,
    SecUserSearch,
    SecUserSearchForm,
    SecUserCreateForm,
    SecUserTable,
    SecUserEditTable,
    SecUserEditDetail,
    SecUserService,
    SecUserUpdateForm,
    SecUserBlockingBizApp,
    SecUserBlockingModel,
    SecUserBlockingDashboard,
    SecUserBlockingConfirmationTable,
    SecUserBlockingSearch,
    SecUserBlockingSearchForm,
    SecUserBlockingCreateForm,
    SecUserBlockingTable,
    SecUserBlockingEditTable,
    SecUserBlockingEditDetail,
    SecUserBlockingService,
    SecUserBlockingUpdateForm,
    UserAppBizApp,
    UserAppModel,
    UserAppDashboard,
    UserAppConfirmationTable,
    UserAppSearch,
    UserAppSearchForm,
    UserAppCreateForm,
    UserAppTable,
    UserAppEditTable,
    UserAppEditDetail,
    UserAppService,
    UserAppUpdateForm,
    ObjectAccessBizApp,
    ObjectAccessModel,
    ObjectAccessDashboard,
    ObjectAccessConfirmationTable,
    ObjectAccessSearch,
    ObjectAccessSearchForm,
    ObjectAccessCreateForm,
    ObjectAccessTable,
    ObjectAccessEditTable,
    ObjectAccessEditDetail,
    ObjectAccessService,
    ObjectAccessUpdateForm,
    LoginHistoryBizApp,
    LoginHistoryModel,
    LoginHistoryDashboard,
    LoginHistoryConfirmationTable,
    LoginHistorySearch,
    LoginHistorySearchForm,
    LoginHistoryCreateForm,
    LoginHistoryTable,
    LoginHistoryEditTable,
    LoginHistoryEditDetail,
    LoginHistoryService,
    LoginHistoryUpdateForm,

};


console.log("code search: ", InvitationCodeSearch);

export default OOTBComponents;