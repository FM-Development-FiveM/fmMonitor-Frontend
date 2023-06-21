'use client'

import { Button } from '../../../components/ui/button'
import * as RoutesInfo from '../routes';
import { usePathname } from 'next/navigation'

export default function DashboardTemplate({
  children
}: {
  children: React.ReactNode
}) {
  var pageName = RoutesInfo.getPageName(usePathname());

  return (
    <main className="fmScreen fmDashboardScreen">
      <div className="fmDashboardTopNav">
        <span className="fmDashboardTopNavLeft">
          {pageName}
        </span>

        <span className="fmDashboardTopNavRight">
          Username
        </span>
      </div>

      <div className="fmDashboardLeftNavBrand">
        <span>fmMonitor</span>
      </div>

      <div className="fmDashboardLeftNav">
        <div className="fmDashboardLeftNavBottom">
          <Button style={{ width: "278px", height: "51px", background: "#4F4F4F", borderRadius: "7px", fontSize: "23px" }}>
            <span style={{ textAlign: "right" }}>Test</span>
          </Button>
        </div>
      </div>

      <div className="fmDashboardContent">
        {children}
        <span className="fmCopyrightFooterRight">© 2023 FM Development. All rights reserved</span>
      </div>
    </main>
  )
}
