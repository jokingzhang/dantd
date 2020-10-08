import React from 'react';
import { Tag, Divider, Button } from 'antd';
import '@testing-library/jest-dom/extend-expect';
import { render, wait, waitForElement, fireEvent, cleanup } from '@testing-library/react';
import { FetchMock } from '@react-mock/fetch';
import DataTable from '../DataTable';
const prefixCls = 'dantd-data-table';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    filters: [
      { text: 'John Brown', value: 'John Brown' },
      { text: 'Jim Green', value: 'Jim Green' },
      { text: 'Joe Black', value: 'Joe Black' },
    ],
    apiFilter: {
      name: 'name',
    },
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: true,
    apiSorter: {
      name: 'age_order',
      ascend: 'asc',
      descend: 'desc',
    },
    key: 'age',
    render: (text) => <span data-testid="column-age">{text}</span>,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    apiSearch: {
      name: 'address',
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
const tableData = [
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

const tableAscendData = [
  {
    key: '3',
    name: 'Joe Black',
    age: 23,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
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
];

const tableDescendData = [
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 23,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const tableFilterData = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
];
const url = '/list';
const mockDatas = [
  {
    matcher: '/list?cur_page=1&page_size=10',
    response: tableData,
  },
  {
    matcher: '/list?age_order=asc&cur_page=1&page_size=10',
    response: tableAscendData,
  },
  {
    matcher: '/list?age_order=desc&cur_page=1&page_size=10',
    response: tableDescendData,
  },
  {
    matcher: '/list?cur_page=1&name=John%20Brown&page_size=10',
    response: tableFilterData,
  },
  {
    matcher: '/list?address=New%20York&cur_page=1&page_size=10',
    response: tableFilterData,
  },
  {
    matcher: '/list?cur_page=1&page_size=10&search=New%20York',
    response: tableFilterData,
  },
];

const renderTable = (renderProps) => {
  return (
    <FetchMock mocks={mockDatas}>
      <DataTable
        url={renderProps.url}
        columns={columns}
        apiCallback={(data) => {
          // data
          // total
          return {
            data,
            total: data.length,
          };
        }}
        pageParams={{
          curPageName: 'cur_page',
          pageSizeName: 'page_size',
          startPage: 1,
        }}
        {...renderProps}
      />
    </FetchMock>
  );
};

describe('DataTable Testing', () => {
  afterEach(cleanup);
  // works
  it('校验分页信息', async () => {
    const { getByText } = render(renderTable({ url }));
    await waitForElement(() => getByText('Total 3 Items'));
    await waitForElement(() => getByText('1'));
    await waitForElement(() => getByText('10 / page'));
  });

  // leftHeader
  it('左边表头 leftHeader 渲染正常', async () => {
    const leftHeaderStr = '表格标题';
    const { getByTestId } = render(
      renderTable({
        leftHeader: leftHeaderStr,
        url,
      }),
    );
    const element = await waitForElement(() => getByTestId('left-header'));

    expect(element).toHaveTextContent(leftHeaderStr);
    expect(element).toHaveClass(
      `${prefixCls}-header-filter-left`,
      `${prefixCls}-header-filter-left-minh`,
    );
  });

  // apiSorter
  it('排序功能 apiSorter 正常', async () => {
    const { findByTitle, findByText, getAllByTestId, getByTestId } = render(
      renderTable({
        url,
      }),
    );
    const element = await findByTitle('Sort');
    // 升序
    fireEvent.click(element);

    expect(await findByText('Age: Ascend'));
    const ascendingElements = await waitForElement(() => getAllByTestId('column-age'));
    const ascendingList = ['23', '32', '42'];

    ascendingElements.forEach((ascendingEle, ascendingIdx) => {
      expect(ascendingEle).toHaveTextContent(ascendingList[ascendingIdx]);
    });
    // 降序
    fireEvent.click(element);
    expect(await findByText('Age: Descend')).toBeVisible();
    const descendingElements = await waitForElement(() => getAllByTestId('column-age'));
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

  // apiFilter
  it('过滤功能 apiFilter 正常', async () => {
    const { getByText, getByTestId, getAllByRole, findByTestId } = render(
      renderTable({
        url,
      }),
    );
    const element = await findByTestId('icon-filter');

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

  // apiSearch + searchRender
  it('搜索功能 apiSearch + searchRender 正常', async () => {
    const { getByText, getByTestId } = render(
      renderTable({
        url,
      }),
    );
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
    const { findByTitle, getByTestId } = render(
      renderTable({
        url,
      }),
    );
    const element = await findByTitle('Sort');
    // 升序
    fireEvent.click(element);
    const rightHeaderEle = await waitForElement(() => getByTestId('right-header'));
    expect(rightHeaderEle).toHaveClass(`${prefixCls}-header-filter-right`);
  });

  // filterType - line
  it('filterType - line 参数', async () => {
    const { findByTitle, getByTestId } = render(
      renderTable({
        url,
        filterType: 'line',
      }),
    );
    const element = await findByTitle('Sort');
    // 升序
    fireEvent.click(element);
    const rightHeaderEle = await waitForElement(() => getByTestId('right-header'));
    expect(rightHeaderEle).toHaveClass(`${prefixCls}-header-filter-line`);
  });

  // showReloadBtn
  it('showReloadBtn - default', async () => {
    const { findByTestId } = render(
      renderTable({
        url,
      }),
    );
    expect(await findByTestId('reload-btn')).toBeVisible();
  });

  it('showReloadBtn - false', async () => {
    const { queryByTestId, getByText } = render(
      renderTable({
        url,
        showReloadBtn: false,
      }),
    );
    await waitForElement(() => getByText('Total 3 Items'));
    expect(queryByTestId('reload-btn')).not.toBeInTheDocument();
  });

  // customHeader
  it('customHeader - default', async () => {
    const { queryByTestId, getByText } = render(
      renderTable({
        url,
      }),
    );
    await waitForElement(() => getByText('Total 3 Items'));
    expect(queryByTestId('custom-header')).not.toBeInTheDocument();
  });

  it('customHeader - 传参', async () => {
    const { findByTestId } = render(
      renderTable({
        url,
        customHeader: <Button>Test</Button>,
      }),
    );
    expect(await findByTestId('custom-header')).toBeVisible();
  });

  // search
  it('默认搜索功能正常', async () => {
    const { getByText, getByTestId } = render(
      renderTable({
        url,
        searchParams: {
          apiName: 'search',
          placeholder: '测试文案-placeholder',
        },
      }),
    );

    const searchInputEle = await waitForElement(() => getByTestId('search-input'));
    fireEvent.change(searchInputEle, { target: { value: 'New York' } });
    await waitForElement(() => getByText('Total 1 Items'));
  });
});
