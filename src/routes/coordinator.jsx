// HomePage []

export const goToListTripsPage = (navigate) => {
    navigate("/ListTripsPage")
  }

export const goToLoginPage = (navigate) => {
    navigate("/LoginPage")
  }

// AdminHomePage 

export const goToTripDetailsPage = (navigate) => {
    navigate("/TripDetailsPage")
  }

// LoginPage []

export const goToEntra = (navigate) => {
    navigate("/AdminHomePage")
  }

export const goToCreateTripPage= (navigate) => {
    navigate("/CreateTripPage")
  }
 
// ListTripsPage 

export const goToApplicationFormPage = (navigate) => {
    navigate("/ApplicationFormPage")
  }

// Paginas que tem voltar e ir para home 

// ApplicationFormPage // CreateTripPage // ErroPage 
// ListTripsPage // LoginPage// TripDetailsPage

export const goToHomePage = (navigate) => {
      navigate("/")
    }
  
export const goToVoltar = (navigate) => {
      navigate(-1)
    }





