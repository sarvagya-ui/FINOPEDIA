# 🚀 Free Deployment Guide for Finopedia

## Option 1: GitHub Pages (Recommended - Easiest)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Create GitHub Repository
1. Go to [github.com](https://github.com)
2. Create new repository named "finopedia"
3. Push your code to GitHub

### Step 3: Deploy
```bash
npm run deploy
```

### Step 4: Enable GitHub Pages
1. Go to your repository settings
2. Scroll to "Pages" section
3. Select "gh-pages" branch as source
4. Your site will be live at: `https://yourusername.github.io/finopedia`

---

## Option 2: Netlify (Drag & Drop)

### Step 1: Build
```bash
ng build --configuration production
```

### Step 2: Deploy
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Drag `dist/finopedia/browser` folder to Netlify
4. Get instant URL!

---

## Option 3: Vercel (CLI)

### Step 1: Install Vercel
```bash
npm install -g vercel
```

### Step 2: Deploy
```bash
vercel
```

Follow prompts and get instant URL!

---

## 🎯 Quick Start (GitHub Pages)

1. **Install gh-pages:**
   ```bash
   npm install
   ```

2. **Create GitHub repo** and push code

3. **Deploy:**
   ```bash
   npm run deploy
   ```

4. **Enable Pages** in GitHub settings

**Your site will be live in 5 minutes!** 🎉

---

## 📝 Notes

- All options are **completely free**
- GitHub Pages: Best for static sites
- Netlify: Best for drag & drop simplicity
- Vercel: Best for developers

Choose GitHub Pages for the easiest setup! 
