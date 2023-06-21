'use client'

import { redirect } from 'next/navigation'
import { Props } from 'next/script';
import React from 'react';

const userLoggedIn: boolean = true;

export default function Page({ pageTitleValue = "Dashboard" }) {
  //const pageTitleValue: string = "Dashboard";

  React.useEffect(()=> {
    if (!userLoggedIn) {
        redirect('/auth/login');;
    }
  });

  return (
    <div>
      Dahboard Home Content (Child)
    </div>
  )
}
