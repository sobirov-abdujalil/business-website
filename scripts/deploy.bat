@echo off
setlocal enabledelayedexpansion

REM Deployment Script for Next.js Business Website (Windows)
REM This script automates the build and deployment process

echo 🚀 Next.js Business Website Deployment Script
echo ==============================================
echo.

REM Function to check if command exists
:command_exists
set "command=%~1"
where %command% >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] %command% is not installed or not in PATH.
    exit /b 1
) else (
    exit /b 0
)

REM Function to check Node.js version
:check_node_version
call :command_exists node
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed. Please install Node.js 18 or higher.
    exit /b 1
)

for /f "tokens=*" %%i in ('node -v') do set NODE_VERSION=%%i
for /f "tokens=2 delims=v." %%a in ("!NODE_VERSION!") do set NODE_MAJOR=%%a

if !NODE_MAJOR! lss 18 (
    echo [ERROR] Node.js version 18 or higher is required. Current version: !NODE_VERSION!
    exit /b 1
)

echo [SUCCESS] Node.js version: !NODE_VERSION!
exit /b 0

REM Function to check if npm is installed
:check_npm
call :command_exists npm
if %errorlevel% neq 0 (
    echo [ERROR] npm is not installed. Please install npm.
    exit /b 1
)

for /f "tokens=*" %%i in ('npm -v') do set NPM_VERSION=%%i
echo [SUCCESS] npm version: !NPM_VERSION!
exit /b 0

REM Function to install dependencies
:install_dependencies
echo [INFO] Installing dependencies...

if exist package-lock.json (
    npm ci
) else (
    npm install
)

if %errorlevel% neq 0 (
    echo [ERROR] Failed to install dependencies
    exit /b 1
)

echo [SUCCESS] Dependencies installed successfully
exit /b 0

REM Function to run linting
:run_lint
echo [INFO] Running ESLint...

npm run lint
if %errorlevel% neq 0 (
    echo [WARNING] Linting found issues. Please fix them before deploying.
    set /p CONTINUE="Continue with deployment anyway? (y/N): "
    if /i not "!CONTINUE!"=="y" (
        echo [ERROR] Deployment cancelled due to linting issues
        exit /b 1
    )
) else (
    echo [SUCCESS] Linting passed
)

exit /b 0

REM Function to build the project
:build_project
echo [INFO] Building the project...

REM Clean previous build
if exist .next (
    rmdir /s /q .next
    echo [INFO] Cleaned previous build
)

REM Build the project
npm run build
if %errorlevel% neq 0 (
    echo [ERROR] Build failed
    exit /b 1
)

echo [SUCCESS] Build completed successfully
exit /b 0

REM Function to test the build locally
:test_build
echo [INFO] Testing build locally...

REM Start the production server in background
start /b npm start

REM Wait for server to start
timeout /t 5 /nobreak >nul

REM Check if server is running (simple check)
curl -s http://localhost:3000 >nul 2>&1
if %errorlevel% equ 0 (
    echo [SUCCESS] Local test successful - server is running on http://localhost:3000
    set /p CONTINUE="Press Enter to stop the test server and continue with deployment..."
    
    REM Stop the server (find and kill the process)
    for /f "tokens=2" %%i in ('tasklist /fi "imagename eq node.exe" /fo csv ^| find "node.exe"') do (
        taskkill /pid %%i /f >nul 2>&1
    )
) else (
    echo [ERROR] Local test failed - server is not responding
    REM Stop any running node processes
    for /f "tokens=2" %%i in ('tasklist /fi "imagename eq node.exe" /fo csv ^| find "node.exe"') do (
        taskkill /pid %%i /f >nul 2>&1
    )
    exit /b 1
)

exit /b 0

