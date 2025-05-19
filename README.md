# ConnectX

A scalable Zoom-style video conferencing web application built using **Next.js**, **Clerk**, **GetStream**, and **Tailwind CSS**. ConnectX supports secure meeting creation, scheduling, and real-time participation for 50+ concurrent users with seamless authentication and role-based access.

## 🚀 Features

- 🎥 **Zoom-style video meetings** with support for 50+ concurrent users
- 🔐 **Clerk Authentication** with multi-provider login (Google, GitHub, etc.)
- 👥 **Role-based Access Control** for hosts, co-hosts, and participants
- 📅 **Meeting Scheduling & Joining** functionality
- 💬 **Real-time Chat** during meetings (powered by GetStream)
- 🌐 **Responsive UI** using Tailwind CSS
- ⚙️ **Secure user sessions** and data privacy
- 📈 Built for **scalability** and future extensibility

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js](https://nextjs.org/) | React framework for SSR and routing |
| [Clerk](https://clerk.dev/) | Authentication, session management |
| [GetStream](https://getstream.io/) | Real-time chat and messaging |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [TypeScript](https://www.typescriptlang.org/) | Type safety (if applicable) |

---

## 📷 Screenshots

![image](https://github.com/user-attachments/assets/6fa30d90-dfa6-4ae9-bb7a-15eb1c170e2d)
![image](https://github.com/user-attachments/assets/3f69974c-15fd-4760-9d3f-e1ab623121b1)
![image](https://github.com/user-attachments/assets/eaa7c194-f958-4c0d-8bb7-5ce6f61dee56)
![image](https://github.com/user-attachments/assets/f21904da-7e32-40f1-bf59-a60d7ddfa6d5)





## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/connectx.git
   cd connectx
2. **Install dependencies**

   ```bash
    npm install
    # or
    yarn install

3. **Set up environment variables**

    Create a .env.local file in the root and add the following:
   ```bash
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
    CLERK_SECRET_KEY=your_clerk_secret_key
    GETSTREAM_API_KEY=your_getstream_api_key
    GETSTREAM_SECRET=your_getstream_secret

4. **Run the development server**

   ```bash
    npm run dev
    # or
    yarn dev


🔒 **Authentication & Authorization**

Clerk is used for authentication with support for:

Google

GitHub

Email/password


Participants (can join meetings)

📅 **Meeting Features**

Hosts can schedule a meeting with a custom title and time.

Participants can join meetings with a unique meeting ID.

Support for basic controls (mute, video on/off).

In-meeting chat using GetStream.


