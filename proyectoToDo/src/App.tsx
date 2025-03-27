import { Sidebar } from "./components/screens/Sidebar/Sidebar";
import { Sprint } from "./components/screens/Sprint/Sprint";
import { Backlog } from "./components/screens/Backlog/Backlog";
import styles from "./App.module.css";
import { Modal } from "./components/UI/Modal/Modal";

function App() {
  return (
    <div className={styles.containerApp}>
      <Sidebar />
      <Sprint />
      {/* <Backlog /> */}
      {/* <Modal /> */}
    </div>
  );
}

export default App;
