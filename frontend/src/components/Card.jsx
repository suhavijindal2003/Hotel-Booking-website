import Image1 from '../assets/hottub.jpg';
import Image2 from '../assets/pool.jpg';
import Image4 from '../assets/beach.jpg';
// import Image4 from '../assets/OIP.jpg';

const cardData = [
  {
    imageSrc: Image1,
    altText: "Hot Tub",
    title: "The Ultimate Father's Day Gift: The Grandium Hotel",
    description: "Ne duo laudem complectitur, et dicta scripserit his. Cu maiorum scriptorem sea, sea graecis temporibus ut"
  },
  {
    imageSrc: Image2,
    altText: "Pool",
    title: "Top Events in London This February",
    description: "Ne duo laudem complectitur, et dicta scripserit his. Cu maiorum scriptorem sea, sea graecis temporibus ut"
  },
  {
    imageSrc: Image4,
    altText: "Couple",
    title: "A Walk from The Grandium Hotel Around",
    description: "Ne duo laudem complectitur, et dicta scripserit his. Cu maiorum scriptorem sea, sea graecis temporibus ut"
  }
];

const Card = ({ imageSrc, altText, title, description }) => (
  <div className="w-[400px] h-[550px] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto my-4 bg-white shadow-lg rounded overflow-hidden">
    <img src={imageSrc} alt={altText} className="w-full h-3/5 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-serif text-center mb-2">{title}</h3>
      <p className="text-base text-center">{description}</p>
    </div>
  </div>
);

const CardList = () => (
  <div className="flex flex-wrap justify-center items-center min-h-screen bg-gray-200 p-4">
    {cardData.map((card, index) => (
      <Card
        key={index}
        imageSrc={card.imageSrc}
        altText={card.altText}
        title={card.title}
        description={card.description}
      />
    ))}
  </div>
);

export default CardList;
