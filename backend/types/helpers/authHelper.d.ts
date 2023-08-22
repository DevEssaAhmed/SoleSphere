export declare const hashPassword: (password: string) => Promise<string | undefined>;
export declare const comparePassword: (password: string, hashedPassword: string) => Promise<boolean>;
