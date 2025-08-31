# Hongsheng Liu - Personal Website

A modern, responsive personal website built with Next.js and Tailwind CSS. This website showcases professional information, experience, projects, and contact details.

## 🌟 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Fast**: Built with Next.js for optimal performance
- **GitHub Pages Ready**: Configured for easy deployment to GitHub Pages
- **SEO Optimized**: Proper meta tags and structure for search engines

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/hsliuustc0106/hsliu-website.git
cd hsliu-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Deployment to GitHub Pages

### Method 1: Automatic Deployment (Recommended)

1. **Create a GitHub Repository**:
   - Go to [GitHub](https://github.com) and create a new repository
   - For personal website: name it `username.github.io` (replace `username` with your GitHub username)
   - For project website: name it whatever you like (e.g., `hsliu-website`)

2. **Push your code to GitHub**:
   ```bash
   git remote add origin https://github.com/hsliuustc0106/hsliu-website.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click on **Settings** tab
   - Scroll down to **Pages** section
   - Under **Source**, select **GitHub Actions**
   - The GitHub Actions workflow will automatically deploy your site

4. **Access Your Website**:
   - For `username.github.io` repo: `https://username.github.io`
   - For project repos like yours: `https://hsliuustc0106.github.io/hsliu-website`

### Method 2: Manual Build and Deploy

1. Build the static site:
```bash
npm run build
```

2. The built files will be in the `out` directory
3. Upload the contents of `out` directory to your web hosting service

## 🛠️ Customization

### Personal Information

Edit the following files to customize with your information:

- `src/app/page.tsx` - Main content, sections, and personal details
- `src/app/layout.tsx` - Meta tags, title, and description
- `public/` - Add your images, resume, etc.

### Styling

The website uses Tailwind CSS for styling. You can customize:

- Colors and themes in `tailwind.config.js`
- Global styles in `src/app/globals.css`
- Component styles directly in the TSX files

### Adding Projects

To add your real projects, edit the projects section in `src/app/page.tsx`:

```tsx
// Replace the placeholder projects array with your real projects
const projects = [
  {
    title: "Your Project Name",
    description: "Project description",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://your-project.com",
    githubUrl: "https://github.com/yourusername/project"
  },
  // Add more projects...
];
```

## 📁 Project Structure

```
hsliu-website/
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   ├── .nojekyll          # Prevents Jekyll processing
│   └── favicon.ico        # Website favicon
├── src/
│   └── app/
│       ├── globals.css    # Global styles
│       ├── layout.tsx     # Root layout and metadata
│       └── page.tsx       # Main page component
├── .gitignore
├── README.md
├── next.config.ts         # Next.js configuration
├── package.json
├── tailwind.config.js     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🔧 Technologies Used

- **Next.js 15** - React framework for production
- **React 18** - JavaScript library for building user interfaces
- **TypeScript** - Typed superset of JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **GitHub Actions** - CI/CD for automated deployment
- **GitHub Pages** - Free static site hosting

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Contact**: [liuhongsheng4@huawei.com](mailto:liuhongsheng4@huawei.com)

**Live Website**: https://hsliuustc0106.github.io/hsliu-website (after GitHub setup)

