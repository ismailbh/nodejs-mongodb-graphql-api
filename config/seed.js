var request = require("request-promise");
var compteModel = require("../models/compte");
var userModel = require("../models/user");
var uuid = require("uuid/V4");

const seed = () => {
  compteModel.findAsync((err, data) => {
    if (data.length < 1) {
      compteModel.removeAsync().then(() => {
        request("https://randomuser.me/api/?results=4518")
          .then(res => JSON.parse(res))
          .then(res => {
            const data = res.results.map(r => {
              const obj = {};
              obj.gender = r.gender;
              obj.name = {
                title: r.name.title,
                first: r.name.first,
                last: r.name.last
              };
              obj.location = {
                street: r.location.street,
                city: r.location.city,
                state: r.location.state,
                postcode: r.location.postcode
              };
              obj.login = {
                username: r.login.username,
                password: r.login.password,
                salt: r.login.salt,
                md5: r.login.md5,
                sha1: r.login.sha1,
                sha256: r.login.sha256
              };
              obj.email = r.email;
              obj.dob = r.dob;
              obj.registered = r.registered;
              obj.phone = r.phone;
              obj.cell = r.cell;
              obj.picture = {
                large: r.picture.large,
                medium: r.picture.medium,
                thumbnail: r.picture.thumbnail
              };
              obj.nat = r.nat;
              return obj;
            });
            data.forEach(d => {
              const compteMdl = new compteModel(d);
              compteMdl.save((err, item) => {
                console.log("saved:", item);
              });
            });
          })
          .catch(err => {
            console.log("err:", err);
          });
      });
    }
  });
  userModel.findAsync((err, data) => {
    if (data.length < 1) {
      userModel.removeAsync().then(() => {
        userModel
          .createAsync(
            {
              uuid: uuid(),
              name: "Admin",
              email: "admin@codenx.com"
            },
            {
              uuid: uuid(),
              name: "Test User",
              email: "user@codenx.com"
            }
          )
          .then(() => {
            console.log("Finished populating users");
          });
      });
    }
  });
};

module.exports = seed;
