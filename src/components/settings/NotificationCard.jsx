import ToggleSwitch from "../common/ToggleSwitch";

function NotificationCard({
  notifications,
  setNotifications,
}) {
  return (
    <div className="settings-card">
      <h2>Notifications</h2>

      <div className="settings-row">

        <span className="settings-label">
          Enable Notifications
        </span>

        <ToggleSwitch
          checked={notifications}
          onChange={() =>
            setNotifications(!notifications)
          }
        />

      </div>
    </div>
  );
}

export default NotificationCard;