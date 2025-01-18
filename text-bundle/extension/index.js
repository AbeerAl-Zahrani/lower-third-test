module.exports = function (nodecg) {
  //for share data between graphic and dashboard
  nodecg.Replicant("textRep", {
    defaultValue: {
      title: "test",
    },
  })
}
