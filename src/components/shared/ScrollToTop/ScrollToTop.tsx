import { FaArrowUp } from 'react-icons/fa';

function ScrollToTop() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return (
    <button
      onClick={handleScrollToTop}
      className="fixed bottom-4 right-4 bg-gray-200 rounded-full p-3"
    >
      <FaArrowUp size={16} />
    </button>
  );
}

export default ScrollToTop;
