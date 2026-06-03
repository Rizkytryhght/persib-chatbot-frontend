import ToggleSwitch from "../common/ToggleSwitch";

function NotificationSection({
  notifications,
  setNotifications,
}) {
  return (
    <div>
      <h2>Notifications</h2>

      <ToggleSwitch
        checked={notifications}
        onChange={() =>
          setNotifications(!notifications)
        }
      />
    </div>
  );
}

export default NotificationSection;