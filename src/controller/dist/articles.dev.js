"use strict";

var _require = require('sequelize/types/lib/operators'),
    ne = _require.ne;

var UserModal = require('../db/mysql');
/* 发表文章 */


exports.createArticle = function _callee(ctx, next) {
  var _ctx$request$body, title, content, create_at;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _ctx$request$body = ctx.request.body, title = _ctx$request$body.title, content = _ctx$request$body.content;
          create_at = new Date(); // 发表时间点暂时放在后端

          _context.prev = 2;

          if (!(title !== undefined && content !== undefined)) {
            _context.next = 8;
            break;
          }

          _context.next = 6;
          return regeneratorRuntime.awrap(UserModal.insterArticleData([title, content, create_at]).then(function (result) {
            ctx.body = {
              code: 1,
              message: '发表成功'
            };
          })["catch"](function (err) {
            ctx.body = {
              code: -1,
              message: '发表失败'
            };
          }));

        case 6:
          _context.next = 9;
          break;

        case 8:
          ctx.body = {
            code: -2,
            message: '必传参数不能为空'
          };

        case 9:
          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](2);
          Promise.reject(_context.t0);

        case 14:
          _context.next = 16;
          return regeneratorRuntime.awrap(next());

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 11]]);
};
/* 删除文章 */


exports.deleteArticle = function _callee2(ctx, next) {
  var id;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          id = ctx.request.body.id;
          _context2.prev = 1;

          if (!(id !== undefined)) {
            _context2.next = 7;
            break;
          }

          _context2.next = 5;
          return regeneratorRuntime.awrap(UserModal.deleteArticleById(id).then(function (result) {
            ctx.body = {
              code: 1,
              message: 'ok',
              data: '删除成功!'
            };
          })["catch"](function (err) {
            ctx.body = {
              code: -1,
              message: "\u5220\u9664\u5931\u8D25:".concat(err)
            };
          }));

        case 5:
          _context2.next = 8;
          break;

        case 7:
          ctx.body = {
            code: -2,
            message: 'id不能为空!'
          };

        case 8:
          _context2.next = 13;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](1);
          Promise.reject(_context2.t0);

        case 13:
          _context2.next = 15;
          return regeneratorRuntime.awrap(next());

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 10]]);
};
/* 编辑文章 */


exports.eitdArticle = function _callee3(ctx, next) {
  var _ctx$request$body2, title, content, id, result;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _ctx$request$body2 = ctx.request.body, title = _ctx$request$body2.title, content = _ctx$request$body2.content, id = _ctx$request$body2.id;
          _context3.prev = 1;

          if (!(title !== undefined && content !== undefined && id !== undefined)) {
            _context3.next = 7;
            break;
          }

          _context3.next = 5;
          return regeneratorRuntime.awrap(UserModal.updateArticleById(title, content, id).then(function (ret) {
            ctx.body = {
              code: 1,
              message: 'Ok',
              data: '更新成功!'
            };
          })["catch"](function (err) {
            ctx.body = {
              code: -1,
              message: '更新失败'
            };
          }));

        case 5:
          _context3.next = 9;
          break;

        case 7:
          result = {
            code: -2,
            message: '查询失败，参数不能为空！'
          };
          ctx.body = result;

        case 9:
          _context3.next = 14;
          break;

        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](1);
          Promise.reject(_context3.t0);

        case 14:
          _context3.next = 16;
          return regeneratorRuntime.awrap(next());

        case 16:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 11]]);
};
/**
 * 通过id查找文章
 */


exports.findeArticleData = function _callee4(ctx, next) {
  var id;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = ctx.request.body.id;
          _context4.prev = 1;

          if (!(id !== undefined)) {
            _context4.next = 7;
            break;
          }

          _context4.next = 5;
          return regeneratorRuntime.awrap(UserModal.findArticelById(id).then(function (result) {
            ctx.body = {
              code: 1,
              message: 'Ok',
              data: result[0]
            };
          })["catch"](function (err) {
            ctx.body = {
              code: -1,
              message: "ERROR: ".concat(err)
            };
          }));

        case 5:
          _context4.next = 8;
          break;

        case 7:
          ctx.body = {
            code: -2,
            message: 'id不能为空'
          };

        case 8:
          _context4.next = 13;
          break;

        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](1);
          Promise.reject(_context4.t0);

        case 13:
          _context4.next = 15;
          return regeneratorRuntime.awrap(next());

        case 15:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 10]]);
};
/**
 * 获取所有文章
 */


