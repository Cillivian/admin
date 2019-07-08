// app/controller/users.js
'use strict';

const Controller = require('egg').Controller;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class UserController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = { limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) };
    ctx.body = await ctx.model.User.findAll(query);
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.User.findByPk(toInt(ctx.params.id));
  }

  async create() {
    const ctx = this.ctx;
    const { name, age } = ctx.request.body;
    const user = await ctx.model.User.create({ name, age });
    ctx.status = 201;
    ctx.body = user;
  }

  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      ctx.status = 404;
      return;
    }

    const { name, age } = ctx.request.body;
    await user.update({ name, age });
    ctx.body = user;
  }

  async destroy() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      ctx.status = 404;
      return;
    }

<<<<<<< HEAD
    async update() {
        const ctx = this.ctx;
        const id = toInt(ctx.params.id);
        const user = await ctx.model.User.findByPk(id);
        if (!user) {
            ctx.status = 404;
            return;
        }

        const { name, age } = ctx.request.body;
        await user.update({ name, age });
        ctx.body = user;
    }

    async destroy() {
        const ctx = this.ctx;
        const id = toInt(ctx.params.id);
        const user = await ctx.model.User.findByPk(id);
        if (!user) {
            ctx.status = 404;
            return;
        }

        await user.destroy();
        ctx.status = 200;
    }

    async checkById() {
        const ctx = this.ctx;
        const id = ctx.params.id;
        const password = ctx.params.password;
        const user = await ctx.model.User.findByPk(id);
        if (!user) {
            ctx.status = 404;
            ctx.message = "用户不存在";
            ctx.body = "null";
            return
        } else if (user.password != password) {
            ctx.status = 200;
            ctx.message = "密码错误";
            ctx.body = "password error";
        } else {
            ctx.status = 200;
            ctx.message = "登陆成功";
            ctx.body = user;
        }

    }
=======
    await user.destroy();
    ctx.status = 200;
  }
>>>>>>> 5ced66e736976f7c73a463bcdaecbda3c47dad91
}

module.exports = UserController;
