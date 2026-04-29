import { FaBell } from "react-icons/fa";
import { useSelector } from "react-redux";

function NotificationBell() {
  const { list } = useSelector(
    (state) => state.notification
  );

  return (
    <div className="relative cursor-pointer">
      <FaBell size={20} />

      {list.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
          {list.length}
        </span>
      )}
    </div>
  );
}

export default NotificationBell;