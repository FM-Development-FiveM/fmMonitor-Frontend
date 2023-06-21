import { RoutesInfoInterface } from '../interfaces/IRoutesInfo'

const getRoutesInfo: RoutesInfoInterface[] = [
    {
        name: "Welcome",
        description: "This is the default welcome screen when you open fmMonitor. Can be disabled for user preference.",
        path: "/"
    },
    {
        name: "Login",
        description: "This is the login page for fmMonitor",
        path: "/auth/login"
    },
    {
        name: "Setup",
        description: "This is the setup page for fmMonitor when you start the app for the first time.",
        path: "/auth/login"
    },
    {
        name: "Dashboard",
        description: "This is the home page for the dashboard when you log in.",
        path: "/dash/home"
    }
];

const getPageName = (path: string) => {
    var routeInfo = getRoutesInfo.find(route => {
        return route.path === path;
    });

    if (routeInfo) return routeInfo.name;
    
    return "Unknown Page Name";
}

export {getRoutesInfo, getPageName};