import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "./firebase";
import { toast } from "react-toastify";
import { doc, getDoc,setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";  // Import navigate for redirection

function SignInwithGoogle() {
  const navigate = useNavigate();  // Hook for navigating between pages

  function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const user = result.user;
        if (user) {
          // Check if the user already exists in the "Users" collection
          const userDocRef = doc(db, "Users", user.uid);
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            // If user exists, redirect to the jobdomain page
            toast.success("Welcome back!", {
              position: "top-center",
            });
            navigate("/jobdomain");
          } else {
            // If user doesn't exist, create new user document in Firestore and redirect to register page
            await setDoc(doc(db, "Users", user.uid), {
              email: user.email,
              firstName: user.displayName,
              photo: user.photoURL,
              lastName: "",  // Default to empty or you can ask the user later
            });
            toast.success("User registered successfully!", {
              position: "top-center",
            });
            navigate("/register");  // Redirect to the registration page
          }
        }
      })
      .catch((error) => {
        toast.error("Error logging in with Google. Please try again later.", {
          position: "top-center",
        });
        console.error(error);
      });
  }

  return (
    <div>
      <div onClick={googleLogin} className="google-login-btn">
        Sign in with Google
      </div>
    </div>
  );
}

export default SignInwithGoogle;
