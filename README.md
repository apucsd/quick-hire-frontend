# Quick Hire - Advanced Job Portal

Quick Hire is a modern, high-performance job recruitment platform built with the latest web technologies. It provides a seamless experience for job seekers to find opportunities and for administrators to manage job listings.

## 🚀 Live Demo
[Check out the live application here](https://quick-hire-liard.vercel.app/)

## ✨ Key Features

- **Dynamic Job Listings**: Real-time fetching of job data from a robust backend.
- **Advanced Search & Filter**: Filter jobs by category, employment type, or keywords with instant results.
- **Interactive UI**: Premium design with smooth animations, custom loading states, and responsive layouts.
- **Job Details & Applications**: Detailed job views with an integrated application system and success feedback.
- **Admin Dashboard**: Powerful management interface for creating, updating, and deleting job postings.
- **Mobile Optimized**: Fully responsive design that works perfectly on all devices from mobile to desktop.
- **Client-Side Routing**: Fast, flicker-free navigation using React Router.

## 🛠️ Technology Stack

- **Frontend Core**: [React 19](https://react.dev/)
- **State Management & Data Fetching**: [Redux Toolkit (RTK Query)](https://redux-toolkit.js.org/rtk-query/overview)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Routing**: [React Router DOM 7](https://reactrouter.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📦 Installation & Setup

Follow these steps to set up the project locally:

### 1. Clone the repository
```bash
git clone https://github.com/apucsd/quick-hire-frontend.git
cd quick-hire-frontend
```

### 2. Install dependencies
Using **Yarn**:
```bash
yarn install
```
Or using **NPM**:
```bash
npm install
```

### 3. Environment Configuration
Create a `.env` file in the root directory (if needed for custom backend URLs) or check `src/redux/base/baseApi.ts` to configure the API base URL.

### 4. Run the development server
```bash
yarn dev
```
The application will be available at `http://localhost:5173`.

### 5. Build for production
```bash
yarn build
```

## 📂 Project Structure

- `src/components`: Reusable UI components (Navbar, Hero, Featured Section, etc.)
- `src/pages`: Main application pages (Home, Jobs, JobDetail, Admin, Error)
- `src/redux`: Redux store configuration and RTK Query API slices
- `src/routes`: Application routing configuration
- `src/assets`: Static assets and global styles

## 📄 License
This project is licensed under the MIT License.
