export default function CreateUser(name: string, email: string, password: string) {
    const user = {
        name,
        email,
        password
    };

    return user;
}