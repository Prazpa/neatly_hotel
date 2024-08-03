import { NextRequest, NextResponse } from 'next/server';
import pool from '@/config/configDB'; 
import { hash } from 'bcryptjs'; 

export async function POST(req: NextRequest) {
  try {
    // ตรวจสอบว่า request เป็น multipart/form-data หรือไม่
    const contentType = req.headers.get('content-type') || '';
    if (!contentType.startsWith('multipart/form-data')) {
      return NextResponse.json({ message: 'Invalid content type' }, { status: 400 });
    }

    // อ่านข้อมูลจาก request
    const formData = await req.formData();

    const fullname = formData.get('fullname') as string;
    const username = formData.get('username') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const idNumber = formData.get('id_number') as string;
    const dob = formData.get('dob') as string;
    const country = formData.get('country') as string;
    const cardNumber = formData.get('card_number') as string;
    const cardOwner = formData.get('card_owner') as string;
    const expiryDate = formData.get('expiry_date') as string;
    const cvc = formData.get('cvc') as string;

    // ตรวจสอบว่าข้อมูลจำเป็นทั้งหมดมีอยู่
    if (!fullname || !username || !email || !password || !idNumber || !dob || !country || !cardNumber || !cardOwner || !expiryDate || !cvc) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }

    // แฮชรหัสผ่าน
    const hashedPassword = await hash(password, 10);

    // เพิ่มผู้ใช้ลงในฐานข้อมูล
    await pool.query(
      'INSERT INTO users (fullname, username, email, password, id_number, dob, country, card_number, card_owner, expiry_date, cvc) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)',
      [fullname, username, email, hashedPassword, idNumber, dob, country, cardNumber, cardOwner, expiryDate, cvc]
    );

    return NextResponse.json({ message: 'Registration successful' }, { status: 200 });
  } catch (error) {
    console.error('Error during registration:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
