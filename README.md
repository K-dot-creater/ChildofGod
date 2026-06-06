# ChildofGod
The E-commerce for Christian purposes

Setup:
1. Find/Make a directory for your project  - I made mine called projects
2. Using the terminal in VScode - locate your folder you want to clone the repo into
3. run the "git clone https://github.com/<your_username>/ChildofGod"
4. Verify this has been cloned with the "ls" command
5. Create your git credentials in terminal
 - git config --global user.name "<your_username>"
 - git config --global user.email "<your_git_email_address>"

 🌱 Step 4 — Create branches (THIS is key in real teams)

Never work directly on main.

Instead:

git checkout -b feature/homepage

Your friend might do:

git checkout -b feature/navbar

👉 Each feature = its own branch

✍️ Step 5 — Work + commit changes

Example:

git add .
git commit -m "Add homepage layout"

Then push:

git push origin feature/homepage
🔁 Step 6 — Open a Pull Request (PR)

On GitHub:

Click Compare & Pull Request
Add description
Submit PR

👉 This is where teamwork happens

👀 Step 7 — Code review (like a real company)

Your friend:

Reviews your code
Leaves comments
Suggests improvements

Then approves & merges into main.

🔄 Step 8 — Keep your code updated

Framework:
Frontend (React)
        ↓ HTTP Requests (API calls)
Backend (Django API)
        ↓
Database (PostgreSQL/MySQL/SQLite)

frontend/
│
├── public/
│   ├── favicon.ico
│   ├── logo.png
│   └── images/
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── styles/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── Button.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── hooks/
│   │   └── useAuth.js
│   │
│   ├── context/
│   │   └── AuthContext.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
├── index.html
└── README.md

Heroku for deployment?

Scaffolded frontend/backend/database folders
-------------------------------------------

I added a recommended folder structure and minimal starter files for the frontend, backend, and database.

- Frontend (`frontend/`):
        - public/
                - index.html
        - src/
                - assets/
                        - images/
                        - styles/global.css
                - components/
                        - Navbar.jsx
                        - Footer.jsx
                - pages/
                        - Home.jsx
                - services/
                        - api.js
                - hooks/
                        - useAuth.js
                - context/
                        - AuthContext.jsx
                - App.jsx
                - main.jsx
        - package.json

- Backend (`backend/`):
        - manage.py (placeholder)
        - requirements.txt
        - childofgod_api/
                - settings.py (placeholder)
                - urls.py
        - apps/
                - products/
                        - models.py
                        - views.py
                        - serializers.py
                        - urls.py
        - Dockerfile

- Database (`database/`):
        - postgres/
                - init.sql (example schema)
        - docker/
                - docker-compose.yml
        - backups/
        - migrations/

## Getting Started: Local Development Setup

This guide walks you through running the entire **ChildofGod** application on your local machine (localhost). Follow the steps below — it's designed for beginners!

### 📋 Prerequisites

Before you start, make sure you have these installed:

1. **Node.js + npm** (for frontend)
   - Download: https://nodejs.org/
   - Verify: `node --version` and `npm --version` in your terminal
   - Why: Node.js runs JavaScript on your computer; npm installs React/Vite packages

2. **Python 3.11+** (for backend)
   - Download: https://www.python.org/
   - Verify: `python --version` in your terminal
   - Why: Django (our backend framework) is built with Python

3. **Git** (version control)
   - Download: https://git-scm.com/
   - Verify: `git --version`
   - Why: Track code changes and push to GitHub

### 📁 Project Structure

Here's where everything lives:

```
ChildofGod/
├── frontend/              # React app (Vite) — runs on localhost:3000
│   ├── src/
│   │   ├── components/    # Reusable UI parts (Navbar, Footer, etc.)
│   │   ├── pages/         # Full page views (Home, About)
│   │   ├── services/      # API calls to backend
│   │   └── App.jsx        # Main React component
│   ├── package.json       # Lists React, Vite, dependencies
│   └── .env.example       # Environment variables (copy to .env)
│
├── backend/               # Django REST API — runs on localhost:8000
│   ├── manage.py          # Django command-line tool
│   ├── requirements.txt   # Lists Django, DRF, dependencies
│   ├── childofgod_api/    # Main Django project settings
│   │   ├── settings.py    # Database config, installed apps
│   │   ├── urls.py        # Route setup
│   │   └── wsgi.py        # Production server config
│   ├── apps/
│   │   └── products/      # Product model, API endpoints
│   │       ├── models.py  # Database tables
│   │       ├── views.py   # API logic
│   │       └── serializers.py  # Format data as JSON
│   └── db.sqlite3         # Database file (auto-created)
│
├── database/              # Database scripts (optional — we use SQLite)
│   ├── postgres/
│   │   └── init.sql       # SQL schema (for production)
│   └── docker/
│       └── docker-compose.yml  # Postgres setup (optional)
│
└── README.md             # This file
```

---

## Step-by-Step Setup

### Step 1: Clone the Repository

```bash
# Open terminal and navigate to your projects folder
cd ~/projects  # or wherever you want the project

# Clone the repository
git clone https://github.com/K-dot-creater/ChildofGod.git

# Enter the project folder
cd ChildofGod
```

**What this does:** Downloads the code from GitHub and enters the project directory.

---

### Step 2: Frontend Setup (React + Vite)

Open a **new terminal window** and follow these steps:

```bash
# Navigate to the frontend folder
cd frontend

# Install all React/Vite packages from package.json
npm install
```

**Why `npm install`?** Reads `package.json` and downloads React, Vite, and other libraries your app needs.

