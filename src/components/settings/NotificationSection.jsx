import ToggleSwitch from "../common/ToggleSwitch";

function NotificationSection({ notifications, setNotifications }) {
  return (
    <div className="notification-section">
      <h2>Notifications</h2>
      <ToggleSwitch
        checked={notifications}
        onChange={() => setNotifications((prev) => !prev)}
      />
    </div>
  );
}

export default NotificationSection;