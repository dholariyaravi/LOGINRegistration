import { Navigate } from "react-router-dom";
export default function RequireAuth({ children }) {
    const currentUser = localStorage.getItem("user11");

    return currentUser ? children : <Navigate to="/"replace/>;
}


// Authdheti castion mate dami user login nathava joye te mate