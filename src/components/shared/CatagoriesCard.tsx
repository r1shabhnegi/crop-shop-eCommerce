import { Link } from 'react-router-dom';

const CatagoriesCard = ({ item }: { item: string }) => {
  return (
    <Link
      to={item}
      className='w-72'>
      <p className='font-medium border w-48 h-36 flex items-center justify-center border-black rounded-lg p-5 bg-gray-200'>
        {item}
      </p>
    </Link>
  );
};
export default CatagoriesCard;
