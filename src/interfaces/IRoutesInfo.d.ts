export interface RoutesInfoInterface {
    /** The server id. null for non server page */
    serverId: number?;

    /** The page type for the route */
    type: string;

    /** The page name for the route */
    name: string;

    /** DThe description of the route */
    description: string;

    /** The path for the route */
    path: string;
}