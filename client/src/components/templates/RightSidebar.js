import RightSidebarA from '../organism/RightSidebarA';
import RightSidebarTittleBox from '../atoms/RightSidebarTittleBox';
import RightSidebarBox from '../molecules/RightSidebarBox';

const RightSidebar = () => {
  return (
    <div className="RightSideBar">
      <RightSidebarA />
      <RightSidebarTittleBox />
      <RightSidebarBox />
    </div>
  );
};

export default RightSidebar;
