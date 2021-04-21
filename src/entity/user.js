class User {

    constructor(userType, userId, jwt, email=null, gtoken=null) {
        this.userType = userType;
        this.userId = userId;
        this.jwt = jwt;
        this.email = email;
        this.gtoken = gtoken;
    }

}

export default User;