# ⚡ Quick Deploy Guide

## 🎯 Deploy in 3 Simple Steps

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `stayora`
3. Description: `Modern hotel booking platform with AI recommendations`
4. Click "Create repository"

### Step 2: Push Your Code

Open your terminal in the `airbnbDp` folder and run:

```bash
git remote add origin https://github.com/YOUR_USERNAME/stayora.git
git push -u origin main --tags
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 3: Deploy to Vercel

**Option A: Automatic (Easiest)**

1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select your `stayora` repository
4. Click "Deploy"
5. Done! ✅

**Option B: Using Script**

Just double-click `deploy.bat` and follow the prompts!

**Option C: Using CLI**

```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## 📝 After Deployment

Your app will be live at: `https://stayora-xxxxx.vercel.app`

Copy that URL and update your README.md:

```markdown
## 🎬 Demo

🔗 [View Live Demo](https://your-actual-url.vercel.app)
```

Then commit and push:

```bash
git add README.md
git commit -m "docs: add live demo link"
git push origin main
```

---

## ✅ Checklist

- [ ] Created GitHub repository
- [ ] Pushed code to GitHub
- [ ] Deployed to Vercel
- [ ] Updated README with live link
- [ ] Tested live site
- [ ] Shared with friends! 🎉

---

## 🆘 Need Help?

If you get stuck, just:
1. Open an issue on GitHub
2. Check DEPLOYMENT.md for detailed guide
3. Visit Vercel docs: https://vercel.com/docs

**Your project is 100% ready to deploy!** 🚀
