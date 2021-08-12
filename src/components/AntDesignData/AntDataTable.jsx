/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState,useEffect} from 'react'
import { Table, Input, InputNumber, Popconfirm, Form, Typography,Modal} from 'antd';

// import AntDataChart from './Echart/AntDataChart'

const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
    }) => {
      const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
      return (
        <td {...restProps}>
          {editing ? (
            <Form.Item
              name={dataIndex}
              style={{
                margin: 0,
              }}
              rules={[
                {
                  required: true,
                  message: `Please Input ${title}!`,
                },
              ]}
            >
              {inputNode}
            </Form.Item>
          ) : (
            children
          )}
        </td>
      );
    };

function AntDataTable({jsonData,dark}) {

  const [form] = Form.useForm();
  const [data, setData] = useState();
  const [editingKey, setEditingKey] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData,setModalData] = useState(null)
  // const nodeRef = React.useRef(null);
  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

    const handleDelete = (key) => {
      const dataSource = [...data];
      setData(
        dataSource.filter((item) => item.key !== key),
      );
    };
  
  const hoverColor=(index,color)=>{
    var element = document.querySelector(`tr[data-row-key='${index}']`)
    const tag = element.getElementsByTagName('a')
    for(let item of tag){
        if(item.innerHTML === 'Delete'){
          item.style.color = color
        }
    }
  }
  

  //modal operation functions
  const showModal = (record) => {
    setModalData(record)
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  const columns = [
    // {title: "IDX", dataIndex: "IDX", editable: false},
    // {title: "CONTEXID", dataIndex: "CONTEXID", editable: false},
    {title: "PIECEID", dataIndex: "PIECEID", editable: false},
    // {title: "TIMETAG", dataIndex: "TIMETAG", editable: false},
    {title: "UCL", dataIndex: "UCL", editable: true},
    {title: "LCL", dataIndex: "LCL", editable: true},
    {title: "VALUE", dataIndex: "VALUE", editable: true},
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a href='javascript:;' onClick={() => save(record.key)}style={{ marginRight: 8}}>
              Save
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            Edit
          </Typography.Link>
        );
      },
    },
    {
      title: 'Detail',
      dataIndex: 'Detail',
      render: (_, record) =>{
        return (
          <>
          <a href='#' onClick={() =>showModal(record)}>
            show detail
          </a>
            {
              isModalVisible?(
                <Modal title="Detail Form" visible={isModalVisible}  onOk={handleOk} onCancel={handleCancel}>
                    {Object.keys(modalData).map((item,key)=>(
                      <p key={key}>{item}: {modalData[item]}</p>
                    ))}
                </Modal>
              ):null
            }
          </>
        )
      }
    },
    {
      title: 'Delete',
      dataIndex: 'Delete',
      render: (_, record) =>
        data.length >= 1 ? (
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
            <a onMouseEnter={() => {
                  hoverColor(record.key,"red")
              }} 
              onMouseLeave={() => hoverColor(record.key,"black")}>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ]

  const mergedColumns = columns.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: (record) => ({
          record,
          inputType: 'number',
          dataIndex: col.dataIndex,
          title: col.title,
          editing: isEditing(record),
        }),
      };
    });
    
  useEffect(() => {
    if(!data && jsonData){
        jsonData.forEach((value, index) => {value.key=index.toString()})
        setData(jsonData)
    }
  },[data, jsonData])

  return (
    <div style={{marginTop:"2%"}}>
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
          }}
        />
      </Form>
    </div>
  )
}


export default AntDataTable
