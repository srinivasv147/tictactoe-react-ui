import LoginDTO from './LoginDTO';

class CreateUserDTO {

    constructor(userId, email, token){
        this.userId = userId;
        this.loginDTO = new LoginDTO(email, token);
    }

}

export default CreateUserDTO;