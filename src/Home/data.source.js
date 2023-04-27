import React from 'react';
export const Nav30DataSource = {
  wrapper: { className: 'header3 home-page-wrapper' },
  page: { className: 'home-page lghujw5fj2a-editor_css' },
  logo: {
    className: 'header3-logo',
    children:
      'https://maguaai-static-1313027815.cos.ap-beijing.myqcloud.com/assets/indexsite/logo.png',
  },
  Menu: {
    className: 'header3-menu',
    children: [
      {
        name: 'item1',
        className: 'header3-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <p>
                    <br />
                  </p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
    ],
  },
  mobileMenu: { className: 'header3-mobile-menu' },
};
export const Content40DataSource = {
  wrapper: { className: 'home-page-wrapper content4-wrapper' },
  page: { className: 'home-page content4 lghtxoc7ijm-editor_css' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <span>
              <p>探索AI世界，一起发现未来！</p>
            </span>
          </span>
        ),
        className: 'title-h1 lghued7wb7q-editor_css',
      },
    ],
  },
  video: {
    className: 'content4-video lghstx7158l-editor_css',
    children: {
      video:
        'https://maguaai-static-1313027815.cos.ap-beijing.myqcloud.com/assets/indexsite/%E5%B0%8F.mp4',
      image:
        'https://maguaai-static-1313027815.cos.ap-beijing.myqcloud.com/assets/indexsite/20230415-191421%20%281%29.png',
    },
  },
};
export const Feature20DataSource = {
  wrapper: { className: 'home-page-wrapper content2-wrapper' },
  OverPack: {
    className: 'home-page content2 lghv4n8tfxn-editor_css',
    playScale: [0.3, 0.3],
  },
  imgWrapper: { className: 'content2-img', md: 10, xs: 24 },
  img: {
    children:
      'https://maguaai-static-1313027815.cos.ap-beijing.myqcloud.com/assets/indexsite/%E4%BD%8D%E5%9B%BE.png',
    className: 'lghuvg5bh5-editor_css',
  },
  textWrapper: { className: 'content2-text', md: 10, xs: 24 },
  title: {
    className: 'content2-title lghv29z3u1-editor_css',
    children: (
      <span>
        <span>
          <span>
            <p>微信搜索“麻瓜AI”或</p>
            <p>扫描二维码即可体验</p>
          </span>
        </span>
      </span>
    ),
  },
  content: {
    className: 'content2-content',
    children: (
      <span>
        <span>
          <p>
            <br />
          </p>
        </span>
      </span>
    ),
  },
};
export const Footer00DataSource = {
  wrapper: {
    className: 'home-page-wrapper footer0-wrapper lghvj7hux7-editor_css',
  },
  OverPack: {
    className: 'home-page footer0 lghviwr217d-editor_css',
    playScale: 0.05,
  },
  copyright: {
    className: 'lghv436fxzk-editor_css copyright',
    children: (
      <span>
        <span>
          <span>
            <span>
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <blockquote>
                            <p>
                              <br />
                            </p>
                            <p>© 2023 麻瓜AI</p>
                            <a href="mailto:contact@maguaai.com"><p>联系方式：contact@maguaai.com</p></a>
                            <a href="https://beian.miit.gov.cn/"><p>京ICP备2023007485号-1</p></a>
                          </blockquote>
                          <p>
                            <br />
                          </p>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    ),
  },
};
