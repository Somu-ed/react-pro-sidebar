import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

const SidebarTest = () => (
  <div style={{ display: "flex", height: "100%", minHeight: "400px" }}>
    <Sidebar>
      <Menu>
        <MenuItem> Documentation</MenuItem>
        <MenuItem> Calendar</MenuItem>
        <MenuItem> E-commerce</MenuItem>
        <MenuItem> Examples</MenuItem>
      </Menu>
    </Sidebar>
    <main style={{ padding: 10 }}> Main content</main>
  </div>
);

export default SidebarTest;
