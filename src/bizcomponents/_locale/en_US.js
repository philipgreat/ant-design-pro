const messages = {
  message: 'Message',
  carInspectionPlatform: 'Car Inspection Platform',
  'carInspectionPlatform.id': 'Id',
  'carInspectionPlatform.name': 'Name',
  'carInspectionPlatform.description': 'Description',
  'carInspectionPlatform.version': 'Version',
  'carInspectionPlatform.addProvince': 'Add Province',
  'carInspectionPlatform.removeProvince': 'Remove Province',
  'carInspectionPlatform.updateProvince': 'Update Province',
  'carInspectionPlatform.copyProvinceFrom': 'Copy Province',
  'carInspectionPlatform.addAvailableProduct': 'Add Available Product',
  'carInspectionPlatform.removeAvailableProduct': 'Remove Available Product',
  'carInspectionPlatform.updateAvailableProduct': 'Update Available Product',
  'carInspectionPlatform.copyAvailableProductFrom': 'Copy Available Product',
  'carInspectionPlatform.addCustomer': 'Add Customer',
  'carInspectionPlatform.removeCustomer': 'Remove Customer',
  'carInspectionPlatform.updateCustomer': 'Update Customer',
  'carInspectionPlatform.copyCustomerFrom': 'Copy Customer',
  'carInspectionPlatform.addVehicleServiceCompany':
    'Add Vehicle Service Company',
  'carInspectionPlatform.removeVehicleServiceCompany':
    'Remove Vehicle Service Company',
  'carInspectionPlatform.updateVehicleServiceCompany':
    'Update Vehicle Service Company',
  'carInspectionPlatform.copyVehicleServiceCompanyFrom':
    'Copy Vehicle Service Company',
  'carInspectionPlatform.addVehicleInfo': 'Add Vehicle Info',
  'carInspectionPlatform.removeVehicleInfo': 'Remove Vehicle Info',
  'carInspectionPlatform.updateVehicleInfo': 'Update Vehicle Info',
  'carInspectionPlatform.copyVehicleInfoFrom': 'Copy Vehicle Info',
  'carInspectionPlatform.addVehicleInspectionOrder':
    'Add Vehicle Inspection Order',
  'carInspectionPlatform.removeVehicleInspectionOrder':
    'Remove Vehicle Inspection Order',
  'carInspectionPlatform.updateVehicleInspectionOrder':
    'Update Vehicle Inspection Order',
  'carInspectionPlatform.copyVehicleInspectionOrderFrom':
    'Copy Vehicle Inspection Order',

  identityCard: 'Identity Card',
  'identityCard.id': 'Id',
  'identityCard.holderName': 'Holder Name',
  'identityCard.cardNumber': 'Card Number',
  'identityCard.frontImage': 'Front Image',
  'identityCard.backImage': 'Back Image',
  'identityCard.expirationDate': 'Expiration Date',
  'identityCard.version': 'Version',

  vehiclePermit: 'Vehicle Permit',
  'vehiclePermit.id': 'Id',
  'vehiclePermit.holderName': 'Holder Name',
  'vehiclePermit.licenseNumber': 'License Number',
  'vehiclePermit.expirationDate': 'Expiration Date',
  'vehiclePermit.image1': 'Image 1',
  'vehiclePermit.image2': 'Image 2',
  'vehiclePermit.image3': 'Image 3',
  'vehiclePermit.image4': 'Image 4',
  'vehiclePermit.image5': 'Image 5',
  'vehiclePermit.version': 'Version',

  province: 'Province',
  'province.id': 'Id',
  'province.name': 'Name',
  'province.platform': 'Platform',
  'province.transferToplatform': 'Transfer to Another Car Inspection Platform',
  'province.version': 'Version',
  'province.addCity': 'Add City',
  'province.removeCity': 'Remove City',
  'province.updateCity': 'Update City',
  'province.copyCityFrom': 'Copy City',

  city: 'City',
  'city.id': 'Id',
  'city.name': 'Name',
  'city.province': 'Province',
  'city.transferToprovince': 'Transfer to Another Province',
  'city.version': 'Version',
  'city.addProductPrice': 'Add Product Price',
  'city.removeProductPrice': 'Remove Product Price',
  'city.updateProductPrice': 'Update Product Price',
  'city.copyProductPriceFrom': 'Copy Product Price',
  'city.addVehicleServiceCompany': 'Add Vehicle Service Company',
  'city.removeVehicleServiceCompany': 'Remove Vehicle Service Company',
  'city.updateVehicleServiceCompany': 'Update Vehicle Service Company',
  'city.copyVehicleServiceCompanyFrom': 'Copy Vehicle Service Company',
  'city.addInspectionStation': 'Add Inspection Station',
  'city.removeInspectionStation': 'Remove Inspection Station',
  'city.updateInspectionStation': 'Update Inspection Station',
  'city.copyInspectionStationFrom': 'Copy Inspection Station',
  'city.addVehicleInspectionOrder': 'Add Vehicle Inspection Order',
  'city.removeVehicleInspectionOrder': 'Remove Vehicle Inspection Order',
  'city.updateVehicleInspectionOrder': 'Update Vehicle Inspection Order',
  'city.copyVehicleInspectionOrderFrom': 'Copy Vehicle Inspection Order',

  availableProduct: 'Available Product',
  'availableProduct.id': 'Id',
  'availableProduct.productName': 'Product Name',
  'availableProduct.serviceKey': 'Service Key',
  'availableProduct.serviceDescription': 'Service Description',
  'availableProduct.platform': 'Platform',
  'availableProduct.transferToplatform':
    'Transfer to Another Car Inspection Platform',
  'availableProduct.version': 'Version',
  'availableProduct.addAvailableService': 'Add Available Service',
  'availableProduct.removeAvailableService': 'Remove Available Service',
  'availableProduct.updateAvailableService': 'Update Available Service',
  'availableProduct.copyAvailableServiceFrom': 'Copy Available Service',
  'availableProduct.addProductPrice': 'Add Product Price',
  'availableProduct.removeProductPrice': 'Remove Product Price',
  'availableProduct.updateProductPrice': 'Update Product Price',
  'availableProduct.copyProductPriceFrom': 'Copy Product Price',
  'availableProduct.addAvailableInsurance': 'Add Available Insurance',
  'availableProduct.removeAvailableInsurance': 'Remove Available Insurance',
  'availableProduct.updateAvailableInsurance': 'Update Available Insurance',
  'availableProduct.copyAvailableInsuranceFrom': 'Copy Available Insurance',
  'availableProduct.addAvailableHandOverItem': 'Add Available Hand Over Item',
  'availableProduct.removeAvailableHandOverItem':
    'Remove Available Hand Over Item',
  'availableProduct.updateAvailableHandOverItem':
    'Update Available Hand Over Item',
  'availableProduct.copyAvailableHandOverItemFrom':
    'Copy Available Hand Over Item',

  availableService: 'Available Service',
  'availableService.id': 'Id',
  'availableService.serviceName': 'Service Name',
  'availableService.serviceKey': 'Service Key',
  'availableService.serviceDescription': 'Service Description',
  'availableService.availableProduct': 'Available Product',
  'availableService.transferToavailableProduct':
    'Transfer to Another Available Product',
  'availableService.version': 'Version',
  'availableService.addVehicleRepairingAllowance':
    'Add Vehicle Repairing Allowance',
  'availableService.removeVehicleRepairingAllowance':
    'Remove Vehicle Repairing Allowance',
  'availableService.updateVehicleRepairingAllowance':
    'Update Vehicle Repairing Allowance',
  'availableService.copyVehicleRepairingAllowanceFrom':
    'Copy Vehicle Repairing Allowance',
  'availableService.addVehicleServiceCompanyBusinessScope':
    'Add Vehicle Service Company Business Scope',
  'availableService.removeVehicleServiceCompanyBusinessScope':
    'Remove Vehicle Service Company Business Scope',
  'availableService.updateVehicleServiceCompanyBusinessScope':
    'Update Vehicle Service Company Business Scope',
  'availableService.copyVehicleServiceCompanyBusinessScopeFrom':
    'Copy Vehicle Service Company Business Scope',
  'availableService.addCompanyEmployeeMessage': 'Add Company Employee Message',
  'availableService.removeCompanyEmployeeMessage':
    'Remove Company Employee Message',
  'availableService.updateCompanyEmployeeMessage':
    'Update Company Employee Message',
  'availableService.copyCompanyEmployeeMessageFrom':
    'Copy Company Employee Message',
  'availableService.addVehicleInspectionOrderServiceLog':
    'Add Vehicle Inspection Order Service Log',
  'availableService.removeVehicleInspectionOrderServiceLog':
    'Remove Vehicle Inspection Order Service Log',
  'availableService.updateVehicleInspectionOrderServiceLog':
    'Update Vehicle Inspection Order Service Log',
  'availableService.copyVehicleInspectionOrderServiceLogFrom':
    'Copy Vehicle Inspection Order Service Log',

  productPrice: 'Product Price',
  'productPrice.id': 'Id',
  'productPrice.product': 'Product',
  'productPrice.transferToproduct': 'Transfer to Another Available Product',
  'productPrice.city': 'City',
  'productPrice.transferTocity': 'Transfer to Another City',
  'productPrice.vehicleType': 'Vehicle Type',
  'productPrice.inspectionPrice': 'Inspection Price',
  'productPrice.agentServicePrice': 'Agent Service Price',
  'productPrice.description': 'Description',
  'productPrice.version': 'Version',

  availableInsurance: 'Available Insurance',
  'availableInsurance.id': 'Id',
  'availableInsurance.insuranceName': 'Insurance Name',
  'availableInsurance.insuranceVendor': 'Insurance Vendor',
  'availableInsurance.insurancePrice': 'Insurance Price',
  'availableInsurance.summary': 'Summary',
  'availableInsurance.product': 'Product',
  'availableInsurance.transferToproduct':
    'Transfer to Another Available Product',
  'availableInsurance.version': 'Version',
  'availableInsurance.addVehicleInspectionInsuranceOrder':
    'Add Vehicle Inspection Insurance Order',
  'availableInsurance.removeVehicleInspectionInsuranceOrder':
    'Remove Vehicle Inspection Insurance Order',
  'availableInsurance.updateVehicleInspectionInsuranceOrder':
    'Update Vehicle Inspection Insurance Order',
  'availableInsurance.copyVehicleInspectionInsuranceOrderFrom':
    'Copy Vehicle Inspection Insurance Order',
  'availableInsurance.addServiceInsuranceForInspection':
    'Add Service Insurance For Inspection',
  'availableInsurance.removeServiceInsuranceForInspection':
    'Remove Service Insurance For Inspection',
  'availableInsurance.updateServiceInsuranceForInspection':
    'Update Service Insurance For Inspection',
  'availableInsurance.copyServiceInsuranceForInspectionFrom':
    'Copy Service Insurance For Inspection',

  vehicleRepairingAllowance: 'Vehicle Repairing Allowance',
  'vehicleRepairingAllowance.id': 'Id',
  'vehicleRepairingAllowance.allowanceTitle': 'Allowance Title',
  'vehicleRepairingAllowance.allowanceCode': 'Allowance Code',
  'vehicleRepairingAllowance.allowanceAmount': 'Allowance Amount',
  'vehicleRepairingAllowance.service': 'Service',
  'vehicleRepairingAllowance.transferToservice':
    'Transfer to Another Available Service',
  'vehicleRepairingAllowance.version': 'Version',
  'vehicleRepairingAllowance.addRepairingQuotationItem':
    'Add Repairing Quotation Item',
  'vehicleRepairingAllowance.removeRepairingQuotationItem':
    'Remove Repairing Quotation Item',
  'vehicleRepairingAllowance.updateRepairingQuotationItem':
    'Update Repairing Quotation Item',
  'vehicleRepairingAllowance.copyRepairingQuotationItemFrom':
    'Copy Repairing Quotation Item',

  availableHandOverItem: 'Available Hand Over Item',
  'availableHandOverItem.id': 'Id',
  'availableHandOverItem.checkItemName': 'Check Item Name',
  'availableHandOverItem.checkItemDescription': 'Check Item Description',
  'availableHandOverItem.product': 'Product',
  'availableHandOverItem.transferToproduct':
    'Transfer to Another Available Product',
  'availableHandOverItem.version': 'Version',
  'availableHandOverItem.addHandOverChecklistItem':
    'Add Hand Over Checklist Item',
  'availableHandOverItem.removeHandOverChecklistItem':
    'Remove Hand Over Checklist Item',
  'availableHandOverItem.updateHandOverChecklistItem':
    'Update Hand Over Checklist Item',
  'availableHandOverItem.copyHandOverChecklistItemFrom':
    'Copy Hand Over Checklist Item',

  customer: 'Customer',
  'customer.id': 'Id',
  'customer.nickName': 'Nick Name',
  'customer.logoImage': 'Logo Image',
  'customer.weixinOpenid': 'Weixin Openid',
  'customer.weixinAppid': 'Weixin Appid',
  'customer.secUser': 'SecUser',
  'customer.transferTosecUser': 'Transfer to Another Sec User',
  'customer.platform': 'Platform',
  'customer.transferToplatform': 'Transfer to Another Car Inspection Platform',
  'customer.version': 'Version',
  'customer.addVehicleInfo': 'Add Vehicle Info',
  'customer.removeVehicleInfo': 'Remove Vehicle Info',
  'customer.updateVehicleInfo': 'Update Vehicle Info',
  'customer.copyVehicleInfoFrom': 'Copy Vehicle Info',
  'customer.addVehicleInspectionOrder': 'Add Vehicle Inspection Order',
  'customer.removeVehicleInspectionOrder': 'Remove Vehicle Inspection Order',
  'customer.updateVehicleInspectionOrder': 'Update Vehicle Inspection Order',
  'customer.copyVehicleInspectionOrderFrom': 'Copy Vehicle Inspection Order',

  vehicleServiceCompany: 'Vehicle Service Company',
  'vehicleServiceCompany.id': 'Id',
  'vehicleServiceCompany.companyName': 'Company Name',
  'vehicleServiceCompany.operatingStatus': 'Operating Status',
  'vehicleServiceCompany.addressCity': 'Address City',
  'vehicleServiceCompany.transferToaddressCity': 'Transfer to Another City',
  'vehicleServiceCompany.addressDetail': 'Address Detail',
  'vehicleServiceCompany.availableStoreService': 'Available Store Service',
  'vehicleServiceCompany.availableHomeService': 'Available Home Service',
  'vehicleServiceCompany.openingTime': 'Opening Time',
  'vehicleServiceCompany.longitude': 'Longitude',
  'vehicleServiceCompany.latitude': 'Latitude',
  'vehicleServiceCompany.platform': 'Platform',
  'vehicleServiceCompany.transferToplatform':
    'Transfer to Another Car Inspection Platform',
  'vehicleServiceCompany.version': 'Version',
  'vehicleServiceCompany.addVehicleServiceCompanyBusinessScope':
    'Add Vehicle Service Company Business Scope',
  'vehicleServiceCompany.removeVehicleServiceCompanyBusinessScope':
    'Remove Vehicle Service Company Business Scope',
  'vehicleServiceCompany.updateVehicleServiceCompanyBusinessScope':
    'Update Vehicle Service Company Business Scope',
  'vehicleServiceCompany.copyVehicleServiceCompanyBusinessScopeFrom':
    'Copy Vehicle Service Company Business Scope',
  'vehicleServiceCompany.addVehicleServiceCompanyDispatcher':
    'Add Vehicle Service Company Dispatcher',
  'vehicleServiceCompany.removeVehicleServiceCompanyDispatcher':
    'Remove Vehicle Service Company Dispatcher',
  'vehicleServiceCompany.updateVehicleServiceCompanyDispatcher':
    'Update Vehicle Service Company Dispatcher',
  'vehicleServiceCompany.copyVehicleServiceCompanyDispatcherFrom':
    'Copy Vehicle Service Company Dispatcher',
  'vehicleServiceCompany.addVehicleServiceCompanyEmployee':
    'Add Vehicle Service Company Employee',
  'vehicleServiceCompany.removeVehicleServiceCompanyEmployee':
    'Remove Vehicle Service Company Employee',
  'vehicleServiceCompany.updateVehicleServiceCompanyEmployee':
    'Update Vehicle Service Company Employee',
  'vehicleServiceCompany.copyVehicleServiceCompanyEmployeeFrom':
    'Copy Vehicle Service Company Employee',
  'vehicleServiceCompany.addServiceVehicleMovementC2m':
    'Add Service Vehicle Movement C2m',
  'vehicleServiceCompany.removeServiceVehicleMovementC2m':
    'Remove Service Vehicle Movement C2m',
  'vehicleServiceCompany.updateServiceVehicleMovementC2m':
    'Update Service Vehicle Movement C2m',
  'vehicleServiceCompany.copyServiceVehicleMovementC2mFrom':
    'Copy Service Vehicle Movement C2m',
  'vehicleServiceCompany.addServiceVehicleMovementM2c':
    'Add Service Vehicle Movement M2c',
  'vehicleServiceCompany.removeServiceVehicleMovementM2c':
    'Remove Service Vehicle Movement M2c',
  'vehicleServiceCompany.updateServiceVehicleMovementM2c':
    'Update Service Vehicle Movement M2c',
  'vehicleServiceCompany.copyServiceVehicleMovementM2cFrom':
    'Copy Service Vehicle Movement M2c',
  'vehicleServiceCompany.addServiceFileMovementC2m':
    'Add Service File Movement C2m',
  'vehicleServiceCompany.removeServiceFileMovementC2m':
    'Remove Service File Movement C2m',
  'vehicleServiceCompany.updateServiceFileMovementC2m':
    'Update Service File Movement C2m',
  'vehicleServiceCompany.copyServiceFileMovementC2mFrom':
    'Copy Service File Movement C2m',
  'vehicleServiceCompany.addServiceFileMovementM2c':
    'Add Service File Movement M2c',
  'vehicleServiceCompany.removeServiceFileMovementM2c':
    'Remove Service File Movement M2c',
  'vehicleServiceCompany.updateServiceFileMovementM2c':
    'Update Service File Movement M2c',
  'vehicleServiceCompany.copyServiceFileMovementM2cFrom':
    'Copy Service File Movement M2c',

  vehicleServiceCompanyBusinessScope: 'Vehicle Service Company Business Scope',
  'vehicleServiceCompanyBusinessScope.id': 'Id',
  'vehicleServiceCompanyBusinessScope.company': 'Company',
  'vehicleServiceCompanyBusinessScope.transferTocompany':
    'Transfer to Another Vehicle Service Company',
  'vehicleServiceCompanyBusinessScope.availableService': 'Available Service',
  'vehicleServiceCompanyBusinessScope.transferToavailableService':
    'Transfer to Another Available Service',
  'vehicleServiceCompanyBusinessScope.version': 'Version',

  vehicleServiceCompanyDispatcher: 'Vehicle Service Company Dispatcher',
  'vehicleServiceCompanyDispatcher.id': 'Id',
  'vehicleServiceCompanyDispatcher.description': 'Description',
  'vehicleServiceCompanyDispatcher.company': 'Company',
  'vehicleServiceCompanyDispatcher.transferTocompany':
    'Transfer to Another Vehicle Service Company',
  'vehicleServiceCompanyDispatcher.version': 'Version',

  vehicleServiceCompanyEmployee: 'Vehicle Service Company Employee',
  'vehicleServiceCompanyEmployee.id': 'Id',
  'vehicleServiceCompanyEmployee.employeeName': 'Employee Name',
  'vehicleServiceCompanyEmployee.profileImage': 'Profile Image',
  'vehicleServiceCompanyEmployee.gender': 'Gender',
  'vehicleServiceCompanyEmployee.availableState': 'Available State',
  'vehicleServiceCompanyEmployee.innocentEvidenceImage':
    'Innocent Evidence Image',
  'vehicleServiceCompanyEmployee.identityCardNumber': 'Identity Card Number',
  'vehicleServiceCompanyEmployee.company': 'Company',
  'vehicleServiceCompanyEmployee.transferTocompany':
    'Transfer to Another Vehicle Service Company',
  'vehicleServiceCompanyEmployee.availableMoveCar': 'Available Move Car',
  'vehicleServiceCompanyEmployee.availableInspectionCar':
    'Available Inspection Car',
  'vehicleServiceCompanyEmployee.availableRepairCar': 'Available Repair Car',
  'vehicleServiceCompanyEmployee.qualification': 'Qualification',
  'vehicleServiceCompanyEmployee.qualify': 'Qualify',
  'vehicleServiceCompanyEmployee.serving': 'Serving',
  'vehicleServiceCompanyEmployee.serve': 'Serve',
  'vehicleServiceCompanyEmployee.termination': 'Termination',
  'vehicleServiceCompanyEmployee.terminate': 'Terminate',
  'vehicleServiceCompanyEmployee.currentStatus': 'Current Status',
  'vehicleServiceCompanyEmployee.version': 'Version',
  'vehicleServiceCompanyEmployee.addEmployeeDrivingLicense':
    'Add Employee Driving License',
  'vehicleServiceCompanyEmployee.removeEmployeeDrivingLicense':
    'Remove Employee Driving License',
  'vehicleServiceCompanyEmployee.updateEmployeeDrivingLicense':
    'Update Employee Driving License',
  'vehicleServiceCompanyEmployee.copyEmployeeDrivingLicenseFrom':
    'Copy Employee Driving License',
  'vehicleServiceCompanyEmployee.addCompanyEmployeeMessage':
    'Add Company Employee Message',
  'vehicleServiceCompanyEmployee.removeCompanyEmployeeMessage':
    'Remove Company Employee Message',
  'vehicleServiceCompanyEmployee.updateCompanyEmployeeMessage':
    'Update Company Employee Message',
  'vehicleServiceCompanyEmployee.copyCompanyEmployeeMessageFrom':
    'Copy Company Employee Message',
  'vehicleServiceCompanyEmployee.addCompanyEmployeeMessage':
    'Add Company Employee Message',
  'vehicleServiceCompanyEmployee.removeCompanyEmployeeMessage':
    'Remove Company Employee Message',
  'vehicleServiceCompanyEmployee.updateCompanyEmployeeMessage':
    'Update Company Employee Message',
  'vehicleServiceCompanyEmployee.copyCompanyEmployeeMessageFrom':
    'Copy Company Employee Message',
  'vehicleServiceCompanyEmployee.addVehicleInspectionOrderServiceLog':
    'Add Vehicle Inspection Order Service Log',
  'vehicleServiceCompanyEmployee.removeVehicleInspectionOrderServiceLog':
    'Remove Vehicle Inspection Order Service Log',
  'vehicleServiceCompanyEmployee.updateVehicleInspectionOrderServiceLog':
    'Update Vehicle Inspection Order Service Log',
  'vehicleServiceCompanyEmployee.copyVehicleInspectionOrderServiceLogFrom':
    'Copy Vehicle Inspection Order Service Log',
  'vehicleServiceCompanyEmployee.addServiceVehicleMovementC2m':
    'Add Service Vehicle Movement C2m',
  'vehicleServiceCompanyEmployee.removeServiceVehicleMovementC2m':
    'Remove Service Vehicle Movement C2m',
  'vehicleServiceCompanyEmployee.updateServiceVehicleMovementC2m':
    'Update Service Vehicle Movement C2m',
  'vehicleServiceCompanyEmployee.copyServiceVehicleMovementC2mFrom':
    'Copy Service Vehicle Movement C2m',
  'vehicleServiceCompanyEmployee.addServiceVehicleMovementM2m':
    'Add Service Vehicle Movement M2m',
  'vehicleServiceCompanyEmployee.removeServiceVehicleMovementM2m':
    'Remove Service Vehicle Movement M2m',
  'vehicleServiceCompanyEmployee.updateServiceVehicleMovementM2m':
    'Update Service Vehicle Movement M2m',
  'vehicleServiceCompanyEmployee.copyServiceVehicleMovementM2mFrom':
    'Copy Service Vehicle Movement M2m',
  'vehicleServiceCompanyEmployee.addServiceVehicleMovementM2m':
    'Add Service Vehicle Movement M2m',
  'vehicleServiceCompanyEmployee.removeServiceVehicleMovementM2m':
    'Remove Service Vehicle Movement M2m',
  'vehicleServiceCompanyEmployee.updateServiceVehicleMovementM2m':
    'Update Service Vehicle Movement M2m',
  'vehicleServiceCompanyEmployee.copyServiceVehicleMovementM2mFrom':
    'Copy Service Vehicle Movement M2m',
  'vehicleServiceCompanyEmployee.addServiceVehicleMovementM2m':
    'Add Service Vehicle Movement M2m',
  'vehicleServiceCompanyEmployee.removeServiceVehicleMovementM2m':
    'Remove Service Vehicle Movement M2m',
  'vehicleServiceCompanyEmployee.updateServiceVehicleMovementM2m':
    'Update Service Vehicle Movement M2m',
  'vehicleServiceCompanyEmployee.copyServiceVehicleMovementM2mFrom':
    'Copy Service Vehicle Movement M2m',
  'vehicleServiceCompanyEmployee.addServiceVehicleMovementM2c':
    'Add Service Vehicle Movement M2c',
  'vehicleServiceCompanyEmployee.removeServiceVehicleMovementM2c':
    'Remove Service Vehicle Movement M2c',
  'vehicleServiceCompanyEmployee.updateServiceVehicleMovementM2c':
    'Update Service Vehicle Movement M2c',
  'vehicleServiceCompanyEmployee.copyServiceVehicleMovementM2cFrom':
    'Copy Service Vehicle Movement M2c',
  'vehicleServiceCompanyEmployee.addServiceFileMovementC2m':
    'Add Service File Movement C2m',
  'vehicleServiceCompanyEmployee.removeServiceFileMovementC2m':
    'Remove Service File Movement C2m',
  'vehicleServiceCompanyEmployee.updateServiceFileMovementC2m':
    'Update Service File Movement C2m',
  'vehicleServiceCompanyEmployee.copyServiceFileMovementC2mFrom':
    'Copy Service File Movement C2m',
  'vehicleServiceCompanyEmployee.addServiceFileMovementM2m':
    'Add Service File Movement M2m',
  'vehicleServiceCompanyEmployee.removeServiceFileMovementM2m':
    'Remove Service File Movement M2m',
  'vehicleServiceCompanyEmployee.updateServiceFileMovementM2m':
    'Update Service File Movement M2m',
  'vehicleServiceCompanyEmployee.copyServiceFileMovementM2mFrom':
    'Copy Service File Movement M2m',
  'vehicleServiceCompanyEmployee.addServiceFileMovementM2m':
    'Add Service File Movement M2m',
  'vehicleServiceCompanyEmployee.removeServiceFileMovementM2m':
    'Remove Service File Movement M2m',
  'vehicleServiceCompanyEmployee.updateServiceFileMovementM2m':
    'Update Service File Movement M2m',
  'vehicleServiceCompanyEmployee.copyServiceFileMovementM2mFrom':
    'Copy Service File Movement M2m',
  'vehicleServiceCompanyEmployee.addServiceFileMovementM2m':
    'Add Service File Movement M2m',
  'vehicleServiceCompanyEmployee.removeServiceFileMovementM2m':
    'Remove Service File Movement M2m',
  'vehicleServiceCompanyEmployee.updateServiceFileMovementM2m':
    'Update Service File Movement M2m',
  'vehicleServiceCompanyEmployee.copyServiceFileMovementM2mFrom':
    'Copy Service File Movement M2m',
  'vehicleServiceCompanyEmployee.addServiceFileMovementM2c':
    'Add Service File Movement M2c',
  'vehicleServiceCompanyEmployee.removeServiceFileMovementM2c':
    'Remove Service File Movement M2c',
  'vehicleServiceCompanyEmployee.updateServiceFileMovementM2c':
    'Update Service File Movement M2c',
  'vehicleServiceCompanyEmployee.copyServiceFileMovementM2cFrom':
    'Copy Service File Movement M2c',
  'vehicleServiceCompanyEmployee.addServiceInsuranceForInspection':
    'Add Service Insurance For Inspection',
  'vehicleServiceCompanyEmployee.removeServiceInsuranceForInspection':
    'Remove Service Insurance For Inspection',
  'vehicleServiceCompanyEmployee.updateServiceInsuranceForInspection':
    'Update Service Insurance For Inspection',
  'vehicleServiceCompanyEmployee.copyServiceInsuranceForInspectionFrom':
    'Copy Service Insurance For Inspection',
  'vehicleServiceCompanyEmployee.addServiceVehicleInspection':
    'Add Service Vehicle Inspection',
  'vehicleServiceCompanyEmployee.removeServiceVehicleInspection':
    'Remove Service Vehicle Inspection',
  'vehicleServiceCompanyEmployee.updateServiceVehicleInspection':
    'Update Service Vehicle Inspection',
  'vehicleServiceCompanyEmployee.copyServiceVehicleInspectionFrom':
    'Copy Service Vehicle Inspection',
  'vehicleServiceCompanyEmployee.addServiceFileInspection':
    'Add Service File Inspection',
  'vehicleServiceCompanyEmployee.removeServiceFileInspection':
    'Remove Service File Inspection',
  'vehicleServiceCompanyEmployee.updateServiceFileInspection':
    'Update Service File Inspection',
  'vehicleServiceCompanyEmployee.copyServiceFileInspectionFrom':
    'Copy Service File Inspection',
  'vehicleServiceCompanyEmployee.addServiceVehicleRepairing':
    'Add Service Vehicle Repairing',
  'vehicleServiceCompanyEmployee.removeServiceVehicleRepairing':
    'Remove Service Vehicle Repairing',
  'vehicleServiceCompanyEmployee.updateServiceVehicleRepairing':
    'Update Service Vehicle Repairing',
  'vehicleServiceCompanyEmployee.copyServiceVehicleRepairingFrom':
    'Copy Service Vehicle Repairing',

  companyEmployeeQualification: 'Company Employee Qualification',
  'companyEmployeeQualification.id': 'Id',
  'companyEmployeeQualification.eventTime': 'Event Time',
  'companyEmployeeQualification.who': 'Who',
  'companyEmployeeQualification.comment': 'Comment',
  'companyEmployeeQualification.version': 'Version',
  'companyEmployeeQualification.addVehicleServiceCompanyEmployee':
    'Add Vehicle Service Company Employee',
  'companyEmployeeQualification.removeVehicleServiceCompanyEmployee':
    'Remove Vehicle Service Company Employee',
  'companyEmployeeQualification.updateVehicleServiceCompanyEmployee':
    'Update Vehicle Service Company Employee',
  'companyEmployeeQualification.copyVehicleServiceCompanyEmployeeFrom':
    'Copy Vehicle Service Company Employee',

  companyEmployeeServing: 'Company Employee Serving',
  'companyEmployeeServing.id': 'Id',
  'companyEmployeeServing.eventTime': 'Event Time',
  'companyEmployeeServing.who': 'Who',
  'companyEmployeeServing.comment': 'Comment',
  'companyEmployeeServing.version': 'Version',
  'companyEmployeeServing.addVehicleServiceCompanyEmployee':
    'Add Vehicle Service Company Employee',
  'companyEmployeeServing.removeVehicleServiceCompanyEmployee':
    'Remove Vehicle Service Company Employee',
  'companyEmployeeServing.updateVehicleServiceCompanyEmployee':
    'Update Vehicle Service Company Employee',
  'companyEmployeeServing.copyVehicleServiceCompanyEmployeeFrom':
    'Copy Vehicle Service Company Employee',

  companyEmployeeTermination: 'Company Employee Termination',
  'companyEmployeeTermination.id': 'Id',
  'companyEmployeeTermination.who': 'Who',
  'companyEmployeeTermination.eventTime': 'Event Time',
  'companyEmployeeTermination.comment': 'Comment',
  'companyEmployeeTermination.version': 'Version',
  'companyEmployeeTermination.addVehicleServiceCompanyEmployee':
    'Add Vehicle Service Company Employee',
  'companyEmployeeTermination.removeVehicleServiceCompanyEmployee':
    'Remove Vehicle Service Company Employee',
  'companyEmployeeTermination.updateVehicleServiceCompanyEmployee':
    'Update Vehicle Service Company Employee',
  'companyEmployeeTermination.copyVehicleServiceCompanyEmployeeFrom':
    'Copy Vehicle Service Company Employee',

  employeeDrivingLicense: 'Employee Driving License',
  'employeeDrivingLicense.id': 'Id',
  'employeeDrivingLicense.employee': 'Employee',
  'employeeDrivingLicense.transferToemployee':
    'Transfer to Another Vehicle Service Company Employee',
  'employeeDrivingLicense.holderName': 'Holder Name',
  'employeeDrivingLicense.licenseType': 'License Type',
  'employeeDrivingLicense.licenseNumber': 'License Number',
  'employeeDrivingLicense.expirationDate': 'Expiration Date',
  'employeeDrivingLicense.image1': 'Image 1',
  'employeeDrivingLicense.image2': 'Image 2',
  'employeeDrivingLicense.image3': 'Image 3',
  'employeeDrivingLicense.image4': 'Image 4',
  'employeeDrivingLicense.image5': 'Image 5',
  'employeeDrivingLicense.version': 'Version',

  companyEmployeeMessage: 'Company Employee Message',
  'companyEmployeeMessage.id': 'Id',
  'companyEmployeeMessage.title': 'Title',
  'companyEmployeeMessage.messageContent': 'Message Content',
  'companyEmployeeMessage.sender': 'Sender',
  'companyEmployeeMessage.transferTosender':
    'Transfer to Another Vehicle Service Company Employee',
  'companyEmployeeMessage.receiver': 'Receiver',
  'companyEmployeeMessage.transferToreceiver':
    'Transfer to Another Vehicle Service Company Employee',
  'companyEmployeeMessage.serviceType': 'Service Type',
  'companyEmployeeMessage.transferToserviceType':
    'Transfer to Another Available Service',
  'companyEmployeeMessage.serviceTicket': 'Service Ticket',
  'companyEmployeeMessage.sendTime': 'Send Time',
  'companyEmployeeMessage.readTime': 'Read Time',
  'companyEmployeeMessage.status': 'Status',
  'companyEmployeeMessage.version': 'Version',

  inspectionStation: 'Inspection Station',
  'inspectionStation.id': 'Id',
  'inspectionStation.name': 'Name',
  'inspectionStation.operatingStatus': 'Operating Status',
  'inspectionStation.addressCity': 'Address City',
  'inspectionStation.transferToaddressCity': 'Transfer to Another City',
  'inspectionStation.addressDetail': 'Address Detail',
  'inspectionStation.location': 'Location',
  'inspectionStation.contactName': 'Contact Name',
  'inspectionStation.contactMobile': 'Contact Mobile',
  'inspectionStation.metrologyAccreditationImage':
    'Metrology Accreditation Image',
  'inspectionStation.version': 'Version',
  'inspectionStation.addServiceVehicleInspection':
    'Add Service Vehicle Inspection',
  'inspectionStation.removeServiceVehicleInspection':
    'Remove Service Vehicle Inspection',
  'inspectionStation.updateServiceVehicleInspection':
    'Update Service Vehicle Inspection',
  'inspectionStation.copyServiceVehicleInspectionFrom':
    'Copy Service Vehicle Inspection',
  'inspectionStation.addServiceFileInspection': 'Add Service File Inspection',
  'inspectionStation.removeServiceFileInspection':
    'Remove Service File Inspection',
  'inspectionStation.updateServiceFileInspection':
    'Update Service File Inspection',
  'inspectionStation.copyServiceFileInspectionFrom':
    'Copy Service File Inspection',

  vehicleInfo: 'Vehicle Info',
  'vehicleInfo.id': 'Id',
  'vehicleInfo.licensePlateNumber': 'License Plate Number',
  'vehicleInfo.vehicleType': 'Vehicle Type',
  'vehicleInfo.useCharacter': 'Use Character',
  'vehicleInfo.seatsQuantity': 'Seats Quantity',
  'vehicleInfo.registrationDate': 'Registration Date',
  'vehicleInfo.inspectionValidationDate': 'Inspection Validation Date',
  'vehicleInfo.insuranceValidationDate': 'Insurance Validation Date',
  'vehicleInfo.engineNumber': 'Engine Number',
  'vehicleInfo.vehicleIdentificationNumber': 'Vehicle Identification Number',
  'vehicleInfo.vehiclePermitIssueDate': 'Vehicle Permit Issue Date',
  'vehicleInfo.vehiclePermitHolderName': 'Vehicle Permit Holder Name',
  'vehicleInfo.vehiclePermitNumber': 'Vehicle Permit Number',
  'vehicleInfo.vehiclePermitExpirationDate': 'Vehicle Permit Expiration Date',
  'vehicleInfo.vehiclePermitImage1': 'Vehicle Permit Image 1',
  'vehicleInfo.vehiclePermitImage2': 'Vehicle Permit Image 2',
  'vehicleInfo.vehiclePermitImage3': 'Vehicle Permit Image 3',
  'vehicleInfo.vehiclePermitImage4': 'Vehicle Permit Image 4',
  'vehicleInfo.vehiclePermitImage5': 'Vehicle Permit Image 5',
  'vehicleInfo.customer': 'Customer',
  'vehicleInfo.transferTocustomer': 'Transfer to Another Customer',
  'vehicleInfo.platform': 'Platform',
  'vehicleInfo.transferToplatform':
    'Transfer to Another Car Inspection Platform',
  'vehicleInfo.version': 'Version',

  vehicleInspectionOrder: 'Vehicle Inspection Order',
  'vehicleInspectionOrder.id': 'Id',
  'vehicleInspectionOrder.orderStatus': 'Order Status',
  'vehicleInspectionOrder.customer': 'Customer',
  'vehicleInspectionOrder.transferTocustomer': 'Transfer to Another Customer',
  'vehicleInspectionOrder.createTime': 'Create Time',
  'vehicleInspectionOrder.planInspectionDate': 'Plan Inspection Date',
  'vehicleInspectionOrder.trafficAccidentAnnouncement':
    'Traffic Accident Announcement',
  'vehicleInspectionOrder.homePickUp': 'Home Pick Up',
  'vehicleInspectionOrder.contactName': 'Contact Name',
  'vehicleInspectionOrder.contactMobileNumber': 'Contact Mobile Number',
  'vehicleInspectionOrder.contactAddressCity': 'Contact Address City',
  'vehicleInspectionOrder.transferTocontactAddressCity':
    'Transfer to Another City',
  'vehicleInspectionOrder.contactAddressDetail': 'Contact Address Detail',
  'vehicleInspectionOrder.vehicleLicensePlateNumber':
    'Vehicle License Plate Number',
  'vehicleInspectionOrder.vehicleType': 'Vehicle Type',
  'vehicleInspectionOrder.vehicleUseCharacter': 'Vehicle Use Character',
  'vehicleInspectionOrder.vehicleSeatsQuantity': 'Vehicle Seats Quantity',
  'vehicleInspectionOrder.vehicleRegistrationDate': 'Vehicle Registration Date',
  'vehicleInspectionOrder.inspectionValidationDate':
    'Inspection Validation Date',
  'vehicleInspectionOrder.insuranceValidationDate': 'Insurance Validation Date',
  'vehicleInspectionOrder.engineNumber': 'Engine Number',
  'vehicleInspectionOrder.vehicleIdentificationNumber':
    'Vehicle Identification Number',
  'vehicleInspectionOrder.vehiclePermitIssueDate': 'Vehicle Permit Issue Date',
  'vehicleInspectionOrder.vehiclePermitHolderName':
    'Vehicle Permit Holder Name',
  'vehicleInspectionOrder.vehiclePermitNumber': 'Vehicle Permit Number',
  'vehicleInspectionOrder.vehiclePermitExpirationDate':
    'Vehicle Permit Expiration Date',
  'vehicleInspectionOrder.vehiclePermitImage1': 'Vehicle Permit Image 1',
  'vehicleInspectionOrder.vehiclePermitImage2': 'Vehicle Permit Image 2',
  'vehicleInspectionOrder.vehiclePermitImage3': 'Vehicle Permit Image 3',
  'vehicleInspectionOrder.vehiclePermitImage4': 'Vehicle Permit Image 4',
  'vehicleInspectionOrder.vehiclePermitImage5': 'Vehicle Permit Image 5',
  'vehicleInspectionOrder.platform': 'Platform',
  'vehicleInspectionOrder.transferToplatform':
    'Transfer to Another Car Inspection Platform',
  'vehicleInspectionOrder.version': 'Version',
  'vehicleInspectionOrder.addVehicleInspectionInsuranceOrder':
    'Add Vehicle Inspection Insurance Order',
  'vehicleInspectionOrder.removeVehicleInspectionInsuranceOrder':
    'Remove Vehicle Inspection Insurance Order',
  'vehicleInspectionOrder.updateVehicleInspectionInsuranceOrder':
    'Update Vehicle Inspection Insurance Order',
  'vehicleInspectionOrder.copyVehicleInspectionInsuranceOrderFrom':
    'Copy Vehicle Inspection Insurance Order',
  'vehicleInspectionOrder.addVehicleInspectionOrderServiceLog':
    'Add Vehicle Inspection Order Service Log',
  'vehicleInspectionOrder.removeVehicleInspectionOrderServiceLog':
    'Remove Vehicle Inspection Order Service Log',
  'vehicleInspectionOrder.updateVehicleInspectionOrderServiceLog':
    'Update Vehicle Inspection Order Service Log',
  'vehicleInspectionOrder.copyVehicleInspectionOrderServiceLogFrom':
    'Copy Vehicle Inspection Order Service Log',
  'vehicleInspectionOrder.addVehicleInspectionOrderCoupon':
    'Add Vehicle Inspection Order Coupon',
  'vehicleInspectionOrder.removeVehicleInspectionOrderCoupon':
    'Remove Vehicle Inspection Order Coupon',
  'vehicleInspectionOrder.updateVehicleInspectionOrderCoupon':
    'Update Vehicle Inspection Order Coupon',
  'vehicleInspectionOrder.copyVehicleInspectionOrderCouponFrom':
    'Copy Vehicle Inspection Order Coupon',
  'vehicleInspectionOrder.addVehicleInspectionOrderPayment':
    'Add Vehicle Inspection Order Payment',
  'vehicleInspectionOrder.removeVehicleInspectionOrderPayment':
    'Remove Vehicle Inspection Order Payment',
  'vehicleInspectionOrder.updateVehicleInspectionOrderPayment':
    'Update Vehicle Inspection Order Payment',
  'vehicleInspectionOrder.copyVehicleInspectionOrderPaymentFrom':
    'Copy Vehicle Inspection Order Payment',
  'vehicleInspectionOrder.addHandOverChecklistItem':
    'Add Hand Over Checklist Item',
  'vehicleInspectionOrder.removeHandOverChecklistItem':
    'Remove Hand Over Checklist Item',
  'vehicleInspectionOrder.updateHandOverChecklistItem':
    'Update Hand Over Checklist Item',
  'vehicleInspectionOrder.copyHandOverChecklistItemFrom':
    'Copy Hand Over Checklist Item',
  'vehicleInspectionOrder.addServiceVehicleMovementC2m':
    'Add Service Vehicle Movement C2m',
  'vehicleInspectionOrder.removeServiceVehicleMovementC2m':
    'Remove Service Vehicle Movement C2m',
  'vehicleInspectionOrder.updateServiceVehicleMovementC2m':
    'Update Service Vehicle Movement C2m',
  'vehicleInspectionOrder.copyServiceVehicleMovementC2mFrom':
    'Copy Service Vehicle Movement C2m',
  'vehicleInspectionOrder.addServiceVehicleMovementM2m':
    'Add Service Vehicle Movement M2m',
  'vehicleInspectionOrder.removeServiceVehicleMovementM2m':
    'Remove Service Vehicle Movement M2m',
  'vehicleInspectionOrder.updateServiceVehicleMovementM2m':
    'Update Service Vehicle Movement M2m',
  'vehicleInspectionOrder.copyServiceVehicleMovementM2mFrom':
    'Copy Service Vehicle Movement M2m',
  'vehicleInspectionOrder.addServiceVehicleMovementM2c':
    'Add Service Vehicle Movement M2c',
  'vehicleInspectionOrder.removeServiceVehicleMovementM2c':
    'Remove Service Vehicle Movement M2c',
  'vehicleInspectionOrder.updateServiceVehicleMovementM2c':
    'Update Service Vehicle Movement M2c',
  'vehicleInspectionOrder.copyServiceVehicleMovementM2cFrom':
    'Copy Service Vehicle Movement M2c',
  'vehicleInspectionOrder.addServiceFileMovementC2m':
    'Add Service File Movement C2m',
  'vehicleInspectionOrder.removeServiceFileMovementC2m':
    'Remove Service File Movement C2m',
  'vehicleInspectionOrder.updateServiceFileMovementC2m':
    'Update Service File Movement C2m',
  'vehicleInspectionOrder.copyServiceFileMovementC2mFrom':
    'Copy Service File Movement C2m',
  'vehicleInspectionOrder.addServiceFileMovementM2m':
    'Add Service File Movement M2m',
  'vehicleInspectionOrder.removeServiceFileMovementM2m':
    'Remove Service File Movement M2m',
  'vehicleInspectionOrder.updateServiceFileMovementM2m':
    'Update Service File Movement M2m',
  'vehicleInspectionOrder.copyServiceFileMovementM2mFrom':
    'Copy Service File Movement M2m',
  'vehicleInspectionOrder.addServiceFileMovementM2c':
    'Add Service File Movement M2c',
  'vehicleInspectionOrder.removeServiceFileMovementM2c':
    'Remove Service File Movement M2c',
  'vehicleInspectionOrder.updateServiceFileMovementM2c':
    'Update Service File Movement M2c',
  'vehicleInspectionOrder.copyServiceFileMovementM2cFrom':
    'Copy Service File Movement M2c',
  'vehicleInspectionOrder.addServiceInsuranceForInspection':
    'Add Service Insurance For Inspection',
  'vehicleInspectionOrder.removeServiceInsuranceForInspection':
    'Remove Service Insurance For Inspection',
  'vehicleInspectionOrder.updateServiceInsuranceForInspection':
    'Update Service Insurance For Inspection',
  'vehicleInspectionOrder.copyServiceInsuranceForInspectionFrom':
    'Copy Service Insurance For Inspection',
  'vehicleInspectionOrder.addServiceVehicleInspection':
    'Add Service Vehicle Inspection',
  'vehicleInspectionOrder.removeServiceVehicleInspection':
    'Remove Service Vehicle Inspection',
  'vehicleInspectionOrder.updateServiceVehicleInspection':
    'Update Service Vehicle Inspection',
  'vehicleInspectionOrder.copyServiceVehicleInspectionFrom':
    'Copy Service Vehicle Inspection',
  'vehicleInspectionOrder.addServiceFileInspection':
    'Add Service File Inspection',
  'vehicleInspectionOrder.removeServiceFileInspection':
    'Remove Service File Inspection',
  'vehicleInspectionOrder.updateServiceFileInspection':
    'Update Service File Inspection',
  'vehicleInspectionOrder.copyServiceFileInspectionFrom':
    'Copy Service File Inspection',
  'vehicleInspectionOrder.addServiceVehicleRepairing':
    'Add Service Vehicle Repairing',
  'vehicleInspectionOrder.removeServiceVehicleRepairing':
    'Remove Service Vehicle Repairing',
  'vehicleInspectionOrder.updateServiceVehicleRepairing':
    'Update Service Vehicle Repairing',
  'vehicleInspectionOrder.copyServiceVehicleRepairingFrom':
    'Copy Service Vehicle Repairing',

  vehicleInspectionInsuranceOrder: 'Vehicle Inspection Insurance Order',
  'vehicleInspectionInsuranceOrder.id': 'Id',
  'vehicleInspectionInsuranceOrder.insurance': 'Insurance',
  'vehicleInspectionInsuranceOrder.transferToinsurance':
    'Transfer to Another Available Insurance',
  'vehicleInspectionInsuranceOrder.mainOrder': 'Main Order',
  'vehicleInspectionInsuranceOrder.transferTomainOrder':
    'Transfer to Another Vehicle Inspection Order',
  'vehicleInspectionInsuranceOrder.version': 'Version',

  vehicleInspectionOrderServiceLog: 'Vehicle Inspection Order Service Log',
  'vehicleInspectionOrderServiceLog.id': 'Id',
  'vehicleInspectionOrderServiceLog.summary': 'Summary',
  'vehicleInspectionOrderServiceLog.createTime': 'Create Time',
  'vehicleInspectionOrderServiceLog.responsibleWorker': 'Responsible Worker',
  'vehicleInspectionOrderServiceLog.transferToresponsibleWorker':
    'Transfer to Another Vehicle Service Company Employee',
  'vehicleInspectionOrderServiceLog.location': 'Location',
  'vehicleInspectionOrderServiceLog.serviceType': 'Service Type',
  'vehicleInspectionOrderServiceLog.transferToserviceType':
    'Transfer to Another Available Service',
  'vehicleInspectionOrderServiceLog.serviceTicket': 'Service Ticket',
  'vehicleInspectionOrderServiceLog.mainOrder': 'Main Order',
  'vehicleInspectionOrderServiceLog.transferTomainOrder':
    'Transfer to Another Vehicle Inspection Order',
  'vehicleInspectionOrderServiceLog.version': 'Version',

  vehicleInspectionOrderCoupon: 'Vehicle Inspection Order Coupon',
  'vehicleInspectionOrderCoupon.id': 'Id',
  'vehicleInspectionOrderCoupon.title': 'Title',
  'vehicleInspectionOrderCoupon.startDate': 'Start Date',
  'vehicleInspectionOrderCoupon.expirationDate': 'Expiration Date',
  'vehicleInspectionOrderCoupon.amount': 'Amount',
  'vehicleInspectionOrderCoupon.code': 'Code',
  'vehicleInspectionOrderCoupon.usedDate': 'Used Date',
  'vehicleInspectionOrderCoupon.mainOrder': 'Main Order',
  'vehicleInspectionOrderCoupon.transferTomainOrder':
    'Transfer to Another Vehicle Inspection Order',
  'vehicleInspectionOrderCoupon.version': 'Version',

  vehicleInspectionOrderPayment: 'Vehicle Inspection Order Payment',
  'vehicleInspectionOrderPayment.id': 'Id',
  'vehicleInspectionOrderPayment.paymentMethod': 'Payment Method',
  'vehicleInspectionOrderPayment.paymentAmount': 'Payment Amount',
  'vehicleInspectionOrderPayment.paymentStatus': 'Payment Status',
  'vehicleInspectionOrderPayment.mainOrder': 'Main Order',
  'vehicleInspectionOrderPayment.transferTomainOrder':
    'Transfer to Another Vehicle Inspection Order',
  'vehicleInspectionOrderPayment.version': 'Version',

  handOverChecklistItem: 'Hand Over Checklist Item',
  'handOverChecklistItem.id': 'Id',
  'handOverChecklistItem.question': 'Question',
  'handOverChecklistItem.transferToquestion':
    'Transfer to Another Available Hand Over Item',
  'handOverChecklistItem.mainOrder': 'Main Order',
  'handOverChecklistItem.transferTomainOrder':
    'Transfer to Another Vehicle Inspection Order',
  'handOverChecklistItem.version': 'Version',

  serviceVehicleMovementC2m: 'Service Vehicle Movement C2m',
  'serviceVehicleMovementC2m.id': 'Id',
  'serviceVehicleMovementC2m.serviceStatus': 'Service Status',
  'serviceVehicleMovementC2m.responsibleWorker': 'Responsible Worker',
  'serviceVehicleMovementC2m.transferToresponsibleWorker':
    'Transfer to Another Vehicle Service Company Employee',
  'serviceVehicleMovementC2m.rejectComments': 'Reject Comments',
  'serviceVehicleMovementC2m.rejectEvidence1': 'Reject Evidence 1',
  'serviceVehicleMovementC2m.rejectEvidence2': 'Reject Evidence 2',
  'serviceVehicleMovementC2m.rejectEvidence3': 'Reject Evidence 3',
  'serviceVehicleMovementC2m.rejectEvidence4': 'Reject Evidence 4',
  'serviceVehicleMovementC2m.rejectEvidence5': 'Reject Evidence 5',
  'serviceVehicleMovementC2m.startTime': 'Start Time',
  'serviceVehicleMovementC2m.lastLocation': 'Last Location',
  'serviceVehicleMovementC2m.lastUpdateTime': 'Last Update Time',
  'serviceVehicleMovementC2m.mainOrder': 'Main Order',
  'serviceVehicleMovementC2m.transferTomainOrder':
    'Transfer to Another Vehicle Inspection Order',
  'serviceVehicleMovementC2m.movementPurpose': 'Movement Purpose',
  'serviceVehicleMovementC2m.contactName': 'Contact Name',
  'serviceVehicleMovementC2m.contactMobileNumber': 'Contact Mobile Number',
  'serviceVehicleMovementC2m.merchant': 'Merchant',
  'serviceVehicleMovementC2m.transferTomerchant':
    'Transfer to Another Vehicle Service Company',
  'serviceVehicleMovementC2m.version': 'Version',
  'serviceVehicleMovementC2m.addServiceVehicleMovementC2mChecklistResult':
    'Add Service Vehicle Movement C2m Checklist Result',
  'serviceVehicleMovementC2m.removeServiceVehicleMovementC2mChecklistResult':
    'Remove Service Vehicle Movement C2m Checklist Result',
  'serviceVehicleMovementC2m.updateServiceVehicleMovementC2mChecklistResult':
    'Update Service Vehicle Movement C2m Checklist Result',
  'serviceVehicleMovementC2m.copyServiceVehicleMovementC2mChecklistResultFrom':
    'Copy Service Vehicle Movement C2m Checklist Result',

  serviceVehicleMovementC2mChecklistResult:
    'Service Vehicle Movement C2m Checklist Result',
  'serviceVehicleMovementC2mChecklistResult.id': 'Id',
  'serviceVehicleMovementC2mChecklistResult.service': 'Service',
  'serviceVehicleMovementC2mChecklistResult.transferToservice':
    'Transfer to Another Service Vehicle Movement C2m',
  'serviceVehicleMovementC2mChecklistResult.checkResult': 'Check Result',
  'serviceVehicleMovementC2mChecklistResult.checkResultComments':
    'Check Result Comments',
  'serviceVehicleMovementC2mChecklistResult.createTime': 'Create Time',
  'serviceVehicleMovementC2mChecklistResult.image1': 'Image 1',
  'serviceVehicleMovementC2mChecklistResult.image2': 'Image 2',
  'serviceVehicleMovementC2mChecklistResult.image3': 'Image 3',
  'serviceVehicleMovementC2mChecklistResult.image4': 'Image 4',
  'serviceVehicleMovementC2mChecklistResult.image5': 'Image 5',
  'serviceVehicleMovementC2mChecklistResult.version': 'Version',

  serviceVehicleMovementM2m: 'Service Vehicle Movement M2m',
  'serviceVehicleMovementM2m.id': 'Id',
  'serviceVehicleMovementM2m.serviceStatus': 'Service Status',
  'serviceVehicleMovementM2m.responsibleWorker': 'Responsible Worker',
  'serviceVehicleMovementM2m.transferToresponsibleWorker':
    'Transfer to Another Vehicle Service Company Employee',
  'serviceVehicleMovementM2m.rejectComments': 'Reject Comments',
  'serviceVehicleMovementM2m.rejectEvidence1': 'Reject Evidence 1',
  'serviceVehicleMovementM2m.rejectEvidence2': 'Reject Evidence 2',
  'serviceVehicleMovementM2m.rejectEvidence3': 'Reject Evidence 3',
  'serviceVehicleMovementM2m.rejectEvidence4': 'Reject Evidence 4',
  'serviceVehicleMovementM2m.rejectEvidence5': 'Reject Evidence 5',
  'serviceVehicleMovementM2m.startTime': 'Start Time',
  'serviceVehicleMovementM2m.lastLocation': 'Last Location',
  'serviceVehicleMovementM2m.lastUpdateTime': 'Last Update Time',
  'serviceVehicleMovementM2m.mainOrder': 'Main Order',
  'serviceVehicleMovementM2m.transferTomainOrder':
    'Transfer to Another Vehicle Inspection Order',
  'serviceVehicleMovementM2m.movementPurpose': 'Movement Purpose',
  'serviceVehicleMovementM2m.driver': 'Driver',
  'serviceVehicleMovementM2m.transferTodriver':
    'Transfer to Another Vehicle Service Company Employee',
  'serviceVehicleMovementM2m.receiver': 'Receiver',
  'serviceVehicleMovementM2m.transferToreceiver':
    'Transfer to Another Vehicle Service Company Employee',
  'serviceVehicleMovementM2m.version': 'Version',
  'serviceVehicleMovementM2m.addServiceVehicleMovementM2mChecklistResult':
    'Add Service Vehicle Movement M2m Checklist Result',
  'serviceVehicleMovementM2m.removeServiceVehicleMovementM2mChecklistResult':
    'Remove Service Vehicle Movement M2m Checklist Result',
  'serviceVehicleMovementM2m.updateServiceVehicleMovementM2mChecklistResult':
    'Update Service Vehicle Movement M2m Checklist Result',
  'serviceVehicleMovementM2m.copyServiceVehicleMovementM2mChecklistResultFrom':
    'Copy Service Vehicle Movement M2m Checklist Result',

  serviceVehicleMovementM2mChecklistResult:
    'Service Vehicle Movement M2m Checklist Result',
  'serviceVehicleMovementM2mChecklistResult.id': 'Id',
  'serviceVehicleMovementM2mChecklistResult.service': 'Service',
  'serviceVehicleMovementM2mChecklistResult.transferToservice':
    'Transfer to Another Service Vehicle Movement M2m',
  'serviceVehicleMovementM2mChecklistResult.checkResult': 'Check Result',
  'serviceVehicleMovementM2mChecklistResult.checkResultComments':
    'Check Result Comments',
  'serviceVehicleMovementM2mChecklistResult.createTime': 'Create Time',
  'serviceVehicleMovementM2mChecklistResult.image1': 'Image 1',
  'serviceVehicleMovementM2mChecklistResult.image2': 'Image 2',
  'serviceVehicleMovementM2mChecklistResult.image3': 'Image 3',
  'serviceVehicleMovementM2mChecklistResult.image4': 'Image 4',
  'serviceVehicleMovementM2mChecklistResult.image5': 'Image 5',
  'serviceVehicleMovementM2mChecklistResult.version': 'Version',

  serviceVehicleMovementM2c: 'Service Vehicle Movement M2c',
  'serviceVehicleMovementM2c.id': 'Id',
  'serviceVehicleMovementM2c.serviceStatus': 'Service Status',
  'serviceVehicleMovementM2c.responsibleWorker': 'Responsible Worker',
  'serviceVehicleMovementM2c.transferToresponsibleWorker':
    'Transfer to Another Vehicle Service Company Employee',
  'serviceVehicleMovementM2c.rejectComments': 'Reject Comments',
  'serviceVehicleMovementM2c.rejectEvidence1': 'Reject Evidence 1',
  'serviceVehicleMovementM2c.rejectEvidence2': 'Reject Evidence 2',
  'serviceVehicleMovementM2c.rejectEvidence3': 'Reject Evidence 3',
  'serviceVehicleMovementM2c.rejectEvidence4': 'Reject Evidence 4',
  'serviceVehicleMovementM2c.rejectEvidence5': 'Reject Evidence 5',
  'serviceVehicleMovementM2c.startTime': 'Start Time',
  'serviceVehicleMovementM2c.lastLocation': 'Last Location',
  'serviceVehicleMovementM2c.lastUpdateTime': 'Last Update Time',
  'serviceVehicleMovementM2c.mainOrder': 'Main Order',
  'serviceVehicleMovementM2c.transferTomainOrder':
    'Transfer to Another Vehicle Inspection Order',
  'serviceVehicleMovementM2c.movementPurpose': 'Movement Purpose',
  'serviceVehicleMovementM2c.contactName': 'Contact Name',
  'serviceVehicleMovementM2c.contactMobileNumber': 'Contact Mobile Number',
  'serviceVehicleMovementM2c.merchant': 'Merchant',
  'serviceVehicleMovementM2c.transferTomerchant':
    'Transfer to Another Vehicle Service Company',
  'serviceVehicleMovementM2c.version': 'Version',
  'serviceVehicleMovementM2c.addServiceVehicleMovementM2cChecklistResult':
    'Add Service Vehicle Movement M2c Checklist Result',
  'serviceVehicleMovementM2c.removeServiceVehicleMovementM2cChecklistResult':
    'Remove Service Vehicle Movement M2c Checklist Result',
  'serviceVehicleMovementM2c.updateServiceVehicleMovementM2cChecklistResult':
    'Update Service Vehicle Movement M2c Checklist Result',
  'serviceVehicleMovementM2c.copyServiceVehicleMovementM2cChecklistResultFrom':
    'Copy Service Vehicle Movement M2c Checklist Result',

  serviceVehicleMovementM2cChecklistResult:
    'Service Vehicle Movement M2c Checklist Result',
  'serviceVehicleMovementM2cChecklistResult.id': 'Id',
  'serviceVehicleMovementM2cChecklistResult.service': 'Service',
  'serviceVehicleMovementM2cChecklistResult.transferToservice':
    'Transfer to Another Service Vehicle Movement M2c',
  'serviceVehicleMovementM2cChecklistResult.checkResult': 'Check Result',
  'serviceVehicleMovementM2cChecklistResult.checkResultComments':
    'Check Result Comments',
  'serviceVehicleMovementM2cChecklistResult.createTime': 'Create Time',
  'serviceVehicleMovementM2cChecklistResult.image1': 'Image 1',
  'serviceVehicleMovementM2cChecklistResult.image2': 'Image 2',
  'serviceVehicleMovementM2cChecklistResult.image3': 'Image 3',
  'serviceVehicleMovementM2cChecklistResult.image4': 'Image 4',
  'serviceVehicleMovementM2cChecklistResult.image5': 'Image 5',
  'serviceVehicleMovementM2cChecklistResult.version': 'Version',

  serviceFileMovementC2m: 'Service File Movement C2m',
  'serviceFileMovementC2m.id': 'Id',
  'serviceFileMovementC2m.serviceStatus': 'Service Status',
  'serviceFileMovementC2m.responsibleWorker': 'Responsible Worker',
  'serviceFileMovementC2m.transferToresponsibleWorker':
    'Transfer to Another Vehicle Service Company Employee',
  'serviceFileMovementC2m.rejectComments': 'Reject Comments',
  'serviceFileMovementC2m.rejectEvidence1': 'Reject Evidence 1',
  'serviceFileMovementC2m.rejectEvidence2': 'Reject Evidence 2',
  'serviceFileMovementC2m.rejectEvidence3': 'Reject Evidence 3',
  'serviceFileMovementC2m.rejectEvidence4': 'Reject Evidence 4',
  'serviceFileMovementC2m.rejectEvidence5': 'Reject Evidence 5',
  'serviceFileMovementC2m.startTime': 'Start Time',
  'serviceFileMovementC2m.lastLocation': 'Last Location',
  'serviceFileMovementC2m.lastUpdateTime': 'Last Update Time',
  'serviceFileMovementC2m.mainOrder': 'Main Order',
  'serviceFileMovementC2m.transferTomainOrder':
    'Transfer to Another Vehicle Inspection Order',
  'serviceFileMovementC2m.movementPurpose': 'Movement Purpose',
  'serviceFileMovementC2m.contactName': 'Contact Name',
  'serviceFileMovementC2m.contactMobileNumber': 'Contact Mobile Number',
  'serviceFileMovementC2m.merchant': 'Merchant',
  'serviceFileMovementC2m.transferTomerchant':
    'Transfer to Another Vehicle Service Company',
  'serviceFileMovementC2m.version': 'Version',
  'serviceFileMovementC2m.addServiceFileMovementC2mChecklistResult':
    'Add Service File Movement C2m Checklist Result',
  'serviceFileMovementC2m.removeServiceFileMovementC2mChecklistResult':
    'Remove Service File Movement C2m Checklist Result',
  'serviceFileMovementC2m.updateServiceFileMovementC2mChecklistResult':
    'Update Service File Movement C2m Checklist Result',
  'serviceFileMovementC2m.copyServiceFileMovementC2mChecklistResultFrom':
    'Copy Service File Movement C2m Checklist Result',

  serviceFileMovementC2mChecklistResult:
    'Service File Movement C2m Checklist Result',
  'serviceFileMovementC2mChecklistResult.id': 'Id',
  'serviceFileMovementC2mChecklistResult.service': 'Service',
  'serviceFileMovementC2mChecklistResult.transferToservice':
    'Transfer to Another Service File Movement C2m',
  'serviceFileMovementC2mChecklistResult.checkResult': 'Check Result',
  'serviceFileMovementC2mChecklistResult.checkResultComments':
    'Check Result Comments',
  'serviceFileMovementC2mChecklistResult.createTime': 'Create Time',
  'serviceFileMovementC2mChecklistResult.image1': 'Image 1',
  'serviceFileMovementC2mChecklistResult.image2': 'Image 2',
  'serviceFileMovementC2mChecklistResult.image3': 'Image 3',
  'serviceFileMovementC2mChecklistResult.image4': 'Image 4',
  'serviceFileMovementC2mChecklistResult.image5': 'Image 5',
  'serviceFileMovementC2mChecklistResult.version': 'Version',

  serviceFileMovementM2m: 'Service File Movement M2m',
  'serviceFileMovementM2m.id': 'Id',
  'serviceFileMovementM2m.serviceStatus': 'Service Status',
  'serviceFileMovementM2m.responsibleWorker': 'Responsible Worker',
  'serviceFileMovementM2m.transferToresponsibleWorker':
    'Transfer to Another Vehicle Service Company Employee',
  'serviceFileMovementM2m.rejectComments': 'Reject Comments',
  'serviceFileMovementM2m.rejectEvidence1': 'Reject Evidence 1',
  'serviceFileMovementM2m.rejectEvidence2': 'Reject Evidence 2',
  'serviceFileMovementM2m.rejectEvidence3': 'Reject Evidence 3',
  'serviceFileMovementM2m.rejectEvidence4': 'Reject Evidence 4',
  'serviceFileMovementM2m.rejectEvidence5': 'Reject Evidence 5',
  'serviceFileMovementM2m.startTime': 'Start Time',
  'serviceFileMovementM2m.lastLocation': 'Last Location',
  'serviceFileMovementM2m.lastUpdateTime': 'Last Update Time',
  'serviceFileMovementM2m.mainOrder': 'Main Order',
  'serviceFileMovementM2m.transferTomainOrder':
    'Transfer to Another Vehicle Inspection Order',
  'serviceFileMovementM2m.movementPurpose': 'Movement Purpose',
  'serviceFileMovementM2m.sender': 'Sender',
  'serviceFileMovementM2m.transferTosender':
    'Transfer to Another Vehicle Service Company Employee',
  'serviceFileMovementM2m.receiver': 'Receiver',
  'serviceFileMovementM2m.transferToreceiver':
    'Transfer to Another Vehicle Service Company Employee',
  'serviceFileMovementM2m.version': 'Version',
  'serviceFileMovementM2m.addServiceFileMovementM2mChecklistResult':
    'Add Service File Movement M2m Checklist Result',
  'serviceFileMovementM2m.removeServiceFileMovementM2mChecklistResult':
    'Remove Service File Movement M2m Checklist Result',
  'serviceFileMovementM2m.updateServiceFileMovementM2mChecklistResult':
    'Update Service File Movement M2m Checklist Result',
  'serviceFileMovementM2m.copyServiceFileMovementM2mChecklistResultFrom':
    'Copy Service File Movement M2m Checklist Result',

  serviceFileMovementM2mChecklistResult:
    'Service File Movement M2m Checklist Result',
  'serviceFileMovementM2mChecklistResult.id': 'Id',
  'serviceFileMovementM2mChecklistResult.service': 'Service',
  'serviceFileMovementM2mChecklistResult.transferToservice':
    'Transfer to Another Service File Movement M2m',
  'serviceFileMovementM2mChecklistResult.checkResult': 'Check Result',
  'serviceFileMovementM2mChecklistResult.checkResultComments':
    'Check Result Comments',
  'serviceFileMovementM2mChecklistResult.createTime': 'Create Time',
  'serviceFileMovementM2mChecklistResult.image1': 'Image 1',
  'serviceFileMovementM2mChecklistResult.image2': 'Image 2',
  'serviceFileMovementM2mChecklistResult.image3': 'Image 3',
  'serviceFileMovementM2mChecklistResult.image4': 'Image 4',
  'serviceFileMovementM2mChecklistResult.image5': 'Image 5',
  'serviceFileMovementM2mChecklistResult.version': 'Version',

  serviceFileMovementM2c: 'Service File Movement M2c',
  'serviceFileMovementM2c.id': 'Id',
  'serviceFileMovementM2c.serviceStatus': 'Service Status',
  'serviceFileMovementM2c.responsibleWorker': 'Responsible Worker',
  'serviceFileMovementM2c.transferToresponsibleWorker':
    'Transfer to Another Vehicle Service Company Employee',
  'serviceFileMovementM2c.rejectComments': 'Reject Comments',
  'serviceFileMovementM2c.rejectEvidence1': 'Reject Evidence 1',
  'serviceFileMovementM2c.rejectEvidence2': 'Reject Evidence 2',
  'serviceFileMovementM2c.rejectEvidence3': 'Reject Evidence 3',
  'serviceFileMovementM2c.rejectEvidence4': 'Reject Evidence 4',
  'serviceFileMovementM2c.rejectEvidence5': 'Reject Evidence 5',
  'serviceFileMovementM2c.startTime': 'Start Time',
  'serviceFileMovementM2c.lastLocation': 'Last Location',
  'serviceFileMovementM2c.lastUpdateTime': 'Last Update Time',
  'serviceFileMovementM2c.mainOrder': 'Main Order',
  'serviceFileMovementM2c.transferTomainOrder':
    'Transfer to Another Vehicle Inspection Order',
  'serviceFileMovementM2c.movementPurpose': 'Movement Purpose',
  'serviceFileMovementM2c.contactName': 'Contact Name',
  'serviceFileMovementM2c.contactMobileNumber': 'Contact Mobile Number',
  'serviceFileMovementM2c.merchant': 'Merchant',
  'serviceFileMovementM2c.transferTomerchant':
    'Transfer to Another Vehicle Service Company',
  'serviceFileMovementM2c.version': 'Version',
  'serviceFileMovementM2c.addServiceFileMovementM2cChecklistResult':
    'Add Service File Movement M2c Checklist Result',
  'serviceFileMovementM2c.removeServiceFileMovementM2cChecklistResult':
    'Remove Service File Movement M2c Checklist Result',
  'serviceFileMovementM2c.updateServiceFileMovementM2cChecklistResult':
    'Update Service File Movement M2c Checklist Result',
  'serviceFileMovementM2c.copyServiceFileMovementM2cChecklistResultFrom':
    'Copy Service File Movement M2c Checklist Result',

  serviceFileMovementM2cChecklistResult:
    'Service File Movement M2c Checklist Result',
  'serviceFileMovementM2cChecklistResult.id': 'Id',
  'serviceFileMovementM2cChecklistResult.service': 'Service',
  'serviceFileMovementM2cChecklistResult.transferToservice':
    'Transfer to Another Service File Movement M2c',
  'serviceFileMovementM2cChecklistResult.checkResult': 'Check Result',
  'serviceFileMovementM2cChecklistResult.checkResultComments':
    'Check Result Comments',
  'serviceFileMovementM2cChecklistResult.createTime': 'Create Time',
  'serviceFileMovementM2cChecklistResult.image1': 'Image 1',
  'serviceFileMovementM2cChecklistResult.image2': 'Image 2',
  'serviceFileMovementM2cChecklistResult.image3': 'Image 3',
  'serviceFileMovementM2cChecklistResult.image4': 'Image 4',
  'serviceFileMovementM2cChecklistResult.image5': 'Image 5',
  'serviceFileMovementM2cChecklistResult.version': 'Version',

  serviceInsuranceForInspection: 'Service Insurance For Inspection',
  'serviceInsuranceForInspection.id': 'Id',
  'serviceInsuranceForInspection.serviceStatus': 'Service Status',
  'serviceInsuranceForInspection.orderedInsurance': 'Ordered Insurance',
  'serviceInsuranceForInspection.transferToorderedInsurance':
    'Transfer to Another Available Insurance',
  'serviceInsuranceForInspection.responsibleWorker': 'Responsible Worker',
  'serviceInsuranceForInspection.transferToresponsibleWorker':
    'Transfer to Another Vehicle Service Company Employee',
  'serviceInsuranceForInspection.serviceComments': 'Service Comments',
  'serviceInsuranceForInspection.startTime': 'Start Time',
  'serviceInsuranceForInspection.lastUpdateTime': 'Last Update Time',
  'serviceInsuranceForInspection.insuranceNumber': 'Insurance Number',
  'serviceInsuranceForInspection.insuranceImage1': 'Insurance Image 1',
  'serviceInsuranceForInspection.insuranceImage2': 'Insurance Image 2',
  'serviceInsuranceForInspection.insuranceImage3': 'Insurance Image 3',
  'serviceInsuranceForInspection.insuranceImage4': 'Insurance Image 4',
  'serviceInsuranceForInspection.insuranceImage5': 'Insurance Image 5',
  'serviceInsuranceForInspection.mainOrder': 'Main Order',
  'serviceInsuranceForInspection.transferTomainOrder':
    'Transfer to Another Vehicle Inspection Order',
  'serviceInsuranceForInspection.version': 'Version',

  serviceVehicleInspection: 'Service Vehicle Inspection',
  'serviceVehicleInspection.id': 'Id',
  'serviceVehicleInspection.serviceStatus': 'Service Status',
  'serviceVehicleInspection.responsibleWorker': 'Responsible Worker',
  'serviceVehicleInspection.transferToresponsibleWorker':
    'Transfer to Another Vehicle Service Company Employee',
  'serviceVehicleInspection.inspectionStation': 'Inspection Station',
  'serviceVehicleInspection.transferToinspectionStation':
    'Transfer to Another Inspection Station',
  'serviceVehicleInspection.inspectionResult': 'Inspection Result',
  'serviceVehicleInspection.startTime': 'Start Time',
  'serviceVehicleInspection.lastLocation': 'Last Location',
  'serviceVehicleInspection.lastUpdateTime': 'Last Update Time',
  'serviceVehicleInspection.reportImage1': 'Report Image 1',
  'serviceVehicleInspection.reportImage2': 'Report Image 2',
  'serviceVehicleInspection.reportImage3': 'Report Image 3',
  'serviceVehicleInspection.reportImage4': 'Report Image 4',
  'serviceVehicleInspection.reportImage5': 'Report Image 5',
  'serviceVehicleInspection.mainOrder': 'Main Order',
  'serviceVehicleInspection.transferTomainOrder':
    'Transfer to Another Vehicle Inspection Order',
  'serviceVehicleInspection.version': 'Version',

  serviceFileInspection: 'Service File Inspection',
  'serviceFileInspection.id': 'Id',
  'serviceFileInspection.serviceStatus': 'Service Status',
  'serviceFileInspection.responsibleWorker': 'Responsible Worker',
  'serviceFileInspection.transferToresponsibleWorker':
    'Transfer to Another Vehicle Service Company Employee',
  'serviceFileInspection.inspectionStation': 'Inspection Station',
  'serviceFileInspection.transferToinspectionStation':
    'Transfer to Another Inspection Station',
  'serviceFileInspection.inspectionResult': 'Inspection Result',
  'serviceFileInspection.startTime': 'Start Time',
  'serviceFileInspection.lastLocation': 'Last Location',
  'serviceFileInspection.lastUpdateTime': 'Last Update Time',
  'serviceFileInspection.reportImage1': 'Report Image 1',
  'serviceFileInspection.reportImage2': 'Report Image 2',
  'serviceFileInspection.reportImage3': 'Report Image 3',
  'serviceFileInspection.reportImage4': 'Report Image 4',
  'serviceFileInspection.reportImage5': 'Report Image 5',
  'serviceFileInspection.mainOrder': 'Main Order',
  'serviceFileInspection.transferTomainOrder':
    'Transfer to Another Vehicle Inspection Order',
  'serviceFileInspection.version': 'Version',

  serviceVehicleRepairing: 'Service Vehicle Repairing',
  'serviceVehicleRepairing.id': 'Id',
  'serviceVehicleRepairing.serviceStatus': 'Service Status',
  'serviceVehicleRepairing.responsibleWorker': 'Responsible Worker',
  'serviceVehicleRepairing.transferToresponsibleWorker':
    'Transfer to Another Vehicle Service Company Employee',
  'serviceVehicleRepairing.rejectComments': 'Reject Comments',
  'serviceVehicleRepairing.startTime': 'Start Time',
  'serviceVehicleRepairing.lastLocation': 'Last Location',
  'serviceVehicleRepairing.lastUpdateTime': 'Last Update Time',
  'serviceVehicleRepairing.mainOrder': 'Main Order',
  'serviceVehicleRepairing.transferTomainOrder':
    'Transfer to Another Vehicle Inspection Order',
  'serviceVehicleRepairing.version': 'Version',
  'serviceVehicleRepairing.addRepairingQuotation': 'Add Repairing Quotation',
  'serviceVehicleRepairing.removeRepairingQuotation':
    'Remove Repairing Quotation',
  'serviceVehicleRepairing.updateRepairingQuotation':
    'Update Repairing Quotation',
  'serviceVehicleRepairing.copyRepairingQuotationFrom':
    'Copy Repairing Quotation',

  repairingQuotation: 'Repairing Quotation',
  'repairingQuotation.id': 'Id',
  'repairingQuotation.repairingQuotationDescription':
    'Repairing Quotation Description',
  'repairingQuotation.service': 'Service',
  'repairingQuotation.transferToservice':
    'Transfer to Another Service Vehicle Repairing',
  'repairingQuotation.version': 'Version',
  'repairingQuotation.addRepairingQuotationItem':
    'Add Repairing Quotation Item',
  'repairingQuotation.removeRepairingQuotationItem':
    'Remove Repairing Quotation Item',
  'repairingQuotation.updateRepairingQuotationItem':
    'Update Repairing Quotation Item',
  'repairingQuotation.copyRepairingQuotationItemFrom':
    'Copy Repairing Quotation Item',
  'repairingQuotation.addVehicleRepairingPayment':
    'Add Vehicle Repairing Payment',
  'repairingQuotation.removeVehicleRepairingPayment':
    'Remove Vehicle Repairing Payment',
  'repairingQuotation.updateVehicleRepairingPayment':
    'Update Vehicle Repairing Payment',
  'repairingQuotation.copyVehicleRepairingPaymentFrom':
    'Copy Vehicle Repairing Payment',

  repairingQuotationItem: 'Repairing Quotation Item',
  'repairingQuotationItem.id': 'Id',
  'repairingQuotationItem.repairingItemType': 'Repairing Item Type',
  'repairingQuotationItem.transferTorepairingItemType':
    'Transfer to Another Vehicle Repairing Allowance',
  'repairingQuotationItem.repairingItemName': 'Repairing Item Name',
  'repairingQuotationItem.repairingItemDescription':
    'Repairing Item Description',
  'repairingQuotationItem.repairingItemPrice': 'Repairing Item Price',
  'repairingQuotationItem.repairingQuotation': 'Repairing Quotation',
  'repairingQuotationItem.transferTorepairingQuotation':
    'Transfer to Another Repairing Quotation',
  'repairingQuotationItem.repairingItemImage1': 'Repairing Item Image 1',
  'repairingQuotationItem.repairingItemImage2': 'Repairing Item Image 2',
  'repairingQuotationItem.repairingItemImage3': 'Repairing Item Image 3',
  'repairingQuotationItem.repairingItemImage4': 'Repairing Item Image 4',
  'repairingQuotationItem.repairingItemImage5': 'Repairing Item Image 5',
  'repairingQuotationItem.version': 'Version',

  vehicleRepairingPayment: 'Vehicle Repairing Payment',
  'vehicleRepairingPayment.id': 'Id',
  'vehicleRepairingPayment.repairingOrderTotalAmount':
    'Repairing Order Total Amount',
  'vehicleRepairingPayment.paymentStatus': 'Payment Status',
  'vehicleRepairingPayment.paymentMethod': 'Payment Method',
  'vehicleRepairingPayment.repairingQuotation': 'Repairing Quotation',
  'vehicleRepairingPayment.transferTorepairingQuotation':
    'Transfer to Another Repairing Quotation',
  'vehicleRepairingPayment.version': 'Version',

  userDomain: 'User Domain',
  'userDomain.id': 'Id',
  'userDomain.name': 'Name',
  'userDomain.version': 'Version',
  'userDomain.addSecUser': 'Add Sec User',
  'userDomain.removeSecUser': 'Remove Sec User',
  'userDomain.updateSecUser': 'Update Sec User',
  'userDomain.copySecUserFrom': 'Copy Sec User',

  secUser: 'Sec User',
  'secUser.id': 'Id',
  'secUser.login': 'Login',
  'secUser.mobile': 'Mobile',
  'secUser.email': 'Email',
  'secUser.pwd': 'Pwd',
  'secUser.verificationCode': 'Verification Code',
  'secUser.verificationCodeExpire': 'Verification Code Expire',
  'secUser.lastLoginTime': 'Last Login Time',
  'secUser.domain': 'Domain',
  'secUser.transferTodomain': 'Transfer to Another User Domain',
  'secUser.blocking': 'Blocking',
  'secUser.block': 'Block',
  'secUser.currentStatus': 'Current Status',
  'secUser.version': 'Version',
  'secUser.addCustomer': 'Add Customer',
  'secUser.removeCustomer': 'Remove Customer',
  'secUser.updateCustomer': 'Update Customer',
  'secUser.copyCustomerFrom': 'Copy Customer',
  'secUser.addUserApp': 'Add User App',
  'secUser.removeUserApp': 'Remove User App',
  'secUser.updateUserApp': 'Update User App',
  'secUser.copyUserAppFrom': 'Copy User App',
  'secUser.addLoginHistory': 'Add Login History',
  'secUser.removeLoginHistory': 'Remove Login History',
  'secUser.updateLoginHistory': 'Update Login History',
  'secUser.copyLoginHistoryFrom': 'Copy Login History',

  secUserBlocking: 'Sec User Blocking',
  'secUserBlocking.id': 'Id',
  'secUserBlocking.who': 'Who',
  'secUserBlocking.blockTime': 'Block Time',
  'secUserBlocking.comments': 'Comments',
  'secUserBlocking.version': 'Version',
  'secUserBlocking.addSecUser': 'Add Sec User',
  'secUserBlocking.removeSecUser': 'Remove Sec User',
  'secUserBlocking.updateSecUser': 'Update Sec User',
  'secUserBlocking.copySecUserFrom': 'Copy Sec User',

  userApp: 'User App',
  'userApp.id': 'Id',
  'userApp.title': 'Title',
  'userApp.secUser': 'Sec User',
  'userApp.transferTosecUser': 'Transfer to Another Sec User',
  'userApp.appIcon': 'App Icon',
  'userApp.fullAccess': 'Full Access',
  'userApp.permission': 'Permission',
  'userApp.objectType': 'Object Type',
  'userApp.objectId': 'Object Id',
  'userApp.location': 'Location',
  'userApp.version': 'Version',
  'userApp.addObjectAccess': 'Add Object Access',
  'userApp.removeObjectAccess': 'Remove Object Access',
  'userApp.updateObjectAccess': 'Update Object Access',
  'userApp.copyObjectAccessFrom': 'Copy Object Access',

  objectAccess: 'Object Access',
  'objectAccess.id': 'Id',
  'objectAccess.displayName': 'Display Name',
  'objectAccess.objectType': 'Object Type',
  'objectAccess.list1': 'List1',
  'objectAccess.list2': 'List2',
  'objectAccess.list3': 'List3',
  'objectAccess.list4': 'List4',
  'objectAccess.list5': 'List5',
  'objectAccess.list6': 'List6',
  'objectAccess.list7': 'List7',
  'objectAccess.list8': 'List8',
  'objectAccess.list9': 'List9',
  'objectAccess.app': 'App',
  'objectAccess.transferToapp': 'Transfer to Another User App',
  'objectAccess.version': 'Version',

  loginHistory: 'Login History',
  'loginHistory.id': 'Id',
  'loginHistory.loginTime': 'Login Time',
  'loginHistory.fromIp': 'From Ip',
  'loginHistory.description': 'Description',
  'loginHistory.secUser': 'Sec User',
  'loginHistory.transferTosecUser': 'Transfer to Another Sec User',
  'loginHistory.version': 'Version',

  genericForm: 'Generic Form',
  'genericForm.id': 'Id',
  'genericForm.title': 'Title',
  'genericForm.description': 'Description',
  'genericForm.version': 'Version',
  'genericForm.addFormMessage': 'Add Form Message',
  'genericForm.removeFormMessage': 'Remove Form Message',
  'genericForm.updateFormMessage': 'Update Form Message',
  'genericForm.copyFormMessageFrom': 'Copy Form Message',
  'genericForm.addFormFieldMessage': 'Add Form Field Message',
  'genericForm.removeFormFieldMessage': 'Remove Form Field Message',
  'genericForm.updateFormFieldMessage': 'Update Form Field Message',
  'genericForm.copyFormFieldMessageFrom': 'Copy Form Field Message',
  'genericForm.addFormField': 'Add Form Field',
  'genericForm.removeFormField': 'Remove Form Field',
  'genericForm.updateFormField': 'Update Form Field',
  'genericForm.copyFormFieldFrom': 'Copy Form Field',
  'genericForm.addFormAction': 'Add Form Action',
  'genericForm.removeFormAction': 'Remove Form Action',
  'genericForm.updateFormAction': 'Update Form Action',
  'genericForm.copyFormActionFrom': 'Copy Form Action',

  formMessage: 'Form Message',
  'formMessage.id': 'Id',
  'formMessage.title': 'Title',
  'formMessage.form': 'Form',
  'formMessage.transferToform': 'Transfer to Another Generic Form',
  'formMessage.level': 'Level',
  'formMessage.version': 'Version',

  formFieldMessage: 'Form Field Message',
  'formFieldMessage.id': 'Id',
  'formFieldMessage.title': 'Title',
  'formFieldMessage.parameterName': 'Parameter Name',
  'formFieldMessage.form': 'Form',
  'formFieldMessage.transferToform': 'Transfer to Another Generic Form',
  'formFieldMessage.level': 'Level',
  'formFieldMessage.version': 'Version',

  formField: 'Form Field',
  'formField.id': 'Id',
  'formField.label': 'Label',
  'formField.localeKey': 'Locale Key',
  'formField.parameterName': 'Parameter Name',
  'formField.type': 'Type',
  'formField.form': 'Form',
  'formField.transferToform': 'Transfer to Another Generic Form',
  'formField.placeholder': 'Placeholder',
  'formField.defaultValue': 'Default Value',
  'formField.description': 'Description',
  'formField.fieldGroup': 'Field Group',
  'formField.minValue': 'Min Value',
  'formField.maxValue': 'Max Value',
  'formField.required': 'Required',
  'formField.version': 'Version',

  formAction: 'Form Action',
  'formAction.id': 'Id',
  'formAction.label': 'Label',
  'formAction.localeKey': 'Locale Key',
  'formAction.url': 'Url',
  'formAction.form': 'Form',
  'formAction.transferToform': 'Transfer to Another Generic Form',
  'formAction.version': 'Version',

  SYSTEMNAME: 'Car Inspection Service System',
}

