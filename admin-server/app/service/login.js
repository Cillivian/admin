'use strict';

const Service = require('egg').Service;

class LoginService extends Service {
    async login(body) {
        const ctx = this.ctx;
        try {
            const user = await ctx.model.User.findAll({
                where: {
                    user_name: body.user_name,
                },
            });
            if (!user) {
                ctx.status = 400;
                return {
                    ok: false,
                    msg: '用户名不存在',
                };
            }
            if (body.password === user[0].password) {
                ctx.status = 200;
                return {
                    ok: true,
                    msg: '账号密码正确',
                    data: {
                        id: user[0].id,
                        user_name: user[0].user_name,
                    },
                };
            }
            ctx.status = 200;
            return {
                ok: false,
                msg: '账号密码错误',
            };
        } catch (err) {
            ctx.status = 500;
            throw err;
        }
    }
    async logout() {
        const ctx = this.ctx;
        try {
            ctx.status = 200;
            return {
                ok: true,
                msg: '退出成功',
            };
        } catch (err) {
            ctx.status = 500;
            throw err;
        }
    }
}

module.exports = LoginService;