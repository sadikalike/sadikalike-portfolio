import { NextResponse } from 'next/server';
import dbConnect from '@/app/lib/db';
import Update from '@/app/lib/models/Update';

// ಇಲ್ಲಿ dynamic = 'force-dynamic' ಬೇಡ. cacheComponents ಆನ್ ಇದ್ದಾಗ ಅದು ಕೆಲಸ ಮಾಡುವುದಿಲ್ಲ.

// GET: ಎಲ್ಲಾ ಅಪ್‌ಡೇಟ್‌ಗಳನ್ನು ಪಡೆಯಲು
export async function GET() {
  await dbConnect();
  try {
    const updates = await Update.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: updates });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch' }, { status: 500 });
  }
}

// POST: ಹೊಸ ಅಪ್‌ಡೇಟ್ ಸೇರಿಸಲು
export async function POST(req: Request) {
  await dbConnect();
  try {
    const body = await req.json();
    const update = await Update.create(body);
    return NextResponse.json({ success: true, data: update }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to create' }, { status: 500 });
  }
}

// DELETE: ಅಪ್‌ಡೇಟ್ ಅನ್ನು ಅಳಿಸಲು
export async function DELETE(req: Request) {
  await dbConnect();
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ success: false, error: 'ID is required' }, { status: 400 });
    }

    await Update.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: 'Deleted successfully' });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to delete' }, { status: 500 });
  }
}