import { notification } from "antd";

const notifyError = (message, description) => {
  notification.error({
    message,
    description,
  });
};

const notifyWarning = (message, description) => {
  notification.warning({
    message,
    description,
  });
};

const notifySuccess = (message, description) => {
  notification.success({
    message,
    description,
  });
};

export { notifyError, notifyWarning, notifySuccess };
