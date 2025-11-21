# Git Setup & Version Control Guide

## 🔧 Initial Git Setup

### 1. Initialize Git Repository

```bash
cd c:\Users\user\OneDrive\Desktop\Assignment1
git init
```

### 2. Configure Git (First Time Setup)

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 3. Add All Files

```bash
git add .
```

### 4. Create Initial Commit

```bash
git commit -m "Initial commit: FlowVision plant store website"
```

## 📤 Push to GitHub

### Option 1: Create New Repository on GitHub

1. Go to [github.com](https://github.com) and create a new repository
2. Name it: `flowvision-plant-store`
3. Don't initialize with README (we already have files)
4. Copy the repository URL

### Option 2: Using GitHub CLI

```bash
# Install GitHub CLI first
gh repo create flowvision-plant-store --public --source=. --remote=origin
```

### Push Your Code

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/flowvision-plant-store.git
git push -u origin main
```

## 📝 Git Workflow

### Making Changes

```bash
# Check status
git status

# Add specific files
git add components/Navbar.js

# Or add all changes
git add .

# Commit with message
git commit -m "Update: Enhanced navbar responsiveness"

# Push to GitHub
git push
```

### Branching Strategy

```bash
# Create new feature branch
git checkout -b feature/new-section

# Make changes and commit
git add .
git commit -m "Add new plant section"

# Push branch
git push -u origin feature/new-section

# Merge to main (after testing)
git checkout main
git merge feature/new-section
git push
```

## 🏷️ Version Tags

```bash
# Create version tag
git tag -a v1.0.0 -m "Release version 1.0.0"

# Push tags
git push --tags
```

## 📋 Recommended Commit Messages

- `Initial commit: Project setup`
- `Add: New plant card component`
- `Update: Improve mobile responsiveness`
- `Fix: Navigation menu toggle issue`
- `Style: Adjust color scheme`
- `Refactor: Optimize component structure`
- `Docs: Update README with deployment info`

## 🔍 Useful Git Commands

```bash
# View commit history
git log --oneline

# View changes
git diff

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Discard changes in file
git checkout -- filename.js

# View remote URL
git remote -v

# Pull latest changes
git pull origin main
```

## 🚀 Integration with Vercel

Once pushed to GitHub:

1. Vercel automatically detects the repository
2. Every push to `main` triggers production deployment
3. Every push to other branches creates preview deployments
4. Pull requests get automatic preview URLs

## 📦 .gitignore Already Configured

Your `.gitignore` includes:

- `node_modules/`
- `.next/`
- `.env*.local`
- Build artifacts
- IDE files

## 🔒 Protecting Main Branch

On GitHub:

1. Go to Settings → Branches
2. Add branch protection rule for `main`
3. Enable:
   - Require pull request reviews
   - Require status checks
   - Prevent force pushing

## 🤝 Collaboration Workflow

```bash
# Fork repository (on GitHub)
# Clone your fork
git clone https://github.com/YOUR_USERNAME/flowvision-plant-store.git

# Add upstream remote
git remote add upstream https://github.com/ORIGINAL_OWNER/flowvision-plant-store.git

# Keep fork updated
git fetch upstream
git merge upstream/main

# Create feature branch
git checkout -b feature/your-feature

# Make changes, commit, push
git add .
git commit -m "Add new feature"
git push origin feature/your-feature

# Create pull request on GitHub
```

## 📊 GitHub Actions (Optional)

Create `.github/workflows/ci.yml` for automated testing:

```yaml
name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
```

## 🎯 Best Practices

1. ✅ Commit often with clear messages
2. ✅ Keep commits atomic (one feature/fix per commit)
3. ✅ Test before committing
4. ✅ Pull before pushing
5. ✅ Use branches for new features
6. ✅ Review changes before committing
7. ✅ Don't commit sensitive data
8. ✅ Keep repository organized

---

**Repository Status**: Ready to push to GitHub
**Recommended Branch**: `main`
**Initial Commit**: Ready to create
