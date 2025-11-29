import { AuthContext } from "./AuthContext";

const AuthProvider = ({children}) => {

    const userInfo = {
        name: "rayhan"
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;