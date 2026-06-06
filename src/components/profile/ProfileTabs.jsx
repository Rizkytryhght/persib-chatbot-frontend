const tabs = [
  {
    id: "details",
    label: "Profile Details",
  },
  {
    id: "preferences",
    label: "Preferences",
  },
  {
    id: "usage",
    label: "Usage",
  },
  {
    id: "billing",
    label: "Plan & Billing",
  },
  {
    id: "team",
    label: "Team",
  },
  {
    id: "integrations",
    label: "Integrations",
  },
  {
    id: "api",
    label: "API Dashboard",
  },
];

function ProfileTabs({
  activeTab,
  setActiveTab,
}) {
  return (
    <div className="profile-tabs">

      {tabs.map((tab) => (

        <button
          key={tab.id}
          className={
            activeTab === tab.id
              ? "tab active"
              : "tab"
          }
          onClick={() =>
            setActiveTab(tab.id)
          }
        >
          {tab.label}
        </button>

      ))}

    </div>
  );
}

export default ProfileTabs;