REM Function to deploy to Netlify (if CLI is available)
:deploy_to_netlify
call :command_exists netlify
if %errorlevel% equ 0 (
    echo [INFO] Deploying to Netlify...
    
    REM Check if user is logged in
    netlify status >nul 2>&1
    if %errorlevel% equ 0 (
        echo [INFO] Deploying to production...
        netlify deploy --prod --dir=.next
        if %errorlevel% equ 0 (
            echo [SUCCESS] Deployment to Netlify completed
        ) else (
            echo [ERROR] Deployment to Netlify failed
            exit /b 1
        )
    ) else (
        echo [WARNING] Not logged in to Netlify CLI. Please run 'netlify login' first.
        echo [INFO] You can deploy manually by dragging the .next folder to Netlify
    )
) else (
    echo [WARNING] Netlify CLI not installed. Install with: npm install -g netlify-cli
    echo [INFO] You can deploy manually by dragging the .next folder to Netlify
)

exit /b 0

REM Function to create deployment package
:create_deployment_package
echo [INFO] Creating deployment package...

REM Create deployment directory
for /f "tokens=2 delims==" %%a in ('wmic OS Get localdatetime /value') do set "dt=%%a"
set "YY=%dt:~2,2%" & set "YYYY=%dt:~0,4%" & set "MM=%dt:~4,2%" & set "DD=%dt:~6,2%"
set "HH=%dt:~8,2%" & set "Min=%dt:~10,2%" & set "Sec=%dt:~12,2%"
set "DEPLOY_DIR=deployment-%YYYY%%MM%%DD%-%HH%%Min%"

mkdir "%DEPLOY_DIR%" 2>nul

REM Copy necessary files
xcopy .next "%DEPLOY_DIR%\.next\" /e /i /y >nul
xcopy public "%DEPLOY_DIR%\public\" /e /i /y >nul
copy package.json "%DEPLOY_DIR%\" >nul
copy next.config.js "%DEPLOY_DIR%\" >nul
copy netlify.toml "%DEPLOY_DIR%\" >nul

REM Create deployment info
echo Deployment Package Created: %date% %time% > "%DEPLOY_DIR%\DEPLOYMENT_INFO.txt"
echo Build Version: >> "%DEPLOY_DIR%\DEPLOYMENT_INFO.txt"
echo Node Version: >> "%DEPLOY_DIR%\DEPLOYMENT_INFO.txt"
echo npm Version: >> "%DEPLOY_DIR%\DEPLOYMENT_INFO.txt"
echo. >> "%DEPLOY_DIR%\DEPLOYMENT_INFO.txt"
echo Files included: >> "%DEPLOY_DIR%\DEPLOYMENT_INFO.txt"
echo - .next/ (built application) >> "%DEPLOY_DIR%\DEPLOYMENT_INFO.txt"
echo - public/ (static assets) >> "%DEPLOY_DIR%\DEPLOYMENT_INFO.txt"
echo - package.json (dependencies) >> "%DEPLOY_DIR%\DEPLOYMENT_INFO.txt"
echo - next.config.js (Next.js configuration) >> "%DEPLOY_DIR%\DEPLOYMENT_INFO.txt"
echo - netlify.toml (Netlify configuration) >> "%DEPLOY_DIR%\DEPLOYMENT_INFO.txt"
echo. >> "%DEPLOY_DIR%\DEPLOYMENT_INFO.txt"
echo To deploy: >> "%DEPLOY_DIR%\DEPLOYMENT_INFO.txt"
echo 1. Upload this folder to Netlify >> "%DEPLOY_DIR%\DEPLOYMENT_INFO.txt"
echo 2. Set build command: npm run build >> "%DEPLOY_DIR%\DEPLOYMENT_INFO.txt"
echo 3. Set publish directory: .next >> "%DEPLOY_DIR%\DEPLOYMENT_INFO.txt"

echo [SUCCESS] Deployment package created: %DEPLOY_DIR%
echo [INFO] You can upload this folder to Netlify for deployment
exit /b 0

REM Function to show deployment options
:show_deployment_options
echo.
echo [INFO] Deployment Options:
echo 1. Deploy to Netlify (if CLI is available)
echo 2. Create deployment package
echo 3. Exit
echo.

set /p OPTION="Choose an option (1-3): "

