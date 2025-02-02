# amotivv - Expert AI Consulting Website

A modern, responsive website built with Astro and Tailwind CSS for AI consulting services. The site features an interactive AI readiness assessment, contact form integration with Netlify Forms, and a clean, professional design.

![amotivv Website Screenshot](public/og-image.jpg)

## 🚀 Features

- **Interactive AI Readiness Assessment**: Multi-step questionnaire to evaluate business AI readiness
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Contact Form**: Integrated with Netlify Forms for easy lead capture
- **Performance Optimized**: Built with Astro for excellent loading speeds
- **SEO Ready**: Comprehensive meta tags and OpenGraph support
- **Modern Stack**: Built with Astro, Tailwind CSS, and TypeScript

## 🛠️ Tech Stack

- [Astro](https://astro.build) - Static Site Generator
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org) - Type safety
- [Netlify Forms](https://www.netlify.com/products/forms) - Form handling
- [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) - Typography

## 📦 Project Structure

```
/
├── public/
│   ├── favicon.svg
│   └── site.webmanifest
├── src/
│   ├── components/
│   │   ├── Assessment.astro
│   │   ├── Benefits.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Navigation.astro
│   │   ├── Process.astro
│   │   └── ResultsPreview.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/your-username/amotivv.git
cd amotivv
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
PUBLIC_SITE_URL=https://your-domain.com
```

### Netlify Forms

The contact form is pre-configured for Netlify Forms. No additional setup is required - just deploy to Netlify!

## 📝 Development

### Commands

| Command           | Action                                       |
|:-----------------|:---------------------------------------------|
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start local dev server at `localhost:4321`   |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally before deploying  |

### Adding New Components

1. Create new component in `src/components/`
2. Import and use in `src/pages/index.astro`
3. Add styles using Tailwind CSS classes

## 🚀 Deployment

### Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy!

## 🎨 Customization

### Colors

Update the color scheme in `tailwind.config.mjs`:

```js
colors: {
  primary: '#4D7EFF',
  secondary: '#111111',
  'off-white': '#F8F8F8',
  'light-gray': '#E5E5E5',
  'dark-gray': '#333333'
}
```

### Typography

The site uses IBM Plex Mono. To change the font:

1. Update the Google Fonts import in `src/layouts/Layout.astro`
2. Update the font family in `tailwind.config.mjs`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, email ai@amotivv.com or create an issue in this repository.