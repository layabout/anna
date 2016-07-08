MBP-PORTAL
=======================

Portal是摩宝官网项目，使用Thymeleaf模板引擎实现后端数据与视图层的解耦

Installation
----------

Minimum of Java 6 and Thymeleaf 3.0 required.

### How to run

To build this project you will need Maven 3. You can get it at: [maven](http://maven.apache.org)
##### Project Convert (not required)

* IntelliJ IDEA
```
mvn:idea:module
```

* Eclipse
```
mvn eclipse:eclipse
```

##### mirror

```xml
<mirror>
    <id>nexus</id>
    <mirrorOf>*</mirrorOf>
    <name>Nexus Mirror</name>
    <url>http://192.168.20.208:8081/nexus/content/groups/public/</url>
</mirror>
```
##### profile

```xml
<profile>
    <id>jdk-1.6</id>
    <activation>
        <activeByDefault>true</activeByDefault>
        <jdk>1.6</jdk>
    </activation>
    <properties>
        <maven.compiler.source>1.6</maven.compiler.source>
        <maven.compiler.target>1.6</maven.compiler.target>
        <maven.compiler.compilerVersion>1.6</maven.compiler.compilerVersion>
    </properties>
</profile>
```
```xml
<profile>
    <id>nexus</id>
    <repositories>
        <repository>
            <id>nexus</id>
            <name>Nexus</name>
            <url>http://192.168.20.208:8081/nexus/content/groups/public/</url>
            <releases><enabled>true</enabled></releases>
            <snapshots><enabled>true</enabled></snapshots>
        </repository>
    </repositories>
    <pluginRepositories>
        <pluginRepository>
            <id>nexus</id>
            <name>Nexus</name>
            <url>http://192.168.20.208:8081/nexus/content/groups/public/</url>
            <releases><enabled>true</enabled></releases>
            <snapshots><enabled>true</enabled></snapshots>
        </pluginRepository>
    </pluginRepositories>
</profile>
```

##### activeProfile

```xml
<activeProfiles>
    <activeProfile>nexus</activeProfile>
</activeProfiles>
```
##### Run

```
mvn clean
mvn compile
mvn jetty:run
```

Once started, the application should be available at: [website](http://localhost:8080/portal)

Usage
----

##### Snippets

Convention
---------
* 团队协作：
    - 从git服务器克隆项目后，切换到develop分支开始工作，推送代码到develop分支上，测试完毕后合并稳定代码到主干master。
* 编码约定：    
    - 不要在Controller类中自己进行异常处理逻辑；Service中的异常一旦捕获就必须处理，否则向上抛出；
    - 表单提交后，页面应使用redirect进行转发，避免刷新页面时重复提交表单。

Todo
----

* ~~从业务代码中剥离异常处理逻辑、统一消息提示~~
* ~~服务端数据校验，使用JSR303规范~~
* ~~配置文件读取工具~~
* 安全加固：
    - 数据签名
    - 防止表单重复提交
    - csrf
    - xss
    - ~~字符转义~~
* 统一日志处理
* ~~通用flash message组件~~

RoadMap
------
* 集成权限控制
* Mock Data
* 剥离出通用Module,以单独的项目进行维护,增强代码复用性
* UI组件库
* 任务调度组件使用轻量级的spring task替换quartz
* 取消轮询查询方式,使用WebSocket方式推送消息,建立消息推送中心( Socket.IO, Node.js, ActiveMQ, Redis )
* 资源配置中心( ZoomKeeper )

