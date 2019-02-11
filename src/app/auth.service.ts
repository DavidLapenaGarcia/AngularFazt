/*
This class is a basic authenticate service.
*/
export class AuthService {
    loggedIn = false;

/*
This method returns the loggedIn value at past 800 ms.
*/
    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout( () => {
                    resolve(this.loggedIn);
                }, 800);
            }
        );
        return promise;
    }

    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }
}
