import axios from "axios";

// Creating Backend Config
const Api = axios.create({
  baseURL: process.env.API_URL || "https://api.asian.edu.np", 
  // baseURL: process.env.API_URL || "http://localhost:5000", 
  withCredentials: true, // This ensures that cookies are sent with requests
  headers: {
    "Content-Type": "multipart/form-data", // Default content type for form-data requests
  },
});

// Create configuration with authorization headers
const getConfig = () => ({
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

// Test API
export const testAPI = () => Api.get("/test");

// User APIs
export const registerUserApi = (data) => Api.post("/api/user/create", data);
export const getUserApi = () => Api.get("/api/user/get_all_user");
export const loginUserApi = (data) => Api.post("/api/user/login", data);

// Category APIs
export const getAllCategory = () => Api.get("/api/category/get_all_categories");

export const getTotalSlidersApi = () => Api.get("/api/slider/count");

// Password APIs
export const forgotPasswordApi = (data) =>
  Api.post("/api/user/forgot_password", data);

export const verifyOtp = (data) => Api.post("/api/user/verify_otp", data);

// Contact APIs
export const createContactApi = (data) =>
  Api.post("/api/contact/create", data, getConfig());

export const getContactsApi = () => Api.get("/api/contact/get_all_contacts");

// Book APIs
export const createBookApi = (data) =>
  Api.post("/api/book/create", data, getConfig());

export const getBookApi = () => Api.get("/api/book/get_all_book");

// Event APIs
export const createEventApi = (data) =>
  Api.post("/api/event/create", data, getConfig());
export const getEventApi = () => Api.get("/api/event/get_all_event");

//NewsApi
export const createNewsApi = (data) =>
  Api.post("/api/news/create", data, getConfig());
export const getNewsApi = () => Api.get("/api/news/get_all_news");

//Gallery////
export const createGalleryApi = (data) =>
  Api.post("/api/gallery/create", data, getConfig());
export const getGalleryApi = () => Api.get("/api/gallery/get_all_gallery");

// Slider APIs
export const createSlidersApi = (data) =>
  Api.post("/api/slider/create", data, getConfig());

export const getSlidersApi = () => Api.get("/api/slider/get_all_sliders");

// Form APIs
export const createFormApi = (data) =>
  Api.post("/api/form/create", data, getConfig());

export const getFormApi = () => Api.get("/api/form/get_all_form");
