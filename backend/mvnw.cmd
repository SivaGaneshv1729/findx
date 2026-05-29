@REM ----------------------------------------------------------------------------
@REM Licensed to the Apache Software Foundation (ASF) under one
@REM or more contributor license agreements.  See the NOTICE file
@REM distributed with this work for additional information
@REM regarding copyright ownership.  The ASF licenses this file
@REM to you under the Apache License, Version 2.0 (the
@REM "License"); you may not use this file except in compliance
@REM with the License.  You may obtain a copy of the License at
@REM
@REM    http://www.apache.org/licenses/LICENSE-2.0
@REM
@REM Unless required by applicable law or agreed to in writing,
@REM software distributed under the License is distributed on an
@REM "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
@REM KIND, either express or implied.  See the License for the
@REM specific language governing permissions and limitations
@REM under the License.
@REM ----------------------------------------------------------------------------

@REM ----------------------------------------------------------------------------
@REM Apache Maven Wrapper startup batch script, version 3.3.2
@REM
@REM Optional ENV vars
@REM   MVNW_REPOURL - repo url base for downloading maven distribution
@REM   MVNW_USERNAME/MVNW_PASSWORD - user and password for downloading maven
@REM   MVNW_VERBOSE - true: enable verbose log; others: silence the output
@REM ----------------------------------------------------------------------------

@IF "%DEBUG%"=="on" ECHO ON
@setlocal

set ERROR_CODE=0

@REM To isolate internal variables from possible pre-existing env vars, reset them
set "MAVEN_PROJECTBASEDIR="
set "MAVEN_HOME="
set "MAVEN_ARGUMENTS="

@REM ==== START VALIDATION ====
if not "%JAVA_HOME%"=="" goto OkJHome
for %%i in (java.exe) do set "JAVACMD=%%~$PATH:i"
if not "%JAVACMD%"=="" goto CheckJava
echo.
echo Error: JAVA_HOME is not defined correctly.
echo   We cannot execute %JAVACMD%
echo.
goto error

:OkJHome
set "JAVACMD=%JAVA_HOME%\bin\java.exe"

:CheckJava
if exist "%JAVACMD%" goto init

echo.
echo Error: JAVA_HOME is set to an invalid directory.
echo   JAVA_HOME = "%JAVA_HOME%"
echo   Please set the JAVA_HOME variable in your environment to match the
echo   location of your Java installation.
echo.
goto error

@REM ==== END VALIDATION ====

:init

@REM Find the project base dir, i.e. the directory that contains the folder .mvn.
@REM Fallback to current working directory if not found.

set "MAVEN_PROJECTBASEDIR=%CD%"
:findBaseDir
if exist "%MAVEN_PROJECTBASEDIR%\.mvn" goto baseDirFound
set "MAVEN_PROJECTBASEDIR=%MAVEN_PROJECTBASEDIR%\.."
if "%MAVEN_PROJECTBASEDIR:~-3%"=="..\" goto baseDirNotFound
goto findBaseDir

:baseDirFound
set "W_JAR=%MAVEN_PROJECTBASEDIR%\.mvn\wrapper\maven-wrapper.jar"
set "W_PROPS=%MAVEN_PROJECTBASEDIR%\.mvn\wrapper\maven-wrapper.properties"
goto run

:baseDirNotFound
set "MAVEN_PROJECTBASEDIR=%CD%"
set "W_JAR=%CD%\.mvn\wrapper\maven-wrapper.jar"
set "W_PROPS=%CD%\.mvn\wrapper\maven-wrapper.properties"

:run
@REM Check if the wrapper jar exists
if exist "%W_JAR%" goto execute

@REM If not, try to download it (requires powershell)
set "W_URL=https://repo.maven.apache.org/maven2/org/apache/maven/wrapper/maven-wrapper/3.3.2/maven-wrapper-3.3.2.jar"
echo Downloading Maven Wrapper...
powershell -Command "& { [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; (New-Object Net.WebClient).DownloadFile('%W_URL%', '%W_JAR%') }"
if %ERRORLEVEL% neq 0 goto error

:execute
@REM Execute the wrapper jar
"%JAVACMD%" ^
  %MAVEN_OPTS% ^
  -classpath "%W_JAR%" ^
  "-Dmaven.multiModuleProjectDirectory=%MAVEN_PROJECTBASEDIR%" ^
  org.apache.maven.wrapper.MavenWrapperMain ^
  %*

if %ERRORLEVEL% neq 0 goto error
goto end

:error
set ERROR_CODE=1

:end
@endlocal & set ERROR_CODE=%ERROR_CODE%
exit /B %ERROR_CODE%
