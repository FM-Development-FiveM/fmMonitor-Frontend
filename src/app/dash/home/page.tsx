import Image from 'next/image'

import { NextResponse } from 'next/server'

const skipWelcomeScreen: boolean = false;

/*
if (skipWelcomeScreen) {
  NextResponse.redirect(new URL('/dash/home'));
}
*/

export default function Page() {
  return (
    <main className="fmScreen fmCenterScreen fmWelcomeScreen">
      <div className="fmCenterContent">
        <span className="fmWelcomeCenterContentTitle">
          Welcome to fmMonitor Dashboard!
        </span><br></br>
      </div>
    </main>
  )
}
