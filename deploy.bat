@echo off
echo ========================================
echo Stayora Deployment Script
echo ========================================
echo.

echo Step 1: Checking Git status...
git status
echo.

echo Step 2: Building Tailwind CSS...
call npm run build
echo.

echo Step 3: Committing any remaining changes...
git add -A
git commit -m "chore: prepare for deployment"
echo.

echo Step 4: Pushing to GitHub...
echo Please make sure you have set up your GitHub remote:
echo git remote add origin https://github.com/YOUR_USERNAME/stayora.git
echo.
set /p PUSH="Do you want to push to GitHub now? (y/n): "
if /i "%PUSH%"=="y" (
    git push origin main --tags
    echo GitHub push complete!
) else (
    echo Skipped GitHub push.
)
echo.

echo Step 5: Deploying to Vercel...
echo.
echo Choose deployment method:
echo 1. Deploy with Vercel CLI (requires: npm install -g vercel)
echo 2. Manual deployment (open Vercel Dashboard)
echo.
set /p METHOD="Enter choice (1 or 2): "

if "%METHOD%"=="1" (
    echo Deploying with Vercel CLI...
    vercel --prod
) else (
    echo.
    echo Please follow these steps:
    echo 1. Go to https://vercel.com/dashboard
    echo 2. Click "Add New" - "Project"
    echo 3. Import your GitHub repository
    echo 4. Click "Deploy"
    echo.
    echo Opening Vercel Dashboard...
    start https://vercel.com/dashboard
)

echo.
echo ========================================
echo Deployment process complete!
echo ========================================
pause
