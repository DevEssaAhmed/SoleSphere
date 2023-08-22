interface User {
    name: string;
    email: string;
    password: string;
    isAdmin?: boolean;
}
declare const users: User[];
export default users;
