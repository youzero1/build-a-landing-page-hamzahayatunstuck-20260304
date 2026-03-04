import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Contact } from './entities/Contact';

// Database configuration using SQLite
// DATABASE_URL is set in .env file
const databasePath = process.env.DATABASE_URL || './database.sqlite';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: databasePath,
  synchronize: true, // Automatically sync database schema in development
  logging: false, // Disable logging in production
  entities: [Contact],
  migrations: [],
  subscribers: [],
});

// Initialize the database connection when the application starts
// This is called in the API route when needed
