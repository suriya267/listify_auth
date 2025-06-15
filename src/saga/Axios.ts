import http from "../api/http";
import { clearAuthToken } from "../utils/localStorage";

export const userAxiosApi = {
  login(payload: any) {
    const route = "/api/login";
    return Method.dataPost(route, payload);
  },
  logout() {
    const route = "/api/logout";
    return Method.dataPostWithoutBody(route);
  },
  getAllUser(payload: number) {
    const route = `/api/users?page=${payload}`;
    return Method.dataGet(route);
  },
  deleteUser(payload: number) {
    const route = `/api/users/${payload}`;
    return Method.dataDelete(route);
  },
  createUser(payload: any) {
    const route = `/api/users`;
    return Method.dataPost(route, payload);
  },
  editUsere(payload: any) {
    const { id, ...rest } = payload;
    const route = `/api/users/${id}`;
    return Method.dataPatch(route, rest);
  },
};

const Method = {
  async dataPost(route: string, body: any) {
    return await new Promise((resolve, reject) => {
      http
        .post(route, body)

        .then((result) => {
          if (result.status === 200) {
            return resolve({
              status: 1,
              result: result,
            });
          } else if (result.status == 212) {
            return resolve({
              status: 4,
              result: result,
            });
          } else {
            if (result) {
              return reject({
                status: 3,
                error: result.data.message,
              });
            } else {
              return reject({
                status: 4,
                error: "Something went wrong.",
              });
            }
          }
        })
        .catch((err) => {
          if (err.response) {
            if (
              err.response.status !== null &&
              err.response.status !== undefined
            ) {
              if (err.response.status == 401) {
                clearAuthToken();
                window.location.href = "/";
              } else {
                return reject({
                  status: 5,
                  error: err,
                });
              }
            }
          } else {
            return reject({
              status: 5,
              error: err,
            });
          }
        });
    });
  },

  async dataPostWithoutBody(route: string) {
    return await new Promise((resolve, reject) => {
      http
        .post(route)

        .then((result) => {
          if (result.status === 200) {
            return resolve({
              status: 1,
              result: result,
            });
          } else if (result.status == 212) {
            return resolve({
              status: 4,
              result: result,
            });
          } else {
            if (result) {
              return reject({
                status: 3,
                error: result.data.message,
              });
            } else {
              return reject({
                status: 4,
                error: "Something went wrong.",
              });
            }
          }
        })
        .catch((err) => {
          if (err.response) {
            console.log("err.response.status", err.response.status);

            if (
              err.response.status !== null &&
              err.response.status !== undefined
            ) {
              if (err.response.status == 401) {
                clearAuthToken();
                window.location.href = "/";
              } else {
                return reject({
                  status: 5,
                  error: err,
                });
              }
            }
          } else {
            return reject({
              status: 5,
              error: err,
            });
          }
        });
    });
  },

  async dataGet(route: any) {
    return await new Promise((resolve, reject) => {
      http
        .get(route)

        .then((result) => {
          if (result.status === 200) {
            return resolve({
              status: 1,
              result: result,
            });
          } else if (result.status == 212) {
            return resolve({
              status: 4,
              result: result,
            });
          } else {
            if (result) {
              return reject({
                status: 3,
                error: result.data.message,
              });
            } else {
              return reject({
                status: 4,
                error: "Something went wrong.",
              });
            }
          }
        })
        .catch((err) => {
          if (err.response) {
            if (
              err.response.status !== null &&
              err.response.status !== undefined
            ) {
              if (err.response.status == 401) {
                clearAuthToken();
                window.location.href = "/";
              } else {
                return reject({
                  status: 5,
                  error: err,
                });
              }
            }
          } else {
            return reject({
              status: 5,
              error: err,
            });
          }
        });
    });
  },

  async dataPatch(route: any, body: any) {
    return await new Promise((resolve, reject) => {
      http
        .patch(route, body)

        .then((result) => {
          if (result.status === 200) {
            return resolve({
              status: 1,
              result: result,
            });
          } else if (result.status == 212) {
            return resolve({
              status: 4,
              result: result,
            });
          } else {
            if (result) {
              return reject({
                status: 3,
                error: result.data.message,
              });
            } else {
              return reject({
                status: 4,
                error: "Something went wrong.",
              });
            }
          }
        })
        .catch((err) => {
          if (err.response) {
            if (
              err.response.status !== null &&
              err.response.status !== undefined
            ) {
              if (err.response.status == 401) {
                clearAuthToken();
                window.location.href = "/";
              } else {
                return reject({
                  status: 5,
                  error: err,
                });
              }
            }
          } else {
            return reject({
              status: 5,
              error: err,
            });
          }
        });
    });
  },

  async dataDelete(route: any) {
    return await new Promise((resolve, reject) => {
      http
        .delete(route)
        .then((result) => {
          if (result.status === 200) {
            return resolve({
              status: 1,
              result: result,
            });
          } else if (result.status == 212) {
            return resolve({
              status: 4,
              result: result,
            });
          } else {
            if (result.data) {
              return reject({
                status: 3,
                error: result.data.message,
              });
            } else {
              return reject({
                status: 4,
                error: "Something went wrong.",
              });
            }
          }
        })
        .catch((err) => {
          if (err.response) {
            if (
              err.response.status !== null &&
              err.response.status !== undefined
            ) {
              if (err.response.status == 401) {
                clearAuthToken();
                window.location.href = "/";
              } else {
                return reject({
                  status: 5,
                  error: err,
                });
              }
            }
          } else {
            return reject({
              status: 5,
              error: err,
            });
          }
        });
    });
  },
};
