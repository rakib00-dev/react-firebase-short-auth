import LoginPage from './components/LoginPage';
import { firebaseConfig } from './firebase/firebase';

function App() {
  return (
    <div className="grid place-items-center ">
      <LoginPage />
    </div>
  );
}

export default App;
