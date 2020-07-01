const validateEmail = (email) => {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const toQuery = (req, body) => {
  return {
    params: { ...body }
  };
};

module.exports = {
  validateEmail,
  toQuery
};