if "!OPTION!"=="1" (
    call :deploy_to_netlify
) else if "!OPTION!"=="2" (
    call :create_deployment_package
) else if "!OPTION!"=="3" (
    echo [INFO] Exiting...
    exit /b 0
) else (
    echo [ERROR] Invalid option
    call :show_deployment_options
)

exit /b 0

REM Function to show build information
:show_build_info
echo.
echo [INFO] Build Information:
for /f "tokens=*" %%i in ('node -v') do echo Node.js Version: %%i
for /f "tokens=*" %%i in ('npm -v') do echo npm Version: %%i
for /f "tokens=*" %%i in ('npm list next') do (
    echo %%i | find "next" >nul && echo Next.js Version: %%i
)
echo Build Directory: .next
echo Public Directory: public
echo.
exit /b 0

REM Function to show help
:show_help
echo Usage: %0 [OPTIONS]
echo.
echo Options:
echo   -h, --help     Show this help message
echo   -b, --build    Only build the project (skip deployment)
echo   -t, --test     Build and test locally
echo   -d, --deploy   Build and deploy to Netlify
echo.
echo Examples:
echo   %0              # Full deployment process
echo   %0 --build      # Only build the project
echo   %0 --test       # Build and test locally
echo   %0 --deploy     # Build and deploy to Netlify
exit /b 0

REM Main deployment function
:main
REM Check prerequisites
call :check_node_version
if %errorlevel% neq 0 exit /b 1

call :check_npm
if %errorlevel% neq 0 exit /b 1

REM Show build information
call :show_build_info

REM Install dependencies
call :install_dependencies
if %errorlevel% neq 0 exit /b 1

REM Run linting
call :run_lint
if %errorlevel% neq 0 exit /b 1

REM Build the project
call :build_project
if %errorlevel% neq 0 exit /b 1

REM Test the build (optional)
set /p TEST_BUILD="Test the build locally? (y/N): "
if /i "!TEST_BUILD!"=="y" (
    call :test_build
    if %errorlevel% neq 0 exit /b 1
)

REM Show deployment options
call :show_deployment_options
if %errorlevel% neq 0 exit /b 1

echo.
echo [SUCCESS] Deployment process completed!
echo [INFO] Your Next.js business website is ready for production! 🎉
exit /b 0

REM Parse command line arguments
if "%~1"=="-h" goto show_help
if "%~1"=="--help" goto show_help
if "%~1"=="-b" goto build_only
if "%~1"=="--build" goto build_only
if "%~1"=="-t" goto test_only
if "%~1"=="--test" goto test_only
if "%~1"=="-d" goto deploy_only
if "%~1"=="--deploy" goto deploy_only
if "%~1"=="" goto main
echo [ERROR] Unknown option: %~1
call :show_help
exit /b 1

:build_only
call :check_node_version
if %errorlevel% neq 0 exit /b 1
call :check_npm
if %errorlevel% neq 0 exit /b 1
call :install_dependencies
if %errorlevel% neq 0 exit /b 1
call :run_lint
if %errorlevel% neq 0 exit /b 1
call :build_project
if %errorlevel% neq 0 exit /b 1
echo [SUCCESS] Build completed successfully!
exit /b 0

:test_only
call :check_node_version
if %errorlevel% neq 0 exit /b 1
call :check_npm
if %errorlevel% neq 0 exit /b 1
call :install_dependencies
if %errorlevel% neq 0 exit /b 1
call :run_lint
if %errorlevel% neq 0 exit /b 1
call :build_project
if %errorlevel% neq 0 exit /b 1
call :test_build
if %errorlevel% neq 0 exit /b 1
exit /b 0

:deploy_only
call :check_node_version
if %errorlevel% neq 0 exit /b 1
call :check_npm
if %errorlevel% neq 0 exit /b 1
call :install_dependencies
if %errorlevel% neq 0 exit /b 1
call :run_lint
if %errorlevel% neq 0 exit /b 1
call :build_project
if %errorlevel% neq 0 exit /b 1
call :deploy_to_netlify
if %errorlevel% neq 0 exit /b 1
exit /b 0
