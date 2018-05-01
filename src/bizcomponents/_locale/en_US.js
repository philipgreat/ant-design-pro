const messages = {
  message: 'Message',
  carInspectionPlatform: 'Car Inspection Platform',
  'carInspectionPlatform.id': 'Id',
  'carInspectionPlatform.name': 'Name',
  'carInspectionPlatform.description': 'Description',
  'carInspectionPlatform.insuranceContactName': 'Insurance Contact Name',
  'carInspectionPlatform.insuranceContactMobile': 'Insurance Contact Mobile',
  'carInspectionPlatform.version': 'Version',
  'carInspectionPlatform.addProvince': 'Add Province',
  'carInspectionPlatform.removeProvince': 'Remove Province',
  'carInspectionPlatform.updateProvince': 'Update Province',
  'carInspectionPlatform.copyProvinceFrom': 'Copy Province',
  'carInspectionPlatform.addAvailableProduct': 'Add Available Product',
  'carInspectionPlatform.removeAvailableProduct': 'Remove Available Product',
  'carInspectionPlatform.updateAvailableProduct': 'Update Available Product',
  'carInspectionPlatform.copyAvailableProductFrom': 'Copy Available Product',
  'carInspectionPlatform.addAvailableVehicleType': 'Add Available Vehicle Type',
  'carInspectionPlatform.removeAvailableVehicleType':
    'Remove Available Vehicle Type',
  'carInspectionPlatform.updateAvailableVehicleType':
    'Update Available Vehicle Type',
  'carInspectionPlatform.copyAvailableVehicleTypeFrom':
    'Copy Available Vehicle Type',
  'carInspectionPlatform.addAvailableVehicleUseCharacter':
    'Add Available Vehicle Use Character',
  'carInspectionPlatform.removeAvailableVehicleUseCharacter':
    'Remove Available Vehicle Use Character',
  'carInspectionPlatform.updateAvailableVehicleUseCharacter':
    'Update Available Vehicle Use Character',
  'carInspectionPlatform.copyAvailableVehicleUseCharacterFrom':
    'Copy Available Vehicle Use Character',
  'carInspectionPlatform.addContract': 'Add Contract',
  'carInspectionPlatform.removeContract': 'Remove Contract',
  'carInspectionPlatform.updateContract': 'Update Contract',
  'carInspectionPlatform.copyContractFrom': 'Copy Contract',
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
  'carInspectionPlatform.addAvailableReviewItem': 'Add Available Review Item',
  'carInspectionPlatform.removeAvailableReviewItem':
    'Remove Available Review Item',
  'carInspectionPlatform.updateAvailableReviewItem':
    'Update Available Review Item',
  'carInspectionPlatform.copyAvailableReviewItemFrom':
    'Copy Available Review Item',
  'carInspectionPlatform.addAvailableRatingItem': 'Add Available Rating Item',
  'carInspectionPlatform.removeAvailableRatingItem':
    'Remove Available Rating Item',
  'carInspectionPlatform.updateAvailableRatingItem':
    'Update Available Rating Item',
  'carInspectionPlatform.copyAvailableRatingItemFrom':
    'Copy Available Rating Item',
  'carInspectionPlatform.addPreorderPromotion': 'Add Preorder Promotion',
  'carInspectionPlatform.removePreorderPromotion': 'Remove Preorder Promotion',
  'carInspectionPlatform.updatePreorderPromotion': 'Update Preorder Promotion',
  'carInspectionPlatform.copyPreorderPromotionFrom': 'Copy Preorder Promotion',
  'carInspectionPlatform.addOrderDiscountCoupon': 'Add Order Discount Coupon',
  'carInspectionPlatform.removeOrderDiscountCoupon':
    'Remove Order Discount Coupon',
  'carInspectionPlatform.updateOrderDiscountCoupon':
    'Update Order Discount Coupon',
  'carInspectionPlatform.copyOrderDiscountCouponFrom':
    'Copy Order Discount Coupon',
  'carInspectionPlatform.addAccount': 'Add Account',
  'carInspectionPlatform.removeAccount': 'Remove Account',
  'carInspectionPlatform.updateAccount': 'Update Account',
  'carInspectionPlatform.copyAccountFrom': 'Copy Account',

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
  'availableProduct.addServicePrice': 'Add Service Price',
  'availableProduct.removeServicePrice': 'Remove Service Price',
  'availableProduct.updateServicePrice': 'Update Service Price',
  'availableProduct.copyServicePriceFrom': 'Copy Service Price',
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
  'availableProduct.addPreorderPromotion': 'Add Preorder Promotion',
  'availableProduct.removePreorderPromotion': 'Remove Preorder Promotion',
  'availableProduct.updatePreorderPromotion': 'Update Preorder Promotion',
  'availableProduct.copyPreorderPromotionFrom': 'Copy Preorder Promotion',

  availableVehicleType: 'Available Vehicle Type',
  'availableVehicleType.id': 'Id',
  'availableVehicleType.vehicleType': 'Vehicle Type',
  'availableVehicleType.vehicleTypeAlias': 'Vehicle Type Alias',
  'availableVehicleType.canPlaceOrder': 'Can Place Order',
  'availableVehicleType.canDoExempt': 'Can Do Exempt',
  'availableVehicleType.platform': 'Platform',
  'availableVehicleType.transferToplatform':
    'Transfer to Another Car Inspection Platform',
  'availableVehicleType.version': 'Version',

  availableVehicleUseCharacter: 'Available Vehicle Use Character',
  'availableVehicleUseCharacter.id': 'Id',
  'availableVehicleUseCharacter.name': 'Name',
  'availableVehicleUseCharacter.aliasName': 'Alias Name',
  'availableVehicleUseCharacter.canDoExempt': 'Can Do Exempt',
  'availableVehicleUseCharacter.commercialVehicle': 'Commercial Vehicle',
  'availableVehicleUseCharacter.platform': 'Platform',
  'availableVehicleUseCharacter.transferToplatform':
    'Transfer to Another Car Inspection Platform',
  'availableVehicleUseCharacter.version': 'Version',

  contract: 'Contract',
  'contract.id': 'Id',
  'contract.platform': 'Platform',
  'contract.transferToplatform': 'Transfer to Another Car Inspection Platform',
  'contract.company': 'Company',
  'contract.transferTocompany': 'Transfer to Another Vehicle Service Company',
  'contract.startDate': 'Start Date',
  'contract.endDate': 'End Date',
  'contract.version': 'Version',
  'contract.addServicePrice': 'Add Service Price',
  'contract.removeServicePrice': 'Remove Service Price',
  'contract.updateServicePrice': 'Update Service Price',
  'contract.copyServicePriceFrom': 'Copy Service Price',

  servicePrice: 'Service Price',
  'servicePrice.id': 'Id',
  'servicePrice.contract': 'Contract',
  'servicePrice.transferTocontract': 'Transfer to Another Contract',
  'servicePrice.availableService': 'Available Service',
  'servicePrice.transferToavailableService':
    'Transfer to Another Available Service',
  'servicePrice.product': 'Product',
  'servicePrice.transferToproduct': 'Transfer to Another Available Product',
  'servicePrice.serviceKey': 'Service Key',
  'servicePrice.serviceDescription': 'Service Description',
  'servicePrice.servicePriceType': 'Service Price Type',
  'servicePrice.basePriceValue': 'Base Price Value',
  'servicePrice.otherPriceValue': 'Other Price Value',
  'servicePrice.serviceEnabled': 'Service Enabled',
  'servicePrice.version': 'Version',

  availableService: 'Available Service',
  'availableService.id': 'Id',
  'availableService.serviceName': 'Service Name',
  'availableService.serviceKey': 'Service Key',
  'availableService.serviceDescription': 'Service Description',
  'availableService.availableProduct': 'Available Product',
  'availableService.transferToavailableProduct':
    'Transfer to Another Available Product',
  'availableService.version': 'Version',
  'availableService.addServicePrice': 'Add Service Price',
  'availableService.removeServicePrice': 'Remove Service Price',
  'availableService.updateServicePrice': 'Update Service Price',
  'availableService.copyServicePriceFrom': 'Copy Service Price',
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

  productPrice: 'Product Price',
  'productPrice.id': 'Id',
  'productPrice.product': 'Product',
  'productPrice.transferToproduct': 'Transfer to Another Available Product',
  'productPrice.city': 'City',
  'productPrice.transferTocity': 'Transfer to Another City',
  'productPrice.vehicleType': 'Vehicle Type',
  'productPrice.greenVehicle': 'Green Vehicle',
  'productPrice.inspectionPrice': 'Inspection Price',
  'productPrice.secondLevelMaintenancePrice': 'Second Level Maintenance Price',
  'productPrice.gradeEstimationPrice': 'Grade Estimation Price',
  'productPrice.agentServicePrice': 'Agent Service Price',
  'productPrice.discountAgentServicePrice': 'Discount Agent Service Price',
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
  'availableHandOverItem.addHandOverChecklistResult':
    'Add Hand Over Checklist Result',
  'availableHandOverItem.removeHandOverChecklistResult':
    'Remove Hand Over Checklist Result',
  'availableHandOverItem.updateHandOverChecklistResult':
    'Update Hand Over Checklist Result',
  'availableHandOverItem.copyHandOverChecklistResultFrom':
    'Copy Hand Over Checklist Result',

  customer: 'Customer',
  'customer.id': 'Id',
  'customer.nickName': 'Nick Name',
  'customer.logoImage': 'Logo Image',
  'customer.weixinOpenid': 'Weixin Openid',
  'customer.weixinAppid': 'Weixin Appid',
  'customer.longitude': 'Longitude',
  'customer.latitude': 'Latitude',
  'customer.secUser': 'SecUser',
  'customer.transferTosecUser': 'Transfer to Another Sec User',
  'customer.platform': 'Platform',
  'customer.transferToplatform': 'Transfer to Another Car Inspection Platform',
  'customer.version': 'Version',
  'customer.addCompanyQrcodePromotionRecord':
    'Add Company Qrcode Promotion Record',
  'customer.removeCompanyQrcodePromotionRecord':
    'Remove Company Qrcode Promotion Record',
  'customer.updateCompanyQrcodePromotionRecord':
    'Update Company Qrcode Promotion Record',
  'customer.copyCompanyQrcodePromotionRecordFrom':
    'Copy Company Qrcode Promotion Record',
  'customer.addVehicleInfo': 'Add Vehicle Info',
  'customer.removeVehicleInfo': 'Remove Vehicle Info',
  'customer.updateVehicleInfo': 'Update Vehicle Info',
  'customer.copyVehicleInfoFrom': 'Copy Vehicle Info',
  'customer.addVehicleInspectionOrder': 'Add Vehicle Inspection Order',
  'customer.removeVehicleInspectionOrder': 'Remove Vehicle Inspection Order',
  'customer.updateVehicleInspectionOrder': 'Update Vehicle Inspection Order',
  'customer.copyVehicleInspectionOrderFrom': 'Copy Vehicle Inspection Order',
  'customer.addOrderDiscountCoupon': 'Add Order Discount Coupon',
  'customer.removeOrderDiscountCoupon': 'Remove Order Discount Coupon',
  'customer.updateOrderDiscountCoupon': 'Update Order Discount Coupon',
  'customer.copyOrderDiscountCouponFrom': 'Copy Order Discount Coupon',
  'customer.addVehicleInspectionOrderCoupon':
    'Add Vehicle Inspection Order Coupon',
  'customer.removeVehicleInspectionOrderCoupon':
    'Remove Vehicle Inspection Order Coupon',
  'customer.updateVehicleInspectionOrderCoupon':
    'Update Vehicle Inspection Order Coupon',
  'customer.copyVehicleInspectionOrderCouponFrom':
    'Copy Vehicle Inspection Order Coupon',

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
  'vehicleServiceCompany.canExemptProxyFee': 'Can Exempt Proxy Fee',
  'vehicleServiceCompany.contactPhone': 'Contact Phone',
  'vehicleServiceCompany.companyImage1': 'Company Image 1',
  'vehicleServiceCompany.companyImage2': 'Company Image 2',
  'vehicleServiceCompany.companyImage3': 'Company Image 3',
  'vehicleServiceCompany.companyImage4': 'Company Image 4',
  'vehicleServiceCompany.companyImage5': 'Company Image 5',
  'vehicleServiceCompany.promoteQrcodeImage': 'Promote Qrcode Image',
  'vehicleServiceCompany.orderContact': 'Order Contact',
  'vehicleServiceCompany.orderContactPhone': 'Order Contact Phone',
  'vehicleServiceCompany.platform': 'Platform',
  'vehicleServiceCompany.transferToplatform':
    'Transfer to Another Car Inspection Platform',
  'vehicleServiceCompany.version': 'Version',
  'vehicleServiceCompany.addContract': 'Add Contract',
  'vehicleServiceCompany.removeContract': 'Remove Contract',
  'vehicleServiceCompany.updateContract': 'Update Contract',
  'vehicleServiceCompany.copyContractFrom': 'Copy Contract',
  'vehicleServiceCompany.addServiceCompanyAuthenticationInfo':
    'Add Service Company Authentication Info',
  'vehicleServiceCompany.removeServiceCompanyAuthenticationInfo':
    'Remove Service Company Authentication Info',
  'vehicleServiceCompany.updateServiceCompanyAuthenticationInfo':
    'Update Service Company Authentication Info',
  'vehicleServiceCompany.copyServiceCompanyAuthenticationInfoFrom':
    'Copy Service Company Authentication Info',
  'vehicleServiceCompany.addVehicleInspectionPlateNumberPattern':
    'Add Vehicle Inspection Plate Number Pattern',
  'vehicleServiceCompany.removeVehicleInspectionPlateNumberPattern':
    'Remove Vehicle Inspection Plate Number Pattern',
  'vehicleServiceCompany.updateVehicleInspectionPlateNumberPattern':
    'Update Vehicle Inspection Plate Number Pattern',
  'vehicleServiceCompany.copyVehicleInspectionPlateNumberPatternFrom':
    'Copy Vehicle Inspection Plate Number Pattern',
  'vehicleServiceCompany.addFileInspectionPlateNumberPattern':
    'Add File Inspection Plate Number Pattern',
  'vehicleServiceCompany.removeFileInspectionPlateNumberPattern':
    'Remove File Inspection Plate Number Pattern',
  'vehicleServiceCompany.updateFileInspectionPlateNumberPattern':
    'Update File Inspection Plate Number Pattern',
  'vehicleServiceCompany.copyFileInspectionPlateNumberPatternFrom':
    'Copy File Inspection Plate Number Pattern',
  'vehicleServiceCompany.addVehicleServiceCompanyBusinessScope':
    'Add Vehicle Service Company Business Scope',
  'vehicleServiceCompany.removeVehicleServiceCompanyBusinessScope':
    'Remove Vehicle Service Company Business Scope',
  'vehicleServiceCompany.updateVehicleServiceCompanyBusinessScope':
    'Update Vehicle Service Company Business Scope',
  'vehicleServiceCompany.copyVehicleServiceCompanyBusinessScopeFrom':
    'Copy Vehicle Service Company Business Scope',
  'vehicleServiceCompany.addCompanyQrcodePromotionRecord':
    'Add Company Qrcode Promotion Record',
  'vehicleServiceCompany.removeCompanyQrcodePromotionRecord':
    'Remove Company Qrcode Promotion Record',
  'vehicleServiceCompany.updateCompanyQrcodePromotionRecord':
    'Update Company Qrcode Promotion Record',
  'vehicleServiceCompany.copyCompanyQrcodePromotionRecordFrom':
    'Copy Company Qrcode Promotion Record',
  'vehicleServiceCompany.addVehicleServiceCompanyDispatcher':
    'Add Vehicle Service Company Dispatcher',
  'vehicleServiceCompany.removeVehicleServiceCompanyDispatcher':
    'Remove Vehicle Service Company Dispatcher',
  'vehicleServiceCompany.updateVehicleServiceCompanyDispatcher':
    'Update Vehicle Service Company Dispatcher',
  'vehicleServiceCompany.copyVehicleServiceCompanyDispatcherFrom':
    'Copy Vehicle Service Company Dispatcher',
  'vehicleServiceCompany.addCompanyDiscount': 'Add Company Discount',
  'vehicleServiceCompany.removeCompanyDiscount': 'Remove Company Discount',
  'vehicleServiceCompany.updateCompanyDiscount': 'Update Company Discount',
  'vehicleServiceCompany.copyCompanyDiscountFrom': 'Copy Company Discount',
  'vehicleServiceCompany.addVehicleServiceCompanyEmployee':
    'Add Vehicle Service Company Employee',
  'vehicleServiceCompany.removeVehicleServiceCompanyEmployee':
    'Remove Vehicle Service Company Employee',
  'vehicleServiceCompany.updateVehicleServiceCompanyEmployee':
    'Update Vehicle Service Company Employee',
  'vehicleServiceCompany.copyVehicleServiceCompanyEmployeeFrom':
    'Copy Vehicle Service Company Employee',
  'vehicleServiceCompany.addVehicleInspectionOrder':
    'Add Vehicle Inspection Order',
  'vehicleServiceCompany.removeVehicleInspectionOrder':
    'Remove Vehicle Inspection Order',
  'vehicleServiceCompany.updateVehicleInspectionOrder':
    'Update Vehicle Inspection Order',
  'vehicleServiceCompany.copyVehicleInspectionOrderFrom':
    'Copy Vehicle Inspection Order',
  'vehicleServiceCompany.addServiceVehicleMovementC2m':
    'Add Service Vehicle Movement C2m',
  'vehicleServiceCompany.removeServiceVehicleMovementC2m':
    'Remove Service Vehicle Movement C2m',
  'vehicleServiceCompany.updateServiceVehicleMovementC2m':
    'Update Service Vehicle Movement C2m',
  'vehicleServiceCompany.copyServiceVehicleMovementC2mFrom':
    'Copy Service Vehicle Movement C2m',
  'vehicleServiceCompany.addServiceVehicleMovementM2m':
    'Add Service Vehicle Movement M2m',
  'vehicleServiceCompany.removeServiceVehicleMovementM2m':
    'Remove Service Vehicle Movement M2m',
  'vehicleServiceCompany.updateServiceVehicleMovementM2m':
    'Update Service Vehicle Movement M2m',
  'vehicleServiceCompany.copyServiceVehicleMovementM2mFrom':
    'Copy Service Vehicle Movement M2m',
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
  'vehicleServiceCompany.addServiceFileMovementM2m':
    'Add Service File Movement M2m',
  'vehicleServiceCompany.removeServiceFileMovementM2m':
    'Remove Service File Movement M2m',
  'vehicleServiceCompany.updateServiceFileMovementM2m':
    'Update Service File Movement M2m',
  'vehicleServiceCompany.copyServiceFileMovementM2mFrom':
    'Copy Service File Movement M2m',
  'vehicleServiceCompany.addServiceFileMovementM2c':
    'Add Service File Movement M2c',
  'vehicleServiceCompany.removeServiceFileMovementM2c':
    'Remove Service File Movement M2c',
  'vehicleServiceCompany.updateServiceFileMovementM2c':
    'Update Service File Movement M2c',
  'vehicleServiceCompany.copyServiceFileMovementM2cFrom':
    'Copy Service File Movement M2c',
  'vehicleServiceCompany.addServiceInsuranceForInspection':
    'Add Service Insurance For Inspection',
  'vehicleServiceCompany.removeServiceInsuranceForInspection':
    'Remove Service Insurance For Inspection',
  'vehicleServiceCompany.updateServiceInsuranceForInspection':
    'Update Service Insurance For Inspection',
  'vehicleServiceCompany.copyServiceInsuranceForInspectionFrom':
    'Copy Service Insurance For Inspection',
  'vehicleServiceCompany.addServiceVehicleInspection':
    'Add Service Vehicle Inspection',
  'vehicleServiceCompany.removeServiceVehicleInspection':
    'Remove Service Vehicle Inspection',
  'vehicleServiceCompany.updateServiceVehicleInspection':
    'Update Service Vehicle Inspection',
  'vehicleServiceCompany.copyServiceVehicleInspectionFrom':
    'Copy Service Vehicle Inspection',
  'vehicleServiceCompany.addServiceFileInspection':
    'Add Service File Inspection',
  'vehicleServiceCompany.removeServiceFileInspection':
    'Remove Service File Inspection',
  'vehicleServiceCompany.updateServiceFileInspection':
    'Update Service File Inspection',
  'vehicleServiceCompany.copyServiceFileInspectionFrom':
    'Copy Service File Inspection',
  'vehicleServiceCompany.addServiceVehicleRepairing':
    'Add Service Vehicle Repairing',
  'vehicleServiceCompany.removeServiceVehicleRepairing':
    'Remove Service Vehicle Repairing',
  'vehicleServiceCompany.updateServiceVehicleRepairing':
    'Update Service Vehicle Repairing',
  'vehicleServiceCompany.copyServiceVehicleRepairingFrom':
    'Copy Service Vehicle Repairing',
  'vehicleServiceCompany.addServiceCompanyAccount':
    'Add Service Company Account',
  'vehicleServiceCompany.removeServiceCompanyAccount':
    'Remove Service Company Account',
  'vehicleServiceCompany.updateServiceCompanyAccount':
    'Update Service Company Account',
  'vehicleServiceCompany.copyServiceCompanyAccountFrom':
    'Copy Service Company Account',
  'vehicleServiceCompany.addRepairingCompanyAccount':
    'Add Repairing Company Account',
  'vehicleServiceCompany.removeRepairingCompanyAccount':
    'Remove Repairing Company Account',
  'vehicleServiceCompany.updateRepairingCompanyAccount':
    'Update Repairing Company Account',
  'vehicleServiceCompany.copyRepairingCompanyAccountFrom':
    'Copy Repairing Company Account',
  'vehicleServiceCompany.addInsuranceServiceAccount':
    'Add Insurance Service Account',
  'vehicleServiceCompany.removeInsuranceServiceAccount':
    'Remove Insurance Service Account',
  'vehicleServiceCompany.updateInsuranceServiceAccount':
    'Update Insurance Service Account',
  'vehicleServiceCompany.copyInsuranceServiceAccountFrom':
    'Copy Insurance Service Account',
  'vehicleServiceCompany.addInspectionStationAccount':
    'Add Inspection Station Account',
  'vehicleServiceCompany.removeInspectionStationAccount':
    'Remove Inspection Station Account',
  'vehicleServiceCompany.updateInspectionStationAccount':
    'Update Inspection Station Account',
  'vehicleServiceCompany.copyInspectionStationAccountFrom':
    'Copy Inspection Station Account',

  serviceCompanyAuthenticationInfo: 'Service Company Authentication Info',
  'serviceCompanyAuthenticationInfo.id': 'Id',
  'serviceCompanyAuthenticationInfo.businessLicenseImg': 'Business License Img',
  'serviceCompanyAuthenticationInfo.businessLicenseCode':
    'Business License Code',
  'serviceCompanyAuthenticationInfo.serviceCompany': 'Service Company',
  'serviceCompanyAuthenticationInfo.transferToserviceCompany':
    'Transfer to Another Vehicle Service Company',
  'serviceCompanyAuthenticationInfo.version': 'Version',

  vehicleInspectionPlateNumberPattern:
    'Vehicle Inspection Plate Number Pattern',
  'vehicleInspectionPlateNumberPattern.id': 'Id',
  'vehicleInspectionPlateNumberPattern.plateNumberPattern':
    'Plate Number Pattern',
  'vehicleInspectionPlateNumberPattern.company': 'Company',
  'vehicleInspectionPlateNumberPattern.transferTocompany':
    'Transfer to Another Vehicle Service Company',
  'vehicleInspectionPlateNumberPattern.version': 'Version',

  fileInspectionPlateNumberPattern: 'File Inspection Plate Number Pattern',
  'fileInspectionPlateNumberPattern.id': 'Id',
  'fileInspectionPlateNumberPattern.plateNumberPattern': 'Plate Number Pattern',
  'fileInspectionPlateNumberPattern.company': 'Company',
  'fileInspectionPlateNumberPattern.transferTocompany':
    'Transfer to Another Vehicle Service Company',
  'fileInspectionPlateNumberPattern.version': 'Version',

  vehicleServiceCompanyBusinessScope: 'Vehicle Service Company Business Scope',
  'vehicleServiceCompanyBusinessScope.id': 'Id',
  'vehicleServiceCompanyBusinessScope.company': 'Company',
  'vehicleServiceCompanyBusinessScope.transferTocompany':
    'Transfer to Another Vehicle Service Company',
  'vehicleServiceCompanyBusinessScope.availableService': 'Available Service',
  'vehicleServiceCompanyBusinessScope.transferToavailableService':
    'Transfer to Another Available Service',
  'vehicleServiceCompanyBusinessScope.serviceAvailability':
    'Service Availability',
  'vehicleServiceCompanyBusinessScope.version': 'Version',

  companyQrcodePromotionRecord: 'Company Qrcode Promotion Record',
  'companyQrcodePromotionRecord.id': 'Id',
  'companyQrcodePromotionRecord.customer': 'Customer',
  'companyQrcodePromotionRecord.transferTocustomer':
    'Transfer to Another Customer',
  'companyQrcodePromotionRecord.company': 'Company',
  'companyQrcodePromotionRecord.transferTocompany':
    'Transfer to Another Vehicle Service Company',
  'companyQrcodePromotionRecord.createTime': 'Create Time',
  'companyQrcodePromotionRecord.version': 'Version',

  vehicleServiceCompanyDispatcher: 'Vehicle Service Company Dispatcher',
  'vehicleServiceCompanyDispatcher.id': 'Id',
  'vehicleServiceCompanyDispatcher.description': 'Description',
  'vehicleServiceCompanyDispatcher.company': 'Company',
  'vehicleServiceCompanyDispatcher.transferTocompany':
    'Transfer to Another Vehicle Service Company',
  'vehicleServiceCompanyDispatcher.version': 'Version',

  companyDiscount: 'Company Discount',
  'companyDiscount.id': 'Id',
  'companyDiscount.allFreeDiscount': 'All Free Discount',
  'companyDiscount.directDiscountValue': 'Direct Discount Value',
  'companyDiscount.company': 'Company',
  'companyDiscount.transferTocompany':
    'Transfer to Another Vehicle Service Company',
  'companyDiscount.createTime': 'Create Time',
  'companyDiscount.version': 'Version',

  vehicleServiceCompanyEmployee: 'Vehicle Service Company Employee',
  'vehicleServiceCompanyEmployee.id': 'Id',
  'vehicleServiceCompanyEmployee.employeeName': 'Employee Name',
  'vehicleServiceCompanyEmployee.profileImage': 'Profile Image',
  'vehicleServiceCompanyEmployee.companyName': 'Company Name',
  'vehicleServiceCompanyEmployee.mobileNumber': 'Mobile Number',
  'vehicleServiceCompanyEmployee.gender': 'Gender',
  'vehicleServiceCompanyEmployee.availableState': 'Available State',
  'vehicleServiceCompanyEmployee.innocentEvidenceImage':
    'Innocent Evidence Image',
  'vehicleServiceCompanyEmployee.identityCardNumber': 'Identity Card Number',
  'vehicleServiceCompanyEmployee.company': 'Company',
  'vehicleServiceCompanyEmployee.transferTocompany':
    'Transfer to Another Vehicle Service Company',
  'vehicleServiceCompanyEmployee.inspectionStation': 'Inspection Station',
  'vehicleServiceCompanyEmployee.transferToinspectionStation':
    'Transfer to Another Inspection Station',
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
  'vehicleServiceCompanyEmployee.addServiceOrderFilter':
    'Add Service Order Filter',
  'vehicleServiceCompanyEmployee.removeServiceOrderFilter':
    'Remove Service Order Filter',
  'vehicleServiceCompanyEmployee.updateServiceOrderFilter':
    'Update Service Order Filter',
  'vehicleServiceCompanyEmployee.copyServiceOrderFilterFrom':
    'Copy Service Order Filter',
  'vehicleServiceCompanyEmployee.addEmployeeDrivingLicense':
    'Add Employee Driving License',
  'vehicleServiceCompanyEmployee.removeEmployeeDrivingLicense':
    'Remove Employee Driving License',
  'vehicleServiceCompanyEmployee.updateEmployeeDrivingLicense':
    'Update Employee Driving License',
  'vehicleServiceCompanyEmployee.copyEmployeeDrivingLicenseFrom':
    'Copy Employee Driving License',
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
  'vehicleServiceCompanyEmployee.addServiceCompanyAccount':
    'Add Service Company Account',
  'vehicleServiceCompanyEmployee.removeServiceCompanyAccount':
    'Remove Service Company Account',
  'vehicleServiceCompanyEmployee.updateServiceCompanyAccount':
    'Update Service Company Account',
  'vehicleServiceCompanyEmployee.copyServiceCompanyAccountFrom':
    'Copy Service Company Account',
  'vehicleServiceCompanyEmployee.addRepairingCompanyAccount':
    'Add Repairing Company Account',
  'vehicleServiceCompanyEmployee.removeRepairingCompanyAccount':
    'Remove Repairing Company Account',
  'vehicleServiceCompanyEmployee.updateRepairingCompanyAccount':
    'Update Repairing Company Account',
  'vehicleServiceCompanyEmployee.copyRepairingCompanyAccountFrom':
    'Copy Repairing Company Account',
  'vehicleServiceCompanyEmployee.addInsuranceServiceAccount':
    'Add Insurance Service Account',
  'vehicleServiceCompanyEmployee.removeInsuranceServiceAccount':
    'Remove Insurance Service Account',
  'vehicleServiceCompanyEmployee.updateInsuranceServiceAccount':
    'Update Insurance Service Account',
  'vehicleServiceCompanyEmployee.copyInsuranceServiceAccountFrom':
    'Copy Insurance Service Account',
  'vehicleServiceCompanyEmployee.addInspectionStationAccount':
    'Add Inspection Station Account',
  'vehicleServiceCompanyEmployee.removeInspectionStationAccount':
    'Remove Inspection Station Account',
  'vehicleServiceCompanyEmployee.updateInspectionStationAccount':
    'Update Inspection Station Account',
  'vehicleServiceCompanyEmployee.copyInspectionStationAccountFrom':
    'Copy Inspection Station Account',

  serviceOrderFilter: 'Service Order Filter',
  'serviceOrderFilter.id': 'Id',
  'serviceOrderFilter.filterName': 'Filter Name',
  'serviceOrderFilter.orderCount': 'Order Count',
  'serviceOrderFilter.selected': 'Selected',
  'serviceOrderFilter.linkUrl': 'Link Url',
  'serviceOrderFilter.employee': 'Employee',
  'serviceOrderFilter.transferToemployee':
    'Transfer to Another Vehicle Service Company Employee',
  'serviceOrderFilter.version': 'Version',

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

  inspectionStation: 'Inspection Station',
  'inspectionStation.id': 'Id',
  'inspectionStation.name': 'Name',
  'inspectionStation.operatingStatus': 'Operating Status',
  'inspectionStation.addressCity': 'Address City',
  'inspectionStation.transferToaddressCity': 'Transfer to Another City',
  'inspectionStation.addressDetail': 'Address Detail',
  'inspectionStation.longitude': 'Longitude',
  'inspectionStation.latitude': 'Latitude',
  'inspectionStation.contactName': 'Contact Name',
  'inspectionStation.contactMobile': 'Contact Mobile',
  'inspectionStation.metrologyAccreditationImage':
    'Metrology Accreditation Image',
  'inspectionStation.version': 'Version',
  'inspectionStation.addVehicleServiceCompanyEmployee':
    'Add Vehicle Service Company Employee',
  'inspectionStation.removeVehicleServiceCompanyEmployee':
    'Remove Vehicle Service Company Employee',
  'inspectionStation.updateVehicleServiceCompanyEmployee':
    'Update Vehicle Service Company Employee',
  'inspectionStation.copyVehicleServiceCompanyEmployeeFrom':
    'Copy Vehicle Service Company Employee',
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
  'inspectionStation.addInspectionStationAccount':
    'Add Inspection Station Account',
  'inspectionStation.removeInspectionStationAccount':
    'Remove Inspection Station Account',
  'inspectionStation.updateInspectionStationAccount':
    'Update Inspection Station Account',
  'inspectionStation.copyInspectionStationAccountFrom':
    'Copy Inspection Station Account',

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
  'vehicleInfo.vehiclePermitImage1': 'Vehicle Permit Image 1',
  'vehicleInfo.vehiclePermitImage2': 'Vehicle Permit Image 2',
  'vehicleInfo.vehiclePermitImage3': 'Vehicle Permit Image 3',
  'vehicleInfo.vehiclePermitImage4': 'Vehicle Permit Image 4',
  'vehicleInfo.vehiclePermitImage5': 'Vehicle Permit Image 5',
  'vehicleInfo.lastUpdateTime': 'Last Update Time',
  'vehicleInfo.customer': 'Customer',
  'vehicleInfo.transferTocustomer': 'Transfer to Another Customer',
  'vehicleInfo.platform': 'Platform',
  'vehicleInfo.transferToplatform':
    'Transfer to Another Car Inspection Platform',
  'vehicleInfo.version': 'Version',

  vehicleInspectionOrder: 'Vehicle Inspection Order',
  'vehicleInspectionOrder.id': 'Id',
  'vehicleInspectionOrder.orderStatus': 'Order Status',
  'vehicleInspectionOrder.vehicleLicensePlateNumber':
    'Vehicle License Plate Number',
  'vehicleInspectionOrder.createTime': 'Create Time',
  'vehicleInspectionOrder.contactName': 'Contact Name',
  'vehicleInspectionOrder.contactMobileNumber': 'Contact Mobile Number',
  'vehicleInspectionOrder.productType': 'Product Type',
  'vehicleInspectionOrder.hasSixYearExemption': 'Has Six Year Exemption',
  'vehicleInspectionOrder.hasInspection': 'Has Inspection',
  'vehicleInspectionOrder.hasSecondLevelMaintenance':
    'Has Second Level Maintenance',
  'vehicleInspectionOrder.hasGradeEstimation': 'Has Grade Estimation',
  'vehicleInspectionOrder.merchantDiscount': 'Merchant Discount',
  'vehicleInspectionOrder.lastUpdateTime': 'Last Update Time',
  'vehicleInspectionOrder.serviceCompany': 'Service Company',
  'vehicleInspectionOrder.transferToserviceCompany':
    'Transfer to Another Vehicle Service Company',
  'vehicleInspectionOrder.serviceCompanyInfo': 'Service Company Info',
  'vehicleInspectionOrder.contactAddressDetail': 'Contact Address Detail',
  'vehicleInspectionOrder.contactAddressCity': 'Contact Address City',
  'vehicleInspectionOrder.transferTocontactAddressCity':
    'Transfer to Another City',
  'vehicleInspectionOrder.customer': 'Customer',
  'vehicleInspectionOrder.transferTocustomer': 'Transfer to Another Customer',
  'vehicleInspectionOrder.planInspectionDate': 'Plan Inspection Date',
  'vehicleInspectionOrder.trafficAccidentAnnouncement':
    'Traffic Accident Announcement',
  'vehicleInspectionOrder.engagementLetterProvided':
    'Engagement Letter Provided',
  'vehicleInspectionOrder.homePickUp': 'Home Pick Up',
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
  'vehicleInspectionOrder.addVehicleInspectionOrderCharge':
    'Add Vehicle Inspection Order Charge',
  'vehicleInspectionOrder.removeVehicleInspectionOrderCharge':
    'Remove Vehicle Inspection Order Charge',
  'vehicleInspectionOrder.updateVehicleInspectionOrderCharge':
    'Update Vehicle Inspection Order Charge',
  'vehicleInspectionOrder.copyVehicleInspectionOrderChargeFrom':
    'Copy Vehicle Inspection Order Charge',
  'vehicleInspectionOrder.addVehicleInspectionOrderServiceLog':
    'Add Vehicle Inspection Order Service Log',
  'vehicleInspectionOrder.removeVehicleInspectionOrderServiceLog':
    'Remove Vehicle Inspection Order Service Log',
  'vehicleInspectionOrder.updateVehicleInspectionOrderServiceLog':
    'Update Vehicle Inspection Order Service Log',
  'vehicleInspectionOrder.copyVehicleInspectionOrderServiceLogFrom':
    'Copy Vehicle Inspection Order Service Log',
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
  'vehicleInspectionOrder.addOrderReviewResult': 'Add Order Review Result',
  'vehicleInspectionOrder.removeOrderReviewResult':
    'Remove Order Review Result',
  'vehicleInspectionOrder.updateOrderReviewResult':
    'Update Order Review Result',
  'vehicleInspectionOrder.copyOrderReviewResultFrom':
    'Copy Order Review Result',
  'vehicleInspectionOrder.addOrderRatingResult': 'Add Order Rating Result',
  'vehicleInspectionOrder.removeOrderRatingResult':
    'Remove Order Rating Result',
  'vehicleInspectionOrder.updateOrderRatingResult':
    'Update Order Rating Result',
  'vehicleInspectionOrder.copyOrderRatingResultFrom':
    'Copy Order Rating Result',
  'vehicleInspectionOrder.addOrderDiscountCoupon': 'Add Order Discount Coupon',
  'vehicleInspectionOrder.removeOrderDiscountCoupon':
    'Remove Order Discount Coupon',
  'vehicleInspectionOrder.updateOrderDiscountCoupon':
    'Update Order Discount Coupon',
  'vehicleInspectionOrder.copyOrderDiscountCouponFrom':
    'Copy Order Discount Coupon',
  'vehicleInspectionOrder.addVehicleInspectionOrderCoupon':
    'Add Vehicle Inspection Order Coupon',
  'vehicleInspectionOrder.removeVehicleInspectionOrderCoupon':
    'Remove Vehicle Inspection Order Coupon',
  'vehicleInspectionOrder.updateVehicleInspectionOrderCoupon':
    'Update Vehicle Inspection Order Coupon',
  'vehicleInspectionOrder.copyVehicleInspectionOrderCouponFrom':
    'Copy Vehicle Inspection Order Coupon',

  vehicleInspectionInsuranceOrder: 'Vehicle Inspection Insurance Order',
  'vehicleInspectionInsuranceOrder.id': 'Id',
  'vehicleInspectionInsuranceOrder.insurance': 'Insurance',
  'vehicleInspectionInsuranceOrder.transferToinsurance':
    'Transfer to Another Available Insurance',
  'vehicleInspectionInsuranceOrder.mainOrder': 'Main Order',
  'vehicleInspectionInsuranceOrder.transferTomainOrder':
    'Transfer to Another Vehicle Inspection Order',
  'vehicleInspectionInsuranceOrder.version': 'Version',

  vehicleInspectionOrderCharge: 'Vehicle Inspection Order Charge',
  'vehicleInspectionOrderCharge.id': 'Id',
  'vehicleInspectionOrderCharge.title': 'Title',
  'vehicleInspectionOrderCharge.code': 'Code',
  'vehicleInspectionOrderCharge.amount': 'Amount',
  'vehicleInspectionOrderCharge.mainOrder': 'Main Order',
  'vehicleInspectionOrderCharge.transferTomainOrder':
    'Transfer to Another Vehicle Inspection Order',
  'vehicleInspectionOrderCharge.version': 'Version',

  vehicleInspectionOrderServiceLog: 'Vehicle Inspection Order Service Log',
  'vehicleInspectionOrderServiceLog.id': 'Id',
  'vehicleInspectionOrderServiceLog.summary': 'Summary',
  'vehicleInspectionOrderServiceLog.createTime': 'Create Time',
  'vehicleInspectionOrderServiceLog.responsibleWorker': 'Responsible Worker',
  'vehicleInspectionOrderServiceLog.transferToresponsibleWorker':
    'Transfer to Another Vehicle Service Company Employee',
  'vehicleInspectionOrderServiceLog.longitude': 'Longitude',
  'vehicleInspectionOrderServiceLog.latitude': 'Latitude',
  'vehicleInspectionOrderServiceLog.serviceType': 'Service Type',
  'vehicleInspectionOrderServiceLog.serviceTicket': 'Service Ticket',
  'vehicleInspectionOrderServiceLog.mainOrder': 'Main Order',
  'vehicleInspectionOrderServiceLog.transferTomainOrder':
    'Transfer to Another Vehicle Inspection Order',
  'vehicleInspectionOrderServiceLog.version': 'Version',

  vehicleInspectionOrderPayment: 'Vehicle Inspection Order Payment',
  'vehicleInspectionOrderPayment.id': 'Id',
  'vehicleInspectionOrderPayment.paymentMethod': 'Payment Method',
  'vehicleInspectionOrderPayment.originalAmount': 'Original Amount',
  'vehicleInspectionOrderPayment.actualAmount': 'Actual Amount',
  'vehicleInspectionOrderPayment.status': 'Status',
  'vehicleInspectionOrderPayment.wechatOrderId': 'Wechat Order Id',
  'vehicleInspectionOrderPayment.wechatPrepayId': 'Wechat Prepay Id',
  'vehicleInspectionOrderPayment.mainOrder': 'Main Order',
  'vehicleInspectionOrderPayment.transferTomainOrder':
    'Transfer to Another Vehicle Inspection Order',
  'vehicleInspectionOrderPayment.createTime': 'Create Time',
  'vehicleInspectionOrderPayment.lastUpdateTime': 'Last Update Time',
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
  'serviceVehicleMovementC2m.serviceSummary': 'Service Summary',
  'serviceVehicleMovementC2m.startTime': 'Start Time',
  'serviceVehicleMovementC2m.longitude': 'Longitude',
  'serviceVehicleMovementC2m.latitude': 'Latitude',
  'serviceVehicleMovementC2m.lastUpdateTime': 'Last Update Time',
  'serviceVehicleMovementC2m.transferVerifyCode': 'Transfer Verify Code',
  'serviceVehicleMovementC2m.mainOrder': 'Main Order',
  'serviceVehicleMovementC2m.transferTomainOrder':
    'Transfer to Another Vehicle Inspection Order',
  'serviceVehicleMovementC2m.movementPurpose': 'Movement Purpose',
  'serviceVehicleMovementC2m.contactName': 'Contact Name',
  'serviceVehicleMovementC2m.contactMobileNumber': 'Contact Mobile Number',
  'serviceVehicleMovementC2m.notifyDatetime': 'Notify Datetime',
  'serviceVehicleMovementC2m.notifyAddress': 'Notify Address',
  'serviceVehicleMovementC2m.notifyComment': 'Notify Comment',
  'serviceVehicleMovementC2m.handoverResult': 'Handover Result',
  'serviceVehicleMovementC2m.handoverResultComment': 'Handover Result Comment',
  'serviceVehicleMovementC2m.merchant': 'Merchant',
  'serviceVehicleMovementC2m.transferTomerchant':
    'Transfer to Another Vehicle Service Company',
  'serviceVehicleMovementC2m.version': 'Version',
  'serviceVehicleMovementC2m.addHandOverChecklistResult':
    'Add Hand Over Checklist Result',
  'serviceVehicleMovementC2m.removeHandOverChecklistResult':
    'Remove Hand Over Checklist Result',
  'serviceVehicleMovementC2m.updateHandOverChecklistResult':
    'Update Hand Over Checklist Result',
  'serviceVehicleMovementC2m.copyHandOverChecklistResultFrom':
    'Copy Hand Over Checklist Result',

  serviceVehicleMovementM2m: 'Service Vehicle Movement M2m',
  'serviceVehicleMovementM2m.id': 'Id',
  'serviceVehicleMovementM2m.serviceStatus': 'Service Status',
  'serviceVehicleMovementM2m.responsibleWorker': 'Responsible Worker',
  'serviceVehicleMovementM2m.transferToresponsibleWorker':
    'Transfer to Another Vehicle Service Company Employee',
  'serviceVehicleMovementM2m.serviceSummary': 'Service Summary',
  'serviceVehicleMovementM2m.startTime': 'Start Time',
  'serviceVehicleMovementM2m.longitude': 'Longitude',
  'serviceVehicleMovementM2m.latitude': 'Latitude',
  'serviceVehicleMovementM2m.lastUpdateTime': 'Last Update Time',
  'serviceVehicleMovementM2m.transferVerifyCode': 'Transfer Verify Code',
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
  'serviceVehicleMovementM2m.notifyDatetime': 'Notify Datetime',
  'serviceVehicleMovementM2m.notifyAddress': 'Notify Address',
  'serviceVehicleMovementM2m.notifyComment': 'Notify Comment',
  'serviceVehicleMovementM2m.handoverResult': 'Handover Result',
  'serviceVehicleMovementM2m.handoverResultComment': 'Handover Result Comment',
  'serviceVehicleMovementM2m.merchant': 'Merchant',
  'serviceVehicleMovementM2m.transferTomerchant':
    'Transfer to Another Vehicle Service Company',
  'serviceVehicleMovementM2m.version': 'Version',
  'serviceVehicleMovementM2m.addHandOverChecklistResult':
    'Add Hand Over Checklist Result',
  'serviceVehicleMovementM2m.removeHandOverChecklistResult':
    'Remove Hand Over Checklist Result',
  'serviceVehicleMovementM2m.updateHandOverChecklistResult':
    'Update Hand Over Checklist Result',
  'serviceVehicleMovementM2m.copyHandOverChecklistResultFrom':
    'Copy Hand Over Checklist Result',

  serviceVehicleMovementM2c: 'Service Vehicle Movement M2c',
  'serviceVehicleMovementM2c.id': 'Id',
  'serviceVehicleMovementM2c.serviceStatus': 'Service Status',
  'serviceVehicleMovementM2c.responsibleWorker': 'Responsible Worker',
  'serviceVehicleMovementM2c.transferToresponsibleWorker':
    'Transfer to Another Vehicle Service Company Employee',
  'serviceVehicleMovementM2c.serviceSummary': 'Service Summary',
  'serviceVehicleMovementM2c.startTime': 'Start Time',
  'serviceVehicleMovementM2c.longitude': 'Longitude',
  'serviceVehicleMovementM2c.latitude': 'Latitude',
  'serviceVehicleMovementM2c.lastUpdateTime': 'Last Update Time',
  'serviceVehicleMovementM2c.transferVerifyCode': 'Transfer Verify Code',
  'serviceVehicleMovementM2c.mainOrder': 'Main Order',
  'serviceVehicleMovementM2c.transferTomainOrder':
    'Transfer to Another Vehicle Inspection Order',
  'serviceVehicleMovementM2c.movementPurpose': 'Movement Purpose',
  'serviceVehicleMovementM2c.contactName': 'Contact Name',
  'serviceVehicleMovementM2c.contactMobileNumber': 'Contact Mobile Number',
  'serviceVehicleMovementM2c.notifyDatetime': 'Notify Datetime',
  'serviceVehicleMovementM2c.notifyAddress': 'Notify Address',
  'serviceVehicleMovementM2c.notifyComment': 'Notify Comment',
  'serviceVehicleMovementM2c.handoverResult': 'Handover Result',
  'serviceVehicleMovementM2c.handoverResultComment': 'Handover Result Comment',
  'serviceVehicleMovementM2c.merchant': 'Merchant',
  'serviceVehicleMovementM2c.transferTomerchant':
    'Transfer to Another Vehicle Service Company',
  'serviceVehicleMovementM2c.version': 'Version',
  'serviceVehicleMovementM2c.addHandOverChecklistResult':
    'Add Hand Over Checklist Result',
  'serviceVehicleMovementM2c.removeHandOverChecklistResult':
    'Remove Hand Over Checklist Result',
  'serviceVehicleMovementM2c.updateHandOverChecklistResult':
    'Update Hand Over Checklist Result',
  'serviceVehicleMovementM2c.copyHandOverChecklistResultFrom':
    'Copy Hand Over Checklist Result',

  serviceFileMovementC2m: 'Service File Movement C2m',
  'serviceFileMovementC2m.id': 'Id',
  'serviceFileMovementC2m.serviceStatus': 'Service Status',
  'serviceFileMovementC2m.responsibleWorker': 'Responsible Worker',
  'serviceFileMovementC2m.transferToresponsibleWorker':
    'Transfer to Another Vehicle Service Company Employee',
  'serviceFileMovementC2m.serviceSummary': 'Service Summary',
  'serviceFileMovementC2m.startTime': 'Start Time',
  'serviceFileMovementC2m.longitude': 'Longitude',
  'serviceFileMovementC2m.latitude': 'Latitude',
  'serviceFileMovementC2m.lastUpdateTime': 'Last Update Time',
  'serviceFileMovementC2m.transferVerifyCode': 'Transfer Verify Code',
  'serviceFileMovementC2m.mainOrder': 'Main Order',
  'serviceFileMovementC2m.transferTomainOrder':
    'Transfer to Another Vehicle Inspection Order',
  'serviceFileMovementC2m.movementPurpose': 'Movement Purpose',
  'serviceFileMovementC2m.contactName': 'Contact Name',
  'serviceFileMovementC2m.contactMobileNumber': 'Contact Mobile Number',
  'serviceFileMovementC2m.notifyDatetime': 'Notify Datetime',
  'serviceFileMovementC2m.notifyAddress': 'Notify Address',
  'serviceFileMovementC2m.notifyComment': 'Notify Comment',
  'serviceFileMovementC2m.handoverResult': 'Handover Result',
  'serviceFileMovementC2m.handoverResultComment': 'Handover Result Comment',
  'serviceFileMovementC2m.merchant': 'Merchant',
  'serviceFileMovementC2m.transferTomerchant':
    'Transfer to Another Vehicle Service Company',
  'serviceFileMovementC2m.version': 'Version',
  'serviceFileMovementC2m.addHandOverChecklistResult':
    'Add Hand Over Checklist Result',
  'serviceFileMovementC2m.removeHandOverChecklistResult':
    'Remove Hand Over Checklist Result',
  'serviceFileMovementC2m.updateHandOverChecklistResult':
    'Update Hand Over Checklist Result',
  'serviceFileMovementC2m.copyHandOverChecklistResultFrom':
    'Copy Hand Over Checklist Result',

  serviceFileMovementM2m: 'Service File Movement M2m',
  'serviceFileMovementM2m.id': 'Id',
  'serviceFileMovementM2m.serviceStatus': 'Service Status',
  'serviceFileMovementM2m.responsibleWorker': 'Responsible Worker',
  'serviceFileMovementM2m.transferToresponsibleWorker':
    'Transfer to Another Vehicle Service Company Employee',
  'serviceFileMovementM2m.serviceSummary': 'Service Summary',
  'serviceFileMovementM2m.startTime': 'Start Time',
  'serviceFileMovementM2m.longitude': 'Longitude',
  'serviceFileMovementM2m.latitude': 'Latitude',
  'serviceFileMovementM2m.lastUpdateTime': 'Last Update Time',
  'serviceFileMovementM2m.transferVerifyCode': 'Transfer Verify Code',
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
  'serviceFileMovementM2m.notifyDatetime': 'Notify Datetime',
  'serviceFileMovementM2m.notifyAddress': 'Notify Address',
  'serviceFileMovementM2m.notifyComment': 'Notify Comment',
  'serviceFileMovementM2m.handoverResult': 'Handover Result',
  'serviceFileMovementM2m.handoverResultComment': 'Handover Result Comment',
  'serviceFileMovementM2m.merchant': 'Merchant',
  'serviceFileMovementM2m.transferTomerchant':
    'Transfer to Another Vehicle Service Company',
  'serviceFileMovementM2m.version': 'Version',
  'serviceFileMovementM2m.addHandOverChecklistResult':
    'Add Hand Over Checklist Result',
  'serviceFileMovementM2m.removeHandOverChecklistResult':
    'Remove Hand Over Checklist Result',
  'serviceFileMovementM2m.updateHandOverChecklistResult':
    'Update Hand Over Checklist Result',
  'serviceFileMovementM2m.copyHandOverChecklistResultFrom':
    'Copy Hand Over Checklist Result',

  serviceFileMovementM2c: 'Service File Movement M2c',
  'serviceFileMovementM2c.id': 'Id',
  'serviceFileMovementM2c.serviceStatus': 'Service Status',
  'serviceFileMovementM2c.responsibleWorker': 'Responsible Worker',
  'serviceFileMovementM2c.transferToresponsibleWorker':
    'Transfer to Another Vehicle Service Company Employee',
  'serviceFileMovementM2c.serviceSummary': 'Service Summary',
  'serviceFileMovementM2c.startTime': 'Start Time',
  'serviceFileMovementM2c.longitude': 'Longitude',
  'serviceFileMovementM2c.latitude': 'Latitude',
  'serviceFileMovementM2c.lastUpdateTime': 'Last Update Time',
  'serviceFileMovementM2c.transferVerifyCode': 'Transfer Verify Code',
  'serviceFileMovementM2c.mainOrder': 'Main Order',
  'serviceFileMovementM2c.transferTomainOrder':
    'Transfer to Another Vehicle Inspection Order',
  'serviceFileMovementM2c.movementPurpose': 'Movement Purpose',
  'serviceFileMovementM2c.contactName': 'Contact Name',
  'serviceFileMovementM2c.contactMobileNumber': 'Contact Mobile Number',
  'serviceFileMovementM2c.notifyDatetime': 'Notify Datetime',
  'serviceFileMovementM2c.notifyAddress': 'Notify Address',
  'serviceFileMovementM2c.notifyComment': 'Notify Comment',
  'serviceFileMovementM2c.handoverResult': 'Handover Result',
  'serviceFileMovementM2c.handoverResultComment': 'Handover Result Comment',
  'serviceFileMovementM2c.merchant': 'Merchant',
  'serviceFileMovementM2c.transferTomerchant':
    'Transfer to Another Vehicle Service Company',
  'serviceFileMovementM2c.version': 'Version',
  'serviceFileMovementM2c.addHandOverChecklistResult':
    'Add Hand Over Checklist Result',
  'serviceFileMovementM2c.removeHandOverChecklistResult':
    'Remove Hand Over Checklist Result',
  'serviceFileMovementM2c.updateHandOverChecklistResult':
    'Update Hand Over Checklist Result',
  'serviceFileMovementM2c.copyHandOverChecklistResultFrom':
    'Copy Hand Over Checklist Result',

  handOverChecklistResult: 'Hand Over Checklist Result',
  'handOverChecklistResult.id': 'Id',
  'handOverChecklistResult.handOverCheckItemName': 'Hand Over Check Item Name',
  'handOverChecklistResult.checkItemDescription': 'Check Item Description',
  'handOverChecklistResult.handOverCheckResult': 'Hand Over Check Result',
  'handOverChecklistResult.handOverCheckComment': 'Hand Over Check Comment',
  'handOverChecklistResult.handOverCheckEvidenceImage1':
    'Hand Over Check Evidence Image 1',
  'handOverChecklistResult.handOverCheckEvidenceImage2':
    'Hand Over Check Evidence Image 2',
  'handOverChecklistResult.handOverCheckEvidenceImage3':
    'Hand Over Check Evidence Image 3',
  'handOverChecklistResult.handOverCheckEvidenceImage4':
    'Hand Over Check Evidence Image 4',
  'handOverChecklistResult.handOverCheckEvidenceImage5':
    'Hand Over Check Evidence Image 5',
  'handOverChecklistResult.availableHandOverItem': 'Available Hand Over Item',
  'handOverChecklistResult.transferToavailableHandOverItem':
    'Transfer to Another Available Hand Over Item',
  'handOverChecklistResult.serviceTypeVehicleC2m': 'Service Type Vehicle C2m',
  'handOverChecklistResult.transferToserviceTypeVehicleC2m':
    'Transfer to Another Service Vehicle Movement C2m',
  'handOverChecklistResult.serviceTypeVehicleM2m': 'Service Type Vehicle M2m',
  'handOverChecklistResult.transferToserviceTypeVehicleM2m':
    'Transfer to Another Service Vehicle Movement M2m',
  'handOverChecklistResult.serviceTypeVehicleM2c': 'Service Type Vehicle M2c',
  'handOverChecklistResult.transferToserviceTypeVehicleM2c':
    'Transfer to Another Service Vehicle Movement M2c',
  'handOverChecklistResult.serviceTypeFileC2m': 'Service Type File C2m',
  'handOverChecklistResult.transferToserviceTypeFileC2m':
    'Transfer to Another Service File Movement C2m',
  'handOverChecklistResult.serviceTypeFileM2m': 'Service Type File M2m',
  'handOverChecklistResult.transferToserviceTypeFileM2m':
    'Transfer to Another Service File Movement M2m',
  'handOverChecklistResult.serviceTypeFileM2c': 'Service Type File M2c',
  'handOverChecklistResult.transferToserviceTypeFileM2c':
    'Transfer to Another Service File Movement M2c',
  'handOverChecklistResult.version': 'Version',

  serviceInsuranceForInspection: 'Service Insurance For Inspection',
  'serviceInsuranceForInspection.id': 'Id',
  'serviceInsuranceForInspection.serviceStatus': 'Service Status',
  'serviceInsuranceForInspection.orderedInsurance': 'Ordered Insurance',
  'serviceInsuranceForInspection.transferToorderedInsurance':
    'Transfer to Another Available Insurance',
  'serviceInsuranceForInspection.responsibleWorker': 'Responsible Worker',
  'serviceInsuranceForInspection.transferToresponsibleWorker':
    'Transfer to Another Vehicle Service Company Employee',
  'serviceInsuranceForInspection.serviceSummary': 'Service Summary',
  'serviceInsuranceForInspection.serviceComments': 'Service Comments',
  'serviceInsuranceForInspection.startTime': 'Start Time',
  'serviceInsuranceForInspection.lastUpdateTime': 'Last Update Time',
  'serviceInsuranceForInspection.insuranceName': 'Insurance Name',
  'serviceInsuranceForInspection.insuranceVendor': 'Insurance Vendor',
  'serviceInsuranceForInspection.insurancePrice': 'Insurance Price',
  'serviceInsuranceForInspection.summary': 'Summary',
  'serviceInsuranceForInspection.insuranceNumber': 'Insurance Number',
  'serviceInsuranceForInspection.insuranceImage1': 'Insurance Image 1',
  'serviceInsuranceForInspection.insuranceImage2': 'Insurance Image 2',
  'serviceInsuranceForInspection.insuranceImage3': 'Insurance Image 3',
  'serviceInsuranceForInspection.insuranceImage4': 'Insurance Image 4',
  'serviceInsuranceForInspection.insuranceImage5': 'Insurance Image 5',
  'serviceInsuranceForInspection.merchant': 'Merchant',
  'serviceInsuranceForInspection.transferTomerchant':
    'Transfer to Another Vehicle Service Company',
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
  'serviceVehicleInspection.serviceSummary': 'Service Summary',
  'serviceVehicleInspection.inspectionStation': 'Inspection Station',
  'serviceVehicleInspection.transferToinspectionStation':
    'Transfer to Another Inspection Station',
  'serviceVehicleInspection.startTime': 'Start Time',
  'serviceVehicleInspection.longitude': 'Longitude',
  'serviceVehicleInspection.latitude': 'Latitude',
  'serviceVehicleInspection.lastUpdateTime': 'Last Update Time',
  'serviceVehicleInspection.inspectionDatetime': 'Inspection Datetime',
  'serviceVehicleInspection.inspectionReportImage1':
    'Inspection Report Image 1',
  'serviceVehicleInspection.inspectionReportImage2':
    'Inspection Report Image 2',
  'serviceVehicleInspection.inspectionReportImage3':
    'Inspection Report Image 3',
  'serviceVehicleInspection.inspectionReportImage4':
    'Inspection Report Image 4',
  'serviceVehicleInspection.inspectionReportImage5':
    'Inspection Report Image 5',
  'serviceVehicleInspection.inspectionReportImage6':
    'Inspection Report Image 6',
  'serviceVehicleInspection.inspectionReportImage7':
    'Inspection Report Image 7',
  'serviceVehicleInspection.inspectionReportImage8':
    'Inspection Report Image 8',
  'serviceVehicleInspection.inspectionResult': 'Inspection Result',
  'serviceVehicleInspection.inspectionNeedRepair': 'Inspection Need Repair',
  'serviceVehicleInspection.merchant': 'Merchant',
  'serviceVehicleInspection.transferTomerchant':
    'Transfer to Another Vehicle Service Company',
  'serviceVehicleInspection.mainOrder': 'Main Order',
  'serviceVehicleInspection.transferTomainOrder':
    'Transfer to Another Vehicle Inspection Order',
  'serviceVehicleInspection.version': 'Version',
  'serviceVehicleInspection.addServiceVehicleRepairing':
    'Add Service Vehicle Repairing',
  'serviceVehicleInspection.removeServiceVehicleRepairing':
    'Remove Service Vehicle Repairing',
  'serviceVehicleInspection.updateServiceVehicleRepairing':
    'Update Service Vehicle Repairing',
  'serviceVehicleInspection.copyServiceVehicleRepairingFrom':
    'Copy Service Vehicle Repairing',

  serviceFileInspection: 'Service File Inspection',
  'serviceFileInspection.id': 'Id',
  'serviceFileInspection.serviceStatus': 'Service Status',
  'serviceFileInspection.responsibleWorker': 'Responsible Worker',
  'serviceFileInspection.transferToresponsibleWorker':
    'Transfer to Another Vehicle Service Company Employee',
  'serviceFileInspection.serviceSummary': 'Service Summary',
  'serviceFileInspection.inspectionStation': 'Inspection Station',
  'serviceFileInspection.transferToinspectionStation':
    'Transfer to Another Inspection Station',
  'serviceFileInspection.inspectionResult': 'Inspection Result',
  'serviceFileInspection.inspectionReportImage1': 'Inspection Report Image 1',
  'serviceFileInspection.inspectionReportImage2': 'Inspection Report Image 2',
  'serviceFileInspection.inspectionReportImage3': 'Inspection Report Image 3',
  'serviceFileInspection.inspectionReportImage4': 'Inspection Report Image 4',
  'serviceFileInspection.inspectionReportImage5': 'Inspection Report Image 5',
  'serviceFileInspection.startTime': 'Start Time',
  'serviceFileInspection.longitude': 'Longitude',
  'serviceFileInspection.latitude': 'Latitude',
  'serviceFileInspection.lastUpdateTime': 'Last Update Time',
  'serviceFileInspection.inspectionDatetime': 'Inspection Datetime',
  'serviceFileInspection.merchant': 'Merchant',
  'serviceFileInspection.transferTomerchant':
    'Transfer to Another Vehicle Service Company',
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
  'serviceVehicleRepairing.serviceSummary': 'Service Summary',
  'serviceVehicleRepairing.startTime': 'Start Time',
  'serviceVehicleRepairing.longitude': 'Longitude',
  'serviceVehicleRepairing.latitude': 'Latitude',
  'serviceVehicleRepairing.lastUpdateTime': 'Last Update Time',
  'serviceVehicleRepairing.inspectionReportImage1': 'Inspection Report Image 1',
  'serviceVehicleRepairing.inspectionReportImage2': 'Inspection Report Image 2',
  'serviceVehicleRepairing.inspectionReportImage3': 'Inspection Report Image 3',
  'serviceVehicleRepairing.inspectionReportImage4': 'Inspection Report Image 4',
  'serviceVehicleRepairing.inspectionReportImage5': 'Inspection Report Image 5',
  'serviceVehicleRepairing.repairingQuotationImage1':
    'Repairing Quotation Image 1',
  'serviceVehicleRepairing.repairingQuotationImage2':
    'Repairing Quotation Image 2',
  'serviceVehicleRepairing.repairingQuotationImage3':
    'Repairing Quotation Image 3',
  'serviceVehicleRepairing.repairingQuotationImage4':
    'Repairing Quotation Image 4',
  'serviceVehicleRepairing.repairingQuotationImage5':
    'Repairing Quotation Image 5',
  'serviceVehicleRepairing.repairingQuotationTotalAmount':
    'Repairing Quotation Total Amount',
  'serviceVehicleRepairing.repairingPartImg1': 'Repairing Part Img 1',
  'serviceVehicleRepairing.repairingPartImg2': 'Repairing Part Img 2',
  'serviceVehicleRepairing.repairingPartImg3': 'Repairing Part Img 3',
  'serviceVehicleRepairing.repairingPartImg4': 'Repairing Part Img 4',
  'serviceVehicleRepairing.repairingPartImg5': 'Repairing Part Img 5',
  'serviceVehicleRepairing.repairingPartListComment':
    'Repairing Part List Comment',
  'serviceVehicleRepairing.repairingFinishedDatetime':
    'Repairing Finished Datetime',
  'serviceVehicleRepairing.serviceVehicleInspection':
    'Service Vehicle Inspection',
  'serviceVehicleRepairing.transferToserviceVehicleInspection':
    'Transfer to Another Service Vehicle Inspection',
  'serviceVehicleRepairing.merchant': 'Merchant',
  'serviceVehicleRepairing.transferTomerchant':
    'Transfer to Another Vehicle Service Company',
  'serviceVehicleRepairing.mainOrder': 'Main Order',
  'serviceVehicleRepairing.transferTomainOrder':
    'Transfer to Another Vehicle Inspection Order',
  'serviceVehicleRepairing.version': 'Version',
  'serviceVehicleRepairing.addRepairingAllowanceItem':
    'Add Repairing Allowance Item',
  'serviceVehicleRepairing.removeRepairingAllowanceItem':
    'Remove Repairing Allowance Item',
  'serviceVehicleRepairing.updateRepairingAllowanceItem':
    'Update Repairing Allowance Item',
  'serviceVehicleRepairing.copyRepairingAllowanceItemFrom':
    'Copy Repairing Allowance Item',
  'serviceVehicleRepairing.addVehicleRepairingPayment':
    'Add Vehicle Repairing Payment',
  'serviceVehicleRepairing.removeVehicleRepairingPayment':
    'Remove Vehicle Repairing Payment',
  'serviceVehicleRepairing.updateVehicleRepairingPayment':
    'Update Vehicle Repairing Payment',
  'serviceVehicleRepairing.copyVehicleRepairingPaymentFrom':
    'Copy Vehicle Repairing Payment',

  repairingAllowanceItem: 'Repairing Allowance Item',
  'repairingAllowanceItem.id': 'Id',
  'repairingAllowanceItem.allowanceTitle': 'Allowance Title',
  'repairingAllowanceItem.allowanceCode': 'Allowance Code',
  'repairingAllowanceItem.allowanceAmount': 'Allowance Amount',
  'repairingAllowanceItem.service': 'Service',
  'repairingAllowanceItem.transferToservice':
    'Transfer to Another Service Vehicle Repairing',
  'repairingAllowanceItem.version': 'Version',

  vehicleRepairingPayment: 'Vehicle Repairing Payment',
  'vehicleRepairingPayment.id': 'Id',
  'vehicleRepairingPayment.originalAmount': 'Original Amount',
  'vehicleRepairingPayment.actualAmount': 'Actual Amount',
  'vehicleRepairingPayment.status': 'Status',
  'vehicleRepairingPayment.wechatOrderId': 'Wechat Order Id',
  'vehicleRepairingPayment.wechatPrepayId': 'Wechat Prepay Id',
  'vehicleRepairingPayment.createTime': 'Create Time',
  'vehicleRepairingPayment.lastUpdateTime': 'Last Update Time',
  'vehicleRepairingPayment.serviceVehicleRepairing':
    'Service Vehicle Repairing',
  'vehicleRepairingPayment.transferToserviceVehicleRepairing':
    'Transfer to Another Service Vehicle Repairing',
  'vehicleRepairingPayment.version': 'Version',

  availableReviewItem: 'Available Review Item',
  'availableReviewItem.id': 'Id',
  'availableReviewItem.reviewName': 'Review Name',
  'availableReviewItem.platform': 'Platform',
  'availableReviewItem.transferToplatform':
    'Transfer to Another Car Inspection Platform',
  'availableReviewItem.version': 'Version',

  orderReviewResult: 'Order Review Result',
  'orderReviewResult.id': 'Id',
  'orderReviewResult.reviewName': 'Review Name',
  'orderReviewResult.reviewResult': 'Review Result',
  'orderReviewResult.mainOrder': 'Main Order',
  'orderReviewResult.transferTomainOrder':
    'Transfer to Another Vehicle Inspection Order',
  'orderReviewResult.version': 'Version',

  availableRatingItem: 'Available Rating Item',
  'availableRatingItem.id': 'Id',
  'availableRatingItem.ratingName': 'Rating Name',
  'availableRatingItem.platform': 'Platform',
  'availableRatingItem.transferToplatform':
    'Transfer to Another Car Inspection Platform',
  'availableRatingItem.version': 'Version',

  orderRatingResult: 'Order Rating Result',
  'orderRatingResult.id': 'Id',
  'orderRatingResult.ratingName': 'Rating Name',
  'orderRatingResult.ratingResult': 'Rating Result',
  'orderRatingResult.mainOrder': 'Main Order',
  'orderRatingResult.transferTomainOrder':
    'Transfer to Another Vehicle Inspection Order',
  'orderRatingResult.version': 'Version',

  preorderPromotion: 'Preorder Promotion',
  'preorderPromotion.id': 'Id',
  'preorderPromotion.promotionMessage': 'Promotion Message',
  'preorderPromotion.preorderDays': 'Preorder Days',
  'preorderPromotion.discountAmount': 'Discount Amount',
  'preorderPromotion.startDate': 'Start Date',
  'preorderPromotion.endDate': 'End Date',
  'preorderPromotion.product': 'Product',
  'preorderPromotion.transferToproduct':
    'Transfer to Another Available Product',
  'preorderPromotion.platform': 'Platform',
  'preorderPromotion.transferToplatform':
    'Transfer to Another Car Inspection Platform',
  'preorderPromotion.version': 'Version',

  orderDiscountCoupon: 'Order Discount Coupon',
  'orderDiscountCoupon.id': 'Id',
  'orderDiscountCoupon.couponTitle': 'Coupon Title',
  'orderDiscountCoupon.discountAmount': 'Discount Amount',
  'orderDiscountCoupon.endDate': 'End Date',
  'orderDiscountCoupon.lastUpdateTime': 'Last Update Time',
  'orderDiscountCoupon.couponStatus': 'Coupon Status',
  'orderDiscountCoupon.shareCode': 'Share Code',
  'orderDiscountCoupon.customer': 'Customer',
  'orderDiscountCoupon.transferTocustomer': 'Transfer to Another Customer',
  'orderDiscountCoupon.mainOrder': 'Main Order',
  'orderDiscountCoupon.transferTomainOrder':
    'Transfer to Another Vehicle Inspection Order',
  'orderDiscountCoupon.platform': 'Platform',
  'orderDiscountCoupon.transferToplatform':
    'Transfer to Another Car Inspection Platform',
  'orderDiscountCoupon.version': 'Version',

  vehicleInspectionOrderCoupon: 'Vehicle Inspection Order Coupon',
  'vehicleInspectionOrderCoupon.id': 'Id',
  'vehicleInspectionOrderCoupon.couponTitle': 'Coupon Title',
  'vehicleInspectionOrderCoupon.discountAmount': 'Discount Amount',
  'vehicleInspectionOrderCoupon.endDate': 'End Date',
  'vehicleInspectionOrderCoupon.lastUpdateTime': 'Last Update Time',
  'vehicleInspectionOrderCoupon.appliedDate': 'Applied Date',
  'vehicleInspectionOrderCoupon.couponStatus': 'Coupon Status',
  'vehicleInspectionOrderCoupon.customer': 'Customer',
  'vehicleInspectionOrderCoupon.transferTocustomer':
    'Transfer to Another Customer',
  'vehicleInspectionOrderCoupon.mainOrder': 'Main Order',
  'vehicleInspectionOrderCoupon.transferTomainOrder':
    'Transfer to Another Vehicle Inspection Order',
  'vehicleInspectionOrderCoupon.version': 'Version',

  account: 'Account',
  'account.id': 'Id',
  'account.platform': 'Platform',
  'account.transferToplatform': 'Transfer to Another Car Inspection Platform',
  'account.description': 'Description',
  'account.version': 'Version',
  'account.addServiceCompanyAccount': 'Add Service Company Account',
  'account.removeServiceCompanyAccount': 'Remove Service Company Account',
  'account.updateServiceCompanyAccount': 'Update Service Company Account',
  'account.copyServiceCompanyAccountFrom': 'Copy Service Company Account',
  'account.addRepairingCompanyAccount': 'Add Repairing Company Account',
  'account.removeRepairingCompanyAccount': 'Remove Repairing Company Account',
  'account.updateRepairingCompanyAccount': 'Update Repairing Company Account',
  'account.copyRepairingCompanyAccountFrom': 'Copy Repairing Company Account',
  'account.addInsuranceServiceAccount': 'Add Insurance Service Account',
  'account.removeInsuranceServiceAccount': 'Remove Insurance Service Account',
  'account.updateInsuranceServiceAccount': 'Update Insurance Service Account',
  'account.copyInsuranceServiceAccountFrom': 'Copy Insurance Service Account',
  'account.addMainOrderAccount': 'Add Main Order Account',
  'account.removeMainOrderAccount': 'Remove Main Order Account',
  'account.updateMainOrderAccount': 'Update Main Order Account',
  'account.copyMainOrderAccountFrom': 'Copy Main Order Account',
  'account.addInspectionStationAccount': 'Add Inspection Station Account',
  'account.removeInspectionStationAccount': 'Remove Inspection Station Account',
  'account.updateInspectionStationAccount': 'Update Inspection Station Account',
  'account.copyInspectionStationAccountFrom': 'Copy Inspection Station Account',

  serviceCompanyAccount: 'Service Company Account',
  'serviceCompanyAccount.id': 'Id',
  'serviceCompanyAccount.serviceOrderNumber': 'Service Order Number',
  'serviceCompanyAccount.serviceOrderCode': 'Service Order Code',
  'serviceCompanyAccount.serviceOrderName': 'Service Order Name',
  'serviceCompanyAccount.serviceFulfilledDatetime':
    'Service Fulfilled Datetime',
  'serviceCompanyAccount.contractId': 'Contract Id',
  'serviceCompanyAccount.contractPriceValue': 'Contract Price Value',
  'serviceCompanyAccount.contractPriceType': 'Contract Price Type',
  'serviceCompanyAccount.serviceWorkerName': 'Service Worker Name',
  'serviceCompanyAccount.serviceCompanyName': 'Service Company Name',
  'serviceCompanyAccount.mainOrderId': 'Main Order Id',
  'serviceCompanyAccount.merchantDiscount': 'Merchant Discount',
  'serviceCompanyAccount.merchant': 'Merchant',
  'serviceCompanyAccount.transferTomerchant':
    'Transfer to Another Vehicle Service Company',
  'serviceCompanyAccount.responsibleWorker': 'Responsible Worker',
  'serviceCompanyAccount.transferToresponsibleWorker':
    'Transfer to Another Vehicle Service Company Employee',
  'serviceCompanyAccount.account': 'Account',
  'serviceCompanyAccount.transferToaccount': 'Transfer to Another Account',
  'serviceCompanyAccount.version': 'Version',

  repairingCompanyAccount: 'Repairing Company Account',
  'repairingCompanyAccount.id': 'Id',
  'repairingCompanyAccount.repairingWorkerName': 'Repairing Worker Name',
  'repairingCompanyAccount.repairingCompanyName': 'Repairing Company Name',
  'repairingCompanyAccount.vehicleLicensePlateNumber':
    'Vehicle License Plate Number',
  'repairingCompanyAccount.vehicleRepairingOrderNumber':
    'Vehicle Repairing Order Number',
  'repairingCompanyAccount.originalAmount': 'Original Amount',
  'repairingCompanyAccount.allowanceAmount': 'Allowance Amount',
  'repairingCompanyAccount.actualAmount': 'Actual Amount',
  'repairingCompanyAccount.mainOrderId': 'Main Order Id',
  'repairingCompanyAccount.paymentDatetime': 'Payment Datetime',
  'repairingCompanyAccount.wechatOrderId': 'Wechat Order Id',
  'repairingCompanyAccount.wechatPrepayId': 'Wechat Prepay Id',
  'repairingCompanyAccount.merchant': 'Merchant',
  'repairingCompanyAccount.transferTomerchant':
    'Transfer to Another Vehicle Service Company',
  'repairingCompanyAccount.responsibleWorker': 'Responsible Worker',
  'repairingCompanyAccount.transferToresponsibleWorker':
    'Transfer to Another Vehicle Service Company Employee',
  'repairingCompanyAccount.account': 'Account',
  'repairingCompanyAccount.transferToaccount': 'Transfer to Another Account',
  'repairingCompanyAccount.version': 'Version',

  insuranceServiceAccount: 'Insurance Service Account',
  'insuranceServiceAccount.id': 'Id',
  'insuranceServiceAccount.vehicleLicensePlateNumber':
    'Vehicle License Plate Number',
  'insuranceServiceAccount.insuranceOrderNumber': 'Insurance Order Number',
  'insuranceServiceAccount.employeeName': 'Employee Name',
  'insuranceServiceAccount.insuranceName': 'Insurance Name',
  'insuranceServiceAccount.insuranceVendor': 'Insurance Vendor',
  'insuranceServiceAccount.insurancePrice': 'Insurance Price',
  'insuranceServiceAccount.insuranceNumber': 'Insurance Number',
  'insuranceServiceAccount.insuranceOrderDatetime': 'Insurance Order Datetime',
  'insuranceServiceAccount.mainOrderId': 'Main Order Id',
  'insuranceServiceAccount.merchant': 'Merchant',
  'insuranceServiceAccount.transferTomerchant':
    'Transfer to Another Vehicle Service Company',
  'insuranceServiceAccount.responsibleWorker': 'Responsible Worker',
  'insuranceServiceAccount.transferToresponsibleWorker':
    'Transfer to Another Vehicle Service Company Employee',
  'insuranceServiceAccount.account': 'Account',
  'insuranceServiceAccount.transferToaccount': 'Transfer to Another Account',
  'insuranceServiceAccount.version': 'Version',

  mainOrderAccount: 'Main Order Account',
  'mainOrderAccount.id': 'Id',
  'mainOrderAccount.vehicleLicensePlateNumber': 'Vehicle License Plate Number',
  'mainOrderAccount.productName': 'Product Name',
  'mainOrderAccount.inspectionPrice': 'Inspection Price',
  'mainOrderAccount.agentServicePrice': 'Agent Service Price',
  'mainOrderAccount.city': 'City',
  'mainOrderAccount.vehicleType': 'Vehicle Type',
  'mainOrderAccount.orderTotalAmount': 'Order Total Amount',
  'mainOrderAccount.orderPromotionDiscount': 'Order Promotion Discount',
  'mainOrderAccount.orderCouponDiscount': 'Order Coupon Discount',
  'mainOrderAccount.orderInsuranceAmount': 'Order Insurance Amount',
  'mainOrderAccount.orderMerchantDiscount': 'Order Merchant Discount',
  'mainOrderAccount.orderCustomerPaymentAmount':
    'Order Customer Payment Amount',
  'mainOrderAccount.orderServiceAmount': 'Order Service Amount',
  'mainOrderAccount.orderPlatformBalance': 'Order Platform Balance',
  'mainOrderAccount.orderPlacedDatetime': 'Order Placed Datetime',
  'mainOrderAccount.orderPaymentDatetime': 'Order Payment Datetime',
  'mainOrderAccount.orderFinishedDatetime': 'Order Finished Datetime',
  'mainOrderAccount.mainOrderId': 'Main Order Id',
  'mainOrderAccount.wechatOrderId': 'Wechat Order Id',
  'mainOrderAccount.wechatPrepayId': 'Wechat Prepay Id',
  'mainOrderAccount.account': 'Account',
  'mainOrderAccount.transferToaccount': 'Transfer to Another Account',
  'mainOrderAccount.version': 'Version',

  inspectionStationAccount: 'Inspection Station Account',
  'inspectionStationAccount.id': 'Id',
  'inspectionStationAccount.serviceOrderNumber': 'Service Order Number',
  'inspectionStationAccount.inspectionType': 'Inspection Type',
  'inspectionStationAccount.inspectionVehicleInfo': 'Inspection Vehicle Info',
  'inspectionStationAccount.inspectionFinalResult': 'Inspection Final Result',
  'inspectionStationAccount.inspectionDatetime': 'Inspection Datetime',
  'inspectionStationAccount.inspectionStationName': 'Inspection Station Name',
  'inspectionStationAccount.mainOrderNumber': 'Main Order Number',
  'inspectionStationAccount.merchant': 'Merchant',
  'inspectionStationAccount.transferTomerchant':
    'Transfer to Another Vehicle Service Company',
  'inspectionStationAccount.responsibleWorker': 'Responsible Worker',
  'inspectionStationAccount.transferToresponsibleWorker':
    'Transfer to Another Vehicle Service Company Employee',
  'inspectionStationAccount.inspectionStation': 'Inspection Station',
  'inspectionStationAccount.transferToinspectionStation':
    'Transfer to Another Inspection Station',
  'inspectionStationAccount.account': 'Account',
  'inspectionStationAccount.transferToaccount': 'Transfer to Another Account',
  'inspectionStationAccount.version': 'Version',

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
  'formField.disabled': 'Disabled',
  'formField.customRendering': 'Custom Rendering',
  'formField.candidateValues': 'Candidate Values',
  'formField.suggestValues': 'Suggest Values',
  'formField.version': 'Version',

  formAction: 'Form Action',
  'formAction.id': 'Id',
  'formAction.label': 'Label',
  'formAction.localeKey': 'Locale Key',
  'formAction.actionKey': 'Action Key',
  'formAction.level': 'Level',
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
