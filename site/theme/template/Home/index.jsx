import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'bisheng/router';
import { injectIntl } from 'react-intl';
import { Popover, Button, Row, Col } from 'antd';
import qrcode from './dantd-qrcode.png';
function getStyle() {
  return `
    .main-wrapper {
      padding: 0;
    }
    #header {
      box-shadow: none;
      width: 100%;
    }
    #header,
    #header .ant-select-selection,
    #header .ant-menu {
      background: transparent;
    }
  `;
}

const HomePage = props => {
  const addSeparater = str => {
    const arr = str.split('|');
    // arr.splice(1, 0 <span>|</span>)
    return [arr[0], <span key="divider" className="divider" />, arr[1]];
  };

  return (
    <DocumentTitle
      title={`DiDi Ant Design - ${props.intl.formatMessage({ id: 'app.home.slogan' })}`}
    >
      <div className="main-wrapper">
        <section className="home-s1">
          <div className="banner-wrapper">
            <div className="banner-text-wrapper">
              <h2 key="h2">DiDi Ant Design</h2>
              <p>
                一个基于
                <a href="https://ant.design/"> Antd-v3 </a>
                所封装的业务组件库
              </p>
              <div key="button1" className="start-button">
                <Link to={'/docs/introduce'}>
                  <Button type="primary" size="large">
                    开始使用
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="home-s2">
          <div className="wrapper">
            <h3>懂你所需</h3>
            <Row gutter={72} style={{ marginBottom: 80 }}>
              <Col span={12}>
                <img
                  src="https://gw.alipayobjects.com/zos/rmsportal/KUmyjoMxFFbjEdjiIWOw.png"
                  alt=""
                />
                <div className="des">
                  <div>组件丰富 | 功能全面</div>
                  <p>提供了 40+ 基础组件、覆盖各类场景，组件特性丰富、满足各种功能需求。</p>
                </div>
              </Col>
              <Col span={12}>
                <img
                  src="https://gw.alipayobjects.com/zos/rmsportal/hfFgCpcxpGjeAlXFFgyT.png"
                  alt=""
                />
                <div className="des">
                  <div>一步上手 | 按需加载</div>
                  <p>
                    上手足够简单，既可以一次加载所有代码、也可以只加载用到的某几个组件的代码、避免冗余。
                  </p>
                </div>
              </Col>
            </Row>
            <Row gutter={48}>
              <Col span={12}>
                <img
                  src="https://gw.alipayobjects.com/zos/rmsportal/nlUNcWIVLKoarLnWNaWS.png"
                  alt=""
                />
                <div className="des">
                  <div>体积小巧 | 性能出众</div>
                  <p>在不损失功能的基础上，尽量保证了单个组件的体积最小、性能最优。</p>
                </div>
              </Col>
              <Col span={12}>
                <img
                  src="https://gw.alipayobjects.com/zos/rmsportal/JjNULDGGwgOZmsZAqvjH.png"
                  alt=""
                />
                <div className="des">
                  <div>简易定制 | 多种风格</div>
                  <p>支持灵活的样式定制，简易生成多种风格，满足个性化产品需求。</p>
                </div>
              </Col>
            </Row>
          </div>
        </section>
        <section className="home-s3">
          <div className="wrapper">
            <h3>
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/EzhXjBHtavGDkTbewrvp.png"
                alt=""
              />
              Sketch UI Kit
            </h3>
            <p>
              我们为您提供丰富的 Sketch symbol 化的组件资源库，你可以使用资源库快速设计应用程序。
            </p>
            <a
              target="_blank"
              href="https://lanhuhu.com/web/#/item/project/board?type=share_mark&pid=b7a34bbb-2674-4243-969b-594ed7b06376&activeSectionId=&teamId=b8a59940-a697-49ff-89e6-83b5249b42cb&param=f62d8fb2-e98d-4023-bb3d-db0e366ccace"
            >
              <Button size="large" ghost>
                立即下载
              </Button>
            </a>
          </div>
        </section>
        <section className="home-s4">
          <div className="wrapper">
            <h3>联系我们</h3>
            <div className="img-wrapper">
              <a
                target="_blank"
                href="https://im.xiaojukeji.com/channel?uid=98456&token=1e75808b7e18a66748c676039a03a3d7&id=698874681877374976"
              >
                <img src={qrcode} alt="" />
              </a>
            </div>
          </div>
        </section>
        <style dangerouslySetInnerHTML={{ __html: getStyle() }} />
      </div>
    </DocumentTitle>
  );
};

export default injectIntl(HomePage);
