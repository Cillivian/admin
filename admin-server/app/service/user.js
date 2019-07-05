// app/service/user.js
const Service = require('egg').Service;

class UserService extends Service {
    async findById(id) {
            const user = await this.ctx.db.query('select * from users where id = ?', id);
            return user;
        }
        // async findByUserName(username){
        //     const user=await this.ctx.db.query('select')
        // }

}

module.exports = UserService;