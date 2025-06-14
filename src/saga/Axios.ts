import http from "../api/http";

export const userAxiosApi = {
  login(payload: any) {
    const route = "/api/login";
    return Method.dataPost(route, payload);
  },
  logout() {
    const route = "/api/logout";
    return Method.dataPostWithoutBody(route);
  },
  getAllUser(payload: any) {
    const route = `/api/users?page=${payload}`;
    return Method.dataGet(route);
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
            console.log("err.response.status", err.response.status);

            if (
              err.response.status !== null &&
              err.response.status !== undefined
            ) {
              if (err.response.status == 401) {
                //   logout();
                //   message.error(ValidationConstants.messageStatus401);
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
                //   logout();
                //   message.error(ValidationConstants.messageStatus401);
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

  async dataPut(newurl: any, body: any) {
    const url = newurl;
    return await new Promise((resolve, reject) => {
      http
        .put(url, body)

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
                //   logout();
                // message.error(ValidationConstants.messageStatus401)
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

  async dataGet(newurl: any) {
    const url = newurl;
    return await new Promise((resolve, reject) => {
      http
        .get(url)

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
                //   logout();
                //   message.error(ValidationConstants.messageStatus401);
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

  async dataPatch(newurl: any, body: any) {
    const url = newurl;
    return await new Promise((resolve, reject) => {
      http
        .patch(url, body)

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
                //   logout();
                //   message.error(ValidationConstants.messageStatus401);
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

  async dataDelete(newurl: any, body: any) {
    const url = newurl;
    return await new Promise((resolve, reject) => {
      http
        .delete(url, {
          data: body,
        })
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
                //   logout();
                //   message.error(ValidationConstants.messageStatus401);
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
