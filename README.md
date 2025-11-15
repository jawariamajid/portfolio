# Jawaria Majid - Portfolio Website

A professional portfolio website showcasing projects, skills, and experience. Built with HTML, CSS, and JavaScript.

## Features

- 🎨 Modern, responsive design
- 📱 Mobile-friendly interface
- 🚀 Interactive project demos
- 💼 Professional presentation
- ⚡ Fast loading and optimized
- 🌐 GitHub Pages ready

## Projects Showcased

1. **Legal Research & Knowledge Assistant (RAG)** - Python, Pinecone, OpenAI
2. **Call Center Sentiment & Quality Dashboard** - Python, ASR, GPT-4o-mini, Flask
3. **Multi-Language Card OCR Service (Offline)** - PaddleOCR, Python, FastAPI
4. **Resume Parser & Job-Matching Portal** - Python, NLP, Django, SQL

## Deployment to GitHub Pages

### Method 1: Using GitHub Web Interface

1. Create a new repository on GitHub
2. Upload all files (index.html, styles.css, script.js, README.md)
3. Go to repository Settings → Pages
4. Select source branch (usually `main` or `master`)
5. Select `/ (root)` folder
6. Click Save
7. Your site will be available at `https://yourusername.github.io/repository-name`

### Method 2: Using Git Commands

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Portfolio website"

# Add remote repository (replace with your repository URL)
git remote add origin https://github.com/yourusername/your-repo-name.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then follow steps 3-7 from Method 1.

## Local Development

Simply open `index.html` in a web browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## File Structure

```
portfolio/
├── index.html      # Main HTML file
├── styles.css      # All styling
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Customization

- Edit `index.html` to update content
- Modify `styles.css` to change colors, fonts, and layout
- Update `script.js` to add new features or modify project demos
- Change colors in `:root` variables in `styles.css`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

