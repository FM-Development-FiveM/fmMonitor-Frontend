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
    <main className="fmScreen fmCenterScreen fmWelcomeScreen">
      <div className="fmCenterContent">
        <span className="fmCenterContentTitle">
          Welcome to fmMonitor!
        </span><br></br>

        <span className="fmCenterContentSubtitle canSelectText">The All In One FiveM Server Manager Tool</span><br></br>

        <Button variant="outline" className="fmWelcomeCenterContentButton">Manage Servers</Button><br></br>

        <div className="fmWelcomeCenterContentCheckbox">
          <Label className="fmWelcomeCenterContentCheckboxLabel" htmlFor="donotshow">Don’t show this screen again!</Label>
          <Checkbox className="fmWelcomeCenterContentCheckboxCheck" id="donotshow" />
        </div>
      </div>

      <span className="fmCopyrightFooter">© 2023 FM Development. All rights reserved</span>
    </main>
  )
}
