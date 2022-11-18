import { Card } from '../../../../components/Card/index.jsx';
import './styles.css';
import { Avatar } from '../../../../components/Avatar';

export const InfoCard = () => {
  return (
    <Card className="info-card" type="rounded">
      <div className="info-card__container">
        <div className="info-card__top-actions">
          <button className="text-purple-600">Go</button>
        </div>
        <div className="info-card__body">
          <div className="team-container">
            <Avatar size="medium" type="rounded">
              <img src="/favicon.ico" alt="" />
            </Avatar>
            <p className="mt-2">Team 1</p>
          </div>
          <div className="text-center">
            <p className="font-bold">VS</p>
            <p className="text-xs mt-3 bg-purple-200 text-purple-600 p-1 px-5 rounded-full border border-purple-600">
              PENDING
            </p>
          </div>
          <div className="team-container">
            <Avatar size="medium" type="rounded">
              <img src="/favicon.ico" alt="" />
            </Avatar>
            <p className="mt-2">Team 2</p>
          </div>
        </div>
        <div className="info-card__bottom-actions">
          <p>GROUP A</p>
          <p>20:00</p>
        </div>
      </div>
    </Card>
  );
};
