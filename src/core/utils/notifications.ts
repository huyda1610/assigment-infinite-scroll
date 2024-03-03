import { notification } from "antd";
import { AxiosError } from "axios";

const showNotificationError = (error: AxiosError) => {
  return notification.error({
    message: "Có lỗi xảy ra",
    description:
      error?.message ?? "Lỗi trong quá trình xử lý, vui lòng thử lại!",
    placement: "bottomRight",
  });
};

export { showNotificationError };
