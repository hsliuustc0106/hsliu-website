# Hongsheng Liu - Personal Website

A comprehensive personal website for Research Scientist Hongsheng Liu, showcasing professional experience, research publications, AI4Science projects, and academic achievements. Built with Next.js and deployed on GitHub Pages.

## 🌟 Features

- **Professional Portfolio**: Complete showcase of research experience at Huawei 2012 Lab
- **Publications Gallery**: Dedicated page with 9 research publications from top venues (KDD, NeurIPS, ICLR, IJCAI)
- **Project Showcase**: Hierarchical display of MindScience platform and specialized suites
- **Educational Timeline**: PhD in Statistics & Operations Research (UNC Chapel Hill) and Bachelor's in Mathematical Statistics (USTC)
- **Visitor Analytics**: Real-time visitor counter across all pages
- **Responsive Design**: Mobile-first design with dark mode support
- **SEO Optimized**: Proper meta tags and structured data
- **Fast Performance**: Static site generation with Next.js
- **Custom Branding**: Professional MindScience logo integration

## 🎯 Live Website

**Primary URL**: [https://hsliuustc0106.github.io](https://hsliuustc0106.github.io)

### Page Structure:
- **Home**: Professional overview and experience timeline
- **Publications**: Complete research portfolio with 9 publications
- **Projects**: MindScience platform and specialized suites showcase

## 🚀 Quick Start

### Prerequisites

- Node.js 24.7.0 or later (currently using 24.7.0)
- npm package manager
- Git with SSH authentication

### Installation

1. Clone the repository:
```bash
git clone git@github.com:hsliuustc0106/hsliuustc0106.github.io.git
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

## 📦 Deployment

### Current Setup: GitHub User Pages

This website is deployed using GitHub User Pages for clean URLs without repository path:

1. **Repository**: `hsliuustc0106.github.io`
2. **Deployment**: Automatic via GitHub Actions
3. **URL Structure**: Clean URLs (e.g., `/publications/`, `/projects/`)
4. **Configuration**: No base path required

### Build and Deploy

```bash
# Build the static site
npm run build

# Commit and push changes
git add .
git commit -m "Update website content"
git push
```

GitHub Actions automatically deploys changes to the live site.

## 🛠️ Project Structure

```
hsliu-website/
├── .github/workflows/
│   └── deploy.yml              # GitHub Actions deployment
├── public/
│   ├── mindscience-icon.svg    # Custom MindScience logo (compact)
│   ├── mindscience-logo.svg    # Custom MindScience logo (full)
│   └── .nojekyll              # GitHub Pages configuration
├── src/app/
│   ├── publications/
│   │   └── page.tsx           # Publications showcase page
│   ├── projects/
│   │   └── page.tsx           # Projects showcase page
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Site metadata and layout
│   └── page.tsx               # Home page with experience timeline
├── next.config.ts             # Next.js configuration (no basePath)
├── package.json
├── tailwind.config.js         # Tailwind CSS configuration
└── tsconfig.json
```

## 📊 Content Overview

### Professional Experience
- **Current**: Research Scientist at Huawei 2012 Lab (2021-Present)
- **Location**: Mainland China
- **Focus**: LLM Serving optimization, vLLM, Dynamo, AI4Science
- **Role**: MindScience repository maintainer

### Education
- **PhD**: Statistics and Operations Research, UNC Chapel Hill (2015-2020)
- **Bachelor's**: Mathematical Statistics, School for the Gifted Young, USTC (2011-2015)

### Research Publications (9 Total)
- **Venues**: KDD 2025, NeurIPS 2022/2024, ICLR 2024/2025, IJCAI
- **Categories**: AI4Science (8), LLM Serving (1)
- **Topics**: Graph learning, physics-informed ML, PDE solvers, optimization

### Projects
- **MindScience Platform**: Main project with 6 specialized suites
  - **MindEarth**: Weather forecasting and earth sciences
  - **MindFlow**: Computational fluid dynamics
  - **MindSPONGE**: Computational biology and molecular simulation
- **LLM Serving Research**: vLLM and vLLM-Ascend optimization

## 🔧 Technologies Used

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS with dark mode support
- **Deployment**: GitHub Pages with GitHub Actions
- **Analytics**: Visitor counter (visitor-badge.laobi.icu)
- **Assets**: Custom SVG logos for MindScience branding
- **Development**: Node.js 24.7.0, npm

## 🎨 Design Features

- **Color Coding**: AI4Science (purple), LLM Serving (blue), Research (green)
- **Custom Logos**: Professional MindScience branding
- **Responsive Layout**: Mobile-first design
- **Dark Mode**: Full theme support
- **Typography**: Professional academic styling
- **Navigation**: Consistent across all pages

## 📈 Analytics

- **Visitor Counter**: Real-time tracking across all pages
- **Page ID**: `hsliuustc0106.github.io`
- **Service**: visitor-badge.laobi.icu
- **Display**: Professional badge in footer

## 🔗 External Links

- **Google Scholar**: [M7ag7rIAAAAJ](https://scholar.google.com/citations?user=M7ag7rIAAAAJ&hl=zh-CN)
- **MindScience Repository**: [Gitee](https://gitee.com/mindspore/mindscience)
- **GitHub Profile**: [hsliuustc0106](https://github.com/hsliuustc0106)
- **Email**: liuhongsheng4@huawei.com

## 📝 Recent Updates

- ✅ Repository renamed to `hsliuustc0106.github.io` for clean URLs
- ✅ Added comprehensive publications page with 9 research papers
- ✅ Reorganized projects with MindScience hierarchy
- ✅ Updated educational background with Mathematical Statistics degree
- ✅ Added visitor counter across all pages
- ✅ Enhanced footer with GitHub links and analytics
- ✅ Fixed all Gitee repository links for MindScience suites

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Contact**: [liuhongsheng4@huawei.com](mailto:liuhongsheng4@huawei.com)  
**Website**: [https://hsliuustc0106.github.io](https://hsliuustc0106.github.io)  
**Status**: ✅ Live and Active

