import Image from 'next/image'

import { redirect } from 'next/navigation'

import { Button } from '../../components/ui/button'
import { Checkbox } from '../../components/ui/checkbox'
import { Label } from '../../components/ui/label'

const skipWelcomeScreen: boolean = false;

export default function Page() {
  if (skipWelcomeScreen) {
    redirect('/dash/home');
  }

  return (
    <main className="fmWelcomeScreen">
      <div className="fmWelcomeCenterContent">
        <span className="fmWelcomeCenterContentTitle">
          Welcome to fmMonitor!
        </span><br></br>
        <span className="fmWelcomeCenterContentSubtitle">The All In One FiveM Server Manager Tool</span>
        <br></br>
        <Button variant="outline" className="fmWelcomeCenterContentButton">Manage Servers</Button>
        <br></br>
        <div className="fmWelcomeCenterContentCheckbox">
          <Label className="fmWelcomeCenterContentCheckboxLabel" htmlFor="donotshow">Don’t show this screen again!</Label>
          <Checkbox className="fmWelcomeCenterContentCheckboxCheck" id="donotshow" />
        </div>
      </div>
      <span className="fmWelcomeCopyrightFooter">© 2023 FM Development. All rights reserved</span>
    </main>
  )
}
