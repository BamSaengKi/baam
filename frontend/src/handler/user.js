import UserApi from '../api/user';

const SUCCES = 200;
const FAIL = 500;
const user = {
  create: async ({ userName, userDesc, userId, userPw }) => {
    try {
      console.log(UserApi);
      console.log({ userName, userDesc, userId, userPw });
      let apiResult = await UserApi.create({
        user_nm: userName,
        user_desc: userDesc,
        user_login_id: userId,
        user_login_pw: userPw,
      });
      const { status } = apiResult;
      if (status === SUCCES) {
        return true;
      }
    } catch (error) {
      console.log(error);
      console.log('회원가입 실패');
      return false;
    }
  },
};

export default user;
