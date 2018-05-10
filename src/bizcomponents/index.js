



import CarInspectionPlatformBase from './carinspectionplatform/CarInspectionPlatform.base';
import CarInspectionPlatformBizApp from './carinspectionplatform/CarInspectionPlatform.app';
import CarInspectionPlatformModel from './carinspectionplatform/CarInspectionPlatform.model';
import CarInspectionPlatformDashboard from './carinspectionplatform/CarInspectionPlatform.dashboard';
import CarInspectionPlatformConfirmationTable from './carinspectionplatform/CarInspectionPlatform.confirmmationtable';
import CarInspectionPlatformSearch from './carinspectionplatform/CarInspectionPlatform.search';
import CarInspectionPlatformSearchForm from './carinspectionplatform/CarInspectionPlatform.searchform';
import CarInspectionPlatformCreateForm from './carinspectionplatform/CarInspectionPlatform.createform';
import CarInspectionPlatformTable from './carinspectionplatform/CarInspectionPlatform.table';
import CarInspectionPlatformEditTable from './carinspectionplatform/CarInspectionPlatform.edittable';
import CarInspectionPlatformEditDetail from './carinspectionplatform/CarInspectionPlatform.editdetail';
import CarInspectionPlatformViewTable from './carinspectionplatform/CarInspectionPlatform.viewtable';
import CarInspectionPlatformViewDetail from './carinspectionplatform/CarInspectionPlatform.viewdetail';
import CarInspectionPlatformService from './carinspectionplatform/CarInspectionPlatform.service';
import CarInspectionPlatformUpdateForm from './carinspectionplatform/CarInspectionPlatform.updateform';
import ProvinceBase from './province/Province.base';
import ProvinceBizApp from './province/Province.app';
import ProvinceModel from './province/Province.model';
import ProvinceDashboard from './province/Province.dashboard';
import ProvinceConfirmationTable from './province/Province.confirmmationtable';
import ProvinceSearch from './province/Province.search';
import ProvinceSearchForm from './province/Province.searchform';
import ProvinceCreateForm from './province/Province.createform';
import ProvinceTable from './province/Province.table';
import ProvinceEditTable from './province/Province.edittable';
import ProvinceEditDetail from './province/Province.editdetail';
import ProvinceViewTable from './province/Province.viewtable';
import ProvinceViewDetail from './province/Province.viewdetail';
import ProvinceService from './province/Province.service';
import ProvinceUpdateForm from './province/Province.updateform';




const menuLibrary = [];

menuLibrary['carInspectionPlatform'] = CarInspectionPlatformBase.menuData
menuLibrary['province'] = ProvinceBase.menuData


const menuDataOf=(type)=>{
	
	const menu = menuLibrary[type]
	
	if(menu){
		return menu;
	}
	console.error(`Not able to find corresponding menu for `);

	return null;

}



const OOTBComponents={
    CarInspectionPlatformBase,
    CarInspectionPlatformBizApp,
    CarInspectionPlatformModel,
    CarInspectionPlatformDashboard,
    CarInspectionPlatformConfirmationTable,
    CarInspectionPlatformSearch,
    CarInspectionPlatformSearchForm,
    CarInspectionPlatformCreateForm,
    CarInspectionPlatformTable,
    CarInspectionPlatformEditTable,
    CarInspectionPlatformEditDetail,
    CarInspectionPlatformViewTable,
    CarInspectionPlatformViewDetail,
    CarInspectionPlatformService,
    CarInspectionPlatformUpdateForm,
    ProvinceBase,
    ProvinceBizApp,
    ProvinceModel,
    ProvinceDashboard,
    ProvinceConfirmationTable,
    ProvinceSearch,
    ProvinceSearchForm,
    ProvinceCreateForm,
    ProvinceTable,
    ProvinceEditTable,
    ProvinceEditDetail,
    ProvinceViewTable,
    ProvinceViewDetail,
    ProvinceService,
    ProvinceUpdateForm,
    menuDataOf
};
       


export default OOTBComponents;









