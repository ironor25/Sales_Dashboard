import { SearchOutlined, BarsOutlined, PlusOutlined } from '@ant-design/icons';
import { FaBars } from "react-icons/fa";
const Header = () => {
  return (
    <header>
      <div className="search-container">
     
        <SearchOutlined className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder='Try searching "insights"'
        />
      </div>

      <div className="header-actions">
        <div className='flex gap-2 bg-white rounded-2xl h-full'>
        <button className="icon-btn">
          <FaBars/>
        </button>
        <div
          className="avatar"
          style={{
            backgroundImage: "url('https://i.pravatar.cc/150?u=33')",
            width: '30px',
            height: '30px',
            border: 'none',
            marginTop: "3px"
          }}

          
        >
          </div>
          
        </div>
        <button className="icon-btn pink">
          <PlusOutlined />
        </button>
      </div>
    </header>
  );
};

export default Header;