**What happens:** A `node_modules` folder is created (~500MB) with all dependencies.

Once done, start the dev server:

```bash
# Start the Vite development server
npm run dev
```

**Output:**
```
  VITE v5.4.21  ready in 315 ms

  ➜  Local:   http://localhost:3000/
```

✅ **Frontend is running!** Open http://localhost:3000 in your browser. You should see: `Welcome to ChildofGod`

**Keep this terminal open.** The server auto-reloads when you edit files.

---

### Step 3: Backend Setup (Django REST API)

Open a **second terminal window** and follow these steps:

```bash
# Navigate to the backend folder (from project root)
cd backend

# Create a Python virtual environment (isolated Python workspace)
python -m venv venv

# Activate the virtual environment
# On Windows:
venv\Scripts\activate

# On macOS/Linux:
source venv/bin/activate
```

**Why a virtual environment?** Keeps Django and its dependencies separate from your system Python. Each project can use different versions.

**Visual cue:** Your terminal should now show `(venv)` at the start:
```
(venv) C:\Users\sam5k\projects\ChildofGod\backend>
```

Now install Django and other dependencies:

```bash
# Install packages listed in requirements.txt
pip install -r requirements.txt
```

**Output:**
```
Successfully installed Django-6.0.6 djangorestframework-3.17.1 ...
```

Next, set up the database:

```bash
# Create database tables (migrations)
python manage.py migrate

# Output:
# Operations to perform: Apply all migrations
# Running migrations: ... OK
```

**Why `migrate`?** Converts Python models (in `backend/apps/products/models.py`) into actual database tables in SQLite.

Now start the Django dev server:

```bash
# Start the development server
python manage.py runserver
```

**Output:**
```
Starting development server at http://127.0.0.1:8000/
```

✅ **Backend is running!** Open http://localhost:8000/api/ in your browser. You'll see a Django REST Framework interface listing endpoints.

**Keep this terminal open.** The server auto-reloads when you edit Python files.

---

### Step 4: Test the Full Stack

You now have **both servers running**:
- **Frontend:** http://localhost:3000 (React)
- **Backend:** http://localhost:8000 (Django API)

**Test endpoints:**

1. **Homepage (Frontend):** http://localhost:3000
   - Shows: "Welcome to ChildofGod"
   
2. **API Root:** http://localhost:8000/api/
   - Shows all available endpoints (empty by default)
   
3. **Products Endpoint:** http://localhost:8000/api/products/
   - Returns JSON list of products (empty until you add data)

---

## 📝 Development Workflow

### Making Changes

**Frontend (React):**
1. Edit files in `frontend/src/` (e.g., `App.jsx`, `components/Navbar.jsx`)
2. Save the file → Vite auto-reloads the browser
3. See your changes instantly at http://localhost:3000

**Backend (Django):**
1. Edit files in `backend/` (e.g., `apps/products/models.py`)
2. Save the file → Django auto-reloads
3. If you changed models, run: `python manage.py makemigrations && python manage.py migrate`

### Adding API Calls from Frontend

Example: Fetch products from the backend in `frontend/src/services/api.js`:

```javascript
const API_BASE = 'http://localhost:8000'

export async function getProducts(){
  const res = await fetch(`${API_BASE}/api/products/`)
  return res.json()
}
```

Then use it in a React component:

```javascript
import { getProducts } from './services/api.js'

export default function Products(){
  const [products, setProducts] = React.useState([])
  
  React.useEffect(()=>{
    getProducts().then(setProducts)
  },[])
  
  return <div>{products.map(p => <p key={p.id}>{p.name}</p>)}</div>
}
```

---

## 🛑 Stopping the Servers

To stop either server, go to its terminal and press:
- **Windows:** `Ctrl + Break` (or `Ctrl + C`)
- **macOS/Linux:** `Ctrl + C`

---

## ⚠️ Common Issues

### "npm command not found"
→ Node.js not installed. Download from https://nodejs.org/

### "python command not found"
→ Python not installed. Download from https://www.python.org/

### "venv not found" / venv fails to activate
→ Try: `python -m venv venv` again, or use `python3` instead of `python`

### "Port 3000 or 8000 already in use"
→ Another app is using that port. Either close it or run on a different port:
```bash
# Frontend on port 5000 instead:
npm run dev -- --port 5000

# Backend on port 8001 instead:
python manage.py runserver 8001
```

### "ModuleNotFoundError: No module named 'django'"
→ Virtual environment not activated. Run `venv\Scripts\activate` (Windows) or `source venv/bin/activate` (macOS/Linux)

---

## 🚀 Next Steps

1. **Add features:** Edit `frontend/src/pages/Home.jsx` and `backend/apps/products/models.py`
2. **Create new products:** Use Django admin at http://localhost:8000/admin/
   - Create admin: `python manage.py createsuperuser`
3. **Connect frontend to backend:** Use `frontend/src/services/api.js`
4. **Deploy:** Push to GitHub and set up Heroku/Railway/Vercel (see deployment docs)

---

## 📚 Resources

- **React Docs:** https://react.dev/
- **Django Docs:** https://docs.djangoproject.com/
- **REST Framework:** https://www.django-rest-framework.org/
- **Vite Guide:** https://vitejs.dev/

---

## Optional: Using PostgreSQL Instead of SQLite

By default, the app uses **SQLite** (file-based, no extra setup). To use PostgreSQL:

```bash
cd database/docker
docker-compose up -d
```

Then update `backend/childofgod_api/settings.py` to use PostgreSQL. (See comments in `settings.py` for details.)
