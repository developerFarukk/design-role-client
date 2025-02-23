#  Design Role

This is a fully functional portfolio website built with **Next.js**, **TypeScript**, and **Tailwind CSS**. It includes public pages accessible to all users and a private dashboard for authenticated users to manage blogs, projects, and messages.

## Project Link
- **Website Live Link**: <a href="https://design-role-1.vercel.app" target="_blank" rel="noopener noreferrer">Design Role</a>
- **GitHub Server Repo**: <a href="https://github.com/developerFarukk/design-role-server.git" target="_blank" rel="noopener noreferrer">DesignRole Server</a>

- **VIDIO Review Link**: <a href="https://drive.google.com/file/d/1olFzGxBlTL4LIV3D2UTlu_K__oQVug3V/view?usp=sharing" target="_blank" rel="noopener noreferrer">Video Presentation</a>

## Features

### Public Pages (Accessible to All Users)
- **Home Page (`/`)**
  - Display portfolio introduction.
  - See my skills.
  - My featured projects.
  - Resume download button.
- **Projects Page (`/projects`)**
  - Clicking on a project opens a detailed page (`/projects/[id]`).
- **Blog Page (`/blog`)**
  - Clicking on a blog opens a detailed blog page (`/blog/[id]`).
- **Contact Page (`/contact`)**
  - Simple contact form (name, email, message).
  

### Dashboard (Only for Logged-in Users)
- **Login (`/dashboard`)**
  - Only authenticated users can access the dashboard.
- **Blog Management (`/dashboard/blogs`)**
  - Create, read, edit, or delete blog posts.
- **Project Management (`/dashboard/projects`)**
  - CRUD operations (Create, Read, Update, Delete) for projects.

- **Message Management (`/dashboard/messages`)**
  - View messages submitted from the contact form.

---

## Technical Requirements

### Frontend
- Built with **Next.js** and **TypeScript**.
- Styled using **Tailwind CSS**.
- Advance Technology: **Redux, Cloundery**
- Dynamic routes for projects and blogs (`/projects/[id]`, `/blog/[id]`).

### Backend
- Simple backend using **Node.js** and **Express**.
- Manages Blog, Project, and other essential data.
- Backend API is publicly accessible.

### Database
- **MongoDB** for storing projects, blogs, and messages.


---

## Installation

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (for database)
- GitHub, Google, or any other social login credentials (for authentication)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/developerFarukk/design-role-client.git
   cd portfolio-website

   npm install