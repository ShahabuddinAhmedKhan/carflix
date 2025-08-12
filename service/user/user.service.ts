import { CookieHelper } from "../../helper/cookie.helper";
import { Fetch } from "../../lib/Fetch";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const UserService = {
  login: async (formdata) => {
    const data = {
      email: formdata.email,
      password: formdata.password,
    };
    return await Fetch.post("/auth/login", data, config);
  },

  register: async ({
    username,
    email,
    password,
  }: {
    username: string;
    email: string;
    password: string;
  }) => {
    const data = {
      username: username,
      email: email,
      password: password,
    };
    return await Fetch.post("/auth/register", data, config);
  },

  logout: (context = null) => {
    CookieHelper.destroy({ key: "token", context });
  },
  // get user details
  getUserDetails: async ({ token = "", context = null }) => {
    // const userToken = CookieHelper.get({ key: "token", context });
    const userToken = token;

    const _config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + userToken,
      },
    };

    return await Fetch.get(`/auth/me`, _config);
  },

  findAll: async (endpoint,context = null) => {
    const userToken = CookieHelper.get({ key: "token", context });

    const _config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + userToken,
      },
    };

    return await Fetch.get(endpoint, _config);
  },

  findOne: async (id, context = null) => {
    const userToken = CookieHelper.get({ key: "token", context });

    const _config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + userToken,
      },
    };

    return await Fetch.get(`/admin/blog/${id}`, _config);
  },

  findOneByUsername: async ({
    username,
    token = "",
    context = null,
  }: {
    username: string;
    token?: string;
    context?: any;
  }) => {
    // const userToken = CookieHelper.get({ key: "token", context });
    const userToken = token || CookieHelper.get({ key: "token", context });

    const _config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + userToken,
      },
    };

    return await Fetch.get(`/user/profile/${username}`, _config);
  },

  update: async (
    updatedContent, endPoint,
    context = null
  ) => {
    const userToken = CookieHelper.get({ key: "token", context });

    const _config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + userToken,
      },
    };

    const data = updatedContent;

    return await Fetch.patch(endPoint, data, _config);
  },

  updateAvatar: async (data: any, context = null) => {
    const userToken = CookieHelper.get({ key: "token", context });

    const _config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + userToken,
        "content-type": "multipart/form-data",
      },
    };

    return await Fetch.patch(`/user/avatar`, data, _config);
  },

  //
  create: async (
   createPost,endpoint,
    context: any = null
  ) => {
    console.log(createPost);
    
    const userToken = CookieHelper.get({ key: "token", context });

    const _config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + userToken,
      },
    };
    const data = createPost;

    return await Fetch.post(`${endpoint}`, data, _config);
  },

  // TODO
  confirm: async (
    {
      id,
      token,
      email,
      password,
    }: { id: number; token: string; email: string; password: string },
    context: any = null
  ) => {
    const userToken = CookieHelper.get({ key: "token", context });

    const _config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + userToken,
      },
    };

    const data = {
      id: id,
      token: token,
      email: email,
      password: password,
    };

    return await Fetch.patch(`/user/${id}/password`, data, _config);
  },
  
  delete: async (endPoint, context: any = null) => {
    const userToken = CookieHelper.get({ key: "token", context });

    const _config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + userToken,
      },
    };

    // Immediately return the result of the DELETE request
    return await Fetch.delete(endPoint, _config); // This will return the response from the server
  },
};
