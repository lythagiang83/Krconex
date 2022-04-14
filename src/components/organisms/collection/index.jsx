import { COLLECTION_LIST } from '../../../interface/constant';
import { Description } from '../../atoms/description';
import { Title } from '../../atoms/title';

export const Collection = ({ className = '' }) => {
  return (
    <div className={`o-collection ${className}`}>
      <div className='o-collection__bg'>
        <Title>Trending Collection</Title>
        <Description>Check out most tredning collections of this month</Description>
        <ul className='o-collection__item'>
          {COLLECTION_LIST.map((item) => (
            <li key={item.id} className='o-collection__product'>
              <img src={item.image} alt='' />
              <span className='o-collection__name'>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
