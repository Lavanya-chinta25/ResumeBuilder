import React, { useState, useEffect } from "react";
import { auth, db } from "./firebase";
import { setDoc, getDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate(); 
  const handleRedirect = () => {
    navigate("/jobdomain");
  };
  
  const [userDetails, setUserDetails] = useState(null);
  const [userExist, setUserExist] = useState(false);

  // Fields for form data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [course, setCourse] = useState("");
  const [branch, setBranch] = useState("");
  const [passOutYear, setPassOutYear] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [gender, setGender] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [preferredCountries, setPreferredCountries] = useState([]);
  const [preferredStates, setPreferredStates] = useState("");
  const [preferredCities, setPreferredCities] = useState("");
  const [dob, setDob] = useState("");

  const [errors, setErrors] = useState({});

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
          setEmail(docSnap.data().email);
          setFirstName(docSnap.data().firstName || "");
          setUserExist(true);
        } else {
          console.log("User is not logged in");
        }
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  // Validation function
  const validateForm = () => {
    const validationErrors = {};
    if (!firstName) validationErrors.firstName = "First Name is required";
    if (!lastName) validationErrors.lastName = "Last Name is required";
    if (!email) validationErrors.email = "Email is required";
    if (!password) validationErrors.password = "Password is required";
    if (!course) validationErrors.course = "Course is required";
    if (!branch) validationErrors.branch = "Branch is required";
    if (!passOutYear) validationErrors.passOutYear = "Pass-out Year is required";
    if (!cgpa) validationErrors.cgpa = "CGPA/Percentage is required";
    if (!gender) validationErrors.gender = "Gender is required";
    if (!dob) validationErrors.dob = "Date of Birth is required";
    
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    
    // If form validation fails, return
    if (!validateForm()) return;

    try {
      if (!userExist) {
        await createUserWithEmailAndPassword(auth, email, password);
      }

      const user = auth.currentUser;
      if (user) {
        // Create or update the user document in Firestore
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: firstName || userDetails?.firstName || "",
          lastName: lastName,
          photo: userDetails?.photo || "",
          course,
          branch,
          passOutYear,
          cgpa,
          gender,
          github,
          linkedin,
          preferredCountries,
          preferredStates,
          preferredCities,
          dob,
        });

        toast.success("Profile Updated Successfully!", {
          position: "top-center",
        });
        navigate("/jobdomain");
      }
    } catch (error) {
      console.error(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstName": setFirstName(value); break;
      case "lastName": setLastName(value); break;
      case "course": setCourse(value); break;
      case "branch": setBranch(value); break;
      case "passOutYear": setPassOutYear(value); break;
      case "cgpa": setCgpa(value); break;
      case "gender": setGender(value); break;
      case "github": setGithub(value); break;
      case "linkedin": setLinkedin(value); break;
      case "preferredStates": setPreferredStates(value); break;
      case "preferredCities": setPreferredCities(value); break;
      case "dob": setDob(value); break;
      case "preferredCountries":
        setPreferredCountries(value.split(","));
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full">
        <div className="text-center mb-6">
          <img src="/logo.png" alt="Logo" className="mx-auto mb-2" />
          <h1 className="text-xl font-semibold">Complete Your Profile</h1>
          <p className="text-gray-600">Please fill in your details to continue</p>
        </div>
        <form onSubmit={handleRegister}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm ${errors.firstName ? "border-red-500" : ""}`}
                value={firstName}
                onChange={handleChange}
                name="firstName"
              />
              {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm ${errors.lastName ? "border-red-500" : ""}`}
                value={lastName}
                onChange={handleChange}
                name="lastName"
              />
              {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
            </div>

            {/* Course */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Course</label>
              <select
                className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm ${errors.course ? "border-red-500" : ""}`}
                value={course}
                onChange={handleChange}
                name="course"
              >
                <option value="">Select Course</option>
                <option>Bachelor of Science</option>
                <option>Master of Science</option>
              </select>
              {errors.course && <p className="text-red-500 text-xs">{errors.course}</p>}
            </div>

            {/* Branch */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Branch/Stream</label>
              <select
                className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm ${errors.branch ? "border-red-500" : ""}`}
                value={branch}
                onChange={handleChange}
                name="branch"
              >
                <option value="">Select Branch/Stream</option>
                <option>Computer Science</option>
                <option>Mechanical Engineering</option>
              </select>
              {errors.branch && <p className="text-red-500 text-xs">{errors.branch}</p>}
            </div>

            {/* Other fields with validation */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Pass-out Year</label>
              <input
                type="number"
                className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm ${errors.passOutYear ? "border-red-500" : ""}`}
                value={passOutYear}
                onChange={handleChange}
                name="passOutYear"
              />
              {errors.passOutYear && <p className="text-red-500 text-xs">{errors.passOutYear}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">CGPA/Percentage</label>
              <input
                type="text"
                className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm ${errors.cgpa ? "border-red-500" : ""}`}
                value={cgpa}
                onChange={handleChange}
                name="cgpa"
              />
              {errors.cgpa && <p className="text-red-500 text-xs">{errors.cgpa}</p>}
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Gender</label>
              <div className="flex space-x-4 mt-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={gender === "Male"}
                    onChange={handleChange}
                    className="text-blue-600"
                  />
                  <span>Male</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={gender === "Female"}
                    onChange={handleChange}
                    className="text-blue-600"
                  />
                  <span>Female</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="gender"
                    value="Other"
                    checked={gender === "Other"}
                    onChange={handleChange}
                    className="text-blue-600"
                  />
                  <span>Other</span>
                </label>
              </div>
              {errors.gender && <p className="text-red-500 text-xs">{errors.gender}</p>}
            </div>

            {/* Other Inputs (GitHub, LinkedIn, etc.) */}
            <div>
              <label className="block text-sm font-medium text-gray-700">GitHub Profile</label>
              <input
                type="url"
                placeholder="https://github.com/username"
                value={github}
                onChange={handleChange}
                name="github"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">LinkedIn Profile</label>
              <input
                type="url"
                placeholder="https://linkedin.com/in/username"
                value={linkedin}
                onChange={handleChange}
                name="linkedin"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              />
            </div>

            {/* Preferred Locations */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Preferred Countries</label>
              <input
                type="text"
                placeholder="Enter countries separated by commas"
                value={preferredCountries.join(",")}
                onChange={handleChange}
                name="preferredCountries"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Preferred States</label>
              <input
                type="text"
                value={preferredStates}
                onChange={handleChange}
                name="preferredStates"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Preferred Cities</label>
              <input
                type="text"
                value={preferredCities}
                onChange={handleChange}
                name="preferredCities"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              />
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
              <input
                type="date"
                value={dob}
                onChange={handleChange}
                name="dob"
                className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm ${errors.dob ? "border-red-500" : ""}`}
              />
              {errors.dob && <p className="text-red-500 text-xs">{errors.dob}</p>}
            </div>

            {/* Submit */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit Details
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
