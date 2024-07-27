
//let apiUrl = 'http://localhost:8000/'
//let apiUrl = import.meta.env.VITE_API_URL;
let apiUrl = "https://homeessentials-back-dev-propia.onrender.com"

 if (process.env.NODE_ENV === "production") {
    apiUrl = import.meta.env.VITE_API
} 

export default apiUrl