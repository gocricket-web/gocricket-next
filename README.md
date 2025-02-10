## 🚀 Project Overview
Welcome to the **GOCricket Frontend**, now fully migrated to **Next.js**. This repo contains the official Next.js implementation of GOCricket, optimized for performance, SEO, and scalability.

### **🔹 Why Next.js?**
- **SSR & SSG**: Improved SEO and initial page load speed.
- **Image Optimization**: Automatic handling of WebP/AVIF.
- **Font Optimization**: Local fonts with `next/font/local`.
- **API Routes**: Serverless API handling.
- **Improved Performance**: Lazy loading, caching, and reduced JavaScript size.

---

## 📂 Folder Structure
```
/src
  ├── app/                # Next.js App Router
  │   ├── layout.tsx      # Global Layout with Metadata
  │   ├── page.tsx        # Homepage
  ├── components/         # Reusable UI Components
  ├── hooks/              # Custom React Hooks
  ├── fonts/              # Locally hosted fonts
  ├── styles/             # TailwindCSS & Global Styles
  ├── public/             # Static assets (images, icons)
  ├── constants/          # Global constants (URLs, config)
```

---

## 🛠️ Tools & Technologies Used

### **🔧 Core Stack**
- **[Next.js](https://nextjs.org/)** - React Framework
- **[TypeScript](https://www.typescriptlang.org/)** - Static Typing
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-First Styling
- **[React-Share](https://www.npmjs.com/package/react-share)** - Social Media Sharing

### **⚡ Optimizations**
- **`next/font/local`** - Local Font Optimization
- **`next/image`** - Automatic Image Optimization
- **`next/dynamic`** - Lazy Loading Components
- **`next/script`** - Asynchronous Third-Party Scripts

---

## 📌 Key Features
✅ **Server-Side Rendering (SSR) & Static Site Generation (SSG)**  
✅ **Local Font Hosting via `next/font/local`**  
✅ **Fully Responsive UI with Tailwind CSS**  
✅ **Social Sharing with `react-share`**  
✅ **Optimized Performance & Reduced Bundle Size**  

---

## 🚀 Getting Started

# Navigate into the project
cd gocricket-next

# Install dependencies
npm install
```

### **🔹 Running the Development Server**
```sh
npm run dev
```
> Open [http://localhost:3000](http://localhost:3000) in your browser.

### **🔹 Building for Production**
```sh
npm run build
npm start
```

---

## 🌍 Deployment
This project is optimized for deployment on **Vercel** (recommended) but can also be deployed on **Netlify** or **Self-hosted Servers**.

### **Deploy on Vercel**
```sh
npm install -g vercel
vercel
```

---

## 🤝 Contributing
Feel free to open issues, suggest improvements, or submit pull requests!

### **🔹 Code Formatting & Linting**
```sh
npm run lint  # Check for linting errors
npm run format  # Format code using Prettier
```

---

## 📜 License
This project is licensed under the **MIT License**.

---

## 📬 Contact & Support
If you have any questions or need further support, feel free to reach out:
📧 **Email**: support@gocricket.com  
🐦 **Twitter**: [@GoCricket](https://twitter.com/GoCricket)  
💬 **Discord**: Join our community!

