import ProfilePanel from './components/ProfilePanel';
import FigurineScene from './components/FigurineScene';

const bgUrl = `${import.meta.env.BASE_URL}背景.png`;

export default function App() {
  return (
    <div
      className="app-wrapper"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <div className="app">
        <ProfilePanel />
        <FigurineScene />
      </div>
    </div>
  );
}
