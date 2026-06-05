@echo off
echo ================================
echo   PUSH A GITHUB + AUTO DEPLOY
echo ================================

echo [1/4] Agregando archivos...
git add .

echo [2/4] Escribi el mensaje del commit:
set /p mensaje="Mensaje: "

echo [3/4] Haciendo commit...
git commit -m "%mensaje%"

echo [4/4] Pusheando a GitHub...
git push origin main

echo.
echo Deploy automatico iniciado en Vercel!
echo Revisa https://vercel.com para ver el estado.
pause