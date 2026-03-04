import { NextRequest, NextResponse } from 'next/server';
import { AppDataSource } from '@/lib/database';
import { Contact } from '@/lib/entities/Contact';

// Initialize the database connection when the API route is called
async function initializeDatabase() {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }
}

export async function POST(request: NextRequest) {
  try {
    // Initialize the database
    await initializeDatabase();

    // Parse the request body
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Create a new contact entity
    const contact = new Contact();
    contact.name = name;
    contact.email = email;
    contact.message = message;
    contact.createdAt = new Date();

    // Save to database
    const contactRepository = AppDataSource.getRepository(Contact);
    await contactRepository.save(contact);

    return NextResponse.json(
      { message: 'Contact saved successfully', contact },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error saving contact:', error);
    return NextResponse.json(
      { error: 'Failed to save contact' },
      { status: 500 }
    );
  }
}
