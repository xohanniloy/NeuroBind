# Neuro Binding Website - cPanel Deployment Guide

## Pre-Deployment Checklist ✅
- ✅ Project built successfully for production
- ✅ All features tested and working
- ✅ No console errors or warnings

## Option 1: Static Site Deployment (Recommended)

### Step 1: Export Your Project Files
1. In Replit, click the 3 dots menu (⋯) next to your project name
2. Select "Export as zip"
3. Download the zip file to your computer

### Step 2: Prepare Files for cPanel
From the downloaded zip, you'll need these folders:
- `dist/public/` - Contains your website files
- `dist/public/index.html` - Main webpage
- `dist/public/assets/` - CSS, JavaScript, and images

### Step 3: Upload to cPanel
1. Login to your cPanel
2. Open "File Manager"
3. Navigate to `public_html/` (main website folder)
4. Upload all files from `dist/public/` to `public_html/`
5. Make sure `index.html` is in the root of `public_html/`

### Step 4: Configure Domain
- Your website will be accessible at your domain name
- The contact form will work (it's designed to be backend-independent for static hosting)

## Option 2: Full-Stack Deployment (If your hosting supports Node.js)

### Requirements:
- Node.js support in cPanel
- SSH access (recommended)

### Step 1: Upload Full Project
1. Export entire project as zip from Replit
2. Upload to cPanel via File Manager or SSH
3. Extract in your domain's folder

### Step 2: Install Dependencies
```bash
npm install --production
```

### Step 3: Configure Environment
- Set `NODE_ENV=production`
- Configure any database connections if needed

### Step 4: Start Application
```bash
npm start
```

## Post-Deployment Checklist
- [ ] Website loads correctly
- [ ] All pages navigate properly
- [ ] Contact form submits successfully
- [ ] All animations and interactions work
- [ ] Mobile responsive design intact
- [ ] All neural animations functioning

## Troubleshooting Common Issues

### Issue: "Cannot GET /" Error
**Solution**: Make sure `index.html` is in the correct directory (`public_html/`)

### Issue: CSS/JS Not Loading
**Solution**: Check that the `assets/` folder is uploaded with all files

### Issue: Routing Not Working
**Solution**: Add `.htaccess` file for single-page application routing:
```apache
RewriteEngine On
RewriteRule ^(?!.*\.).*$ /index.html [L]
```

### Issue: Contact Form Not Working
**Solution**: The form is designed to work with static hosting and should function properly

## Performance Optimization
- Your site is already optimized with:
  - Compressed assets (139KB gzipped)
  - Optimized images
  - Minified CSS/JS
  - Fast loading neural animations

## Support
If you encounter any issues during deployment, the most common solution is ensuring all files from `dist/public/` are properly uploaded to your `public_html/` directory.

---

**Your Neural Marketing Website is Ready for the World! 🚀**