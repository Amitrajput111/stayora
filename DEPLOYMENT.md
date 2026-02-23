# 🚀 Deployment Guide - Stayora

## Deploying to Vercel

### Prerequisites
- GitHub account
- Vercel account (sign up at https://vercel.com)
- Git installed locally

### Step 1: Push to GitHub

1. **Create a new repository on GitHub**
   - Go to https://github.com/new
   - Name: `stayora` (or your preferred name)
   - Description: "Modern hotel booking platform with AI recommendations"
   - Keep it Public or Private
   - Don't initialize with README (we already have one)

2. **Push your code to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/stayora.git
   git branch -M main
   git push -u origin main --tags
   ```

### Step 2: Deploy to Vercel

#### Option A: Using Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**
   - Visit https://vercel.com/dashboard
   - Click "Add New..." → "Project"

2. **Import Git Repository**
   - Select "Import Git Repository"
   - Choose your GitHub account
   - Select the `stayora` repository
   - Click "Import"

3. **Configure Project**
   - Framework Preset: `Other`
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: Leave empty
   - Install Command: `npm install`

4. **Environment Variables** (Optional)
   - Add any environment variables if needed
   - `PORT` is automatically set by Vercel

5. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete (usually 1-2 minutes)
   - Your app will be live at: `https://your-project-name.vercel.app`

#### Option B: Using Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? `Y`
   - Which scope? Select your account
   - Link to existing project? `N`
   - What's your project's name? `stayora`
   - In which directory is your code located? `./`
   - Want to override the settings? `N`

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Step 3: Configure Custom Domain (Optional)

1. Go to your project in Vercel Dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### Step 4: Update README with Live Link

After deployment, update your README.md:

```markdown
## 🎬 Demo

### Live Demo
🔗 [View Live Demo](https://your-project-name.vercel.app)
```

### Automatic Deployments

Once connected to GitHub, Vercel will automatically:
- Deploy on every push to `main` branch
- Create preview deployments for pull requests
- Show deployment status in GitHub

### Environment Variables

If you need to add environment variables:

1. Go to Vercel Dashboard → Your Project
2. Click "Settings" → "Environment Variables"
3. Add variables:
   - `NODE_ENV` = `production`
   - Any other custom variables

### Troubleshooting

#### Build Fails
- Check build logs in Vercel Dashboard
- Ensure all dependencies are in `package.json`
- Verify `npm run build` works locally

#### App Not Loading
- Check function logs in Vercel Dashboard
- Verify `vercel.json` configuration
- Ensure `app.js` is the correct entry point

#### Static Files Not Loading
- Ensure `public` folder is in root directory
- Check file paths are relative
- Verify Tailwind CSS is built

### Post-Deployment Checklist

- [ ] App loads successfully
- [ ] All pages work correctly
- [ ] Images load properly
- [ ] Search functionality works
- [ ] AI recommendations display
- [ ] Booking system functions
- [ ] Mobile responsive
- [ ] Update README with live link
- [ ] Share with others!

### Monitoring

- View analytics in Vercel Dashboard
- Check function logs for errors
- Monitor performance metrics

### Updating Your Deployment

To update your live site:

```bash
git add .
git commit -m "your update message"
git push origin main
```

Vercel will automatically redeploy!

---

**Need Help?**
- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
- GitHub Issues: Create an issue in your repository
