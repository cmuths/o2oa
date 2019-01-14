## O2OA : Java企业信息化系统

O2OA是一款Java开源企业信息化建设平台，包括流程管理、门户管理、信息管理、数据管理和服务管理五大平台。用户可以直接使用平台已有功能进行信息信息化建设，平台提供了完整的用户管理，权限管理，流程和信息管理体系，并且提供了大量的开发组件和开箱即用的应用，可以大大减化企业信息化建设成本和业务应用开发难度。

## 产品特点\:

1. 代码全部开源，开发者可以下载源码进行任意，编译成自己的信息化平台。

2. 平台全功能免费，无任何功能和人数限制。

3. 支持私有化部署，下载软件安装包后可以安装在自己的服务器上，数据更安全。

4. 随时随地办公，平台支持兼容HTML5的浏览器，并且提供了源生的IOS/Android应用

5. 高可扩展性，用户通过简单的学习后，可以自定义配置门户、流程应用、内容管理应用

更多的产品介绍、使用说明、下载、在线体验、API及讨论请移步至[http://www.o2oa.net/](http://www.o2oa.net/)

![o2oa](https://static.oschina.net/uploads/space/2018/0918/200301_N9TG_3931542.png)

## 官方网站\:

开源主页 : https://www.oschina.net/p/o2oa

官方网站 : http://www.o2oa.net

## 配置编译环境\:

# 安装NodeJS

1、访问nodejs的官方网站的downdolad，网址：https://nodejs.org/en/download/，获取Linux Binaries (x64)安装包下载链接：

      wget https://nodejs.org/dist/v10.15.0/node-v10.15.0-linux-x64.tar.xz

2、解压安装：

	# yum search xz
	# yum install xz.i386
	# xz -d node-v10.15.0-linux-x64.tar.xz
	# tar -xf node-v10.15.0-linux-x64.tar
	# mv node-v10.15.0-linux-x64 node-v10.15.0

3、配置nodejs（略）

# 安装 Java8 及配置Java环境 

    略
	
# 安装 apache-maven-3.6.0 及配置maven环境 

    wget http://repos.fedorapeople.org/repos/dchen/apache-maven/epel-apache-maven.repo -O /etc/yum.repos.d/epel-apache-maven.repo
	
	yum -y install apache-maven
	
	
# 安装 apache-ant-1.10.5 ant 	

    yum -y install ant

## 源码编译

1、打开命令提示工具，cd到o2oa/o2server目录

   cd /usr/o2oa/o2server

2、执行命令进行编译：mvn install，开始进行源码编译

   mvn install

3、打包安装程序： ant

   ant

# 关于编译错误
第一次使用maven进行项目编译执行 mvn install 可能会发生异常，原因是编译生成的META-INF/persistence.xml来不及加载。这种情况下，您可以再执行一次mvn install即可完成对项目的编译。
[ERROR] Failed to execute goal org.apache.openjpa:openjpa-maven-plugin:3.0.0:enhance(enhanncer) on project x_base_core_project: Exception enhancer of goal org.apache.openjpa:openjpa-maven-plugin:3.0.0:enhance failed: MetaDataFactory could not be configured (conf.newMetaDataFactoryInstance() returned null). This might mean that no configuration properties were fount. Ensured that you have a META-INF/persistence.xml file, that it is  available in your classpath, or that the properties file you are using for configuration is available. If you are using Ant, please see the <properties> or <propertiesFile> attributes of the task's nested <config> element. This can also occur if your OpenJPA distribution jars are corrupt, or if your security policy is overly strict. -> [Help 1]
[ERROR]
......

## 授权协议\:

o2oa软件遵守双重协议，一个是AGPL授权协议，一个是商用授权协议。

1、o2oa是开源软件，您可以修改源码及免费使用；这时需遵守AGPL协议。  

2、当使用者使用o2oa软件提供收费服务，或者对o2oa进行分发、销售时需进行商业授权。

   具体请查看：[http://www.o2oa.net/product.html](http://www.o2oa.net/product.html)。  

3、使用者下载本软件即表示愿遵守此项协议。  


## 最新版本 v4.1237\:

2019-01-08 新增功能:[流程设计]批量上传附件资源功能。

2019-01-08 新增功能:[应用市场]增加导入本地应用文件功能（.xapp）。

2019-01-08 新增功能:[表单设计]增加图片组件直接选择应用附件资源的功能。

2019-01-08 新增功能:[组织管理]增加人员通过Excel导入的功能。

2019-01-08 新增功能:[组织管理]新增达梦数据库数据导出/导入。

2019-01-08 新增功能:[会议管理]支持匿名的附件参看功能。

2019-01-08 更新优化:[表单设计]大大加快了表单查看Json原始数据的速度，也不会再阻塞浏览器。

2019-01-08 更新优化:[表单设计]优化了表单和页面的HTML方式导入。

2019-01-08 更新优化:[WEB服务器]修正WEB服务器目录结构。

2019-01-08 更新优化:[桌面应用]可将云文件|待办|已办等更多内容放置到桌面。

2019-01-08 更新优化:[应用服务器]升级POI到4.0.1,匹配tika的支持版本。

2019-01-08 更新优化:[搜索引擎]修改分词器，缩小安装包大小。

2019-01-08 更新优化:[搜索引擎]增加对特殊字符的过滤。。

2019-01-08 BUG修复:[表单设计]修正一些旧版本表单的预览错误。

2019-01-08 BUG修复:[页面设计]修正页面图片路径错误的问题。

2019-01-08 BUG修复:[流程引擎]修正召回|撤回按钮显示条件的判断错误。

2019-01-08 BUG修复:[流程引擎]修正调度按钮显示条件的判断错误。

## 最新版本服务器安装包下载\:

windows 64Bit : https://obs-o2public.obs.cn-east-2.myhwclouds.com/o2server_20190110095409_windows.zip

Linux 64Bit : https://obs-o2public.obs.cn-east-2.myhwclouds.com/o2server_20190110095409_linux.zip

MacOS : https://obs-o2public.obs.cn-east-2.myhwclouds.com/o2server_20190110095409_macos.zip

AIX : https://obs-o2public.obs.cn-east-2.myhwclouds.com/o2server_20190110095409_aix.zip

