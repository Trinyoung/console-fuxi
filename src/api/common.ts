import { LoginParams } from "@/types/user";
import request from "./request";

export const login = (params: LoginParams) =>
  request({
    url: `/api/user/login`,
    method: "post",
    data: params,
  });

export const register = () =>
  request({
    url: `/api/user/register`,
    method: "post",
  });

export const logout = () =>
  request({
    url: `/api/user/logout`,
    method: "post",
  });

export const getMenuList = () =>
  request({
    url: `/api/menu/list`,
    method: "post",
  });
