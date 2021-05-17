import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Button } from 'antd';

const PortfolioComponent = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h1>PORTIFOLIO</h1>
      <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
      <h3>Projects</h3>
      <div className="portfolio-button">
    <Button type="primary" ghost>
      All
    </Button>
    <Button ghost>Finished</Button>
    <Button type="dashed" ghost>
      Current
    </Button>
  </div>
      
</div>
  );
};
export default PortfolioComponent;