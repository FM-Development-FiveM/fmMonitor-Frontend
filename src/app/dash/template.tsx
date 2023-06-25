'use client'

import { useRouter } from 'next/navigation'
import { Button } from '../../../components/ui/button'
import * as RoutesInfo from '../routes';
import * as AuthService from '../../services/auth';
import { usePathname } from 'next/navigation'
import * as Icons from "@heroicons/react/24/outline";
import { RoutesInfoInterface } from '@/interfaces/IRoutesInfo'
import * as Menubar from '@radix-ui/react-menubar';

export default function DashboardTemplate({
  children,
}: {
  children: React.ReactNode,
}) {
  const router = useRouter()

  var serverRoutes: RoutesInfoInterface[] = [
    {  
      serverId: 1,
      type: "server",
      name: "Server 1",
      description: "FiveM Server - Server 1",
      path: "/dash/server/1"
    },
    {
      serverId: 2,
      type: "server",
      name: "Server 2",
      description: "FiveM Server - Server 2",
      path: "/dash/server/2"
    }
  ];

  RoutesInfo.appendServerRoutes(serverRoutes);

  var pageName = RoutesInfo.getPageName(usePathname());

  return (
    <main className="fmScreen fmDashboardScreen">
      <div className="fmDashboardTopNav">
        <span className="fmDashboardTopNavLeft">
          {pageName}
        </span>

        <span className="fmDashboardTopNavRight">
          <Menubar.Root className="fmDashboardTopNavRightMenu">
            <Menubar.Menu>
              <Menubar.Trigger className="UserProfileDropdown"><b>Username</b></Menubar.Trigger>

              <Menubar.Portal>
                <Menubar.Content className="MenubarContent" align="start" sideOffset={5} alignOffset={-3}>
                  <Menubar.Item onClick={() => AuthService.onLogout()} className="MenubarItem">
                    <Icons.ArrowLeftOnRectangleIcon width="23px" />
                    <span className="RightSlot"><b>Logout</b></span>
                  </Menubar.Item>
                </Menubar.Content>
              </Menubar.Portal>
            </Menubar.Menu>
          </Menubar.Root>
        </span>
      </div>

      <div className="fmDashboardLeftNavBrand">
        <span>fmMonitor</span>
      </div>

      <div className="fmDashboardLeftNav">
        <Button onClick={() => router.push('/dash/home')} style={{ width: "278px", height: "51px", background: pageName === "Dashboard" ? "rgba(79, 79, 79, 0.4)" : "rgba(79, 79, 79, 0.05)", borderRadius: "7px", fontSize: "23px" }}>
          <Icons.Squares2X2Icon width="30px" style={{ position: "absolute", left: "15px", textAlign: "left", float: "left" }} />
          <span style={{ position: "absolute", right: "15px", textAlign: "right", fontWeight: pageName === "Dashboard" ? "700" : "200", float: "right" }}>Dashboard</span>
        </Button>

        <div className="fmDashboardLeftNavDivider" style={{ marginTop: "2px" }}>Servers</div>

        <div className="fmDashboardLeftNavServers">
          {
            serverRoutes.map(server => {
              return <Button key={server.serverId} onClick={() => router.push(server.path)} style={{ width: "278px", height: "51px", background: pageName === server.name ? "rgba(79, 79, 79, 0.4)" : "rgba(79, 79, 79, 0.05)", borderRadius: "7px", fontSize: "23px" }}>
                <Icons.CommandLineIcon width="30px" style={{ position: "absolute", left: "15px", textAlign: "left", float: "left" }} />
                <span style={{ position: "absolute", right: "15px", textAlign: "right", fontWeight: pageName === server.name ? "700" : "200", float: "right" }}>{server.name}</span>
              </Button>
            })
          }
        </div>

        <div className="fmDashboardLeftNavBottom">
          <div className="fmDashboardLeftNavDivider" style={{ marginBottom: "5px" }}>Settings</div>

          <Button style={{ width: "278px", height: "51px", background: "rgba(79, 79, 79, 0.7)", borderRadius: "7px", fontSize: "23px" }}>
            <Icons.Cog6ToothIcon width="30px" style={{ position: "absolute", left: "15px", textAlign: "left", float: "left" }} />
            <span style={{ position: "absolute", right: "15px", textAlign: "right", float: "right", fontWeight: "400" }}>Settings</span>
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
