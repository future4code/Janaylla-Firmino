export const goToHome = (history) => {
    history.push("/");
  };
  export const goToListTrip = (history) => {
    history.push("/trips/list");
  };
  export const goToApplicationForm = (history) => {
    history.push("/trips/application");
  };
  export const goToLogin = (history) => {
    history.push("/login");
  };
  export const goToAdminHome = (history) => {
    history.push("/admin/trips/list");
  };
   export const goToCreateTrip = (history) => {
    history.push("/admin/trips/create");
  };  
  export const goToTripDetails = (history, id) => {
    history.push(`/admin/trips/${id}`);
  }; 

