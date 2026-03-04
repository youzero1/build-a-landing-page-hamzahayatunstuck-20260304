# Modern Landing Page - Next.js Fullstack Application

This is a fullstack Next.js application built with TypeScript, featuring a responsive landing page with a contact form, SQLite database integration via TypeORM, and Docker support for deployment.

## Features

- **Next.js App Router** with TypeScript
- **Tailwind CSS** for modern, responsive styling
- **TypeORM** with SQLite for database operations
- **Docker** and **docker-compose** for containerization
- **Coolify** deployment ready

## Project Structure

```
.
├── app/
│   ├── api/contact/route.ts   # API endpoint for contact form
│   ├── globals.css           # Global Tailwind CSS
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Landing page
├── components/               # Reusable UI components
├── lib/
│   ├── database.ts           # TypeORM database configuration
│   └── entities/Contact.ts   # Contact entity
├── public/                   # Static assets
├── types/                    # TypeScript definitions
└── ... configuration files
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm 9.x or later
- Docker and Docker Compose (for containerized deployment)

### Local Development

1. **Clone and install dependencies:**
   ```bash
   npm i
   ```

2. **Set up environment variables:**
   - The `.env` file is already configured with `DATABASE_URL=./database.sqlite`

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Docker Deployment

1. **Build and run with Docker Compose:**
   ```bash
   docker-compose up --build
   ```

2. The application will be available at [http://localhost:3000](http://localhost:3000).

### Database

- SQLite database file (`database.sqlite`) will be created automatically on first run.
- The database is configured to sync automatically in development.
- The contact form submissions are saved to the `contacts` table.

## API Endpoints

- `POST /api/contact` – Accepts JSON with `name`, `email`, and `message` fields, saves to database.

## Deployment with Coolify

1. Push this code to a Git repository.
2. In Coolify, create a new project and service:
   - Select **Next.js** as the service type.
   - Use the provided `Dockerfile` and `docker-compose.yml`.
   - Set environment variables as in `.env`.
3. Deploy the service.

## Notes

- The application uses `reflect-metadata` for TypeORM decorators.
- Tailwind CSS is configured with a custom color palette.
- The contact form is a client component for interactivity.
- The database connection is initialized lazily in the API route to avoid issues during build.

## License

MIT