exports.searchArticle = function _callee5(ctx, next) {
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(UserModal.findArticelAll().then(function (result) {
            ctx.body = {
              code: 1,
              message: 'Ok',
              data: result
            };
          })["catch"](function (err) {
            ctx.body = {
              code: -1,
              message: '获取失败'
            };
          }));

        case 2:
          _context5.next = 4;
          return regeneratorRuntime.awrap(next());

        case 4:
        case "end":
          return _context5.stop();
      }
    }
  });
};
/**
 * 发表评论
 */


exports.createComment = function _callee6(ctx, next) {
  var _ctx$request$body3, content, avatar, username, nowData;

  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _ctx$request$body3 = ctx.request.body, content = _ctx$request$body3.content, avatar = _ctx$request$body3.avatar, username = _ctx$request$body3.username;
          nowData = new Date();
          _context6.prev = 2;

          if (!(content !== undefined && avatar !== undefined && username !== undefined)) {
            _context6.next = 8;
            break;
          }

          _context6.next = 6;
          return regeneratorRuntime.awrap(UserModal.insterCommentData([content, avatar, username, nowData]).then(function (result) {
            ctx.body = {
              code: 1,
              message: '发表成功'
            };
          })["catch"](function (err) {
            ctx.body = {
              code: -1,
              message: "\u53D1\u8868\u5931\u8D25\uFF1A".concat(err)
            };
          }));

        case 6:
          _context6.next = 9;
          break;

        case 8:
          ctx.body = {
            code: -2,
            message: '参数不能为空'
          };

        case 9:
          _context6.next = 14;
          break;

        case 11:
          _context6.prev = 11;
          _context6.t0 = _context6["catch"](2);
          Promise.reject(_context6.t0);

        case 14:
          _context6.next = 16;
          return regeneratorRuntime.awrap(next());

        case 16:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[2, 11]]);
}; // 查看文章评论


exports.getArticleComment = function _callee7(ctx, next) {
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return regeneratorRuntime.awrap(UserModal.findComment().then(function (result) {
            ctx.body = {
              code: 1,
              message: 'Ok',
              data: result
            };
          })["catch"](function (err) {
            ctx.body = {
              code: -1,
              message: "err: ".concat(err)
            };
          }));

        case 2:
          _context7.next = 4;
          return regeneratorRuntime.awrap(next());

        case 4:
        case "end":
          return _context7.stop();
      }
    }
  });
}; // 删除评论


exports.deleteCommentById = function _callee8(ctx, next) {
  var id;
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          id = ctx.request.body.id;
          _context8.prev = 1;

          if (!(id !== undefined)) {
            _context8.next = 7;
            break;
          }

          _context8.next = 5;
          return regeneratorRuntime.awrap(UserModal.deleteCommentById(id).then(function (result) {
            ctx.body = {
              code: 1,
              message: '删除成功'
            };
          })["catch"](function (err) {
            ctx.body = {
              code: -1,
              message: '删除失败'
            };
          }));

        case 5:
          _context8.next = 8;
          break;

        case 7:
          ctx.body = {
            code: -2,
            message: '参数不能为空'
          };

        case 8:
          _context8.next = 13;
          break;

        case 10:
          _context8.prev = 10;
          _context8.t0 = _context8["catch"](1);
          Promise.reject(_context8.t0);

        case 13:
          _context8.next = 15;
          return regeneratorRuntime.awrap(next());

        case 15:
        case "end":
          return _context8.stop();
      }
    }
  }, null, null, [[1, 10]]);
};