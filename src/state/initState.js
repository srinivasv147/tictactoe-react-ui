import User from '../entity/user';

const InitState = {
    user : new User('GUEST_USER', null, null),
    game : [0,0,0,0,0,0,0,0,0]
}

export default InitState;