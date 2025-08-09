App
 ├── NavBar
 │     ├─ Links: Home, Companies, Jobs, Profile (if logged in)
 │     ├─ Login / Signup (if not logged in)
 │     └─ Logout + Username (if logged in)
 ├── Alert (global notifications / error messages)
 ├── Routes
 │     ├─ Homepage              — simple welcome (message depends on login status)
 │     ├─ LoginForm             — local state for inputs; uses App.login()
 │     ├─ SignupForm            — similar to LoginForm; calls App.signup()
 │     ├─ CompanyList           — manages companies state + searchTerm
 │     │     ├─ SearchForm      — input for querying companies
 │     │     └─ CompanyCard*    — displays handle, name, description, logo
 │     ├─ CompanyDetail         — fetches data via JoblyApi.getCompany(handle)
 │     │     ├─ CompanyHeader   — static company info (name, description, etc.)
 │     │     └─ JobCard*        — list of jobs; toggles “Apply” if user applied
 │     ├─ JobList               — similar structure to CompanyList
 │     │     ├─ SearchForm
 │     │     └─ JobCard*
 │     └─ ProfileForm           — local form inputs; submits to update profile
 └── LoadingSpinner (used during API fetches)

(* JobCard is a reusable component across JobList and CompanyDetail routes.)