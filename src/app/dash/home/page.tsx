import { redirect } from 'next/navigation'

const userLoggedIn: boolean = false;

export default function Page() {
  if (!userLoggedIn) {
    redirect('/auth/login');
  }

  return (
    <main className="fmScreen fmCenterScreen fmWelcomeScreen">
      <div className="fmCenterContent">
        <span className="fmCenterContentTitle">
          Welcome to fmMonitor Dashboard!
        </span><br></br>
      </div>

      <span className="fmCopyrightFooter">© 2023 FM Development. All rights reserved</span>
    </main>
  )
}
