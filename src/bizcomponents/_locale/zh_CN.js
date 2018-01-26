const messages = {
  message: '消息',
  carInspectionPlatform: '驾乐乐车辆代审服务平台',
  'carInspectionPlatform.id': '序号',
  'carInspectionPlatform.name': '名称',
  'carInspectionPlatform.description': '描述',
  'carInspectionPlatform.version': '版本',
  'carInspectionPlatform.addProvince': '新增省',
  'carInspectionPlatform.removeProvince': '删除省',
  'carInspectionPlatform.updateProvince': '更新省',
  'carInspectionPlatform.copyProvinceFrom': '复制省',

  'carInspectionPlatform.addAvailableProduct': '新增产品类型',
  'carInspectionPlatform.removeAvailableProduct': '删除产品类型',
  'carInspectionPlatform.updateAvailableProduct': '更新产品类型',
  'carInspectionPlatform.copyAvailableProductFrom': '复制产品类型',

  'carInspectionPlatform.addCustomer': '新增客户',
  'carInspectionPlatform.removeCustomer': '删除客户',
  'carInspectionPlatform.updateCustomer': '更新客户',
  'carInspectionPlatform.copyCustomerFrom': '复制客户',

  'carInspectionPlatform.addVehicleServiceCompany': '新增商户管理',
  'carInspectionPlatform.removeVehicleServiceCompany': '删除商户管理',
  'carInspectionPlatform.updateVehicleServiceCompany': '更新商户管理',
  'carInspectionPlatform.copyVehicleServiceCompanyFrom': '复制商户管理',

  'carInspectionPlatform.addVehicleInfo': '新增车辆信息',
  'carInspectionPlatform.removeVehicleInfo': '删除车辆信息',
  'carInspectionPlatform.updateVehicleInfo': '更新车辆信息',
  'carInspectionPlatform.copyVehicleInfoFrom': '复制车辆信息',

  'carInspectionPlatform.addVehicleInspectionOrder': '新增上线检测订单',
  'carInspectionPlatform.removeVehicleInspectionOrder': '删除上线检测订单',
  'carInspectionPlatform.updateVehicleInspectionOrder': '更新上线检测订单',
  'carInspectionPlatform.copyVehicleInspectionOrderFrom': '复制上线检测订单',

  identityCard: '身份证',
  'identityCard.id': '序号',
  'identityCard.holderName': '姓名',
  'identityCard.cardNumber': '身份证号码',
  'identityCard.frontImage': '身份证正面照片',
  'identityCard.backImage': '身份证背面照片',
  'identityCard.expirationDate': '失效日期',
  'identityCard.version': '版本',

  vehiclePermit: '行驶证',
  'vehiclePermit.id': '序号',
  'vehiclePermit.holderName': '姓名',
  'vehiclePermit.licenseNumber': '驾驶证号码',
  'vehiclePermit.expirationDate': '失效日期',
  'vehiclePermit.image1': '图1',
  'vehiclePermit.image2': '图2',
  'vehiclePermit.image3': '图3',
  'vehiclePermit.image4': '图4',
  'vehiclePermit.image5': '图5',
  'vehiclePermit.version': '版本',

  province: '省',
  'province.id': '序号',
  'province.name': '名称',
  'province.platform': '平台',
  'province.transferToplatform': '转移到另一个汽车检查平台',
  'province.version': '版本',
  'province.addCity': '新增城市',
  'province.removeCity': '删除城市',
  'province.updateCity': '更新城市',
  'province.copyCityFrom': '复制城市',

  city: '城市',
  'city.id': '序号',
  'city.name': '名称',
  'city.province': '省',
  'city.transferToprovince': '转移到另一个省',
  'city.version': '版本',
  'city.addProductPrice': '新增产品价格',
  'city.removeProductPrice': '删除产品价格',
  'city.updateProductPrice': '更新产品价格',
  'city.copyProductPriceFrom': '复制产品价格',

  'city.addVehicleServiceCompany': '新增商户管理',
  'city.removeVehicleServiceCompany': '删除商户管理',
  'city.updateVehicleServiceCompany': '更新商户管理',
  'city.copyVehicleServiceCompanyFrom': '复制商户管理',

  'city.addInspectionStation': '新增检测站',
  'city.removeInspectionStation': '删除检测站',
  'city.updateInspectionStation': '更新检测站',
  'city.copyInspectionStationFrom': '复制检测站',

  'city.addVehicleInspectionOrder': '新增上线检测订单',
  'city.removeVehicleInspectionOrder': '删除上线检测订单',
  'city.updateVehicleInspectionOrder': '更新上线检测订单',
  'city.copyVehicleInspectionOrderFrom': '复制上线检测订单',

  availableProduct: '产品类型',
  'availableProduct.id': '序号',
  'availableProduct.productName': '产品名称',
  'availableProduct.serviceKey': '服务代码',
  'availableProduct.serviceDescription': '服务描述',
  'availableProduct.platform': '平台',
  'availableProduct.transferToplatform': '转移到另一个汽车检查平台',
  'availableProduct.version': '版本',
  'availableProduct.addAvailableService': '新增服务范围',
  'availableProduct.removeAvailableService': '删除服务范围',
  'availableProduct.updateAvailableService': '更新服务范围',
  'availableProduct.copyAvailableServiceFrom': '复制服务范围',

  'availableProduct.addProductPrice': '新增产品价格',
  'availableProduct.removeProductPrice': '删除产品价格',
  'availableProduct.updateProductPrice': '更新产品价格',
  'availableProduct.copyProductPriceFrom': '复制产品价格',

  'availableProduct.addAvailableInsurance': '新增保险增值服务',
  'availableProduct.removeAvailableInsurance': '删除保险增值服务',
  'availableProduct.updateAvailableInsurance': '更新保险增值服务',
  'availableProduct.copyAvailableInsuranceFrom': '复制保险增值服务',

  'availableProduct.addAvailableHandOverItem': '新增交接检查清单',
  'availableProduct.removeAvailableHandOverItem': '删除交接检查清单',
  'availableProduct.updateAvailableHandOverItem': '更新交接检查清单',
  'availableProduct.copyAvailableHandOverItemFrom': '复制交接检查清单',

  availableService: '服务范围',
  'availableService.id': '序号',
  'availableService.serviceName': '服务名称',
  'availableService.serviceKey': '服务代码',
  'availableService.serviceDescription': '服务描述',
  'availableService.availableProduct': '产品类型',
  'availableService.transferToavailableProduct': '转移到另一个可用的产品。',
  'availableService.version': '版本',
  'availableService.addVehicleRepairingAllowance': '新增汽车修理平台补贴',
  'availableService.removeVehicleRepairingAllowance': '删除汽车修理平台补贴',
  'availableService.updateVehicleRepairingAllowance': '更新汽车修理平台补贴',
  'availableService.copyVehicleRepairingAllowanceFrom': '复制汽车修理平台补贴',

  'availableService.addVehicleServiceCompanyBusinessScope':
    '新增服务提供商服务范围管理',
  'availableService.removeVehicleServiceCompanyBusinessScope':
    '删除服务提供商服务范围管理',
  'availableService.updateVehicleServiceCompanyBusinessScope':
    '更新服务提供商服务范围管理',
  'availableService.copyVehicleServiceCompanyBusinessScopeFrom':
    '复制服务提供商服务范围管理',

  'availableService.addCompanyEmployeeMessage': '新增消息管理',
  'availableService.removeCompanyEmployeeMessage': '删除消息管理',
  'availableService.updateCompanyEmployeeMessage': '更新消息管理',
  'availableService.copyCompanyEmployeeMessageFrom': '复制消息管理',

  'availableService.addVehicleInspectionOrderServiceLog':
    '新增车辆检测服务订单日志',
  'availableService.removeVehicleInspectionOrderServiceLog':
    '删除车辆检测服务订单日志',
  'availableService.updateVehicleInspectionOrderServiceLog':
    '更新车辆检测服务订单日志',
  'availableService.copyVehicleInspectionOrderServiceLogFrom':
    '复制车辆检测服务订单日志',

  productPrice: '产品价格',
  'productPrice.id': '序号',
  'productPrice.product': '产品',
  'productPrice.transferToproduct': '转移到另一个可用的产品。',
  'productPrice.city': '城市',
  'productPrice.transferTocity': '转移到另一个城市',
  'productPrice.vehicleType': '车辆类型',
  'productPrice.inspectionPrice': '检查价格',
  'productPrice.agentServicePrice': '代理服务价格',
  'productPrice.description': '描述',
  'productPrice.version': '版本',

  availableInsurance: '保险增值服务',
  'availableInsurance.id': '序号',
  'availableInsurance.insuranceName': '保险产品名称',
  'availableInsurance.insuranceVendor': '保险承保方',
  'availableInsurance.insurancePrice': '保险价格',
  'availableInsurance.summary': '概览',
  'availableInsurance.product': '产品',
  'availableInsurance.transferToproduct': '转移到另一个可用的产品。',
  'availableInsurance.version': '版本',
  'availableInsurance.addVehicleInspectionInsuranceOrder':
    '新增车辆检测保险服务订单',
  'availableInsurance.removeVehicleInspectionInsuranceOrder':
    '删除车辆检测保险服务订单',
  'availableInsurance.updateVehicleInspectionInsuranceOrder':
    '更新车辆检测保险服务订单',
  'availableInsurance.copyVehicleInspectionInsuranceOrderFrom':
    '复制车辆检测保险服务订单',

  'availableInsurance.addServiceInsuranceForInspection': '新增保险增值服务',
  'availableInsurance.removeServiceInsuranceForInspection': '删除保险增值服务',
  'availableInsurance.updateServiceInsuranceForInspection': '更新保险增值服务',
  'availableInsurance.copyServiceInsuranceForInspectionFrom':
    '复制保险增值服务',

  vehicleRepairingAllowance: '汽车修理平台补贴',
  'vehicleRepairingAllowance.id': '序号',
  'vehicleRepairingAllowance.allowanceTitle': '津贴标题',
  'vehicleRepairingAllowance.allowanceCode': '补贴代码',
  'vehicleRepairingAllowance.allowanceAmount': '补贴费用',
  'vehicleRepairingAllowance.service': '服务',
  'vehicleRepairingAllowance.transferToservice': '转到另一个可用的服务。',
  'vehicleRepairingAllowance.version': '版本',
  'vehicleRepairingAllowance.addRepairingQuotationItem': '新增维修报价项目',
  'vehicleRepairingAllowance.removeRepairingQuotationItem': '删除维修报价项目',
  'vehicleRepairingAllowance.updateRepairingQuotationItem': '更新维修报价项目',
  'vehicleRepairingAllowance.copyRepairingQuotationItemFrom':
    '复制维修报价项目',

  availableHandOverItem: '交接检查清单',
  'availableHandOverItem.id': '序号',
  'availableHandOverItem.checkItemName': '检查项目名称',
  'availableHandOverItem.checkItemDescription': '检查项目描述',
  'availableHandOverItem.product': '产品',
  'availableHandOverItem.transferToproduct': '转移到另一个可用的产品。',
  'availableHandOverItem.version': '版本',
  'availableHandOverItem.addHandOverChecklistItem': '新增移交清单项目',
  'availableHandOverItem.removeHandOverChecklistItem': '删除移交清单项目',
  'availableHandOverItem.updateHandOverChecklistItem': '更新移交清单项目',
  'availableHandOverItem.copyHandOverChecklistItemFrom': '复制移交清单项目',

  customer: '客户',
  'customer.id': '序号',
  'customer.nickName': '客户昵称',
  'customer.logoImage': '头像',
  'customer.weixinOpenid': 'WeixinOpenid',
  'customer.weixinAppid': 'WeixinAppid',
  'customer.secUser': 'SecUser',
  'customer.transferTosecUser': '转移到另一个SEC用户',
  'customer.platform': '平台',
  'customer.transferToplatform': '转移到另一个汽车检查平台',
  'customer.version': '版本',
  'customer.addVehicleInfo': '新增车辆信息',
  'customer.removeVehicleInfo': '删除车辆信息',
  'customer.updateVehicleInfo': '更新车辆信息',
  'customer.copyVehicleInfoFrom': '复制车辆信息',

  'customer.addVehicleInspectionOrder': '新增上线检测订单',
  'customer.removeVehicleInspectionOrder': '删除上线检测订单',
  'customer.updateVehicleInspectionOrder': '更新上线检测订单',
  'customer.copyVehicleInspectionOrderFrom': '复制上线检测订单',

  vehicleServiceCompany: '商户管理',
  'vehicleServiceCompany.id': '序号',
  'vehicleServiceCompany.companyName': '公司名称',
  'vehicleServiceCompany.operatingStatus': '服务状态',
  'vehicleServiceCompany.addressCity': '所在城市',
  'vehicleServiceCompany.transferToaddressCity': '转移到另一个城市',
  'vehicleServiceCompany.addressDetail': '所在地址',
  'vehicleServiceCompany.availableStoreService': '到店服务',
  'vehicleServiceCompany.availableHomeService': '上门服务',
  'vehicleServiceCompany.openingTime': '营业时间',
  'vehicleServiceCompany.longitude': '经度',
  'vehicleServiceCompany.latitude': '纬度',
  'vehicleServiceCompany.platform': '平台',
  'vehicleServiceCompany.transferToplatform': '转移到另一个汽车检查平台',
  'vehicleServiceCompany.version': '版本',
  'vehicleServiceCompany.addVehicleServiceCompanyBusinessScope':
    '新增服务提供商服务范围管理',
  'vehicleServiceCompany.removeVehicleServiceCompanyBusinessScope':
    '删除服务提供商服务范围管理',
  'vehicleServiceCompany.updateVehicleServiceCompanyBusinessScope':
    '更新服务提供商服务范围管理',
  'vehicleServiceCompany.copyVehicleServiceCompanyBusinessScopeFrom':
    '复制服务提供商服务范围管理',

  'vehicleServiceCompany.addVehicleServiceCompanyDispatcher': '新增派单管理',
  'vehicleServiceCompany.removeVehicleServiceCompanyDispatcher': '删除派单管理',
  'vehicleServiceCompany.updateVehicleServiceCompanyDispatcher': '更新派单管理',
  'vehicleServiceCompany.copyVehicleServiceCompanyDispatcherFrom':
    '复制派单管理',

  'vehicleServiceCompany.addVehicleServiceCompanyEmployee':
    '新增服务提供商员工管理',
  'vehicleServiceCompany.removeVehicleServiceCompanyEmployee':
    '删除服务提供商员工管理',
  'vehicleServiceCompany.updateVehicleServiceCompanyEmployee':
    '更新服务提供商员工管理',
  'vehicleServiceCompany.copyVehicleServiceCompanyEmployeeFrom':
    '复制服务提供商员工管理',

  'vehicleServiceCompany.addServiceVehicleMovementC2m': '新增收车服务',
  'vehicleServiceCompany.removeServiceVehicleMovementC2m': '删除收车服务',
  'vehicleServiceCompany.updateServiceVehicleMovementC2m': '更新收车服务',
  'vehicleServiceCompany.copyServiceVehicleMovementC2mFrom': '复制收车服务',

  'vehicleServiceCompany.addServiceVehicleMovementM2c': '新增还车服务',
  'vehicleServiceCompany.removeServiceVehicleMovementM2c': '删除还车服务',
  'vehicleServiceCompany.updateServiceVehicleMovementM2c': '更新还车服务',
  'vehicleServiceCompany.copyServiceVehicleMovementM2cFrom': '复制还车服务',

  'vehicleServiceCompany.addServiceFileMovementC2m': '新增收件服务',
  'vehicleServiceCompany.removeServiceFileMovementC2m': '删除收件服务',
  'vehicleServiceCompany.updateServiceFileMovementC2m': '更新收件服务',
  'vehicleServiceCompany.copyServiceFileMovementC2mFrom': '复制收件服务',

  'vehicleServiceCompany.addServiceFileMovementM2c': '新增还件服务',
  'vehicleServiceCompany.removeServiceFileMovementM2c': '删除还件服务',
  'vehicleServiceCompany.updateServiceFileMovementM2c': '更新还件服务',
  'vehicleServiceCompany.copyServiceFileMovementM2cFrom': '复制还件服务',

  vehicleServiceCompanyBusinessScope: '服务提供商服务范围管理',
  'vehicleServiceCompanyBusinessScope.id': '序号',
  'vehicleServiceCompanyBusinessScope.company': '商户',
  'vehicleServiceCompanyBusinessScope.transferTocompany':
    '转到另一家汽车服务公司。',
  'vehicleServiceCompanyBusinessScope.availableService': '服务范围',
  'vehicleServiceCompanyBusinessScope.transferToavailableService':
    '转到另一个可用的服务。',
  'vehicleServiceCompanyBusinessScope.version': '版本',

  vehicleServiceCompanyDispatcher: '派单管理',
  'vehicleServiceCompanyDispatcher.id': '序号',
  'vehicleServiceCompanyDispatcher.description': '描述',
  'vehicleServiceCompanyDispatcher.company': '商户',
  'vehicleServiceCompanyDispatcher.transferTocompany':
    '转到另一家汽车服务公司。',
  'vehicleServiceCompanyDispatcher.version': '版本',

  vehicleServiceCompanyEmployee: '服务提供商员工管理',
  'vehicleServiceCompanyEmployee.id': '序号',
  'vehicleServiceCompanyEmployee.employeeName': '员工的名字',
  'vehicleServiceCompanyEmployee.profileImage': '证件照片',
  'vehicleServiceCompanyEmployee.gender': '性别',
  'vehicleServiceCompanyEmployee.availableState': '工作状态',
  'vehicleServiceCompanyEmployee.innocentEvidenceImage': '无犯罪记录证明',
  'vehicleServiceCompanyEmployee.identityCardNumber': '身份证号码',
  'vehicleServiceCompanyEmployee.company': '商户',
  'vehicleServiceCompanyEmployee.transferTocompany': '转到另一家汽车服务公司。',
  'vehicleServiceCompanyEmployee.availableMoveCar': '是否可以移车',
  'vehicleServiceCompanyEmployee.availableInspectionCar': '是否可以检车',
  'vehicleServiceCompanyEmployee.availableRepairCar': '是否可以修车',
  'vehicleServiceCompanyEmployee.qualification': '资格',
  'vehicleServiceCompanyEmployee.qualify': '有资格',
  'vehicleServiceCompanyEmployee.serving': '服务',
  'vehicleServiceCompanyEmployee.serve': '服务',
  'vehicleServiceCompanyEmployee.termination': '终止',
  'vehicleServiceCompanyEmployee.terminate': '终止',
  'vehicleServiceCompanyEmployee.currentStatus': '当前状态',
  'vehicleServiceCompanyEmployee.version': '版本',
  'vehicleServiceCompanyEmployee.addEmployeeDrivingLicense': '新增员工驾驶证',
  'vehicleServiceCompanyEmployee.removeEmployeeDrivingLicense':
    '删除员工驾驶证',
  'vehicleServiceCompanyEmployee.updateEmployeeDrivingLicense':
    '更新员工驾驶证',
  'vehicleServiceCompanyEmployee.copyEmployeeDrivingLicenseFrom':
    '复制员工驾驶证',

  'vehicleServiceCompanyEmployee.addCompanyEmployeeMessage': '新增消息管理',
  'vehicleServiceCompanyEmployee.removeCompanyEmployeeMessage': '删除消息管理',
  'vehicleServiceCompanyEmployee.updateCompanyEmployeeMessage': '更新消息管理',
  'vehicleServiceCompanyEmployee.copyCompanyEmployeeMessageFrom':
    '复制消息管理',

  'vehicleServiceCompanyEmployee.addCompanyEmployeeMessage': '新增消息管理',
  'vehicleServiceCompanyEmployee.removeCompanyEmployeeMessage': '删除消息管理',
  'vehicleServiceCompanyEmployee.updateCompanyEmployeeMessage': '更新消息管理',
  'vehicleServiceCompanyEmployee.copyCompanyEmployeeMessageFrom':
    '复制消息管理',

  'vehicleServiceCompanyEmployee.addVehicleInspectionOrderServiceLog':
    '新增车辆检测服务订单日志',
  'vehicleServiceCompanyEmployee.removeVehicleInspectionOrderServiceLog':
    '删除车辆检测服务订单日志',
  'vehicleServiceCompanyEmployee.updateVehicleInspectionOrderServiceLog':
    '更新车辆检测服务订单日志',
  'vehicleServiceCompanyEmployee.copyVehicleInspectionOrderServiceLogFrom':
    '复制车辆检测服务订单日志',

  'vehicleServiceCompanyEmployee.addServiceVehicleMovementC2m': '新增收车服务',
  'vehicleServiceCompanyEmployee.removeServiceVehicleMovementC2m':
    '删除收车服务',
  'vehicleServiceCompanyEmployee.updateServiceVehicleMovementC2m':
    '更新收车服务',
  'vehicleServiceCompanyEmployee.copyServiceVehicleMovementC2mFrom':
    '复制收车服务',

  'vehicleServiceCompanyEmployee.addServiceVehicleMovementM2m': '新增移车服务',
  'vehicleServiceCompanyEmployee.removeServiceVehicleMovementM2m':
    '删除移车服务',
  'vehicleServiceCompanyEmployee.updateServiceVehicleMovementM2m':
    '更新移车服务',
  'vehicleServiceCompanyEmployee.copyServiceVehicleMovementM2mFrom':
    '复制移车服务',

  'vehicleServiceCompanyEmployee.addServiceVehicleMovementM2m': '新增移车服务',
  'vehicleServiceCompanyEmployee.removeServiceVehicleMovementM2m':
    '删除移车服务',
  'vehicleServiceCompanyEmployee.updateServiceVehicleMovementM2m':
    '更新移车服务',
  'vehicleServiceCompanyEmployee.copyServiceVehicleMovementM2mFrom':
    '复制移车服务',

  'vehicleServiceCompanyEmployee.addServiceVehicleMovementM2m': '新增移车服务',
  'vehicleServiceCompanyEmployee.removeServiceVehicleMovementM2m':
    '删除移车服务',
  'vehicleServiceCompanyEmployee.updateServiceVehicleMovementM2m':
    '更新移车服务',
  'vehicleServiceCompanyEmployee.copyServiceVehicleMovementM2mFrom':
    '复制移车服务',

  'vehicleServiceCompanyEmployee.addServiceVehicleMovementM2c': '新增还车服务',
  'vehicleServiceCompanyEmployee.removeServiceVehicleMovementM2c':
    '删除还车服务',
  'vehicleServiceCompanyEmployee.updateServiceVehicleMovementM2c':
    '更新还车服务',
  'vehicleServiceCompanyEmployee.copyServiceVehicleMovementM2cFrom':
    '复制还车服务',

  'vehicleServiceCompanyEmployee.addServiceFileMovementC2m': '新增收件服务',
  'vehicleServiceCompanyEmployee.removeServiceFileMovementC2m': '删除收件服务',
  'vehicleServiceCompanyEmployee.updateServiceFileMovementC2m': '更新收件服务',
  'vehicleServiceCompanyEmployee.copyServiceFileMovementC2mFrom':
    '复制收件服务',

  'vehicleServiceCompanyEmployee.addServiceFileMovementM2m': '新增移件服务',
  'vehicleServiceCompanyEmployee.removeServiceFileMovementM2m': '删除移件服务',
  'vehicleServiceCompanyEmployee.updateServiceFileMovementM2m': '更新移件服务',
  'vehicleServiceCompanyEmployee.copyServiceFileMovementM2mFrom':
    '复制移件服务',

  'vehicleServiceCompanyEmployee.addServiceFileMovementM2m': '新增移件服务',
  'vehicleServiceCompanyEmployee.removeServiceFileMovementM2m': '删除移件服务',
  'vehicleServiceCompanyEmployee.updateServiceFileMovementM2m': '更新移件服务',
  'vehicleServiceCompanyEmployee.copyServiceFileMovementM2mFrom':
    '复制移件服务',

  'vehicleServiceCompanyEmployee.addServiceFileMovementM2m': '新增移件服务',
  'vehicleServiceCompanyEmployee.removeServiceFileMovementM2m': '删除移件服务',
  'vehicleServiceCompanyEmployee.updateServiceFileMovementM2m': '更新移件服务',
  'vehicleServiceCompanyEmployee.copyServiceFileMovementM2mFrom':
    '复制移件服务',

  'vehicleServiceCompanyEmployee.addServiceFileMovementM2c': '新增还件服务',
  'vehicleServiceCompanyEmployee.removeServiceFileMovementM2c': '删除还件服务',
  'vehicleServiceCompanyEmployee.updateServiceFileMovementM2c': '更新还件服务',
  'vehicleServiceCompanyEmployee.copyServiceFileMovementM2cFrom':
    '复制还件服务',

  'vehicleServiceCompanyEmployee.addServiceInsuranceForInspection':
    '新增保险增值服务',
  'vehicleServiceCompanyEmployee.removeServiceInsuranceForInspection':
    '删除保险增值服务',
  'vehicleServiceCompanyEmployee.updateServiceInsuranceForInspection':
    '更新保险增值服务',
  'vehicleServiceCompanyEmployee.copyServiceInsuranceForInspectionFrom':
    '复制保险增值服务',

  'vehicleServiceCompanyEmployee.addServiceVehicleInspection':
    '新增车辆上线检测结果',
  'vehicleServiceCompanyEmployee.removeServiceVehicleInspection':
    '删除车辆上线检测结果',
  'vehicleServiceCompanyEmployee.updateServiceVehicleInspection':
    '更新车辆上线检测结果',
  'vehicleServiceCompanyEmployee.copyServiceVehicleInspectionFrom':
    '复制车辆上线检测结果',

  'vehicleServiceCompanyEmployee.addServiceFileInspection': '新增6年免检服务',
  'vehicleServiceCompanyEmployee.removeServiceFileInspection':
    '删除6年免检服务',
  'vehicleServiceCompanyEmployee.updateServiceFileInspection':
    '更新6年免检服务',
  'vehicleServiceCompanyEmployee.copyServiceFileInspectionFrom':
    '复制6年免检服务',

  'vehicleServiceCompanyEmployee.addServiceVehicleRepairing': '新增修车服务',
  'vehicleServiceCompanyEmployee.removeServiceVehicleRepairing': '删除修车服务',
  'vehicleServiceCompanyEmployee.updateServiceVehicleRepairing': '更新修车服务',
  'vehicleServiceCompanyEmployee.copyServiceVehicleRepairingFrom':
    '复制修车服务',

  companyEmployeeQualification: '公司员工资格',
  'companyEmployeeQualification.id': '序号',
  'companyEmployeeQualification.eventTime': '事件时间',
  'companyEmployeeQualification.who': '谁',
  'companyEmployeeQualification.comment': '评论',
  'companyEmployeeQualification.version': '版本',
  'companyEmployeeQualification.addVehicleServiceCompanyEmployee':
    '新增服务提供商员工管理',
  'companyEmployeeQualification.removeVehicleServiceCompanyEmployee':
    '删除服务提供商员工管理',
  'companyEmployeeQualification.updateVehicleServiceCompanyEmployee':
    '更新服务提供商员工管理',
  'companyEmployeeQualification.copyVehicleServiceCompanyEmployeeFrom':
    '复制服务提供商员工管理',

  companyEmployeeServing: '公司员工服务',
  'companyEmployeeServing.id': '序号',
  'companyEmployeeServing.eventTime': '事件时间',
  'companyEmployeeServing.who': '谁',
  'companyEmployeeServing.comment': '评论',
  'companyEmployeeServing.version': '版本',
  'companyEmployeeServing.addVehicleServiceCompanyEmployee':
    '新增服务提供商员工管理',
  'companyEmployeeServing.removeVehicleServiceCompanyEmployee':
    '删除服务提供商员工管理',
  'companyEmployeeServing.updateVehicleServiceCompanyEmployee':
    '更新服务提供商员工管理',
  'companyEmployeeServing.copyVehicleServiceCompanyEmployeeFrom':
    '复制服务提供商员工管理',

  companyEmployeeTermination: '公司员工终止',
  'companyEmployeeTermination.id': '序号',
  'companyEmployeeTermination.who': '谁',
  'companyEmployeeTermination.eventTime': '事件时间',
  'companyEmployeeTermination.comment': '评论',
  'companyEmployeeTermination.version': '版本',
  'companyEmployeeTermination.addVehicleServiceCompanyEmployee':
    '新增服务提供商员工管理',
  'companyEmployeeTermination.removeVehicleServiceCompanyEmployee':
    '删除服务提供商员工管理',
  'companyEmployeeTermination.updateVehicleServiceCompanyEmployee':
    '更新服务提供商员工管理',
  'companyEmployeeTermination.copyVehicleServiceCompanyEmployeeFrom':
    '复制服务提供商员工管理',

  employeeDrivingLicense: '员工驾驶证',
  'employeeDrivingLicense.id': '序号',
  'employeeDrivingLicense.employee': '员工',
  'employeeDrivingLicense.transferToemployee': '转到另一家汽车服务公司的员工。',
  'employeeDrivingLicense.holderName': '姓名',
  'employeeDrivingLicense.licenseType': '准驾车型',
  'employeeDrivingLicense.licenseNumber': '驾驶证号码',
  'employeeDrivingLicense.expirationDate': '失效日期',
  'employeeDrivingLicense.image1': '图1',
  'employeeDrivingLicense.image2': '图2',
  'employeeDrivingLicense.image3': '图3',
  'employeeDrivingLicense.image4': '图4',
  'employeeDrivingLicense.image5': '图5',
  'employeeDrivingLicense.version': '版本',

  companyEmployeeMessage: '消息管理',
  'companyEmployeeMessage.id': '序号',
  'companyEmployeeMessage.title': '标题',
  'companyEmployeeMessage.messageContent': '消息内容',
  'companyEmployeeMessage.sender': '发送方',
  'companyEmployeeMessage.transferTosender': '转到另一家汽车服务公司的员工。',
  'companyEmployeeMessage.receiver': '接收方',
  'companyEmployeeMessage.transferToreceiver': '转到另一家汽车服务公司的员工。',
  'companyEmployeeMessage.serviceType': '服务类型',
  'companyEmployeeMessage.transferToserviceType': '转到另一个可用的服务。',
  'companyEmployeeMessage.serviceTicket': '服务单号',
  'companyEmployeeMessage.sendTime': '发送时间',
  'companyEmployeeMessage.readTime': '阅读时间',
  'companyEmployeeMessage.status': '状态',
  'companyEmployeeMessage.version': '版本',

  inspectionStation: '检测站',
  'inspectionStation.id': '序号',
  'inspectionStation.name': '名称',
  'inspectionStation.operatingStatus': '服务状态',
  'inspectionStation.addressCity': '所在城市',
  'inspectionStation.transferToaddressCity': '转移到另一个城市',
  'inspectionStation.addressDetail': '所在地址',
  'inspectionStation.location': '位置',
  'inspectionStation.contactName': '联系人姓名',
  'inspectionStation.contactMobile': '联系手机',
  'inspectionStation.metrologyAccreditationImage': '计量资格认证',
  'inspectionStation.version': '版本',
  'inspectionStation.addServiceVehicleInspection': '新增车辆上线检测结果',
  'inspectionStation.removeServiceVehicleInspection': '删除车辆上线检测结果',
  'inspectionStation.updateServiceVehicleInspection': '更新车辆上线检测结果',
  'inspectionStation.copyServiceVehicleInspectionFrom': '复制车辆上线检测结果',

  'inspectionStation.addServiceFileInspection': '新增6年免检服务',
  'inspectionStation.removeServiceFileInspection': '删除6年免检服务',
  'inspectionStation.updateServiceFileInspection': '更新6年免检服务',
  'inspectionStation.copyServiceFileInspectionFrom': '复制6年免检服务',

  vehicleInfo: '车辆信息',
  'vehicleInfo.id': '序号',
  'vehicleInfo.licensePlateNumber': '车牌号码',
  'vehicleInfo.vehicleType': '车辆类型',
  'vehicleInfo.useCharacter': '使用性质',
  'vehicleInfo.seatsQuantity': '核准座位数',
  'vehicleInfo.registrationDate': '注册日期',
  'vehicleInfo.inspectionValidationDate': '检测有效期',
  'vehicleInfo.insuranceValidationDate': '保险有效期',
  'vehicleInfo.engineNumber': '发动机号',
  'vehicleInfo.vehicleIdentificationNumber': '车架号',
  'vehicleInfo.vehiclePermitIssueDate': '发证日期',
  'vehicleInfo.vehiclePermitHolderName': '所有人',
  'vehicleInfo.vehiclePermitNumber': '车辆行驶证号码',
  'vehicleInfo.vehiclePermitExpirationDate': '行驶证有效期',
  'vehicleInfo.vehiclePermitImage1': '图1',
  'vehicleInfo.vehiclePermitImage2': '图2',
  'vehicleInfo.vehiclePermitImage3': '图3',
  'vehicleInfo.vehiclePermitImage4': '图4',
  'vehicleInfo.vehiclePermitImage5': '图5',
  'vehicleInfo.customer': '客户',
  'vehicleInfo.transferTocustomer': '转移到另一个客户',
  'vehicleInfo.platform': '平台',
  'vehicleInfo.transferToplatform': '转移到另一个汽车检查平台',
  'vehicleInfo.version': '版本',

  vehicleInspectionOrder: '上线检测订单',
  'vehicleInspectionOrder.id': '序号',
  'vehicleInspectionOrder.orderStatus': '订单状态',
  'vehicleInspectionOrder.customer': '客户',
  'vehicleInspectionOrder.transferTocustomer': '转移到另一个客户',
  'vehicleInspectionOrder.createTime': '创建时间',
  'vehicleInspectionOrder.planInspectionDate': '计划检查日期',
  'vehicleInspectionOrder.trafficAccidentAnnouncement': '交通事故公告',
  'vehicleInspectionOrder.homePickUp': '家里收拾',
  'vehicleInspectionOrder.contactName': '联系人姓名',
  'vehicleInspectionOrder.contactMobileNumber': '联系手机号码',
  'vehicleInspectionOrder.contactAddressCity': '城市',
  'vehicleInspectionOrder.transferTocontactAddressCity': '转移到另一个城市',
  'vehicleInspectionOrder.contactAddressDetail': '地址',
  'vehicleInspectionOrder.vehicleLicensePlateNumber': '车牌号码',
  'vehicleInspectionOrder.vehicleType': '车辆类型',
  'vehicleInspectionOrder.vehicleUseCharacter': '使用性质',
  'vehicleInspectionOrder.vehicleSeatsQuantity': '核准座位数',
  'vehicleInspectionOrder.vehicleRegistrationDate': '注册日期',
  'vehicleInspectionOrder.inspectionValidationDate': '检测有效期',
  'vehicleInspectionOrder.insuranceValidationDate': '保险有效期',
  'vehicleInspectionOrder.engineNumber': '发动机号',
  'vehicleInspectionOrder.vehicleIdentificationNumber': '车架号',
  'vehicleInspectionOrder.vehiclePermitIssueDate': '发证日期',
  'vehicleInspectionOrder.vehiclePermitHolderName': '所有人',
  'vehicleInspectionOrder.vehiclePermitNumber': '车辆行驶证号码',
  'vehicleInspectionOrder.vehiclePermitExpirationDate': '行驶证有效期',
  'vehicleInspectionOrder.vehiclePermitImage1': '图1',
  'vehicleInspectionOrder.vehiclePermitImage2': '图2',
  'vehicleInspectionOrder.vehiclePermitImage3': '图3',
  'vehicleInspectionOrder.vehiclePermitImage4': '图4',
  'vehicleInspectionOrder.vehiclePermitImage5': '图5',
  'vehicleInspectionOrder.platform': '平台',
  'vehicleInspectionOrder.transferToplatform': '转移到另一个汽车检查平台',
  'vehicleInspectionOrder.version': '版本',
  'vehicleInspectionOrder.addVehicleInspectionInsuranceOrder':
    '新增车辆检测保险服务订单',
  'vehicleInspectionOrder.removeVehicleInspectionInsuranceOrder':
    '删除车辆检测保险服务订单',
  'vehicleInspectionOrder.updateVehicleInspectionInsuranceOrder':
    '更新车辆检测保险服务订单',
  'vehicleInspectionOrder.copyVehicleInspectionInsuranceOrderFrom':
    '复制车辆检测保险服务订单',

  'vehicleInspectionOrder.addVehicleInspectionOrderServiceLog':
    '新增车辆检测服务订单日志',
  'vehicleInspectionOrder.removeVehicleInspectionOrderServiceLog':
    '删除车辆检测服务订单日志',
  'vehicleInspectionOrder.updateVehicleInspectionOrderServiceLog':
    '更新车辆检测服务订单日志',
  'vehicleInspectionOrder.copyVehicleInspectionOrderServiceLogFrom':
    '复制车辆检测服务订单日志',

  'vehicleInspectionOrder.addVehicleInspectionOrderCoupon': '新增优惠券',
  'vehicleInspectionOrder.removeVehicleInspectionOrderCoupon': '删除优惠券',
  'vehicleInspectionOrder.updateVehicleInspectionOrderCoupon': '更新优惠券',
  'vehicleInspectionOrder.copyVehicleInspectionOrderCouponFrom': '复制优惠券',

  'vehicleInspectionOrder.addVehicleInspectionOrderPayment': '新增订单支付管理',
  'vehicleInspectionOrder.removeVehicleInspectionOrderPayment':
    '删除订单支付管理',
  'vehicleInspectionOrder.updateVehicleInspectionOrderPayment':
    '更新订单支付管理',
  'vehicleInspectionOrder.copyVehicleInspectionOrderPaymentFrom':
    '复制订单支付管理',

  'vehicleInspectionOrder.addHandOverChecklistItem': '新增移交清单项目',
  'vehicleInspectionOrder.removeHandOverChecklistItem': '删除移交清单项目',
  'vehicleInspectionOrder.updateHandOverChecklistItem': '更新移交清单项目',
  'vehicleInspectionOrder.copyHandOverChecklistItemFrom': '复制移交清单项目',

  'vehicleInspectionOrder.addServiceVehicleMovementC2m': '新增收车服务',
  'vehicleInspectionOrder.removeServiceVehicleMovementC2m': '删除收车服务',
  'vehicleInspectionOrder.updateServiceVehicleMovementC2m': '更新收车服务',
  'vehicleInspectionOrder.copyServiceVehicleMovementC2mFrom': '复制收车服务',

  'vehicleInspectionOrder.addServiceVehicleMovementM2m': '新增移车服务',
  'vehicleInspectionOrder.removeServiceVehicleMovementM2m': '删除移车服务',
  'vehicleInspectionOrder.updateServiceVehicleMovementM2m': '更新移车服务',
  'vehicleInspectionOrder.copyServiceVehicleMovementM2mFrom': '复制移车服务',

  'vehicleInspectionOrder.addServiceVehicleMovementM2c': '新增还车服务',
  'vehicleInspectionOrder.removeServiceVehicleMovementM2c': '删除还车服务',
  'vehicleInspectionOrder.updateServiceVehicleMovementM2c': '更新还车服务',
  'vehicleInspectionOrder.copyServiceVehicleMovementM2cFrom': '复制还车服务',

  'vehicleInspectionOrder.addServiceFileMovementC2m': '新增收件服务',
  'vehicleInspectionOrder.removeServiceFileMovementC2m': '删除收件服务',
  'vehicleInspectionOrder.updateServiceFileMovementC2m': '更新收件服务',
  'vehicleInspectionOrder.copyServiceFileMovementC2mFrom': '复制收件服务',

  'vehicleInspectionOrder.addServiceFileMovementM2m': '新增移件服务',
  'vehicleInspectionOrder.removeServiceFileMovementM2m': '删除移件服务',
  'vehicleInspectionOrder.updateServiceFileMovementM2m': '更新移件服务',
  'vehicleInspectionOrder.copyServiceFileMovementM2mFrom': '复制移件服务',

  'vehicleInspectionOrder.addServiceFileMovementM2c': '新增还件服务',
  'vehicleInspectionOrder.removeServiceFileMovementM2c': '删除还件服务',
  'vehicleInspectionOrder.updateServiceFileMovementM2c': '更新还件服务',
  'vehicleInspectionOrder.copyServiceFileMovementM2cFrom': '复制还件服务',

  'vehicleInspectionOrder.addServiceInsuranceForInspection': '新增保险增值服务',
  'vehicleInspectionOrder.removeServiceInsuranceForInspection':
    '删除保险增值服务',
  'vehicleInspectionOrder.updateServiceInsuranceForInspection':
    '更新保险增值服务',
  'vehicleInspectionOrder.copyServiceInsuranceForInspectionFrom':
    '复制保险增值服务',

  'vehicleInspectionOrder.addServiceVehicleInspection': '新增车辆上线检测结果',
  'vehicleInspectionOrder.removeServiceVehicleInspection':
    '删除车辆上线检测结果',
  'vehicleInspectionOrder.updateServiceVehicleInspection':
    '更新车辆上线检测结果',
  'vehicleInspectionOrder.copyServiceVehicleInspectionFrom':
    '复制车辆上线检测结果',

  'vehicleInspectionOrder.addServiceFileInspection': '新增6年免检服务',
  'vehicleInspectionOrder.removeServiceFileInspection': '删除6年免检服务',
  'vehicleInspectionOrder.updateServiceFileInspection': '更新6年免检服务',
  'vehicleInspectionOrder.copyServiceFileInspectionFrom': '复制6年免检服务',

  'vehicleInspectionOrder.addServiceVehicleRepairing': '新增修车服务',
  'vehicleInspectionOrder.removeServiceVehicleRepairing': '删除修车服务',
  'vehicleInspectionOrder.updateServiceVehicleRepairing': '更新修车服务',
  'vehicleInspectionOrder.copyServiceVehicleRepairingFrom': '复制修车服务',

  vehicleInspectionInsuranceOrder: '车辆检测保险服务订单',
  'vehicleInspectionInsuranceOrder.id': '序号',
  'vehicleInspectionInsuranceOrder.insurance': '保险产品',
  'vehicleInspectionInsuranceOrder.transferToinsurance':
    '转移到另一个可用的保险。',
  'vehicleInspectionInsuranceOrder.mainOrder': '主订单',
  'vehicleInspectionInsuranceOrder.transferTomainOrder': '转至另一车辆检验令。',
  'vehicleInspectionInsuranceOrder.version': '版本',

  vehicleInspectionOrderServiceLog: '车辆检测服务订单日志',
  'vehicleInspectionOrderServiceLog.id': '序号',
  'vehicleInspectionOrderServiceLog.summary': '概览',
  'vehicleInspectionOrderServiceLog.createTime': '创建时间',
  'vehicleInspectionOrderServiceLog.responsibleWorker': '服务人员',
  'vehicleInspectionOrderServiceLog.transferToresponsibleWorker':
    '转到另一家汽车服务公司的员工。',
  'vehicleInspectionOrderServiceLog.location': '位置',
  'vehicleInspectionOrderServiceLog.serviceType': '服务类型',
  'vehicleInspectionOrderServiceLog.transferToserviceType':
    '转到另一个可用的服务。',
  'vehicleInspectionOrderServiceLog.serviceTicket': '服务单号',
  'vehicleInspectionOrderServiceLog.mainOrder': '主订单',
  'vehicleInspectionOrderServiceLog.transferTomainOrder':
    '转至另一车辆检验令。',
  'vehicleInspectionOrderServiceLog.version': '版本',

  vehicleInspectionOrderCoupon: '优惠券',
  'vehicleInspectionOrderCoupon.id': '序号',
  'vehicleInspectionOrderCoupon.title': '标题',
  'vehicleInspectionOrderCoupon.startDate': '生效日期',
  'vehicleInspectionOrderCoupon.expirationDate': '失效日期',
  'vehicleInspectionOrderCoupon.amount': '金额',
  'vehicleInspectionOrderCoupon.code': '优惠码',
  'vehicleInspectionOrderCoupon.usedDate': '使用日期',
  'vehicleInspectionOrderCoupon.mainOrder': '主订单',
  'vehicleInspectionOrderCoupon.transferTomainOrder': '转至另一车辆检验令。',
  'vehicleInspectionOrderCoupon.version': '版本',

  vehicleInspectionOrderPayment: '订单支付管理',
  'vehicleInspectionOrderPayment.id': '序号',
  'vehicleInspectionOrderPayment.paymentMethod': '支付方式',
  'vehicleInspectionOrderPayment.paymentAmount': '应付款',
  'vehicleInspectionOrderPayment.paymentStatus': '付款状态',
  'vehicleInspectionOrderPayment.mainOrder': '主订单',
  'vehicleInspectionOrderPayment.transferTomainOrder': '转至另一车辆检验令。',
  'vehicleInspectionOrderPayment.version': '版本',

  handOverChecklistItem: '移交清单项目',
  'handOverChecklistItem.id': '序号',
  'handOverChecklistItem.question': '问题',
  'handOverChecklistItem.transferToquestion': '转移到另一个交接检查清单',
  'handOverChecklistItem.mainOrder': '主订单',
  'handOverChecklistItem.transferTomainOrder': '转至另一车辆检验令。',
  'handOverChecklistItem.version': '版本',

  serviceVehicleMovementC2m: '收车服务',
  'serviceVehicleMovementC2m.id': '序号',
  'serviceVehicleMovementC2m.serviceStatus': '服务状态',
  'serviceVehicleMovementC2m.responsibleWorker': '服务人员',
  'serviceVehicleMovementC2m.transferToresponsibleWorker':
    '转到另一家汽车服务公司的员工。',
  'serviceVehicleMovementC2m.rejectComments': '拒收原因',
  'serviceVehicleMovementC2m.rejectEvidence1': '拒收凭证1',
  'serviceVehicleMovementC2m.rejectEvidence2': '拒收凭证2',
  'serviceVehicleMovementC2m.rejectEvidence3': '拒收凭证3',
  'serviceVehicleMovementC2m.rejectEvidence4': '拒收凭证4',
  'serviceVehicleMovementC2m.rejectEvidence5': '拒收凭证5',
  'serviceVehicleMovementC2m.startTime': '开始时间',
  'serviceVehicleMovementC2m.lastLocation': '最后的位置',
  'serviceVehicleMovementC2m.lastUpdateTime': '最后更新时间',
  'serviceVehicleMovementC2m.mainOrder': '主订单',
  'serviceVehicleMovementC2m.transferTomainOrder': '转至另一车辆检验令。',
  'serviceVehicleMovementC2m.movementPurpose': '移动目的',
  'serviceVehicleMovementC2m.contactName': '联系人姓名',
  'serviceVehicleMovementC2m.contactMobileNumber': '联系手机号码',
  'serviceVehicleMovementC2m.merchant': '商户',
  'serviceVehicleMovementC2m.transferTomerchant': '转到另一家汽车服务公司。',
  'serviceVehicleMovementC2m.version': '版本',
  'serviceVehicleMovementC2m.addServiceVehicleMovementC2mChecklistResult':
    '新增收车检车结果',
  'serviceVehicleMovementC2m.removeServiceVehicleMovementC2mChecklistResult':
    '删除收车检车结果',
  'serviceVehicleMovementC2m.updateServiceVehicleMovementC2mChecklistResult':
    '更新收车检车结果',
  'serviceVehicleMovementC2m.copyServiceVehicleMovementC2mChecklistResultFrom':
    '复制收车检车结果',

  serviceVehicleMovementC2mChecklistResult: '收车检车结果',
  'serviceVehicleMovementC2mChecklistResult.id': '序号',
  'serviceVehicleMovementC2mChecklistResult.service': '服务',
  'serviceVehicleMovementC2mChecklistResult.transferToservice':
    '转移到另一个服务车辆移动C2m。',
  'serviceVehicleMovementC2mChecklistResult.checkResult': '检查结果',
  'serviceVehicleMovementC2mChecklistResult.checkResultComments':
    '检验结果的评论',
  'serviceVehicleMovementC2mChecklistResult.createTime': '创建时间',
  'serviceVehicleMovementC2mChecklistResult.image1': '图1',
  'serviceVehicleMovementC2mChecklistResult.image2': '图2',
  'serviceVehicleMovementC2mChecklistResult.image3': '图3',
  'serviceVehicleMovementC2mChecklistResult.image4': '图4',
  'serviceVehicleMovementC2mChecklistResult.image5': '图5',
  'serviceVehicleMovementC2mChecklistResult.version': '版本',

  serviceVehicleMovementM2m: '移车服务',
  'serviceVehicleMovementM2m.id': '序号',
  'serviceVehicleMovementM2m.serviceStatus': '服务状态',
  'serviceVehicleMovementM2m.responsibleWorker': '服务人员',
  'serviceVehicleMovementM2m.transferToresponsibleWorker':
    '转到另一家汽车服务公司的员工。',
  'serviceVehicleMovementM2m.rejectComments': '拒收原因',
  'serviceVehicleMovementM2m.rejectEvidence1': '拒收凭证1',
  'serviceVehicleMovementM2m.rejectEvidence2': '拒收凭证2',
  'serviceVehicleMovementM2m.rejectEvidence3': '拒收凭证3',
  'serviceVehicleMovementM2m.rejectEvidence4': '拒收凭证4',
  'serviceVehicleMovementM2m.rejectEvidence5': '拒收凭证5',
  'serviceVehicleMovementM2m.startTime': '开始时间',
  'serviceVehicleMovementM2m.lastLocation': '最后的位置',
  'serviceVehicleMovementM2m.lastUpdateTime': '最后更新时间',
  'serviceVehicleMovementM2m.mainOrder': '主订单',
  'serviceVehicleMovementM2m.transferTomainOrder': '转至另一车辆检验令。',
  'serviceVehicleMovementM2m.movementPurpose': '移动目的',
  'serviceVehicleMovementM2m.driver': '司机',
  'serviceVehicleMovementM2m.transferTodriver':
    '转到另一家汽车服务公司的员工。',
  'serviceVehicleMovementM2m.receiver': '接收方',
  'serviceVehicleMovementM2m.transferToreceiver':
    '转到另一家汽车服务公司的员工。',
  'serviceVehicleMovementM2m.version': '版本',
  'serviceVehicleMovementM2m.addServiceVehicleMovementM2mChecklistResult':
    '新增移车服务检查结果',
  'serviceVehicleMovementM2m.removeServiceVehicleMovementM2mChecklistResult':
    '删除移车服务检查结果',
  'serviceVehicleMovementM2m.updateServiceVehicleMovementM2mChecklistResult':
    '更新移车服务检查结果',
  'serviceVehicleMovementM2m.copyServiceVehicleMovementM2mChecklistResultFrom':
    '复制移车服务检查结果',

  serviceVehicleMovementM2mChecklistResult: '移车服务检查结果',
  'serviceVehicleMovementM2mChecklistResult.id': '序号',
  'serviceVehicleMovementM2mChecklistResult.service': '服务',
  'serviceVehicleMovementM2mChecklistResult.transferToservice':
    '转移到另一个服务车辆移动M2m。',
  'serviceVehicleMovementM2mChecklistResult.checkResult': '检查结果',
  'serviceVehicleMovementM2mChecklistResult.checkResultComments':
    '检验结果的评论',
  'serviceVehicleMovementM2mChecklistResult.createTime': '创建时间',
  'serviceVehicleMovementM2mChecklistResult.image1': '图1',
  'serviceVehicleMovementM2mChecklistResult.image2': '图2',
  'serviceVehicleMovementM2mChecklistResult.image3': '图3',
  'serviceVehicleMovementM2mChecklistResult.image4': '图4',
  'serviceVehicleMovementM2mChecklistResult.image5': '图5',
  'serviceVehicleMovementM2mChecklistResult.version': '版本',

  serviceVehicleMovementM2c: '还车服务',
  'serviceVehicleMovementM2c.id': '序号',
  'serviceVehicleMovementM2c.serviceStatus': '服务状态',
  'serviceVehicleMovementM2c.responsibleWorker': '服务人员',
  'serviceVehicleMovementM2c.transferToresponsibleWorker':
    '转到另一家汽车服务公司的员工。',
  'serviceVehicleMovementM2c.rejectComments': '拒收原因',
  'serviceVehicleMovementM2c.rejectEvidence1': '拒收凭证1',
  'serviceVehicleMovementM2c.rejectEvidence2': '拒收凭证2',
  'serviceVehicleMovementM2c.rejectEvidence3': '拒收凭证3',
  'serviceVehicleMovementM2c.rejectEvidence4': '拒收凭证4',
  'serviceVehicleMovementM2c.rejectEvidence5': '拒收凭证5',
  'serviceVehicleMovementM2c.startTime': '开始时间',
  'serviceVehicleMovementM2c.lastLocation': '最后的位置',
  'serviceVehicleMovementM2c.lastUpdateTime': '最后更新时间',
  'serviceVehicleMovementM2c.mainOrder': '主订单',
  'serviceVehicleMovementM2c.transferTomainOrder': '转至另一车辆检验令。',
  'serviceVehicleMovementM2c.movementPurpose': '移动目的',
  'serviceVehicleMovementM2c.contactName': '联系人姓名',
  'serviceVehicleMovementM2c.contactMobileNumber': '联系手机号码',
  'serviceVehicleMovementM2c.merchant': '商户',
  'serviceVehicleMovementM2c.transferTomerchant': '转到另一家汽车服务公司。',
  'serviceVehicleMovementM2c.version': '版本',
  'serviceVehicleMovementM2c.addServiceVehicleMovementM2cChecklistResult':
    '新增还车服务检查结果',
  'serviceVehicleMovementM2c.removeServiceVehicleMovementM2cChecklistResult':
    '删除还车服务检查结果',
  'serviceVehicleMovementM2c.updateServiceVehicleMovementM2cChecklistResult':
    '更新还车服务检查结果',
  'serviceVehicleMovementM2c.copyServiceVehicleMovementM2cChecklistResultFrom':
    '复制还车服务检查结果',

  serviceVehicleMovementM2cChecklistResult: '还车服务检查结果',
  'serviceVehicleMovementM2cChecklistResult.id': '序号',
  'serviceVehicleMovementM2cChecklistResult.service': '服务',
  'serviceVehicleMovementM2cChecklistResult.transferToservice':
    '转到另一个服务车辆移动M2c。',
  'serviceVehicleMovementM2cChecklistResult.checkResult': '检查结果',
  'serviceVehicleMovementM2cChecklistResult.checkResultComments':
    '检验结果的评论',
  'serviceVehicleMovementM2cChecklistResult.createTime': '创建时间',
  'serviceVehicleMovementM2cChecklistResult.image1': '图1',
  'serviceVehicleMovementM2cChecklistResult.image2': '图2',
  'serviceVehicleMovementM2cChecklistResult.image3': '图3',
  'serviceVehicleMovementM2cChecklistResult.image4': '图4',
  'serviceVehicleMovementM2cChecklistResult.image5': '图5',
  'serviceVehicleMovementM2cChecklistResult.version': '版本',

  serviceFileMovementC2m: '收件服务',
  'serviceFileMovementC2m.id': '序号',
  'serviceFileMovementC2m.serviceStatus': '服务状态',
  'serviceFileMovementC2m.responsibleWorker': '服务人员',
  'serviceFileMovementC2m.transferToresponsibleWorker':
    '转到另一家汽车服务公司的员工。',
  'serviceFileMovementC2m.rejectComments': '拒收原因',
  'serviceFileMovementC2m.rejectEvidence1': '拒收凭证1',
  'serviceFileMovementC2m.rejectEvidence2': '拒收凭证2',
  'serviceFileMovementC2m.rejectEvidence3': '拒收凭证3',
  'serviceFileMovementC2m.rejectEvidence4': '拒收凭证4',
  'serviceFileMovementC2m.rejectEvidence5': '拒收凭证5',
  'serviceFileMovementC2m.startTime': '开始时间',
  'serviceFileMovementC2m.lastLocation': '最后的位置',
  'serviceFileMovementC2m.lastUpdateTime': '最后更新时间',
  'serviceFileMovementC2m.mainOrder': '主订单',
  'serviceFileMovementC2m.transferTomainOrder': '转至另一车辆检验令。',
  'serviceFileMovementC2m.movementPurpose': '移动目的',
  'serviceFileMovementC2m.contactName': '联系人姓名',
  'serviceFileMovementC2m.contactMobileNumber': '联系手机号码',
  'serviceFileMovementC2m.merchant': '商户',
  'serviceFileMovementC2m.transferTomerchant': '转到另一家汽车服务公司。',
  'serviceFileMovementC2m.version': '版本',
  'serviceFileMovementC2m.addServiceFileMovementC2mChecklistResult':
    '新增收件服务检查结果',
  'serviceFileMovementC2m.removeServiceFileMovementC2mChecklistResult':
    '删除收件服务检查结果',
  'serviceFileMovementC2m.updateServiceFileMovementC2mChecklistResult':
    '更新收件服务检查结果',
  'serviceFileMovementC2m.copyServiceFileMovementC2mChecklistResultFrom':
    '复制收件服务检查结果',

  serviceFileMovementC2mChecklistResult: '收件服务检查结果',
  'serviceFileMovementC2mChecklistResult.id': '序号',
  'serviceFileMovementC2mChecklistResult.service': '服务',
  'serviceFileMovementC2mChecklistResult.transferToservice':
    '转到另一个服务文件移动C2m。',
  'serviceFileMovementC2mChecklistResult.checkResult': '检查结果',
  'serviceFileMovementC2mChecklistResult.checkResultComments': '检验结果的评论',
  'serviceFileMovementC2mChecklistResult.createTime': '创建时间',
  'serviceFileMovementC2mChecklistResult.image1': '图1',
  'serviceFileMovementC2mChecklistResult.image2': '图2',
  'serviceFileMovementC2mChecklistResult.image3': '图3',
  'serviceFileMovementC2mChecklistResult.image4': '图4',
  'serviceFileMovementC2mChecklistResult.image5': '图5',
  'serviceFileMovementC2mChecklistResult.version': '版本',

  serviceFileMovementM2m: '移件服务',
  'serviceFileMovementM2m.id': '序号',
  'serviceFileMovementM2m.serviceStatus': '服务状态',
  'serviceFileMovementM2m.responsibleWorker': '服务人员',
  'serviceFileMovementM2m.transferToresponsibleWorker':
    '转到另一家汽车服务公司的员工。',
  'serviceFileMovementM2m.rejectComments': '拒收原因',
  'serviceFileMovementM2m.rejectEvidence1': '拒收凭证1',
  'serviceFileMovementM2m.rejectEvidence2': '拒收凭证2',
  'serviceFileMovementM2m.rejectEvidence3': '拒收凭证3',
  'serviceFileMovementM2m.rejectEvidence4': '拒收凭证4',
  'serviceFileMovementM2m.rejectEvidence5': '拒收凭证5',
  'serviceFileMovementM2m.startTime': '开始时间',
  'serviceFileMovementM2m.lastLocation': '最后的位置',
  'serviceFileMovementM2m.lastUpdateTime': '最后更新时间',
  'serviceFileMovementM2m.mainOrder': '主订单',
  'serviceFileMovementM2m.transferTomainOrder': '转至另一车辆检验令。',
  'serviceFileMovementM2m.movementPurpose': '移动目的',
  'serviceFileMovementM2m.sender': '发送方',
  'serviceFileMovementM2m.transferTosender': '转到另一家汽车服务公司的员工。',
  'serviceFileMovementM2m.receiver': '接收方',
  'serviceFileMovementM2m.transferToreceiver': '转到另一家汽车服务公司的员工。',
  'serviceFileMovementM2m.version': '版本',
  'serviceFileMovementM2m.addServiceFileMovementM2mChecklistResult':
    '新增移件服务检查结果',
  'serviceFileMovementM2m.removeServiceFileMovementM2mChecklistResult':
    '删除移件服务检查结果',
  'serviceFileMovementM2m.updateServiceFileMovementM2mChecklistResult':
    '更新移件服务检查结果',
  'serviceFileMovementM2m.copyServiceFileMovementM2mChecklistResultFrom':
    '复制移件服务检查结果',

  serviceFileMovementM2mChecklistResult: '移件服务检查结果',
  'serviceFileMovementM2mChecklistResult.id': '序号',
  'serviceFileMovementM2mChecklistResult.service': '服务',
  'serviceFileMovementM2mChecklistResult.transferToservice':
    '转到另一个服务文件移动M2m。',
  'serviceFileMovementM2mChecklistResult.checkResult': '检查结果',
  'serviceFileMovementM2mChecklistResult.checkResultComments': '检验结果的评论',
  'serviceFileMovementM2mChecklistResult.createTime': '创建时间',
  'serviceFileMovementM2mChecklistResult.image1': '图1',
  'serviceFileMovementM2mChecklistResult.image2': '图2',
  'serviceFileMovementM2mChecklistResult.image3': '图3',
  'serviceFileMovementM2mChecklistResult.image4': '图4',
  'serviceFileMovementM2mChecklistResult.image5': '图5',
  'serviceFileMovementM2mChecklistResult.version': '版本',

  serviceFileMovementM2c: '还件服务',
  'serviceFileMovementM2c.id': '序号',
  'serviceFileMovementM2c.serviceStatus': '服务状态',
  'serviceFileMovementM2c.responsibleWorker': '服务人员',
  'serviceFileMovementM2c.transferToresponsibleWorker':
    '转到另一家汽车服务公司的员工。',
  'serviceFileMovementM2c.rejectComments': '拒收原因',
  'serviceFileMovementM2c.rejectEvidence1': '拒收凭证1',
  'serviceFileMovementM2c.rejectEvidence2': '拒收凭证2',
  'serviceFileMovementM2c.rejectEvidence3': '拒收凭证3',
  'serviceFileMovementM2c.rejectEvidence4': '拒收凭证4',
  'serviceFileMovementM2c.rejectEvidence5': '拒收凭证5',
  'serviceFileMovementM2c.startTime': '开始时间',
  'serviceFileMovementM2c.lastLocation': '最后的位置',
  'serviceFileMovementM2c.lastUpdateTime': '最后更新时间',
  'serviceFileMovementM2c.mainOrder': '主订单',
  'serviceFileMovementM2c.transferTomainOrder': '转至另一车辆检验令。',
  'serviceFileMovementM2c.movementPurpose': '移动目的',
  'serviceFileMovementM2c.contactName': '联系人姓名',
  'serviceFileMovementM2c.contactMobileNumber': '联系手机号码',
  'serviceFileMovementM2c.merchant': '商户',
  'serviceFileMovementM2c.transferTomerchant': '转到另一家汽车服务公司。',
  'serviceFileMovementM2c.version': '版本',
  'serviceFileMovementM2c.addServiceFileMovementM2cChecklistResult':
    '新增还件服务检查结果',
  'serviceFileMovementM2c.removeServiceFileMovementM2cChecklistResult':
    '删除还件服务检查结果',
  'serviceFileMovementM2c.updateServiceFileMovementM2cChecklistResult':
    '更新还件服务检查结果',
  'serviceFileMovementM2c.copyServiceFileMovementM2cChecklistResultFrom':
    '复制还件服务检查结果',

  serviceFileMovementM2cChecklistResult: '还件服务检查结果',
  'serviceFileMovementM2cChecklistResult.id': '序号',
  'serviceFileMovementM2cChecklistResult.service': '服务',
  'serviceFileMovementM2cChecklistResult.transferToservice':
    '转到另一个服务文件移动M2c。',
  'serviceFileMovementM2cChecklistResult.checkResult': '检查结果',
  'serviceFileMovementM2cChecklistResult.checkResultComments': '检验结果的评论',
  'serviceFileMovementM2cChecklistResult.createTime': '创建时间',
  'serviceFileMovementM2cChecklistResult.image1': '图1',
  'serviceFileMovementM2cChecklistResult.image2': '图2',
  'serviceFileMovementM2cChecklistResult.image3': '图3',
  'serviceFileMovementM2cChecklistResult.image4': '图4',
  'serviceFileMovementM2cChecklistResult.image5': '图5',
  'serviceFileMovementM2cChecklistResult.version': '版本',

  serviceInsuranceForInspection: '保险增值服务',
  'serviceInsuranceForInspection.id': '序号',
  'serviceInsuranceForInspection.serviceStatus': '服务状态',
  'serviceInsuranceForInspection.orderedInsurance': '要求保险',
  'serviceInsuranceForInspection.transferToorderedInsurance':
    '转移到另一个可用的保险。',
  'serviceInsuranceForInspection.responsibleWorker': '服务人员',
  'serviceInsuranceForInspection.transferToresponsibleWorker':
    '转到另一家汽车服务公司的员工。',
  'serviceInsuranceForInspection.serviceComments': '服务的评论',
  'serviceInsuranceForInspection.startTime': '开始时间',
  'serviceInsuranceForInspection.lastUpdateTime': '最后更新时间',
  'serviceInsuranceForInspection.insuranceNumber': '保单号码',
  'serviceInsuranceForInspection.insuranceImage1': '保险图1',
  'serviceInsuranceForInspection.insuranceImage2': '保险图2',
  'serviceInsuranceForInspection.insuranceImage3': '保险图片3',
  'serviceInsuranceForInspection.insuranceImage4': '保险形象4',
  'serviceInsuranceForInspection.insuranceImage5': '保险图片5',
  'serviceInsuranceForInspection.mainOrder': '主订单',
  'serviceInsuranceForInspection.transferTomainOrder': '转至另一车辆检验令。',
  'serviceInsuranceForInspection.version': '版本',

  serviceVehicleInspection: '车辆上线检测结果',
  'serviceVehicleInspection.id': '序号',
  'serviceVehicleInspection.serviceStatus': '服务状态',
  'serviceVehicleInspection.responsibleWorker': '服务人员',
  'serviceVehicleInspection.transferToresponsibleWorker':
    '转到另一家汽车服务公司的员工。',
  'serviceVehicleInspection.inspectionStation': '检测站',
  'serviceVehicleInspection.transferToinspectionStation': '转到另一个检查站。',
  'serviceVehicleInspection.inspectionResult': '检测结果',
  'serviceVehicleInspection.startTime': '开始时间',
  'serviceVehicleInspection.lastLocation': '最后的位置',
  'serviceVehicleInspection.lastUpdateTime': '最后更新时间',
  'serviceVehicleInspection.reportImage1': '检测报告1',
  'serviceVehicleInspection.reportImage2': '检测报告2',
  'serviceVehicleInspection.reportImage3': '检测报告3',
  'serviceVehicleInspection.reportImage4': '检测报告4',
  'serviceVehicleInspection.reportImage5': '检测报告5',
  'serviceVehicleInspection.mainOrder': '主订单',
  'serviceVehicleInspection.transferTomainOrder': '转至另一车辆检验令。',
  'serviceVehicleInspection.version': '版本',

  serviceFileInspection: '6年免检服务',
  'serviceFileInspection.id': '序号',
  'serviceFileInspection.serviceStatus': '服务状态',
  'serviceFileInspection.responsibleWorker': '服务人员',
  'serviceFileInspection.transferToresponsibleWorker':
    '转到另一家汽车服务公司的员工。',
  'serviceFileInspection.inspectionStation': '检测站',
  'serviceFileInspection.transferToinspectionStation': '转到另一个检查站。',
  'serviceFileInspection.inspectionResult': '检测结果',
  'serviceFileInspection.startTime': '开始时间',
  'serviceFileInspection.lastLocation': '最后的位置',
  'serviceFileInspection.lastUpdateTime': '最后更新时间',
  'serviceFileInspection.reportImage1': '检测报告1',
  'serviceFileInspection.reportImage2': '检测报告2',
  'serviceFileInspection.reportImage3': '检测报告3',
  'serviceFileInspection.reportImage4': '检测报告4',
  'serviceFileInspection.reportImage5': '检测报告5',
  'serviceFileInspection.mainOrder': '主订单',
  'serviceFileInspection.transferTomainOrder': '转至另一车辆检验令。',
  'serviceFileInspection.version': '版本',

  serviceVehicleRepairing: '修车服务',
  'serviceVehicleRepairing.id': '序号',
  'serviceVehicleRepairing.serviceStatus': '服务状态',
  'serviceVehicleRepairing.responsibleWorker': '服务人员',
  'serviceVehicleRepairing.transferToresponsibleWorker':
    '转到另一家汽车服务公司的员工。',
  'serviceVehicleRepairing.rejectComments': '拒收原因',
  'serviceVehicleRepairing.startTime': '开始时间',
  'serviceVehicleRepairing.lastLocation': '最后的位置',
  'serviceVehicleRepairing.lastUpdateTime': '最后更新时间',
  'serviceVehicleRepairing.mainOrder': '主订单',
  'serviceVehicleRepairing.transferTomainOrder': '转至另一车辆检验令。',
  'serviceVehicleRepairing.version': '版本',
  'serviceVehicleRepairing.addRepairingQuotation': '新增维修报价',
  'serviceVehicleRepairing.removeRepairingQuotation': '删除维修报价',
  'serviceVehicleRepairing.updateRepairingQuotation': '更新维修报价',
  'serviceVehicleRepairing.copyRepairingQuotationFrom': '复制维修报价',

  repairingQuotation: '维修报价',
  'repairingQuotation.id': '序号',
  'repairingQuotation.repairingQuotationDescription': '维修报价描述',
  'repairingQuotation.service': '服务',
  'repairingQuotation.transferToservice': '转到另一个维修车辆维修。',
  'repairingQuotation.version': '版本',
  'repairingQuotation.addRepairingQuotationItem': '新增维修报价项目',
  'repairingQuotation.removeRepairingQuotationItem': '删除维修报价项目',
  'repairingQuotation.updateRepairingQuotationItem': '更新维修报价项目',
  'repairingQuotation.copyRepairingQuotationItemFrom': '复制维修报价项目',

  'repairingQuotation.addVehicleRepairingPayment': '新增修理付款',
  'repairingQuotation.removeVehicleRepairingPayment': '删除修理付款',
  'repairingQuotation.updateVehicleRepairingPayment': '更新修理付款',
  'repairingQuotation.copyVehicleRepairingPaymentFrom': '复制修理付款',

  repairingQuotationItem: '维修报价项目',
  'repairingQuotationItem.id': '序号',
  'repairingQuotationItem.repairingItemType': '修理项目类型',
  'repairingQuotationItem.transferTorepairingItemType':
    '转移到另一个车辆维修津贴。',
  'repairingQuotationItem.repairingItemName': '修理物品的名称',
  'repairingQuotationItem.repairingItemDescription': '修理项目描述',
  'repairingQuotationItem.repairingItemPrice': '修理物品的价格',
  'repairingQuotationItem.repairingQuotation': '维修报价',
  'repairingQuotationItem.transferTorepairingQuotation': '转到另一个修复报价。',
  'repairingQuotationItem.repairingItemImage1': '修理物品图片1',
  'repairingQuotationItem.repairingItemImage2': '修理物品图片2',
  'repairingQuotationItem.repairingItemImage3': '修理物品图片3',
  'repairingQuotationItem.repairingItemImage4': '修理物品图片4',
  'repairingQuotationItem.repairingItemImage5': '修理物品图片5',
  'repairingQuotationItem.version': '版本',

  vehicleRepairingPayment: '修理付款',
  'vehicleRepairingPayment.id': '序号',
  'vehicleRepairingPayment.repairingOrderTotalAmount': '维修订单总金额',
  'vehicleRepairingPayment.paymentStatus': '付款状态',
  'vehicleRepairingPayment.paymentMethod': '支付方式',
  'vehicleRepairingPayment.repairingQuotation': '维修报价',
  'vehicleRepairingPayment.transferTorepairingQuotation':
    '转到另一个修复报价。',
  'vehicleRepairingPayment.version': '版本',

  userDomain: '用户域',
  'userDomain.id': '序号',
  'userDomain.name': '名称',
  'userDomain.version': '版本',
  'userDomain.addSecUser': '新增SEC的用户',
  'userDomain.removeSecUser': '删除SEC的用户',
  'userDomain.updateSecUser': '更新SEC的用户',
  'userDomain.copySecUserFrom': '复制SEC的用户',

  secUser: 'SEC的用户',
  'secUser.id': '序号',
  'secUser.login': '登录',
  'secUser.mobile': '手机号码',
  'secUser.email': '电子邮件',
  'secUser.pwd': '密码',
  'secUser.verificationCode': '验证码',
  'secUser.verificationCodeExpire': '验证码过期',
  'secUser.lastLoginTime': '最后登录时间',
  'secUser.domain': '域',
  'secUser.transferTodomain': '转移到另一个用户域',
  'secUser.blocking': '舞台调度',
  'secUser.block': '块',
  'secUser.currentStatus': '当前状态',
  'secUser.version': '版本',
  'secUser.addCustomer': '新增客户',
  'secUser.removeCustomer': '删除客户',
  'secUser.updateCustomer': '更新客户',
  'secUser.copyCustomerFrom': '复制客户',

  'secUser.addUserApp': '新增用户应用程序',
  'secUser.removeUserApp': '删除用户应用程序',
  'secUser.updateUserApp': '更新用户应用程序',
  'secUser.copyUserAppFrom': '复制用户应用程序',

  'secUser.addLoginHistory': '新增登录历史',
  'secUser.removeLoginHistory': '删除登录历史',
  'secUser.updateLoginHistory': '更新登录历史',
  'secUser.copyLoginHistoryFrom': '复制登录历史',

  secUserBlocking: 'SEC用户阻塞',
  'secUserBlocking.id': '序号',
  'secUserBlocking.who': '谁',
  'secUserBlocking.blockTime': '块时间',
  'secUserBlocking.comments': '评论',
  'secUserBlocking.version': '版本',
  'secUserBlocking.addSecUser': '新增SEC的用户',
  'secUserBlocking.removeSecUser': '删除SEC的用户',
  'secUserBlocking.updateSecUser': '更新SEC的用户',
  'secUserBlocking.copySecUserFrom': '复制SEC的用户',

  userApp: '用户应用程序',
  'userApp.id': '序号',
  'userApp.title': '标题',
  'userApp.secUser': 'SEC的用户',
  'userApp.transferTosecUser': '转移到另一个SEC用户',
  'userApp.appIcon': '应用程序图标',
  'userApp.fullAccess': '完全访问',
  'userApp.permission': '许可',
  'userApp.objectType': '访问对象类型',
  'userApp.objectId': '对象ID',
  'userApp.location': '位置',
  'userApp.version': '版本',
  'userApp.addObjectAccess': '新增对象访问',
  'userApp.removeObjectAccess': '删除对象访问',
  'userApp.updateObjectAccess': '更新对象访问',
  'userApp.copyObjectAccessFrom': '复制对象访问',

  objectAccess: '对象访问',
  'objectAccess.id': '序号',
  'objectAccess.displayName': '显示名称',
  'objectAccess.objectType': '访问对象类型',
  'objectAccess.list1': '列表1',
  'objectAccess.list2': '列表2',
  'objectAccess.list3': '列表3',
  'objectAccess.list4': '列表4',
  'objectAccess.list5': '列表5',
  'objectAccess.list6': '列表6',
  'objectAccess.list7': '列表7',
  'objectAccess.list8': '列表8',
  'objectAccess.list9': '列表9',
  'objectAccess.app': '应用程序',
  'objectAccess.transferToapp': '转移到另一个用户应用程序',
  'objectAccess.version': '版本',

  loginHistory: '登录历史',
  'loginHistory.id': '序号',
  'loginHistory.loginTime': '登录时间',
  'loginHistory.fromIp': '来自IP',
  'loginHistory.description': '描述',
  'loginHistory.secUser': 'SEC的用户',
  'loginHistory.transferTosecUser': '转移到另一个SEC用户',
  'loginHistory.version': '版本',

  genericForm: '通用的形式',
  'genericForm.id': '序号',
  'genericForm.title': '标题',
  'genericForm.description': '描述',
  'genericForm.version': '版本',
  'genericForm.addFormMessage': '新增表单信息',
  'genericForm.removeFormMessage': '删除表单信息',
  'genericForm.updateFormMessage': '更新表单信息',
  'genericForm.copyFormMessageFrom': '复制表单信息',

  'genericForm.addFormFieldMessage': '新增表单字段的信息',
  'genericForm.removeFormFieldMessage': '删除表单字段的信息',
  'genericForm.updateFormFieldMessage': '更新表单字段的信息',
  'genericForm.copyFormFieldMessageFrom': '复制表单字段的信息',

  'genericForm.addFormField': '新增表单字段',
  'genericForm.removeFormField': '删除表单字段',
  'genericForm.updateFormField': '更新表单字段',
  'genericForm.copyFormFieldFrom': '复制表单字段',

  'genericForm.addFormAction': '新增表单动作',
  'genericForm.removeFormAction': '删除表单动作',
  'genericForm.updateFormAction': '更新表单动作',
  'genericForm.copyFormActionFrom': '复制表单动作',

  formMessage: '表单信息',
  'formMessage.id': '序号',
  'formMessage.title': '标题',
  'formMessage.form': '形式',
  'formMessage.transferToform': '转移到另一个通用表单。',
  'formMessage.level': '水平',
  'formMessage.version': '版本',

  formFieldMessage: '表单字段的信息',
  'formFieldMessage.id': '序号',
  'formFieldMessage.title': '标题',
  'formFieldMessage.parameterName': '参数名称',
  'formFieldMessage.form': '形式',
  'formFieldMessage.transferToform': '转移到另一个通用表单。',
  'formFieldMessage.level': '水平',
  'formFieldMessage.version': '版本',

  formField: '表单字段',
  'formField.id': '序号',
  'formField.label': '标签',
  'formField.localeKey': '语言环境的关键',
  'formField.parameterName': '参数名称',
  'formField.type': '类型',
  'formField.form': '形式',
  'formField.transferToform': '转移到另一个通用表单。',
  'formField.placeholder': '占位符',
  'formField.defaultValue': '默认值',
  'formField.description': '描述',
  'formField.fieldGroup': '字段组',
  'formField.minValue': '最小值',
  'formField.maxValue': '最大的价值',
  'formField.required': '要求',
  'formField.version': '版本',

  formAction: '表单动作',
  'formAction.id': '序号',
  'formAction.label': '标签',
  'formAction.localeKey': '语言环境的关键',
  'formAction.url': 'url',
  'formAction.form': '形式',
  'formAction.transferToform': '转移到另一个通用表单。',
  'formAction.version': '版本',

  SYSTEMNAME: '代审车服务平台',
}

