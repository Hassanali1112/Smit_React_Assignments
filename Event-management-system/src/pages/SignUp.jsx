import AuthForm from "../components/AuthForm";
import supabase from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const signupImage =
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80";

const SignUp = () => {
 const navigate = useNavigate()

 
  const createUser = async (details) =>{
    
    try {
      const { data, error } = await supabase.auth.signUp({
        email: details.email,
        password: details.password,
      });

      if(error) throw error;
      if(data){
        const { data : newUserData , error : newUserError } = await supabase
          .from("users")
          .insert({ firstName : details.firstName, lastName : details.lastName, email : details.email })
          .select();
          if(newUserData){
            console.log(newUserData); 
            toast.success("Check your email to verify your account");
            setTimeout(() => {
              navigate("/login");
            }, 2000);
          } else{
            console.log(newUserError)
            console.error("Submit error:", newUserError);
            toast.error("Something went wrong. Try again.");
          }
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleAuthSubmit = (data) => {
    // console.log("Submitted data:", data);
    createUser(data)
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-50 to-indigo-100 p-4">
      <div className="w-full max-w-6xl border bg-white rounded-xl overflow-hidden shadow-lg grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-center justify-center p-6 bg-indigo-100">
          <img
            src={signupImage}
            alt="Sign Up Visual"
            className="w-full h-auto object-cover rounded-md max-h-[400px] md:max-h-full"
          />
        </div>
        <div className="flex items-center justify-center p-6">
          <AuthForm type="signup" onSubmit={handleAuthSubmit} />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
