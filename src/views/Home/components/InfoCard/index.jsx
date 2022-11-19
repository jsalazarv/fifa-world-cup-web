import { Card } from '../../../../components/Card/index.jsx';
import { Avatar } from '../../../../components/Avatar';
import './styles.css';

export const InfoCard = ({ data = {} }) => {
  const pictureFormatter = (country) => {
    return country?.pictureUrl.replace(
      /flags-{format}-{size}/i,
      `flags-sq-4/${country?.countryId}?tx=c_fill,g_auto,q_auto,w_50`,
    );
  };

  const onOpenDialog = () => {
    console.log('OPEN DIALOG');
  };

  return (
    <Card className="info-card" type="rounded">
      <div className="info-card__container">
        <div className="info-card__top-actions">
          <button className="text-purple-600" onClick={() => onOpenDialog()}>
            Go
          </button>
        </div>
        <div className="info-card__body">
          <div className="team-container">
            <div className="goals-container">
              <h2>0</h2>
            </div>
            <Avatar size="medium" type="rounded">
              <img src={pictureFormatter(data.home)} alt="" />
            </Avatar>
            <p className="mt-2">{data.home?.countryId}</p>
          </div>
          <div className="text-center">
            <p className="font-bold">VS</p>
            <p className="text-xs mt-3 bg-purple-200 text-purple-600 p-1 px-5 rounded-full border border-purple-600">
              PENDING
            </p>
          </div>
          <div className="team-container">
            <div className="goals-container">
              <h2>2</h2>
            </div>
            <Avatar size="medium" type="rounded">
              <img src={pictureFormatter(data.away)} alt="" />
            </Avatar>
            <p className="mt-2">{data.away?.countryId}</p>
          </div>
        </div>
        <div className="info-card__bottom-actions">
          <p>GROUP A</p>
          <p>{data.date}</p>
        </div>
      </div>
    </Card>
  );
};
