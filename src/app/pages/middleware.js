// pages/_middleware.js

import { NextResponse } from 'next/server';
import { verifyToken } from '../lib/auth'; // You need to implement this function

export async function middleware(req) {
  const token = req.cookies.token; // Adjust this if you use a different method to store tokens

  if (!token || !await verifyToken(token)) {
    // Redirect to login if not authenticated
    return NextResponse.redirect(new URL('../auth/login', req.url));
  }

  return NextResponse.next();
}
