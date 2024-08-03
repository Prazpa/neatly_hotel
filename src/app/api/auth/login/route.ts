import { NextRequest, NextResponse } from 'next/server';
import pool from '@/config/configDB';
import { compare } from 'bcryptjs'; 

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password) {
      return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
    }

    // ค้นหาผู้ใช้จากฐานข้อมูล
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (result.rows.length === 0) {
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
    }

    const user = result.rows[0];

    // เปรียบเทียบรหัสผ่านที่แฮช
    const isMatch = await compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
    }

    // การล็อกอินสำเร็จ
    return NextResponse.json({ message: 'Login successful' }, { status: 200 });

  } catch (error) {
    console.error('Error during login:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
