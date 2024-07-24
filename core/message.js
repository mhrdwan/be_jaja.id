const suksesMessage = (message) => {
  const defaultMessage = "Sukses Mendapatkan data";
  return {
    message: message || defaultMessage,
    code: 200,
  };
};


const errorMessage = (message) => {
  const defaultMessage = "Sukses Mendapatkan data";
  return {
    message:  message || defaultMessage,
    code: 400,
  };
};

module.exports = { suksesMessage, errorMessage };
