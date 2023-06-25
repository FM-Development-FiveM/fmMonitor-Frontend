'use client'

import { redirect } from 'next/navigation'
import React from 'react';

const userLoggedIn: boolean = true;

export default function Page() {

  React.useEffect(()=> {
    if (!userLoggedIn) redirect('/auth/login');
  });

  return (
    <div>
      Dahboard Home
    </div>
  )
}
