MWF.xApplication.portal.PageDesigner = MWF.xApplication.portal.PageDesigner || {};
MWF.APPPOD = MWF.xApplication.portal.PageDesigner;
MWF.APPPOD.LP = {
    "title": "页面编辑",
    "newPage": "新建页面",
    "property": "属性",
    "tools": "工具",
    "all": "全部",

    "repetitionsId": "重复的元素标识符",
    "notNullId": "元素标识符不能为空",
    "history": "历史",
    "componentTree": "组件树",

    "button":{
        "ok": "确定",
        "cancel": "取消"
    },

    "notice": {
        "save_success": "表单保存成功！",
        "saveTemplate_success": "表单模板保存成功！",
        "saveTemplate_inputName": "请输入模板标题",
        "saveTemplate_inputCategory": "请确定模板分类",

        "deleteElementTitle": "删除表单元素确认",
        "deleteElement": "是否确定删除当前元素，及其子元素吗？",

        "deleteRowTitle": "删除表格行确认",
        "deleteRow": "删除当前行将删除该行所有单元格中的内容，是否确定删除当前选中的行？",
        "deleteColTitle": "删除表格列确认",
        "deleteCol": "删除当前行将删除该列所有单元格中的内容，是否确定删除当前选中的列？",
        "deleteEventTitle": "删除事件确认",
        "deleteEvent": "是否确定删除当前事件吗？",

        "deleteActionTitle": "删除操作确认",
        "deleteAction": "是否确定删除当前操作吗？",

        "deleteButtonTitle": "删除操作确认",
        "deleteButton": "确定要删除当前操作按钮吗？",

        "notUseModuleInMobile": "移动端不支持此组件",

        "changeToSequenceTitle": "确认",
        "changeToSequence": "此操作会删除已经添加的组件，确定要改成“序号”列吗？",

        //"confiltNoPix" : "请填写前缀或后缀",
        "selectPage" : "请选择页面",
        "selectPortal" : "请选择门户",
        "selectWidget" : "请选择部件",
        //"moduleConflitError" : "组件标识重复",
        //"moduleConflitErrorOnPix" : "添加了前缀或后缀后组件标识仍然重复"
        "widgetNameEmpty": "请填写部件名称",
        "widgetNameConflict" : "部件名称冲突",
        "widget_save_success" : "部件保存成功"
    },

    "formAction": {
        "insertRow": "插入行",
        "insertCol": "插入列",
        "deleteRow": "删除行",
        "deleteCol": "删除列",
        "mergerCell": "合并单元格",
        "splitCell": "拆分单元格",
        "move": "移动",
        "copy": "复制",
        "delete": "删除",
        "add": "添加",
        "script": "脚本",
        "makeWidget" : "设置为部件",
        "defaultWidgetName" : "部件"
    },

    "actionbar": {
        "readhide": "设置阅读时是否显示",
        "edithide": "设置编辑时是否显示",
        "hideCondition": "设置隐藏条件",
        "title": "标题",
        "img": "图标",
        "action": "操作",
        "condition": "显示条件",
        "editScript": "操作脚本编辑",
        "editCondition": "隐藏条件编辑（返回true隐藏操作）"
    },
    "isSave": "正在保存，请稍候...",
    "validation": {
        "validation": "校验",
        "anytime": "任何时候",
        "decision": "选择决策",
        "decisionName": "<决策名>",
        "value": "值",
        "length": "值长度",
        "valueInput": "<值>",
        "isnull": "为空",
        "notnull": "不为空",
        "gt": "大于",
        "lt": "小于",
        "equal": "等于",
        "neq": "不等于",
        "contain": "包含",
        "notcontain": "不包含",
        "prompt": "提示",
        "add": "添加",
        "modify": "修改",
        "when": "当",
        "as": "时",
        "inputDecisionName": "请输入决策名称",
        "inputValue": "请输入值",
        "inputPrompt": "请输入提示内容",
        "delete_title": "删除校验内容确认",
        "delete_text": "您确定要删除此项校验码？"
    },
    "selectIcon": "选择图标",
    "selectImage": "选择图片",
    "dutyInputTitle": "添加职务参数",
    "dutyInput": "请为职务“{duty}”添加参数",
    "creatorCompany": "拟稿公司",
    "creatorDepartment": "拟稿部门",
    "currentCompany": "当前公司",
    "currentDepartment": "当前部门",
    "deleteDutyTitle": "移除职务确认",
    "deleteDutyText": "您确认要移除职务“{duty}”吗？",
    "select": "选择",
    "empty": "清空",

    "saveTemplate": "保存为表单模板",
    "templateName": "模板名称",
    "templateCategory": "模板分类",
    "templateDescription": "模板描述",
    "save": "保存",
    "cancel": "取消",
    "newCategory": "新分类",
    "filter": {
        "and": "并且",
        "or": "或者",
        "equals": "等于",
        "notEquals": "不等于",
        "greaterThan": "大于",
        "greaterThanOrEqualTo": "大于等于",
        "lessThan": "小于",
        "lessThanOrEqualTo": "小于等于",
        "like": "匹配",
        "notLike": "不匹配",
        "from" : "从",
        "value" : "值"
    },
    "mastInputPath": "请输入数据路径",
    "mastInputTitle": "请输入标题",
    "delete_filterItem_title": "删除过滤条件确认",
    "delete_filterItem": "您确定要删除当前过滤条件吗？",
    "implodeError": "要导入的数据格式有误",
    "implodeEmpty": "请在编辑框中填入要导入的数据",
    "implodeConfirmTitle": "导入确认",
    "implodeConfirmText": "导入数据将清除当前页面，并无法撤销，您确定要导入吗？",

    "subpageNameConflictTitle": "子页面字段名称冲突",
    "subpageNameConflictInfor": "子页面的以下字段名称和现有表单冲突：\n{name}",
    "subpageConflictTitle": "子页面嵌入错误",
    "subpageConflictInfor": "您不能嵌入两个相同的子页面",

    "subpageNestedTitle": "子页面嵌入错误",
    "subpageNestedInfor": "不能相互嵌套的嵌入子页面",
    "checkSubpageNestedError" : "您选择的子页面存在相互嵌套的情况，请检查！",

    "checkSubpageTitle": "页面保存校验",
    "checkFormSaveError": "无法保存页面，原因如下：<br>",
    "checkSubpagePcInfor": "PC页面中，有以下子字段冲突：<br>{subform}<br>",
    "checkSubpageMobileInfor": "Mobile页面中，有以下子字段冲突：<br>{subform}",


    "design": "设计",
    "script": "脚本",
    "html": "HTML",
    "css": "CSS",
    "byModule": "按设计元素",
    "byPath": "按脚本类型",
    "events": "事件",
    "importO2": "从O2数据导入",
    "importHTML": "从HTML导入",
    "importOffice": "从WORD或EXCEL导入",
    "importO2_infor": "请将O2格式的表单数据拷贝到以下编辑器中。（使用表单或页面设计器工具条上的“导出”按钮，获取表单数据）<br/>按下Ctrl+Alt+I可格式化数据",
    "importHTML_infor": "请将HTML数据拷贝到以下编辑器中。按下Ctrl+Alt+I可格式化数据",
    "importHTML_infor2": "请将CSS数据拷贝到以下编辑器中。按下Ctrl+Alt+I可格式化数据",
    "importOffice_infor": "请选择一个Word或Excel文件。",
    "import_ok": "导入",
    "import_cancel": "取消",
    "import_option1": "在表格的空单元格中添加输入框",
    "import_option2": "去除空元素",
    "implodeOfficeEmpty": "请先选择要导入的Word或Excel文件",
    "applicationNotFound": "未找到应用",

    "scriptTitle": {
        "validationOpinion": "表单意见校验",
        "validationRoute": "表单路由校验",
        "validationFormCustom": "表单校验",
        "defaultValue": "默认值",
        "validation": "校验脚本",
        "sectionByScript": "区段依据",
        "itemScript": "可选值脚本",
        "iframeScript": "iframe脚本",
        "labelScript": "文本值",
        "rangeKey": "组织范围",
        "identityRangeKey": "身份组织范围",
        "unitRangeKey": "组织选择范围",
        "rangeDutyKey": "职务范围",
        "exclude": "选择排除脚本",
        "cookies": "数据源请求cookies",
        "requestBody": "数据源请求消息体",
        "jsonText": "数据文本",
        "dataScript": "树控件脚本",
        "itemDynamic": "动态选项脚本",
        "defaultData": "数据网格默认值",
        "editableScript": "数据网格是否可编辑",
        "config": "HTML编辑框配置",
        "filterScript": "流程记录过滤",
        "readScript": "Office只读脚本",
        "fileSite": "Office文件site脚本",
        "subformScript": "子表单脚本",
        "selectedScript": "视图选择脚本",
        "action.tools": "操作按钮"
    },
    "selectorButton" : {
        "ok" : "确　定",
        "cancel" : "取 消"
    },
    "modules": {
        "label": "文本",
        "textfield": "文本字段",
        "number": "数字字段",
        "currency": "货币字段",
        "org": "人员组织",
        "calendar": "日期选择",
        "textarea": "多行文本",
        "select": "下拉框",
        "radio": "单选框",
        "checkbox": "多选框",
        "combox": "组合框",
        "opinion": "意见框",
        "button": "按钮",
        "Address": "地址",
        "Actionbar": "操作条",
        "Sidebar": "侧边操作条",
        "image": "图片",
        "imageclipper": "图片编辑",
        "attachment": "附件",
        "div": "容器",
        "table": "表格",
        "datagrid": "数据网格(过时)",
        "datatable": "数据表格",
        "datatemplate": "数据模板",
        "subform": "子表单",
        "ViewSelector": "选择视图",
        "view": "嵌入视图",
        "stat": "嵌入统计",
        "html": "HTML",
        "common": "通用元素",
        "tab": "分页",
        "tree": "树",
        "log": "流程记录",
        "monitor": "流程监控",
        "iframe": "Iframe",
        "documenteditor": "公文编辑器",
        "htmledit": "HTML编辑器",
        "office": "Office控件",
        "statementSelector": "选择查询视图",
        "statement": "嵌入查询视图",
        "source": "数据源",
        "subSource": "子数据源",
        "sourceText": "数据文本",
        "widget": "部件",
        "widgetmodules": "部件元素",
        "address": "地址",
        "importer": "数据导入",
        "SmartBI":"SmartBI报表",
        "application": "平台应用",

        "group_all": "所有组件",
        "group_form": "表单组件",
        "group_layout": "布局组件",
        "group_data": "数据组件",
        "group_filetext": "文件编辑组件",
        "group_function": "功能组件",
        "group_element": "Element组件"
    },
    "filedConfigurator": {
        "sequence": "序号",
        "fieldTitle": "字段标题",
        "fieldId": "字段标识",
        "action": "操作",
        "moveup": "移动到上一行",
        "deleteRow": "删除行",
        "insertRow": "插入行",
        "importFromForm": "从界面上中导入字段配置"
    },
    "formToolbar":{
        "save": "保存表单",
        "saveNew": "保存为模板",
        "preview": "预览",
        "print": "打印",
        "formExplode": "表单导出",
        "formImplode": "表单导入",
        "formImplodeO2": "从O2数据导入",
        "formImplodeO2Title": "导入O2格式表单",
        "htmlImplode": "从HTML导入",
        "officeImplode": "从WORD或EXCEL导入",
        "help": "帮助",
        "clearNoDomModule": "清除未在HTML树中的组件配置",
        "autoSave": "自动保存",
        "brush": "格式刷"
    }
};
