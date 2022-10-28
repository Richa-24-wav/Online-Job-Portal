import "./style.css";

const ListLayout = ({ children, sidebar, topContent }) => (
    <div className="layout container">
        <div className="listLayout-MainContent">
            {topContent}
            {children}
        </div>
        <div className="listLayout-SideBar">
            {sidebar}
        </div>
    </div>
);

export default ListLayout;
