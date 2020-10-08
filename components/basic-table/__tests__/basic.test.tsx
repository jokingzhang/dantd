import React from 'react';
import { Tag, Divider, Typography, Button } from 'antd';
import '@testing-library/jest-dom/extend-expect';
import { render, wait, waitForElement, fireEvent, cleanup } from '@testing-library/react';
import Table from '../BasicTable';

const { Paragraph } = Typography;
const prefixCls = 'dantd-table';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    commonFilter: true,
    render: (text) => <a href="test">{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    commonSorter: true,
    key: 'age',
    render: (text) => <span data-testid="column-age">{text}</span>,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    commonSearch: true,
    searchRender(value: any, row: any, index: any, highlightNode: any) {
      const obj = {
        children: (
          <div style={{ minWidth: 64 }}>
            <Paragraph copyable={{ text: value }}>{highlightNode}</Paragraph>
          </div>
        ),
      };
      return obj;
    },
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags) => (
      <span>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag data-testid="button-up" color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    dataIndex: 'action',
    render: (text, record) => (
      <span>
        <a href="test">Invite {record.name}</a>
        <Divider type="vertical" />
        <a href="test">Delete</a>
      </span>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 23,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

// it.skip('校验快照', () => {
//   const { asFragment } = render(<Table columns={columns} dataSource={data} />);
//   expect(asFragment()).toMatchSnapshot();
// });
describe('Basic Tabel Testing', () => {
  afterEach(cleanup);
  // 分页信息展示
  it('校验分页信息', () => {
    const { getByText } = render(<Table columns={columns} dataSource={data} />);
    getByText('Total 3 Items');
    getByText('1');
    getByText('10 / page');
  });

  // leftHeader
  it('左边表头 leftHeader 渲染正常', () => {
    const leftHeaderStr = '表格标题';
    const { getByTestId } = render(
      <Table leftHeader={leftHeaderStr} columns={columns} dataSource={data} />,
    );
    const element = getByTestId('left-header');

    expect(element).toHaveTextContent(leftHeaderStr);
    expect(element).toHaveClass(
      `${prefixCls}-header-filter-left`,
      `${prefixCls}-header-filter-left-minh`,
    );
  });

  // commonSorter
  it('排序功能 commonSorter 正常', async () => {
    const { getByTitle, getByText, getAllByTestId, getByTestId } = render(
      <Table columns={columns} dataSource={data} />,
    );
    const element = getByTitle('Sort');
    // 升序
    fireEvent.click(element);

    expect(getByText('Age: Ascend')).toBeVisible();
    const ascendingElements = getAllByTestId('column-age');
    const ascendingList = ['23', '32', '42'];

    ascendingElements.forEach((ascendingEle, ascendingIdx) => {
      expect(ascendingEle).toHaveTextContent(ascendingList[ascendingIdx]);
    });
    // 降序
    fireEvent.click(element);
    await waitForElement(() => getByText('Age: Descend'));
    expect(getByText('Age: Descend')).toBeVisible();
    const descendingElements = getAllByTestId('column-age');
    const descendingList = ['42', '32', '23'];

    descendingElements.forEach((descendingEle, descendingIdx) => {
      expect(descendingEle).toHaveTextContent(descendingList[descendingIdx]);
    });

    // 正常
    fireEvent.click(element);
    await wait(() => expect(getByTestId('right-header')).toBeEmpty(), {
      timeout: 1000,
    });
  });

  // commonFilter
  it('过滤功能 commonFilter 正常', async () => {
    const { getByText, getByTestId, getAllByRole } = render(
      <Table columns={columns} dataSource={data} />,
    );
    const element = getByTestId('icon-filter');

    // 过滤
    fireEvent.click(element);
    const menuItems = await waitForElement(() => getAllByRole('menuitem'));
    fireEvent.click(menuItems[0]);
    const okBtn = await waitForElement(() => getByText('OK'));
    fireEvent.click(okBtn);
    await waitForElement(() => getByText('Total 1 Items'));

    // 重置
    const clearBtn = await waitForElement(() => getByTestId('btn-clearall'));
    fireEvent.click(clearBtn);
    await waitForElement(() => getByText('Total 3 Items'));
  });

  // commonSearch + searchRender
  it('搜索功能 commonSearch + searchRender 正常', async () => {
    const { getByText, getByTestId } = render(<Table columns={columns} dataSource={data} />);
    const searchBtnEle = await waitForElement(() => getByTestId('icon-search'));
    // 搜索
    fireEvent.click(searchBtnEle);
    const searchInputEle = await waitForElement(() => getByTestId('filter-search-input'));
    fireEvent.change(searchInputEle, { target: { value: 'New York' } });
    const searchOkEle = await waitForElement(() => getByTestId('search-btn-ok'));
    fireEvent.click(searchOkEle);
    await waitForElement(() => getByText('Total 1 Items'));

    // 重置
    const clearBtn = await waitForElement(() => getByTestId('btn-clearall'));
    fireEvent.click(clearBtn);
    await waitForElement(() => getByText('Total 3 Items'));
  });

  // filterType - half
  it('filterType - half 参数', async () => {
    const { getByTitle, getByTestId } = render(
      <Table filterType="half" columns={columns} dataSource={data} />,
    );
    const element = getByTitle('Sort');
    // 升序
    fireEvent.click(element);
    const rightHeaderEle = await waitForElement(() => getByTestId('right-header'));
    expect(rightHeaderEle).toHaveClass(`${prefixCls}-header-filter-right`);
  });

  // filterType - line
  it('filterType - line 参数', async () => {
    const { getByTitle, getByTestId } = render(
      <Table filterType="line" columns={columns} dataSource={data} />,
    );
    const element = getByTitle('Sort');
    // 升序
    fireEvent.click(element);
    const rightHeaderEle = await waitForElement(() => getByTestId('right-header'));
    expect(rightHeaderEle).toHaveClass(`${prefixCls}-header-filter-line`);
  });

  // showSearch
  it('showSearch - default', async () => {
    const { queryByTestId } = render(<Table columns={columns} dataSource={data} />);
    expect(queryByTestId('search-input')).toBeVisible();
  });

  it('showSearch - false', async () => {
    const { queryByTestId } = render(
      <Table showSearch={false} columns={columns} dataSource={data} />,
    );
    expect(queryByTestId('search-input')).toBeNull();
  });

  // showReloadBtn
  it('showReloadBtn - default', async () => {
    const { queryByTestId } = render(<Table columns={columns} dataSource={data} />);
    expect(queryByTestId('reload-btn')).toBeVisible();
  });

  it('showReloadBtn - false', async () => {
    const { queryByTestId } = render(
      <Table showReloadBtn={false} columns={columns} dataSource={data} />,
    );
    expect(queryByTestId('reload-btn')).toBeNull();
  });

  // customHeader
  it('customHeader - default', async () => {
    const { queryByTestId } = render(<Table columns={columns} dataSource={data} />);
    expect(queryByTestId('custom-header')).toBeNull();
  });

  it('customHeader - 传参', async () => {
    const { queryByTestId } = render(
      <Table customHeader={<Button>Test</Button>} columns={columns} dataSource={data} />,
    );
    expect(queryByTestId('custom-header')).toBeVisible();
  });

  // searchPlaceholder
  it('searchPlaceholder - 传参', async () => {
    const { queryByPlaceholderText } = render(
      <Table searchPlaceholder={'测试文案-placeholder'} columns={columns} dataSource={data} />,
    );
    expect(queryByPlaceholderText('测试文案-placeholder')).toBeVisible();
  });

  // search
  it('默认搜索功能正常', async () => {
    const { getByText, getByTestId } = render(<Table columns={columns} dataSource={data} />);

    const searchInputEle = await waitForElement(() => getByTestId('search-input'));
    fireEvent.change(searchInputEle, { target: { value: 'New York' } });
    await waitForElement(() => getByText('Total 1 Items'));
  });
});
