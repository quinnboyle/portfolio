# How to Run Your Portfolio Website

## The Problem You're Having:
When you click "Run" in WebStorm, you get a 404 error because WebStorm's built-in server configuration needs to be set up correctly.

## ✅ QUICK FIX - 3 Easy Ways to Run Your Site:

### Method 1: Double-Click START_HERE.bat (EASIEST!)
1. In Windows Explorer, navigate to this folder
2. Double-click `START_HERE.bat`
3. Your site will open automatically in your browser at http://localhost:8080
4. Keep the command window open while viewing your site
5. Press Ctrl+C in the command window when done

### Method 2: Use WebStorm's "Open in Browser"
1. In WebStorm's Project panel, right-click on `index.html`
2. Select "Open In" → "Browser" → Your preferred browser
3. The file will open directly (using file:// protocol)
4. ⚠️ Don't use the Run button until WebStorm is properly configured

### Method 3: Use npm start (If Node.js is installed)
1. In WebStorm, open the Terminal (View → Tool Windows → Terminal)
2. Type: `npm start`
3. Press Enter
4. Your browser will open automatically

### Method 4: Fix WebStorm's Run Configuration
I've created the configuration files for you. To use them:
1. Close WebStorm completely
2. Reopen the project
3. Click the "Run" button (should now work at http://localhost:63342/obviousport/index.html)

## 📁 Files in This Project:
- `index.html` - Your main portfolio page
- `nextmove-case-study.html` - Your NextMove case study
- `styles-light.css` - Main stylesheet
- `portfolio-v2.js` - Interactive features
- `photos/` - Your images folder
- `START_HERE.bat` - Quick launch script (NEW!)
- `package.json` - npm configuration (NEW!)

## 🔧 Still Having Issues?
If none of these work, you can always open the file directly:
1. Open any web browser
2. Press Ctrl+O (or Cmd+O on Mac)
3. Navigate to this folder and select `index.html`
4. Click "Open"

The file will open as: `file:///C:/Users/quinn/WebstormProjects/obviousport/index.html`

## 💡 Why Does This Happen?
HTML files can be opened two ways:
1. **Directly** (file:// protocol) - Simple, works immediately
2. **Through a server** (http:// protocol) - Better for testing, requires setup

WebStorm's "Run" button tries to use method 2, but needs proper configuration first.

