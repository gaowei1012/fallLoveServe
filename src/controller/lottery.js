
// 个签
exports.list = async (ctx, next) => {
    Array.prototype.random = function() {
        let idx = Math.floor((Math.random) * this.length)
        let n = this.splice(idx, 1)[0]

        return n
    }
    let list = ['风虽大，都绕过我灵魂', '散场是难免的，尽兴而归就好', '你和冬天接踵而来', '事事常不能与之共情，三观不同皆如夏虫语冰', '情书寄给山鬼，心事寄予西风，可惜山鬼不懂字，西风往东吹', '要大笑，要做梦，要与众不同', '过去都是假的，回忆是一条没有归途的路', '表面孤独的人不是真的孤独，内心强大的人，才是真的孤独', '讲个笑话，你可别哭']
    let ret = {
        lottery: list.random()
    }
    ctx.body = {
        code: 1,
        message: 'OK',
        data: [ret]
    }

    await next()
}