export default messages

/*
@summary=\u6982\u89C8
@delete=\u5220\u9664
@action=\u52A8\u4F5C
@not_found=\u6CA1\u6709\u627E\u5230
@qr_code=\u4E8C\u7EF4\u7801
@qr_scan_to_continue=\u626B\u4E00\u626B\u624B\u673A\u4E0A\u7EE7\u7EED
@word_space=
@copy=拷贝
@system_name=代审车服务平台
@view=查看
@create=新建
@update=更新
@home_page=主页
@message=消息
@account=账户
@me=我
@id=序号
@log_out=退出
@cancel=取消
@confirm=确定
#STRING_NOT_ALLOW_TO_BE_NULL=The string for {0} is not allowed to be null.
STRING_NOT_ALLOW_TO_BE_NULL=您输入 {0} 的文本不允许为空。

STRING_NOT_FIXED_LENGTH=您输入<{0}>的文本''{1}''的长度为{4}，系统要求该值长度固定为 {2}。
STRING_TOO_LONG=您输入<{0}>的文本''{1}''的长度为{4}，超出最长长度，系统要求该值最大长度为 {3}。
STRING_TOO_SHORT=您输入<{0}>的文本''{1}''的长度为{4}，小于最短长度，系统要求该值最小长度为 {2}。
CHINA_MOBILE_NOT_ALLOW_TO_BE_NULL=您输入<{0}>的手机号不允许为空。
CHINA_MOBILE_NOT_FIXED_LENGTH=您输入<{0}>的手机号''{1}''其长度为{4},不是固定长度为11的手机号。
CHINA_MOBILE_FORMAT_ISSUE=您输入<{0}>的手机号''{1}''其的格式不对，手机号要求以13，15，17，18,199开头。
CHINA_MOBILE_CONTAIN_INVALID_CHAR=您输入<{0}>的手机号''{1}''包含不为数字的字符''{4}''.
DATE_NOT_ALLOWED_TO_BE_NULL=您输入<{0}>的日期不允许为空。
DATE_BEFORE_START=您输入<{0}> 的日期''{1}''早于系统允许的开始时间 {2}。
DATE_AFTER_END=您输入<{0}> 的日期''{1}''晚于系统允许的截止时间 {3}。
NUMBER_GREATER_THAN_MAX=您输入<{0}>的小数''{1}''大于系统允许的最大值 {3}.
NUMBER_LESS_THAN_MIN=您输入<{0}>的小数''{1}''小于系统允许的最小值 {2}.
INTEGER_GREATER_THAN_MAX=您输入<{0}>的整数''{1}''大于系统允许的最大值 {3}.
INTEGER_LESS_THAN_MIN=您输入<{0}>的整数''{1}''小于系统允许的最小值 {2}.
MONEY_UNSUPPORT_PRECISION=您输入的<{0}> 的值''{1}'' 为金额，小数最多两位，请修正。

*/
