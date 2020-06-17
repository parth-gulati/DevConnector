const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : "";
  data.status = !isEmpty(data.status) ? data.status : "";
  data.skills = !isEmpty(data.skills) ? data.skills : "";

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = "Handle needs to be between 2 and 4 characters";
  }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = "Profile handle is required";
  }

  if (Validator.isEmpty(data.status)) {
    errors.status = "Status field is required";
  }

  if (Validator.isEmpty(data.skills)) {
    errors.skills = "Skills field is required";
  }

  if (!isEmpty(data.website)) {
    if (
      !Validator.isURL(data.website, {
        protocols: ["http"],
        require_protocol: true,
      })
    ) {
      errors.website =
        'Not a valid URL (All URL\'s must have a prefix of "http://")';
    }
  }

  if (!isEmpty(data.youtube)) {
    if (
      !Validator.isURL(data.youtube, {
        protocols: ["http"],
        require_protocol: true,
      })
    ) {
      errors.youtube =
        'Not a valid URL (All URL\'s must have a prefix of "http://")';
    }
  }

  if (!isEmpty(data.facebook)) {
    if (
      !Validator.isURL(data.facebook, {
        protocols: ["http"],
        require_protocol: true,
      })
    ) {
      errors.facebook =
        'Not a valid URL (All URL\'s must have a prefix of "http://")';
    }
  }

  if (!isEmpty(data.twitter)) {
    if (
      !Validator.isURL(data.twitter, {
        protocols: ["http"],
        require_protocol: true,
      })
    ) {
      errors.twitter =
        'Not a valid URL (All URL\'s must have a prefix of "https://")';
    }
  }

  if (!isEmpty(data.instagram)) {
    if (
      !Validator.isURL(data.instagram, {
        protocols: ["http"],
        require_protocol: true,
      })
    ) {
      errors.instagram =
        'Not a valid URL (All URL\'s must have a prefix of "https://")';
    }
  }

  if (!isEmpty(data.linkedin)) {
    if (
      !Validator.isURL(data.linkedin, {
        protocols: ["http"],
        require_protocol: true,
      })
    ) {
      errors.linkedin =
        'Not a valid URL (All URL\'s must have a prefix of "http://")';
    }
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
