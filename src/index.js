import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Table } from "antd";
import { Resizable } from "react-resizable";

const ResizeableTitle = props => {
  const { onResize, width, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable width={width} height={0} onResize={onResize}>
      <th {...restProps} />
    </Resizable>
  );
};

class Demo extends React.Component {
  state = {
    columns: [
      {
        title: "Date",
        dataIndex: "date",
        width: 200
      },
      {
        title: "Amount",
        dataIndex: "amount",
        width: 100
      },
      {
        title: "Type",
        dataIndex: "type",
        width: 100
      },
      {
        title: "Note",
        dataIndex: "note",
        width: 100
      },
      {
        title: "Action",
        key: "action",
        render: () => <a href="javascript:;">Delete</a>
      }
    ]
  };

  components = {
    header: {
      cell: ResizeableTitle
    }
  };

  data = [
    {
      key: 0,
      date: "2018-02-11",
      amount: 120,
      type: "income",
      note: "transfer"
    },
    {
      key: 1,
      date: "2018-03-11",
      amount: 243,
      type: "income",
      note: "transfer"
    },
    {
      key: 2,
      date: "2018-04-11",
      amount: 98,
      type: "income",
      note: "transfer"
    },
    {
      key: 3,
      date: "2018-02-11",
      amount: 120,
      type: "income",
      note: "transfer"
    },
    {
      key: 4,
      date: "2018-03-11",
      amount: 243,
      type: "income",
      note: "transfer"
    },
    {
      key: 5,
      date: "2018-04-11",
      amount: 98,
      type: "income",
      note: "transfer"
    },
    {
      key: 6,
      date: "2018-02-11",
      amount: 120,
      type: "income",
      note: "transfer"
    },
    {
      key: 7,
      date: "2018-03-11",
      amount: 243,
      type: "income",
      note: "transfer"
    },
    {
      key: 8,
      date: "2018-04-11",
      amount: 98,
      type: "income",
      note: "transfer"
    },
    {
      key: 9,
      date: "2018-02-11",
      amount: 120,
      type: "income",
      note: "transfer"
    },
    {
      key: 10,
      date: "2018-03-11",
      amount: 243,
      type: "income",
      note: "transfer"
    },
    {
      key: 11,
      date: "2018-04-11",
      amount: 98,
      type: "income",
      note: "transfer"
    },
    {
      key: 12,
      date: "2018-04-11",
      amount: 98,
      type: "income",
      note: "transfer"
    },
    {
      key: 13,
      date: "2018-02-11",
      amount: 120,
      type: "income",
      note: "transfer"
    },
    {
      key: 14,
      date: "2018-03-11",
      amount: 243,
      type: "income",
      note: "transfer"
    },
    {
      key: 15,
      date: "2018-04-11",
      amount: 98,
      type: "income",
      note: "transfer"
    },
    {
      key: 16,
      date: "2018-04-11",
      amount: 98,
      type: "income",
      note: "transfer"
    },
    {
      key: 17,
      date: "2018-02-11",
      amount: 120,
      type: "income",
      note: "transfer"
    },
    {
      key: 18,
      date: "2018-03-11",
      amount: 243,
      type: "income",
      note: "transfer"
    },
    {
      key: 19,
      date: "2018-04-11",
      amount: 98,
      type: "income",
      note: "transfer"
    },
    {
      key: 20,
      date: "2018-03-11",
      amount: 243,
      type: "income",
      note: "transfer"
    },
    {
      key: 21,
      date: "2018-04-11",
      amount: 98,
      type: "income",
      note: "transfer"
    }
  ];

  handleResize = index => (e, { size }) => {
    this.setState(({ columns }) => {
      const nextColumns = [...columns];
      nextColumns[index] = {
        ...nextColumns[index],
        width: size.width
      };
      return { columns: nextColumns };
    });
  };

  componentDidMount() {
    setTimeout(() => {
      // window.print();
    }, 1000);
  }

  render() {
    const columns = this.state.columns.map((col, index) => ({
      ...col,
      onHeaderCell: column => ({
        width: column.width,
        onResize: this.handleResize(index)
      })
    }));

    return (
      <Table
        bordered
        components={this.components}
        columns={columns}
        dataSource={this.data}
        pagination={{ pageSize: 50 }}
      />
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById("container"));
