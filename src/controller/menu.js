
exports.list = async (ctx, next) => {
  const retJson = [
    { user: "Name1", id: 11 , path: '/user'},
    { user: "Name2", id: 22 },
    { user: "Name3", id: 33 },
  ];

  ctx.body = {
    code: 200,
    data: retJson,
  };

  await next();
};
