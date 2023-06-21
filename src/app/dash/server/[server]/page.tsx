'use client'

import { redirect } from 'next/navigation'
import React from 'react';

const userLoggedIn: boolean = true;

export default function Page({ params }: { params: { server: string } }) {

  React.useEffect(()=> {
    if (!userLoggedIn) {
        redirect('/auth/login');;
    }
  });

  return (
    <div>
      Server {params.server} Page
    </div>
  )
}
