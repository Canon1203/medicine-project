@echo off
chcp 65001 >nul

:: 设置项目目录为当前批处理文件所在目录
set "PROJECT_DIR=%~dp0"

echo 当前项目目录: %PROJECT_DIR%
cd /d "%PROJECT_DIR%"

echo 正在启动项目...
call npm start

if errorlevel 1 (
    echo.
    echo 启动失败!
    pause
    exit /b 1
)

echo.
echo 项目已启动!