export default messages
/*
@summary=Summary
@delete=Delete
@action=Action
@not_found=Not Found
@qr_code=QR Code
@qr_scan_to_continue=Scan QR Code to Continue
@word_space=\u0020
@copy=Copy
@system_name=Car Inspection Service System
@view=View
@create=Create
@update=Update
@home_page=Home Page
@message=Message
@account=Account
@me=Me
@id=Id
@log_out=Log Out
@cancel=Cancel
@confirm=Confirm
STRING_NOT_ALLOW_TO_BE_NULL=The string for {0} is not allowed to be null.
STRING_NOT_FIXED_LENGTH=The string {1} for {0} need to be a fixed length string with length {2}.
STRING_TOO_LONG=The length {4} of string {1} for {0} is too long, the max allowed length is {3}.
STRING_TOO_SHORT=The length {4} of string {1} for {0} for {0} is too short, the minimal length allowed  is {2}.
CHINA_MOBILE_NOT_ALLOW_TO_BE_NULL=The mobile phone number for {0} from China is not allowed to be empty.
CHINA_MOBILE_NOT_FIXED_LENGTH=The mobile phone number {1} for {0} is not a fixed length string, the length should be 11.
CHINA_MOBILE_FORMAT_ISSUE=The mobile phone number {1} for {0} must start with 13, 15, 17, 18 or 199.
CHINA_MOBILE_CONTAIN_INVALID_CHAR=The mobile phone number {1} for {0} has invalid char ''{4}''.
DATE_NOT_ALLOWED_TO_BE_NULL=The date for {0} is not allowed to be empty.
DATE_BEFORE_START=The date {1} for {0} is before the start date {2}.
DATE_AFTER_END=The date {1} for {0} is after the end date {3}.
NUMBER_GREATER_THAN_MAX=The number {1} for {0} is great the max allowed value {3}.
NUMBER_LESS_THAN_MIN=The number {1} for {0} is less the minimal allowed value {2}.
INTEGER_GREATER_THAN_MAX=The number {1} for {0} is great the max allowed value {3}.
INTEGER_LESS_THAN_MIN=The number {1} for {0} is less the minimal allowed value {2}.
MONEY_UNSUPPORT_PRECISION=The money value {1} for {0} should be a two fixed point value, please fix.

*/
