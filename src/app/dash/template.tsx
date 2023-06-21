import { NextPage, PageConfig } from 'next'
import { Button } from '../../../components/ui/button'

export default function DashboardTemplate({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <main className="fmScreen fmDashboardScreen">
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

      <div className="fmDashboardTopNav">
        TemplatePageName - Need to automate this in the child page file
      </div>

      <div className="fmDashboardContent">
        {children}
        <span className="fmCopyrightFooterRight">© 2023 FM Development. All rights reserved</span>
      </div>
    </main>
  )
}
