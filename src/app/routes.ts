import { RoutesInfoInterface } from '../interfaces/IRoutesInfo'

var getRoutesInfo: RoutesInfoInterface[] = [
    {
        serverId: null,
        type: "main",
        name: "Welcome",
        description: "This is the default welcome screen when you open fmMonitor. Can be disabled for user preference.",
        path: "/"
    },
    {
        serverId: null,
        type: "main",
        name: "Login",
        description: "This is the login page for fmMonitor",
        path: "/auth/login"
    },
    {
        serverId: null,
        type: "main",
        name: "Setup",
        description: "This is the setup page for fmMonitor when you start the app for the first time.",
        path: "/auth/login"
    },
    {
        serverId: null,
        type: "main",
        name: "Dashboard",
        description: "This is the home page for the dashboard when you log in.",
        path: "/dash/home"
    }
];

const isRouteAServerPage = (path: string) => {
    var routeInfo = getRoutesInfo.find(route => {
        return route.path === path;
    });

    if (routeInfo?.type === "server") return true;

    return false;
}

const isRouteAMainPage = (path: string) => {
    var routeInfo = getRoutesInfo.find(route => {
        return route.path === path;
    });

    if (routeInfo?.type === "main") return true;

    return false;
}

const isValidServerRoute = (serverId: number) => {
    var routeInfo = getRoutesInfo.find(route => {
        return route.serverId === serverId;
    });

    if (routeInfo) return true;

    return false;
}

const getPageName = (path: string) => {
    var routeInfo = getRoutesInfo.find(route => {
        return route.path === path;
    });

    if (routeInfo) return routeInfo.name;
    
    return "Unknown Page Name";
}

const getServerRoutesInfo = () => {
    var routeInfo = getRoutesInfo.filter(route => {
        return route.type === "server";
    });

    return routeInfo;
}

const appendServerRoutes = (serverRoutes: RoutesInfoInterface[]) => {
    getRoutesInfo = getRoutesInfo.concat(serverRoutes);
}

export { getRoutesInfo, getPageName, appendServerRoutes, isRouteAServerPage, isRouteAMainPage, isValidServerRoute, getServerRoutesInfo };