MWF.xApplication = MWF.xApplication || {};
MWF.xApplication.query = MWF.xApplication.query || {};
MWF.xApplication.query.StatementDesigner = MWF.xApplication.query.StatementDesigner || {};
MWF.xApplication.query.StatementDesigner.LP={
	"title": "Diseño de consulta",
	"newView": "Nueva vista",
	"property": "Propiedad",
	"item": "Elemento",
	"type": "Tipo",
	"value": "Valor",
	"view": "Vista",
	"unnamed": "Columna sin título",
	"unCategory": "Sin categoría",
	"id": "Identificación",
	"name": "Nombre",
	"alias": "Alias",
	"description": "Descripción",
	"saveViewNotice": "¡Guarde la vista primero!",
	"application": "Aplicación de datos",
	"newViewName": "Nombre de nueva vista",
	"copy": "Copia",
	"ok": "Aceptar",
	"cancel": "Cancelar",
	"action": {
		"move": "Mover",
		"delete": "Eliminar",
		"add": "Agregar"
	},
	"notice": {
		"save_success": "¡La vista se ha guardado correctamente!",
		"saveAs_success": "¡La vista se ha guardado correctamente como una nueva vista! Puede abrir la nueva vista en la configuración de la vista.",
		"deleteFilterTitle": "Confirmación",
		"deleteFilter": "¿Está seguro de que desea eliminar la condición de filtro?",
		"deleteColumnTitle": "Confirmación",
		"deleteColumn": "¿Está seguro de que desea eliminar la columna actual?",
		"changeTypeTitle": "Confirmación",
		"changeTypeDeleteChildren": "Al cambiar el tipo de datos, se eliminarán todos los datos secundarios. ¿Está seguro de que desea continuar?",
		"changeType": "Al cambiar el tipo de datos, se modificará el valor de los datos. ¿Está seguro de que desea continuar?",
		"inputTypeError": "El tipo de datos ingresado es incorrecto. Por favor, vuelva a ingresar.",
		"sameKey": "El nombre del elemento que ingresó ya existe en el objeto. Por favor, ingrese otro nombre.",
		"emptyKey": "El nombre del elemento no puede estar vacío. Por favor, ingrese un nombre.",
		"numberKey": "El nombre del elemento no puede ser un número. Por favor, ingrese un nombre.",
		"inputName": "Ingrese el nombre de la vista",
		"noModifyName": "No se puede modificar el nombre o alias.",
		"deleteEventTitle": "Confirmación",
		"deleteEvent": "¿Está seguro de que desea eliminar el evento actual?",
		"selectProcess": "Seleccione una aplicación o flujo de trabajo",
		"selectCMS": "Seleccione una categoría o clasificación de gestión de contenido",
		"selectDateRange": "El tipo de período es un rango. Seleccione una fecha de inicio y una fecha de finalización."
	},
	"actionbar": {
		"readhide": "Establecer si se muestra al leer",
		"edithide": "Establecer si se muestra al editar",
		"hideCondition": "Establecer la condición oculta",
		"title": "Título",
		"img": "Icono",
		"action": "Acción",
		"condition": "Condición de visualización",
		"editScript": "Editar script de acción",
		"editCondition": "Editar condición oculta",
		"up": "Subir",
		"property": "Propiedad",
		"addCustomTool": "Agregar acción personalizada",
		"delete": "Eliminar",
		"setProperties": "Establecer propiedades de acción",
		"restoreDefaultTool": "Restaurar herramienta del sistema eliminada",
		"selectDefaultTool": "Seleccionar herramienta del sistema"
	},
	"mastInputPath": "Por favor ingrese la ruta de datos",
	"mastInputTitle": "Por favor ingrese el título",
	"filter": {
		"and": "Y",
		"or": "O",
		"equals": "Igual a",
		"notEquals": "No igual a",
		"greaterThan": "Mayor que",
		"greaterThanOrEqualTo": "Mayor o igual que",
		"lessThan": "Menor que",
		"lessThanOrEqualTo": "Menor o igual que",
		"like": "Coincide con",
		"notLike": "No coincide con",
		"range": "Rango",
		"logic": "Lógica",
		"path": "Ruta",
		"compare": "Comparar",
		"value": "Valor",
		"columnValue": "Valor de columna",
		"contain": "Contiene",
		"from": "Desde",
		"in": "En",
		"script": "Guion",
		"input": "Entrada"
	},
	"delete_filterItem_title": "Confirmación de eliminación de filtro",
	"delete_filterItem": "¿Está seguro de que desea eliminar la condición de filtro actual?",
	"propertyTemplate": {
		"base": "Base",
		"event": "Evento",
		"html": "HTML",
		"json": "JSON",
		"action": "Acción",
		"select": "Seleccionar",
		"alias": "Alias",
		"id": "Identificación",
		"name": "Nombre",
		"description": "Descripción",
		"appearance": "Tipo de apariencia",
		"style": "Estilo",
		"attribute": "Atributo",
		"systemAction": "Acción del sistema",
		"show": "Mostrar",
		"hide": "Ocultar",
		"columnTitle": "Título de columna",
		"columnName": "Nombre de columna",
		"defaultValue": "Valor predeterminado",
		"openDocument": "Abrir documento",
		"yes": "Sí",
		"no": "No",
		"openDocumentScript": "Abrir script de documento",
		"data": "Datos",
		"selectData": "Seleccionar datos",
		"selectTitle": "(Por favor seleccione)",
		"title": "Título",
		"startTime": "Hora de creación",
		"startTimeMonth": "Mes de creación",
		"completedTime": "Hora de finalización",
		"completedTimeMonth": "Mes de finalización",
		"creatorPerson": "Persona que redactó",
		"creatorIdentity": "Identificación del redactor",
		"creatorUnit": "Organización del redactor",
		"creatorUnitLevelName": "Nivel de la organización del redactor",
		"application": "ID de la aplicación",
		"applicationName": "Nombre de la aplicación",
		"applicationAlias": "Alias de la aplicación",
		"process": "ID del proceso",
		"processName": "Nombre del proceso",
		"processAlias": "Alias del proceso",
		"serial": "Número de serie",
		"activityType": "Tipo de actividad",
		"activityName": "Nombre de la actividad",
		"activityArrivedTime": "Tiempo de llegada de la actividad",
		"workId": "ID del trabajo",
		"workCompletedId": "ID de trabajo completado",
		"job": "ID de JOB",
		"completed": "¿Completado?",
		"publishTime": "Tiempo de publicación",
		"creatorUnitName": "Nombre de la organización del redactor",
		"creatorTopUnitName": "Nombre de la organización superior del redactor",
		"appId": "ID de columna",
		"appName": "Nombre de columna",
		"categoryId": "ID de categoría",
		"categoryName": "Nombre de categoría",
		"categoryAlias": "Alias de categoría",
		"documentId": "ID del documento",
		"dataPath": "Ruta de datos",
		"order": "Ordenar",
		"none": "Ninguno",
		"asc": "Ascendente",
		"desc": "Descendente",
		"orderToNumber": "Convertir a orden numérico",
		"category": "Categoría",
		"hidden": "Oculto",
		"org": "Objeto de organización",
		"htmlValue": "Valor HTML",
		"showScript": "Mostrar script",
		"titleStyles": "Estilo de celda de título",
		"titleProperties": "Propiedad de celda de título",
		"contentStyles": "Estilo de celda de contenido",
		"contentProperties": "Propiedad de celda de contenido",
		"buttonStyles": "Estilo de botón",
		"round": "Redondeado",
		"rect": "Cuadrado",
		"showNumberPaging": "Mostrar paginación numérica",
		"numberShowCount": "Número de dígitos a mostrar",
		"showBeforeAfter": "Mostrar antes y después",
		"page": "Página:",
		"hasFirstLastPage": "Mostrar página de inicio y fin",
		"hasPreNextPage": "Mostrar página anterior y siguiente",
		"hasPageJumper": "Mostrar selector de página",
		"firstPageText": "Texto de la primera página",
		"lastPageText": "Texto de la última página",
		"prevPageText": "Texto de la página anterior",
		"nextPageText": "Texto de la página siguiente",
		"desciption": "Información de paginación",
		"position": "Posición",
		"top": "Parte superior",
		"bottom": "Parte inferior",
		"format": "Formato",
		"hideView": "Ocultar vista",
		"orderNumber": "Número de orden",
		"viewStyles": "Estilo de vista",
		"expandView": "Expandir categoría",
		"showSequence": "Mostrar secuencia",
		"maxRow": "Máximo número de filas",
		"pageSize": "Número de filas por página",
		"pageMaxCountNotice": "Nota: El número máximo de filas por página es de 2000",
		"actionbarHidden": "Ocultar barra de acciones",
		"pagingbarHidden": "Ocultar barra de paginación",
		"searchbarHidden": "Ocultar barra de búsqueda",
		"radio": "Selección única",
		"checkbox": "Selección múltiple",
		"selectBoxShow": "Mostrar cuadro de selección",
		"always": "Siempre visible",
		"mouseover": "Visible al pasar el ratón",
		"allowSelectAll": "Permitir selección total",
		"firstTdHidden": "Ocultar primera columna si no hay categorías o selecciones",
		"noDataText": "Texto a mostrar cuando no hay datos",
		"cacheAccess": "Habilitar caché",
		"cacheAccessNotice": "Nota: Al habilitar la caché, se invalidan los permisos en el ámbito.",
		"executable": "Ejecutable por",
		"availableIdentityList": "Personas que pueden ejecutar",
		"availableUnitList": "Organizaciones que pueden ejecutar",
		"defaultSelectedScript": "Script para seleccionar por defecto",
		"selectedAbleScript": "Script para habilitar la selección",
		"range": "Rango",
		"timeRange": "Rango de tiempo",
		"timeRangeNotice": "Nota: Se recomienda establecer un rango de tiempo para mejorar la eficiencia.",
		"rangeType": "Tipo de rango",
		"all": "Todos",
		"year": "Año",
		"season": "Trimestre",
		"monthly": "Mes",
		"week": "Semana",
		"date": "Día",
		"beginDate": "Fecha de inicio",
		"endDate": "Fecha de finalización",
		"currentYear": "Año actual",
		"currentSeason": "Trimestre actual",
		"firstSeason": "Primer trimestre",
		"secondSeason": "Segundo trimestre",
		"thirdSeason": "Tercer trimestre",
		"fourthSeason": "Cuarto trimestre",
		"currentMonth": "Mes actual",
		"month": "Mes",
		"monthNumber": "(i) Mes",
		"currentWeek": "Semana actual",
		"weekNumber": "Semana (i)",
		"dateNumber": "Día (i)",
		"today": "Hoy",
		"adjust": "Desplazamiento",
		"processPlatform": "Datos de la plataforma de procesos",
		"cmsPlatform": "Datos de gestión de contenido",
		"authority": "Permiso",
		"check": "Con permiso",
		"ignore": "Ignorar",
		"processStatus": "Estado de proceso",
		"work": "En proceso",
		"workCompleted": "Completado",
		"selectApplicationNotice": "Seleccione la unión de la aplicación y el proceso",
		"selectApplication": "Seleccionar aplicación",
		"selectProcess": "Seleccionar proceso",
		"dataType": "Tipo de datos",
		"dataTypeValue": [
			"Tipo de información",
			"Tipo de datos"
		],
		"showDraft": "Volver a borrador",
		"selectColumnNotice": "Seleccione la unión de la columna y la categoría",
		"selectColumn": "Seleccionar columna",
		"selectCategory": "Seleccionar categoría",
		"selectOrgNotice": "Seleccione la unión de la organización, persona e identidad",
		"selectUnit": "Organización del redactor",
		"selectPerson": "Persona que redactó",
		"selectIdentity": "Identidad del redactor",
		"filter": "Filtro",
		"path": "Camino",
		"textValue": "Texto",
		"numberValue": "Número",
		"dateTimeValue": "Fecha y hora",
		"dateValue": "Fecha",
		"timeValue": "Hora",
		"booleanValue": "Booleano",
		"equals": "Igual a",
		"notEquals": "No igual a",
		"greaterThan": "Mayor que",
		"greaterThanOrEqualTo": "Mayor o igual que",
		"lessThan": "Menor que",
		"lessThanOrEqualTo": "Menor o igual que",
		"like": "Coincide con",
		"notLike": "No coincide con",
		"inRange": "Rango",
		"in": "Contiene",
		"script": "Script",
		"filterRestrict": "Usar como filtro por defecto",
		"customFilterRestrict": "Usar como datos de filtro personalizados",
		"logic": "Lógica",
		"or": "O",
		"and": "Y",
		"comparison": "Comparación",
		"value": "Valor",
		"multiValueNotice": "Para múltiples valores, separe con coma (,)",
		"now": "Hora actual",
		"currentPerson": "Persona actual",
		"currentIdentity": "Identidad actual",
		"currentPersonDirectUnit": "Organización directa de la persona actual",
		"currentPersonAllUnit": "Todas las organizaciones de la persona actual",
		"currentPersonGroupList": "Grupos a los que pertenece la persona actual",
		"currentPersonRoleList": "Roles de la persona actual",
		"to": "A",
		"input": "Entrada",
		"selectable": "Seleccionable",
		"selectOptionScriptNotice": "return [\"Texto de opción|Valor de opción\"]",
		"selectOptionScript": "Script de opciones",
		"defaultFilterCondition": "Condición de filtro por defecto",
		"customFilterCondition": "Datos de filtro personalizados",
		"byScript": "Según el guión",
		"language": "Paquete lingüístico",
		"languageInfo": "Devuelve un objeto json que contiene información lingüística; O2.language obtiene información sobre el idioma actual",
		"forceClearCustomViewStyle": "Eliminar estilos personalizados",
		"export": "Exportar",
		"exportNotice": "Exportar hasta 2.000 artículos de una sola vez",
		"exportWidth": "Ancho",
		"exportEnable": "Permitir la exportación",
		"isTime": "Tipo de tiempo",
		"isNumber": "Tipo digital",
		"viewEnable": "Activar vista",
		"total": "Total",
		"notNeeded": "No es necesario",
		"totalValue": "Valores",
		"totalCount": "Cantidad",
		"headText": "Texto de la cabecera",
		"headStyle": "Estilo de encabezado",
		"columnTitleStyle": "Estilo de título de columna",
		"columnContentStyle": "Estilo de contenido de columna"
	},
	"viewStyle": {
		"default": "Estilo predeterminado",
		"redSimple": "Rojo simple",
		"blueSimple": "Azul simple",
		"official": "Estilo oficial",
		"deepBlue": "Estilo de grupo",
		"blueFlat": "Azul y blanco plano",
		"greenFlat": "Verde plano",
		"lightBlue": "Estilo azul claro"
	},
	"formToolbar": {
		"save": "Guardar",
		"saveAs": "Guardar como",
		"autoSave": "Guardar automáticamente",
		"preview": "vista previa",
		"help": "ayuda"
	},
	"actionBar": {
		"exportExcel": "Exportar Microsoft"
	},
	"newStatement": "Nueva configuración de consulta",
	"statement": "Configuración de consulta",
	"run": "Ejecutar",
	"runTest": "Probar la sentencia",
	"statementType": "Tipo de sentencia",
	"statementTable": "Tabla de datos",
	"selectTable": "Seleccionar tabla de datos",
	"save_success": "La configuración de consulta se guardó correctamente.",
	"inputStatementName": "Ingresa el nombre de la configuración de consulta",
	"saveStatementNotice": "¡Guarda primero!",
	"cannotDisabledViewNotice": "La vista no está habilitada",
	"noViewNotice": "No se ha creado una vista. ¡Crea una vista primero! ",
	"previewNotSelectStatementNotice": "Sólo se puede previsualizar si el tipo de sentencia es 'Select'",
	"field": "Campo",
	"fileldSelectNote": "-Selecciona un campo para insertarlo en la sentencia-",
	"statementFormat": "Formato de la sentencia:",
	"statementJpql": "JPQL",
	"statementScript": "Script JPQL",
	"nativeSql": "SQL nativo",
	"nativeSqlScript": "Script SQL nativo",
	"statementCategory": "Tipo de objeto de acceso",
	"scriptTitle": "Crear JPQL mediante script",
	"sqlScriptTitle": "Crear SQL mediante script",
	"countMethod": "Sentencia de conteo",
	"jpqlType": "Tipo de JPQL",
	"jpqlFromResult": "Entrada de consulta",
	"jpqlMaxResult": "Número máximo de resultados",
	"jpqlSelectTitle": "Sentencia JPQL",
	"inputWhere": "Puedes ingresar la cláusula 'Where' en el cuadro de edición a continuación.",
	"jpqlRunSuccess": "La ejecución de JPQL fue exitosa",
	"newLineSuccess": "Los datos se han insertado correctamente.",
	"newLineJsonError": "Error al insertar datos. El formato de los datos no es válido.",
	"queryStatement": "Sentencia de consulta",
	"countStatement": "Sentencia de conteo",
	"currentPerson": "Persona actual",
	"currentIdentity": "Identidad actual",
	"currentPersonDirectUnit": "Organización directa en la que está la persona actual",
	"currentPersonAllUnit": "Todas las organizaciones a las que pertenece la persona actual",
	"currentPersonGroupList": "Grupos a los que pertenece la persona actual",
	"currentPersonRoleList": "Roles que posee la persona actual",
	"defaultCondition": "Condiciones de asignación automática:",
	"ignore": "Ignorar",
	"auto": "Automático",
	"assign": "Asignar",
	"mastInputParameter": "Ingrese el parámetro",
	"pathExecption": "El formato del camino es \"alias de tabla.nombre del campo\" y no es correcto.",
	"modifyViewFilterNote": "El formato de la sentencia ha cambiado, modifique la condición de filtro de la vista.",
	"systemTable": "Tabla del sistema",
	"customTable": "Tabla de datos personalizada",
	"taskInstance": "Tarea pendiente (Task)",
	"taskCompletedInstance": "Tarea completada (TaskCompleted)",
	"readInstance": "Lectura pendiente (Read)",
	"readedInstance": "Lectura completada (ReadCompleted)",
	"workInstance": "Instancia del flujo de trabajo (Work)",
	"workCompletedInstance": "Instancia de flujo de trabajo completada (WorkCompleted)",
	"reviewInstance": "Lectura disponible (Review)",
	"documentInstance": "Documento de gestión de contenido (Document)",
	"taskInstanceSql": "Tarea pendiente (PP_C_TASK)",
	"taskCompletedInstanceSql": "Tarea completada (PP_C_TASKCOMPLETED)",
	"readInstanceSql": "Lectura pendiente  (PP_C_READ)",
	"readedInstanceSql": "Lectura completada (PP_C_READCOMPLETED)",
	"workInstanceSql": "Instancia de flujo de trabajo (PP_C_WORK)",
	"workCompletedInstanceSql": "Instancia de flujo de trabajo completada (PP_C_WORKCOMPLETED)",
	"reviewInstanceSql": "Lectura disponible (PP_C_REVIEW)",
	"documentInstanceSql": "Documento de gestión de contenido (CMS_DOCUMENT)",
	"autoAddColumns": "generar columnas basadas en la tabla de datos",
	"queryParameter": "Parámetros de consulta",
	"filterList": "Condiciones de filtrado",
	"pageNo": "Número de página",
	"perPage": "Por Página",
	"size": "Artículo"
}
MWF.xApplication.query.StatementDesigner["lp."+o2.language] = MWF.xApplication.query.StatementDesigner.LP