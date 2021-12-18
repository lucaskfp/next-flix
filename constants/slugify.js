import * as slug from "slugify";

const slugify = (str) =>
  slug(str, {
    lower: true,
    remove: /[*?,+~.()'"!:@]/g,
  });

export default slugify;
