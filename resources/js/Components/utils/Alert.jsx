import { useEffect } from "react";
import Swal from "sweetalert2";

export default function Alert({ type = "success", title, message }) {
  useEffect(() => {
    Swal.fire({
      title: title || getDefaultTitle(type),
      text: message || getDefaultMessage(type),
      icon: type,
      confirmButtonText: "OK",
      confirmButtonColor: getButtonColor(type),
    });
  }, [type, title, message]);

  return null;
}

function getDefaultTitle(type) {
  switch (type) {
    case "success":
      return "Success!";
    case "error":
      return "Error!";
    case "warning":
      return "Warning!";
    case "info":
      return "Info!";
    default:
      return "Notice";
  }
}

function getDefaultMessage(type) {
  switch (type) {
    case "success":
      return "Your action was completed successfully.";
    case "error":
      return "Something went wrong. Please try again.";
    case "warning":
      return "Please check before continuing.";
    case "info":
      return "Here’s some information.";
    default:
      return "";
  }
}

function getButtonColor(type) {
  switch (type) {
    case "success":
      return "#28a745"; // green
    case "error":
      return "#dc3545"; // red
    case "warning":
      return "#ffc107"; // yellow
    case "info":
      return "#17a2b8"; // blue
    default:
      return "#3085d6"; // default blue
  }
}
