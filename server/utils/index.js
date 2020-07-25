const validateEmail = (email) => {
  var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return reg.test(email);
};

const toQuery = (body) => {
  return {
    params: { ...body }
  };
};

module.exports = {
  validateEmail,
  toQuery
};
