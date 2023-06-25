'use client'

import { redirect } from 'next/navigation'
import React from 'react';
import * as RoutesInfo from '../../../routes';

const userLoggedIn: boolean = true;

export default function Page({ params }: { params: { server: string } }) {

  React.useEffect(()=> {
    if (!userLoggedIn) redirect('/auth/login');

    if (!RoutesInfo.isValidServerRoute(parseInt(params.server))) redirect('/dash/home');
  });

  return (
    <div>
      Server {params.server} Page
    </div>
  )
}
