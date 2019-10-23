// This is the login page logic for everyone. 
// Takes in 3 parameters and checks using the login logic below
// Checks the user category for whether admin or staff
// Then checks the username and password and if match redirects to respective pages
// The user details is inherited from here into the sessionstorage
// Declared variables are userCategory (admin || staff), username and password
// Works to prevent default for submitbtn too.
// Checks first if email is an actual email, then if space not empty and if contains company domain
